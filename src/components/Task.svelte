<script>
  import { updateTodo, deleteTodo } from "../api/mongoose.js";

  export let item;
  export let deleteTask;

  function editButton() {
    item.editing = true;
  }

  async function saveButton() {
    item.editing = false;
    const updatedToDo = { _id: item._id, content: item.content, priority: item.priority, completed: item.completed, editing: item.editing };
    await updateTodo(updatedToDo._id, updatedToDo);
  }

  async function deleteButton() {
    await deleteTodo (item._id);
    deleteTask();
  }

  // Handles completed task functionality
  async function handleCompleted(event) {
    console.log(item);
    const updatedToDo = { _id: item._id, content: item.content, priority: item.priority, completed: event.target.checked, editing: item.editing };
    await updateTodo (updatedToDo._id, updatedToDo);
    deleteTask();
  }

  // Handles priority task functionality (written after completed functionality)
  async function handlePriority(event) {
    console.log(item);
    const updatedToDo = { _id: item._id, content: item.content, priority: event.target.checked, completed: item.completed, editing: item.editing };
    await updateTodo (updatedToDo._id, updatedToDo);
    deleteTask();
  }

</script>

<div class="task" class:not-important={!item.priority} class:important={item.priority}>
  {#if item.editing}
    <input type="text" bind:value={item.content} />
    <button class="save-button" on:click={saveButton}>Save</button>
  {:else}
    <div class="checkboxes">
      <div>
        <input type="checkbox" bind:checked={item.priority} on:change={handlePriority} id="priority-${item._id}"/>
        <label for="priority-${item._id}">Important</label>
      </div>
      <div>
        <input type="checkbox" bind:checked={item.completed} on:change={handleCompleted} id="completed-${item._id}"/>
        <label for="completed-${item._id}">Completed</label>
      </div>
    </div>
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
    align-items: center;
    width: 700px;
    margin: 0 auto;
    padding: 0.74rem;
    gap: 0.5rem;

  }

  @media (max-width: 700px) {
    .task {
      flex-direction: column;
      width: 100%;
    }
  }

  .not-important {
    border: 1px solid #e1e6eb;
    border-radius: 1rem;
  }

  .important {
    border: 3px solid #e1e6eb;
    border-radius: 1rem;
  }

  .checkboxes {
    padding-right: 1.5rem;
  }

  @media (max-width: 700px) {
    .checkboxes {
      padding-bottom: 1rem;
    }
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