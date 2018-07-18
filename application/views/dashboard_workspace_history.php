<div class="section">
    <a href="<?php echo base_url("dashboard"); ?>" class="btn btn-back-to-workspace">< Back to Workspace</a>
    <div class="history-container">
    <?php
    $iLength = sizeof($data);
    $current_date = "";
    for ($i = 0; $i < $iLength; $i++) {
        $datetime = explode(" ", $data[$i]->created_date);
        $date = $datetime[0];
        $time = $datetime[1];
        echo "<div class='history-date'>";
        echo "<div class='history-date-header'>";
        echo "<div class='history-date-text'>" . $date . " " . $time . "</div>";
        echo "<div class='by'>by " . $data[$i]->user_name . "</div>";
        echo "</div>";
        echo "<div class='history-item-container'>";
        $item_array = json_decode($data[$i]->workspace_progress_history);
        $jLength = sizeof($item_array);
        for ($j = 0; $j < $jLength; $j++) {
            $item = $item_array[$j];
            $action = "";
            switch ($item_array[$j]->type) {
                case "add_component":
                    $names = "";
                    $kLength = sizeof($item->components);
                    for ($k = 0; $k < $kLength; $k++) {
                        if ($names != "") {
                            $names .= ", ";
                        }
                        $name = $item->components[$k]->name;
                        $names .= $name;
                    }
                    echo "<div class='history-item'>" . $names . " added</div>";
                    break;
            }
        }
        echo "</div>";
        echo "<div class='button-container'>";
        echo "<div class='btn btn-jump'>JUMP TO THIS</div>";
        echo "<div class='btn btn-preview'>PREVIEW</div>";
        echo "</div>";
        echo "</div>";
    }
    ?>
    </div>
</div>