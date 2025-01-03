<script lang="ts">
  import { Handle, Position, type NodeProps } from '@xyflow/svelte';

  export let data: {
    label: string;
    fields?: Array<{
      id: string;
      name: string;
      type: string;
      required?: boolean;
    }>;
  };
</script>

<div class="custom-node rounded-t-md border border-zinc-100 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-800 shadow-sm hover:outline hover:outline-1 hover:outline-blue-500/50 dark:hover:outline-blue-500/50 ">
  <div class="custom-node-header p-1 border-b border-zinc-100 dark:border-zinc-800 text-center text-zinc-400 text-sm">
    {data.label}
  </div>
  <div class="custom-node-body ">
    {#if data.fields}
      {#each data.fields as field}
        <div class="field flex items-center justify-between py-0.5 relative border-t border-zinc-100 dark:border-zinc-800 bg-white dark:bg-zinc-950 hover:bg-zinc-100 dark:hover:bg-zinc-950/50 transition-all"> 
          <Handle
            type="source"
            position={Position.Right}
            id={`${field.id}-right`}
            class="!bg-zinc-300 !w-1.5 !h-1.5 !-right-[1px]"
          />
          <Handle
            type="target"
            position={Position.Left}
            id={`${field.id}-left`}
            class="!bg-zinc-300 !w-1.5 !h-1.5 !-left-[1px]"
          />
          <span class="field-name font-thin	 text-xs px-2 py-1">{field.name}</span>
          <span class="field-type font-thin	 text-xs text-zinc-500 px-2 py-1">
            {field.type}{field.required ? '*' : ''}
          </span>
        </div>
      {/each}
    {/if}
  </div>
</div>

<style>
  .custom-node {
    min-width: 150px;
  }

  .field {
    position: relative;
  }

  :global(.custom-node .handle) {
    opacity: 0;
    transition: opacity 0.2s;
  }

  .field:hover :global(.handle) {
    opacity: 1;
  }
</style>