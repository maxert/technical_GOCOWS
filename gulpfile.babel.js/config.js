/*
 * @title Config
 */

// Paths
export const paths = {
  src: './src',
  dest: './dist',
  deploy: './dist/**/*',
  styles: {
    // src: ['src/styles/main.scss', 'src/styles/reset.css'],
    src: ['src/styles/main.scss'],
    watch: 'src/styles/**/*.scss',
    modules: 'src/modules/**/*.scss',
    dest: 'dist/css',
    lint: 'src/styles/**/*.s+(a|c)ss'
  },
  scripts: {
    src: ['./src/scripts/app.js'],
    watch: 'src/scripts/**/*.js',
    modules: 'src/modules/**/*.js',
    dest: 'dist/js',
  },
  templates: {
    src: 'src/templates/pages/*.{twig,html}',
    watch: 'src/templates/**/*.{twig,html}',
    modules: 'src/modules/**/*.{twig,html}',
    dest: 'dist/'
  },
  library:{
    destLibrary: 'dist/library',
    libraryCopy: 'src/library/**/*',
  },
  assets: {
    src: 'src/assets/**/*',
    dest: 'dist/assets'
  },
  copy: {
    src: ['src/robots.txt', "src/jsonfile.json"],
    dest: 'dist/'
  }
};
