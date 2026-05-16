// Data perusahaan dengan design system
const companiesData = [
  {
    id: 1,
    name: "Adobe",
    designSystem: "Spectrum",
    source: "https://spectrum.adobe.com/",
    biography: "",
    components: [
      "Action bar",
      "Action button",
      "Alert banner",
      "Avatar",
      "Badges",
      "Bottom sheet",
      "Breadcrumb",
      "Button",
      "Button group",
      "Cards",
      "Checkbox",
      "Combobox",
      "Data table",
      "Divider",
      "Help text",
      "Label",
      "Link",
      "Menus",
      "Modal",
      "Navigation bar",
      "Page header",
      "Popover",
      "Progress bar",
      "Progress indicator",
      "Radio button",
      "Search",
      "Select",
      "Sidebar",
      "Slider",
      "Snackbar",
      "Switch",
      "Tabs",
      "Tag",
      "Text area",
      "Text field",
      "Tooltip",
      "Tree view",
    ],
    industry: "tech",
  },
  {
    id: 2,
    name: "Alaska Airlines",
    designSystem: "Auro",
    source: "https://auro.alaskaair.com",
    biography: "Placeholder - Biografi perusahaan akan diisi nanti",
    components: [
      "Accordion",
      "Alert banner",
      "Avatar",
      "Badges",
      "Breadcrumb",
      "Button",
      "Cards",
      "Checkbox",
      "Combobox",
      "Data table",
      "Date picker",
      "Dialog",
      "Drawer",
      "Dropdown",
      "Icon",
      "Link",
      "Menus",
      "Popover",
      "Radio button",
      "Select",
      "Sidebar",
      "Snackbar",
      "Text field",
    ],
    industry: "transportation",
  },
  {
    id: 3,
    name: "Amazon",
    designSystem: "Cloudscape",
    source: "https://cloudscape.design",
    biography: "Placeholder - Biografi perusahaan akan diisi nanti",
    components: [
      "Accordion",
      "Alert banner",
      "App bar",
      "Autocomplete",
      "Badges",
      "Breadcrumb",
      "Button",
      "Cards",
      "Checkbox",
      "Chip",
      "Code snippet",
      "Data table",
      "Date picker",
      "Dropdown",
      "Empty state",
      "Filter input",
      "Form",
      "Icon",
      "Link",
      "Modal",
      "Page header",
      "Pagination",
      "Popover",
      "Progress bar",
      "Progress indicator",
      "Radio button",
      "Segmented control",
      "Select",
      "Sidebar",
      "Switch",
      "Tabs",
      "Text area",
      "Text field",
    ],
    industry: "tech",
  },
  {
    id: 4,
    name: "Apple",
    designSystem: "HIG",
    source: "https://developer.apple.com/design/",
    biography: "Placeholder - Biografi perusahaan akan diisi nanti",
    components: [
      "Action bar",
      "Action list",
      "Alert banner",
      "App bar",
      "Bottom sheet",
      "Breadcrumb",
      "Button",
      "Combobox",
      "Date picker",
      "Label",
      "Menus",
      "Navigation bar",
      "Popover",
      "Progress indicator",
      "Search",
      "Segmented control",
      "Sidebar",
      "Slider",
      "Switch",
      "Text area",
      "Text field",
    ],
    industry: "tech",
  },
  {
    id: 5,
    name: "Atlassian",
    designSystem: "Design System",
    source: "https://atlassian.design/",
    biography: "Placeholder - Biografi perusahaan akan diisi nanti",
    components: [
      "Alert banner",
      "App bar",
      "Avatar",
      "Badges",
      "Breadcrumb",
      "Button",
      "Button group",
      "Checkbox",
      "Code snippet",
      "Data table",
      "Date picker",
      "Drawer",
      "Dropdown",
      "Empty state",
      "Form",
      "Icon",
      "Inline message",
      "Menus",
      "Modal",
      "Page header",
      "Pagination",
      "Popover",
      "Progress bar",
      "Progress indicator",
      "Radio button",
      "Select",
      "Sidebar",
      "Slider",
      "Switch",
      "Tabs",
      "Tag",
      "Text area",
      "Text field",
      "Tooltip",
      "Tree view",
    ],
    industry: "tech",
  },
  {
    id: 6,
    name: "Audi",
    designSystem: "Design System",
    source: "https://styleguide.audi.com/document/2865?#/-/ui-introduction",
    biography: "Placeholder - Biografi perusahaan akan diisi nanti",
    components: [
      "Alert banner",
      "Badges",
      "Breadcrumb",
      "Button",
      "Cards",
      "Checkbox",
      "Data table",
      "Dialog",
      "Icon",
      "Modal",
      "Pagination",
      "Popover",
      "Progress indicator",
      "Radio button",
      "Search",
      "Sidebar",
      "Slider",
      "Snackbar",
      "Switch",
      "Tabs",
      "Text area",
      "Text field",
      "Tooltip",
    ],
    industry: "automotive",
  },
  {
    id: 7,
    name: "Basis",
    designSystem: "Design System",
    source: "https://design.basis.com",
    biography: "Placeholder - Biografi perusahaan akan diisi nanti",
    components: [
      "Accordion",
      "Alert banner",
      "Badges",
      "Button",
      "Cards",
      "Checkbox",
      "Chip",
      "Data table",
      "Date picker",
      "Drawer",
      "Dropdown",
      "Empty state",
      "Filter input",
      "Link",
      "Menus",
      "Modal",
      "Page header",
      "Pagination",
      "Progress bar",
      "Progress indicator",
      "Radio button",
      "Search",
      "Segmented control",
      "Select",
      "Snackbar",
      "Switch",
      "Tabs",
      "Text field",
      "Tooltip",
      "Tree view",
    ],
    industry: "tech",
  },
  {
    id: 8,
    name: "Biings",
    designSystem: "Design System",
    source: "https://biings.design/#/",
    biography: "Placeholder - Biografi perusahaan akan diisi nanti",
    components: ["Alert banner", "Avatar", "Button", "Checkbox", "Data table", "Dropdown", "Form", "Link", "Menus", "Modal", "Progress indicator", "Radio button", "Segmented control", "Snackbar", "Tabs", "Tag", "Text field", "Tooltip"],
    industry: "tech",
  },
  {
    id: 9,
    name: "Brainly",
    designSystem: "Pencil",
    source: "https://design.brainly.com",
    biography: "Placeholder - Biografi perusahaan akan diisi nanti",
    components: ["Badges", "Button", "Cards", "Chip", "Dialog", "Popover", "Progress bar", "Select", "Snackbar", "Tooltip"],
    industry: "education",
  },
  {
    id: 10,
    name: "Carrefour",
    designSystem: "Marcel",
    source: "https://carrefour.design",
    biography: "Placeholder - Biografi perusahaan akan diisi nanti",
    components: [
      "Accordion",
      "Action list",
      "Autocomplete",
      "Badges",
      "Breadcrumb",
      "Button",
      "Cards",
      "Checkbox",
      "Chip",
      "Date picker",
      "Drawer",
      "Link",
      "Modal",
      "Navigation bar",
      "Pagination",
      "Popover",
      "Progress bar",
      "Progress indicator",
      "Radio button",
      "Search",
      "Segmented control",
      "Select",
      "Slider",
      "Snackbar",
      "Switch",
      "Tabs",
      "Tag",
      "Text area",
      "Text field",
      "Tooltip",
    ],
    industry: "retail",
  },
  {
    id: 11,
    name: "CBRE Build",
    designSystem: "Blocks",
    source: "https://blocks.cbrebuild.com",
    biography: "Placeholder - Biografi perusahaan akan diisi nanti",
    components: ["Alert banner", "Button", "Checkbox", "Dropdown", "Link", "Modal", "Popover", "Radio button", "Segmented control", "Tabs", "Text field", "Tooltip"],
    industry: "realestate",
  },
  {
    id: 12,
    name: "Cisco",
    designSystem: "Momentum Design",
    source: "https://momentum.design",
    biography: "Placeholder - Biografi perusahaan akan diisi nanti",
    components: ["Avatar", "Badges", "Checkbox", "Chip", "Dialog", "Divider", "List", "Progress bar", "Progress indicator", "Switch", "Tabs"],
    industry: "tech",
  },
  {
    id: 13,
    name: "Datadog",
    designSystem: "Druids",
    source: "https://druids.datadoghq.com",
    biography: "Placeholder - Biografi perusahaan akan diisi nanti",
    components: [
      "Accordion",
      "Action bar",
      "Autocomplete",
      "Avatar",
      "Badges",
      "Button",
      "Checkbox",
      "Code snippet",
      "Data table",
      "Date picker",
      "Dialog",
      "Divider",
      "Drawer",
      "Empty state",
      "Form",
      "Icon",
      "Label",
      "Link",
      "List",
      "Menus",
      "Modal",
      "Page header",
      "Pagination",
      "Popover",
      "Progress indicator",
      "Radio button",
      "Search",
      "Segmented control",
      "Select",
      "Sidebar",
      "Slider",
      "Snackbar",
      "Switch",
      "Tabs",
      "Tag",
      "Text area",
      "Text field",
      "Tooltip",
    ],
    industry: "tech",
  },
  {
    id: 14,
    name: "Dell",
    designSystem: "Design System",
    source: "https://www.delldesignsystem.com",
    biography: "Placeholder - Biografi perusahaan akan diisi nanti",
    components: [
      "Accordion",
      "Alert banner",
      "Badges",
      "Breadcrumb",
      "Button",
      "Cards",
      "Checkbox",
      "Data table",
      "Date picker",
      "Dialog",
      "Divider",
      "Drawer",
      "Dropdown",
      "Empty state",
      "Filter input",
      "Form",
      "Link",
      "List",
      "Menus",
      "Modal",
      "Pagination",
      "Popover",
      "Progress bar",
      "Progress indicator",
      "Radio button",
      "Search",
      "Select",
      "Sidebar",
      "Switch",
      "Tabs",
      "Tag",
      "Text area",
      "Text field",
      "Tooltip",
    ],
    industry: "tech",
  },
  {
    id: 15,
    name: "Docplanner",
    designSystem: "Watson",
    source: "https://watson.github.io/design-system/",
    biography: "Placeholder - Biografi perusahaan akan diisi nanti",
    components: [
      "Accordion",
      "Alert banner",
      "Avatar",
      "Badges",
      "Breadcrumb",
      "Button",
      "Button group",
      "Cards",
      "Checkbox",
      "Combobox",
      "Data table",
      "Date picker",
      "Divider",
      "Empty state",
      "Icon",
      "Link",
      "Menus",
      "Modal",
      "Pagination",
      "Popover",
      "Progress bar",
      "Progress indicator",
      "Radio button",
      "Select",
      "Sidebar",
      "Snackbar",
      "Switch",
      "Tabs",
      "Text area",
      "Text field",
      "Tooltip",
    ],
    industry: "healthcare",
  },
  {
    id: 16,
    name: "eBay",
    designSystem: "Evo",
    source: "https://playbook.ebay.com",
    biography: "Placeholder - Biografi perusahaan akan diisi nanti",
    components: [
      "Accordion",
      "Alert banner",
      "Avatar",
      "Badges",
      "Bottom sheet",
      "Breadcrumb",
      "Button",
      "Checkbox",
      "Chip",
      "Combobox",
      "Data table",
      "Date picker",
      "Dialog",
      "Divider",
      "Dropdown",
      "Filter input",
      "Link",
      "Page header",
      "Pagination",
      "Popover",
      "Progress bar",
      "Radio button",
      "Segmented control",
      "Select",
      "Snackbar",
      "Switch",
      "Tabs",
      "Tag",
      "Text area",
      "Text field",
      "Tooltip",
    ],
    industry: "ecommerce",
  },
  {
    id: 17,
    name: "Elastic",
    designSystem: "Design System",
    source: "https://eui.elastic.co/#/",
    biography: "Placeholder - Biografi perusahaan akan diisi nanti",
    components: [
      "Accordion",
      "Avatar",
      "Badges",
      "Breadcrumb",
      "Button",
      "Button group",
      "Cards",
      "Checkbox",
      "Code snippet",
      "Combobox",
      "Data table",
      "Date picker",
      "Drawer",
      "Empty state",
      "Filter input",
      "Form",
      "Icon",
      "Link",
      "Menus",
      "Modal",
      "Page header",
      "Pagination",
      "Popover",
      "Progress bar",
      "Progress indicator",
      "Radio button",
      "Search",
      "Select",
      "Sidebar",
      "Slider",
      "Snackbar",
      "Switch",
      "Tabs",
      "Text area",
      "Text field",
      "Tooltip",
      "Tree view",
    ],
    industry: "tech",
  },
  {
    id: 18,
    name: "Esri",
    designSystem: "Calcite",
    source: "https://developers.arcgis.com/calcite-design-system/",
    biography: "Placeholder - Biografi perusahaan akan diisi nanti",
    components: [
      "Accordion",
      "Action bar",
      "Alert banner",
      "Avatar",
      "Button",
      "Cards",
      "Checkbox",
      "Chip",
      "Combobox",
      "Data table",
      "Date picker",
      "Drawer",
      "Dropdown",
      "Filter input",
      "Icon",
      "Label",
      "Link",
      "List",
      "Menus",
      "Modal",
      "Page header",
      "Pagination",
      "Popover",
      "Progress bar",
      "Progress indicator",
      "Radio button",
      "Segmented control",
      "Select",
      "Slider",
      "Switch",
      "Tabs",
      "Text area",
      "Text field",
      "Tooltip",
      "Tree view",
    ],
    industry: "tech",
  },
  {
    id: 19,
    name: "General Electric",
    designSystem: "Edison",
    source: "https://eds.gehealthcare.com",
    biography: "Placeholder - Biografi perusahaan akan diisi nanti",
    components: [
      "Accordion",
      "Action bar",
      "Alert banner",
      "Badges",
      "Breadcrumb",
      "Button",
      "Button group",
      "Cards",
      "Checkbox",
      "Data table",
      "Date picker",
      "Drawer",
      "Dropdown",
      "Filter input",
      "Link",
      "List",
      "Menus",
      "Modal",
      "Page header",
      "Pagination",
      "Popover",
      "Progress bar",
      "Progress indicator",
      "Radio button",
      "Search",
      "Slider",
      "Switch",
      "Tabs",
      "Text area",
      "Text field",
      "Tooltip",
      "Tree view",
    ],
    industry: "industrial",
  },
  {
    id: 20,
    name: "GitHub",
    designSystem: "Primer",
    source: "https://primer.style",
    biography: "Placeholder - Biografi perusahaan akan diisi nanti",
    components: [
      "Action bar",
      "Action list",
      "Alert banner",
      "App bar",
      "Autocomplete",
      "Avatar",
      "Badges",
      "Breadcrumb",
      "Button",
      "Button group",
      "Checkbox",
      "Chip",
      "Data table",
      "Dialog",
      "Icon",
      "Label",
      "Link",
      "Menus",
      "Page header",
      "Pagination",
      "Popover",
      "Progress bar",
      "Radio button",
      "Segmented control",
      "Select",
      "Sidebar",
      "Switch",
      "Tabs",
      "Text area",
      "Text field",
      "Tree view",
    ],
    industry: "tech",
  },
  {
    id: 21,
    name: "GitLab",
    designSystem: "Pajamas",
    source: "https://design.gitlab.com",
    biography: "Placeholder - Biografi perusahaan akan diisi nanti",
    components: [
      "Accordion",
      "Alert banner",
      "Avatar",
      "Badges",
      "Breadcrumb",
      "Button",
      "Cards",
      "Checkbox",
      "Chip",
      "Combobox",
      "Data table",
      "Date picker",
      "Drawer",
      "Dropdown",
      "Empty state",
      "Filter input",
      "Label",
      "Link",
      "Modal",
      "Pagination",
      "Popover",
      "Progress bar",
      "Progress indicator",
      "Radio button",
      "Search",
      "Segmented control",
      "Select",
      "Snackbar",
      "Switch",
      "Tabs",
      "Text area",
      "Text field",
      "Tooltip",
      "Tree view",
    ],
    industry: "tech",
  },
  {
    id: 22,
    name: "Google",
    designSystem: "Material Design",
    source: "https://m3.material.io/",
    biography: "Placeholder - Biografi perusahaan akan diisi nanti",
    components: [
      "Action list",
      "App bar",
      "Badges",
      "Bottom sheet",
      "Button",
      "Cards",
      "Checkbox",
      "Chip",
      "Date picker",
      "Dialog",
      "Divider",
      "Drawer",
      "Menus",
      "Navigation bar",
      "Progress indicator",
      "Radio button",
      "Search",
      "Sidebar",
      "Slider",
      "Snackbar",
      "Switch",
      "Tabs",
      "Text field",
      "Tooltip",
    ],
    industry: "tech",
  },
  {
    id: 23,
    name: "GOV.UK",
    designSystem: "Design System",
    source: "https://design-system.service.gov.uk/",
    biography: "Placeholder - Biografi perusahaan akan diisi nanti",
    components: ["Accordion", "Alert banner", "Breadcrumb", "Button", "Checkbox", "Data table", "Date picker", "Form", "Link", "List", "Page header", "Pagination", "Radio button", "Select", "Tabs", "Tag", "Text area", "Text field"],
    industry: "government",
  },
  {
    id: 24,
    name: "Gusto",
    designSystem: "Workbench",
    source: "https://medium.com/gusto-design",
    biography: "Placeholder - Biografi perusahaan akan diisi nanti",
    components: [
      "Accordion",
      "Action bar",
      "Alert banner",
      "Autocomplete",
      "Badges",
      "Breadcrumb",
      "Button",
      "Cards",
      "Checkbox",
      "Chip",
      "Data table",
      "Dialog",
      "Drawer",
      "Form",
      "Icon",
      "Link",
      "List",
      "Menus",
      "Pagination",
      "Popover",
      "Progress bar",
      "Progress indicator",
      "Radio button",
      "Segmented control",
      "Select",
      "Snackbar",
      "Switch",
      "Tabs",
      "Tag",
      "Text area",
      "Text field",
    ],
    industry: "finance",
  },
  {
    id: 25,
    name: "Helly Hansen",
    designSystem: "Design System",
    source: "https://design.hellyhansen.com/",
    biography: "Placeholder - Biografi perusahaan akan diisi nanti",
    components: ["Accordion", "Alert banner", "Avatar", "Button", "Cards", "Checkbox", "Data table", "Divider", "Dropdown", "Link", "List", "Modal", "Page header", "Radio button", "Switch", "Tabs", "Tag", "Text field", "Tooltip"],
    industry: "retail",
  },
  {
    id: 26,
    name: "IBM",
    designSystem: "Carbon",
    source: "https://carbondesignsystem.com/",
    biography: "Placeholder - Biografi perusahaan akan diisi nanti",
    components: [
      "Accordion",
      "Alert banner",
      "Breadcrumb",
      "Button",
      "Cards",
      "Checkbox",
      "Code snippet",
      "Data table",
      "Date picker",
      "Dropdown",
      "Form",
      "Link",
      "List",
      "Menus",
      "Modal",
      "Page header",
      "Pagination",
      "Popover",
      "Progress bar",
      "Progress indicator",
      "Radio button",
      "Search",
      "Segmented control",
      "Select",
      "Slider",
      "Switch",
      "Tabs",
      "Tag",
      "Text field",
      "Tooltip",
      "Tree view",
    ],
    industry: "tech",
  },
  {
    id: 27,
    name: "Ideagen",
    designSystem: "Helix",
    source: "https://www.helixui.com/9904796d6/p/19ace3-helix",
    biography: "Placeholder - Biografi perusahaan akan diisi nanti",
    components: [
      "Accordion",
      "Alert banner",
      "Avatar",
      "Badges",
      "Breadcrumb",
      "Button",
      "Cards",
      "Checkbox",
      "Data table",
      "Date picker",
      "Empty state",
      "Link",
      "Menus",
      "Modal",
      "Page header",
      "Pagination",
      "Progress bar",
      "Radio button",
      "Search",
      "Select",
      "Sidebar",
      "Slider",
      "Switch",
      "Tabs",
      "Tag",
      "Text field",
      "Tooltip",
    ],
    industry: "tech",
  },
  {
    id: 28,
    name: "INPS",
    designSystem: "Sirio",
    source: "https://www.inps.design/3e7e2b0f5/p/69d0de-introduzione",
    biography: "Placeholder - Biografi perusahaan akan diisi nanti",
    components: [
      "Accordion",
      "Alert banner",
      "Breadcrumb",
      "Button",
      "Cards",
      "Checkbox",
      "Chip",
      "Data table",
      "Date picker",
      "Dialog",
      "Dropdown",
      "Navigation bar",
      "Page header",
      "Pagination",
      "Progress bar",
      "Radio button",
      "Search",
      "Slider",
      "Switch",
      "Tabs",
      "Tag",
      "Text field",
      "Tooltip",
    ],
    industry: "government",
  },
  {
    id: 29,
    name: "Kajabi",
    designSystem: "Sage",
    source: "https://sage.kajabi.com/pages/index",
    biography: "Placeholder - Biografi perusahaan akan diisi nanti",
    components: [
      "Accordion",
      "Action bar",
      "Alert banner",
      "Avatar",
      "Badges",
      "Breadcrumb",
      "Button",
      "Cards",
      "Checkbox",
      "Data table",
      "Divider",
      "Drawer",
      "Dropdown",
      "Empty state",
      "Icon",
      "Label",
      "Link",
      "List",
      "Modal",
      "Page header",
      "Pagination",
      "Popover",
      "Progress bar",
      "Progress indicator",
      "Radio button",
      "Search",
      "Sidebar",
      "Snackbar",
      "Switch",
      "Tabs",
      "Tag",
      "Text field",
      "Tooltip",
    ],
    industry: "tech",
  },
  {
    id: 30,
    name: "Kiwicom",
    designSystem: "Orbit",
    source: "https://orbit.kiwi/",
    biography: "Placeholder - Biografi perusahaan akan diisi nanti",
    components: [
      "Accordion",
      "Action list",
      "Alert banner",
      "App bar",
      "Badges",
      "Breadcrumb",
      "Button",
      "Button group",
      "Cards",
      "Checkbox",
      "Data table",
      "Dialog",
      "Divider",
      "Drawer",
      "Empty state",
      "Icon",
      "Link",
      "List",
      "Modal",
      "Pagination",
      "Popover",
      "Progress indicator",
      "Radio button",
      "Segmented control",
      "Select",
      "Slider",
      "Snackbar",
      "Switch",
      "Tabs",
      "Tag",
      "Text area",
      "Text field",
      "Tooltip",
    ],
    industry: "transportation",
  },
  {
    id: 31,
    name: "Lemon Squeezy",
    designSystem: "Wedges",
    source: "https://www.lemonsqueezy.com/wedges",
    biography: "Placeholder - Biografi perusahaan akan diisi nanti",
    components: [
      "Alert banner",
      "Avatar",
      "Badges",
      "Button",
      "Button group",
      "Checkbox",
      "Dropdown",
      "Label",
      "Popover",
      "Progress bar",
      "Progress indicator",
      "Radio button",
      "Select",
      "Slider",
      "Switch",
      "Tabs",
      "Tag",
      "Text area",
      "Text field",
      "Tooltip",
    ],
    industry: "tech",
  },
  {
    id: 32,
    name: "Line",
    designSystem: "Design System",
    source: "https://designsystem.line.me/",
    biography: "Placeholder - Biografi perusahaan akan diisi nanti",
    components: [
      "Avatar",
      "Badges",
      "Bottom sheet",
      "Button",
      "Checkbox",
      "Chip",
      "Dialog",
      "Menus",
      "Navigation bar",
      "Pagination",
      "Progress bar",
      "Progress indicator",
      "Radio button",
      "Segmented control",
      "Select",
      "Sidebar",
      "Slider",
      "Snackbar",
      "Switch",
      "Tabs",
      "Tag",
      "Text area",
      "Text field",
      "Tooltip",
    ],
    industry: "tech",
  },
  {
    id: 33,
    name: "LocalTapiola",
    designSystem: "Duet",
    source: "https://www.duetds.com/",
    biography: "Placeholder - Biografi perusahaan akan diisi nanti",
    components: [
      "Accordion",
      "Action bar",
      "Action button",
      "Alert banner",
      "Badges",
      "Breadcrumb",
      "Button",
      "Cards",
      "Checkbox",
      "Chip",
      "Combobox",
      "Data table",
      "Date picker",
      "Divider",
      "Empty state",
      "Icon",
      "Label",
      "Link",
      "List",
      "Modal",
      "Navigation bar",
      "Page header",
      "Pagination",
      "Progress bar",
      "Progress indicator",
      "Radio button",
      "Select",
      "Slider",
      "Switch",
      "Tabs",
      "Text area",
      "Text field",
      "Tooltip",
    ],
    industry: "finance",
  },
  {
    id: 34,
    name: "Michelin",
    designSystem: "Motion",
    source: "https://designsystem.michelin.com/",
    biography: "Placeholder - Biografi perusahaan akan diisi nanti",
    components: [
      "Accordion",
      "Alert banner",
      "Breadcrumb",
      "Button",
      "Cards",
      "Checkbox",
      "Data table",
      "Date picker",
      "Dropdown",
      "Icon",
      "Label",
      "Link",
      "Modal",
      "Navigation bar",
      "Page header",
      "Pagination",
      "Progress bar",
      "Progress indicator",
      "Radio button",
      "Sidebar",
      "Switch",
      "Tabs",
      "Tag",
      "Text field",
      "Tooltip",
      "Tree view",
    ],
    industry: "automotive",
  },
  {
    id: 35,
    name: "Microsoft",
    designSystem: "Fluent 2",
    source: "https://fluent2.microsoft.design/",
    biography: "Placeholder - Biografi perusahaan akan diisi nanti",
    components: [
      "Accordion",
      "Action bar",
      "Avatar",
      "Badges",
      "Button",
      "Cards",
      "Checkbox",
      "Combobox",
      "Dialog",
      "Divider",
      "Dropdown",
      "Icon",
      "Label",
      "Link",
      "Menus",
      "Popover",
      "Progress bar",
      "Progress indicator",
      "Radio button",
      "Select",
      "Slider",
      "Switch",
      "Tabs",
      "Text area",
      "Text field",
      "Tooltip",
    ],
    industry: "tech",
  },
  {
    id: 36,
    name: "Monday.com",
    designSystem: "Vide",
    source: "https://vibe.monday.com/",
    biography: "Placeholder - Biografi perusahaan akan diisi nanti",
    components: [
      "Accordion",
      "Alert banner",
      "Avatar",
      "Badges",
      "Breadcrumb",
      "Button",
      "Checkbox",
      "Chip",
      "Combobox",
      "Data table",
      "Date picker",
      "Dialog",
      "Divider",
      "Dropdown",
      "Icon",
      "Label",
      "Link",
      "List",
      "Menus",
      "Modal",
      "Progress bar",
      "Progress indicator",
      "Radio button",
      "Search",
      "Segmented control",
      "Slider",
      "Snackbar",
      "Switch",
      "Tabs",
      "Text field",
      "Tooltip",
    ],
    industry: "tech",
  },
  {
    id: 37,
    name: "MongoDB",
    designSystem: "LeafyGreen",
    source: "https://www.mongodb.design/",
    biography: "Placeholder - Biografi perusahaan akan diisi nanti",
    components: [
      "Accordion",
      "Alert banner",
      "Avatar",
      "Badges",
      "Button",
      "Cards",
      "Checkbox",
      "Chip",
      "Code snippet",
      "Combobox",
      "Data table",
      "Date picker",
      "Empty state",
      "Form",
      "Icon",
      "Menus",
      "Modal",
      "Pagination",
      "Popover",
      "Progress bar",
      "Progress indicator",
      "Radio button",
      "Search",
      "Segmented control",
      "Select",
      "Sidebar",
      "Snackbar",
      "Switch",
      "Tabs",
      "Text area",
      "Text field",
      "Tooltip",
    ],
    industry: "tech",
  },
  {
    id: 38,
    name: "Motorway",
    designSystem: "Highway Code",
    source: "https://thc.motorway.co.uk/0566ad526/p/652544-the-highway-code",
    biography: "Placeholder - Biografi perusahaan akan diisi nanti",
    components: ["Alert banner", "Badges", "Button", "Checkbox", "Chip", "Date picker", "Empty state", "Form", "Icon", "Link", "Progress bar", "Progress indicator", "Radio button", "Select", "Snackbar", "Switch", "Text area", "Text field"],
    industry: "automotive",
  },
  {
    id: 39,
    name: "Mozilla",
    designSystem: "Protocol",
    source: "https://protocol.mozilla.org/",
    biography: "Placeholder - Biografi perusahaan akan diisi nanti",
    components: ["Accordion", "Breadcrumb", "Button", "Cards", "Checkbox", "Data table", "Date picker", "Form", "Link", "List", "Menus", "Modal", "Radio button", "Search", "Select", "Sidebar", "Text area", "Text field"],
    industry: "tech",
  },
  {
    id: 40,
    name: "Nordhealth",
    designSystem: "Design System",
    source: "https://nordhealth.design/",
    biography: "Placeholder - Biografi perusahaan akan diisi nanti",
    components: [
      "Alert banner",
      "App bar",
      "Avatar",
      "Badges",
      "Button",
      "Button group",
      "Cards",
      "Checkbox",
      "Data table",
      "Date picker",
      "Divider",
      "Drawer",
      "Dropdown",
      "Empty state",
      "Icon",
      "Menus",
      "Modal",
      "Page header",
      "Popover",
      "Progress bar",
      "Progress indicator",
      "Radio button",
      "Select",
      "Sidebar",
      "Slider",
      "Snackbar",
      "Switch",
      "Tabs",
      "Text area",
      "Text field",
      "Tooltip",
    ],
    industry: "healthcare",
  },
  {
    id: 41,
    name: "NS",
    designSystem: "Tractie",
    source: "https://tractie.ns.nl/2e23992f3/p/226ce1-tractie--ns-design-system",
    biography: "Placeholder - Biografi perusahaan akan diisi nanti",
    components: [
      "Accordion",
      "Action bar",
      "Action list",
      "Alert banner",
      "Badges",
      "Breadcrumb",
      "Button",
      "Checkbox",
      "Chip",
      "Data table",
      "Date picker",
      "Dialog",
      "Divider",
      "Form",
      "Help text",
      "Icon",
      "Label",
      "Link",
      "List",
      "Navigation bar",
      "Page header",
      "Pagination",
      "Popover",
      "Progress indicator",
      "Radio button",
      "Search",
      "Segmented control",
      "Select",
      "Sidebar",
      "Slider",
      "Snackbar",
      "Switch",
      "Tabs",
      "Tag",
      "Text area",
      "Text field",
      "Tooltip",
    ],
    industry: "transportation",
  },
  {
    id: 42,
    name: "Ontario",
    designSystem: "Design System",
    source: "https://designsystem.ontario.ca/",
    biography: "Placeholder - Biografi perusahaan akan diisi nanti",
    components: [
      "Accordion",
      "Alert banner",
      "Badges",
      "Button",
      "Cards",
      "Checkbox",
      "Data table",
      "Date picker",
      "Dropdown",
      "Icon",
      "Label",
      "Page header",
      "Progress bar",
      "Progress indicator",
      "Radio button",
      "Search",
      "Text area",
      "Text field",
    ],
    industry: "government",
  },
  {
    id: 43,
    name: "Orange",
    designSystem: "Design System",
    source: "https://system.design.orange.com/0c1af118d/p/0127c5-the-orange-design-system",
    biography: "Placeholder - Biografi perusahaan akan diisi nanti",
    components: [
      "Accordion",
      "Alert banner",
      "Breadcrumb",
      "Button",
      "Cards",
      "Checkbox",
      "Data table",
      "Dropdown",
      "Form",
      "Modal",
      "Navigation bar",
      "Page header",
      "Pagination",
      "Popover",
      "Progress bar",
      "Progress indicator",
      "Radio button",
      "Search",
      "Segmented control",
      "Sidebar",
      "Slider",
      "Switch",
      "Tabs",
      "Tag",
      "Text field",
      "Tooltip",
    ],
    industry: "tech",
  },
  {
    id: 44,
    name: "Palantir",
    designSystem: "Blueprint",
    source: "https://blueprintjs.com/docs/",
    biography: "Placeholder - Biografi perusahaan akan diisi nanti",
    components: [
      "Alert banner",
      "App bar",
      "Autocomplete",
      "Breadcrumb",
      "Button",
      "Button group",
      "Cards",
      "Checkbox",
      "Data table",
      "Date picker",
      "Dialog",
      "Divider",
      "Drawer",
      "Empty state",
      "Form",
      "Icon",
      "Label",
      "Menus",
      "Popover",
      "Progress bar",
      "Progress indicator",
      "Radio button",
      "Select",
      "Slider",
      "Snackbar",
      "Switch",
      "Tabs",
      "Tag",
      "Text area",
      "Text field",
      "Tooltip",
      "Tree view",
    ],
    industry: "tech",
  },
  {
    id: 45,
    name: "Pinterest",
    designSystem: "Gestalt",
    source: "https://gestalt.pinterest.systems/home",
    biography: "Placeholder - Biografi perusahaan akan diisi nanti",
    components: [
      "Alert banner",
      "Avatar",
      "Badges",
      "Button",
      "Button group",
      "Checkbox",
      "Combobox",
      "Data table",
      "Date picker",
      "Divider",
      "Dropdown",
      "Form",
      "Icon",
      "Label",
      "Link",
      "List",
      "Modal",
      "Page header",
      "Popover",
      "Progress indicator",
      "Radio button",
      "Segmented control",
      "Switch",
      "Tabs",
      "Tag",
      "Text area",
      "Text field",
      "Tooltip",
    ],
    industry: "tech",
  },
  {
    id: 46,
    name: "Pluralsight",
    designSystem: "Design System",
    source: "https://pando.pluralsight.com/92687036d/p/38aa59-psds-classic-docs-map",
    biography: "Placeholder - Biografi perusahaan akan diisi nanti",
    components: [
      "Alert banner",
      "App bar",
      "Avatar",
      "Badges",
      "Breadcrumb",
      "Button",
      "Cards",
      "Checkbox",
      "Code snippet",
      "Data table",
      "Date picker",
      "Dialog",
      "Drawer",
      "Dropdown",
      "Empty state",
      "Form",
      "Icon",
      "Label",
      "Link",
      "List",
      "Menus",
      "Page header",
      "Progress bar",
      "Progress indicator",
      "Radio button",
      "Search",
      "Segmented control",
      "Switch",
      "Tabs",
      "Tag",
      "Text area",
      "Text field",
      "Tooltip",
    ],
    industry: "education",
  },
  {
    id: 47,
    name: "Porsche",
    designSystem: "Design System",
    source: "https://designsystems.surf/products/design-system-reality-check",
    biography: "Placeholder - Biografi perusahaan akan diisi nanti",
    components: [
      "Accordion",
      "Alert banner",
      "Button",
      "Button group",
      "Checkbox",
      "Data table",
      "Divider",
      "Drawer",
      "Icon",
      "Inline message",
      "Link",
      "List",
      "Modal",
      "Pagination",
      "Popover",
      "Progress indicator",
      "Radio button",
      "Segmented control",
      "Select",
      "Snackbar",
      "Switch",
      "Tabs",
      "Tag",
      "Text area",
      "Text field",
    ],
    industry: "automotive",
  },
  {
    id: 48,
    name: "Razorpay",
    designSystem: "Blade",
    source: "https://blade.razorpay.com/?path=/docs/guides-intro--docs",
    biography: "Placeholder - Biografi perusahaan akan diisi nanti",
    components: [
      "Accordion",
      "Alert banner",
      "Badges",
      "Bottom sheet",
      "Breadcrumb",
      "Button",
      "Button group",
      "Cards",
      "Checkbox",
      "Chip",
      "Data table",
      "Divider",
      "Drawer",
      "Dropdown",
      "Icon",
      "Link",
      "List",
      "Modal",
      "Popover",
      "Progress bar",
      "Progress indicator",
      "Radio button",
      "Snackbar",
      "Switch",
      "Tabs",
      "Tag",
      "Text area",
      "Text field",
      "Tooltip",
    ],
    industry: "finance",
  },
  {
    id: 49,
    name: "Red Hat",
    designSystem: "PatternFly",
    source: "https://www.patternfly.org/",
    biography: "Placeholder - Biografi perusahaan akan diisi nanti",
    components: [
      "Accordion",
      "Action bar",
      "Action list",
      "Alert banner",
      "App bar",
      "Avatar",
      "Badges",
      "Breadcrumb",
      "Button",
      "Cards",
      "Checkbox",
      "Chip",
      "Code snippet",
      "Data table",
      "Date picker",
      "Divider",
      "Drawer",
      "Dropdown",
      "Empty state",
      "Form",
      "Help text",
      "Icon",
      "List",
      "Menus",
      "Modal",
      "Pagination",
      "Popover",
      "Progress bar",
      "Progress indicator",
      "Radio button",
      "Search",
      "Select",
      "Sidebar",
      "Slider",
      "Switch",
      "Tabs",
      "Tag",
      "Text area",
      "Text field",
      "Tooltip",
      "Tree view",
    ],
    industry: "tech",
  },
  {
    id: 50,
    name: "Rei",
    designSystem: "Cedar",
    source: "https://cedar.rei.com/",
    biography: "Placeholder - Biografi perusahaan akan diisi nanti",
    components: [
      "Accordion",
      "Alert banner",
      "Breadcrumb",
      "Button",
      "Cards",
      "Checkbox",
      "Chip",
      "Data table",
      "Icon",
      "Link",
      "List",
      "Modal",
      "Pagination",
      "Popover",
      "Radio button",
      "Segmented control",
      "Select",
      "Snackbar",
      "Switch",
      "Tabs",
      "Text field",
      "Tooltip",
    ],
    industry: "retail",
  },
  {
    id: 51,
    name: "Salesforce",
    designSystem: "Lightning",
    source: "https://www.lightningdesignsystem.com/2e1ef8501",
    biography: "Placeholder - Biografi perusahaan akan diisi nanti",
    components: [
      "Accordion",
      "Alert banner",
      "Avatar",
      "Badges",
      "Breadcrumb",
      "Button",
      "Button group",
      "Cards",
      "Checkbox",
      "Combobox",
      "Data table",
      "Date picker",
      "Drawer",
      "Empty state",
      "Form",
      "Icon",
      "Inline message",
      "Menus",
      "Modal",
      "Page header",
      "Popover",
      "Progress bar",
      "Progress indicator",
      "Radio button",
      "Select",
      "Sidebar",
      "Slider",
      "Snackbar",
      "Tabs",
      "Text area",
      "Text field",
      "Tooltip",
      "Tree view",
    ],
    industry: "tech",
  },
  {
    id: 52,
    name: "Samsung",
    designSystem: "One UI",
    source: "https://developer.samsung.com/one-ui",
    biography: "Placeholder - Biografi perusahaan akan diisi nanti",
    components: ["App bar", "Button", "Dialog", "List", "Navigation bar", "Search", "Snackbar", "Tabs"],
    industry: "tech",
  },
  {
    id: 53,
    name: "Seek",
    designSystem: "Braid",
    source: "https://seek-oss.github.io/braid-design-system/",
    biography: "Placeholder - Biografi perusahaan akan diisi nanti",
    components: [
      "Accordion",
      "Alert banner",
      "Badges",
      "Button",
      "Button group",
      "Cards",
      "Checkbox",
      "Dialog",
      "Divider",
      "Drawer",
      "Dropdown",
      "Label",
      "List",
      "Menus",
      "Pagination",
      "Progress indicator",
      "Radio button",
      "Snackbar",
      "Switch",
      "Tabs",
      "Tag",
      "Text area",
      "Text field",
      "Tooltip",
    ],
    industry: "tech",
  },
  {
    id: 54,
    name: "Segment",
    designSystem: "Evergreen",
    source: "https://evergreen.segment.com/",
    biography: "Placeholder - Biografi perusahaan akan diisi nanti",
    components: [
      "Alert banner",
      "Autocomplete",
      "Avatar",
      "Badges",
      "Button",
      "Checkbox",
      "Combobox",
      "Data table",
      "Dialog",
      "Drawer",
      "Empty state",
      "Menus",
      "Pagination",
      "Popover",
      "Progress indicator",
      "Radio button",
      "Search",
      "Select",
      "Snackbar",
      "Switch",
      "Tabs",
      "Text area",
      "Text field",
      "Tooltip",
    ],
    industry: "tech",
  },
  {
    id: 55,
    name: "ServiceNow",
    designSystem: "Horizon",
    source: "https://horizon.servicenow.com/",
    biography: "Placeholder - Biografi perusahaan akan diisi nanti",
    components: [
      "Accordion",
      "Alert banner",
      "Avatar",
      "Badges",
      "Breadcrumb",
      "Button",
      "Cards",
      "Checkbox",
      "Chip",
      "Date picker",
      "Dropdown",
      "Empty state",
      "Icon",
      "Label",
      "Link",
      "Menus",
      "Modal",
      "Pagination",
      "Progress bar",
      "Progress indicator",
      "Radio button",
      "Switch",
      "Tabs",
      "Text area",
      "Text field",
      "Tooltip",
    ],
    industry: "tech",
  },
  {
    id: 56,
    name: "Shopify",
    designSystem: "Polaris",
    source: "https://polaris-react.shopify.com/",
    biography: "Placeholder - Biografi perusahaan akan diisi nanti",
    components: [
      "Action list",
      "Alert banner",
      "App bar",
      "Autocomplete",
      "Avatar",
      "Badges",
      "Button",
      "Button group",
      "Cards",
      "Checkbox",
      "Combobox",
      "Data table",
      "Date picker",
      "Divider",
      "Empty state",
      "Filter input",
      "Form",
      "Icon",
      "Inline message",
      "Link",
      "List",
      "Menus",
      "Modal",
      "Pagination",
      "Popover",
      "Progress bar",
      "Progress indicator",
      "Radio button",
      "Select",
      "Sidebar",
      "Slider",
      "Snackbar",
      "Tabs",
      "Tag",
      "Text field",
      "Tooltip",
    ],
    industry: "ecommerce",
  },
  {
    id: 57,
    name: "Skoda",
    designSystem: "Flow",
    source: "https://flow.skoda-brand.com/d/6aQMrmD6PhWL",
    biography: "Placeholder - Biografi perusahaan akan diisi nanti",
    components: [
      "Accordion",
      "Alert banner",
      "Bottom sheet",
      "Button",
      "Cards",
      "Checkbox",
      "Chip",
      "Label",
      "List",
      "Menus",
      "Modal",
      "Navigation bar",
      "Pagination",
      "Progress indicator",
      "Radio button",
      "Search",
      "Slider",
      "Snackbar",
      "Switch",
      "Tabs",
      "Text field",
    ],
    industry: "automotive",
  },
  {
    id: 58,
    name: "Sprout Social",
    designSystem: "Design System",
    source: "https://seeds.sproutsocial.com/",
    biography: "Placeholder - Biografi perusahaan akan diisi nanti",
    components: [
      "Alert banner",
      "Avatar",
      "Badges",
      "Breadcrumb",
      "Button",
      "Cards",
      "Checkbox",
      "Chip",
      "Data table",
      "Date picker",
      "Drawer",
      "Empty state",
      "Form",
      "Icon",
      "Label",
      "Link",
      "Menus",
      "Modal",
      "Progress indicator",
      "Radio button",
      "Segmented control",
      "Select",
      "Sidebar",
      "Snackbar",
      "Switch",
      "Tabs",
      "Text area",
      "Text field",
      "Tooltip",
    ],
    industry: "tech",
  },
  {
    id: 59,
    name: "SumUp",
    designSystem: "Circuit",
    source: "https://circuit.sumup.com/?path=/docs/introduction-welcome--docs",
    biography: "Placeholder - Biografi perusahaan akan diisi nanti",
    components: [
      "Alert banner",
      "Avatar",
      "Badges",
      "Button",
      "Cards",
      "Checkbox",
      "Chip",
      "Date picker",
      "Dialog",
      "Menus",
      "Modal",
      "Pagination",
      "Popover",
      "Progress bar",
      "Progress indicator",
      "Radio button",
      "Search",
      "Select",
      "Snackbar",
      "Switch",
      "Tabs",
      "Tag",
      "Text area",
      "Text field",
      "Tooltip",
    ],
    industry: "finance",
  },
  {
    id: 60,
    name: "Sunrise",
    designSystem: "Solar",
    source: "https://design.sunrise.fr/",
    biography: "Placeholder - Biografi perusahaan akan diisi nanti",
    components: [
      "Accordion",
      "Alert banner",
      "Badges",
      "Breadcrumb",
      "Button",
      "Cards",
      "Checkbox",
      "Data table",
      "Date picker",
      "Dialog",
      "Divider",
      "Dropdown",
      "Filter input",
      "Form",
      "List",
      "Page header",
      "Pagination",
      "Progress bar",
      "Progress indicator",
      "Radio button",
      "Segmented control",
      "Slider",
      "Switch",
      "Tabs",
      "Text area",
      "Text field",
      "Tooltip",
    ],
    industry: "tech",
  },
  {
    id: 61,
    name: "Teamleader",
    designSystem: "Ahoy",
    source: "https://ahoy.teamleader.design/3547946e7/p/223d3f-ahoy",
    biography: "Placeholder - Biografi perusahaan akan diisi nanti",
    components: [
      "Action bar",
      "Alert banner",
      "Avatar",
      "Badges",
      "Button",
      "Cards",
      "Data table",
      "Date picker",
      "Dialog",
      "Empty state",
      "Filter input",
      "Label",
      "Menus",
      "Pagination",
      "Popover",
      "Progress bar",
      "Progress indicator",
      "Sidebar",
      "Snackbar",
      "Tabs",
      "Tag",
      "Text field",
      "Tooltip",
    ],
    industry: "tech",
  },
  {
    id: 62,
    name: "Thumbtack",
    designSystem: "Thumbprint",
    source: "https://thumbprint.design/",
    biography: "Placeholder - Biografi perusahaan akan diisi nanti",
    components: [
      "Alert banner",
      "Avatar",
      "Button",
      "Button group",
      "Checkbox",
      "Chip",
      "Date picker",
      "Dropdown",
      "Help text",
      "Label",
      "Link",
      "List",
      "Modal",
      "Navigation bar",
      "Popover",
      "Progress indicator",
      "Radio button",
      "Snackbar",
      "Switch",
      "Tag",
      "Text area",
      "Text field",
      "Tooltip",
    ],
    industry: "tech",
  },
  {
    id: 63,
    name: "Twilio",
    designSystem: "Paste",
    source: "https://paste.twilio.design/",
    biography: "Placeholder - Biografi perusahaan akan diisi nanti",
    components: [
      "Accordion",
      "Alert banner",
      "Avatar",
      "Badges",
      "Breadcrumb",
      "Button",
      "Button group",
      "Cards",
      "Checkbox",
      "Code snippet",
      "Combobox",
      "Data table",
      "Date picker",
      "Divider",
      "Drawer",
      "Form",
      "Help text",
      "Icon",
      "Label",
      "List",
      "Menus",
      "Modal",
      "Pagination",
      "Popover",
      "Progress indicator",
      "Select",
      "Snackbar",
      "Switch",
      "Tabs",
      "Text area",
      "Text field",
      "Tooltip",
    ],
    industry: "tech",
  },
  {
    id: 64,
    name: "U.S. Web",
    designSystem: "Design System",
    source: "https://designsystem.digital.gov/",
    biography: "Placeholder - Biografi perusahaan akan diisi nanti",
    components: [
      "Accordion",
      "Alert banner",
      "Breadcrumb",
      "Button",
      "Button group",
      "Cards",
      "Checkbox",
      "Combobox",
      "Data table",
      "Date picker",
      "Form",
      "Icon",
      "Link",
      "List",
      "Modal",
      "Page header",
      "Pagination",
      "Progress bar",
      "Radio button",
      "Search",
      "Select",
      "Sidebar",
      "Slider",
      "Tag",
      "Text field",
      "Tooltip",
    ],
    industry: "government",
  },
  {
    id: 65,
    name: "UAE",
    designSystem: "Design System",
    source: "https://designsystem.gov.ae/",
    biography: "Placeholder - Biografi perusahaan akan diisi nanti",
    components: [
      "Accordion",
      "Alert banner",
      "Avatar",
      "Badges",
      "Breadcrumb",
      "Button",
      "Cards",
      "Checkbox",
      "Date picker",
      "Dropdown",
      "Link",
      "Modal",
      "Navigation bar",
      "Pagination",
      "Popover",
      "Progress bar",
      "Radio button",
      "Select",
      "Slider",
      "Snackbar",
      "Switch",
      "Tabs",
      "Text area",
      "Text field",
      "Tooltip",
    ],
    industry: "government",
  },
  {
    id: 66,
    name: "Uber",
    designSystem: "Base",
    source: "https://base.uber.com/",
    biography: "Placeholder - Biografi perusahaan akan diisi nanti",
    components: [
      "Accordion",
      "Alert banner",
      "App bar",
      "Avatar",
      "Badges",
      "Bottom sheet",
      "Breadcrumb",
      "Button",
      "Cards",
      "Checkbox",
      "Chip",
      "Data table",
      "Date picker",
      "Dialog",
      "Divider",
      "Drawer",
      "Empty state",
      "Link",
      "Menus",
      "Modal",
      "Navigation bar",
      "Pagination",
      "Popover",
      "Progress bar",
      "Progress indicator",
      "Radio button",
      "Segmented control",
      "Select",
      "Sidebar",
      "Slider",
      "Snackbar",
      "Switch",
      "Tabs",
      "Tag",
      "Text field",
      "Tooltip",
      "Tree view",
    ],
    industry: "transportation",
  },
  {
    id: 67,
    name: "Vercel",
    designSystem: "Geist",
    source: "https://designsystems.surf/design-systems/vercel",
    biography: "Placeholder - Biografi perusahaan akan diisi nanti",
    components: [
      "Accordion",
      "Avatar",
      "Badges",
      "Breadcrumb",
      "Button",
      "Checkbox",
      "Code snippet",
      "Combobox",
      "Data table",
      "Date picker",
      "Drawer",
      "Empty state",
      "Menus",
      "Modal",
      "Pagination",
      "Progress bar",
      "Progress indicator",
      "Radio button",
      "Segmented control",
      "Select",
      "Slider",
      "Snackbar",
      "Switch",
      "Tabs",
      "Text area",
      "Text field",
      "Tooltip",
      "Tree view",
    ],
    industry: "tech",
  },
  {
    id: 68,
    name: "Visa",
    designSystem: "Design System",
    source: "https://design.visa.com/",
    biography: "Placeholder - Biografi perusahaan akan diisi nanti",
    components: [
      "Accordion",
      "Alert banner",
      "Avatar",
      "Badges",
      "Breadcrumb",
      "Button",
      "Cards",
      "Checkbox",
      "Chip",
      "Combobox",
      "Data table",
      "Date picker",
      "Dialog",
      "Divider",
      "Dropdown",
      "Icon",
      "Link",
      "List",
      "Navigation bar",
      "Pagination",
      "Progress bar",
      "Radio button",
      "Segmented control",
      "Select",
      "Sidebar",
      "Slider",
      "Switch",
      "Tabs",
      "Text field",
      "Tooltip",
    ],
    industry: "finance",
  },
  {
    id: 69,
    name: "Washington Post",
    designSystem: "Design System",
    source: "https://build.washingtonpost.com/",
    biography: "Placeholder - Biografi perusahaan akan diisi nanti",
    components: [
      "Accordion",
      "Alert banner",
      "Avatar",
      "Button",
      "Cards",
      "Checkbox",
      "Dialog",
      "Divider",
      "Drawer",
      "Icon",
      "Menus",
      "Navigation bar",
      "Pagination",
      "Popover",
      "Radio button",
      "Search",
      "Select",
      "Switch",
      "Tabs",
      "Text area",
      "Text field",
      "Tooltip",
    ],
    industry: "media",
  },
  {
    id: 70,
    name: "Wikimedia",
    designSystem: "Codex",
    source: "https://doc.wikimedia.org/codex/latest/",
    biography: "Placeholder - Biografi perusahaan akan diisi nanti",
    components: [
      "Accordion",
      "Alert banner",
      "Autocomplete",
      "Avatar",
      "Button",
      "Button group",
      "Cards",
      "Checkbox",
      "Chip",
      "Combobox",
      "Dialog",
      "Icon",
      "Label",
      "Link",
      "Menus",
      "Progress bar",
      "Radio button",
      "Search",
      "Select",
      "Switch",
      "Tabs",
      "Text area",
      "Text field",
    ],
    industry: "tech",
  },
  {
    id: 71,
    name: "Wise",
    designSystem: "Design System",
    source: "https://wise.design/",
    biography: "Placeholder - Biografi perusahaan akan diisi nanti",
    components: ["Alert banner", "Avatar", "Bottom sheet", "Button", "Checkbox", "Chip", "Date picker", "Dropdown", "Modal", "Popover", "Radio button", "Search", "Snackbar", "Switch", "Tabs", "Text area", "Text field"],
    industry: "finance",
  },
  {
    id: 72,
    name: "Wonderflow",
    designSystem: "Wanda",
    source: "https://design.wonderflow.ai/",
    biography: "Placeholder - Biografi perusahaan akan diisi nanti",
    components: [
      "Accordion",
      "Autocomplete",
      "Avatar",
      "Button",
      "Cards",
      "Checkbox",
      "Chip",
      "Data table",
      "Divider",
      "Drawer",
      "Icon",
      "List",
      "Menus",
      "Modal",
      "Pagination",
      "Popover",
      "Progress bar",
      "Progress indicator",
      "Radio button",
      "Select",
      "Slider",
      "Snackbar",
      "Switch",
      "Tabs",
      "Text field",
      "Tooltip",
    ],
    industry: "tech",
  },
  {
    id: 73,
    name: "Workday",
    designSystem: "Canvas",
    source: "https://canvas.workday.com/",
    biography: "Placeholder - Biografi perusahaan akan diisi nanti",
    components: [
      "Accordion",
      "Action bar",
      "Breadcrumb",
      "Button",
      "Cards",
      "Checkbox",
      "Chip",
      "Data table",
      "Dialog",
      "Form",
      "Menus",
      "Modal",
      "Pagination",
      "Progress indicator",
      "Radio button",
      "Segmented control",
      "Select",
      "Sidebar",
      "Snackbar",
      "Switch",
      "Tabs",
      "Text area",
      "Text field",
      "Tooltip",
    ],
    industry: "tech",
  },
  {
    id: 74,
    name: "WorkOS",
    designSystem: "Radix",
    source: "https://www.radix-ui.com/",
    biography: "Placeholder - Biografi perusahaan akan diisi nanti",
    components: ["Accordion", "Action bar", "Avatar", "Checkbox", "Dialog", "Form", "Label", "Link", "Menus", "Navigation bar", "Popover", "Progress bar", "Radio button", "Select", "Slider", "Snackbar", "Switch", "Tabs", "Tooltip"],
    industry: "tech",
  },
  {
    id: 75,
    name: "Zendesk",
    designSystem: "Garden",
    source: "https://garden.zendesk.com/",
    biography: "Placeholder - Biografi perusahaan akan diisi nanti",
    components: [
      "Accordion",
      "Alert banner",
      "Avatar",
      "Breadcrumb",
      "Button",
      "Checkbox",
      "Code snippet",
      "Combobox",
      "Data table",
      "Date picker",
      "Drawer",
      "List",
      "Menus",
      "Modal",
      "Pagination",
      "Progress bar",
      "Progress indicator",
      "Radio button",
      "Select",
      "Slider",
      "Switch",
      "Tabs",
      "Tag",
      "Text area",
      "Text field",
      "Tooltip",
    ],
    industry: "tech",
  },
];

