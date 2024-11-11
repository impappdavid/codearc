<!-- src/lib/components/templates/MonacoEditor.svelte -->
<script>
  import { onMount } from 'svelte';

  export let value = ''; // Initial code value
  export let language = 'javascript'; // Language mode, e.g., 'javascript', 'typescript', 'html', etc.

  let editorContainer;
  let editor;

  onMount(async () => {
    const monaco = await import('monaco-editor'); // Import only on the client

    editor = monaco.editor.create(editorContainer, {
      value,
      language,
      theme: 'vs-dark', // Set the theme
      automaticLayout: true, // Adjust layout automatically
    });

    editor.onDidChangeModelContent(() => {
      value = editor.getValue();
    });

    return () => {
      editor.dispose();
    };
  });
</script>

<style>
  .editor-container {
    width: 100%;
    height: 100%;
  }
</style>

<div bind:this={editorContainer} class="editor-container"></div>