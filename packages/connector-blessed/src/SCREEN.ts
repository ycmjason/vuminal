import { screen } from 'blessed';
import { Ref, ref, watchEffect } from '@vue/runtime-core';

export const SCREEN = screen({ smartCSR: true, terminal: 'xterm-256color' });
SCREEN.key(['escape', 'C-c'], () => process.exit(0));

const isDrawing: Ref<boolean> = ref(false);
export const isDirty: Ref<boolean> = ref(false);
const stopWatching = ref(() => {});

export const startDrawing = () => {
  if (isDrawing.value) return;
  isDrawing.value = true;

  stopWatching.value = watchEffect(() => {
    if (!isDrawing.value) return;
    if (isDirty.value) {
      SCREEN.render();
      isDirty.value = false;
    }
  });
};

export const stopDrawing = () => {
  stopWatching.value();
  SCREEN.destroy();
  isDrawing.value = false;
};
