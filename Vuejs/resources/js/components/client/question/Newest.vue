<style>
    .avatar-client {
    border-radius: 50%;
    height: 37px;
    width: 37px;
    }
    .client {
    color: #9b9b9b;
    }
    .btn-client {
    margin-right: 5px;
    }
</style>
<template>
    <div class="container" id="questions">
        <div class="row"  v-for="question in questions.data" :key="question.id">
            <div class="col-md-1">
                <img v-if="question.user.avatar !=null" :src="'images/profile/' + question.user.avatar" class="avatar-client">
                <img v-else src="images/profile/profile.png" class="avatar-client">
            </div>
            <div class="col-md-11">
                <p>
                    <router-link :to="'' + '/u/' + $root.changeEmail(question.user.email)" href="#">{{ question.user.name }}</router-link>
                    <!-- <user-popper :userData="question.user"></user-popper> -->
                    {{ question.created_at }}
                    <br>
                    <router-link :to="'/q/' + question.slug">{{ question.title }}</router-link>
                </p>
                <div v-if="question.tags.length > 0" class="btn-group">
                    <tag-of-new :tagData="question.tags"></tag-of-new>
                </div>
                <p>
                    <i class="fas fa-eye client"></i>&nbsp;{{ question.view }} &nbsp;&nbsp;&nbsp;
                    <i class="fa fa-comments client"></i>&nbsp;{{ question.comments.length }}
                </p>
                <hr>
            </div>
        </div>
        <div>
            <pagination  :data="questions" @pagination-change-page="getResults" :limit="2">
                <span slot="prev-nav">&lt; Previous</span>
                <span slot="next-nav">Next &gt;</span>
            </pagination>
        </div>
    </div>
</template>
<script>
    export default {
    	data() {
    		return {
    			questions: {},
    		}
    	},
    
    	methods: {
    		getResults(page = 1) {
                   axios.get('c/newestquestions?page=' + page)
                       .then(response => {
                           this.questions = response.data;
                   });
                this.$scrollTo("#scrollToTop");
                       
               },
    
    		getQuestions() {
    			axios.get('c/newestquestions')
    			.then(({data}) => this.questions = data)
    		}
    	},

    	watch: {
		    
	 	},
    
    	created() {
    		// console.log('created', this);
             this.$Progress.start();
            this.getQuestions();
            this.$Progress.finish(); 
    	}
    
    }
</script>

