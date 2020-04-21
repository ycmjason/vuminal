import { createRenderer } from '@vue/runtime-core';
import type { UIConnector } from './UIConnector';

export default <TNode, TElement>({ ROOT, nodeOps, startDrawing, stopDrawing }: UIConnector<TNode, TElement>) => {
  const { createApp } = createRenderer({ ...nodeOps });
  return (...args: Parameters<typeof createApp>): (() => void) => {
    createApp(...args).mount(ROOT);
    startDrawing();
    return stopDrawing;
  };
};

export type { UIConnector };
