<template>
  <el-row class="header" :span="24">
    <el-col class="logo" :span="10" :class="collapsed?'logo-collapse-width':'logo-width'">
      {{collapsed?'':logoName}}
    </el-col>
    <el-col :span="10">
      <div class="tools" @click="collapse">
        <i class="fa fa-align-justify"></i>
      </div>
    </el-col>
    <el-col class="userinfo" :span="4">
      <el-dropdown trigger="hover">
        <span class="el-dropdown-link userinfo-inner">
          <img src="../../assets/user.png">
       张某某
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>我的消息</el-dropdown-item>
          <el-dropdown-item>设置</el-dropdown-item>
          <el-dropdown-item>退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </el-col>
  </el-row>
</template>
<script type="text/ecmascript-6">

  export default {
    props: {
      collapsed: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        logoName: 'STACEYZHANG'
      }
    },
    methods: {
      collapse() {
        this.$emit('collapsed', this.collapsed)
      }
    }
  }
</script>
<style scoped lang="scss">

  .header {
    height: 60px;
    line-height: 60px;
    background: #20a0ff;
    color: #fff;
    .logo {
      height: 60px;
      font-size: 22px;
      padding-left: 20px;
      padding-right: 20px;
      border-color: hsla(62, 77%, 76%, .3);
      border-right-width: 1px;
      border-right-style: solid;
    }
    .el-col-10 {
      width: 41.66667%;
      .tools {
        padding: 0 23px;
        width: 14px;
        height: 60px;
        line-height: 60px;
        cursor: pointer;
      }
    }
    .logo-width {
      width: 230px;
    }
    .logo-collapse-width {
      width: 60px;
    }
    .userinfo {
      text-align: right;
      padding-right: 35px;
      float: right;
      .el-dropdown {
        color: #48576a;
        font-size: 14px;
        display: inline-block;
        position: relative;
        .userinfo-inner {
          cursor: pointer;
          color: #fff;
          img {
            width: 40px;
            height: 40px;
            border-radius: 20px;
            margin: 10px 0 10px 10px;
            float: right;
          }
        }
      }
    }
    .el-col-4 {
      width: 16.66667%;
    }
  }

</style>
