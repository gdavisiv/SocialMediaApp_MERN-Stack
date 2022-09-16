import * as api from '../api';

//Fetching All posts here
//Create 'Action Creators'
//Has a type and payload (01:01:00)
export const getPosts = () => async (dispatch) => {
    try {
        const { data } = await api.fetchPosts();

        dispatch({ type: 'FETCH_ALL', payload: data });
    } catch (error) {
        console.log(error.message);
    };
};