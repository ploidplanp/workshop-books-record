<template>
  <div class="container">
    <b-jumbotron class="jumbotron">
      <h1>My User</h1>
    </b-jumbotron>
    <h3>Name: {{users[0].name}}</h3>
    <p>Age: {{users[0].age}}</p>
  </div>
</template>

<script>

export default {
  name: 'user_id',
  data(){
      return {
          users: [
              {
                  name: 'username1',
                  age: 25
              },
              {
                  name: 'username2',
                  age: 24
              },
              {
                  name: 'username3',
                  age: 26
              }
          ]
      }
  }
}
</script>

<style scoped>
  .jumbotron{
    background-color: #889e81;
    color: white;
  }
</style>
