export const arrayToObject = (array) => {
  const object = {}
  array.forEach(({ key, value }) => {
    object[key] = value
  })
  return object
}

export const arrayToArray = (array, key) => {
  return array.map((element) => element[key])
}