// Data komponen UI yang tersedia
const allComponents = [
  "Accordion",
  "Action bar",
  "Action button",
  "Action list",
  "Alert banner",
  "App bar",
  "Autocomplete",
  "Avatar",
  "Badges",
  "Bottom sheet",
  "Breadcrumb",
  "Button",
  "Button group",
  "Cards",
  "Checkbox",
  "Chip",
  "Code snippet",
  "Combobox",
  "Data table",
  "Date picker",
  "Dialog",
  "Divider",
  "Drawer",
  "Dropdown",
  "Empty state",
  "Filter input",
  "Form",
  "Help text",
  "Icon",
  "Inline message",
  "Label",
  "Link",
  "List",
  "Menus",
  "Modal",
  "Navigation bar",
  "Page header",
  "Pagination",
  "Popover",
  "Progress bar",
  "Progress indicator",
  "Radio button",
  "Search",
  "Segmented control",
  "Select",
  "Sidebar",
  "Slider",
  "Snackbar",
  "Switch",
  "Tabs",
  "Tag",
  "Text area",
  "Text field",
  "Tooltip",
  "Tree view",
];

const componentCategories = [
  {
    id: "actions",
    label: "Aksi & kontrol",
    components: ["Action bar", "Action button", "Action list", "Button", "Button group", "Segmented control", "Slider", "Switch"],
  },
  {
    id: "forms",
    label: "Form & input",
    components: ["Autocomplete", "Checkbox", "Combobox", "Date picker", "Dropdown", "Filter input", "Form", "Label", "Radio button", "Search", "Select", "Text area", "Text field"],
  },
  {
    id: "navigation",
    label: "Navigasi & struktur",
    components: ["App bar", "Breadcrumb", "Link", "Navigation bar", "Page header", "Pagination", "Sidebar", "Tabs", "Tree view"],
  },
  {
    id: "overlays",
    label: "Overlay & disclosure",
    components: ["Accordion", "Bottom sheet", "Dialog", "Drawer", "Menus", "Modal", "Popover", "Tooltip"],
  },
  {
    id: "feedback",
    label: "Feedback & status",
    components: ["Alert banner", "Badges", "Empty state", "Help text", "Inline message", "Progress bar", "Progress indicator", "Snackbar"],
  },
  {
    id: "display",
    label: "Konten & data display",
    components: ["Avatar", "Cards", "Chip", "Code snippet", "Data table", "Divider", "Icon", "List", "Tag"],
  },
];

