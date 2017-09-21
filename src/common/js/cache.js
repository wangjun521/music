import storage from 'good-storage'

const SEARCH_KEY = '_search_'
const SEARCH_MAX_LENGTH = 15

// 封装插入数组方法
function instertArray(arr, val, compare, maxLen) {
  const index = arr.findIndex(compare)
  if (index === 0) {
    return
  }
  if (index > 0) {
    arr.splice(index, 1)
  }
  arr.unshift(val)
  if (maxLen && arr.length > maxLen) {
    arr.pop()
  }
}
// 将搜索结果放入本地以及return出去为了放在vuex中
export function saveSearch(query) {
  let searches = storage.get(SEARCH_KEY, [])
  instertArray(searches, query, (item) => {
    return item === query
  }, SEARCH_MAX_LENGTH)

  storage.set(SEARCH_KEY, searches)

  return searches
}

// 从本地缓存取搜索历史

export function loadSearch() {
  return storage.get(SEARCH_KEY, [])
}
