# Inuminate

Privacy first web traffic monitor.

For multi-page sites and HTML projects, it's very simple:

```html
<script
    src="https://cdn.jsdelivr.net/npm/@thepublicgood/inuminate@1.0/dist/inuminate.js"
    data-inuminate-site="INUMINATE_SITE_KEY"
></script>
```

For SPA, you can import our library into your project:

```shell
yarn add -D "@thepublicgood/inuminate"
```

Import the library:

```javascript
import Inuminate from '@thepublicgood/inuminate/build/Inuminate.js'
```

If you're using TypeScript, you can import the source:

```typescript
import Inuminate from '@thepublicgood/inuminate/src/Inuminate';
```

If you're using Inertia JS, it's useful to update your `HandleInertiaRequests.php` to include your Inertia KEY in every response:

```php
public function share(Request $request): array
{
    return array_merge(parent::share($request), [
        'inuminate' => [
            'site' => 'INUMINATE_SITE_KEY',
            // 'url' => 'https://inuminate.mysite.com', // if you are self hosting
        ]
    ]);
}
```
The library exposes an `Inuminate` class. Update your application's entry with:

```javascript
import {Inuminate} from 'https://inuminate.com/tracker/inuminate';
import {Inertia, usePage} from '@inertiajs/inertia-vue3'

Inertia.on('navigate', () => {
    
    const data = usePage().props.value.inuminate;
    
    const inuminate = new Inuminate(data.site, data.url);
    inuminate.track();
});
```
