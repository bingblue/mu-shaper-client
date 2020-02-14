import request from '@/utils/request'

export function getRoutes () {
  return request({
    url: '/permit/routes',
    method: 'get'
  })
}

export function getRoles () {
  return request({
    url: '/permit/roles',
    method: 'get'
  })
}

export function addRole (data) {
  return request({
    url: '/permit/role',
    method: 'post',
    data
  })
}

export function updateRole (id, data) {
  return request({
    url: `/permit/role/${id}`,
    method: 'put',
    data
  })
}

export function deleteRole (id) {
  return request({
    url: `/permit/role/${id}`,
    method: 'delete'
  })
}
