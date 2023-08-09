// connects to the mongoose backend url
import { PUBLIC_DATABASE_URL } from '$env/static/public'
import axios from 'axios';

const url = PUBLIC_DATABASE_URL;

export async function fetchTodos() {
  try {
    const response = await axios.get(`${url}/getTodos`);

    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch todos');
  }
}

export async function createTodo(todo) {
  try {
    console.log('createTodo');
    const response = await axios.post(`${url}/createTodo`, todo, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    console.log("Todo created");
    if (response.status !== 201) {
      console.log(response);
      throw new Error('Failed to create todo');
    }

    return response.data;
  } catch (error) {
    throw new Error('Failed to create todo');
  }
}

export async function updateTodo(_id, updatedTodo) {
  const response = await fetch(`${url}/updateTodo/${_id}`, {
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