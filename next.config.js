const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
});

module.exports = withPWA({
  images: {
    domains: [ "cdn.discordapp.com", "i.imgur.com", "janjytapyt.me", "localhost:3000" ]
},
async redirects() {
    return [
      {
        source: '/discord',
        destination: 'discordLink',
        permanent: true,
      },
    ]
  }
});
