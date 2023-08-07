<script>
  import Task from "./Task.svelte";

  export let todos;
  export let updateList;

</script>

<h2>Current Tasks</h2>

{#if todos.length === 0}
  <p class="empty">No tasks yet</p>
{:else}
  <div class="list">
    {#each todos as item}
      <Task {item} deleteTask={updateList}/>
    {/each}
  </div>
{/if}

<style>

  h2 {
    font-size: 2rem;
    font-weight: 600;
    margin-bottom: 1rem;
    text-align: center;
  }

  .empty {
    text-align: center;
    font-size: 1.6rem;
    font-weight: 400;
   }

   .list {
      display: flex;
      flex-direction: column;
      gap: 1rem;
   }

</style>