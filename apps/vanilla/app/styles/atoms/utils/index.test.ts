import { responsiveStyle } from './index.css';

describe('responsiveStyle', () => {
  it('should return an object with media queries', () => {
    const result = {
      '@media': {
        'screen and (min-width: 0px)': {
          width: '10rem',
        },
        'screen and (min-width: 1280px)': {
          width: '30rem',
        },
      },
    };

    expect(responsiveStyle({ sm: { width: '10rem' }, lg: { width: '30rem' } })).toEqual(result);
  });
});
