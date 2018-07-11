$(function() {
    get_workspace_last_updated();
});

function get_workspace_last_updated() {
    $(".workspace-item").each(function() {
        var workspace_id = $(this).attr("data-id");
        (function(workspace_id) {
            ajaxCall(last_updated_url, {workspace_id: workspace_id}, function(json) {
                var result = jQuery.parseJSON(json);
                var last_updated = result.last_updated;
                var last_updated_name = result.last_updated_name;

                $(".workspace-item[data-id='" + workspace_id + "'] .last-updated").html("Last updated on " + last_updated + " by " + last_updated_name);
            });
        }(workspace_id));
        
    });
    
}