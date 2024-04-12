module.exports = [
  {
    type: 'doc',
    id: 'references/references',
    label: 'References',
  },
  {
    type: 'category',
    label: "Setup and Administration",
    link: {
      type: 'doc',
      id: 'references/setup-and-administration/setup-and-administration-reference',
    },
    items: [
      {
        type: 'category',
        label: "AF Database Keywords",
        items: [
          'references/setup-and-administration/af-database-keywords/kpi-keywords',
          'references/setup-and-administration/af-database-keywords/trend-keywords',
          'references/setup-and-administration/af-database-keywords/table-keywords',
          'references/setup-and-administration/af-database-keywords/group-keywords',
          'references/setup-and-administration/af-database-keywords/value-keywords',
        ],
      },
      {
        type: 'category',
        label: "SQL Database Keywords",
        items: [
          'references/setup-and-administration/sql-database-keywords/kpi-keywords',
          'references/setup-and-administration/sql-database-keywords/table-keywords',
          'references/setup-and-administration/sql-database-keywords/group-keywords',
          'references/setup-and-administration/sql-database-keywords/charts-keywords',
        ],
      },
    ],
  },
  {
    type: 'category',
    label: "Visual KPI Designer",
    link: {
      type: 'doc',
      id: 'references/visual-kpi-designer/visual-kpi-designer-references',
    },
    items: [
      {
        type: 'category',
        label: "Data Limits",
        items: [
          'references/visual-kpi-designer/data-limits/data-limits-for-attributes',
          'references/visual-kpi-designer/data-limits/data-limits-for-default-ranges',
          'references/visual-kpi-designer/data-limits/data-limits-for-groups',
          'references/visual-kpi-designer/data-limits/data-limits-for-interfaces',
          'references/visual-kpi-designer/data-limits/data-limits-for-kpis',
          'references/visual-kpi-designer/data-limits/data-limits-for-links',
          'references/visual-kpi-designer/data-limits/data-limits-for-trend-ranges',
          'references/visual-kpi-designer/data-limits/data-limits-for-trends',
          'references/visual-kpi-designer/data-limits/data-limits-for-website-configuration'
        ],
      },
    ],
  },
]