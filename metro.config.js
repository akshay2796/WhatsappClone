/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */
const { getDefaultConfig } = require('metro-config');

module.exports = (async () => {
	const {
		resolver: { sourceExts },
	} = await getDefaultConfig();
	return {
		resolver: {
			sourceExts: [
				...sourceExts,
				'scss',
				'sass',
				'css',
				'jsx',
				'js',
				'tsx',
				'ts',
			],
		},
		transformer: {
			babelTransformerPath: require.resolve('./css-transformer.js'),
			getTransformOptions: async () => ({
				transform: {
					experimentalImportSupport: false,
					inlineRequires: false,
				},
			}),
		},
	};
})();
