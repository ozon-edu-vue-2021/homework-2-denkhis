<template>
  <div class="node-item">
    <button :class="[
      'node-item__button pointer no-select',
      {'node-item__button_plain' : nodeType !== 'directory'}
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
      showChildren: Boolean
    },
    computed: {
      iconName() {
        if (this.nodeType === 'directory') {
          return this.showChildren ? 'folderOpen' : 'folderClosed'
        } else {
          return this.nodeType
        }
      }
    }
  }
</script>