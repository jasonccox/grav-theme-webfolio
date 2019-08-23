# Webfolio Theme

The **Webfolio** Theme is a basic theme for creating an online portfolio with [Grav CMS](http://github.com/getgrav/grav). It is partially based on the [Quark Theme](https://github.com/getgrav/grav-theme-quark).

## Sample

My own personal website uses this theme. Feel free to [check it out](https://jasoncarloscox.com) or even look at the [source code](https://gitlab.com/jasonccox/personal-site).

## Usage

Simply download this repository and place it in the `user/themes/` directory of your Grav install. Then edit `user/config/system.yaml` to contain the following:
```yaml
pages:
  theme: webfolio
```

Alternatively, you can install Webfolio via the Grav Admin interface.

## Customization

The following customizations are available by editing `user/config/themes/webfolio.yaml` (see the [repo for my personal site](https://gitlab.com/jasonccox/personal-site) for an example file) or via the Grav Admin interface.

- **Custom Logo** (`custom_logo`) - A logo image to be placed on the left side of the header throughout the site.
- **Mobile Cusom Logo** (`custom_logo_mobile`) - A logo image to be placed at the top left of the navigation overlay on smaller screens. Note that this logo will appear on a dark background.
- **Favicon** (`favicon`) - A small image to be used as the icon for your site in the browser.
- **Show Credit in Footer** (`footer_credit`) - Whether or not to display a sentence in your site footer giving credit to this theme and to Grav.
- **Copyright** - Include any of these fields to show a copyright notice in your site's footer.
  - **Year** (`copyright.year`) - The year to be displayed next to the copyright symbol.
  - **Copyright-Holder's Name** (`copyright.name`) - The name of the person holding the copyright for the site.
  - **Link Target URL** (`copyright.link`) - A URL to which users will be directed when clicking on the copyright-holder's name.

### Advanced

More stylistic elements of the site (e.g., colors, fonts, etc.) can be customized using the `css/custom.css` file within the theme. Alternatively, you can edit `scss/variables.scss` and then recompile `scss/theme.scss` into `css-compiled/theme.min.scss` using Sass.

## Contributing

Feel free to submit an issue or merge request if you see a way to make this theme better!
