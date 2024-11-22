<script>
	import { flip } from 'svelte/animate';
    import { dndzone } from 'svelte-dnd-action';
	import Column from "./Column.svelte";
	
	const flipDurationMs = 300;
	
  export let columns;
	// will be called any time a card or a column gets dropped to update the parent data
	export let onFinalUpdate;
	
	let isDraggingFolder = false;
 
  function handleDndConsiderColumns(e) {
    columns = e.detail.items;
  }
  function handleDndFinalizeColumns(e) {
    onFinalUpdate(e.detail.items);
  }
 	function handleItemFinalize(columnIdx, newItems) {
		columns[columnIdx].items = newItems;
		onFinalUpdate([...columns]);
		isDraggingFolder = false;
	}
</script>


<section class="h-full w-full flex flex-col  grid xl:grid-cols-5 gap-2"  on:consider={handleDndConsiderColumns} on:finalize={handleDndFinalizeColumns}>
    {#each columns as {id, name,items}, idx (id)}
  		<div class="h-fit w-full xl:h-full overflow-x-scroll  bg-transparent rounded-xl" animate:flip="{{duration: flipDurationMs}}" >    
				<Column name={name} items={items} isDraggingFolder={isDraggingFolder} onFolderDragStart={() => (isDraggingFolder = true)} onDrop={(newItems) => handleItemFinalize(idx, newItems)} />
			</div>
    {/each}
</section>