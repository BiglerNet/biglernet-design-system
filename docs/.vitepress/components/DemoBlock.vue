<script setup>
defineProps({
  title: { type: String, default: '' },
  raw: { type: Boolean, default: false },
})
</script>

<template>
  <div class="ds-demo-block">
    <div class="ds-demo-block__header" v-if="title">
      <span class="ds-demo-block__label">{{ title }}</span>
    </div>
    <div class="ds-demo-block__content">
      <component :is="'div'" v-if="raw" :innerHTML="raw" />
      <slot v-else />
    </div>
  </div>
</template>

<style>
.ds-demo-block {
  margin: 24px 0;
  border: 1px solid var(--border, #e2e4e8);
  border-radius: 12px;
  overflow: hidden;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
}
.ds-demo-block__header {
  padding: 12px 20px;
  background: var(--surface-hover, #f6f6f7);
  border-bottom: 1px solid var(--border, #e2e4e8);
  font-size: 13px;
  font-weight: 600;
  color: var(--muted, #8c8f94);
}
.ds-demo-block__content {
  padding: 24px 20px;
  background: var(--surface, #ffffff);
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
  font-size: 14px;
}
.ds-demo-block__content.vertical {
  flex-direction: column;
  align-items: stretch;
}
.ds-demo-block__content .ds-demo-block__content {
  margin: 0;
  border: none;
  padding: 16px 0;
  background: transparent;
}
</style>