// State aplikasi
let currentPage = 1;
const itemsPerPage = 45;
let filteredCompanies = [...companiesData];
let filteredComponents = [...allComponents];
let componentSearchTerm = "";
let selectedComponentCategory = "";
let selectedComponent = null; // Komponen yang sedang dipilih

// Inisialisasi aplikasi
document.addEventListener("DOMContentLoaded", function () {
  initializeApp();
  initializeDarkMode();
});

function initializeApp() {
  renderCompanyTable();
  renderComponentList();
  renderComponentCategoryControls();
  renderKeyFindings();
  renderBayuLens();
  initializeCompareMode();
  setupEventListeners();
  initializeComponentDropdown();
  initializeIndustryDropdown();
  updatePagination();
  updateCompanyCount();
  updateDashboardStats();
  initializeCreatorModal();
  initializeMobileNavMenu();
  updateFooterYear();
}

function updateFooterYear() {
  const footerYear = document.getElementById("footerYear");
  if (footerYear) {
    footerYear.textContent = new Date().getFullYear();
  }
}

// Render tabel perusahaan
function renderCompanyTable() {
  const tbody = document.getElementById("companyTableBody");

  if (!tbody) {
    console.error("companyTableBody element not found!");
    return;
  }

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const companiesToShow = filteredCompanies.slice(startIndex, endIndex);

  tbody.innerHTML = companiesToShow
    .map(
      (company, index) => `
        <tr class="table-row" style="--row-delay: ${Math.min(index * 18, 240)}ms" onclick="showCompanyDetail(${company.id})">
            <td class="table-cell whitespace-nowrap font-medium">
                ${startIndex + index + 1}
            </td>
            <td class="table-cell whitespace-nowrap">
                <div class="company-name">${company.name}</div>
                <div class="company-meta">${company.industry}</div>
            </td>
            <td class="table-cell whitespace-nowrap">
                <span class="chip chip-neutral">${company.designSystem}</span>
            </td>
            <td class="table-cell">
                <div class="flex flex-wrap gap-1">
                     ${(() => {
                       const visibleComponents = company.components.slice(0, 3);
                       const selectedIsHidden = selectedComponent && company.components.includes(selectedComponent) && !visibleComponents.includes(selectedComponent);

                       if (selectedIsHidden) {
                         visibleComponents.push(selectedComponent);
                       }

                       const chips = visibleComponents
                         .map(component => {
                           const isSelected = selectedComponent === component;
                           const chipClass = isSelected ? "chip-selected" : "chip-blue";
                           return `
                              <span class="chip ${chipClass}">
                                  ${component}
                              </span>
                            `;
                         })
                         .join("");

                       const hiddenCount = company.components.length - visibleComponents.length;
                       const hiddenChip =
                         hiddenCount > 0
                           ? `
                              <span class="chip chip-neutral">
                                  +${hiddenCount}
                              </span>
                            `
                           : "";

                       return chips + hiddenChip;
                     })()}
                </div>
            </td>
            <td class="table-cell whitespace-nowrap font-semibold text-slate-950 dark:text-white">
                ${company.components.length}
            </td>
        </tr>
    `
    )
    .join("");

  updatePagination();
  updateDashboardStats();
}

