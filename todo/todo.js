Vue.component("todo",{
  template:`<div>
    <h1>待办事项列表</h1>
    <todo-add/>
    <todo-list/>
  </div>`,
  components:{
    todoAdd, todoList
  }
})