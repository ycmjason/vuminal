import { RendererOptions } from '@vue/runtime-core';

export interface UIConnector<UINode, UIElement> {
  nodeOps: RendererOptions<UINode, UIElement>;
  ROOT: UIElement;
  startDrawing: () => void;
  stopDrawing: () => void;
}
