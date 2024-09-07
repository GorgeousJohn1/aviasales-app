import { fetchSearchID, fetchTickets } from '../api/api';

const initialState = {
  searchID: null,
  isLoading: true,
  error: [],
  ticketsData: [],
};

export const getSearchID = (value) => ({
  type: 'tickets/getSearchID',
  payload: value,
});

export const toggleLoading = () => ({
  type: 'tickets/toggleLoading',
});

export const getTickets = (value) => ({
  type: 'tickets/pushTickets',
  payload: value,
});

export const pushError = (value) => ({
  type: 'tickets/pushError',
  payload: value,
});

export default function ticketsReducer(state = initialState, action) {
  switch (action.type) {
    case 'tickets/getSearchID':
      if (state.searchID) return { ...state };
      return { ...state, searchID: action.payload };

    case 'tickets/toggleLoading':
      return { ...state, isLoading: !state.isLoading };

    case 'tickets/pushError':
      return { ...state, error: [...state.error, action.payload] };

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
  fetchSearchID()
    .then((res) => {
      dispatch(getSearchID(res));
    })
    .catch((err) => dispatch(pushError(err.message)));
};

export const getTicketsThunk = (searchID) => (dispatch) => {
  fetchTickets(searchID)
    .then((res) => {
      dispatch(getTickets(res.tickets));
      if (!res.stop) {
        dispatch(getTicketsThunk(searchID));
      } else {
        dispatch(toggleLoading());
      }
    })
    .catch((err) => {
      dispatch(pushError(err.message));
      dispatch(getTicketsThunk(searchID));
    });
};
