<template>
  <button :class="[
      'node-item pointer no-select',
      {'node-item_plain' : nodeType !== 'directory'}
    ]"
  >
    <app-icon
        :name='iconName'
        class="node-icon"
    />
    <span>{{ nodeName }}</span>
  </button>
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
    },
    methods: {
      // selectItem () {
      //   if (this.nodeType === 'directory') return
      //   this.selected = !this.selected
      // }
    }
  }
</script>