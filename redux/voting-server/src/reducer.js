import {setEntries, next, vote, INITIAL_STATE} from './core';

export default function reducer(state = INITIAL_STATE, action) {
  console.log('reducer for '+action.type);
  switch (action.type) {
  case 'SET_ENTRIES':
    console.log('set_entries: '+action.entry);
    return setEntries(state, action.entries);
  case 'NEXT':
    console.log('next: '+state);
    return next(state);
  case 'VOTE':
    console.log('vote: '+action.entry);
    return state.update('vote', voteState => vote(voteState, action.entry));
  }
  return state;
}
