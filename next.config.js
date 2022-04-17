/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: 'imgix',
    path: 'https://prime-pass-developing.netlify.app/',
  },
}

module.exports = nextConfig
