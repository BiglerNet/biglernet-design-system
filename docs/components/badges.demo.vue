<script setup>
/* No setup needed — pure template demo */
</script>

<template>
  <div class="ds-demo">
    <div class="ds-demo__content">
      <span class="badge badge-primary"><span class="badge-dot badge-dot-primary"></span> Primary</span>
      <span class="badge badge-success"><span class="badge-dot badge-dot-success"></span> Active</span>
      <span class="badge badge-warn"><span class="badge-dot badge-dot-warn"></span> Review</span>
      <span class="badge badge-danger"><span class="badge-dot badge-dot-danger"></span> Error</span>
      <span class="badge badge-info"><span class="badge-dot badge-dot-info"></span> Info</span>
      <span class="badge badge-muted">Muted</span>
    </div>
  </div>

  <div class="ds-demo">
    <div class="ds-demo__content">
      <span class="badge badge-info">us-east-1</span>
      <span class="badge badge-muted">v2.4.1</span>
      <span class="badge badge-primary">enterprise</span>
      <span class="badge badge-success">ssl</span>
    </div>
  </div>
</template>

<style scoped>
.ds-demo {
  margin-bottom: 16px;
}
.ds-demo__content {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  align-items: center;
  padding: 24px;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 12px;
}
</style>
