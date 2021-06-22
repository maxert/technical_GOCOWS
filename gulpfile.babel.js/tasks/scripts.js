/*
 * @title Scripts
 * @description A task to concatenate and compress js files via webpack.
 */

// Dependencies
import { src, dest, series } from 'gulp';
import gulpif from 'gulp-if';
import webpack from 'webpack';
import gulpWebpack from 'webpack-stream';
import gulpEslint from 'gulp-eslint';
import plumber from 'gulp-plumber';
import errorHandler from '../util/errorHandler.js';
import { isProd } from "../util/env.js"

// Config
import { paths } from "../config";

// Task
export function esTranspile() {
  return src(paths.scripts.src)
    .pipe(plumber({errorHandler}))
      .pipe(dest(paths.scripts.dest))
    .pipe(gulpWebpack(require('../../webpack.config.js'), webpack))
}

export function esLint() {
  return src(paths.scripts.src)
    .pipe(gulpEslint())
    .pipe(gulpEslint.format())
    .pipe(gulpif(isProd, gulpEslint.failAfterError()))
}

export const scripts = series(esLint, esTranspile);
