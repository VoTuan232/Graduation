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
    <div class="container">
        <div class="row"  v-for="question in questions.data" :key="question.id">
            <div class="col-md-1">
                <img v-if="question.user.avatar !=null" :src="'images/profile/' + question.user.avatar" class="avatar-client">
                <img v-else src="images/profile/profile.png" class="avatar-client">
            </div>
            <div class="col-md-11">
                <p>
                    <popper trigger="hover" :options="{placement: 'top'}">
		                <div class="popper">
		                	<div class="row">
		                		<div class="col-md-3">
				                	<router-link :to="'u/' + question.user.email" href="#">{{ question.user.name }}</router-link>
		                		</div>
		                		<div class="col-md-9">
				                	<router-link :to="'u/' + question.user.email" href="#">{{ question.user.name }}</router-link>
				                	<br>
				                	{{ question.user.followers.length }} follwers
				                	{{ question.user.posts.length }} posts
		                		</div>
		                	</div>
		                </div>
		                <a href="#" slot="reference" class="top">
				        <router-link :to="'u/' + $root.changeEmail(question.user.email)" href="#">{{ question.user.name }}</router-link>
		                </a>  
	                </popper>
                {{ question.created_at }}
                <br>
                <router-link :to="'/q/' + question.slug">{{ question.title }}</router-link>
                </p>
                <div v-if="question.tags.length > 0" class="btn-group">
                    <router-link  v-for="tag in question.tags" :to="'/t/' + tag.slug" type="button" class="btn btn-primary btn-client" :key="tag.id">
                        {{ tag.name }}
                    </router-link>
                </div>
                <p>
                    <i class="fas fa-eye client"></i>&nbsp;{{ question.view }} &nbsp;&nbsp;&nbsp;
                    <i class="fa fa-comments client"></i>&nbsp;{{ question.comments.length }}
                </p>
                <hr>
            </div>
        </div>
        <div>
            <pagination  :data="questions" @pagination-change-page="getResults"></pagination>
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
                   axios.get('' + '/api/c/newestquestions?page=' + page)
                       .then(response => {
                           this.questions = response.data;
                   });
               },
    
    		getQuestions() {
    			axios.get('' + '/api/c/newestquestions')
    			.then(({data}) => this.questions = data)
    		}
    	},

    	watch: {
		    
	 	},
    
    	created() {
    		console.log('created', this);
    		this.getQuestions();
    	}
    
    }
</script>

