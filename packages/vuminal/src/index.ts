import { createRenderer } from '@vue/runtime-core';
import { nodeOps } from './nodeOps';
import { TERMINAL, startDrawing, stopDrawing } from './terminal';

export const { render, createApp } = createRenderer({ ...nodeOps });

export const draw = (...args: Parameters<typeof createApp>): (() => void) => {
  createApp(...args).mount(TERMINAL);
  startDrawing();
  return stopDrawing;
};

export * from '@vue/runtime-core';
