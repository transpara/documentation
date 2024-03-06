/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  
  docs: [
    {
      type: 'html',
      value: '<span class=\'sidebar_title\'>Getting Started</span>',
      defaultStyle: true,
      className: 'sidebar_title',
    },
    {
      type: 'doc',
      id: 'what-is-visual-kpi',
      // label: 'What is Visual KPI',
      // className: '',
    },
    {
      type: 'doc',
      id: 'visual-kpi-approach',
      // label: 'What is Visual KPI',
      // className: '',
    },
    {
      type: 'doc',
      id: 'how-visual-kpi-works',
      // label: 'How Visual KPI Works',
      // className: '',
    },
    {
      type: 'doc',
      id: 'how-to-use-the-documentation',
      // label: 'How to Use the Documentation',
      // className: '',
    },
    
    {
      type: 'category',
      label: "Core Concepts",
      // className: '',
      link: {
        type: 'doc',
        id: 'core-concepts/core-concepts',
      },
      items: [
        'core-concepts/kpi',
        'core-concepts/hierarchy',
        'core-concepts/design',
        'core-concepts/data-sources',
        'core-concepts/interfaces',
        'core-concepts/access-level',

      ],
    },
    {
      type: 'html',
      value: '<span class=\'sidebar_title\'>Setup and Administration</span>',
      defaultStyle: true,
      className: 'sidebar_title',
    },
    {
      type: 'doc',
      id: 'setup-and-administration/overview',
      // label: 'How to Use the Documentation',
      // className: '',
    },
    {
      type: 'category',
      label: "Installation",
      // className: '',
      link: {
        type: 'doc',
        id: 'setup-and-administration/installation/overview',
      },
      items: [
        'setup-and-administration/installation/prepare-your-system',
        'setup-and-administration/installation/install-visual-kpi',
        'setup-and-administration/installation/system-update',
      ],
    },
    {
      type: 'category',
      label: "Interfaces",
      // className: '',
      link: {
        type: 'doc',
        id: 'setup-and-administration/interfaces/interfaces',
      },
      items: [
      ],
    },
    {
      type: 'category',
      label: "Automation",
      // className: '',
      link: {
        type: 'doc',
        id: 'setup-and-administration/automation/automation',
      },
      items: [
        'setup-and-administration/automation/rcs',
        
        {
          type: 'category',
          label: "How to use the RCS",
          // className: '',
          link: {
            type: 'doc',
            id: 'setup-and-administration/automation/how-to-use/how-to-use-the-rcs',
          },
          items: [
            'setup-and-administration/automation/how-to-use/rcs-with-af-databases',
            'setup-and-administration/automation/how-to-use/rcs-with-sql-databases',
          ],
        },
        'setup-and-administration/automation/rsc-and-visual-kpi-design',
        'setup-and-administration/automation/use-cases',
        {
          type: 'category',
          label: "Reference",
          items: [
            {
              type: 'category',
              label: "AF Database Keywords",
              items: [
                'setup-and-administration/automation/reference/af-database-keywords/kpi-keywords',
                'setup-and-administration/automation/reference/af-database-keywords/trend-keywords',
                'setup-and-administration/automation/reference/af-database-keywords/table-keywords',
                'setup-and-administration/automation/reference/af-database-keywords/group-keywords',
                'setup-and-administration/automation/reference/af-database-keywords/value-keywords',
              ],
            },
            {
              type: 'category',
              label: "SQL Database Keywords",
              items: [
                'setup-and-administration/automation/reference/sql-database-keywords/kpi-keywords',
                'setup-and-administration/automation/reference/sql-database-keywords/table-keywords',
                'setup-and-administration/automation/reference/sql-database-keywords/group-keywords',
                'setup-and-administration/automation/reference/sql-database-keywords/charts-keywords',
              ],
            },
          ],
        },
      ],
    },
    {
      type: 'doc',
      id: 'setup-and-administration/best-practices',
      // label: 'How to Use the Documentation',
      // className: '',
    },
    
    {
      type: 'html',
      value: '<span class=\'sidebar_title\'>Visual KPI Design</span>',
      defaultStyle: true,
      className: 'sidebar_title',
    },
    {
      type: 'doc',
      id: 'visual-kpi-design/overview',
      // label: 'How to Use the Documentation',
      // className: '',
    },
    {
      type: 'category',
      label: "Installation and Setup",
      // className: '',
      link: {
        type: 'doc',
        id: 'visual-kpi-design/installation-and-setup/installation',
      },
      items: [
        'visual-kpi-design/installation-and-setup/installation',
        'visual-kpi-design/installation-and-setup/setup-and-connection',
        'visual-kpi-design/installation-and-setup/visual-kpi-designer-ui',
      ],
    },
    {
      type: 'category',
      label: "Authoring",
      // className: '',
      link: {
        type: 'doc',
        id: 'visual-kpi-design/authoring/authoring',
      },
      items: [
        'visual-kpi-design/authoring/default-settings',
        'visual-kpi-design/authoring/manage-objects',
      ],
    },
    {
      type: 'category',
      label: "Design",
      // className: '',
      link: {
        type: 'doc',
        id: 'visual-kpi-design/design/design',
      },
      items: [
        'visual-kpi-design/design/create-a-kpi',
        'visual-kpi-design/design/create-an-spc',
        'visual-kpi-design/design/create-a-chart',
        'visual-kpi-design/design/create-a-trend',
        'visual-kpi-design/design/create-a-table',
        'visual-kpi-design/design/create-a-group',
        'visual-kpi-design/design/create-navbar-links',
        'visual-kpi-design/design/target-and-limit-generator',
      ],
    },
    {
      type: 'doc',
      id: 'visual-kpi-design/best-practices',
      // label: 'How to Use the Documentation',
      // className: '',
    },
    {
      type: 'html',
      value: '<span class=\'sidebar_title\'>End User</span>',
      defaultStyle: true,
      className: 'sidebar_title',
    },
    {
      type: 'doc',
      id: 'end-user/overview',
      // label: '',
      // className: '',
    },
    {
      type: 'category',
      label: "Core Concepts",
      // className: '',
      link: {
        type: 'doc',
        id: 'end-user/core-concepts/core-concepts',
      },
      items: [
        'end-user/core-concepts/browser',
        'end-user/core-concepts/responsive',
        'end-user/core-concepts/real-time',
        'end-user/core-concepts/interactive',
        'end-user/core-concepts/kpi',
      ],
    },
    {
      type: 'category',
      label: "Basic Navigation",
      // className: '',
      link: {
        type: 'doc',
        id: 'end-user/basic-navigation/basic-navigation',
      },
      items: [
        'end-user/basic-navigation/profiles',
        'end-user/basic-navigation/dashboards',
        'end-user/basic-navigation/groups',
        'end-user/basic-navigation/visualization',
        'end-user/basic-navigation/search',
        'end-user/basic-navigation/analytics',
        'end-user/basic-navigation/alerts',
        'end-user/basic-navigation/dark-light-theme',
        'end-user/basic-navigation/time',
        
      ],
    },

    {
      type: 'category',
      label: "Features",
      link: {
        type: 'doc',
        id: 'end-user/features/features',
      },
      items: [
        'end-user/features/profiles',
        'end-user/features/dashboards',
        'end-user/features/groups',
        {
          type: 'category',
          label: "Visualizations",
          link: {
            type: 'doc',
            id: 'end-user/features/visualizations/visualizations',
          },
          items: [
            'end-user/features/visualizations/kpi',
            'end-user/features/visualizations/charts',
            'end-user/features/visualizations/trends',
          ],
        },
      ],
    },


    {
      type: 'html',
      value: '<span class=\'sidebar_title\'>Reference Guides</span>',
      defaultStyle: true,
      className: 'sidebar_title',
    },
    {
      type: 'doc',
      id: 'references/references',
      label: 'References',
    },
    {
      type: 'html',
      value: '<span class=\'sidebar_title\'>Supporting Pages</span>',
      defaultStyle: true,
      className: 'sidebar_title',
    },
    {
      type: 'doc',
      id: 'supporting-pages/faq',
      label: 'FAQ',
    },
    
    {
      type: 'doc',
      id: 'supporting-pages/troubleshooting',
      label: 'Troubleshooting',
    },
    {
      type: 'doc',
      id: 'supporting-pages/training',
      label: 'Training',
    },
    {
      type: 'doc',
      id: 'supporting-pages/glossary',
      label: 'Glossary',
    },
    
  ],
};

module.exports = sidebars;