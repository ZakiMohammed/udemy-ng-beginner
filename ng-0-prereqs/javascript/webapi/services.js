const url = 'https://jsonplaceholder.typicode.com/todos/';

export const getTodos = async () => {
  const response = await fetch(url);
  return response.json();
};

export const getTodo = async id => {
  const response = await fetch(`${url}${id}`);
  return response.json();
};

export const createTodo = async todo => {
  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(todo),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  return response.json();
};

export const updateTodo = async (id, todo) => {
  const response = await fetch(`${url}${id}`, {
    method: 'PUT',
    body: JSON.stringify(todo),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  return response.json();
};

export const deleteTodo = async id => {
  const response = await fetch(`${url}${id}`, {
    method: 'DELETE',
  });
  return response.json();
};
