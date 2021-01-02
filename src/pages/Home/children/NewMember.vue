<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/cms' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>会员管理</el-breadcrumb-item>
      <el-breadcrumb-item>添加会员</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card class="box-card">
      <el-form  :model="memberForm" label-width="80px">
        <el-row>
          <el-col :span="12">
            <el-form-item label="会员卡号">
              <el-input v-model="memberForm.username"></el-input>
            </el-form-item><el-form-item label="手机号码">
              <el-input v-model="memberForm.username"></el-input>
            </el-form-item><el-form-item label="证件号">
              <el-input v-model="memberForm.username"></el-input>
            </el-form-item><el-form-item label="邮箱号码">
              <el-input v-model="memberForm.username"></el-input>
            </el-form-item>
            <el-form-item label="充值金额">
              <el-input v-model="memberForm.username"></el-input>
            </el-form-item>
            <el-form-item label="会员姓名">
              <el-input v-model="memberForm.username"></el-input>
            </el-form-item>
            <el-form-item label="亲属电话">
              <el-input v-model="memberForm.username"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12"></el-col>
        </el-row>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'NewMember',
  data () {
    return {
      memberForm: {
        username: '2343'
      }
    }
  }
}
</script>

<style lang="less">

</style>
