import * as api from '../api'


//action creators

export const getPosts = () => async(dispatch) => {

    try {
        const {data} = await api.fetchPost()
        dispatch ({
            type: 'FETCH_ALL',
            payload: data
        });
    } catch (err) {
       console.log(err) 
    }
    // const action = {
    //     type: 'FETCH_ALL',
    //     payload: []
    // }
}