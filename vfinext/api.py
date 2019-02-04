import frappe
import json
import shortuuid
from frappe import _
from frappe.utils.data import today
from frappe.utils import datetime, nowdate, add_days, flt
from frappe.utils.print_format import download_pdf





@frappe.whitelist()
def generate_token(token_type, no_of_tokens):
    frappe.errprint(token_type)
    tokens = int(no_of_tokens)
    for token in range(tokens):
        new_token = frappe.new_doc("Token Summary")
        new_token.token = shortuuid.ShortUUID().random(length=10)
        if token_type == 'Domestic':
            new_token.value = 'Domestic'
        else:
            new_token.value = 'International'
        new_token.save()


@frappe.whitelist()
def hi():
    frappe.errprint("hello")