import { createIdGenerator } from './helpers/createIdGenerator';
import { TagName, isValidTagName } from './tagRenderers';

const elementId = createIdGenerator('element');
const textId = createIdGenerator('text');
const commentId = createIdGenerator('comment');

export type TomTagName = TagName;

export interface TomElement {
  id: string;
  type: 'element';
  parentNode: TomElement | null;
  tag: TomTagName;
  children: TomNode[];
  props: Record<string, any>;
  eventListeners: Record<string, Function | Function[]>;
}

export interface TomText {
  id: string;
  type: 'text';
  parentNode: TomElement | null;
  text: string;
}

export interface TomComment {
  id: string;
  type: 'comment';
  parentNode: TomElement | null;
  text: string;
}
export type TomNode = TomElement | TomText | TomComment;

export const createTomElement = (tag: string, opts: Partial<Omit<TomElement, 'tag'>> = {}): TomElement => {
  if (!isValidTagName(tag)) {
    console.error(`Unsupported tag name: ${tag}. Fallback to column.`);
    const COLUMN_TAG_NAME: TomTagName = 'column';
    return createTomElement(COLUMN_TAG_NAME, opts);
  }

  return {
    id: elementId(),
    type: 'element',
    parentNode: null,
    children: [],
    props: {},
    eventListeners: {},
    ...opts,
    tag,
  };
};

export const createTomText = (text: string, opts: Partial<Omit<TomText, 'text'>> = {}): TomText => ({
  id: textId(),
  type: 'text',
  parentNode: null,
  ...opts,
  text,
});

export const createTomComment = (text: string, opts: Partial<Omit<TomComment, 'text'>> = {}): TomComment => ({
  id: commentId(),
  type: 'comment',
  parentNode: null,
  ...opts,
  text,
});
