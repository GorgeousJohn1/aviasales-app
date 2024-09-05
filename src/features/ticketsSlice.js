import { fetchSearchID, fetchTickets } from '../api/api';

const initialState = {
  searchID: null,
  isLoading: true,
  error: false,
  ticketsData: [],
};

export const getSearchID = (value) => ({
  type: 'tickets/getSearchID',
  payload: value,
});

export const toggleLoading = () => ({
  type: 'tickets/getSearchID',
});

export const setError = (value) => ({
  type: 'tickets/setError',
  payload: value,
});

export const getTickets = (value) => ({
  type: 'tickets/pushTickets',
  payload: value,
});

export default function ticketsReducer(state = initialState, action) {
  switch (action.type) {
    case 'tickets/getSearchID':
      return { ...state, searchID: action.payload };

    case 'tickets/toggleLoading':
      return { ...state, isLoading: !state.isLoading };

    case 'tickets/setError':
      return { ...state, error: action.payload };

    case 'tickets/pushTickets':
      return {
        ...state,
        ticketsData: [...state.ticketsData, ...action.payload],
      };

    default:
      return state;
  }
}

export const getSearchIdThunk = () => (dispatch) => {
  fetchSearchID().then((res) => {
    dispatch(getSearchID(res));
  });
};

export const getTicketsThunk = (searchID) => (dispatch) => {
  fetchTickets(searchID).then((res) => {
    dispatch(getTickets(res));
  });
};
