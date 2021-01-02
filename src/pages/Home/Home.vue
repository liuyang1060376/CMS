<template>
  <div class="Home">
    <el-container class="home_box">
      <el-header class="header">
        <div class="left_header"><img src="./../../assets/images/logo.png" alt=""> <span>CMS后台管理系统</span></div>
        <el-button type="info">注销</el-button>
      </el-header>
      <el-container class="container">
        <el-aside :width="this.collapse ? '60px' : '300px'" class="aside">
          <div class="together_menu" @click="togetherMenu()">|||</div>
          <el-menu
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ff9700"
            :collapse="this.collapse" unique-opened router :default-active="this.activeLi">
            <MemberManager v-on:parentLiIndex="changeLiIndex($event)" />
            <FrontManager v-on:parentLiIndex="changeLiIndex($event)" />
          </el-menu>
        </el-aside>
        <el-container class="content">
          <el-main class="main"><router-view></router-view></el-main>
          <el-footer class="footer"></el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import MemberManager from '@/components/Cms/MemberManager'
import FrontManager from '@/components/Cms/FrontManager'

export default {
  name: 'Home',
  data () {
    return {
      collapse: false,
      activeLi: ''
    }
  },
  created () {
    this.activeLi = window.sessionStorage.getItem('activeLi')
  },
  components: { MemberManager, FrontManager },
  computed: {
  },
  methods: {
    // 侧边栏收缩和展开
    togetherMenu () {
      console.log('1')
      if (this.collapse) {
        console.log('2')
        this.collapse = false
      } else {
        console.log('3')
        this.collapse = true
      }
    },
    // 修改当前选定的LI标签
    changeLiIndex (event) {
      window.sessionStorage.setItem('activeLi', event.index)
    }
  }
}
</script>

<style lang="less">
  .Home {
    width: 100%;
    height: 100%;
    .home_box {
      width: 100%;
      height: 100%;
      // 头部样式
      .header {
        background-color: #373d41;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .left_header {
          width: 400px;
          height:100%;
          line-height: 60px;
          color: #fff;
          font-size: 30px;
          display: flex;
          align-items: center;
          img {
            height: 100%;
          }
          span {
            margin-left: 10px;
          }
        }
      }
      .container {
        .aside {
          background-color: #545c64;
          .together_menu {
            width: 100%;
            height: 30px;
            line-height: 30px;
            text-align: center;
            color: #fff;
            background-color: #373d41;
            cursor: pointer;
          }
        }
        .content {
          .main {
            background-color: #fff;
          }
          .footer {
            background-color: #cccccc;
          }
        }
      }
    }
  }
  .el-menu {
    border-right: 0 !important;
  }
</style>
