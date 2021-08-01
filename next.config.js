module.exports = {
  reactStrictMode: true,
  webpack: (config, { dev }) => {
    if (dev) {
      config.module.rules.push({
        test: [/\.js$/, /\.ts$/, /\.tsx$/],
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          // eslint options (if necessary)
        }
      })
    }
    return config
  }
}
