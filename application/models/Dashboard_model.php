<?php

class Dashboard_model extends CI_Model
{
    public function __construct()
    {
        parent::__construct();
    }

    public function get_workspace($user_id) {
        $query = $this->db->query("
            SELECT w.workspace_id, w.workspace_name
            FROM workspace_user wu, workspace w
            WHERE wu.user_id = '" . $user_id . "' AND w.workspace_id = wu.workspace_id AND w.status = 1 AND wu.status = 1
        ");
        return $query->result();
    }

    public function get_workspace_last_updated($workspace_id) {
        $query = $this->db->query("
            SELECT wp.modified_date, u.user_name
            FROM workspace_progress wp, user u
            WHERE wp.workspace_id = '" . $workspace_id . "' AND wp.user_id = u.user_id
            ORDER BY wp.modified_date DESC
            LIMIT 1
        ");
        return $query->result();
    }

    public function get_workspace_progress($data) {
        $query = $this->db->query("
            SELECT wp.workspace_progress_id, wp.workspace_progress_history, u.user_name
            FROM workspace_progress wp, user u
            WHERE wp.workspace_id = '" . $data["workspace_id"] . "' AND wp.user_id = u.user_id
            ORDER BY wp.created_date ASC
        ");
        return $query->result();
    }
}
