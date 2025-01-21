/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

const { 
  gettingStarted,
  dashboards,
  tcalc 
} = require('./.sidebar');

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
    ...gettingStarted,
    {
      type: 'html',
      value: '<span class=\'sidebar_title\'>Dashboards</span>',
      defaultStyle: true,
      className: 'sidebar_title',
    },
    ...dashboards,
    {
      type: 'html',
      value: '<span class=\'sidebar_title\'>tCalc</span>',
      defaultStyle: true,
      className: 'sidebar_title',
    },
    ...tcalc,
  ],
};

module.exports = sidebars;