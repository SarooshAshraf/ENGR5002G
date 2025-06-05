module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [require.resolve('nativewind/babel'), {}] // Plugin as an array with empty options
    ],
  };
};
