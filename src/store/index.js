import { createStore } from 'vuex'

export default createStore({
  state: {
    counter: 0,
    todos: []
  },
  getters: {
    counter(state) {
      return state.counter
    },
    todos(state) {
      return state.todos
    },
    doneTodos(state) {
      return state.todos.filter(todo => todo.done)
    },
    undoneTodos(state) {
      return state.todos.filter(todo => !todo.done)
    }
  },
  mutations: {
    addTodo(state, todo) {
      state.todos.push(todo)
    },
    deleteTodo(state, index) {
      state.todos.splice(index, 1)
    },
    toggleDone(state, index) {
      state.todos[index].done = !state.todos[index].done
    },
    deleteAll(state) { 
      state.todos = []
    },
    increment(state) {
      state.counter++
    }
  },
  actions: {
    increment(context) {
      context.commit('increment')
    },
    addTodo({ commit }, todo) {
      commit('addTodo', todo)
    },
    deleteTodo({ commit }, index) {
      commit('deleteTodo', index)
    },
    toggleDone({ commit }, index) {
      commit('toggleDone', index)
    },
    deleteAll({ commit }) {
      commit('deleteAll')
    }
  },
  modules: {
  }
})
