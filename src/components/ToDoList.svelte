<script>
  import { onMount } from "svelte";
  import { fetchTodos, deleteTodo } from "../api/todos.js";
  import Task from "./Task.svelte";

  let todos = [];

  onMount(async () => {
    todos = await fetchTodos();
  });

  async function removeTask(index) {
    await deleteTodo({
      id: todos[index]
    });
  }

</script>

<h2>Current Tasks</h2>

{#each todos as item, i}
  <Task {item} index={i} removeTask={removeTask}/>
{/each}

<style>

  h2 {
    font-size: 2rem;
    font-weight: 600;
    margin-bottom: 1rem;
    text-align: center;
  }

</style>