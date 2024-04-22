<template>
  <div>
    <show-message :names="names">
      <template  v-slot:default="props">
        <h1>姓名：{{ props.item }} --- 序号：{{ props.index }}</h1>
      </template>
    </show-message>
  </div>
</template>

<script>
import  ShowMessage from './components/ShowName'
export default {
  data () {
    return {
      names:['kebo','lyric','kury','james']
    }
  },
  components:{
    ShowMessage,
  }
}
</script>

<style scoped>

</style>
