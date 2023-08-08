// connects to the mongoose backend url
import { PUBLIC_DATABASE_URL } from '$env/static/public'

const netlifyFunctionURL = '/.netlify/functions/';

const url = PUBLIC_DATABASE_URL + netlifyFunctionURL;
console.log(url);

export async function fetchTodos() {
  const response = await fetch(`${url}getTodos`);
  const data = await response.json();
  return data;
}

export async function createTodo(todo) {
  const response = await fetch(`${url}createTodo`, {
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

export async function updateTodo(_id, updatedTodo) {
  const response = await fetch(`${url}updateTodo/${_id}`, {
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

export async function deleteTodo(_id) {
  const response = await fetch(`${url}/deleteTodo/${_id}`, {
    method: 'DELETE'
  });

  if (!response.ok) {
    throw new Error('Failed to delete todo');
  }

  return response.json();
}