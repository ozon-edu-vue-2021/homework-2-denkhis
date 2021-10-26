<template>
  <div class="node-item">
    <button :class="[
      'node-item__button pointer no-select',
      {'node-item__button_active' : active}
    ]"
    >
      <app-icon
          :name='iconName'
          class="node-item__icon"
      />
      <span>{{ nodeName }}</span>
    </button>
  </div>
</template>

<script>
  import AppIcon from '@/components/icons/AppIcon'

  export default {
    name: "File",
    components: {
      AppIcon
    },
    props: {
      nodeName: String,
      nodeType: String,
      isShowChildren: Boolean,
      active: Boolean
    },
    computed: {
      iconName() {
        if (this.nodeType === 'directory') {
          return this.isShowChildren ? 'folderOpen' : 'folderClosed'
        } else {
          return this.nodeType
        }
      }
    }
  }
</script>