// Render daftar komponen
function renderComponentList() {
  const componentList = document.getElementById("componentList");

  if (!componentList) {
    console.error("componentList element not found!");
    return;
  }

  // Ranking komponen memakai dataset penuh agar posisi item tidak berubah saat komponen dipilih.
  const componentStatsCompanies = companiesData;
  const componentFrequency = {};
  componentStatsCompanies.forEach(company => {
    company.components.forEach(component => {
      componentFrequency[component] = (componentFrequency[component] || 0) + 1;
    });
  });

  // Sort berdasarkan frekuensi
  const sortedComponents = [...filteredComponents].sort((a, b) => {
    const freqA = componentFrequency[a] || 0;
    const freqB = componentFrequency[b] || 0;
    return freqB - freqA;
  });

  componentList.innerHTML = sortedComponents
    .map((component, index) => {
      const frequency = componentFrequency[component] || 0;
      const percentage = componentStatsCompanies.length > 0 ? Math.round((frequency / componentStatsCompanies.length) * 100) : 0;
      const activeClass = selectedComponent === component ? "bg-blue-500/10 ring-1 ring-blue-500/20" : "";

      return `
            <div class="component-item ${activeClass}" onclick="filterByComponent('${component}')">
                <div class="flex min-w-0 items-center gap-3">
                    <span class="component-rank">${index + 1}</span>
                    <span class="truncate text-sm font-medium text-slate-800 dark:text-zinc-100">${component}</span>
                </div>
                <div class="flex shrink-0 items-center gap-2">
                    <span class="text-xs text-slate-500 dark:text-zinc-400">${frequency}/${componentStatsCompanies.length}</span>
                    <div class="progress-track">
                        <div class="progress-bar" style="width: ${percentage}%"></div>
                    </div>
                    <span class="w-9 text-right text-xs font-semibold text-slate-700 dark:text-zinc-300">${percentage}%</span>
                </div>
            </div>
        `;
    })
    .join("");
}

