const actions = {

    loadData({ commit }) {
        commit('UPDATE_DATA')
    },

    addItem({ commit }, title) {
        commit('ADD_ITEM', {
            title,
            completed: false
        });
    },

    removeItem({ commit }, item) {
        commit('REMOVE_ITEM', item);
    },

    completeToggleItem({ commit }, item) {
        commit('EDIT_ITEM', {
            item,
            completed: !item.completed 
        });
    }

}

export default actions