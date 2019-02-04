# -*- coding: utf-8 -*-
# Copyright (c) 2018, VHRS and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
import frappe
from frappe.model.document import Document

class DrivingLicenseDetails(Document):
	pass



@frappe.whitelist()
def save_driving_license_details(candidate_id,number,dob,valid_till):
    if candidate_id:
        license_id = frappe.db.get_value("Driving License Details", {"candidate_id": candidate_id})
        if license_id:
            exist_license_id = frappe.get_doc("Driving License Details", license_id)
        else:
            exist_license_id = frappe.new_doc("Driving License Details")
        exist_license_id.update({
            "candidate_id": candidate_id,
            "license_number": number,
            "dob": dob,
            "valid_till": valid_till
        })
        exist_license_id.save(ignore_permissions=True)
    return "Ok"