<?php

class Home_model extends CI_Model
{
    public function __construct()
    {
        parent::__construct();
    }

    public function save($data) {
        $insertData = array(
            "workspace_id" => $data["workspace_id"],
            "user_id" => $data["user_id"],
            "workspace_progress_history" => $data["workspace_progress_history"],
            "workspace_progress_current" => $data["workspace_progress_current"],
            "created_by" => $data["user_id"],
            "modified_by" => $data["user_id"]
        );
        $this->db->insert("workspace_progress", $insertData);
        return $this->db->affected_rows();
    }

    public function load_workspace($data) {
        $query = $this->db->query("
            SELECT workspace_progress_current
            FROM workspace_progress
            WHERE status = 1 AND workspace_id = '" . $data["workspace_id"] . "' AND user_id = '" . $data["user_id"] . "'
            ORDER BY created_date DESC
            LIMIT 1
        ");
        return $query->result();
    }
}
