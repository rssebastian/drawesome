import { SET_COLOR, COLOR_ERROR } from './types';

export const setColor = (r, g, b) => (dispatch) => {
  try {
    const colors = { r, g, b };
    console.log(`Color sent to setColor: rgb(${r},${g},${b})`);
    dispatch({
      type: SET_COLOR,
      payload: { r, g, b },
    });
  } catch (error) {
    dispatch({
      type: COLOR_ERROR,
    });
  }
};
