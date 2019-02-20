# -*- coding: utf-8 -*-
# Copyright (c) 2019, VHRS and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
import frappe
import shortuuid
from frappe.model.document import Document
from frappe import _
class Tokengeneration(Document):
    pass

@frappe.whitelist()
def generate_token(token_type, no_of_tokens):
    tokens = int(no_of_tokens)
    # tokens=12
    for token in range(tokens):
        new_token = frappe.new_doc("Token Summary")
        new_token.token = shortuuid.ShortUUID().random(length=10)
        if token_type == 'Domestic':
            new_token.value = 'Valid'
            new_token.token_type = "Domestic"
            new_token.save()
        else:
            new_token.value = 'Valid'
            new_token.token_type = "International"
            new_token.save()
