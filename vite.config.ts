import { reactRouter } from '@react-router/dev/vite';
import autoprefixer from 'autoprefixer';
import tailwindcss from 'tailwindcss';
import { defineConfig, loadEnv } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig(({ mode }) => {
	// Load env file based on `mode` in the current working directory.
	// Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
	const env = loadEnv(mode, process.cwd(), '');

	return {
		css: {
			postcss: {
				plugins: [tailwindcss, autoprefixer],
			},
		},
		plugins: [reactRouter(), tsconfigPaths()],
		server: {
			port: Number.parseInt(env.PORT || '5173'),
		},
	};
});
