<template>
  <div id="Home">
    <h1>欢迎使用菜鸟驿站，你的快递管家！</h1>
    <a-button  id="button" type="primary" @click="skipToHome">开始使用</a-button>
  </div>
</template>
<script>
export default {
  name: 'Home',
  data () {
  },
  methods: {
    skipToHome () {
      this.$router.push({ path: '/mainpage' })
    }
  }
}
</script>
<style scoped>
#Main{
  text-align: center;
  margin-top:200px;
}
h1{
  margin: auto;
  padding:50px 0px;
}
#input {
  display: inline-block;
  width:200px;
  margin:auto;
}
#button{
  margin-left:20px;
}
#Main .anticon-close-circle {
  cursor: pointer;
  color: #ccc;
  transition: color 0.3s;
  font-size: 12px;
}
#Main .anticon-close-circle:hover {
  color: #999;
}
.Main .anticon-close-circle:active {
  color: #666;
}
</style>
