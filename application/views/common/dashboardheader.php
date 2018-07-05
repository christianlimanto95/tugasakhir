<html>
<head>
	<title><?php echo $title; ?></title>
	
	<link rel="stylesheet" href="<?php echo base_url("assets/css/common/dashboarddefault.css"); ?>" />
	<link rel="stylesheet" href="<?php echo base_url("assets/css/" . $page_name . ".css"); ?>" />
</head>
<body>
<div class="loader">
    <svg class="loader-circular">
        <circle class="loader-circular-path" cx="50" cy="50" r="30" fill="none" stroke-width="6" stroke-miterlimit="10"/>
    </svg>
</div>
<div class="header-top">
    <div class="header-profile">
        <div class="header-profile-image" style="background-image: url(<?php echo base_url("assets/icons/profile.png"); ?>);"></div>
        <div class="profile-menu-container">
            <a href="#" class="profile-menu">Settings</a>
            <a href="#" class="profile-menu">Logout</a>
        </div>
    </div>
</div>
<div class="header-left">
    <div class="header-left-upper"></div>
    <div class="header-left-body">
        <a href="#" class="header-menu">Workspace</a>
        <a href="#" class="header-menu">Menu 1</a>
        <a href="#" class="header-menu">Menu 2</a>
    </div>
</div>
<div class="container">