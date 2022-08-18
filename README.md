## IMPORTANT: Fork differences
The original project maintained by Jason [here](https://github.com/jasonccox/grav-theme-webfolio) is no longer under active development. However, since I do actively use this theme for [my personal website](https://www.aashishvasudevan.com/) and have contributed a couple additions to the original webfolio theme, I'm still maintaining my fork. I've done my best to edit the original readme to better include the features that I have added, and removed parts that are not relevant to my fork of Webfolio.

I'm not a web developer though, so expect minimal changes (other than occasional bug fixes to keep it working with Grav). Obviously if Jason ever updates his version, I will try to integrate those changes into my fork.

**Here are some of the main differences, off the top of my head:**
* Changed the title font to Ubuntu and changed font weights and sizes all over the theme
* Slightly changed the way (and where) theme colours are used in the theme
* Removed all instances of drop shadow for a more animated curved look (I just dont like drop shadows)
* Added a way to have two different versions of the logo for when you scroll down and when you're at the top of the page
* Added support for the [JSComments](https://github.com/Sommerregen/grav-plugin-jscomments) plugin for adding custom commenting on the `blog-post` template
* Added support for the [Archives](https://github.com/getgrav/grav-plugin-archives) plugin in the form of a simple sidebar on the `blog-post` template

# Webfolio Theme

The **Webfolio** Theme is a configurable theme for creating an online portfolio and blog with [Grav CMS](http://github.com/getgrav/grav). It is partially based on the [Quark Theme](https://github.com/getgrav/grav-theme-quark).

## Installation

1. From the root of your Grav installation, run `bin/gpm install webfolio`.
   - Alternatively, download this repository, unzip it, rename the folder to `webfolio`, and place it in the `user/themes/` directory of your Grav install
2. Edit `user/config/system.yaml` to contain the following:
	```yaml
	pages:
      theme: webfolio
	```

Alternatively, you can install Webfolio via the Grav Admin interface.

## Templates

Webfolio offers several templates for your site's pages. Here's a brief overview of each one.

### Default

The `default` template is a simple template that just renders your content as-is.

### Modular

The `modular` template is used to create modular pages made up of several sub-pages. The actual `modular.md` file typically only contains YAML FrontMatter; any Markdown content will not be rendered.

**Custom FrontMatter Fields**
- `modules_in_menu` - If set to true, each of the modular page's modules will appear in the navigation menu as children of the page. (Note that on the modular page itself, the modules may appear as top-level menu items depending on how `single_page_menu` is set.)
- `single_page_menu` - If set to true, each of the modular page's modules will appear in the page's navigation menu as top-level items, and sibling or parent pages of the modular page will not appear in the modular page's menu.
- `onpage_menu` (**DEPRECATED**) - Same behavior as `single_page_menu`. *If either `modules_in_menu` or `single_page_menu` is set, this setting will be ignored.*

> The following pages (Intro, About, Projects, Contact, and Plain) all must be created as sub-pages of a page using the modular template. See the Grav documentation on [modular pages](https://learn.getgrav.org/16/content/modular) and [adding modular pages from the admin panel](https://learn.getgrav.org/16/admin-panel/page#add-modular-page) for more information.

#### Intro

The `intro` template is used to create an introduction section within a modular page. It can display an image and icon links in addition to the Markdown content. The first image file within this page's directory, if there is one, will be used as the image.

**Custom FrontMatter Fields**
- `use_footer_links` - Whether the `footer_links` from the site-wide customization should also appear in this section. See the *Customization* section below for more information about `footer_links`.
- `links` - A list of icon links to be displayed. Each link needs to specify a `link` (the URL to which it points) and an `icon` (Font-Awesome CSS classes, such as `fas fa-code`). These links will be displayed after the `footer_links` if `use_footer_links` is true.
- `img_alt` - The alt text to be used for the image in this section.
- `center_content` - If true, the content (not the Custom Intro Image) will be centered instead of left-aligned.

#### About

The `about` template is used to display a section containing some Markdown content and a few details.

**Custom FrontMatter Fields**
- `details` - A list of details to be shown in this section. Each detail can have a `title`, `icon` (Font Awesome CSS classes, such as `fas fa-code`), and `content`. Three details looks the best on the page.

#### Projects

The `projects` template shows a section containing a grid of project tiles.

**Custom FrontMatter Fields**
- `projects` - A list of projects to be shown in this section. Each project can have a `title`, `image` (name of an image file stored in the page's directory), `description`, and `link` (URL).
- `projects_per_page`- Number of projects to show initially and each time the "Show more" button is pressed. Leave empty to show all projects.
- `show_more_txt` - Text for button to show more projects.

#### Contact

The `contact` template is used to create a section containing a contact form, a contact button, or both. Note that the contact form should be set up in the header of the `modular.md` file as indicated [here](https://learn.getgrav.org/16/forms/forms/how-to-forms-in-modular-pages).

**Custom FrontMatter Fields**
- `button` - If this field is present, a button will appear in this section with the following properties:
    - `link` - The URL that the button will load when clicked.
    - `text` - The text to be displayed on the button.
    - `icon` - Font Awesome CSS classes, such as `fas fa-envelope`.
- `show_form` - Whether or not the contact form should be shown in this section.

#### Plain

The `plain` template is like the `default` template, but for creating a section in a modular page.

### Blog

The `blog` template displays a list of blog posts (organized as sub-pages of the blog page).

> You can define which posts to display on the blog page by defining a [page collection](https://learn.getgrav.org/16/content/collections) using the `content` FrontMatter field. If no `content` field is defined, the blog page's children are displayed.

### Blog Post

The `blog-post` template is used to render a blog post. You'll want to set the `title` and `date` FrontMatter fields.

> If both `publish_date` and `date` are set, `publish_date` is interpreted as the date of original publication, while `date` is the date the post was last updated.

## Additional Customization

### Site-wide

The following customizations are available by editing `user/config/themes/webfolio.yaml` (see the [repo for my personal site](https://github.com/jasonccox/personal-site) for an example file) or via the Grav Admin interface.

- **Custom Logo** (`custom_logo`) - A logo image to be placed on the left side of the header throughout the site.
- **Mobile Cusom Logo** (`custom_logo_mobile`) - A logo image to be placed at the top left of the navigation overlay on smaller screens. Note that this logo will appear on a dark background.
- **Favicon** (`favicon`) - A small image to be used as the icon for your site in the browser.
- **Extra Navigation Links** (`external_links`) - A list of links to be shown on the navigation menu after page and site navigation links. Can be toggled on or off by setting the value for `show_external_links` as `true` or `false`.
- **Show Credit in Footer** (`footer_credit`) - Whether or not to display a sentence in your site footer giving credit to this theme and to Grav.
- **Footer Links** (`footer_links`) - A list of links to be shown in the footer of every page. Each link has a `link` (URL) property and a `icon` (Font Awesome icon classes, such as `fas fa-envelope`) property.
- **Copyright** - Include any of these fields to show a copyright notice in your site's footer.
  - **Year** (`copyright.year`) - The year to be displayed next to the copyright symbol.
  - **Copyright-Holder's Name** (`copyright.name`) - The name of the person holding the copyright for the site.
  - **Link Target URL** (`copyright.link`) - A URL to which users will be directed when clicking on the copyright-holder's name.
- **Style** (`style`) - This field has several sub-fields that allow you to change the theme's color scheme. See `blueprints.yaml` for documentation on all of the available fields.

### Page Specific

Each page can have a bit of extra customization. These properties are set within the YAML header of the Markdown file for the page.

- `body_classes` (all pages) - A space-separated list of CSS classes to be applied to the body of the page.
- `class` (all modules) - A space-separated list of CSS classes to be applied to the modular section.

### Advanced

More stylistic elements of the site (e.g., colors, fonts, etc.) can be customized by adding a `css/webfolio.css` file inside your `user/` directory or using the `css/custom.css` file within the theme itself. Alternatively, you can edit `scss/variables.scss` and then recompile `scss/theme.scss` into `css-compiled/theme.min.scss` using Sass.

> Webfolio provides several CSS classes and variables for you to use. Take a look inside `scss/util.scss` to see what they are.

## Help

Don't hesitate to [create an issue](https://github.com/aashishvasu/grav-theme-webfolio/issues) or reach out to me at [aashishvasudevan@gmail.com](mailto:aashishvasudevan@gmail.com) if you're having trouble using Webfolio. I'm happy to help!

## Contributing

Feel free to submit an issue or merge request if you see a way to make this theme better! I'm very thankful for the following people for their contributions: