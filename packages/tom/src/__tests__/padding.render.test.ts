import { render } from '../render';
import { createTomElement, createTomText } from '../tom';

describe('@vuminal/tom padding.render', () => {
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
