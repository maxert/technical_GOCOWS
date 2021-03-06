/*
 * @title Copy
 * @description A task to copy font files to the output directory.
 */

// Dependencies
import { src, dest } from 'gulp';
import changed from "gulp-changed";

// Config
import { paths } from "../config";

// Task

export function copyLibrary(){
    return src(paths.library.libraryCopy)
        .pipe(changed(paths.library.destLibrary))
        .pipe(dest(paths.library.destLibrary))
}
export function copy() {
  return src(paths.copy.src)
    .pipe(changed(paths.copy.dest))
    .pipe(dest(paths.copy.dest))
 }
