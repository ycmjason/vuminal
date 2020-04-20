import { h, createApp } from '../index';
import { createTomElement, render } from '@vuminal/tom';
import { defineComponent, ref, nextTick } from '@vue/runtime-core';

describe('runtime', () => {
  it('should render', () => {
    const RootComponent = defineComponent({
      render() {
        return h('column', 'hello world');
      },
    });

    const root = createTomElement('column');

    createApp(RootComponent).mount(root);

    expect(render(root)).toMatchInlineSnapshot(`"hello world"`);
  });

  it('should update as vue data updates', async () => {
    const counter = ref(1);
    const RootComponent = defineComponent({
      setup() {
        return () => h('row', ['counter: ', counter.value]);
      },
    });

    const root = createTomElement('column');

    createApp(RootComponent).mount(root);

    expect(render(root)).toMatchInlineSnapshot(`"counter: 1"`);

    counter.value = 10;
    await nextTick();
    expect(render(root)).toMatchInlineSnapshot(`"counter: 10"`);
  });
});
