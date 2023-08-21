<script>
  import Task from "./Task.svelte";

  export let todos;
  export let updateList;

  $: sortedInProgressTodos = todos.filter(item => !item.completed).sort((a, b) => {
    if (a.priority === true && b.priority !== true) {
      return -1;
    } else if (a.priority !== true && b.priority === true) {
      return 1;
    }
    return 0;
  });

  $: sortedCompletedTodos = todos.filter(item => item.completed).sort((a, b) => {
    if (a.priority === true && b.priority !== true) {
      return -1;
    } else if (a.priority !== true && b.priority === true) {
      return 1;
    }
    return 0;
  });

</script>

<h2>Current Tasks</h2>

{#if todos.length === 0}
  <p class="empty">No tasks yet</p>
{:else}
  <div class="list">
    <div class="sub-list">
      <p class="list-heading">In Progress</p>
      {#each sortedInProgressTodos as item (item._id)}
        <Task {item} deleteTask={updateList}/>
      {/each}
    </div>
    <div class="sub-list">
      <p class="list-heading">Completed</p>
      {#each sortedCompletedTodos as item (item._id)}
        <Task {item} deleteTask={updateList}/>
      {/each}
    </div>
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
    gap: 2rem;
    justify-content: center;
    width: 100%;
    padding: 1rem 2rem;
   }

   @media (max-width: 700px) {
     .list {
       flex-direction: column;
     }
   }

  .sub-list {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    flex: 1;
   }

   .list-heading {
    text-align: center;
    font-size: 1.7rem;
   }

</style>