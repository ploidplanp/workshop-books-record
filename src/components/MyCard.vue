<template>
    <div class="mt-3 mb-5">
        <b-card :img-src="bookDetail.cover" img-alt="Card image" img-left class="mb-3 bookcover">
        <b-card-text class="text-left mydetail">
            <h2><i><b>{{bookDetail.name}}</b></i></h2>
            <p class="author">{{bookDetail.author}}</p>
            <p class="description">{{bookDetail.description}}</p>
            <b-row>
                <b-col><p>Date: {{bookDetail.date}}</p></b-col>
                <b-col><p>Rating: {{bookDetail.rating}}/5</p></b-col>
            </b-row>
            <b-row>
                <b-col>
                    <router-link :to="'/edit-book/'+index"><b-button variant="info">Edit Book</b-button></router-link>
                    
                </b-col>
                <b-col>
                    <b-button @click.prevent="confirmDelete(index, bookDetail)" variant="danger">Delete Book</b-button>
                </b-col>
                
            </b-row>
        </b-card-text>
        </b-card>
    </div>
</template>

<script>
import { mapActions } from "vuex"; //จากหน้า store
export default {
    name: 'MyCard',
    props: ['bookDetail', 'index'],
    methods: {
        ...mapActions([
        // จากหน้า store
        'deleteBook'
    ]),
        confirmDelete(index, bookDetail) {
            var confirm = window.confirm('Are you sure to delete \''+ bookDetail.name + '\' ?')
            console.log(bookDetail.name)
            if(confirm) return this.deleteBook(index)
        }
    }
}
</script>

<style scoped>
    .mydetail{
        padding-left: 5%;
        color: black;
    }
    p{
        font-size: 0.9em;
    }
    .author{
        color: darkgray;
    }
    .bookcover {
        width: 100%;
    }


</style>