const { createSelector } = require('reselect');

const createSelectorForKey = (key) => {
  const stateSelector = state => state.get(key);
  const aSelector = createSelector(stateSelector, state => state.get('a'));
  const bSelector = createSelector(aSelector, a => a.get('b'));
  const cSelector = createSelector(bSelector, b => b.get('c'));
  const dSelector = createSelector(cSelector, c => c.get('d').toJS());
  return dSelector;
};

module.exports = {
  immutable1: createSelectorForKey('state1'),
  immutable2: createSelectorForKey('state2'),
  immutable3: createSelectorForKey('state3')
};

