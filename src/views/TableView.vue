<template>
  <div class="right-box">
    <a-space>
      <a-button @click="clearData">清空</a-button>
      <a-button @click="assignData">赋值</a-button>
    </a-space>
    <s-table
      ref="tableRef"
      rowKey="key"
      :columns="columns"
      :data-source="dataSource"
      :scroll="{ y: 400 }"
      :pagination="false"
      :row-height="50"
    ></s-table>
  </div>
</template>
<script lang="ts" setup>
  import { ref } from 'vue';
  interface DataItem {
    key: number;
    name: string;
    age: number;
    sex: string;
    address: string;
  }
  const tableRef = ref();

  const columns = [
    {
      title: "Full Name",
      dataIndex: "name",
    },
    {
      title: "Age",
      dataIndex: "age",
    },
    {
      title: "Sex",
      dataIndex: "sex",
    },
    {
      title: "Address",
      dataIndex: "address",
    },
  ];

  const data1: DataItem[] = [];
  for (let i = 0; i < 100000; i++) {
    data1.push({
      key: i,
      name: `Edrward ${i}`,
      age: i + 1,
      sex: ['男', '女'][i % 2],
      address: `London Park no. ${i}`,
    });
  }
  const data2: DataItem[] = [];
  for (let i = 0; i < 80000; i++) {
    data2.push({
      key: i,
      name: `Edrward ${i}`,
      age: i + 1,
      sex: ['男', '女'][i % 2],
      address: `London Park no. ${i}`,
    });
  }
  const dataSource = ref(data1);
  
  // 清空数据
  const clearData = () => {
    dataSource.value = [];
  };
  // 给数据赋值
  const assignData = () => {
    dataSource.value = data2;
  };
</script>
<style scoped>
.right-box {
  width: 650px;
}
.ant-space {
  margin-bottom: 16px;
}
</style>
