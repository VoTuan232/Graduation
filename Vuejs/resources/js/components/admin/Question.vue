
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>

<template>
    <div class="container">
        <div class="row mt-5">
            <div class="col-12">
                <div class="card">
                    <div class="card-header">
                        <h3 class="card-title">Manager Questions</h3>
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
                                    <th>User</th>
                                    <th>Category</th>
                                    <th>Tag</th>
                                    <th>Action</th>
                                </tr>
                                <tr v-for="question in questions.data" :key="question.id">
                                    <td>{{ question.id }}</td>
                                    <td>{{ question.title }}</td>
                                    <td>{{ question.slug }}</td>
                                    <!-- <td>{{ question.body }}</td> -->
                                    <td>{{ question.user.name }}</td>
                                    <td>
                                        <p v-for="category in question.categories">
                                            {{ category.name_vn }}
                                        </p>
                                    </td>
                                    <td>
                                        <p v-for="tag in question.tags">
                                            {{ tag.name }}
                                        </p>
                                    </td>
                                    <td>{{ question.created_at | changeCreatedDate }}</td>
                                    <td>
                                        <a href="#" @click="editModal(question)">
                                        <i class="fa fa-edit blue"></i>
                                        </a>
                                        /
                                        <a href="#" @click="deleteQuestion(question.slug)">
                                        <i class="fa fa-trash red"></i>
                                        </a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <!-- /.card-body -->
                    <div class="card-footer">
                        <pagination  :data="questions" @pagination-change-page="getResults"></pagination>
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
                    <form @submit.prevent="editMode ? updateQuestion() : createQuestion()">
                        <div class="modal-body">
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
</template>
<script>
  import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

    export default {
        data () {
            return {
                editMode : false,
                questions : {},
                categories : [],
                tags : [],
                user : user,
              // Create a new form instance
                form: new Form({
                    id : '',
                    title : '',
                    slug : '',
                    body : '',
                    image : '',
                    user_id : user.id,
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
                axios.get(''+'/api/m/questions?page=' + page)
                    .then(response => {
                        this.questions = response.data;
                });
            },

            updateQuestion() {
                this.form.put(''+'/api/m/question/' + this.form.slug) //has id maybe for form.fill(user)
                .then(() => {
                    this.$Progress.start();
                    Fire.$emit('AfterCrud');
                    $('#addNew').modal('hide');
                    this.$swal(
                      'Updated!',
                      'Updated Question successfully!',
                      'success'
                    )
                    this.$Progress.finish();

                })
                .catch(() => {
                    this.$Progress.fail();
                    this.$swal("Failed!", "There was something wrong!", "warning");
                });
            },

            editModal(question) {
                this.editMode = true;
                this.form.clear()
                this.form.reset();
                $("#addNew").modal("show");
                this.form.fill(question);
            },

            newModal() {
                this.editMode = false;
                this.form.clear()
                this.form.reset();
                $("#addNew").modal("show");
            },

            deleteQuestion(slug) {
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
                        this.form.delete(''+'/api/m/question/'+slug)
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

            loadQuestions() {
                // if(this.$gate.isAdminorAuthor()) {
                    axios.get(''+'/api/m/questions').then(({ data }) => (this.questions = data));
                // }
            },

            loadCategories() {
                    axios.get(''+'/api/m/categories/all').then(({ data }) => (this.categories = data));
            },

            loadTags() {
                    axios.get(''+'/api/m/tags/all').then(({ data }) => (this.tags = data));
            },

            createQuestion() {
                this.$Progress.start();
                this.form.post(''+'/api/m/question')
                .then(() => {
                    //call event
                    Fire.$emit('AfterCrud');
                    $('#addNew').modal('hide');
                    this.$swal(
                      'Created!',
                      'Cretead Question successfully!',
                      'success'
                    )
                    this.$Progress.finish();
                })
                .catch(() => {
                    this.$swal("Failed!", "There was something wrong!", "warning");
                    this.$Progress.fail();
                })

            },
        },

         watch: {
            'form.title': function(value) {
                if(this.editMode == false) {
                    this.form.slug = this.$root.sanitizeText(value);
                }
            }
          },

        created() {
            this.$Progress.start();
            this.loadQuestions();
            this.loadCategories();
            this.loadTags();
            this.$Progress.finish();

            // after event active
            Fire.$on('AfterCrud', () => {
                this.loadQuestions();
            });
        }
    }
</script>

