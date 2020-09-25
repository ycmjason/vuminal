# Vuminal

Create terminal applications with the power of Vue 3.

## Simple example

Install `vuminal` and `@vuminal/connector-tom`

```
> npm install vuminal
> npm install @vuminal/connector-tom
```

Create `index.js`

```ts
const { default: Vuminal, h, ref } = require('vuminal');
const tomConnector = require('@vuminal/connector-tom');

const draw = Vuminal(tomConnector);

draw({
  setup() {
    const counter = ref(0);

    setInterval(() => {
      counter.value++;
    }, 1000);

    return () => h('row', ['current count: ', counter.value]);
  },
});
```

Run it!

```
> node index.js
```

![](README-demo.gif)

## How does it work?

WIP

## Author

Jason Yu
