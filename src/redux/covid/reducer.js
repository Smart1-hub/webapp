const STATS_DATA = 'covid/STATS_DATA';

const initialState = [];

const statsData = (payload) => ({
  type: STATS_DATA,
  payload,
});

const covidReducer = (state = initialState, action = { type: 'action' }) => {
  switch (action.type) {
    case STATS_DATA:
      return [...state, ...action.payload];

    default:
      return state;
  }
};

export { statsData, covidReducer };
