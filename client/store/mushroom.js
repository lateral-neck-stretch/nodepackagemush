import axios from 'axios';
import history from '../history';

/**
 * ACTION TYPES
 */
const GET_MUSH = 'GET_MUSH';

/**
 * ACTION CREATORS
 */
const _getMush = (mushroom) => ({ type: GET_MUSH, mushroom });

/**
 * THUNK CREATORS
 */
export const getMush = (searchParams) => async (dispatch) => {
  const params = new URLSearchParams(searchParams);

  try {
    const { data } = await axios.get(`/api/mushrooms`, {
      params,
    });
    dispatch(_getMush(data));
  } catch (error) {
    console.log('Mushroom cannot be retrieved!');
    throw error;
  }
};

// INITIAL STATE
const initialState = {};

/**
 * REDUCER
 */
export default function (state = initialState, action) {
  switch (action.type) {
    case GET_MUSH:
      return action.mushroom;
    default:
      return state;
  }
}
