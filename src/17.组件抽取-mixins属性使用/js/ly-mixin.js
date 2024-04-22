export default {
  data() {
    return {
      message:'hello world'
    }
  },
  created() {
    console.log('组件被创建')
  },
  methods: {
    printInfo(){
      console.log('first')
    }
  },
}