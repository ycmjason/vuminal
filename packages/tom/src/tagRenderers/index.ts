import box from './box';
import row from './row';
import column from './column';
import padding from './padding';

const tagRenderers = {
  // layout
  box,
  column,
  row,
  padding,
} as const;

export default tagRenderers;

const tagNames = Object.keys(tagRenderers);
export const isValidTagName = (tagName: string): tagName is TagName => tagNames.includes(tagName);
export type TagName = keyof typeof tagRenderers;
