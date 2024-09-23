/** @type {import('next').NextConfig} */
const nextConfig = {

  async redirects() {
    return [
      {
        source: '/',
        destination: '/ordenes-de-servicio',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
