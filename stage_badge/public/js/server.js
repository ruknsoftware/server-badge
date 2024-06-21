frappe.call({
    method: "stage_badge.utils.get_server_type",
    callback: function(response) {
        const { server_type, badge_color } = response.message;
        
        if (server_type === "Stage") {
            const badge = document.createElement('div');
            badge.className = 'stage-server-badge';
            badge.innerText = `${server_type}`;
            
            document.body.prepend(badge);
        }
    }
})