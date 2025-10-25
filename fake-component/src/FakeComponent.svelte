<script lang="ts">
console.log("Hello from FakeComponent")
export let items: string[]
</script>

<div>This is a fake component</div>
{#each items as item}
  <div>{item}</div>
{/each}
