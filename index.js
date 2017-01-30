const { Map, List, fromJS } = require('immutable');
const {plain1, plain2, plain3} = require('./plain');
const {immutable1, immutable2, immutable3} = require('./immutable');
const {inaccurate1, inaccurate2, inaccurate3} = require('./inaccurate');

let state = fromJS({
  state1: {a: {b: {c: {d: []}}}},
  state2: {a: {b: {c: {d: []}}}},
  state3: {a: {b: {c: {d: []}}}},
});

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const addElem = (state) => {
  const elem = Math.random();
  const stateKey = 'state' + getRandomInt(1, 3);
  return state.updateIn([stateKey, 'a', 'b', 'c', 'd'], d => d.push(elem));
};

let s1, s2, s3;
const size = 15000;

let start = new Date();
for (i = 0; i < size; i++) {
  state = addElem(state);
  s1 = plain1(state);
  s2 = plain2(state);
  s3 = plain3(state);
}
console.log('Plain selectors', new Date() - start, 'milliseconds');

state = fromJS({
  state1: {a: {b: {c: {d: []}}}},
  state2: {a: {b: {c: {d: []}}}},
  state3: {a: {b: {c: {d: []}}}},
});

start = new Date();
for (i = 0; i < size; i++) {
  state = addElem(state);
  s1 = inaccurate1(state);
  s2 = inaccurate2(state);
  s3 = inaccurate3(state);
}

console.log('Inaccurate plain selectors', new Date() - start, 'milliseconds');

state = fromJS({
  state1: {a: {b: {c: {d: []}}}},
  state2: {a: {b: {c: {d: []}}}},
  state3: {a: {b: {c: {d: []}}}},
});

start = new Date();
for (i = 0; i < size; i++) {
  state = addElem(state);
  s1 = immutable1(state);
  s2 = immutable2(state);
  s3 = immutable3(state);
}

console.log('Immutable selectors', new Date() - start, 'milliseconds');


// console.log(state.getIn(['state1', 'a', 'b']).toJS());
// console.log(state.getIn(['state2', 'a', 'b']).toJS());
// console.log(state.getIn(['state3', 'a', 'b']).toJS());
//
// console.log(s1);
// console.log(s2);
// console.log(s3);