function getComponentFrequency(companies = companiesData) {
  const componentFrequency = {};

  companies.forEach(company => {
    company.components.forEach(component => {
      componentFrequency[component] = (componentFrequency[component] || 0) + 1;
    });
  });

  return componentFrequency;
}

function getTopComponents(limit = 5) {
  const componentFrequency = getComponentFrequency();
  return Object.entries(componentFrequency)
    .sort((a, b) => b[1] - a[1])
    .slice(0, limit)
    .map(([name, count]) => ({
      name,
      count,
      percentage: Math.round((count / companiesData.length) * 100),
    }));
}

function renderComponentCategoryControls() {
  const select = document.getElementById("filterComponent");
  const menu = document.getElementById("componentFilterMenu");

  if (!select || !menu) return;

  const options = [{ id: "", label: "Semua kategori" }, ...componentCategories];

  select.innerHTML = options.map(option => `<option value="${option.id}">${option.label}</option>`).join("");
  menu.innerHTML = options
    .map(
      option => `
        <button class="dropdown-option${option.id === selectedComponentCategory ? " is-active" : ""}" type="button" role="option" data-component-filter="${option.id}" aria-selected="${option.id === selectedComponentCategory}">
          <span>${option.label}</span>
          <svg class="dropdown-check h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m5 13 4 4L19 7" />
          </svg>
        </button>
      `
    )
    .join("");
}

