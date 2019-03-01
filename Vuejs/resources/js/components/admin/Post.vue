
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<template>
    <div v-if="userPermission.hasPermission('posts.read')" class="container">
        <div class="row mt-5">
            <div class="col-12">
                <div class="card">
                    <div class="card-header">
                        <h3 class="card-title">Post Table</h3>
                        <div class="card-tools">
                            <!-- <button class="btn btn-success" data-toggle="modal" data-target="#addNew">Add New -->
                            <button class="btn btn-success" @click="newModal">Add New
                            <i class="fas fa-plus-square"></i>
                            </button>
                        </div>
                    </div>
                    <!-- /.card-header -->
                    <div class="card-body table-responsive p-0">
                        <table class="table table-hover">
                            <tbody>
                                <tr>
                                    <th>ID</th>
                                    <th>Title</th>
                                    <th>Slug</th>
                                    <!-- <th>Body</th> -->
                                    <th>Published</th>
                                    <th>User</th>
                                    <th>Category</th>
                                    <th>Tag</th>
                                    <th>Register At</th>
                                    <th>Action</th>
                                </tr>
                                <tr v-for="post in posts.data" :key="post.id">
                                    <td>{{ post.id }}</td>
                                    <td>{{ post.title }}</td>
                                    <td>{{ post.slug }}</td>
                                    <!-- <td v-html="post.body"></td> -->
                                    <td>{{ post.published }}</td>
                                    <td>{{ post.user.name }}</td>
                                    <td>
                                        <p v-for="category in post.categories">
                                            {{ category.name_vn }}
                                        </p>
                                    </td>
                                    <td>
                                        <p v-for="tag in post.tags">
                                            {{ tag.name }}
                                        </p>
                                    </td>
                                    <td>{{ post.created_at | changeCreatedDate }}</td>
                                    <td>
                                        <a href="#" @click="editModal(post)">
                                        <i class="fa fa-edit blue"></i>
                                        </a>
                                        /
                                        <a href="#" @click="deletePost(post.slug)">
                                        <i class="fa fa-trash red"></i>
                                        </a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <!-- /.card-body -->
                    <div class="card-footer">
                        <pagination  :data="posts" @pagination-change-page="getResults"></pagination>
                    </div>
                </div>
                <!-- /.card -->
            </div>
        </div>

        <div id="addNew" class="modal fade" role="dialog">
            <div class="modal-dialog modal-lg" role="document" style="margin-left: 25%;">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 v-show="!editMode" class="modal-title" id="exampleModalLabel">Add New</h5>
                        <h5 v-show="editMode" class="modal-title" id="exampleModalLabel">Update</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <form @submit.prevent="editMode ? updatePost() : createPost()">
                        <div class="modal-body">
                            <div class="form-group">
                                <input v-model="form.title" type="text" name="title"
                                    placeholder="Title..." 
                                    class="form-control" :class="{ 'is-invalid': form.errors.has('title') }">
                                <has-error :form="form" field="title"></has-error>
                            </div>
                            <div class="form-group">
                                <input v-model="form.slug" type="text" name="slug" @input="setSlug"
                                    placeholder="Slug..." 
                                    class="form-control" :class="{ 'is-invalid': form.errors.has('slug') }">
                                <has-error :form="form" field="slug"></has-error>
                            </div>
                            <div class="form-group">
                              <ckeditor :editor="editor" v-model="form.body" :config="editorConfig"></ckeditor>
                            </div>
                            <!-- <div class="form-group">
                                <input v-model="form.body" type="text" name="body"
                                    placeholder="Body..." 
                                    class="form-control" :class="{ 'is-invalid': form.errors.has('body') }">
                                <has-error :form="form" field="body"></has-error>
                            </div> -->
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
                                <input type="radio" v-model="form.published" v-bind:value="0" checked="checked" >false
                                <has-error :form="form" field="published"></has-error>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                            <button v-show="editMode" type="submit" class="btn btn-success">Update</button>
                            <button v-show="!editMode" type="submit" class="btn btn-primary">Create</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <div v-else>
        <no-permission></no-permission>
    </div>
