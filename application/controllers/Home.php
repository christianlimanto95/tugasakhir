<?php
defined('BASEPATH') OR exit('No direct script access allowed');

//include general controller supaya bisa extends General_controller
require_once("application/core/General_controller.php");

class Home extends General_controller {
	public function __construct() {
		parent::__construct();
		$this->load->model("Home_model");
	}
	
	public function index()
	{
        redirect(base_url("register"));
    }

    public function workspace() {
        $workspace_id = $this->uri->segment(2);
        $is_logged_in = parent::is_logged_in();
        $data = array(
            "workspace_id" => $workspace_id,
            "user_id" => $is_logged_in
        );
        $detail = $this->Home_model->load_workspace($data);
        if (sizeof($detail) > 0) {
            $detail = $detail[0]->workspace_progress_current;
        }
        parent::load_additional_js("script");
		$data = array(
            "title" => "Home",
            "is_logged_in" => $is_logged_in,
            "workspace_id" => $workspace_id,
            "detail" => $detail
		);
		
		parent::view("workspace", $data);
    }
    
    public function save() {
        parent::show_404_if_not_ajax();
        $workspace_id = $this->input->post("workspace_id", true);
        $user_id = parent::is_logged_in();
        $workspace_progress_history = $this->input->post("workspace_progress_history");
        $workspace_progress_current = $this->input->post("workspace_progress_current");

        $data = array(
            "workspace_id" => $workspace_id,
            "user_id" => $user_id,
            "workspace_progress_history" => $workspace_progress_history,
            "workspace_progress_current" => $workspace_progress_current
        );
        $affected_rows = $this->Home_model->save($data);
        if ($affected_rows > 0) {
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
