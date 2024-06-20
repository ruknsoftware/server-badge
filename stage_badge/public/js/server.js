frappe.call({
    method: "stage_badge.utils.get_server_type",
    callback: function(response) {
        const { server_type, badge_color } = response.message;
        if (server_type === "Stage") {
            const badge = document.createElement('div');
            badge.style.backgroundColor = badge_color;
            badge.style.color = 'white';
            badge.style.padding = '8px';
            badge.style.position = 'static';
            badge.style.width = '8%';  
            badge.style.textAlign = 'center';
            badge.style.zIndex = '1000';
            badge.innerText = `${server_type} Server`;
            document.body.prepend(badge);
        }
    }
});

