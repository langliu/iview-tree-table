<template>
  <div :class="`${prefixCls}__header`" :style="{width: `${width}`}">
    <span v-for="(item,index) in columns" :class="`${prefixCls}__th`" :key="index"
          :style="{width:`${widthArray[index]}`}">
      <span>{{item.title}}</span>
    </span>
  </div>
</template>

<script>
  export default {
    name: 'table-header',
    props: {
      columns: Array,
      widthArray: Array,
      width: String,
    },
    data () {
      return {
        prefixCls: 'xdh-tree-table',
      }
    },
  }
</script>

<style lang="less" scoped>
  .xdh-tree-table__header {
    border: 1px solid #dcdfe6;
    border-bottom: none;
    overflow: hidden;
    height: 40px;
    display: flex;
  }

  .xdh-tree-table__th {
    height: 40px;
    line-height: 40px;
    font-weight: 700;
    border-right: 1px solid #dfe6ec;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: normal;
    word-break: keep-all;
    border-collapse: collapse;
    display: inline-block;
    /*flex-grow: 1;*/
    flex-shrink: 0;
  }
</style>
