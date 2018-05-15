import map from 'lodash/map';

export const normalizeModules = data => {
  var last_module

  map(data, (item, i) => {
    item.module = last_module !== item.module ? item.module : undefined
    if (item.module !== undefined) { last_module = item.module }
    item.order = i + 1
    
    return item
  })

  return data
}
