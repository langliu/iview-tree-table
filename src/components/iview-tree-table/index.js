import iVIewTreeTable from './src/iview-tree-table';
import iViewTreeTableColumn from './src/iview-tree-table-column';

iVIewTreeTable.install = function (Vue) {
  Vue.component(iVIewTreeTable.name, iVIewTreeTable);
};

iViewTreeTableColumn.install = function (Vue) {
  Vue.component(iViewTreeTableColumn.name, iViewTreeTableColumn);
};

const iViewTreeTablePlugin = {
  install (Vue, options) {
    Vue.component(iVIewTreeTable.name, iVIewTreeTable);
    Vue.component(iViewTreeTableColumn.name, iViewTreeTableColumn);
  }
};

export default iViewTreeTablePlugin;
