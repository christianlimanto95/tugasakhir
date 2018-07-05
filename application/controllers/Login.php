<?php
defined('BASEPATH') OR exit('No direct script access allowed');

//include general controller supaya bisa extends General_controller
require_once("application/core/General_controller.php");

class Login extends General_controller {
	public function __construct() {
		parent::__construct();
		$this->load->model("Login_model");
	}
	
	public function index()
	{
		$data = array(
			"title" => "Login"
		);
		
		$this->load->view("login", $data);
    }
    
    public function do_login() {
        parent::show_404_if_not_ajax();
        $user_email = $this->input->post("user_email", true);
        $user_password = $this->input->post("user_password", true);
        if ($user_email != "" && $user_password != "") {
            $data = $this->Login_model->get_data($user_email);
			if (sizeof($data) > 0) {
                if (password_verify($user_password, $data[0]->user_password)) {
					$this->session->set_userdata("user_id", $data[0]->user_id);

					echo json_encode(array(
						"status" => "success"
					));
				} else {
					echo json_encode(array(
						"status" => "error"
					));
				}
            } else {
                echo json_encode(array(
                    "status" => "error"
                ));
            }
        } else {
            echo json_encode(array(
                "status" => "error"
            ));
        }
    }
}
