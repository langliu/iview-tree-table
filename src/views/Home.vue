<template>
  <div class="table">
    <iview-tree-table show-checkbox :tree-data="treeData">
      <iview-tree-table-column prop="id" label="ID" width="200px">
        <template slot-scope="scope">
          <Button type="success">{{scope.node.data.id}}</Button>
        </template>
      </iview-tree-table-column>
      <iview-tree-table-column prop="email" label="邮箱" width="300px"></iview-tree-table-column>
      <iview-tree-table-column prop="title" label="标题" width="300px"></iview-tree-table-column>
    </iview-tree-table>
  </div>
</template>

<script>
  import expandRow from '../components/table-expand.vue';
  import TreeTable from 'iview-tree-table';
  import iviewTreeTable from '../components/iview-tree-table';
  import tableHeader from '../components/table-header';
  import iviewTreeTableColumn from '../components/iview-tree-table-column';

  export default {
    components: {expandRow, TreeTable, iviewTreeTable, tableHeader, iviewTreeTableColumn},
    data () {
      return {
        treeData: [{
          data: {name: 'jack', title: 'tom', email: 'allen', id: 123, level: 0},
          children: [
            {
              data: {name: 'jack', title: 'tom', email: 'allen', id: 456, level: 1},
              children: [
                {
                  data: {name: 'jack', title: 'tom', email: 'allen', id: 456, level: 2}
                },
                {
                  data: {name: 'jack', title: 'tom', email: 'allen', id: 456, level: 2}
                }
              ]
            },
            {
              data: {name: 'jack', title: 'tom', email: 'allen', id: 456, level: 1}
            }
          ]
        }],
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
                    title: 'leaf 1-1-1'
                  },
                  {
                    title: 'leaf 1-1-2'
                  }
                ]
              },
              {
                title: 'parent 1-2',
                expand: true,
                children: [
                  {
                    title: 'leaf 1-2-1'
                  },
                  {
                    title: 'leaf 1-2-1'
                  }
                ]
              }
            ]
          }],
        columns10: [
          {
            type: 'expand',
            width: 50,
            render: (h, params) => {
              return h(expandRow, {
                props: {
                  row: params.row
                }
              });
            }
          },
          {
            title: 'Name',
            key: 'name'
          },
          {
            title: 'Age',
            key: 'age'
          },
          {
            title: 'Address',
            key: 'address'
          }
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
            music: 'I Cry'
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
            music: 'My Heart Will Go On'
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
            music: 'Don’t Cry'
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
            music: 'actor'
          }
        ],
        columns: [
          '姓名',
          '标题',
          '邮箱'
        ],
        widthArray: [
          '20vw',
          '20vw',
          '30vw'
        ]
      };
    },
    methods: {
      renderContent (h, {root, node, data}) {
        return h('Table', this.data9);
      }
    }
  };

</script>

<style lang="less" scoped>
  .table {
    width: 80vw;
    margin: 0 auto;
    display: flex;

    & > div {
      width: 100%;
    }
  }
</style>
