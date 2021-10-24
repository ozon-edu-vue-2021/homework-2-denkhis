<template>
  <div class="directory__node pointer">
    <app-icon
        name='file'
        class="node-icon"
    />
    <span>{{ nodeName }}</span>
  </div>
</template>

<script>
import AppIcon from "@/components/icons/AppIcon";

export default {
  name: "File",
  components: {
    AppIcon
  },
  props: {
    nodeName: String
  }
}
</script>

<style scoped>

</style>