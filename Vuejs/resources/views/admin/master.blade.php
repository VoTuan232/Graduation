

<!DOCTYPE html>
<!--
    This is a starter template page. Use this page to start your new project from
    scratch. This page gets rid of all links and provides the needed markup only.
    -->
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta http-equiv="x-ua-compatible" content="ie=edge">
        <!-- CSRF Token -->
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <title>MondkeyDNews | Admin</title>
        <!-- Font Awesome Icons -->
        <link rel="stylesheet" href="{{ asset('/css/app.css/') }}">
        <link rel="stylesheet" href="{{ asset('/css/admin.css/') }}">

        <style>
           .myselft {
            height: 70px !important;
            width: 70px !important;
           }
        </style>
    </head>
    <body class="hold-transition sidebar-mini">
        <div class="wrapper" id="admin">
            <app></app>
        </div>
        <!-- ./wrapper -->

        <!--Gate-->
        <script>
            window.user = @json(auth()->user())
        </script>
        <!-- REQUIRED SCRIPTS -->
        <script src="{{ asset('/js/app.js') }}"></script>
        <script src="{{ asset('/js/admin.js') }}"></script>
    </body>
</html>

