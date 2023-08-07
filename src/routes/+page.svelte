<svelte:head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@picocss/pico@1/css/pico.min.css">
  
</svelte:head>

<script>
	import ToDoList from "../components/ToDoList.svelte";

  let toDoList = [
 
  ];

  function addTask() {
    const input = document.querySelector(".input-task");
    const task = {
      content: input.value,
      editing: false,
      checked: false
    };
    toDoList = [...toDoList, task];
    input.value = "";
  }

</script>

<div class="intro">
  <h2>SvelteKit ToDo List</h2>
  <p>Enter the task</p>
  <div class="user-input">
    <input class="input-task" type="text" placeholder="Enter task" />
    <button class="add-button" on:click={addTask}>Add</button>
  </div>
</div>

<ToDoList />

<style>

  .intro {
    margin: 0 auto;
    padding: 20px;
    width: 700px;
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