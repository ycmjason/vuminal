import createTagRenderer from './createTagRenderer';

export default createTagRenderer(({ gapSize = 0 }: { gapSize?: number }, { children }) => {
  return children.join('\n'.repeat(gapSize + 1));
});
