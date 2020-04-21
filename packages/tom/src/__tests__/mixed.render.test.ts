import { render } from '../render';
import { createTomElement, createTomText } from '../tom';

describe('@vuminal/tom render', () => {
  it('should render double border stroke box containing row', () => {
    expect(
      render(
        createTomElement('box', {
          props: { stroke: 'double' },
          children: [
            createTomElement('row', {
              props: { gapSize: 2, mainAxisAlignment: 'center', crossAxisAlignment: 'center' },
              children: [
                createTomText('hello\nworld'),
                createTomText('wowowo'),
                createTomText('hello\nworld\ni am very happpppy'),
              ],
            }),
          ],
        }),
      ),
    ).toMatchInlineSnapshot(`
      "╔═════════════════════════════════╗
      ║hello                hello       ║
      ║world  wowowo        world       ║
      ║               i am very happpppy║
      ╚═════════════════════════════════╝"
    `);
  });

  it('should render row of double border stroke boxes', () => {
    expect(
      render(
        createTomElement('row', {
          props: { gapSize: 2, mainAxisAlignment: 'center', crossAxisAlignment: 'center' },
          children: [
            createTomElement('box', {
              props: { stroke: 'double' },
              children: [createTomText('hello\nworld')],
            }),
            createTomElement('box', {
              props: { stroke: 'double' },
              children: [createTomText('wowowo')],
            }),
            createTomElement('box', {
              props: { stroke: 'double' },
              children: [createTomText('hello\nworld\ni am very happpppy')],
            }),
          ],
        }),
      ),
    ).toMatchInlineSnapshot(`
      "╔═════╗            ╔══════════════════╗
      ║hello║  ╔══════╗  ║hello             ║
      ║world║  ║wowowo║  ║world             ║
      ╚═════╝  ╚══════╝  ║i am very happpppy║
                         ╚══════════════════╝"
    `);
  });
});
