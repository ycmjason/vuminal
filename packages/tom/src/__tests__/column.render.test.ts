import { render } from '../render';
import { createTomElement, createTomText } from '../tom';

describe('@vuminal/tom column.render', () => {
  it('should render children in column', () => {
    expect(
      render(
        createTomElement('column', {
          props: { gapSize: 2 },
          children: [createTomText('1'), createTomText('2')],
        }),
      ),
    ).toMatchInlineSnapshot(`
        "1


        2"
      `);
  });

  describe('cross axis alignment', () => {
    it('should render children in column aligned to start', () => {
      expect(
        render(
          createTomElement('column', {
            props: { gapSize: 1, crossAxisAlignment: 'start' },
            children: [createTomText('happy birthday'), createTomText('to you')],
          }),
        ),
      ).toMatchInlineSnapshot(`
        "happy birthday

        to you        "
      `);
    });

    it('should render children in column aligned to center', () => {
      expect(
        render(
          createTomElement('column', {
            props: { gapSize: 1, crossAxisAlignment: 'center' },
            children: [createTomText('happy birthday'), createTomText('to you')],
          }),
        ),
      ).toMatchInlineSnapshot(`
        "happy birthday

            to you    "
      `);
    });

    it('should render children in column aligned to end', () => {
      expect(
        render(
          createTomElement('column', {
            props: { gapSize: 1, crossAxisAlignment: 'end' },
            children: [createTomText('happy birthday'), createTomText('to you')],
          }),
        ),
      ).toMatchInlineSnapshot(`
        "happy birthday

                to you"
      `);
    });
  });
});
