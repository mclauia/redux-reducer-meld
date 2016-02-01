import isPlainObject from 'lodash/lang/isPlainObject';

export default function meldPartialState(handler, initialState, previousState) {
  let stateOut = previousState;

  // @todo support for Maps!
  if (isPlainObject(initialState)) {
    const isComplete = isEquivStructure(initialState, previousState);
    if (!isComplete) {
      stateOut = Object.assign({}, initialState, previousState);
    }
  }

  return stateOut;
}

function isEquivStructure(obj1, obj2) {
  let prop;
  for (prop in obj1) {
    if (obj1.hasOwnProperty(prop) && !obj2.hasOwnProperty(prop)) return false;
  }
  for (prop in obj2) {
    if (obj2.hasOwnProperty(prop) && !obj1.hasOwnProperty(prop)) return false;
  }
  return true;
}
