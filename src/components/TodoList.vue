<template>
    <div>
        <h1>TODO Application</h1>
    <p>Number of todos: {{ $store.getters.todos.length }}</p>
    <form @submit.prevent="addTodo">
      <input v-model="newTodo.text" placeholder="Add a new todo">
      <button type="submit">Add</button>
    </form>
    <ul class="list">
      <li class="fancy-green-list-item" v-for="(todo, index) in todos" :key="index">
        <input class="big-checkbox" type="checkbox" @click="toggleDone(index)" :checked="todo.done">
        <span :class="checkItem(todo.done)">{{ todo.text }}</span>
        <button class="plastic-pill-delete-button" @click="deleteTodo(index)">Remove</button>
        <br/>
      </li>
    </ul>
    <button @click="clearAll">Clear all todos</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newTodo: {
        text: "",
        done: false,
      },
    };
  },
  computed: {
    todos() {
      return this.$store.getters.todos;
    },
  },
  methods: {
    checkItem(done) {
      return done ? "done" : "undone";
    },
    addTodo() {
        if (this.newTodo.text === "") {
            return;
        }
        const newTodo = {
            text: this.newTodo.text,
            done: false,
        };
      this.$store.dispatch("addTodo", newTodo);
      this.newTodo.text = "";
    },
    deleteTodo(index) {
      this.$store.dispatch("deleteTodo", index);
    },
    toggleDone(index) {
      this.$store.dispatch("toggleDone", index);
    },
    clearAll() {
      this.$store.dispatch("deleteAll");
    },
  },
};
</script>

<style>
.done {
  text-decoration: line-through;
}
.list {
    margin-left:300px;
    list-style-type: none;
    padding: 0;
    justify-content: left;
    align-items: left;
}
.done {
    text-decoration: line-through;
}
.fancy-green-list-item {
    display: block;
    align-items: left;
    border-radius: 3px;
    color: #1f1f1f;
    cursor: pointer;
    font-size: 20px;
    font-weight: 400;
    line-height: 1.5;
    margin: 0;
    padding: 6px 12px;
    text-align: left;
    text-decoration: none;
    vertical-align: middle;
    white-space: nowrap;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}
.plastic-pill-delete-button {
    background-color: #ff0000;
    border: 1px solid #ff0000;
    border-radius: 30px;
    color: #ffffff;
    cursor: pointer;
    font-size: 11px;
    font-weight: 400;
    margin: 0;
    padding: 4px 9px;
    text-align: center;
    text-decoration: none;
    vertical-align: middle;
    white-space: nowrap;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}
.big-checkbox {
    width: 30px;
    height: 30px;
    margin: 0 10px 0 0;
    border-color: aquamarine;
    vertical-align: middle;
}
</style>