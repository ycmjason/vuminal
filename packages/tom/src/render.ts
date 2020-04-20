import tagRenderers from './tagRenderers';
import { TomNode } from './tom';

export const render = (tom: TomNode): string => {
  if (tom.type === 'comment') return '';
  switch (tom.type) {
    case 'element': {
      const renderedChildren = tom.children.map(render);
      return tagRenderers[tom.tag](tom.props, {
        children: renderedChildren,
      });
    }
    case 'text': {
      return tom.text;
    }
  }
};
