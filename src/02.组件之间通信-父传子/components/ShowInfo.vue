<template>
  <div class="show-info">
    <h1>ShowInfo</h1>
    <h2>姓名：{{ name }}</h2>
    <h2>年龄：{{ age }}</h2>
    <h2>身高：{{ height }}</h2>
    <h3>{{ ShowMessage }}</h3>
    <div class="goods">
      <ul>
        <li>{{ goods.title }}</li>
        <li>{{ goods.price }}</li>
        <li>{{ goods.count }}</li>
      </ul>
    </div>
    <div class="print">
      {{ printHello() }}
    </div>
    <div>
      <h1>限定父组件传入值</h1>
      <h3>{{ propF }}</h3>
    </div>
  </div>
  <div class="show-msg" :age="$attrs.age">
    你好
  </div>
</template>

<script>
  export default {
    data() {
      return {
      }
    },
    inheritAttrs:false,
    // props:['name','age','height']
    props: {
      name: {
        type: String,
        required: true,
        default: 'lyric'
      },
      ShowMessage: {
        type: String,
      },
      goods: {
        type: Object,
        default() {
          return { title: '牛仔裤' }
        }
      },
      printHello:{
        type:Function,
        default(){
          console.log("welcome to Beijing")
        }
      },
      // 需求规定父组件中传入规定值
      propF:{
        validator(value){
          return ['success','warning','danger'].includes(value)
        }
      }
    }
  }
</script>

<style scoped></style>
