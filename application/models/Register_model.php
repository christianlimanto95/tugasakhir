<?php

class Register_model extends CI_Model
{
    public function __construct()
    {
        parent::__construct();
    }

    public function do_register($data) {
        $this->db->trans_start();

        $insertData = array(
            "user_name" => $data["user_name"],
            "user_email" => $data["user_email"],
            "user_password" => $data["user_password"],
            "created_by" => 0,
            "modified_by" => 0
        );
        $this->db->insert("user", $insertData);
        $user_id = $this->db->insert_id();

        $insertData = array(
            "workspace_name" => "my_workspace",
            "created_by" => 0,
            "modified_by" => 0
        );
        $this->db->insert("workspace", $insertData);
        $workspace_id = $this->db->insert_id();

        $insertData = array(
            "workspace_id" => $workspace_id,
            "user_id" => $user_id,
            "created_by" => 0,
            "modified_by" => 0
        );
        $this->db->insert("workspace_user", $insertData);

        $this->db->trans_complete();

        return array(
            "user_id" => $user_id
        );
    }
}
