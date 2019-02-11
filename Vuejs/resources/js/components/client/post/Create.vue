<style>
.myform {
  width: 100%;
}
</style>
<template>
	<div class="container">
		<div class="row">
			<form @submit.prevent="createPost()" role="form" class="myform">
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
                    <input v-model="form.body" type="text" name="body"
                        placeholder="Body..." 
                        class="form-control" :class="{ 'is-invalid': form.errors.has('body') }">
                    <has-error :form="form" field="body"></has-error>
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
                <button type="submit" class="btn btn-success">Create Post</button>
              </form>
		</div>
	</div>
</template>

<script>
  // => components/Tag.vue 
  // import TagView from '../../Tag.vue'
  // => components/asset/Tag.vue 
  // import TagView from '../../asset/Tag.vue' 

  // import {data} from './data.js'; 

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
          published: '',
          categories : [],
          tags : [],
				})
			}
		},

		methods: {
			createPost() {
                this.$Progress.start();
                this.form.post('' + '/api/m/post')
                .then(({data}) => {
                    this.$swal(
                      'Created!',
                      'Cretead Post successfully!',
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

            compileSlug: function(input) {
              return input.replace(/[^a-zA-Z0-9 -]/g, '')
                .replace(/\s+/g, '-')
                .toLowerCase();
            },

            sanitizeText: function(text) {
              var slug = "";
              // Change to lower case
              var titleLower = text.toLowerCase();
              // Letter "e"
              slug = titleLower.replace(/e|é|è|ẽ|ẻ|ẹ|ê|ế|ề|ễ|ể|ệ/gi, 'e');
              // Letter "a"
              slug = slug.replace(/a|á|à|ã|ả|ạ|ă|ắ|ằ|ẵ|ẳ|ặ|â|ấ|ầ|ẫ|ẩ|ậ/gi, 'a');
              // Letter "o"
              slug = slug.replace(/o|ó|ò|õ|ỏ|ọ|ô|ố|ồ|ỗ|ổ|ộ|ơ|ớ|ờ|ỡ|ở|ợ/gi, 'o');
              // Letter "u"
              slug = slug.replace(/u|ú|ù|ũ|ủ|ụ|ư|ứ|ừ|ữ|ử|ự/gi, 'u');
              // Letter "i"
              slug = slug.replace(/i|ì/gi, 'i');
              // Letter "d"
              slug = slug.replace(/đ/gi, 'd');
              // Trim the last whitespace
              slug = slug.replace(/\s*$/g, '');
              // Change whitespace to "-"
              slug = slug.replace(/\s+/g, '-');
              // ,
              slug = slug.replace(/,/g, '');
              // ""
              slug = slug.replace(/"/g, '');
              // ""
              slug = slug.replace(/“|”/g, '');
              // ?
              slug = slug.replace(/[?=]/g, "");

              return slug;
            },

            loadCategories() {
                    axios.get(''+'/api/m/categories/all').then(({ data }) => (this.categories = data));
            },

            loadTags() {
                    axios.get(''+'/api/m/tags/all').then(({ data }) => (this.tags = data));
            },
		},

		 watch: {
            'form.title': function(value) {
                this.form.slug = this.$root.sanitizeText(value);
            }
          },

		created() {
      this.loadCategories();
      this.loadTags();
		}
	}
</script>