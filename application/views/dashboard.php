<div class="section">
    <div class="section-title">Workspace</div>
    <div class="workspace-container">
    <?php
    $iLength = sizeof($workspace);
    for ($i = 0; $i < $iLength; $i++) {
        echo "<a href='" . base_url("workspace/" . $workspace[$i]->workspace_id) . "'>" . $workspace[$i]->workspace_name;
        echo "</a>";
    }
    ?>
    </div>
</div>