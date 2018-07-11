<div class="section">
    <div class="section-title">Workspace</div>
    <div class="workspace-container">
    <?php
    $iLength = sizeof($workspace);
    for ($i = 0; $i < $iLength; $i++) {
        echo "<div class='workspace-item' data-id='" . $workspace[$i]->workspace_id . "'><a href='" . base_url("workspace/" . $workspace[$i]->workspace_id) . "'>" . $workspace[$i]->workspace_name . "</a>";
        echo "<div class='last-updated'></div>";
        echo "</div>";
    }
    ?>
    </div>
</div>
<script>
var last_updated_url = "<?php echo base_url("dashboard/get_workspace_last_updated"); ?>";
</script>