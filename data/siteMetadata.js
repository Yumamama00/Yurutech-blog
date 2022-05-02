const siteMetadata = {
  title: 'ゆるテックBLOG',
  author: 'ゆるテックBLOG',
  headerTitle: 'ゆるテックBLOG',
  description:
    'Webアプリケーション開発に関する情報をゆる〜く発信する為の個人技術ブログです。Vue、React、Java、Go、インフラの記事をメインに発信予定です。',
  language: 'ja-JP',
  theme: 'system',
  siteUrl: 'https://yurutech-blog.com',
  siteRepo: 'https://github.com/Yumamama00/Yurutech-blog',
  siteLogo: '/static/images/logo.png',
  image: '/static/images/logo.png',
  socialBanner: '/static/images/twitter-card.png',
  email: 'yurutech-blog@googlegroups.com',
  github: 'https://github.com/Yumamama00/Yurutech-Blog',
  locale: 'ja-JP',
  analytics: {
    googleAnalyticsId: process.env.GOOGLE_ANALYTICS_ID,
  },
  comment: {
    provider: 'giscus',
    giscusConfig: {
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO,
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY,
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
      mapping: 'pathname',
      reactions: '1',
      metadata: '0',
      theme: 'light',
      language: 'ja',
      darkTheme: 'transparent_dark',
      themeURL: '',
    },
  },
}

module.exports = siteMetadata
