<?php
defined('BASEPATH') OR exit('No direct script access allowed');

//include general controller supaya bisa extends General_controller
require_once("application/core/General_controller.php");

class Dashboard extends General_controller {
	public function __construct() {
		parent::__construct();
		$this->load->model("Dashboard_model");
	}
	
	public function index()
	{
		$data = array(
			"title" => "Dashboard"
		);
		
		parent::view("dashboard", $data);
	}
}
