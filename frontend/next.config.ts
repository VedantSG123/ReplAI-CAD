import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* config options here */
  webpack: (config) => {
    config.modules.rules.push({
      test: /\.wasm$/,
      type: 'asset/resource',
      generator: {
        fileName: 'static/chunks/[name].[hash][ext]',
      },
    })
  },
}

export default nextConfig
