var todoList={
  template:`<ul>
    <todo-item/>
    <todo-item/>
    <todo-item/>
  </ul>`,
  components:{
    //规定todoItem组件只能用在todoList下
    todoItem
  }
};