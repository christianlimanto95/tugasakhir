<html>
<head>
	<title><?php echo $title; ?></title>
	
	<link rel="stylesheet" href="<?php echo base_url("assets/css/common/default.css"); ?>" />
	<link rel="stylesheet" href="<?php echo base_url("assets/css/login.css"); ?>" />
</head>
<body>
<div class="loader">
    <svg class="loader-circular">
        <circle class="loader-circular-path" cx="50" cy="50" r="30" fill="none" stroke-width="6" stroke-miterlimit="10"/>
    </svg>
</div>
<div class="section">
    <div class="register-left">
        <div class="register-form-container">
            <div class="register-title">Login</div>
            <div class="form-item">
                <div class="form-label">Email <span class="error error-email"></span></div>
                <input type="text" class="form-input input-email" maxlength="50" />
            </div>
            <div class="form-item">
                <div class="form-label">Password <span class="error error-password"></span></div>
                <input type="password" class="form-input input-password" maxlength="50" />
            </div>
            <div class="btn btn-login">Login</div>
        </div>
    </div>
    <div class="register-right"></div>
</div>
<script src="<?php echo base_url("assets/js/common/jquery-3.2.1.min.js"); ?>" defer></script>
<script src="<?php echo base_url("assets/js/common/default.js"); ?>" defer></script>
<script src="<?php echo base_url("assets/js/register.js"); ?>" defer></script>
</body>
</html>