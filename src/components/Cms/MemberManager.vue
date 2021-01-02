<template>
  <div>
    <el-submenu :index="1+''">
      <!--一级菜单-->
      <template slot="title">
        <i class="icon iconfont">&#xe646;</i>
        <span>会员管理</span>
      </template>
      <el-menu-item-group>
        <!--二级菜单-->
        <el-menu-item :index="'/cms/addM'" @click="$emit('parentLiIndex',$event)">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>添加会员</span>
          </template>
        </el-menu-item>
        <el-menu-item :index="2+''" @click="$emit('parentLiIndex',$event)">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>会员列表</span>
          </template>
        </el-menu-item>
        <el-menu-item :index="3+''" @click="$emit('parentLiIndex',$event)">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>会员卡挂失</span>
          </template>
        </el-menu-item>
      </el-menu-item-group>
    </el-submenu>
  </div>
</template>

<script>
export default {
  name: 'MemberManager'
}
</script>

<style lang="less">
.el-submenu [class^=el-icon-] {
  margin-right: 20px !important;
}
.el-submenu [class^=icon] {
  margin-right: 27px !important;
  margin-left: 6px !important;
}
</style>
