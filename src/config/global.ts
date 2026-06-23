export const globalConfig = {
  site: {
    name: "Your Portfolio Name",
    author: "岭羊(广州)文化传媒有限公司",
    description: "A brief description of your portfolio website",
    url: "/"
  },
  navigation: {
    aria: "Main Navigation",
    items: [
      {
        title: "首页",
        href: "/"
      },
      {
        title: "产品",
        href: "/projects"
      },
      {
        title: "案例",
        href: "/posts"
      },
      {
        title: "关于岭羊",
        href: "/about"
      }
    ]
  },
  footer: {
    aria: "Footer Navigation",
    copyright: "© 2026 岭羊(广州)文化传媒有限公司。版权所有。",
    social: { }
  }
} as const; 
