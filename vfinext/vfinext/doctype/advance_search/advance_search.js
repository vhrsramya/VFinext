// Copyright (c) 2019, VHRS and contributors
// For license information, please see license.txt

frappe.ui.form.on('Advance Search',{
	refresh: function(frm) {
		frm.disable_save();
		},
		serach:function(frm) {
			frappe.call({
				"method": "vfinext.vfinext.doctype.advance_search.advance_search.get_candidate_list",
				args: {
						"allkeywords" : frm.doc.data_1|| null,
						"currentlocation":frm.doc.current_location || null,
						"experience" : frm.doc.experience || null,
						"prefferedlocation" : frm.doc.preffered_location || null,
						"annualincome" : frm.doc.annual_income|| null,
						"notinexcluding" : frm.doc.notin_excluding || null,
						"functionarea" : frm.doc.function_area || null,
						"expectedsalary" : frm.doc.expected_salary|| null,
						"industry" : frm.doc.industry|| null,																																																																																																																																																																																																																																																																																																																																																																																																																																															
						"noticeperiod" : frm.doc.notice_period || null,
						"ug" : frm.doc.ug || null,
						"pg" : frm.doc.pg_list || null,
						"ugspecialization" : frm.doc.ug_specialization || null,
						"pgspecialization" : frm.doc.pg_specialization || null,
						"institutename" : frm.doc.institute_name || null,
						"yearofpassedout" : frm.doc.year_of_passed_out	|| null
							},
							freeze: true,
                			freeze_message: "Please Wait....",
							callback: function (r){
								if(r.message){
								console.log(r.message)
								$.each(r.message, function (i, d) {
								var row = frappe.model.add_child(frm.doc, "Search Details", "search_details");
								row.candidate_name =d.first_name;
								row.mobile_number = d.mobile;
								row.email_id = d.email_id;
								row.current_location = d.current_location;
								
									if(d.mobile_number){
										frappe.call({
											"method": "frappe.client.get",
											args:{
												"doctype":"Candidate Detail",
												"name":"mobile",
											},
											freeze: true,
                				freeze_message: "Please Wait....",
											callback: function(r) {
												if(r.message){
													
													if (r.message.mobile_number) {
														row.mobile_number = r.message.mobile;
													}
													row.email_id = r.message.email_id;
												}
											}
										})
									}
									})
									refresh_field("search_details");	
								}
												
						}
							
				})
										
		},
'onload_post_render': function (frm, cdt, cdn) {
	var gird = frm.doc.search_details;
	frm.fields_dict.search_details.grid.wrapper.on('focus', 'input[data-fieldname="mobile_number"][data-doctype="Search Details"]', 
		function (e) {
		var current_doc = $('.data-row.editable-row').parent().attr("data-name");
		var d = locals["Search Details"][current_doc];
			if (d.candidate_name) {
				console.log("hi")
				frappe.set_route("Form", "Candidate Detail",d.candidate_name);
					}
				})
			},
 });
