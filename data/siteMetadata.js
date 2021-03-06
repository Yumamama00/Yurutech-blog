const siteMetadata = {
  title: 'ゆるテックBLOG',
  author: 'ゆるテックBLOG',
  headerTitle: 'ゆるテックBLOG',
  description:
    'このブログは、日々学んだこと、役に立つと思ったこと、後で見返すための技術メモや考えを書き留めるために作成したものです。ゆる〜く発信を続けて、少しでも記事を読んでいただいた方のお役に立てれば嬉しいです。',
  language: 'ja-JP',
  theme: 'system',
  siteUrl: 'https://www.yurutech-blog.com',
  siteRepo: 'https://github.com/Yumamama00/Yurutech-blog',
  siteLogo: '/static/images/logo.png',
  image: '/static/images/logo.png',
  socialBanner: '/static/images/twitter-card.png',
  email: 'yurutech-blog@googlegroups.com',
  github: 'https://github.com/Yumamama00/Yurutech-Blog',
  locale: 'ja-JP',
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
