import * as shell from 'gulp-shell'

export const mocha = shell.task(['mocha'])
export const nyc = shell.task(['nyc mocha'])
