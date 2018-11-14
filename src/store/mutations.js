import axios from 'axios'

const request = {
    
    GET_ITEMS(state) {
        axios.get(`http://localhost:25800/getItems`).then((response) => {
            state.todos = response.data.data;
        });
    },

    SET_ITEMS(state) {
        axios.post(`http://localhost:25800/setItems`, state.todos).
            then((response) => {
                if(response.type === 'error') {
                    alert(response.data);
                }
            });
    }

}

const mutations = {

    UPDATE_DATA(state) {
        if(Object.keys(state.todos).length === 0) {
            request.GET_ITEMS(state);
        }
    },

    ADD_ITEM(state, item) {
        state.todos.push(item);
        request.SET_ITEMS(state);
    },

    EDIT_ITEM(state, { item, completed = item.completed }) {
        item.completed = completed;
        request.SET_ITEMS(state);
    },

    REMOVE_ITEM(state, item) {
        state.todos.splice(state.todos.indexOf(item), 1);
        request.SET_ITEMS(state);
    }

}

export default mutations