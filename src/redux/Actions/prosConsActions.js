import ProsConsService from '../../services/ProsConsService';
import { 
    GET_PROS_CONS_LIST, 
    UPDATE_CONS, 
    UPDATE_PROS, 
    ADD_CONS, ADD_PROS,
    DELETE_CONS,
    DELETE_PROS
} from '../actionTypes';
import {isError} from './commonActions';
import store from '../store'


const prosConsService =  new ProsConsService()

export const loadProsCons = prosCons => ({
    type: GET_PROS_CONS_LIST,
    payload: prosCons
})
export const updateCons = cons => ({
    type: UPDATE_CONS,
    payload: cons
})
export const updatePros = pros => ({
    type: UPDATE_PROS,
    payload: pros
})
export const deleteCons = cons => ({
    type: DELETE_CONS,
    payload: cons
})
export const deletePros = pros => ({
    type: DELETE_PROS,
    payload: pros
})
export const addPros = pros => ({
    type: ADD_PROS,
    payload: pros
})
export const addCons = cons => ({
    type: ADD_CONS,
    payload: cons
})

const fetchProsConsSuccess = prosCons => ({
    type: GET_PROS_CONS_LIST,
    payload: prosCons
})


export const fetchProsCons =  () => {
    
    return async dispatch => {
        try {
            const prosCons = await prosConsService.getProsCons()
            dispatch(fetchProsConsSuccess(prosCons))
            dispatch(isError(false))
        }
        catch(e){
            dispatch(isError(true))
            console.log(e)
        }
    }
}

export const updateProsCons =   () => {
    return async (dispatch) => {
        const {groupId, userId } = store.getState().authReducer
        const {pros, cons } = store.getState().prosConsReducer
        
        const body = {
            pros: pros,
            cons: cons
        }
        try {
            const prosCons = await prosConsService.updateProsConsData(groupId, userId, body);
            dispatch(fetchProsConsSuccess(prosCons))
            dispatch(isError(false))
        }
        catch(e){
            dispatch(isError(true))
            console.log(e)
        }
    }

}

