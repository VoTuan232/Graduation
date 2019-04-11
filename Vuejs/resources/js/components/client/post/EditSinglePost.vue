<style>
.myform {
  width: 100%;
}
</style>
<template>
	<div class="container">
		<div class="row">
			<form @submit.prevent="updatePost()" role="form" class="myform">
                <!-- text input -->
                <div class="form-group">
                    <input v-model="form.title" type="text" name="title"
                        placeholder="Title..." 
                        class="form-control" :class="{ 'is-invalid': form.errors.has('title') }">
                    <has-error :form="form" field="title"></has-error>
                </div>
                 <div class="form-group">
                    <input v-model="form.slug" type="text" name="slug"
                        placeholder="Slug..." 
                        class="form-control" :class="{ 'is-invalid': form.errors.has('slug') }">
                    <has-error :form="form" field="slug"></has-error>
                </div>
                <!-- textarea -->
                <div class="form-group">
                  <ckeditor :editor="editor" v-model="form.body" :config="editorConfig"></ckeditor>
                </div>
                <div class="form-group">
                    <multiselect 
                    v-model="form.categories" 
                    :options="categories" 
                    :multiple="true" 
                    :close-on-select="false"
                    :clear-on-select="true" 
                    :hide-selected="true"
                    placeholder="Select Categories" 
                    label="name_vn"
                    track-by="name_vn">
                    </multiselect>
                    <has-error :form="form" field="categories"></has-error>
                </div>
                <div class="form-group">
                  <multiselect 
                  v-model="form.tags" 
                  :options="tags" 
                  :multiple="true" 
                  :close-on-select="false"
                  :clear-on-select="true" 
                  :hide-selected="true"
                  placeholder="Select Tags" 
                  label="name"
                  track-by="name">
                  </multiselect>
                  <has-error :form="form" field="tags"></has-error>
              </div>
                <div class="form-group">
                    Published: 
                    <input type="radio" v-model="form.published" v-bind:value="1">true
                    <input type="radio" v-model="form.published" v-bind:value="0">false
                    <has-error :form="form" field="published"></has-error>
                </div>
                <button type="submit" class="btn btn-success">Update Post</button>
              </form>
		</div>
	</div>
</template>

<script>
  import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

  export default {
    // components: {TagView},
		data() {
			return {
				slug: this.$route.params.slug,
				categories : [],
          		tags : [],
  				form: new Form({
    					title: '',
    					slug: '',
    					body: '',
			              published: '',
			              categories : [],
			              tags : [],
			              user_id: this.$auth.user().id
    				}),
		        editor: ClassicEditor,
		        editorConfig: {
		        }
			}
		},

		methods: {
			updatePost() {
                this.$Progress.start();
                this.form.put('m/post/' + this.slug)
                .then(({data}) => {
                    this.$swal(
                      'Update!',
                      'Update Post successfully!',
                      'success'
                    );
                    this.$router.push('' + '/p/' + data.slug);
                    this.$Progress.finish();
                })
                .catch(() => {  
                    this.$Progress.fail();
                    this.$swal("Failed!", "There was something wrong!", "warning");
                })
            },

            loadCategories() {
                    axios.get('m/categories/all').then(({ data }) => (this.categories = data));
            },

            loadTags() {
                    axios.get('m/tags/all').then(({ data }) => (this.tags = data));
            },

            loadPost() {
            	axios.get('p/' + this.slug)
            	.then(response => this.form.fill(response.data))
            }
		},

		 watch: {
            // 'form.title': function(value) {
            //     this.form.slug = this.$root.sanitizeText(value);
            // }
          },

		created() {
		      this.$Progress.start();
		      this.loadCategories();
		      this.loadTags();
		      this.loadPost();
            	this.$Progress.finish();
		}
	}
</script>