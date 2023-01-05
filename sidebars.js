module.exports = {

  HowToUse: [
    {
      type: 'doc',
      id: 'HowToUse',
      label: 'Getting Started',
    },
    {
      type: 'category',
      label: 'Cryptocurrency Wallets',
      collapsed: true,
      items: ['HowToUse/Wallets/Metamask', 'HowToUse/Wallets/WalletConnect'],
    },
    {
      type: 'doc',
      id: 'HowToUse/GeneralOverview',
      label: 'General Overview',
    },
    {
      type: 'doc',
      id: 'HowToUse/OrderSubmission',
      label: 'Order Submission',
    },
  ],

  Concepts: [
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      items: ['Concepts',],
    }
  ],

  LitePaper: [
    {
      type: 'doc',
      id: 'LitePaper',
      label: 'Overview',
    },
    {
      type: 'doc',
      label: 'Abstract',
      id: 'LitePaper/abstract',
    },
    {
      type: 'category',
      label: 'Motivation',
      collapsed: false,
      items: ['LitePaper/motivation_cex_dex', 'LitePaper/motivation_dexpresso'],
    },
    {
      type: 'doc',
      label: 'Contracts',
      id: 'LitePaper/contracts',
    },
    {
      type: 'category',
      label: 'Analysis',
      collapsed: false,
      items: ['LitePaper/robustness_soundness', 'LitePaper/user_privacy', 'LitePaper/security_analysis'],
    },
    {
      type: 'doc',
      label: 'Conclusion',
      id: 'LitePaper/conclusion',
    },
  ],

  Develop: [
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      items: ['Develop'],
    },
    {
      type: 'category',
      label: 'API Doocumentation',
      collapsed: false,
      items: ['Develop/API/api','Develop/API/ws'],
    },
    {
      type: 'category',
      label: 'SDK Doocumentation',
      collapsed: false,
      items: [
        {
          type: 'doc',
          label: 'Overview',
          id: 'Develop/SDK/main',
        },
        {
          type: 'category',
          label: 'Python SDK',
          collapsed: true,
          items: ['Develop/SDK/python/Installation', 'Develop/SDK/python/Structure', 'Develop/SDK/python/ExampleUsage']
        },
        {
          type: 'category',
          label: 'JavaScript SDK',
          collapsed: true,
          items: ['Develop/SDK/js']
        }
      ],
    },
  ],

  Community: [
    {
      type: 'doc',
      label: 'Overview',
      id: 'Community',
    },
    {
      type: 'doc',
      label: 'Twitter',
      id: 'Community/Twitter',
    },
    {
      type: 'doc',
      label: 'Discord',
      id: 'Community/Discord',
    },
    {
      type: 'doc',
      label: 'Telegram',
      id: 'Community/Telegram',
    },
    {
      type: 'doc',
      label: 'Youtube',
      id: 'Community/Youtube',
    },
  ],
};