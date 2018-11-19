<template>
  <div>
    <table-header :columns="columns" :width-array="widthArray" :width="'80vw'"></table-header>
    <Tree show-checkbox multiple :data="data" :render="renderContent"></Tree>

    <div style="display: inline-block;" :class="`__hidden`">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import tableHeader from './table-header'
  import { Tree } from 'iview'

  const BORDER_WIDTH = 1
  const ARROW_WIDTH = 24
  const CHECKBOX_WIDTH = 22
  const INDENT_DEFAULT = 16
  const EVENTS = ['node-click', 'check-change', 'current-change', 'node-expand', 'node-collapse']
  export default {
    name: 'iview-tree-table',
    components: {tableHeader},
    data () {
      return {
        columns: [
          {
            title: '姓名',
            key: 'name',
          },
          {
            title: '标题',
            key: 'title',
          },
          {
            title: '邮箱',
            key: 'email',
          },
        ],
        widthArray: [
          '200px',
          '200px',
          '300px',
        ],
        data: [{
          title: {name: 'jack', title: 'tom', email: 'allen', id: 123},
          children: [
            {
              title: {name: 'jack', title: 'tom', email: 'allen', id: 456},
            },
            {
              title: {name: 'jack', title: 'tom', email: 'allen', id: 456},
            },
          ],
        }],
      }
    },
    methods: {
      renderContent (h, {root, node, data}) {
        const re = (data, index) => h('span', {
          style: {
            width: index === 0 ? `calc(${this.widthArray[index]} - 34px)` : this.widthArray[index],
            'border-right': '1px solid #dcdfe6',
            display: 'inline-block',
            height: '40px',
            'line-height': '40px',
            'font-weight': '700',
          },
        }, data)

        let fun = (data) => {
          const Coloums = []
          this.columns.forEach((item, index) => {
            Coloums.push(re(data[item.key], index))
          })
          return Coloums
        }

        return h('span', {
          'class': `xdh__tr`,
          style: {
            height: '40px',
            display: 'inline-block',
          },
        }, fun(data.title))
      },
    },
  }
</script>

<style lang="less" scoped>
  .tree-table-row {

  }
</style>
