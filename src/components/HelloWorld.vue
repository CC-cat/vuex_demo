<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
   

    <div class="number-box" style="margin:20px 0;">
      <button @click="plus">加 一</button>
      <input type="text" v-model="number" style="padding-left:20px;">
      <button @click="minus">减 一</button>
    </div>
    
    <button @click="getUserInfo">获取用户信息</button>
    <div class="user-info" v-if="userInfo">
      <span style="color:blue;margin-right:20px">{{userInfo.name}}</span>
      <span style="color:red;margin-right:20px">{{userInfo.gender}}</span>
      <span style="color:blue;margin-right:20px">{{userInfo.age}}</span>
    </div>
    
    <div>
      <h4 @click="getStudentList">成绩榜单</h4>
      <ul>
        <li v-for="item in students" :key="item.id">
          <span>{{item.name}}</span>
          <span>{{item.score}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted() {
    
  },
  computed:{
    number(){
      return this.$store.state.count
    },
    userInfo(){
      return this.$store.state.userInfo
    },
    students(){
      return this.$store.state.students
    }
  },
  methods:{
    plus(){
      // this.number++
      let count = Number(this.number)+1
      console.log('plus:'+count)
      this.$store.dispatch('updateCountAsync',count)
    },
    minus(){
      // this.number--
      let count = Number(this.number)-1
      console.log('minus:'+count)
      this.$store.dispatch('updateCountAsync',count)
    },
    getUserInfo(){
      this.$store.dispatch('getUserInfo',this)
    },
    getStudentList(){
      this.$store.dispatch('getStudents',this)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
