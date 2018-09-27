<template>
  <el-row class="container">
    <zxc-header @collapsed="collapse" :collapsed="collapsed"></zxc-header>
    <el-col class="main" :span="24">
      <sider-menu :collapsed="collapsed"></sider-menu>
      <section class="content-container">
        <div class="content">
          <el-col :span="24" class="breadcrumb-container">

          </el-col>
          <el-col :span="24" class="content-wrapper">
            <router-view></router-view>
          </el-col>
        </div>
      </section>
    </el-col>
  </el-row>
</template>
<script>
  import Header from 'components/frame/header'
  import SiderMenu from 'components/frame/sidermenu'

  export default {
    components: {
      'zxc-header': Header,
      'sider-menu': SiderMenu
    },
    data() {
      return {
        collapsed: false
      }
    },
    methods: {
      collapse(collapse) {
        this.collapsed = !this.collapsed
      }
    }
  }
</script>
<style scoped lang="scss">
  .container {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
    .main {
      display: flex;
      position: absolute;
      top: 60px;
      bottom: 0;
      overflow: hidden;
    }
  }

  .content-container {
    -ms-flex: 1;
    flex: 1;
    overflow-y: scroll;
    padding: 20px;
    .content-wrapper {
      background-color: #fff;
      box-sizing: border-box;
    }
  }
</style>
