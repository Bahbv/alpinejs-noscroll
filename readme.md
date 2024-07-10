# AlpineJS x-noscroll

A plugin for AlpineJS that provides a `x-noscroll` directive to disable and enable body scrolling based on an active state.

## Installation

Register the plugin with `alpine.plugin()` before starting Alpine

```js
import NoScroll from 'alpinejs-noscroll';

Alpine.plugin(NoScroll)
Alpine.start
```


## Usage
Use the x-noscroll directive to control body scroll based on a reactive property:

```html
<div x-data="{ isActive: false }">
  <button @click="isActive = !isActive">Toggle Scroll lock</button>
  <div x-noscroll="isActive">
    Scrollable content like a modal
  </div>
</div>
```
When isActive is true, body scrolling will be disabled. When isActive is false, body scrolling will be enabled.

## Development

To build the plugin, run:
```bash
npm install
npm run build
```

