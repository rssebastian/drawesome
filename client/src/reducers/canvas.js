import { SET_COLOR } from '../actions/types';

const initialState = {
  r: null,
  g: null,
  b: null,
};
export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case SET_COLOR:
      const { r, g, b } = payload;
      return {
        r,
        g,
        b,
      };
    default:
      return state;
  }
}
