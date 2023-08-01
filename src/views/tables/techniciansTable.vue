<script setup>
import { computed, onMounted, ref, watch, reactive } from "vue";
import axios from "axios";
//临时数据
import staticTechbiciansData from "@/staticJson/staticTechniciansData.json";

//总数据
const techniciansData = ref([]);
techniciansData.value = staticTechbiciansData; //测试临时数据
//console.log(techniciansData);
// onMounted(() => {
//   axios.post("/getTechnicians").then(function (response) {
//     techniciansData.value = response.data;
//     console.log(response);
//   });
// });

//total
const total = computed(() => {
  return techniciansData.value.length;
});
//修改

//page-size
const pageSize = ref(10);
watch(
  () => pageSize.value,
  (newSize) => {
    pageSize.value = newSize;
  }
);

//current-page
const currentPage = ref(1);
watch(
  () => currentPage.value,
  (newPage) => {
    currentPage.value = newPage;
  }
);
//当前分页数据
const currentPageData = computed(() => {
  const start = (currentPage.value - 1) * pageSize.value;
  const end = start + pageSize.value;
  return techniciansData.value.slice(start, end);
});
//detail
function handleDetail(scope) {
  console.log(JSON.stringify(scope.row));
}
//Edit
const dialogFormVisible = ref(false);
function handleEdit(scope) {
  dialogFormVisible.value = true;
  console.log(scope);
  dialogForm.technician_id = scope.row.technician_id;
  dialogForm.realname = scope.row.realname;
}
//handleEditDialogConfirm
const dialogForm = reactive({
  technician_id: "",
  realname: "",
});
function handleEditDialogConfirm() {
  dialogFormVisible.value = false;
}
//Delete
const dialogDeleteVisible = ref(false);
var willDelete = "";
function handleDelete(scope) {
  dialogDeleteVisible.value= true;
  willDelete = scope.row;
  console.log(willDelete);
}
//handleDeleteDialogConfirm
function handleDeleteDialogConfirm() {
  dialogDeleteVisible.value = false;
  axios.post("/deleteTechnician", willDelete);
}
</script>
<template>
  <el-table :data="currentPageData" style="width: 100%">
    <el-table-column prop="technician_id" label="技术员编号" />
    <el-table-column prop="realname" label="真实姓名" />
    <el-table-column prop="nickname" label="昵称" />
    <el-table-column prop="phone_no" label="电话号码" />
    <el-table-column prop="qq_no" label="QQ号码" />
    <el-table-column fixed="right" label="操作">
      <template #default="scope">
        <el-button link type="primary" size="small" @click="handleDetail(scope)"
          >Detail</el-button
        >
        <el-button link type="primary" size="small" @click="handleEdit(scope)"
          >Edit</el-button
        >
        <el-button link type="primary" size="small" @click="handleDelete(scope)"
          >删除</el-button
        >
      </template>
    </el-table-column>
  </el-table>
  <el-pagination
    layout=" sizes, prev, pager, next, jumper, total"
    :total="total"
    v-model:page-size="pageSize"
    v-model:current-page="currentPage"
  />

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
<style scoped></style>
