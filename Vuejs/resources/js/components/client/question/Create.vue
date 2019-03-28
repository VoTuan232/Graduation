<style>
.myform {
  width: 100%;
}
</style>
<template>
	<div class="container">
		<div v-if="$auth.check()" class="row">
			<form @submit.prevent="createQuestion()" role="form" class="myform">
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
                <!-- <tag-view v-model="form.tags"></tag-view> -->
                <!-- <div class="form-group">
                	<label>Published</label>
                  <div class="radio">
                    <label>
                      <input type="radio" name="optionsRadios" id="optionsRadios2" checked="" value="0">
                      False
                    </label>
                  </div>
                  <div class="radio">
                    <label>
                      <input type="radio" name="optionsRadios" id="optionsRadios1" value="1" >
                     True
                    </label>
                  </div>
                </div> -->
                <button type="submit" class="btn btn-success">Create Question</button>
              </form>
		</div>
    <div v-else>
      <redirect-login></redirect-login>
    </div>
	</div>
</template>

<script>
  // => components/Tag.vue 
  // import TagView from '../../Tag.vue'
  // => components/asset/Tag.vue 
  // import TagView from '../../asset/Tag.vue' 
  import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

	export default {
    // components: {TagView},
		data() {
			return {
				  categories : [],
          tags : [],
				form: new Form({
					title: '',
					slug: '',
					body: '',
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
			createQuestion() {
                this.$Progress.start();
                this.form.post('m/question')
                .then(({data}) => {
                    console.log(data);
                    //call event
                    Fire.$emit('AfterCrud');
                    this.$swal(
                      'Created!',
                      'Cretead Question successfully!',
                      'success'
                    );
                    this.$router.push('' + '/q/' + data.slug);
                    this.$Progress.finish();
                })
                .catch(() => {  
                    this.$Progress.fail();
                    this.$swal("Failed!", "There was something wrong!", "warning");
                })
            },

            // compileSlug: function(input) {
            //   return input.replace(/[^a-zA-Z0-9 -]/g, '')
            //     .replace(/\s+/g, '-')
            //     .toLowerCase();
            // },

            loadCategories() {
                    axios.get('m/categories/all').then(({ data }) => (this.categories = data));
            },

            loadTags() {
                    axios.get('m/tags/all').then(({ data }) => (this.tags = data));
            },
		},

		 watch: {
            'form.title': function(value) {
                this.form.slug = this.$root.sanitizeText(value);
            }
          },

		created() {
       this.$Progress.start();
      this.loadCategories();
      this.loadTags();
            this.$Progress.finish();
		}
	}
</script>