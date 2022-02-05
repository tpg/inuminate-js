# Inuminate

Inuminate is a privacy-first web analytics tool.

This repo is the JavaScript tracker.

## Usage:

Single Page/HTML Projects:
```html
<script
    src="https://inuminate.com/inuminate.js"
    data-inuminate-site="INUMINATE_SITE_KEY"
></script>
```

For InertiaJS:

First add the package:

```shell
yarn add @tpg/inuminate
```

Then add to `app.js`:

```javascript
import {Inuminate} from '@thepublicgood/inuminate';
import {Inertia} from '@inertiajs/inertia-vue3'

Inertia.on('navigate', () => {
    const inuminate = new Inuminate('INUMINATE_SITE_KEY');
    inuminate.track();
});
```