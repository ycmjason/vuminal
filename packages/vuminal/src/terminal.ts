import { reactive, watchEffect, ref } from '@vue/runtime-core';
import logUpdate from 'log-update';
import { createTomElement, render } from '@vuminal/tom';

export const TERMINAL = reactive(createTomElement('column'));

const isDrawing = ref(false);

export const startDrawing = () => {
  isDrawing.value = true;
};

export const stopDrawing = () => {
  isDrawing.value = false;
};

watchEffect(() => {
  if (!isDrawing.value) return;
  logUpdate(render(TERMINAL));
});