</template>
<script>
  import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

    export default {
        props: ['userPermission'],
        data () {
            return {
                editMode : false,
                posts : {},
                categories : [],
                tags : [],
              // Create a new form instance
                form: new Form({
                    id : '',
                    title : '',
                    slug : '',
                    body : '',
                    image : '',
                    published : '0',
                    user_id : this.$auth.user().id,
                    categories : [],
                    tags : [],
                }),
                 editor: ClassicEditor,
                editorConfig: {
                }
            }
        },
        methods: {
            getResults(page = 1) {
                axios.get('m/posts?page=' + page)
                    .then(response => {
                        this.posts = response.data;
                });
            },

            updatePost() {
                this.form.put('m/post/' + this.form.slug) //has id maybe for form.fill(user)
                .then(() => {
                    this.$Progress.start();
                    Fire.$emit('AfterCrud');
                    $('#addNew').modal('hide');
                    this.$swal(
                      'Updated!',
                      'Updated Post successfully!',
                      'success'
                    )
                    this.$Progress.finish();

                })
                .catch(() => {
                    this.$Progress.fail();
                    this.$swal("Failed!", "There was something wrong!", "warning");
                });
            },

            editModal(post) {
                this.editMode = true;
                this.form.clear()
                this.form.reset();
                $("#addNew").modal("show");
                this.form.fill(post);
            },

            newModal() {
                this.editMode = false;
                this.form.clear()
                this.form.reset();
                $("#addNew").modal("show");
            },

            deletePost(slug) {
                this.$swal({
                      title: 'Are you sure?',
                      text: "You won't be able to revert this!",
                      type: 'warning',
                      showCancelButton: true,
                      confirmButtonColor: '#3085d6',
                      cancelButtonColor: '#d33',
                      confirmButtonText: 'Yes, delete it!'
                }).then((result) => {
                    if(result.value) {
                        //send request api
                        this.form.delete('m/post/'+slug)
                        .then(() => {
                             Fire.$emit('AfterCrud');
                                this.$swal(
                                  'Deleted!',
                                  'Post has been deleted.',
                                  'success'
                                )
                        })
                        .catch(() => {
                            this.$swal("Failed!", "There was something wrong!", "warning");
                        });
                    }
                })
            },

            loadPosts() {
                // if(this.$gate.isAdminorAuthor()) {
                    axios.get('m/posts').then(({ data }) => (this.posts = data));
                // }
            },

            loadCategories() {
                    axios.get('m/categories/all').then(({ data }) => (this.categories = data));
            },

            loadTags() {
                    axios.get('m/tags/all').then(({ data }) => (this.tags = data));
            },

            createPost() {
                this.$Progress.start();
                this.form.post('m/post')
                .then(() => {
                    //call event
                    Fire.$emit('AfterCrud');
                    $('#addNew').modal('hide');
                    this.$swal(
                      'Created!',
                      'Cretead Post successfully!',
                      'success'
                    )
                    this.$Progress.finish();
                })
                .catch(() => {  
                    this.$Progress.fail();
                })

            },

            compileSlug: function(input) {
              return input.replace(/[^a-zA-Z0-9 -]/g, '')
                .replace(/\s+/g, '-')
                .toLowerCase();
            },
            setSlug: function (input) {
                this.form.slug = this.compileSlug(input.target.value)
            }
        },

         watch: {
            'form.title': function(value) {
                this.form.slug = this.$root.sanitizeText(value);
            }
          },

        created() {
            // Fire.$on('searching', () => {
            //     let query = this.$parent.search;
            //     axios.get('api/findUser?q=' + query)3
            //     .then((data) => {
            //         this.users = data.data;
            //     })
            //     .catch(() => {})
            // });
            this.$Progress.start();
            this.loadPosts();
            this.loadCategories();
            this.loadTags();
            this.$Progress.finish();
            // after event active
            Fire.$on('AfterCrud', () => {
                this.loadPosts();
            });
            this.$emit('updatedUser');
            //send request each 3s
            // setInterval(() => this.loadUsers(), 3000);
        }
        // mounted() {
        //     console.log('Component mounted.')
        // }
    }
</script>

