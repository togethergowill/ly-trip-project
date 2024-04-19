<template>
  <div>
    <h1>{{ message }}</h1>
    <app-header></app-header>
    <app-content></app-content>
    <app-footer></app-footer>

  </div>
</template>

<script>
import AppHeader from './components/AppHeader'
import AppContent from './components/AppContent'
import AppFooter from './components/AppFooter'

export default {
  data () {
    return {
      message:"hello world"
    }
  },
  components:{
    AppHeader,
    AppContent,
    AppFooter,
    
  }
}
</script>

<style scoped>

</style>
