

<!doctype html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <meta name="description" content="">
        <meta name="author" content="">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <title>MonkeyDNews | Home Page</title>
        <link rel="stylesheet" href="{{ asset('/css/app.css/') }}">
        <link rel="stylesheet" href="{{ asset('/css/client.css/') }}">
    </head>
    <body>
        <div class="container" id="client">
            <header>
                <!-- Fixed navbar -->
                <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                    <router-link to="/" class="navbar-brand" href="#" id="linkHome">MonkeyDNews</router-link>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarCollapse">
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item">
                                <router-link to="/" class="nav-link" href="#">Posts</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link to="/question" class="nav-link" href="#">Question</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link to="/discuss" class="nav-link" href="#">Discuss</router-link>
                            </li>
                        </ul>
                        <form class="form-inline mt-2 mt-md-0">
                            <input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search">
                            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    </div>
                </nav>
            </header>
            <div class="container">
		      	<div>
                    @include('client.slider')       
                </div>
            	<router-view></router-view>
		    </div>

		    <footer class="blog-footer">
              <p>Blog template built for <a href="https://getbootstrap.com/">Bootstrap</a> by <a href="https://twitter.com/mdo">@mdo</a>.</p>
              <p>
                <a href="#">Back to top</a>
              </p>
            </footer>
        </div>
        
        <!-- REQUIRED SCRIPTS -->
        <script src="{{ asset('/js/app.js') }}"></script>
        <script src="{{ asset('/js/client.js') }}"></script>
        <script>
        	$(document).ready(function () {
			    $("#linkHome").click(function(){
			       // $(this).removeClass();
			    });
			});
        </script>
    </body>
</html>