function getComponentsByCategory(categoryId) {
  const category = componentCategories.find(item => item.id === categoryId);
  return category ? category.components : allComponents;
}

function updateFilteredComponents() {
  const categoryComponents = getComponentsByCategory(selectedComponentCategory);
  filteredComponents = categoryComponents.filter(component => component.toLowerCase().includes(componentSearchTerm));
}

function renderKeyFindings() {
  const keyFindingsGrid = document.getElementById("keyFindingsGrid");
  if (!keyFindingsGrid) return;

  const topComponent = getTopComponents(1)[0];
  const componentFrequency = getComponentFrequency();
  const categoryCoverage = componentCategories
    .map(category => ({
      ...category,
      count: category.components.reduce((total, component) => total + (componentFrequency[component] || 0), 0),
    }))
    .sort((a, b) => b.count - a.count)[0];
  const mostCompleteCompany = [...companiesData].sort((a, b) => b.components.length - a.components.length)[0];
  const averageComponents = Math.round(companiesData.reduce((total, company) => total + company.components.length, 0) / companiesData.length);

  const findings = [
    {
      label: "Komponen paling universal",
      value: topComponent.name,
      note: `${topComponent.count}/${companiesData.length} perusahaan (${topComponent.percentage}%).`,
    },
    {
      label: "Kategori paling dominan",
      value: categoryCoverage.label,
      note: `${categoryCoverage.components.length} komponen dalam kategori ini.`,
    },
    {
      label: "Design system paling lengkap",
      value: mostCompleteCompany.name,
      note: `${mostCompleteCompany.components.length} komponen terdokumentasi.`,
    },
    {
      label: "Rata-rata kelengkapan",
      value: averageComponents,
      note: "komponen per perusahaan dalam dataset.",
    },
  ];

  keyFindingsGrid.innerHTML = findings
    .map(
      finding => `
        <article class="finding-card">
          <p class="finding-label">${finding.label}</p>
          <p class="finding-value">${finding.value}</p>
          <p class="finding-note">${finding.note}</p>
        </article>
      `
    )
    .join("");
}

