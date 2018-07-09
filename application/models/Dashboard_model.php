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
            FROM workspace w, workspace_user wu
            WHERE wu.user_id = '" . $user_id . "' AND w.workspace_id = wu.workspace_id AND w.status = 1 AND wu.status = 1
        ");
        return $query->result();
    }
}
