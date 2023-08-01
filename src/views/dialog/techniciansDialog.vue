<template>
  <!-- Add -->
  <el-dialog v-model="dialogAddVisible" title="添加新技术员" width="50%">
    <el-form :model="dialogForm" label-width="120px" label-position="left">
      <el-form-item label="技术员编号">
        <el-input v-model="dialogForm.technician_id" />
      </el-form-item>
      <el-form-item label="技术员姓名">
        <el-input v-model="dialogForm.realname" />
      </el-form-item>
      <el-form-item label="昵称">
        <el-input v-model="dialogForm.nickname" />
      </el-form-item>
      <el-form-item label="电话号码">
        <el-input v-model="dialogForm.phone_no" />
      </el-form-item>
      <el-form-item label="QQ号码">
        <el-input v-model="dialogForm.qq_no" />
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogAddVisible = false">取消</el-button>
        <el-button type="primary" @click="addDialogSubmit"> 提交 </el-button>
      </span>
    </template>
  </el-dialog>
  <!-- Detail -->

  <!-- Edit -->
  <el-dialog v-model="dialogFormVisible" title="修改信息" width="50%">
    <p>123</p>
    <el-form :model="dialogForm">
      <el-form-item label="技术员编号">
        <el-input v-model="dialogForm.technician_id" disabled />
      </el-form-item>
      <el-form-item label="技术员姓名">
        <el-input v-model="dialogForm.realname" disabled />
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取消</el-button>
        <el-button type="primary" @click="handleEditDialogConfirm">
          确认
        </el-button>
      </span>
    </template>
  </el-dialog>
  <!-- Delete -->
  <el-dialog v-model="dialogDeleteVisible" title="Tips" width="30%">
    <span>确定要删除该技术员信息吗？</span>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogDeleteVisible = false">取消</el-button>
        <el-button type="primary" @click="handleDeleteDialogConfirm">
          确认
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>
