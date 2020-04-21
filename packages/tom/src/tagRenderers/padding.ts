import { createTagRenderer } from './TagRenderer';
import row from './row';

export default createTagRenderer(({ size = 0 }: { size?: number }, { children }) => {
  const content = children.join(' ');
  if (size === 0) return content;
  const verticalPadding = '\n'.repeat(size);
  const horizontalPadding = ' '.repeat(size);
  return (
    verticalPadding + row({}, { children: [horizontalPadding, content, horizontalPadding] }) + '\n' + verticalPadding
  );
});
