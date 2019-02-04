# -*- coding: utf-8 -*-
# Copyright (c) 2018, VHRS and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
import frappe
from frappe.model.document import Document

class PassportDetails(Document):
    pass

@frappe.whitelist()
def save_passport_details(candidate_id,number,issued_date,expiry_date):
    if candidate_id:
        passport_id = frappe.db.get_value("Passport Details", {"candidate_id": candidate_id})
        if passport_id:
            exist_passport_id = frappe.get_doc("Passport Details", passport_id)
        else:
            exist_passport_id = frappe.new_doc("Passport Details")
        exist_passport_id.update({
            "candidate_id": candidate_id,
            "passport_number": number,
            "issued_date": issued_date,
            "expiry_date": expiry_date
        })
        exist_passport_id.save(ignore_permissions=True)
    return "Ok"