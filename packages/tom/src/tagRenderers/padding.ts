import { createTagRenderer } from './TagRenderer';
import row from './row';

export default createTagRenderer(({ size = 0 }: { size?: number }, { children }) => {
  const child = children[0] ?? '';
  if (size === 0) return child;
  const verticalPadding = '\n'.repeat(size);
  const horizontalPadding = ' '.repeat(size);
  return (
    verticalPadding + row({}, { children: [horizontalPadding, child, horizontalPadding] }) + '\n' + verticalPadding
  );
});
