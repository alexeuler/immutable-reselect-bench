const { createSelector } = require('reselect');

const createSelectorForKey = (key) => {
  const stateSelector = state => state.get(key);
  const aSelector = createSelector(stateSelector, state => state.toJS().a);
  const bSelector = createSelector(aSelector, a => a.b);
  const cSelector = createSelector(bSelector, b => b.c);
  const dSelector = createSelector(cSelector, c => c.d);
  return dSelector;
};

module.exports = {
  plain1: createSelectorForKey('state1'),
  plain2: createSelectorForKey('state2'),
  plain3: createSelectorForKey('state3')
};
