<template>
  <div class="container text-center">
    <b-jumbotron class="jumbotron" header="My Bootstrap Vue Workshop">
      <div class="container mybox mt-3 mb-3">
        <hr>
        <div>
          <b-button variant="dark" v-b-toggle.collapse-2 class="m-1">more&more</b-button>
          <b-collapse id="collapse-2">
            <b-card class="b-card"><i>I'M Trying VUE Since December 2019</i></b-card>
          </b-collapse>   
        </div>
        <p class="text-right author"><i>by ploidplanp</i></p>
        
      </div>
    </b-jumbotron>
  </div>
</template>

<script>

export default {
  name: 'about',
  components: {
    
  },
  data (){
    return {
      name: "Nitchayaphan"
    }
  }
}
</script>

<style scoped>
  .jumbotron {
    background-color: #698474;
    color: white;
  }
  .jumbotron .b-card{
    color: black;
  }
  .mybox{
    width: 100%;
  }
  .author {
    font-size: 0.8em;
  }
</style>
