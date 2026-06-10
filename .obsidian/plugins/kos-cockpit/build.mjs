import * as esbuild from 'esbuild';
import { statSync } from 'fs';

const production = process.argv.includes('--production');
const watch = process.argv.includes('--watch');

const config = {
  entryPoints: ['src/main.js'],
  bundle: true,
  format: 'cjs',
  target: 'es2021',
  outfile: 'main.js',
  external: ['obsidian'],
  sourcemap: production ? false : 'inline',
  minify: production,
  treeShaking: true,
};

async function build() {
  if (watch) {
    const ctx = await esbuild.context(config);
    await ctx.watch();
    console.log('[watch] KOS Cockpit — watching for changes...');
  } else {
    const result = await esbuild.build(config);
    if (result.errors.length > 0) {
      console.error('Build failed:', result.errors);
      process.exit(1);
    }
    const bytes = statSync('main.js').size;
    console.log(`Build complete: main.js (${bytes} bytes)`);
  }
}

build();
