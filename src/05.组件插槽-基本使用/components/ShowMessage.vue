<template>
  <div>
    <slot>
      <p>我是默认内容1</p>
    </slot>
    <slot>
      <p>我是默认内容2</p>
    </slot>
    <slot>
      <p>我是默认内容3</p>
    </slot>
    <slot>
      <p>我是默认内容4</p>
    </slot>


  </div>
</template>

<script>
  export default {
    data() {
      return {
      }
    },
  }
</script>

<style scoped></style>
