<template>
  <div class="MainPage">
      <h2>菜鸟驿站</h2>
      <a-button type="primary" class="button">All</a-button>
      <a-button type="primary" class="button">已预约</a-button>
      <a-button type="primary" class="button">已取件</a-button>
      <a-button type="primary" class="button">未取件</a-button>
      <a-button type="primary" class="button" shape="circle" icon="plug" >+</a-button>
    <a-table :columns="columns" :dataSource="this.$store.state.tableData" bordered id="table">
    <template v-for="col in ['trackNumber', 'receiveName', 'phoneNumber','status','reservationTime']" :slot="col" slot-scope="text, record">
      <div :key="col">
        <a-input
          v-if="record.editable"
          style="margin: -5px 0"
          :value="text"
          @change="e => handleChange(e.target.value, record.key, col)"
        />
        <template v-else>{{text}}</template>
      </div>
    </template>
    <template slot="operation" slot-scope="text, record">
      <div class='editable-row-operations'>
        <span v-if="record.editable">
          <a @click="() => save(record.key)">Save</a>
          <a-popconfirm title='Sure to cancel?' @confirm="() => cancel(record.key)">
            <a>Cancel</a>
          </a-popconfirm>
        </span>
        <span v-else>
          <a @click="() => edit(record.key)">确认收货</a>
        </span>
      </div>
    </template>
  </a-table>
  </div>
</template>

<script>
const columns = [{
  title: 'trackNumber',
  dataIndex: 'trackNumber',
  width: '25%',
  scopedSlots: { customRender: 'trackNumber' }
}, {
  title: 'receiveName',
  dataIndex: 'receiveName',
  width: '10%',
  scopedSlots: { customRender: 'receiveName' }
}, {
  title: 'phoneNumber',
  dataIndex: 'phoneNumber',
  width: '20%',
  scopedSlots: { customRender: 'phoneNumber' }
}, {
  title: 'status',
  dataIndex: 'status',
  width: '10%',
  scopedSlots: { customRender: 'status' }
}, {
  title: 'reservationTime',
  dataIndex: 'reservationTime',
  width: '20%',
  scopedSlots: { customRender: 'reservationTime' }
}, {
  title: 'operation',
  dataIndex: 'operation',
  scopedSlots: { customRender: 'operation' }
}]
export default {
  name: 'MainPage',
  data () {
    return {
      columns
    }
  }
}
</script>
<style>
h4{
    display:inline-block;
    margin-left:10px;
}
.MainPage{
    width:1000px;
    border:1px solid black;
    margin:auto;
}
.button{
    margin:5px;
}
.table{
    border:1px solid black;
    margin: 5px;
}
.editable-row-operations a {
  margin-right: 8px;
}
#table{
    margin:10px;
}
</style>
