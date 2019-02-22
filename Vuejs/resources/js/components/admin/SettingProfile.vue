<template>
    <form class="form-horizontal">
        <div class="form-group">
            <label for="inputName" class="col-sm-2 control-label">Name</label>
            <div class="col-sm-12">
                <input type="" v-model="form.name" class="form-control" id="inputName" placeholder="Name" :class="{ 'is-invalid': form.errors.has('name') }">
                <has-error :form="form" field="name"></has-error>
            </div>
        </div>
        <div class="form-group">
            <label for="inputEmail" class="col-sm-2 control-label">Email</label>
            <div class="col-sm-12">
                <input type="email" v-model="form.email" class="form-control" id="inputEmail" placeholder="Email"  :class="{ 'is-invalid': form.errors.has('email') }">
                <has-error :form="form" field="email"></has-error>
            </div>
        </div>
        <div class="form-group">
            <label for="inputExperience" class="col-sm-2 control-label">Experience</label>
            <div class="col-sm-12">
                <textarea  v-model="form.bio" class="form-control" id="inputExperience" placeholder="Experience" :class="{ 'is-invalid': form.errors.has('bio') }"></textarea>
                <has-error :form="form" field="bio"></has-error>
            </div>
        </div>
        <div class="form-group">
            <label for="avatar" class="col-sm-2 control-label">Profile Photo</label>
            <div class="col-sm-12">
                <input type="file" @change="updateProfile" name="avatar" class="form-input">
            </div>
        </div>
        <div class="form-group">
            <label for="password" class="col-sm-12 control-label">Password (leave empty if not changing)</label>
            <div class="col-sm-12">
                <input type="password"
                    v-model="form.password"
                    class="form-control"
                    id="password"
                    placeholder="Passport"
                    :class="{ 'is-invalid': form.errors.has('password') }"
                    >
                <has-error :form="form" field="password"></has-error>
            </div>
        </div>
        <div class="form-group">
            <div class="col-sm-offset-2 col-sm-12">
                <button @click.prevent="updateInfo" type="submit" class="btn btn-success">Update</button>
            </div>
        </div>
    </form>
</template>

<script>
   export default {
        data() {
            return {
                 form: new Form({
                    id:'',
                    name : '',
                    email: '',
                    password: '',
                    type: '',
                    bio: '',
                    avatar: ''
                })
            }
        },

        mounted() {
            console.log('Component mounted.')
        },
        methods:{
            // getUser() {
            //     axios.get('' + '/api/user/current')
            //     .then(({data}) => {
            //         user = data;
            //     })
            //     .catch(() => {})
            // },

            updateInfo() {
                this.$Progress.start();
                if(this.form.password == ''){
                    this.form.password = undefined;
                }
                this.form.put('profile')
                .then(()=>{
                    /*update master blade*/
                     // Fire.$emit('AfterCreate');
                     this.$swal(
                      'Updated!',
                      'Updated User successfully!',
                      'success'
                    )
                    // this.$root.username = this.form.name; //update root username for view
                    // if(this.form.avatar.length > 200) {
                    //     this.$root.avatar = this.form.avatar; //update root avatar for view
                    // }
                    Fire.$emit('afterUpdateProfile'); //call hook for update profile (Profile vue)

                    this.$Progress.finish();
                })
                .catch(() => {
                    this.$Progress.fail();
                });
            },

            updateProfile(e) {
                let file = e.target.files[0];
                let reader = new FileReader();
                let limit = 1024 * 1024 * 2;
                if(file['size'] > limit){
                    this.$swal({
                        type: 'error',
                        title: 'Oops...',
                        text: 'You are uploading a large file',
                    })
                    return false;
                }
                reader.onloadend = (file) => {
                    this.form.avatar = reader.result;
                }
                reader.readAsDataURL(file);
            }
        },
        created() {
            axios.get('profile')
            .then(({ data }) => (this.form.fill(data)));
        }
    }
</script>
