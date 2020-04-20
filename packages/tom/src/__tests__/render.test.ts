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

  describe('row', () => {
    it('should render children in rows', () => {
      expect(
        render(
          createTomElement('row', {
            props: {
              gapSize: 5,
            },
            children: [
              createTomText('hello world!!!!\nthis is amazing'),
              createTomText('hello world!!!!\nthis is happy'),
              createTomText('hello world!!!!\nthis is cool\nwoop woop'),
              createTomText('hello world!!!!\nthis is fun'),
            ],
          }),
        ),
      ).toMatchInlineSnapshot(`
        "hello world!!!!     hello world!!!!     hello world!!!!     hello world!!!!
        this is amazing     this is happy       this is cool        this is fun    
                                                woop woop                          "
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
