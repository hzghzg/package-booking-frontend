<template>
  <div class="MainPage">
      <h2>包裹入库</h2>
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
      label="收件人"
      :label-col="{ span: 5 }"
      :wrapper-col="{ span: 12 }"
    >
      <a-input
        v-model="receiveName"
        v-decorator="[
          'note',
          {rules: [{ required: true, message: 'Please input your note!' }]}
        ]"
      />
    </a-form-item>
    <a-form-item
      label="电话"
      :label-col="{ span: 5 }"
      :wrapper-col="{ span: 12 }"
    >
      <a-input
        v-model="phoneNumber"
        v-decorator="[
          'note',
          {rules: [{ required: true, message: 'Please input your note!' }]}
        ]"
      />
    </a-form-item>
    <a-form-item
      label="重量"
      :label-col="{ span: 5 }"
      :wrapper-col="{ span: 12 }"
    >
      <a-input
        v-model="weight"
        v-decorator="[
          'note',
          {rules: [{ required: true, message: 'Please input your note!' }]}
        ]"
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
            <p>确定添加包裹信息吗</p>
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
      trackNumber: '',
      receiveName: '',
      phoneNumber: '',
      weight: '',
      newPackage: {}
    }
  },
  components: {
  },
  methods: {
    confirm () {
      this.newPackage = { trackNumber: this.trackNumber, receiveName: this.receiveName, phoneNumber: this.phoneNumber, status: '未取件', reservationTime: '' }
      this.$store.commit('updatedata', this.newPackage)
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
</style>
