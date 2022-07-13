import { login } from '../api'

export const verifyLogin = (loginCredientials) => async (dispatch) => {
    const { data } = await login(loginCredientials)
    return dispatch({ type: 'POST', payload: data }).payload
}