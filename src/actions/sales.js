import { createNewOpp } from '../api'

export const createOpp = (formData) => async (dispatch) => {
    const data = await createNewOpp(formData)
    console.log(data)
    return dispatch({type: 'POST', payload: data }).payload
}