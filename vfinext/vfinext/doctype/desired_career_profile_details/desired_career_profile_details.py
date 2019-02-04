# -*- coding: utf-8 -*-
# Copyright (c) 2018, VHRS and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
import frappe
from frappe.model.document import Document

class DesiredCareerProfileDetails(Document):
    pass



@frappe.whitelist()
def save_desired_career_profile(candidate_id,industry1,industry2,industry3,department,role,permanent,contract,full_time,part_time,day,night,flexible,availability_to_join,indian_rupees,lakhs,us_dollars,thousand,desired_location1,desired_location2,desired_location3):
    if candidate_id:
        career_profile_id = frappe.db.get_value("Desired Career Profile Details", {"candidate_id": candidate_id})
        if career_profile_id:
            exist_career_profile_id = frappe.get_doc("Desired Career Profile Details", career_profile_id)
        else:
            exist_career_profile_id = frappe.new_doc("Desired Career Profile Details")
        exist_career_profile_id.update({
            "candidate_id": candidate_id,
            "industry1": industry1,
            "industry2": industry2,
            "industry3": industry3,
        	"department": department,
            "role": role,
            "permanent": permanent,
        	"contract": contract,
            "full_time": full_time,
            "part_time": part_time,
        	"day": day,
            "night": night,
            "flexible": flexible,
        	"availability_to_join": availability_to_join,
            "indian_rupees": indian_rupees,
            "lakhs": lakhs,
        	"us_dollars": us_dollars,
            "thousand": thousand,
            "desired_location1": desired_location1,
        	"desired_location2": desired_location2,
            "desired_location3": desired_location3
        })
        exist_career_profile_id.save(ignore_permissions=True)
    return "Ok"