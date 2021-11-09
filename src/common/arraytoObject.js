const arrayToObject = (array) => {
  const object = {}
  array.forEach(({ key, value }) => {
    object[key] = value
  })
  return object
}

export default arrayToObject
