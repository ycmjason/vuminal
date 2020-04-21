import { watchEffect, ref, Ref, reactive } from 'vuminal/node_modules/@vue/runtime-core';
import { render, createTomElement } from '@vuminal/tom';
import logUpdate from 'log-update';

const isDrawing: Ref<boolean> = ref(false);
const stopWatching = ref(() => {});

export const startDrawing = () => {
  if (isDrawing.value) return;
  isDrawing.value = true;

  stopWatching.value = watchEffect(() => {
    if (!isDrawing.value) return;
    logUpdate(render(TERMINAL));
  });
};

export const stopDrawing = () => {
  stopWatching.value();
  isDrawing.value = false;
};

export const TERMINAL = reactive(createTomElement('row'));
