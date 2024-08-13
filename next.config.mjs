/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'trcmnbco.s3.amazonaws.com',
          port: '',
          pathname: '*/**',
        },
        {
          protocol: 'https',
          hostname: 'pilatos21.vteximg.com.br',
          port: '',
          pathname: '*/**',
        }
      ],
    },
  };

export default nextConfig;
