const { createSelector } = require('reselect');

const createSelectorForKey = (key) => {
  const stateSelector = state => state.get(key).toJS();
  const aSelector = createSelector(stateSelector, state => state.a);
  const bSelector = createSelector(aSelector, a => a.b);
  const cSelector = createSelector(bSelector, b => b.c);
  const dSelector = createSelector(cSelector, c => c.d);
  return dSelector;
};

module.exports = {
  inaccurate1: createSelectorForKey('state1'),
  inaccurate2: createSelectorForKey('state2'),
  inaccurate3: createSelectorForKey('state3')
};
