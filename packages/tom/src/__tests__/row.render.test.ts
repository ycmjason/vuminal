import { render } from '../render';
import { createTomElement, createTomText } from '../tom';

describe('@vuminal/tom row.render', () => {
  describe('main axis alignment', () => {
    it('should render children in rows aligned to left', () => {
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

    it('should render children in rows aligned to right', () => {
      expect(
        render(
          createTomElement('row', {
            props: {
              gapSize: 2,
              mainAxisAlignment: 'end',
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
        "hello world!!!!  hello world!!!!  hello world!!!!  hello world!!!!
        this is amazing    this is happy     this is cool      this is fun
                                                woop woop                 "
      `);
    });

    it('should render children in rows aligned to center', () => {
      expect(
        render(
          createTomElement('row', {
            props: {
              gapSize: 3,
              mainAxisAlignment: 'center',
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
        "hello world!!!!   hello world!!!!   hello world!!!!   hello world!!!!
        this is amazing    this is happy     this is cool       this is fun  
                                               woop woop                     "
      `);
    });
  });

  describe('cross axis alignment', () => {
    it('should render children in rows aligned to top', () => {
      expect(
        render(
          createTomElement('row', {
            props: {
              gapSize: 5,
              crossAxisAlignment: 'start',
            },
            children: [
              createTomText('hello world!!!!\nthis is amazing'),
              createTomText('hello world!!!!\nthis is happy'),
              createTomText('hello world!!!!\nthis is cool\nwoop woop'),
              createTomText('hello world!!!!\nthis is fun'),
              createTomText('hello world!!!!'),
              createTomText('oh\nbaby\nthis\nis\nquite\ncool'),
            ],
          }),
        ),
      ).toMatchInlineSnapshot(`
        "hello world!!!!     hello world!!!!     hello world!!!!     hello world!!!!     hello world!!!!     oh   
        this is amazing     this is happy       this is cool        this is fun                             baby 
                                                woop woop                                                   this 
                                                                                                            is   
                                                                                                            quite
                                                                                                            cool "
      `);
    });

    it('should render children in rows aligned to bottom', () => {
      expect(
        render(
          createTomElement('row', {
            props: {
              gapSize: 2,
              crossAxisAlignment: 'end',
            },
            children: [
              createTomText('hello world!!!!\nthis is amazing'),
              createTomText('hello world!!!!\nthis is happy'),
              createTomText('hello world!!!!\nthis is cool\nwoop woop'),
              createTomText('hello world!!!!\nthis is fun'),
              createTomText('hello world!!!!'),
              createTomText('oh\nbaby\nthis\nis\nquite\ncool'),
            ],
          }),
        ),
      ).toMatchInlineSnapshot(`
        "                                                                                     oh   
                                                                                             baby 
                                                                                             this 
                                          hello world!!!!                                    is   
        hello world!!!!  hello world!!!!  this is cool     hello world!!!!                   quite
        this is amazing  this is happy    woop woop        this is fun      hello world!!!!  cool "
      `);
    });

    it('should render children in rows aligned to center', () => {
      expect(
        render(
          createTomElement('row', {
            props: {
              gapSize: 3,
              crossAxisAlignment: 'center',
            },
            children: [
              createTomText('hello world!!!!\nthis is amazing'),
              createTomText('hello world!!!!\nthis is happy'),
              createTomText('hello world!!!!\nthis is cool\nwoop woop'),
              createTomText('hello world!!!!\nthis is fun'),
              createTomText('hello world!!!!'),
              createTomText('oh\nbaby\nthis\nis\nquite\ncool\n!!'),
            ],
          }),
        ),
      ).toMatchInlineSnapshot(`
        "                                                                                          oh   
                                                                                                  baby 
        hello world!!!!   hello world!!!!   hello world!!!!   hello world!!!!                     this 
        this is amazing   this is happy     this is cool      this is fun       hello world!!!!   is   
                                            woop woop                                             quite
                                                                                                  cool 
                                                                                                  !!   "
      `);
    });
  });
});
