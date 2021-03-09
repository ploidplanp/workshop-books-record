<template>
    <div class="container text-center">
        <b-jumbotron class="jumbotron">
            <h1>Add Book Here!</h1>
        </b-jumbotron>
        <my-form/>
    </div>
</template>

<script>
import MyForm from '@/components/MyForm.vue'
import MyCard from '@/components/MyCard.vue'

export default {
    name: 'AddBook',
    components: {
        MyForm
    },
    data() {
        return {
            form: {
                name: '',
                descrip: '',
                date: '',
                author: '',
                rating: '',
                cover: ''
            },
        }
    },
    methods: {
        goToHome(){
            // this.$router.push({name: 'home'})
            this.$router.push('/')
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