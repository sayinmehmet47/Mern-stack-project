import axios from 'axios';
import { ADD_ITEM, DELETE_ITEM, GET_ITEMS, ITEMS_LOADING } from './actions';

// const config = {
//   headers: {
//     'Content-type': 'application/json',
//   },
//   baseURL: 'http://localhost:5000',
// };

export const getItems = () => (dispatch) => {
  dispatch(setItemsLoading());
  axios.get('/api/items').then((res) =>
    dispatch({
      type: GET_ITEMS,
      payload: res.data,
    })
  );
};

export const addItems = (input) => (dispatch) => {
  axios.post('/api/items', input).then((res) =>
    dispatch({
      type: ADD_ITEM,
      payload: res.data,
    })
  );
};
export const deleteItem = (id) => (dispatch) => {
  console.log(id);
  axios.delete(`/api/items/${id}`).then((res) =>
    dispatch({
      type: DELETE_ITEM,
      payload: id,
    })
  );
};

export const setItemsLoading = () => {
  return {
    type: ITEMS_LOADING,
  };
};
