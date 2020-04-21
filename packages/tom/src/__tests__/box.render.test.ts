import { render } from '../render';
import { createTomElement, createTomText } from '../tom';

describe('@vuminal/tom box.render', () => {
  it('should render first child in box', () => {
    expect(
      render(
        createTomElement('box', {
          children: [createTomText('1'), createTomText('2')],
        }),
      ),
    ).toMatchInlineSnapshot(`"1"`);
  });

  describe('stroke', () => {
    it('should render single border stroke', () => {
      expect(
        render(
          createTomElement('box', {
            props: { stroke: 'single' },
            children: [createTomText('1')],
          }),
        ),
      ).toMatchInlineSnapshot(`
              "┌─┐
              │1│
              └─┘"
          `);
    });

    it('should render double border stroke', () => {
      expect(
        render(
          createTomElement('box', {
            props: { stroke: 'double' },
            children: [createTomText('hello\nworllwkefjlkd')],
          }),
        ),
      ).toMatchInlineSnapshot(`
        "╔═════════════╗
        ║hello        ║
        ║worllwkefjlkd║
        ╚═════════════╝"
      `);
    });
  });
});
