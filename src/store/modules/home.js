import {reqBaseCategroy} from '../../api'

export default {
    state:{
        baseCategroy: [],
    },
    mutations:{
        RECEIVE_BASE_CATEGROY (state,baseCategroy) {
            state.baseCategroy = baseCategroy
        }

    },
    actions: {
        async reqbasecategroy({commit}) {
            const result = await reqBaseCategroy()
            if (result.code===200){
                const getbasecategroy = result.data
                commit('RECEIVE_BASE_CATEGROY',getbasecategroy)
            }
        }
    },
    getters: {}
}