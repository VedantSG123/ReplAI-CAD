import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  webpack: (config, { isServer }) => {
    config.module.rules.push({
      test: /\.wasm$/,
      type: 'asset/resource',
      generator: {
        filename: 'static/chunks/[name].[hash][ext]',
      },
    })

    // Handle Node.js modules that aren't compatible with the browser specially for opencascade.js
    // refer: https://ocjs.org/docs/getting-started/configure-bundler
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        path: false,
        os: false,
        crypto: false,
        stream: false,
        util: false,
        buffer: false,
        assert: false,
      }
    }

    return config
  },
}

export default nextConfig
