<svelte:head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@picocss/pico@1/css/pico.min.css">
  <title>SvelteKit ToDo List</title>
</svelte:head>

<script>
  import { onMount } from "svelte";
	import ToDoList from "../components/ToDoList.svelte";
  import { fetchTodos, createTodo } from "../api/mongoose.js";

  let toDoList = [];
  let emptyList;

  const maxChars = 40;

  async function loadList() {
    toDoList = await fetchTodos();
    if (toDoList.length === 0) {
      emptyList = true;
    } else {
      emptyList = false;
    }
  };

  async function updateList() {
    await loadList();
  };

  async function addTask() {
    const input = document.querySelector(".input-task");
    const task = {
      content: input.value,
      editing: false,
      priority: false,
      completed: false
    };
    
    await createTodo(JSON.stringify(task));
    updateList();
    input.value = "";
  };

  onMount(loadList);

</script>

<div class="intro">
  <h2>SvelteKit ToDo List</h2>
  <p>Enter the task</p>
  <p>Max {maxChars} characters</p>
  <div class="user-input">
    <input class="input-task" type="text" placeholder="Enter task" id="task-input" maxLength={maxChars} />
    <button class="add-button" on:click={addTask}>Add</button>
  </div>
</div>

<ToDoList bind:todos={toDoList} updateList={updateList}/>


<style>

  .intro {
    margin: 0 auto;
    padding: 20px;
    width: 700px;
  }

  @media (max-width: 700px) {
    .intro {
      width: 100%;
    }
  }

  h2 {
    font-size: 2rem;
    font-weight: 600;
    margin-bottom: 1rem;
    text-align: center;
  }

  p {
    font-size: 1.4rem;
    font-weight: 400;
  }

  .user-input {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 1rem;
  }

  .input-task {
    padding: 0.5rem 1rem;
    width: 100%;
    margin-right: 1rem;
  }

  .add-button {
    padding: 0.75rem 1rem;
    width: fit-content;
  }

</style>