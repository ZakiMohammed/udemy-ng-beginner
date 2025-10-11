import { getTodos, getTodo, createTodo, updateTodo, deleteTodo } from './services.js';

(async () => {
  let result = await getTodos();
  console.log('GET ALL', result);
  
  result = await getTodo(1);
  console.log('GET', result);

  const newTodo = {
    userId: 1,
    title: 'New Todo',
    completed: false,
  };

  result = await createTodo(newTodo);
  console.log('POST', result);

  result.title = 'Updated Todo';

  result = await updateTodo(1, result);
  console.log('PUT', result);

  result = await deleteTodo(1);
  console.log('DEL', result);
})();
