/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    distDir: 'build',
    output: 'standalone',
    images: {
        remotePatterns: [
            {
              protocol: 'https',
              hostname: 'kcesar.org',
              port: '',
            },
            {
              protocol: 'https',
              hostname: 'mptrswa.com',
              port: '',
            },
            {
              protocol: 'https',
              hostname: 'picsum.photos',
              port: '',
            }
          ],
    },
    async redirects() {
      const permanent = {
        '/donate.aspx': '/donate',
        '/donate.html': '/donate',
        '/join': '/join-us',
        '/schedule.aspx': '/join-us',
        '/training.aspx': '/join-us',
        '/recruiting.aspx': '/join-us',
        '/recruiting.html': '/join-us',
        '/members': 'https://accounts.google.com/AccountChooser?continue=https://sites.google.com/kcesar.org/members',
        '/sartopo': 'https://caltopo.com',
        '/database': 'https://kcsara.d4h.org',
      };
      const temp = {
        '/apply': 'https://forms.gle/wag18kY9xHgMY3rb7',
        '/cert': 'https://docs.google.com/forms/d/e/1FAIpQLSctsjL6JfUxsQNoUiqJeZqADig1N4KlY43VJr0sy25q9lNK-g/viewform',
        '/paging-setup': 'https://docs.google.com/forms/d/e/1FAIpQLSfRjUxFUCaQBQ9Xu4ojowPj9NVdyoQYFJBAL5MSnc4IqWmDhQ/viewform',
        '/course-a-registration': 'https://www.signupgenius.com/go/10C0F4FA8AF2AAAFDCE9-50124119-course',
        '/admin-hours': 'https://docs.google.com/forms/d/e/1FAIpQLSeU53MJ5PBhq-7sp2l6ER5R5attix_ApgOV9EtH03R55aANYw/viewform',
        '/elections': 'https://docs.google.com/forms/d/e/1FAIpQLSdv3DlIg4oGbAoROVfdS4WcV_b_RKAwIQcEP4BaexBISV4vQg/viewform',
      };

      return [
        ...Object.entries(permanent)
          .map(([source, destination]) => ({ source, destination, permanent: true })),
        ...Object.entries(temp)
          .map(([source, destination]) => ({ source, destination, permanent: false })),
      ]
    }
}

module.exports = nextConfig/** @type {import('next').NextConfig} */
