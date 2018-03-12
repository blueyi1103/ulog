import babel from 'rollup-plugin-babe';

export default {
	input: 'src/index.js',
	output: {
		file: 'out/ulog.js',
		format: 'life',
		sourcemap: 'true',
	},
	plugins: [
		babel({
			exclude: 'node_modules/**',
		})
	],
};