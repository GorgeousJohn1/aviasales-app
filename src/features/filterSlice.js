const initialState = ['all', 'none', 'one', 'two', 'three'];

export const changeFilter = (transitFilter, changeType) => ({
  type: 'filter/transitFilterChanged',
  payload: { transitFilter, changeType },
});

export default function filterReducer(state = initialState, action) {
  switch (action.type) {
    case 'filter/transitFilterChanged':
      const { transitFilter, changeType } = action.payload;
      switch (changeType) {
        case 'added':
          if (state.includes(transitFilter)) return state;
          if (transitFilter === 'all') return initialState;
          if (state.length === 3 && !state.includes('all')) return initialState;
          return state.concat(transitFilter);

        case 'removed':
          if (transitFilter === 'all') return [];

          return state.filter(
            (existingTransit) =>
              existingTransit !== transitFilter && existingTransit !== 'all'
          );

        default:
          return state;
      }

    default:
      return state;
  }
}
