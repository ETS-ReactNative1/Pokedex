module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          'alias': {
            '@routes': './src/routes',
            '@navigator': './src/navigator',
            '@styles': './src/styles',
            '@components': './src/components',
            '@assets': './src/assets',
            '@redux': './src/redux',
            '@functions': './src/functions'
          }
        }
      ]
    ]
  };
};
