
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>

<template>
    <div class="container">
        <div class="row mt-5">
            <div class="col-12">
                <div class="card">
                    <div class="card-header">
                        <h3 class="card-title">Comment Table</h3>
                        <div class="card-tools">
                            <!-- <button class="btn btn-success" data-toggle="modal" data-target="#addNew">Add New -->
                            <button class="btn btn-success" @click="newModal">Add New
                            <i class="fas fa-user-plus fa-fw"></i>
                            </button>
                        </div>
                    </div>
                    <!-- /.card-header -->
                    <div class="card-body table-responsive p-0">
                        <table class="table table-hover">
                            <tbody>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Post</th>
                                    <th>Comment</th>
                                    <th>Created_at</th>
                                    <th>Action</th>
                                </tr>
                                <tr v-for="comment in comments.data" :key="comment.id">
                                    <td>{{ comment.id }}</td>
                                    <td>{{ comment.user.name }}</td>
                                    <td>{{ comment.user.email }}</td>
                                    <td>{{ comment.commentable.title }}</td>
                                    <td>{{ comment.body }}</td>
                                    <td>{{ comment.created_at | changeCreatedDate }}</td>
                                    <td>
                                        <a href="#" @click="editModal(comment)" title="edit">
                                        <i class="fa fa-edit blue"></i>
                                        </a>
                                        /
                                        <a href="#" @click="deleteComment(comment.id)" title="delete">
                                        <i class="fa fa-trash red"></i>
                                        </a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <!-- /.card-body -->
                    <div class="card-footer">
                        <pagination  :data="comments" @pagination-change-page="getResults"></pagination>
                    </div>
                </div>
                <!-- /.card -->
            </div>
        </div>

        <div id="addNew" class="modal fade" role="dialog">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 v-show="!editMode" class="modal-title" id="exampleModalLabel">Add New</h5>
                        <h5 v-show="editMode" class="modal-title" id="exampleModalLabel">Update</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <form @submit.prevent="editMode ? updateComment() : createComment()">
                        <div class="modal-body">
                            <div class="form-group">
                                <input v-model="form.body" type="text" name="name"
                                    placeholder="Name..." 
                                    class="form-control" :class="{ 'is-invalid': form.errors.has('body') }">
                                <has-error :form="form" field="body"></has-error>
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
    export default {
        data () {
            return {
                editMode : false,
                comments : {},
              // Create a new form instance
                form: new Form({
                    id : '',
                    body : '',
                })
            }
        },
        methods: {
            getResults(page = 1) {
                axios.get(''+'/api/m/comments?page=' + page)
                    .then(response => {
                        this.comments = response.data;
                });
            },

            updateComment() {
                this.form.put(''+'/api/m/comment/' + this.form.id) //has id maybe for form.fill(user)
                .then(() => {
                    this.$Progress.start();
                    Fire.$emit('AfterCrud');
                    $('#addNew').modal('hide');
                    this.$swal(
                      'Updated!',
                      'Updated Comment successfully!',
                      'success'
                    )
                    this.$Progress.finish();

                })
                .catch(() => {
                    this.$Progress.fail();
                    this.$swal("Failed!", "There was something wrong!", "warning");
                });
            },

            editModal(comment) {
                this.editMode = true;
                this.form.clear()
                this.form.reset();
                $("#addNew").modal("show");
                this.form.fill(comment);
            },

            newModal() {
                // this.editMode = false;
                // this.form.clear()
                // this.form.reset();  
                // $("#addNew").modal("show");
            },

            deleteComment(id) {
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
                        this.form.delete(''+'/api/m/comment/'+id)
                        .then(() => {
                             Fire.$emit('AfterCrud');
                                this.$swal(
                                  'Deleted!',
                                  'Comment has been deleted.',
                                  'success'
                                )
                        })
                        .catch(() => {
                            this.$swal("Failed!", "There was something wrong!", "warning");
                        });
                    }
                })
            },

            loadComments() {
                // if(this.$gate.isAdminorAuthor()) {
                    axios.get(''+'/api/m/comments').then(({ data }) => (this.comments = data));
                // }
            },

            createComment() {
            //     this.$Progress.start();
            //     this.form.post(''+'/api/m/tag')
            //     .then(() => {
            //         //call event
            //         Fire.$emit('AfterCrud');
            //         $('#addNew').modal('hide');
            //         this.$swal(
            //           'Created!',
            //           'Cretead Tag successfully!',
            //           'success'
            //         )
            //         this.$Progress.finish();
            //     })
            //     .catch(() => {  
            //         this.$Progress.fail();
            //     })

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
            this.loadComments();
            // after event active
            Fire.$on('AfterCrud', () => {
                this.loadComments();
            });
            //send request each 3s
            // setInterval(() => this.loadUsers(), 3000);
        }
        // mounted() {
        //     console.log('Component mounted.')
        // }
    }
</script>

