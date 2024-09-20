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
        },
        {
          protocol: 'https',
          hostname: 'www.malishop.cl',
          port: '',
          pathname: '*/**',
        },
        {
          protocol: 'https',
          hostname: 'cdn.shopify.com',
          port: '',
          pathname: '*/**',
        },
        {
          protocol: 'https',
          hostname: 'api-prd.ynk.cl',
          port: '',
          pathname: '*/**',
        },
        {
          protocol: 'https',
          hostname: 'bosico.vteximg.com.br',
          port: '',
          pathname: '*/**',
        },
        {
          protocol: 'https',
          hostname: 'thenorthfaceco.vteximg.com.br',
          port: '',
          pathname: '*/**',
        },
        {
          protocol: 'https',
          hostname: 'thenorthfaceco.vteximg.com.br',
          port: '',
          pathname: '*/**',
        },
        {
          protocol: 'https',
          hostname: 'superdrycolombia.vteximg.com.br',
          port: '',
          pathname: '*/**',
        },
        {
          protocol: 'https',
          hostname: 'dieselcolombia.vteximg.com.br',
          port: '',
          pathname: '*/**',
        },
        {
          protocol: 'https',
          hostname: 'trycloud.s3.us-east-2.amazonaws.com',
          port: '',
          pathname: '*/**',
        },
        {
          protocol: 'https',
          hostname: 'bamers.cl',
          port: '',
          pathname: '*/**',
        },
        {
          protocol: 'https',
          hostname: 'trcmmoda.s3.amazonaws.com',
          port: '',
          pathname: '*/**',
        },
        {
          protocol: 'https',
          hostname: 'prochampions.vteximg.com.br',
          port: '',
          pathname: '*/**',
        },
        {
          protocol: 'https',
          hostname: 'girbaud.vteximg.com.br',
          port: '',
          pathname: '*/**',
        },
        {
          protocol: 'https',
          hostname: 'trcmnbco.s3.us-east-1.amazonaws.com',
          port: '',
          pathname: '*/**',
        },
        //(https://trcmnbco.s3.us-east-1.amazonaws.com
      ],
    },
  };

export default nextConfig;
