# Svelte Full-stack Todo App

## Author: Ashley Morgan

### Purpose: A simple todo app that stores tasks in a backend database

### Keywords: Full-stack, Svelte, Pico.css, Axios, MongoDB, Mongoose

### Description

This CRUD app was built using Svelte, initially following a simple front-end Svelte tutorial before expansion into a full-stack 
application. The user enters a task in the input section, with a limit of 40 characters to aid in a uniform design, especially 
for mobile responsiveness. On pressing the add button, the task is sent to the back end MongoDB where it is stored until the task
is deleted, and the task is rendered on the app instantly (at least according to connection times to the database) using Svelte.

From there, more tasks can be added and existing ones can be edited. Two checkboxes allow for the marking of completed tasks and 
important tasks. On checking the boxes, the lists are updated in real-time with the completed column rendering completed tasks,
and important tasks being sorted to the top of their respective lists with a different styling to highlight them. Deletion of items
is instantaneous.

### Limitations

Only one list exists across all instances, meaning that anyone using the app will be accessing the same list as everyone else. Any
changes someone make to the list is present to all users. This is more to do with the fact the project is designed to showcase CRUD 
actions and real-time rendering.

## Links

- ### [Deployed front end](https://ashley-svelte-todo.netlify.app/)
- ### [Back End Repo](https://github.com/AshlavaDev/svelte-todo-backend)
- ### [Initially used tutorial](https://www.youtube.com/watch?v=MnTfpmVzxQc)