function renderBayuLens() {
  const lensChips = document.getElementById("bayuLensChips");
  if (!lensChips) return;

  const topComponents = getTopComponents(3);
  const chips = [
    "Curated by Bayu",
    `${componentCategories.length} kategori riset`,
    `${topComponents.map(component => component.name).join(", ")} paling sering muncul`,
  ];

  lensChips.innerHTML = chips.map(chip => `<span class="chip chip-neutral">${chip}</span>`).join("");
}

function initializeCompareMode() {
  const companyASelect = document.getElementById("compareCompanyA");
  const companyBSelect = document.getElementById("compareCompanyB");
  const companyAMenu = document.getElementById("compareCompanyAMenu");
  const companyBMenu = document.getElementById("compareCompanyBMenu");

  if (!companyASelect || !companyBSelect || !companyAMenu || !companyBMenu) return;

  const options = companiesData.map(company => `<option value="${company.id}">${company.name} - ${company.designSystem}</option>`).join("");
  companyASelect.innerHTML = options;
  companyBSelect.innerHTML = options;
  companyASelect.value = String(companiesData.find(company => company.name === "Adobe")?.id || companiesData[0].id);
  companyBSelect.value = String(companiesData.find(company => company.name === "Google")?.id || companiesData[1].id);
  renderCompareDropdownMenu(companyAMenu, companyASelect.value);
  renderCompareDropdownMenu(companyBMenu, companyBSelect.value);

  initializeCompareDropdown("A");
  initializeCompareDropdown("B");

  companyASelect.addEventListener("change", function () {
    syncCompareDropdown("A");
    renderCompareMode();
  });
  companyBSelect.addEventListener("change", function () {
    syncCompareDropdown("B");
    renderCompareMode();
  });
  renderCompareMode();
}

function renderCompareDropdownMenu(menu, selectedValue) {
  menu.innerHTML = companiesData
    .map(company => {
      const value = String(company.id);
      const isActive = value === selectedValue;

      return `
        <button class="dropdown-option${isActive ? " is-active" : ""}" type="button" role="option" data-compare-company="${value}" aria-selected="${isActive}">
          <span class="truncate">${company.name} - ${company.designSystem}</span>
          <svg class="dropdown-check h-4 w-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m5 13 4 4L19 7" />
          </svg>
        </button>
      `;
    })
    .join("");
}

function initializeCompareDropdown(side) {
  initializeFilterDropdown({
    dropdownId: `compareCompany${side}Dropdown`,
    buttonId: `compareCompany${side}Button`,
    menuId: `compareCompany${side}Menu`,
    chevronId: `compareCompany${side}Chevron`,
    selectId: `compareCompany${side}`,
    labelId: `compareCompany${side}Label`,
    optionSelector: "[data-compare-company]",
    datasetKey: "compareCompany",
    sync: value => syncCompareDropdown(side, value),
  });
}

function syncCompareDropdown(side, value = document.getElementById(`compareCompany${side}`)?.value || "") {
  syncFilterDropdown({
    selectId: `compareCompany${side}`,
    labelId: `compareCompany${side}Label`,
    menuId: `compareCompany${side}Menu`,
    optionSelector: "[data-compare-company]",
    datasetKey: "compareCompany",
    fallbackLabel: "Pilih perusahaan",
    value,
  });
}

function renderCompareMode() {
  const companyA = companiesData.find(company => company.id === Number(document.getElementById("compareCompanyA")?.value));
  const companyB = companiesData.find(company => company.id === Number(document.getElementById("compareCompanyB")?.value));
  const compareSummary = document.getElementById("compareSummary");
  const compareResults = document.getElementById("compareResults");

  if (!companyA || !companyB || !compareSummary || !compareResults) return;

  const componentsA = new Set(companyA.components);
  const componentsB = new Set(companyB.components);
  const sharedComponents = companyA.components.filter(component => componentsB.has(component)).sort();
  const onlyA = companyA.components.filter(component => !componentsB.has(component)).sort();
  const onlyB = companyB.components.filter(component => !componentsA.has(component)).sort();
  const overlapPercentage = Math.round((sharedComponents.length / new Set([...companyA.components, ...companyB.components]).size) * 100);

  compareSummary.innerHTML = [
    { label: "Komponen sama", value: sharedComponents.length, note: `${overlapPercentage}% overlap` },
    { label: `Unik ${companyA.name}`, value: onlyA.length, note: companyA.designSystem },
    { label: `Unik ${companyB.name}`, value: onlyB.length, note: companyB.designSystem },
  ]
    .map(
      stat => `
        <article class="compare-stat">
          <p class="finding-label">${stat.label}</p>
          <p class="finding-value">${stat.value}</p>
          <p class="finding-note">${stat.note}</p>
        </article>
      `
    )
    .join("");

  compareResults.innerHTML = [
    { title: "Komponen yang sama", items: sharedComponents, chipClass: "chip-blue" },
    { title: `Hanya ${companyA.name}`, items: onlyA, chipClass: "chip-neutral" },
    { title: `Hanya ${companyB.name}`, items: onlyB, chipClass: "chip-selected" },
  ]
    .map(
      group => `
        <article class="compare-column">
          <h3 class="text-sm font-semibold text-slate-950 dark:text-white">${group.title}</h3>
          <div class="compare-list">
            ${
              group.items.length
                ? group.items.map(component => `<span class="chip ${group.chipClass}">${component}</span>`).join("")
                : `<p class="finding-note">Tidak ada komponen di kelompok ini.</p>`
            }
          </div>
        </article>
      `
    )
    .join("");
}

// Setup event listeners
function setupEventListeners() {
  // Search perusahaan
  document.getElementById("searchCompany").addEventListener("input", function (e) {
    const searchTerm = e.target.value.toLowerCase();
    filteredCompanies = companiesData.filter(
      company =>
        company.name.toLowerCase().includes(searchTerm) ||
        company.designSystem.toLowerCase().includes(searchTerm) ||
        company.biography.toLowerCase().includes(searchTerm) ||
        company.components.some(component => component.toLowerCase().includes(searchTerm))
    );
    selectedComponent = null; // Reset komponen yang dipilih
    currentPage = 1;
    renderCompanyTable();
  });

  // Filter perusahaan
  document.getElementById("filterCompany").addEventListener("change", function (e) {
    const filterValue = e.target.value;
    if (filterValue === "") {
      filteredCompanies = [...companiesData];
    } else {
      filteredCompanies = companiesData.filter(company => company.industry === filterValue);
    }
    selectedComponent = null; // Reset komponen yang dipilih
    currentPage = 1;
    syncIndustryDropdown(filterValue);
    renderCompanyTable();
  });

  // Search komponen
  document.getElementById("searchComponent").addEventListener("input", function (e) {
    componentSearchTerm = e.target.value.toLowerCase();
    updateFilteredComponents();
    selectedComponent = null; // Reset komponen yang dipilih
    renderComponentList();
  });

  // Filter komponen
  document.getElementById("filterComponent").addEventListener("change", function (e) {
    const filterValue = e.target.value;
    selectedComponentCategory = filterValue;
    updateFilteredComponents();
    selectedComponent = null; // Reset komponen yang dipilih
    syncComponentDropdown(filterValue);
    renderComponentList();
  });

  // Pagination
  document.getElementById("prevPage").addEventListener("click", function () {
    if (currentPage > 1) {
      currentPage--;
      renderCompanyTable();
    }
  });

  document.getElementById("nextPage").addEventListener("click", function () {
    const totalPages = Math.ceil(filteredCompanies.length / itemsPerPage);
    if (currentPage < totalPages) {
      currentPage++;
      renderCompanyTable();
    }
  });

  document.getElementById("exportButton").addEventListener("click", exportData);

  // Modal
  document.getElementById("closeModal").addEventListener("click", function () {
    document.getElementById("companyModal").classList.add("hidden");
  });

  // Close modal ketika klik di luar
  document.getElementById("companyModal").addEventListener("click", function (e) {
    if (e.target === this) {
      this.classList.add("hidden");
    }
  });
}

function initializeComponentDropdown() {
  initializeFilterDropdown({
    dropdownId: "componentFilterDropdown",
    buttonId: "componentFilterButton",
    menuId: "componentFilterMenu",
    chevronId: "componentFilterChevron",
    selectId: "filterComponent",
    labelId: "componentFilterLabel",
    optionSelector: "[data-component-filter]",
    datasetKey: "componentFilter",
    sync: syncComponentDropdown,
  });
}

function initializeIndustryDropdown() {
  initializeFilterDropdown({
    dropdownId: "industryFilterDropdown",
    buttonId: "industryFilterButton",
    menuId: "industryFilterMenu",
    chevronId: "industryFilterChevron",
    selectId: "filterCompany",
    labelId: "industryFilterLabel",
    optionSelector: "[data-industry-filter]",
    datasetKey: "industryFilter",
    sync: syncIndustryDropdown,
  });
}

function initializeFilterDropdown({ dropdownId, buttonId, menuId, chevronId, selectId, optionSelector, datasetKey, sync }) {
  const dropdown = document.getElementById(dropdownId);
  const button = document.getElementById(buttonId);
  const menu = document.getElementById(menuId);
  const chevron = document.getElementById(chevronId);
  const select = document.getElementById(selectId);

  if (!dropdown || !button || !menu || !select) return;

  const options = menu.querySelectorAll(optionSelector);

  const closeDropdown = () => {
    menu.classList.add("hidden");
    button.setAttribute("aria-expanded", "false");
    chevron?.classList.remove("rotate-180");
  };

  const openDropdown = () => {
    menu.classList.remove("hidden");
    button.setAttribute("aria-expanded", "true");
    chevron?.classList.add("rotate-180");
  };

  button.addEventListener("click", function (e) {
    e.stopPropagation();
    if (menu.classList.contains("hidden")) {
      openDropdown();
    } else {
      closeDropdown();
    }
  });

  options.forEach(option => {
    option.addEventListener("click", function () {
      select.value = option.dataset[datasetKey] || "";
      select.dispatchEvent(new Event("change"));
      closeDropdown();
    });
  });

  document.addEventListener("click", function (e) {
    if (!dropdown.contains(e.target)) {
      closeDropdown();
    }
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      closeDropdown();
    }
  });

  sync(select.value);
}

function syncComponentDropdown(value) {
  syncFilterDropdown({
    selectId: "filterComponent",
    labelId: "componentFilterLabel",
    menuId: "componentFilterMenu",
    optionSelector: "[data-component-filter]",
    datasetKey: "componentFilter",
    fallbackLabel: "Semua kategori",
    value,
  });
}

