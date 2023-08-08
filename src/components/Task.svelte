<script>
  import { updateTodo, deleteTodo } from "../api/mongoose.js";

  export let item;
  export let deleteTask;

  function editButton() {
    item.editing = true;
  }

  async function saveButton() {
    item.editing = false;
    const updatedToDo = { _id: item._id, content: item.content, checked: item.checked, editing: item.editing };
    await updateTodo(updatedToDo.id, updatedToDo);
  }

  async function deleteButton() {
    await deleteTodo (item._id);
    deleteTask();
  }

</script>

<div class="task">
  {#if item.editing}
    <input type="text" bind:value={item.content} />
    <button class="save-button" on:click={saveButton}>Save</button>
  {:else}
    <input type="checkbox" bind:checked={item.checked} />
    <h4 class="task-content">{item.content}</h4>
    <div class="task-buttons">
      <button class="edit-button" on:click={editButton}>Edit</button>
      <button class="delete-button" on:click={deleteButton}>Delete</button>
    </div>
  {/if}
</div>

<style>
  .task {
    display: flex;
    align-items: baseline;
    width: 700px;
    margin: 0 auto;
    gap: 0.5rem;
  }

  .task-content {
    flex-grow: 1;
  }

  button {
    padding: 0.5rem 1rem;
    width: fit-content;
  }

  .task-buttons {
    display: flex;
    gap: 0.5rem;
  }
</style>