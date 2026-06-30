<script setup>
</script>

<template>
  <div class="ds-demo-block">
    <div
      class="ds-demo-block__content"
      style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;"
    >
      <button class="ds-btn ds-btn-primary">Primary</button>
      <button class="ds-btn ds-btn-secondary">Secondary</button>
      <button class="ds-btn ds-btn-ghost">Ghost</button>
      <button class="ds-btn ds-btn-danger">Danger</button>
    </div>
  </div>
</template>

<style scoped>
.ds-demo-block {
  margin: 24px 0;
  border: 1px solid var(--border);
  border-radius: 12px;
  overflow: hidden;
}
.ds-demo-block__content {
  padding: 24px 20px;
  background: var(--surface);
}
</style>
