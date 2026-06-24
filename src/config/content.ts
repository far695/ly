export const siteConfig = {
  name: "岭羊传媒_互联网广告投放平台_腾讯/抖音多平台营销推广解决方案",
  description: "腾讯/抖音多平台营销推广解决方案",
  nav: {
    home: "首页",
    posts: "案例",
    projects: "产品",
    about: "关于岭羊"
  },
  home: {
    greeting: "岭羊传媒6年营销经验",
    description: "为您提供专业的互联网营销案例分析",
    buttons: {
      viewProjects: "产品",
      readPosts: "客户广告案例"
    }
  },
  projects: {
    title: "产品介绍",
    description: "拥有丰富的海量产品，覆盖用户各个使用场景，无缝触达您的目标客户定制化投放方案，达成各种营销目标。",
    backButton: "返回首页",
    noProjects: "找不到相关产品",
    items: [
      {
        title: "腾讯广告",
        description: "国内年轻社交平台，用黑科技和多元玩法与年轻用户深度互动。",
        href: "https://tempmail.best",
        imageUrl: "/assets/images/projects/tempmail.best.png"
      },
      {
        title: "头条&抖音广告",
        description: "大数据今日头条&抖音媒体资源，引领智能移动广告，整合营销体系。",
        href: "https://dns.surf",
        imageUrl: "/assets/images/projects/dns.surf.png"
      },
      {
        title: "快手广告",
        description: "广告投放 +电商直播卖货+视频号长效运营，沉浸式原生视频体验，看见更多好内容。",
        href: "https://html.zone",
        imageUrl: "/assets/images/projects/html.zone.png"
      },
      {
        title: "小红书",
        description: "小红书商业根植于社区的"种草"文化——用户在真实分享中自然激发消费意愿。",
        href: "https://sink.cool",
        imageUrl: "/assets/images/projects/sink.cool.png"
      },
      {
        title: "BroadcastChannel",
        description: "Turn your Telegram Channel into a MicroBlog.",
        href: "https://github.com/ccbikai/BroadcastChannel",
        imageUrl: "/assets/images/projects/broadcast-channel.png"
      },
      {
        title: "L(O*62).ONG",
        description: "Make your URL looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooonger",
        href: "https://loooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo.ong",
        imageUrl: "/assets/images/projects/long.png"
      }
    ]
  },
  posts: {
    title: "合作案例",
    description: "丰富广告资源,满足不同行业的广告投放。",
    backButton: "返回首页",
    noPosts: "没有找到符合您搜索条件的帖子。",
    searchPlaceholder: "搜索帖子...",
    pagination: {
      previous: "上一页",
      next: "下一页"
    },
    items: [
      {
        title: "Run MCP Server in a Docker sandbox",
        description: "Run MCP Server in a Docker sandbox to avoid supply chain attacks.",
        date: "Apr 25, 2025",
        href: "/post/guide-to-running-mcp-server-in-a-sandbox",
        imageUrl: "/assets/images/posts/post1.jpg",
        readingTime: 8
      },
      {
        title: "Use Cloudflare Workers to concat audio files",
        description: "How to use Cloudflare Workers to merge audio files using FFmpeg in the browser.",
        date: "April 19, 2025",
        href: "/post/cloudflare-audio-concat",
        imageUrl: "/assets/images/posts/post2.jpg",
        readingTime: 12
      },
      {
        title: "RSS.Beauty - Make Your RSS Beautiful!",
        description: "Beautify your RSS feeds with RSS.Beauty, featuring elegant interfaces, responsive design, and self-hosting support. Try it now!",
        date: "Dec 31, 2024",
        href: "/post/rss-beauty",
        imageUrl: "/assets/images/posts/post3.jpg",
        readingTime: 6
      },
      {
        title: "Building a Modern Web App with Next.js",
        description: "Learn how to build a modern web application using Next.js, React, and Tailwind CSS.",
        date: "Dec 15, 2024",
        href: "/post/nextjs-web-app",
        imageUrl: "/assets/images/posts/post1.jpg",
        readingTime: 15
      },
      {
        title: "The Future of Web Development",
        description: "Exploring the latest trends and technologies shaping the future of web development.",
        date: "Dec 1, 2024",
        href: "/post/future-web-dev",
        imageUrl: "/assets/images/posts/post2.jpg",
        readingTime: 10
      },
      {
        title: "Mastering TypeScript in 2024",
        description: "A comprehensive guide to TypeScript features and best practices for modern web development.",
        date: "Nov 20, 2024",
        href: "/post/typescript-guide",
        imageUrl: "/assets/images/posts/post3.jpg",
        readingTime: 20
      },
      {
        title: "The Art of Clean Code",
        description: "Learn the principles and practices of writing clean, maintainable code that stands the test of time.",
        date: "Nov 10, 2024",
        href: "/post/clean-code",
        imageUrl: "/assets/images/posts/post1.jpg",
        readingTime: 12
      },
      {
        title: "Building Scalable APIs with Node.js",
        description: "Best practices and patterns for building robust and scalable APIs using Node.js and Express.",
        date: "Oct 28, 2024",
        href: "/post/nodejs-apis",
        imageUrl: "/assets/images/posts/post2.jpg",
        readingTime: 18
      },
      {
        title: "Getting Started with GraphQL",
        description: "A beginner's guide to GraphQL: concepts, implementation, and real-world examples.",
        date: "Oct 15, 2024",
        href: "/post/graphql-intro",
        imageUrl: "/assets/images/posts/post3.jpg",
        readingTime: 14
      },
      {
        title: "The Power of CSS Grid",
        description: "Master CSS Grid layout and create complex, responsive designs with ease.",
        date: "Oct 1, 2024",
        href: "/post/css-grid",
        imageUrl: "/assets/images/posts/post1.jpg",
        readingTime: 9
      }
    ]
  },
  about: {
    title: "关于岭羊",
    description: "了解更多关于岭羊传媒的介绍。",
    backButton: "返回首页"
  },
  theme: {
    dayMode: "浅色",
    nightMode: "深色"
  }
} as const 
