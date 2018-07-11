<div class="section">
    <div class="section-title">List</div>
    <div class="workspace-container">
    <?php
    $iLength = sizeof($workspace);
    for ($i = 0; $i < $iLength; $i++) {
        echo "<div class='workspace-item' data-id='" . $workspace[$i]->workspace_id . "'><div class='workspace-name'>" . $workspace[$i]->workspace_name . "</div>";
        echo "<div class='last-updated'></div>";
        echo "<div class='workspace-menu-container'>";
        echo "<a class='btn workspace-menu' href='" . base_url("workspace/" . $workspace[$i]->workspace_id) . "'>Edit</a>";
        echo "<a class='btn workspace-menu workspace-preview'>Preview</a>";
        echo "<a class='btn workspace-menu workspace-history'>View History</a>";
        echo "</div>";
        echo "</div>";
    }
    ?>
    </div>
</div>
<script>
var last_updated_url = "<?php echo base_url("dashboard/get_workspace_last_updated"); ?>";
</script>