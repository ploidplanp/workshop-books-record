<template>
    <div>
        <form class="container formbox" @submit.prevent="swiftFunc({
            name,
            description,
            date,
            author,
            rating,
            cover
            //ค่า payload
        })">
            <div class="form-group">
            <label>Book name</label>
            <input v-model="name" type="text" class="form-control" placeholder="Enter book name" />
            </div>

            <div class="form-group">
            <label>Book Description</label>
            <textarea
                v-model="description"
                type="text"
                class="form-control"
                placeholder="Enter book description"
            ></textarea>
            </div>

            <div class="form-group">
            <label>Finished Date</label>
            <input v-model="date" type="date" class="form-control" />
            </div>

            <div class="form-group">
            <label>Book Author</label>
            <input v-model="author" type="text" class="form-control" placeholder="Book Author" />
            </div>

            <div class="form-group">
            <label>Book Rating</label>
            <input v-model="rating" type="number" class="form-control" placeholder="Book Rating" />
            </div>

            <div class="form-group">
            <label>Book Cover</label>
            <input v-model="cover" type="text" class="form-control" placeholder="Book Image URL" />
            </div>

            <b-button class="mt-3 mb-3" type="submit" variant="info">{{textButton}}</b-button>
        </form>
        <hr>
        <b-button @click="goToHome" class="mt-3 mb-5" variant="outline-primary">home</b-button>
    </div>
</template>

<script>
import { mapActions } from "vuex"; //จากหน้า store
export default {
  name: 'MyForm',
  data() {
      if(this.$route.params&&this.$route.params.id) return {...this.$store.state.books[this.$route.params.id]}
      else return {
          name: '',
          description: '',
          date: '',
          author: '',
          rating: 5,
          cover: 'https://66.media.tumblr.com/5182797c3fc35a3c691e53dff8aa6a9a/tumblr_otug0h2o8Q1wug2i5o1_250.jpg',
      }
  },
  methods: {
    goToHome(){
        this.$router.push('/')
    },
    ...mapActions([
        // จากหน้า store
        'addBook',
        'editBook'
    ]),
    customEditBook(book){
        this.editBook({index:this.$route.params.id, data:book})
    }
  },
  computed: {
      textButton(){
          if(this.$route.path == '/add-book') return 'Add Book'
          else return 'Edit Book'
          
      },
      swiftFunc(){
          if(this.$route.path == '/add-book') return this.addBook
          else return this.customEditBook
      }
  }
}
</script>

<style scoped>
    .jumbotron{
        background-color: #889e81;
        color: white;
    }
    .formbox{
        width: 60%;
    }
    .form-group label{
        /* width: 100%; */
        display: block;
        text-align: left;
    }
</style>