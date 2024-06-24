import frappe
from frappe import _
import json

@frappe.whitelist()
def get_server_type():
    with open(frappe.get_site_path('site_config.json')) as f:
        config = json.load(f)

    server_type = config.get("server_type", "Stage")
    badge_color = "orange"
    return {"server_type": server_type, "badge_color": badge_color}
