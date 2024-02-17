/** @type {import('next').NextConfig} */
const path = require('path');
const withSass = require('@zeit/next-sass');
const withPlugins = require('next-compose-plugins');
const withImages = require('next-images');
const { i18n } = require('./next-i18next.config');

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['via.placeholder.com', 'pessoal-arthur.s3.amazonaws.com']
  }
}

module.exports = withSass({
  cssModules: true,
})

module.exports = {
  i18n,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  }
}

module.exports = withPlugins([[withImages]], nextConfig)


