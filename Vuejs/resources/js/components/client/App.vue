

<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <router-link to="/" class="navbar-brand" href="#">MonkeyDNews</router-link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <router-link to="/" class="nav-link" href="#">Posts <span class="sr-only">(current)</span></router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/questions" class="nav-link" href="#">Question</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/authors" class="nav-link" href="#">Authors</router-link>
                    </li>
                    <!-- <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Dropdown
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a class="dropdown-item" href="#">Action</a>
                            <a class="dropdown-item" href="#">Another action</a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item" href="#">{{ $auth.user().name }}</a>
                        </div>
                    </li> -->
                </ul>
                <form class="form-inline my-2 my-lg-0">
                    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
                <ul v-if="$auth.check()"  class="navbar-nav">
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle write" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i class="fas fa-pencil-alt"></i>
                        </a>
                        <div class="dropdown-menu client" aria-labelledby="navbarDropdown">
                            <router-link to="/publish/post" class="dropdown-item"><i class="fas fa-pencil-alt"></i>Write post</router-link>
                            <router-link to="/question/ask" class="dropdown-item"><i class="fas fa-question-circle"></i>Ask question</router-link>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item" href="#">Something else here</a>
                        </div>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <img v-if="$auth.check" :src="'/images/profile/' + $auth.user().avatar" alt="User avatar" class="avatar-client"/>
                        <img v-else src="/images/profile/profile.png" alt="User avatar" class="avatar-client"/>
                        </a>
                        <div class="dropdown-menu client" aria-labelledby="navbarDropdown">
                            <a href="/admin" class="dropdown-item"><i class="fas fa-pencil-alt"></i>Website Manage</a>
                            <router-link :to="'' + '/u/' + $root.changeEmail($auth.user().email)" class="dropdown-item"><i class="fas fa-pencil-alt"></i>My Content</router-link>
                            <a href="#" @click.prevent="$auth.logout()" class="dropdown-item"><i class="fas fa-sign-out-alt"></i>Logout</a>
                            <div class="dropdown-divider"></div>
                            <router-link to="/profile/setting" class="dropdown-item" href="#">{{ $auth.user().name }}</router-link>
                        </div>
                    </li>
                </ul>
                <ul v-if="!$auth.check()" class="navbar-nav">
                    <li  class="nav-item active">
                        <router-link :to="{ name: 'login' }" class="nav-link" href="#">Login <span class="sr-only">(current)</span></router-link>
                    </li>
                    <li  class="nav-item">
                        <router-link :to="{ name: 'register' }" class="nav-link" href="#">Register</router-link>
                    </li>
                </ul>
            </div>
        </nav>
        <br><br> 
        <div class="row">
            <div class="col-md-12">
                <router-view @updatedUser="getUserCurrent" :userPermission="userPermission"></router-view>
            </div>
        </div>
        <vue-progress-bar></vue-progress-bar>
        <footer class="page-footer font-small blue pt-4">
            <div class="container-fluid text-center text-md-left">
                <div class="row">
                    <div class="col-md-6 mt-md-0 mt-3">
                        <h5 class="text-uppercase">MonkeyDNews</h5>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div>
                    <div class="clearfix w-100 d-md-none pb-3"></div>
                    <div class="col-md-3 mb-md-0 mb-3">
                        <h5 class="text-uppercase">Resource</h5>
                        <ul class="list-unstyled">
                            <li>
                                <router-link to="/" href="#!">Posts</router-link>
                            </li>
                            <li>
                                <router-link to="/questions" href="#!">Questions</router-link>
                            </li>
                            <li>
                                <router-link to="/authors" href="#!">Authors</router-link>
                            </li>
                        </ul>
                    </div>
                    <div class="col-md-3 mb-md-0 mb-3">
                        <h5 class="text-uppercase">Links</h5>
                        <ul class="list-unstyled">
                            <li>
                                <a href="https://facebook.com">Facebook</a>
                            </li>
                            <li> 
                                <a href="https://github.com">Github</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="footer-copyright text-center py-3">© 2019 Copyright:
                <a href="https://mdbootstrap.com/education/bootstrap/"> votuanbk232@gmail.com</a>
            </div>
        </footer>
    </div>
</template>

<script>
    import Gate from "./../../Gate";

	export default {
		data() {
			return {
				userPermission : new Gate({

                }),
			}
		},

		methods: {
           getUserCurrent() {
                axios.get('user/userPermission')
                .then(response => (
                    this.userPermission = response.data,
                    this.userPermission = new Gate(this.userPermission)
                    ))
            }
        },
	}
</script>
