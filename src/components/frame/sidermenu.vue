<template>
  <aside :class="collapsed?'menu-collapsed':'menu-expanded'">
    <el-menu :default-active="$route.path" class="el-menu-vertical-demo" unique-opened router v-show="!collapsed"
             @handleselect="handleselect">
      <template v-for="(item,index) in menuData">
        <el-submenu :index="item.name">
          <template slot="title">
            <i :class="item.iconCls">{{item.name}}</i>
          </template>
          <el-menu-item v-for="(itm,index) in item.children" :index="itm.menuUrl" :key="index">
            {{itm.name}}
          </el-menu-item>
        </el-submenu>
      </template>
    </el-menu>
  </aside>
</template>
<script type="text/ecmascript-6">
  import {MENUDATA} from "components/frame/menu";

  export default {
    props: {
      collapsed: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        menuData: MENUDATA
      }
    },
    methods: {
      handleselect(a, b) {
        console.log(a, b)
      }
    }
  }
</script>
<style scoped lang="scss">
  .menu-expanded {
    -ms-flex: 0 0 230px;
    flex: 0 0 230px;
    width: 230px;
  }

  .menu-collapsed {
    -ms-flex: 0 0 60px;
    flex: 0 0 60px;
    width: 60px;
  }

  .el-menu-vertical-demo {
    i {
      font-style: normal;
    }
  }

  .el-menu {
    height: 100%;
  }
</style>
