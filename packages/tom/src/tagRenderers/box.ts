import { createTagRenderer } from './TagRenderer';
import { align } from '../helpers/alignment';

const strokeStyles = {
  single: `
┌─┐
│ │
└─┘
`,
  double: `
╔═╗
║ ║
╚═╝
`,
};

const getBoxStokes = (box: string) => {
  const [topLeft, top, topRight, left, right, bottomLeft, bottom, bottomRight] = box.replace(/[\n\s]/g, '');
  return { topLeft, top, topRight, left, right, bottomLeft, bottom, bottomRight };
};

export default createTagRenderer(
  (
    {
      stroke = 'none',
    }: {
      stroke?: keyof typeof strokeStyles | 'none';
    },
    { children },
  ) => {
    const child = children[0] ?? '';
    if (stroke === 'none') return child;
    const strokes = getBoxStokes(strokeStyles[stroke]);

    const longestLineLength = Math.max(...child.split('\n').map(({ length }) => length));
    const paddedChildLines = child.split('\n').map((line) => align(line, 'start', longestLineLength, () => ' '));

    return `${strokes.topLeft}${strokes.top.repeat(longestLineLength)}${strokes.topRight}
${paddedChildLines.map((line) => `${strokes.left}${line}${strokes.right}`).join('\n')}
${strokes.bottomLeft}${strokes.bottom.repeat(longestLineLength)}${strokes.bottomRight}`;
  },
);
