import request from '@/utils/request'

export function getToken () {
  return request({
    url: '/auth/token',
    method: 'get'
  })
}