function syncIndustryDropdown(value) {
  syncFilterDropdown({
    selectId: "filterCompany",
    labelId: "industryFilterLabel",
    menuId: "industryFilterMenu",
    optionSelector: "[data-industry-filter]",
    datasetKey: "industryFilter",
    fallbackLabel: "Semua industri",
    value,
  });
}

function syncFilterDropdown({ selectId, labelId, menuId, optionSelector, datasetKey, fallbackLabel, value }) {
  const select = document.getElementById(selectId);
  const label = document.getElementById(labelId);
  const menu = document.getElementById(menuId);

  if (!select || !label) return;

  const selectedOption = [...select.options].find(option => option.value === value);
  label.textContent = selectedOption ? selectedOption.textContent : fallbackLabel;

  const options = menu ? menu.querySelectorAll(optionSelector) : [];
  options.forEach(option => {
    const isActive = (option.dataset[datasetKey] || "") === value;
    option.classList.toggle("is-active", isActive);
    option.setAttribute("aria-selected", String(isActive));
  });
}

// Filter berdasarkan komponen
function filterByComponent(component) {
  selectedComponent = component; // Simpan komponen yang dipilih
  filteredCompanies = companiesData.filter(company => company.components.includes(component));
  currentPage = 1;
  renderCompanyTable();
  renderComponentList();
}

// Tampilkan detail perusahaan
function showCompanyDetail(companyId) {
  const company = companiesData.find(c => c.id === companyId);
  if (!company) return;

  document.getElementById("modalTitle").textContent = company.name;
  document.getElementById("modalContent").innerHTML = `
        <div class="space-y-5">
            <div class="detail-card">
                <h4 class="mb-2 text-sm font-semibold text-slate-950 dark:text-white">Sumber</h4>
                <a href="${company.source || "#"}" target="_blank" class="break-all text-sm font-medium text-blue-600 hover:text-blue-700 dark:text-blue-300 dark:hover:text-blue-200">
                    ${company.source || "Placeholder - Link sumber akan diisi nanti"}
                </a>
            </div>
            <div class="grid gap-3 sm:grid-cols-2">
                <div class="detail-card">
                    <h4 class="mb-2 text-sm font-semibold text-slate-950 dark:text-white">Design System</h4>
                    <span class="chip chip-blue">${company.designSystem}</span>
                </div>
                <div class="detail-card">
                    <h4 class="mb-2 text-sm font-semibold text-slate-950 dark:text-white">Industri</h4>
                    <span class="chip chip-neutral capitalize">${company.industry}</span>
                </div>
            </div>
            <div>
                <h4 class="mb-3 text-sm font-semibold text-slate-950 dark:text-white">Komponen UI (${company.components.length})</h4>
                <div class="flex flex-wrap gap-2">
                    ${company.components
                      .map(
                        component => `
                        <span class="chip chip-blue">
                            ${component}
                        </span>
                    `
                      )
                      .join("")}
                </div>
            </div>
        </div>
    `;

  document.getElementById("companyModal").classList.remove("hidden");
}

// Update pagination
function updatePagination() {
  const totalPages = Math.ceil(filteredCompanies.length / itemsPerPage);
  const startIndex = filteredCompanies.length === 0 ? 0 : (currentPage - 1) * itemsPerPage + 1;
  const endIndex = Math.min(currentPage * itemsPerPage, filteredCompanies.length);

  document.getElementById("showingStart").textContent = startIndex;
  document.getElementById("showingEnd").textContent = endIndex;
  document.getElementById("totalRecords").textContent = filteredCompanies.length;
  document.getElementById("currentPage").textContent = currentPage;

  document.getElementById("prevPage").disabled = currentPage === 1;
  document.getElementById("nextPage").disabled = currentPage === totalPages || totalPages === 0;
}

// Fungsi untuk menambah data perusahaan baru
function addCompany(name, biography, components, industry) {
  const newCompany = {
    id: companiesData.length + 1,
    name: name,
    biography: biography,
    components: components,
    industry: industry,
  };
  companiesData.push(newCompany);
  filteredCompanies = [...companiesData];
  renderCompanyTable();
  renderComponentList();
}

// Fungsi untuk mengimpor data dari CSV/Excel
function importData(data) {
  return data;
}

// Update jumlah perusahaan di header
function updateCompanyCount() {
  const countElement = document.getElementById("companyCountBadge");
  if (countElement) {
    countElement.textContent = companiesData.length;
  }
}

function updateDashboardStats() {
  const totalComponentsStat = document.getElementById("totalComponentsStat");
  const totalIndustriesStat = document.getElementById("totalIndustriesStat");
  const visibleCompaniesStat = document.getElementById("visibleCompaniesStat");
  const uniqueIndustries = new Set(companiesData.map(company => company.industry)).size;

  if (totalComponentsStat) {
    totalComponentsStat.textContent = allComponents.length;
  }

  if (totalIndustriesStat) {
    totalIndustriesStat.textContent = uniqueIndustries;
  }

  if (visibleCompaniesStat) {
    visibleCompaniesStat.textContent = `${filteredCompanies.length} data`;
  }
}

// Dark Mode Functions
function initializeDarkMode() {
  const darkModeToggle = document.getElementById("darkModeToggle");
  const sunIcon = document.getElementById("sunIcon");
  const moonIcon = document.getElementById("moonIcon");

  // Check for saved theme preference or default to light mode
  const savedTheme = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
    document.documentElement.classList.add("dark");
    sunIcon.classList.add("hidden");
    moonIcon.classList.remove("hidden");
  } else {
    document.documentElement.classList.remove("dark");
    sunIcon.classList.remove("hidden");
    moonIcon.classList.add("hidden");
  }

  // Toggle dark mode - optimized for instant switching
  darkModeToggle.addEventListener("click", function () {
    const isDark = document.documentElement.classList.contains("dark");

    // Use requestAnimationFrame for smooth DOM updates
    requestAnimationFrame(() => {
      if (isDark) {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
        sunIcon.classList.remove("hidden");
        moonIcon.classList.add("hidden");
      } else {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
        sunIcon.classList.add("hidden");
        moonIcon.classList.remove("hidden");
      }
    });
  });
}

// Export data ke CSV
function exportData() {
  const csvContent =
    "data:text/csv;charset=utf-8," + "Nama Perusahaan,Design System,Industri,Komponen UI\n" + companiesData.map(company => `"${company.name}","${company.designSystem}","${company.industry}","${company.components.join(", ")}"`).join("\n");

  const encodedUri = encodeURI(csvContent);
  const link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", "data_perusahaan.csv");
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

// ============================================
// Creator Profile Modal
// ============================================

// Data creator - silakan edit sesuai kebutuhan
const creatorData = {
  name: "Muhammad Maulana Bayu",
  description:
    "Saya adalah mahasiswa Teknik Informatika di Institut Teknologi Padang yang memiliki ketertarikan pada bidang design dan development. Proyek ini dibuat sebagai bagian dari penunjang tugas akhir saya untuk menganalisis komponen antarmuka pengguna (UI) yang paling sering digunakan oleh perusahaan-perusahaan besar.",
  socialLinks: {
    linkedin: "https://www.linkedin.com/in/mmaulanabayu/",
    github: "https://github.com/m4sbay",
    portfolio: "https://bento.me/m4sbay",
  },
};

// Inisialisasi Creator Modal
function initializeCreatorModal() {
  const creatorProfileBtn = document.getElementById("creatorProfileBtn");
  const creatorModal = document.getElementById("creatorModal");
  const closeCreatorModal = document.getElementById("closeCreatorModal");

  // Buka modal creator
  creatorProfileBtn?.addEventListener("click", openCreatorModal);

  // Tutup modal creator
  closeCreatorModal.addEventListener("click", function () {
    creatorModal.classList.add("hidden");
  });

  // Tutup modal jika klik di luar modal
  creatorModal.addEventListener("click", function (e) {
    if (e.target === creatorModal) {
      creatorModal.classList.add("hidden");
    }
  });

  // Tutup dengan ESC key
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !creatorModal.classList.contains("hidden")) {
      creatorModal.classList.add("hidden");
    }
  });
}

function openCreatorModal() {
  const creatorModal = document.getElementById("creatorModal");

  if (!creatorModal) return;

  creatorModal.classList.remove("hidden");
  renderCreatorProfile();
}

function initializeMobileNavMenu() {
  const mobileNavMenu = document.getElementById("mobileNavMenu");
  const mobileMenuToggle = document.getElementById("mobileMenuToggle");
  const mobileMenuPanel = document.getElementById("mobileMenuPanel");
  const mobileExportButton = document.getElementById("mobileExportButton");
  const mobileAboutButton = document.getElementById("mobileAboutButton");

  if (!mobileNavMenu || !mobileMenuToggle || !mobileMenuPanel) return;

  const closeMobileMenu = () => {
    mobileMenuPanel.classList.add("hidden");
    mobileMenuToggle.setAttribute("aria-expanded", "false");
  };

  const openMobileMenu = () => {
    mobileMenuPanel.classList.remove("hidden");
    mobileMenuToggle.setAttribute("aria-expanded", "true");
  };

  mobileMenuToggle.addEventListener("click", function (e) {
    e.stopPropagation();

    if (mobileMenuPanel.classList.contains("hidden")) {
      openMobileMenu();
    } else {
      closeMobileMenu();
    }
  });

  mobileExportButton?.addEventListener("click", function () {
    closeMobileMenu();
    exportData();
  });

  mobileAboutButton?.addEventListener("click", function () {
    closeMobileMenu();
    openCreatorModal();
  });

  document.addEventListener("click", function (e) {
    if (!mobileNavMenu.contains(e.target)) {
      closeMobileMenu();
    }
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      closeMobileMenu();
    }
  });
}

// Render Creator Profile dengan data dinamis
function renderCreatorProfile() {
  const modalContent = document.querySelector("#creatorModal .text-center");

  modalContent.innerHTML = `
    <!-- Profile Image -->
    <div class="mb-6 flex justify-center">
      <img src="./index.png" alt="${creatorData.name}" class="avatar-image" />
    </div>
    
    <!-- Name -->
    <h4 class="mb-2 text-2xl font-semibold text-slate-950 dark:text-white">${creatorData.name}</h4>
    
    <!-- Description -->
    <p class="mb-6 px-2 text-sm leading-7 text-slate-600 dark:text-zinc-300">
      ${creatorData.description}
    </p>
    
    <!-- Social Links -->
    <div class="mb-4 flex justify-center gap-3">
      <!-- LinkedIn -->
      <a href="${creatorData.socialLinks.linkedin}" target="_blank" rel="noopener noreferrer" class="icon-button">
        <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      </a>
      
      <!-- GitHub -->
      <a href="${creatorData.socialLinks.github}" target="_blank" rel="noopener noreferrer" class="icon-button">
        <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      </a>
      
      <!-- Portfolio/Website -->
      <a href="${creatorData.socialLinks.portfolio}" target="_blank" rel="noopener noreferrer" class="icon-button">
        <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/>
        </svg>
      </a>
    </div>
    
    <div class="mt-6 border-t border-slate-200/70 pt-4 dark:border-white/10"></div>
  `;
}
