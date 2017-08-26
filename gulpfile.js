(function () {
    "use strict";

    const gulp = require('gulp');
    const path = require("path");
    const argv = require("yargs").argv;
    const browserify = require("browserify");
    const watchify = require("watchify");
    const rename = require("gulp-rename");
    const uglify = require("gulp-uglify");
    const plumber = require("gulp-plumber");
    const vueify = require("vueify");
    const babelify = require("babelify");
    const envify = require("envify");
    const fse = require("fs-extra");
    const cond = require("gulp-cond");
    const gutil = require("gulp-util");
    const buffer = require("vinyl-buffer");

    const source = require("vinyl-source-stream");
    const sourcemaps = require("gulp-sourcemaps");

    process.env.NODE_ENV = argv.prod ? "production" : "development";

    let currentContext = "";
    let modulePath;
    let browserifyInstance;
    let isProd = process.env.NODE_ENV === "production";


    let methods = {
        "bundleJS": function () {
            if (isProd) {
                fse.remove(path.join(modulePath, "dist/js/bundle.js.map"));
            }
            browserifyInstance.bundle()
                .on("error", gutil.log.bind(gutil, "Browserify Error"))
                .pipe(source(path.join(modulePath, "js/main.js")))
                .pipe(cond(!isProd, plumber()))
                .pipe(buffer())
                .pipe(rename("bundle.js"))
                .pipe(cond(isProd, uglify()))
                .pipe(cond(!isProd, sourcemaps.init({loadMaps: true})))
                .pipe(cond(!isProd, sourcemaps.write("./")))
                .pipe(gulp.dest(path.join(modulePath, "dist/js/")));
            return isProd ? gutil.log("FINISHED PRODUCTION BUILD") : gutil.log("FINISHED DEV BUILD");
        }
    };

    gulp.task("js", function () {
        modulePath = "public"; //currentContext ? currentContext : path.join("client", (argv.module || argv.m || currentContext || "main") + "_module");
        browserifyInstance = browserify({
            "entries": path.join(modulePath, "js/main.js"),
            "noParse": ["vue.js"],
            "plugin": argv.w || argv.watch ? [watchify] : [],
            "cache": {},
            "packageCache": {},
            "debug": true
        }).transform("envify", {
            "global": true,
            "NODE_ENV": process.env.NODE_ENV
        })
            .transform(babelify)
            .transform(vueify)
            .on("update", methods.bundleJS);
        return methods.bundleJS();
    });

}());