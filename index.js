var recipes = {
  someKey: 'someValue'
}

function updateObjectWithKeyAndValue(recipes, someKey, someValue) {
  return Object.assign({}, recipes, {[someKey]: someValue});
}

function destructivelyUpdateObjectWithKeyAndValue(recipes, someKey, someValue) {
  recipes[someKey] = someValue;
  return recipes;
}

function deleteFromObjectByKey(recipes, someKey) {
  return Object.assign({}, recipes, {[someKey]: });
}

function destructivelyDeleteFromObjectByKey(recipes, someKey) {
  delete recipes[someKey];
  return recipes;
}
