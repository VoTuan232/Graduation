

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
        <style>
            .ads-client {
            height: 219px;
            width: 100%;
            }
            .avatar-client {
            height: 30px;
            width: 30px;
            border-radius: 50%;
            }
            /*.client {
            top: 10px !important;;
            left: -40px !important;
            }*/
            .client {
            left: -120px !important;
            }
            .write {
            padding-top : 35%;
            }
        </style>
    </head>
    <body>
        <div class="container" id="client">
            <app></app>
        </div>
        <!-- REQUIRED SCRIPTS -->
        <script>
            // window.user = @json(auth()->user());
            {{-- window.userLogged = {!! json_encode($userLogged); !!}; --}}
        </script>
        {{-- <script>
            /*user*/
            window.auth_user = {!! json_encode(Auth::user()); !!};
        </script> --}}
        <script src="{{ asset('/js/app.js') }}"></script>
        <script src="{{ asset('/js/client.js') }}"></script>
    </body>
</html>

