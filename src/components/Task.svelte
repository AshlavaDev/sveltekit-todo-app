<script>
  export let item;
  export let index;
  export let removeTask;

  function editButton() {
    item.editing = true;
  }

  function saveButton() {
    item.editing = false;
  }

  function deleteButton() {
    removeTask(index);
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