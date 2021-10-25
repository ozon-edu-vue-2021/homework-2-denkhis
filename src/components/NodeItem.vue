<template>
  <div :class="['directory__node pointer', {selected}]" @click="selectItem">
    <app-icon
        :name='iconName'
        class="node-icon"
    />
    <span>{{ nodeName }}</span>
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
    data: () => ({
      selected: false
    }),
    computed: {
      iconName () {
        if (this.nodeType === 'directory') {
          return this.showChildren ? 'folderOpen' : 'folderClosed'
        } else {
          return this.nodeType
        }
      }
    },
    methods: {
      selectItem () {
        this.selected = !this.selected
      }
    }
  }
</script>