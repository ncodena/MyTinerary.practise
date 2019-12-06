import axios from "axios";

export const ADD_POST = "ADD_POST";
export const DELETE_POST = "DELETE_POST";
export const FETCH_POST = 'FETCH_POST';

export const createPost = ({ firstName, lastName, userName, birth, country, email, password}) => {
    return (dispatch) => {
        return axios.post('http://localhost:5000/users/', {firstName, lastName, userName, birth, country, email, password})
            .then(response => {
                dispatch(createPostSuccess(response.data))
            })
            .catch(error => {
                throw(error);
            });
    };

};

export const createPostSuccess = (user) => {
    return {
        type: ADD_POST,
        payload: {
            _id: user._id,
            firstName: user.firstName,
            lastName: user.lastName,
            userName: user.userName,
            birth: user.birth,
            country: user.country,
            email: user.email,
            password: user.password,
        }
    }
};

export const deletePostSuccess = id => {
    return {
        type: DELETE_POST,
        payload: {
            id
        }
    }
}

export const deletePost = id => {
    return (dispatch) => {
        return axios.get()
        .then(response => {
            dispatch(deletePostSuccess(response.data))
        })
        .catch(error => {
            throw(error);
        });
    };
};

export const fetchPosts = (users) => {
    return {
        type: FETCH_POST,
        users
    }
};

export const fetchAllPosts = () => {
    return (dispatch) => {
        return axios. get('http://localhost:5000/users/all')
            .then(response => {
                dispatch(fetchPosts(response.data))
            })
            .catch(error => {
                throw(error);
            });
    };
};