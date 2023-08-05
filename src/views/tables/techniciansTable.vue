<script setup>
import { computed, onMounted, ref,  reactive } from "vue";
import axios from "axios";
import { usePagination } from "@/components/usePagination.js"; //分页

//临时数据
//import staticTechbiciansData from "@/staticJson/staticTechniciansData.json";

//总数据
const techniciansData = ref([]);
//techniciansData.value = staticTechbiciansData; //测试临时数据
//console.log(techniciansData);

function requestData() {
  axios
    .post("/getTechnicians")
    .then(function (response) {
      techniciansData.value = response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
}
onMounted(requestData);
//搜索功能
const searchRealname = ref("");
const searchTechnicianId = ref("");
const filterData = computed(() =>
  techniciansData.value.filter((data) => {
    // 过滤用户名
    const isRealnameMatched =
      !searchRealname.value ||
      data.realname.toLowerCase().includes(searchRealname.value.toLowerCase());

    // 过滤用户ID
    const isTechnicianIdMatched =
      !searchTechnicianId.value ||
      data.technician_id.toString().includes(searchTechnicianId.value);

    // 返回符合两个搜索条件的数据
    return isRealnameMatched && isTechnicianIdMatched;
  })
);
const { total, pageSize, currentPage, currentPageData } =
  usePagination(filterData);

//technicianForm
const technicianForm = reactive({
  technician_id: "",
  realname: "",
  nickname: "",
  phone_no: "",
  qq_no: "",
});
//Add
const dialogAddVisible = ref(false);
function handleAdd() {
  dialogAddVisible.value = true;
  Object.keys(technicianForm).forEach((key) => {
    technicianForm[key] = "";
  });
}
//addDialogSubmit
function addDialogSubmit() {
  dialogAddVisible.value = false;
  console.log(technicianForm);
  axios
    .post("/addTechnician", technicianForm)
    .then((response) => {
      console.log(response);
    })
    .catch((e) => {
      console.log(e);
    });
  requestData();
}

//Detail
function handleDetail(scope) {}
//Edit
const dialogEditVisible = ref(false);
function handleEdit(scope) {
  Object.keys(technicianForm).forEach((key) => {
    technicianForm[key] = scope.row[key];
  });
  dialogEditVisible.value = true;
}
//EditDialogConfirm
function EditDialogConfirm() {
  dialogEditVisible.value = false;
  axios
    .post("/updateTechnician", technicianForm)
    .then((response) => {
      console.log(response);
    })
    .catch((e) => {
      console.log(e);
    });
  requestData();
}
//Delete
const dialogDeleteVisible = ref(false);
var willDeleteId = { technician_id: "" };
function handleDelete(scope) {
  dialogDeleteVisible.value = true;
  willDeleteId.technician_id = scope.row.technician_id;
}
//DeleteDialogConfirm
function DeleteDialogConfirm() {
  dialogDeleteVisible.value = false;
  axios
    .post("/deleteTechnician", willDeleteId)
    .then((response) => {
      console.log(response);
    })
    .catch((e) => {
      console.log(e);
    });
  requestData();
}
</script>
<template>
  <!-- info -->
  <el-alert
    title="真实姓名和技术员编号都是模糊搜索"
    type="info"
    show-icon
    class="info"
  />
  <!-- 搜索 -->
  <el-form :inline="true" label-width="auto" label-position="left">
    <el-form-item label="搜索真实姓名"
      ><el-input v-model="searchRealname" placeholder="search" class="input"
    /></el-form-item>
    <el-form-item label="搜索技术员编号"
      ><el-input
        v-model="searchTechnicianId"
        placeholder="search"
        class="input"
    /></el-form-item>
    <el-form-item
      ><el-button type="primary" @click="handleAdd"
        ><font-awesome-icon
          icon="fa-solid fa-plus"
          class="icon"
        />添加新技术员</el-button
      ></el-form-item
    >
  </el-form>
  <!-- Add -->

  <el-table :data="currentPageData" style="width: 100%">
    <el-table-column prop="technician_id" label="技术员编号" />
    <el-table-column prop="realname" label="真实姓名" />
    <el-table-column prop="nickname" label="昵称" />
    <el-table-column prop="phone_no" label="电话号码" />
    <el-table-column prop="qq_no" label="QQ号码" />
    <el-table-column fixed="right" label="操作">
      <template #default="scope">
        <el-button link type="primary" size="small" @click="handleDetail(scope)"
          >查看详细</el-button
        >
        <el-button link type="primary" size="small" @click="handleEdit(scope)"
          >编辑</el-button
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
  <!-- Add -->
  <el-dialog v-model="dialogAddVisible" title="添加新技术员" width="50%">
    <el-form :model="technicianForm" label-width="120px" label-position="left">
      <el-form-item label="技术员编号">
        <el-input v-model="technicianForm.technician_id" />
      </el-form-item>
      <el-form-item label="真实姓名">
        <el-input v-model="technicianForm.realname" />
      </el-form-item>
      <el-form-item label="昵称">
        <el-input v-model="technicianForm.nickname" />
      </el-form-item>
      <el-form-item label="电话号码">
        <el-input v-model="technicianForm.phone_no" />
      </el-form-item>
      <el-form-item label="QQ号码">
        <el-input v-model="technicianForm.qq_no" />
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
  <el-dialog v-model="dialogEditVisible" title="修改信息" width="50%">
    <p>123</p>
    <el-form :model="technicianForm">
      <el-form-item label="技术员编号">
        <el-input v-model="technicianForm.technician_id" disabled />
      </el-form-item>
      <el-form-item label="技术员姓名">
        <el-input v-model="technicianForm.realname" disabled />
      </el-form-item>
      <el-form-item label="昵称">
        <el-input v-model="technicianForm.nickname" />
      </el-form-item>
      <el-form-item label="电话号码">
        <el-input v-model="technicianForm.phone_no" />
      </el-form-item>
      <el-form-item label="QQ号码">
        <el-input v-model="technicianForm.qq_no"
      /></el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogEditVisible = false">取消</el-button>
        <el-button type="primary" @click="EditDialogConfirm"> 确认 </el-button>
      </span>
    </template>
  </el-dialog>
  <!-- Delete -->
  <el-dialog v-model="dialogDeleteVisible" title="Tips" width="30%">
    <span>确定要删除该技术员信息吗？</span>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogDeleteVisible = false">取消</el-button>
        <el-button type="primary" @click="DeleteDialogConfirm">
          确认
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>
<style scoped>
.icon {
  padding-right: 12px;
}
.info {
  margin-bottom: 15px;
}
</style>
