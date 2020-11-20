export const encodeParams = (params) => {
  return Object.entries(params)
    .map((entry) => ({
      [entry[0]]: encodeURIComponent(entry[1]),
    }))
    .reduce((pre, cur) => ({ ...pre, ...cur }), {})
}
