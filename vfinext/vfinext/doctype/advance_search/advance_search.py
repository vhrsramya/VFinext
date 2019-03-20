# -*- coding: utf-8 -*-
# Copyright (c) 2019, VHRS and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
import frappe
from frappe.model.document import Document

class AdvanceSearch(Document):
     pass


@frappe.whitelist()
def get_candidate_list(allkeywords,currentlocation,experience,prefferedlocation,annualincome,
notinexcluding,functionarea,expectedsalary,industry,noticeperiod,ug,pg,ugspecialization,pgspecialization,institutename
,yearofpassedout):
     

     condition=""
     if allkeywords: 
          condition += " functionaldesignationskills_area='%s'" % allkeywords
     if currentlocation: 
          condition += "and current_location='%s'" % currentlocation
     if experience: 
          condition += "and experiance='%s'" % experience
     if prefferedlocation: 
          condition += "and preffered_location='%s'" % prefferedlocation
     if annualincome: 
          condition += "and annual_income='%s'" % annualincome
     if notinexcluding: 
          condition += "and not notin_excluding='%s'" % notinexcluding
     if functionarea: 
          condition += "and functionaldesignationskills_area='%s'" % functionarea
     if expectedsalary: 
          condition += "and expected_salary='%s'" % expectedsalary
     if industry: 
          condition += "and industry='%s'" % industry
     if noticeperiod: 
          condition += "and notice_period_1='%s'" % noticeperiod
     if ug: 
          condition += "and course='%s'" % ug
     if pg: 
          condition += "and pg='%s'" % pg
     if ugspecialization: 
          condition += "and specialization='%s'" % ugspecialization
     if pgspecialization: 
          condition += "and pg_specialization='%s'" % pgspecialization
     if institutename: 
          condition += "and institute_name='%s'" % institutename
     if yearofpassedout: 
          condition += "and passing_out_year='%s'" % yearofpassedout
     frappe.errprint(condition)
     candidate_list= frappe.db.sql("""select first_name,mobile,email_id,current_location from `tabCandidate Detail` where %s"""%condition,as_dict=1)

     return(candidate_list)
     
    
