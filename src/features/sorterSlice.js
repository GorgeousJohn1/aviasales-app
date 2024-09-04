const initialState = 'cheapest';

export const changeSorter = (value) => ({
  type: 'sorter/change',
  payload: value,
});

export default function sorterReducer(state = initialState, action) {
  switch (action.type) {
    case 'sorter/change':
      return action.payload;

    default:
      return state;
  }
}
