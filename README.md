# Inuminate

Inuminate is a privacy-first web analytics tool.

This repo is the JavaScript tracker.

## Usage:

Single Page/HTML Projects:
```html
<script
    src="https://cdn.jsdelivr.net/npm/@thepublicgood/inuminate@1.0.3/dist/inuminate.js"
    data-inuminate-site="YOUR_INUMINATE_SITE_KEY"
    defer
></script>
```

For InertiaJS:

First add the package:

```shell
yarn add @thepublicgood/inuminate
```

Then add to `app.js`:

```javascript
import {Inuminate} from '@thepublicgood/inuminate/src/Inuminate.ts';
import {Inertia} from '@inertiajs/inertia-vue3'

Inertia.on('navigate', () => {
    const inuminate = new Inuminate('INUMINATE_SITE_KEY');
    inuminate.track();
});
```

## Self-hosted
If your Inuminate installation is self-hosted, you can pass the base URL to your installation. For single-page projects, add a `data-inuminate-url` parameter:

```html
<script
    src="https://cdn.jsdelivr.net/npm/@thepublicgood/inuminate@1.0.3/dist/inuminate.js"
    data-inuminate-site="YOUR_INUMINATE_SITE_KEY"
    data-inuminate-url="https://inuminate.mysite.com"
    defer
></script>
```

Or for InertiaJS projects:

```javascript
Inertia.on('navigate', () => {
    const inuminate = new Inuminate('INUMINATE_SITE_KEY', 'https://inuminate.mysite.com');
    inuminate.track();
})
```
