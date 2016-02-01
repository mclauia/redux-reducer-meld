# redux-reducer-meld

A beforeReduce enhancer for use with redux-reducer-factory that can meld previous and initial state to flesh out default state of partial state hydration (for example, when persisting only specific parts of your state tree to local storage)

reducer-meld expects that an object reducer's state (when it's a plain object) will always be the same structure as its initialState. This ensures consistency and prevents confusion between reducers and view components, and also synergizes with cherry-picked localstorage store enhancers by allowing all reducers to check previous state for partialness, and then merge in the properties of initialState that are missing, without the need for manual API calls from within each reducer.

## installation
@todo npm install or whatever

## usage

```
import { createReducerFactory } from 'redux-reducer-factory';
import meldPartialState from 'redux-reducer-meld';

const beforeReduce = [
  meldPartialState
];

export default createReducerFactory(beforeReduce);
```
## License

MIT © [Ian McLaughlin](mclauia.com)

Built on top of yeoman generator-node
