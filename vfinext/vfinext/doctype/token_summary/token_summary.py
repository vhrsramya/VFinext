# -*- coding: utf-8 -*-
# Copyright (c) 2018, VHRS and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
import frappe
from frappe.model.document import Document

class TokenSummary(Document):
	pass
@frappe.whitelist()
def tokenvalidation(tokens):
	# n=frappe.doc.TokenSummary
	if frappe.db.exists("Token Summary",tokens):
		a=frappe.get_doc("Token Summary",tokens)
		if a.value =="Valid":
			a.update({
				"value":"Invalid"
			})
			a.save(ignore_permissions=True)
			return "n"
		else:
			return "c"
	else:
		return "b"