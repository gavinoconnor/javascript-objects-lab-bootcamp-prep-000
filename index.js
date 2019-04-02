var recipes = {
  someKey: 'someValue'
}

function updateObjectWithKeyAndValue(recipes, someKey, someValue) {
  Object.assign({}, recipes, {[someKey]: someValue});
  return recipes;
}

function destructivelyUpdateObjectWithKeyAndValue(recipes, someKey, someValue) {

}

function deleteFromObjectByKey(recipes, someKey) {

}

function destructivelyDeleteFromObjectByKey(recipes, someKey) {

}
