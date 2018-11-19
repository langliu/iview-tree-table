<template>
  <!--<Table border type="selection" :columns="columns10" :data="data9"></Table>-->
  <!--<Tree :data="data2" show-checkbox :render="renderContent"></Tree>-->
  <!--<tree-table :columns="columns10" :data="data9"></tree-table>-->
  <div class="table">
    <!--<table-header :columns="columns" :width-array="widthArray"></table-header>-->
    <iview-tree-table>
      <iview-tree-table-column prop="id" label="ID">
        <template slot-scope="scope">
          {{scope}}
        </template>
      </iview-tree-table-column>
    </iview-tree-table>
  </div>
</template>

<script>
  import expandRow from '../components/table-expand.vue'
  import TreeTable from 'iview-tree-table'
  import iviewTreeTable from '../components/iview-tree-table'
  import tableHeader from '../components/table-header'
  import iviewTreeTableColumn from '../components/iview-tree-table-column'

  export default {
    components: {expandRow, TreeTable, iviewTreeTable, tableHeader, iviewTreeTableColumn},
    data () {
      return {
        data2: [
          {
            title: 'parent 1',
            expand: true,
            children: [
              {
                title: 'parent 1-1',
                expand: true,
                children: [
                  {
                    title: 'leaf 1-1-1',
                  },
                  {
                    title: 'leaf 1-1-2',
                  },
                ],
              },
              {
                title: 'parent 1-2',
                expand: true,
                children: [
                  {
                    title: 'leaf 1-2-1',
                  },
                  {
                    title: 'leaf 1-2-1',
                  },
                ],
              },
            ],
          }],
        columns10: [
          {
            type: 'expand',
            width: 50,
            render: (h, params) => {
              return h(expandRow, {
                props: {
                  row: params.row,
                },
              })
            },
          },
          {
            title: 'Name',
            key: 'name',
          },
          {
            title: 'Age',
            key: 'age',
          },
          {
            title: 'Address',
            key: 'address',
          },
        ],
        data9: [
          {
            name: 'John Brown',
            age: 18,
            address: 'New York No. 1 Lake Park',
            job: 'Data engineer',
            interest: 'badminton',
            birthday: '1991-05-14',
            book: 'Steve Jobs',
            movie: 'The Prestige',
            music: 'I Cry',
          },
          {
            name: 'Jim Green',
            age: 25,
            address: 'London No. 1 Lake Park',
            job: 'Data Scientist',
            interest: 'volleyball',
            birthday: '1989-03-18',
            book: 'My Struggle',
            movie: 'Roman Holiday',
            music: 'My Heart Will Go On',
          },
          {
            name: 'Joe Black',
            age: 30,
            address: 'Sydney No. 1 Lake Park',
            job: 'Data Product Manager',
            interest: 'tennis',
            birthday: '1992-01-31',
            book: 'Win',
            movie: 'Jobs',
            music: 'Don’t Cry',
          },
          {
            name: 'Jon Snow',
            age: 26,
            address: 'Ottawa No. 2 Lake Park',
            job: 'Data Analyst',
            interest: 'snooker',
            birthday: '1988-7-25',
            book: 'A Dream in Red Mansions',
            movie: 'A Chinese Ghost Story',
            music: 'actor',
          },
        ],
        columns: [
          '姓名',
          '标题',
          '邮箱',
        ],
        widthArray: [
          '20vw',
          '20vw',
          '30vw',
        ],
      }
    },
    methods: {
      renderContent (h, {root, node, data}) {
        return h('Table', this.data9)
      },
    },
  }

</script>

<style lang="less" scoped>
  .table {
    width: 80vw;
    margin: 0 auto;
    display: flex;
  }
</style>
