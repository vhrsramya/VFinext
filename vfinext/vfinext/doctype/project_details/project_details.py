# -*- coding: utf-8 -*-
# Copyright (c) 2018, VHRS and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
import frappe
from frappe.model.document import Document

class ProjectDetails(Document):
	pass



@frappe.whitelist()
def save_project_details(candidate_id,project_title,tag_this_project_with_your_employment,client,in_progress,finished,started_working_from,worked_till,worked_till1,details_of_project,add_more_derails,project_location,offsite,onsite,full_time,part_time,contractual,team_size,role,skills_used):
    if candidate_id:
        project_id = frappe.db.get_value("Project Details", {"candidate_id": candidate_id})
        if project_id:
            exist_project_id = frappe.get_doc("Project Details", project_id)
        else:
            exist_project_id = frappe.new_doc("Project Details")
        exist_project_id.update({
            "candidate_id": candidate_id,
			"project_title": project_title,
			"tag_this_project_with_your_employment": tag_this_project_with_your_employment,
			"client": client,
			"in_progress": in_progress,
			"finished": finished,
			"started_working_from": started_working_from,
			"worked_till": worked_till,
			"worked_till1": worked_till1,
			"details_of_project": details_of_project,
			"add_more_derails": add_more_derails,
			"project_location": project_location,
			"offsite": offsite,
			"onsite": onsite,
			"full_time": full_time,
			"part_time": part_time,
			"contractual": contractual,
			"team_size": team_size,
			"role": role,
			"skills_used": skills_used
        })
        exist_project_id.save(ignore_permissions=True)
    return "Ok"