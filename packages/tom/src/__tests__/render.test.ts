import { render } from '../render';
import { createTomElement, createTomText } from '../tom';

describe('@vuminal/tom render', () => {
  describe('column', () => {
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
  });

  describe('padding', () => {
    it('should add padding to children', () => {
      expect(
        render(
          createTomElement('padding', {
            props: {
              size: 2,
            },
            children: [createTomText('wazup\nthis is quite cool')],
          }),
        ),
      ).toMatchInlineSnapshot(`
        "

          wazup               
          this is quite cool  


        "
      `);
    });
  });
});
