module.exports = {

  HowToUse: [
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      items: ['HowToUse',],
    },
  ],

  Concepts: [
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      items: ['Concepts',],
    },
    {
      type: 'category',
      label: 'test category',
      collapsed: false,
      items: ['Concepts/test',],
    },
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
      label: 'Abstract',
      id: 'LitePaper/abstract',
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
          type: 'category',
          label: 'Python SDK',
          collapsed: false,
          items: ['Develop/SDK/python', 'Develop/SDK/python/Installation', 'Develop/SDK/python/Structure', 'Develop/SDK/python/ExampleUsage']
        },
        {
          type: 'category',
          label: 'JavaScript SDK',
          collapsed: false,
          items: ['Develop/SDK/js']
        }
      ],
    },
  ],

  Community: [
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      items: ['Community',],
    },
    {
      type: 'category',
      label: 'test category',
      collapsed: false,
      items: ['Community/test',],
    },
  ],
};