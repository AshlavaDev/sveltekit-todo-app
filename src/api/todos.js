export async function fetchTodos() {
  const response = await fetch(`backend/netlify/functions/getTodos`);
  const data = await response.json();
  return data;
}

export async function createTodo(todo) {
  const response = await fetch(`/netlify/functions/createTodo`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(todo)
  });

  if (!response.ok) {
    throw new Error('Failed to create todo');
  }

  return response.json();
}

export async function updateTodo(id, updatedTodo) {
  const response = await fetch(`/netlify/functions/updateTodo/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(updatedTodo)
  });

  if (!response.ok) {
    throw new Error('Failed to update todo');
  }

  return response.json();
}

export async function deleteTodo(id) {
  const response = await fetch(`netlify/functions/deleteTodo/${id}`, {
    method: 'DELETE'
  });

  if (!response.ok) {
    throw new Error('Failed to delete todo');
  }

  return response.json();
}