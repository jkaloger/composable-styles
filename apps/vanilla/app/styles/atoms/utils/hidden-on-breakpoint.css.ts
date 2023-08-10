import { style } from '@vanilla-extract/css';

import { sprinkles } from '../sprinkles.css';

export const hiddenOnSm = style([
  sprinkles({
    display: {
      sm: 'none',
      md: 'initial',
    },
  }),
]);

export const hiddenOnMd = style([
  sprinkles({
    display: {
      md: 'none',
    },
  }),
]);

export const hiddenOnLg = style([
  sprinkles({
    display: {
      lg: 'none',
    },
  }),
]);

export const onlyOnLg = style([
  sprinkles({
    display: {
      sm: 'none',
      md: 'none',
      lg: 'initial',
    },
  }),
]);
