import { legacy_createStore as createStore, applyMiddleware } from 'redux'
// import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension'
// import { createWrapper } from 'next-redux-wrapper'
import { rootReducer } from './root-reduce'
// import { rootSaga } from './root-saga'

export type RootState = ReturnType<typeof rootReducer>
// initial states here
// const initalState = {}

// const sagaMiddleware = createSagaMiddleware()

// middleware
// const middleware = [sagaMiddleware]

// creating store
export const store = createStore(
  rootReducer,
  // initalState,
//   composeWithDevTools(applyMiddleware(...middleware))
)

// assigning store to next wrapper
// const makeStore = () => store

// export const wrapper = createWrapper(makeStore)

// sagaMiddleware.run(rootSaga)
