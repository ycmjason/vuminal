import tagRenderers from './tagRenderers';
import { TomNode } from './tom';

export const render = (tom: TomNode): string => {
  return {
    comment: () => '',
    element: () => {
      if (tom.type !== 'element') return '';
      const renderedChildren = tom.children.map(render);
      return tagRenderers[tom.tag](tom.props, {
        children: renderedChildren,
      });
    },
    text: () => {
      if (tom.type !== 'text') return '';
      return tom.text;
    },
  }[tom.type]();
};
