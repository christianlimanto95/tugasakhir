<?php
defined('BASEPATH') OR exit('No direct script access allowed');

//include general controller supaya bisa extends General_controller
require_once("application/core/General_controller.php");

class Register extends General_controller {
	public function __construct() {
		parent::__construct();
		$this->load->model("Register_model");
	}
	
	public function index()
	{
		$data = array(
			"title" => "Register"
		);
		
		$this->load->view("register", $data);
    }
    
    public function do_register() {
        parent::show_404_if_not_ajax();

        $user_name = $this->input->post("user_name", true);
        $user_email = $this->input->post("user_email", true);
        $user_password = $this->input->post("user_password", true);

        if ($user_name && $user_email && $user_password) {
            $user_password = password_hash($user_password, PASSWORD_DEFAULT);
            $data = array(
                "user_name" => $user_name,
                "user_email" => $user_email,
                "user_password" => $user_password
            );
            $result = $this->Register_model->do_register($data);
            $this->session->set_userdata("user_id", $result["user_id"]);

            echo json_encode(array(
                "status" => "success"
            ));
        } else {
            echo json_encode(array(
                "status" => "error"
            ));
        }
    }
}
