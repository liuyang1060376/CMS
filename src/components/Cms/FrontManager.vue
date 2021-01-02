<template>
  <div>
    <el-submenu :index="2+''">
      <!--一级菜单-->
      <template slot="title">
        <i class="el-icon-location"></i>
        <span>前台管理</span>
      </template>
      <el-menu-item-group>
        <!--二级菜单-->
        <el-menu-item :index="'/cms/consume'" @click="$emit('parentLiIndex',$event)">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>会员卡消费</span>
          </template>
        </el-menu-item>
      </el-menu-item-group>
    </el-submenu>
  </div>
</template>

<script>
export default {
  name: 'FrontManager'
}
</script>

<style lang="less">

</style>
