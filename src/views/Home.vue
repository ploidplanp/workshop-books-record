<template>
  <div class="container text-center">
    <b-jumbotron class="jumbotron mb-5">
      <h1>My Books</h1>
    </b-jumbotron>
    <MyCard v-for="(book, ind) in $store.state.books" :bookDetail="book" :index="ind"/>
  </div>
</template>

<script>
// @ is an alias to /src
import MyCard from '@/components/MyCard.vue'


export default {
  name: 'home',
  components: {
    MyCard
  }
}
</script>

<style scoped>
  .jumbotron {
    background-color: #889e81;
    color: white;
  }
</style>
