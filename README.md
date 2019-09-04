# Webfolio Theme

The **Webfolio** Theme is a basic theme for creating an online portfolio with [Grav CMS](http://github.com/getgrav/grav). It is partially based on the [Quark Theme](https://github.com/getgrav/grav-theme-quark).

## Sample

My own personal website uses this theme. Feel free to [check it out](https://jasoncarloscox.com) or even look at the [source code](https://gitlab.com/jasonccox/personal-site).

## Intstallation

1. From the root of your Grav installation, run `bin/gpm install webfolio`.
   - Alternatively, download this repository, unzip it, rename the folder to `webfolio`, and place it in the `user/themes/` directory of your Grav install
2. Edit `user/config/system.yaml` to contain the following:
	```yaml
	pages:
      theme: webfolio
	```

Alternatively, you can install Webfolio via the Grav Admin interface.

## Customization

### Site-wide

The following customizations are available by editing `user/config/themes/webfolio.yaml` (see the [repo for my personal site](https://gitlab.com/jasonccox/personal-site) for an example file) or via the Grav Admin interface.

- **Custom Logo** (`custom_logo`) - A logo image to be placed on the left side of the header throughout the site.
- **Mobile Cusom Logo** (`custom_logo_mobile`) - A logo image to be placed at the top left of the navigation overlay on smaller screens. Note that this logo will appear on a dark background.
- **Favicon** (`favicon`) - A small image to be used as the icon for your site in the browser.
- **Show Credit in Footer** (`footer_credit`) - Whether or not to display a sentence in your site footer giving credit to this theme and to Grav.
- **Footer Links** (`footer_links`) - A list of links to be shown in the footer of every page. Each link has a `link` (URL) property and a `icon` (Font Awesome icon classes, such as `fas fa-envelope`) property.
- **Copyright** - Include any of these fields to show a copyright notice in your site's footer.
  - **Year** (`copyright.year`) - The year to be displayed next to the copyright symbol.
  - **Copyright-Holder's Name** (`copyright.name`) - The name of the person holding the copyright for the site.
  - **Link Target URL** (`copyright.link`) - A URL to which users will be directed when clicking on the copyright-holder's name.

### Page Specific

Some pages can have a bit of extra customization. These properties are set within the YAML header of the Markdown file for the page.

#### All Pages

- `body_classes` - A space-separated list of CSS classes to be applied to the body of the page.

#### Modular Pages (`markdown.md`)

The following properties are available to customize the navigation menu:
- `modules_in_menu` - If set to true, each of the modular page's modules will appear in the navigation menu as children of the page. (Note that on the modular page itself, the modules may appear as top-level menu items depending on how `single_page_menu` is set.)
- `single_page_menu` - If set to true, each of the modular page's modules will appear in the page's navigation menu as top-level items, and sibling or parent pages of the modular page will not appear in the modular page's menu.
- `onpage_menu` (**DEPRECATED**) - Same behavior as `single_page_menu`. *If either `modules_in_menu` or `single_page_menu` is set, this setting will be ignored.*

#### All Modular Sections (any page using a template inside the `modular` directory)

- `class` - A space-separated list of CSS classes to be applied to the modular section.

#### Intro (`intro.md`)

- `use_footer_links` - Whether the `footer_links` from the site-wide customization should also appear in this section.
- `links` - Additional links, with the same format as `footer_links` to be displayed in this section. These links will be displayed after the `footer_links` if `use_footer_links` is true.
- `img_alt` - The alt text to be used for the image in this section.

#### About (`about.md`)

- `details` - A list of details to be shown in this section. Each detail can have a `title`, `icon` (Font Awesome icon classes, such as `fas fa-code`), and `content`. Three details looks the best on the page.

#### Projects (`projects.md`)

- `projects` - A list of projects to be shown in this section. Each project can have a `title`, `image` (name of an image file stored in the same folder as `about.md`), `description`, and `link` (URL).

#### Contact (`contact.md`)

- `button` - If this field is present, a button will appear in this section with the following properties:
    - `link` - The URL that the button will load when clicked.
    - `text` - The text to be displayed on the button.
    - `icon` - Font Awesome icon classes, such as `fas fa-envelope`.
- `show_form` - Whether or not the contact form (set up in the header of the `modular.md` file) should be shown in this section.

#### Blog Posts (`blog-post.md`)

- `created` - This is the date and time this blog post was originally created. It should be a [YAML timestamp](https://yaml.org/type/timestamp.html). When displayed, it will be formatted according to `pages.dateformat.short` from the system settings.
- `updated` - This is the date and time this blog post was last updated. It should be a [YAML timestamp](https://yaml.org/type/timestamp.html). When displayed, it will be formatted according to `pages.dateformat.short` from the system settings.
- `header_classes` - A space-separated list of CSS classes to be applied to the header section (containing the title and date) of the post.
- `content_classes` - A space-separated list of CSS classes to be applied to the content section (containing the actual post) of the post.

### Advanced

More stylistic elements of the site (e.g., colors, fonts, etc.) can be customized using the `css/custom.css` file within the theme. Alternatively, you can edit `scss/variables.scss` and then recompile `scss/theme.scss` into `css-compiled/theme.min.scss` using Sass.

## Contributing

Feel free to submit an issue or merge request if you see a way to make this theme better!
