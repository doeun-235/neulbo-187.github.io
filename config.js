let config = {
  title: `DOUING-GEUL DOUING-GEUL`,
  author: 'Neulbo',
  description: "Neulbo's blog",
  siteUrl: 'https://neulbo-187.github.io',

  // # Header config
  titleLogo: () => {
    return require('./src/images/profile.png');
  },
  titleLogoShow: true,
  bio: 'Python, C++, Math e.t.c',
  bioShow: true,

  // # Addtional
  googleAnalyticsTrackingId: 'UA-146044260-1',
  disqusShortname: 'dev-neulbo-blog',

  // ## google AdSense
  // In addition, client-id in '/static/ads.txt' file needs to be modified
  //googleAdsense: true,
  //adsenseClient: 'ca-pub-5001380215831339',
  //adsenseSlot: '5214956675',
};

/********************************************** */

if (process.env.NODE_ENV === 'development') {
  config.googleAnalyticsTrackingId = '';
  config.disqusShortname = '';
 // config.googleAdsense = false;
}

module.exports = config;
