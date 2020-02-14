import request from '@/utils/request'

export function searchUser (name) {
  return request({
    url: '/user/search',
    method: 'get',
    params: { name }
  })
}

export function transactionList (query) {
  return request({
    url: '/transaction/list',
    method: 'get',
    params: query
  })
}
