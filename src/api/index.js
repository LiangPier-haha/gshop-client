import ajax from './axios'

export const reqBaseCategroy = () => ajax({
    method: 'GET',
    url: '/product/getBaseCategoryList'
})

export const reqLogin = (mobile,password) => ajax({
    method: 'POST',
    url: '/user/passport/login',
    data:{mobile,password}
})
