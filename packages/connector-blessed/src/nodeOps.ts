import { RendererOptions } from '@vue/runtime-core';
import { isOn } from '@vue/shared';
import blessed, { Widgets } from 'blessed';
import { isDirty } from './SCREEN';

const BLESSED_ELEMENT_TAG = [
  'box',
  'text',
  'line',
  'scrollablebox',
  'scrollabletext',
  'bigtext',
  'list',
  'filemanager',
  'listtable',
  'listbar',
  'form',
  'input',
  'textarea',
  'textbox',
  'button',
  'checkbox',
  'radioset',
  'radiobutton',
  'table',
  'prompt',
  'question',
  'message',
  'loading',
  'log',
  'progressbar',
  'terminal',
  'layout',
] as const;

const isTagIsBlessed = (tag: string): tag is typeof BLESSED_ELEMENT_TAG[number] => {
  return (BLESSED_ELEMENT_TAG as readonly string[]).includes(tag);
};

export const nodeOps: RendererOptions<Widgets.Node, Widgets.BlessedElement> = {
  insert: (child, parent, beforeNode) => {
    if (!beforeNode) {
      parent.append(child);
    } else {
      parent.insertAfter(child, beforeNode);
    }
    isDirty.value = true;
  },

  remove: (child) => {
    child.detach();
    isDirty.value = true;
  },

  createElement: (tag) => {
    if (!isTagIsBlessed(tag)) {
      throw new Error(`cannot find ${tag}`);
    }
    return blessed[tag]();
  },
  createText: (text) => blessed.text({ content: text }),
  createComment: (text) => text as any,

  setText: (node: Widgets.TextElement, text) => {
    node.content = text;
    isDirty.value = true;
  },

  setElementText: (el: Widgets.BlessedElement, text) => {
    for (const child of el.children) {
      delete child.parent;
    }

    el.content = text;
    isDirty.value = true;
  },

  parentNode: (node) => node.parent as Widgets.BlessedElement,

  nextSibling: (node) => {
    if (!node.parent) return null;
    const parent = node.parent;
    const nextSiblingIndex = parent.children.indexOf(node) + 1;
    return parent.children[nextSiblingIndex] ?? null;
  },

  querySelector: () => {
    throw new Error('querySelector not supported');
  },

  setScopeId() {
    throw new Error('scope is not supported');
  },

  patchProp(el, key, prevValue, value) {
    if (isOn(key)) {
      const name = key.slice(2).toLowerCase();
      if (prevValue) el.removeListener(name, prevValue);
      el.addListener(name, value);
    } else {
      setProps(el, key, value);
    }
    isDirty.value = true;
  },
};

const setProps = (el: Widgets.BlessedElement, key: string, value: string) => {
  const descriptor = getPropertyDescriptor(el, key);
  if (!descriptor) {
    el.set(key, value);
    return;
  }

  if (typeof descriptor?.value === 'function') {
    return;
  }

  // @ts-ignore
  el[key] = value;
};

const getPropertyDescriptor = (obj: any, key: string): any => {
  if (obj === null) return undefined;
  return Object.getOwnPropertyDescriptor(obj, key) ?? getPropertyDescriptor(Object.getPrototypeOf(obj), key);
};
