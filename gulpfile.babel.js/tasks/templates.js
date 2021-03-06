/*
 * @title Templates
 * @description A task to compile templates via Twig.js
 */

// Dependencies
import {src, dest} from 'gulp';
import plumber from 'gulp-plumber';
import twig from 'gulp-twig';
import errorHandler from '../util/errorHandler.js';
import beautify from 'gulp-jsbeautifier';
// Config
import {paths} from "../config";

// Task
import rep from "gulp-replace-image-src";

export function templates() {
    return src(paths.templates.src)
        .pipe(plumber({errorHandler}))
        .pipe(twig())
        .pipe(beautify({
            indent_size: 2
        }))
        .pipe(rep({
            prependSrc: './assets/img/',
            keepOrigin: true
        }))
        .pipe(dest(paths.templates.dest))
};
