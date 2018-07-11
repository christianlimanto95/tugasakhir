<?php
defined('BASEPATH') OR exit('No direct script access allowed');

//include general controller supaya bisa extends General_controller
require_once("application/core/General_controller.php");

class Dashboard extends General_controller {
	public function __construct() {
        parent::__construct();
        parent::redirect_if_not_logged_in();
		$this->load->model("Dashboard_model");
	}
	
	public function index()
	{
        $user_id = parent::is_logged_in();
        $workspace = $this->Dashboard_model->get_workspace($user_id);
		$data = array(
            "title" => "Dashboard",
            "workspace" => $workspace
		);
		
		parent::dashboardview("dashboard", $data);
    }

    public function get_workspace_last_updated() {
        parent::show_404_if_not_ajax();
        $workspace_id = $this->input->post("workspace_id", true);
        $result = $this->Dashboard_model->get_workspace_last_updated($workspace_id);
        $last_updated = "";
        $last_updated_name = "";
        if (sizeof($last_updated) > 0) {
            $last_updated = $result[0]->modified_date;
            $last_updated_name = $result[0]->user_name;
        }
        echo json_encode(array(
            "status" => "success",
            "last_updated" => $last_updated,
            "last_updated_name" => $last_updated_name
        ));
    }
    
    public function logout() {
        $this->session->unset_userdata("user_id");
		redirect(base_url("login"));
    }
}
