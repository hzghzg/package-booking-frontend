<template>
  <div class="MainPage">
      <h2>预约取件</h2>
      <a-form
  >
    <a-form-item
      label="运单号"
      :label-col="{ span: 5 }"
      :wrapper-col="{ span: 12 }"
    >
      <a-input
        v-model="trackNumber"
        v-decorator="[
          'note',
          {rules: [{ required: true, message: 'Please input your note!' }]}
        ]"
      />
    </a-form-item>
    <a-form-item
      label="取件时间"
      :label-col="{ span: 5 }"
      :wrapper-col="{ span: 12 }"
    >
      <!-- <a-input
        v-decorator="[
          'note',
          {rules: [{ required: true, message: 'Please input your note!' }]}
        ]"
      /> -->
      <a-date-picker
      id="selectTime"
      showTime
      format="YYYY-MM-DD HH:mm:ss"
      placeholder="Select Time"
      @ok="onOk(e)"
    />
    </a-form-item>
      <!-- <a-button
        type="primary"
        html-type="submit"
      >
        Submit
      </a-button> -->
      <a-popconfirm placement="bottom" okText="Yes" cancelText="No" @confirm="confirm">
        <template slot="title">
            <p>确定预约吗？</p>
        </template>
        <a-button>Submit</a-button>
      </a-popconfirm>
  </a-form>
  </div>
</template>

<script>
export default {
  name: 'MainPage',
  data () {
    return {
      reservationTime: '',
      trackNumber: ''
    }
  },
  methods: {
    onOk (event) {
      this.reservationTime = event.target.value
    },
    confirm () {
      this.$store.commit('updatestatus', this.trackNumber)
    }
  },
  components: {
  }
}
</script>
<style>
h4{
    display:inline-block;
    margin-left:10px;
}
.MainPage{
    width:800px;
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
#selectTime{
    width:100%;
}
</style>
