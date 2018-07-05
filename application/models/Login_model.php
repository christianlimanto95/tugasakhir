<?php

class Login_model extends CI_Model
{
    public function __construct()
    {
        parent::__construct();
    }

    public function get_data($user_email) {
        $this->db->where("user_email", $user_email);
        $this->db->select("user_id, user_password");
        $this->db->limit(1);
        return $this->db->get("user")->result();
    }
}
