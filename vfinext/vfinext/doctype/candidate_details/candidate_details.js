// Copyright (c) 2018, VHRS and contributors
// For license information, please see license.txt

frappe.ui.form.on('Candidate Details', {
    onload: function(frm) {
        frm.toggle_display("section_break_37");
        frm.toggle_display("section_break_46");
        frm.toggle_display("section_break_57");
		frm.toggle_display("section_break_67");
		frm.toggle_display("section_break_77");
        if(frm.doc.do_you_have_a_passport != 1){
            frm.toggle_display("passport_details");
            frm.toggle_display("passport_no");
            frm.toggle_display("issued_date");
            frm.toggle_display("expiry_date");
            frm.toggle_display("place_of_issue");
        }
        if(frm.doc.do_you_have_a_driving_license != 1){
            frm.toggle_display("driving_license_details");
            frm.toggle_display("license_number");
            frm.toggle_display("dob_license");
            frm.toggle_display("valid_till");
            frm.toggle_display("country_license_holder");
            frm.toggle_display("valid_or_invalid");
        }
        if(frm.doc.do_you_have_a_passport != 1 || frm.doc.do_you_have_a_driving_license != 1){
            frm.toggle_display("section_break_28");
        }
    },
    refresh: function(frm) {
        if(frm.doc.type != "Professional"){
            frm.toggle_display("employment_details")
        }
        if(education2 != "Select"){
            frm.toggle_display("section_break_32");
        }
        if(education3 != "Select"){
            frm.toggle_display("section_break_46");
        }
        if(education4 != "Select"){
            frm.toggle_display("section_break_50");
        }
        if(education5 != "Select"){
            frm.toggle_display("section_break_51");
        }
        if(frm.doc.do_you_have_a_passport == 1 || frm.doc.do_you_have_a_driving_license == 1){
            frm.toggle_display("section_break_28",frm.doc.do_you_have_a_passport == 1 || frm.doc.do_you_have_a_driving_license == 1);
        }
    },
    add_education1:function(frm){
        frm.toggle_display("section_break_37", "add_education1");
        frm.toggle_display("add_education1");
    },
    add_education2:function(frm){
        frm.toggle_display("section_break_46", "add_education2");
		frm.toggle_display("add_education2");
		frm.toggle_display("close_education1");
    },
    add_education3:function(frm){
        frm.toggle_display("section_break_57", "add_education3");
		frm.toggle_display("add_education3");
		frm.toggle_display("close_education2");
    },
    add_education4:function(frm){
        frm.toggle_display("section_break_67", "add_education4");
		frm.toggle_display("add_education4");
		frm.toggle_display("close_education3");
	},
	add_education5:function(frm){
        frm.toggle_display("section_break_77", "add_education4");
		frm.toggle_display("add_education5");
		frm.toggle_display("close_education4");
    },
    close_education1: function(frm){
        frm.toggle_display("section_break_37");
        frm.toggle_display( "add_education1", "close_education1");
	},
	close_education2: function(frm){
        frm.toggle_display("section_break_46");
        frm.toggle_display("add_education2", "close_education2");
		frm.toggle_display( "close_education2", "close_education2");
		frm.toggle_display( "close_education1", "close_education5");
    },
    close_education3: function(frm){
        frm.toggle_display("section_break_57");
        frm.toggle_display("add_education3", "close_education3");
		frm.toggle_display( "close_education3", "close_education3");
		frm.toggle_display( "close_education2", "close_education5");
    },
    close_education4: function(frm){
        frm.toggle_display("section_break_67");
        frm.toggle_display("add_education4", "close_education4");
		frm.toggle_display( "close_education4", "close_education4");
		frm.toggle_display( "close_education3", "close_education5");
    },
    close_education5: function(frm){
        frm.toggle_display("section_break_77");
        frm.toggle_display("add_education5", "close_education5");
		frm.toggle_display( "close_education5", "close_education5");
		frm.toggle_display( "close_education4", "close_education5");
	},
    do_you_have_a_passport: function(frm){
        if(frm.doc.do_you_have_a_passport == 1){
            frm.toggle_display("section_break_28",frm.doc.do_you_have_a_passport == 1);
            frm.toggle_display("passport_details",frm.doc.do_you_have_a_passport == 1);
            frm.toggle_display("passport_number",frm.doc.do_you_have_a_passport == 1);
            frm.toggle_display("issued_date",frm.doc.do_you_have_a_passport == 1);
            frm.toggle_display("expiry_date",frm.doc.do_you_have_a_passport == 1);
            frm.toggle_display("place_of_issue",frm.doc.do_you_have_a_passport == 1);
        }
        if(frm.doc.do_you_have_a_passport != 1){
            frm.toggle_display("passport_details");
            frm.toggle_display("passport_number");
            frm.toggle_display("issued_date");
            frm.toggle_display("expiry_date");
            frm.toggle_display("place_of_issue");
        }
        if(frm.doc.do_you_have_a_passport != 1 || frm.doc.do_you_have_a_driving_license != 1){
            frm.toggle_display("section_break_28");
        }
        if(frm.doc.do_you_have_a_passport == 1 || frm.doc.do_you_have_a_driving_license == 1){
            frm.toggle_display("section_break_28",frm.doc.do_you_have_a_passport == 1 || frm.doc.do_you_have_a_driving_license == 1);
        }
    },
    do_you_have_a_driving_license: function(frm){
        if(frm.doc.do_you_have_a_driving_license == 1){
            frm.toggle_display("section_break_28",frm.doc.do_you_have_a_driving_license == 1);
            frm.toggle_display("driving_license_details",frm.doc.do_you_have_a_driving_license == 1);
            frm.toggle_display("license_number",frm.doc.do_you_have_a_driving_license == 1);
            frm.toggle_display("dob_license",frm.doc.do_you_have_a_driving_license == 1);
            frm.toggle_display("valid_till",frm.doc.do_you_have_a_driving_license == 1);
            frm.toggle_display("country_license_holder",frm.doc.do_you_have_a_driving_license == 1);
            frm.toggle_display("valid_or_invalid",frm.doc.do_you_have_a_driving_license == 1);
        }
        if(frm.doc.do_you_have_a_driving_license != 1){
            frm.toggle_display("driving_license_details");
            frm.toggle_display("license_number");
            frm.toggle_display("dob_license");
            frm.toggle_display("valid_till");
            frm.toggle_display("country_license_holder");
            frm.toggle_display("valid_or_invalid");
        }
        if(frm.doc.do_you_have_a_passport != 1 || frm.doc.do_you_have_a_driving_license != 1){
            frm.toggle_display("section_break_28");
        }
        if(frm.doc.do_you_have_a_passport == 1 || frm.doc.do_you_have_a_driving_license == 1){
            frm.toggle_display("section_break_28",frm.doc.do_you_have_a_passport == 1 || frm.doc.do_you_have_a_driving_license == 1);
        }
    },
    add_project:function(frm){
            if(frm.doc.project_details != "Updated"){
                var dialog = new frappe.ui.Dialog({
                    title: __("Add Project"),
                    fields: [
                        {fieldtype: "Data", fieldname: "project_title", label: __("Project Title"), reqd: 1},
                        {fieldtype: "Data", fieldname: "tag_this_project_with_your_employment", label: __("Tag this project with your Employment/Education"), reqd: 1},
                        {fieldtype: "Data", fieldname: "client", label: __("Client"), reqd: 1},
                        {fieldtype: "Section Break", fieldname: "project_status", label: __("Project Status"), reqd: 1},
                        {fieldtype: "Check", fieldname: "in_progress", label: __("In Progress"), reqd: 0},
                        {fieldtype: "Column Break", fieldname: "cb1", label: __(""), reqd: 0},
                        {fieldtype: "Check", fieldname: "finished", label: __("Finished"), reqd: 0},
                        {fieldtype: "Section Break", fieldname: "sb1", label: __(""), reqd: 1},
                        {fieldtype: "Date", fieldname: "started_working_from", label: __("Started Working From"), reqd: 1},				
                        {fieldtype: "Column Break", fieldname: "cb2", label: __(""), reqd: 0},
                        {fieldtype: "Data", fieldname: "worked_till", label: __("Worked Till"), depends_on: 'eval:doc.in_progress', default: "Present", reqd: 0},
                        {fieldtype: "Date", fieldname: "worked_till1", label: __("Worked Till"), depends_on: 'eval:doc.finished',  reqd: 0},
                        {fieldtype: "Section Break", fieldname: "sb2", label: __(""), reqd: 1},
                        {fieldtype: "Small Text", fieldname: "details_of_project", label: __("Details of Project"), reqd: 0},
                        {fieldtype: "Check", fieldname: "add_more_derails", label: __("Add More Details"), reqd: 0},
                        {fieldtype: "Data", fieldname: "project_location", label: __("Project Location"), default: "Enter Your Location", depends_on: 'eval:doc.add_more_derails', reqd: 0},
                        {fieldtype: "Section Break", fieldname: "project_site", label: __("Project Site"), depends_on: 'eval:doc.add_more_derails', reqd: 1},
                        {fieldtype: "Check", fieldname: "offsite", label: __("Offsite"), reqd: 0},
                        {fieldtype: "Column Break", fieldname: "cb3", label: __(""), reqd: 0},
                        {fieldtype: "Check", fieldname: "onsite", label: __("Onsite"), reqd: 0},
                        {fieldtype: "Section Break", fieldname: "nature_of_employment", label: __("Nature of Employment"), depends_on: 'eval:doc.add_more_derails',reqd: 1},
                        {fieldtype: "Check", fieldname: "full_time", label: __("Full Time"), reqd: 0},
                        {fieldtype: "Column Break", fieldname: "cb4", label: __(""), reqd: 0},
                        {fieldtype: "Check", fieldname: "part_time", label: __("Part Time"), reqd: 0},
                        {fieldtype: "Column Break", fieldname: "cb5", label: __(""), reqd: 0},
                        {fieldtype: "Check", fieldname: "contractual", label: __("Contractual"), reqd: 0},
                        {fieldtype: "Section Break", fieldname: "sb3", label: __(""),  depends_on: 'eval:doc.add_more_derails',reqd: 1},
                        {fieldtype: "Select", fieldname: "team_size", label: __("Team Size"), reqd: 1,
                        options: ["Select","1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20"]},
                        {fieldtype: "Select", fieldname: "role", label: __("Role"), reqd: 1,
                        options: ["Select"]},
                        {fieldtype: "Data", fieldname: "skills_used", label: __("Skills Used"), reqd: 0},
                    ]
                });
                dialog.show();
                frm.set_value("project_details", "Updated");
                
            } else {
                frappe.call({
                    "method":"frappe.client.get",
                    args: {
                        doctype:"Project Details",
                        filters: {
                            "candidate_id": frm.doc.name
                        },
                    },
                    callback: function(r){
                        if(r.message){
                            var dialog = new frappe.ui.Dialog({
                                title: __("Add Project"),
                                fields: [
                                    {fieldtype: "Data", fieldname: "project_title", label: __("Project Title"), default: r.message.project_title, reqd: 1},
                                    {fieldtype: "Data", fieldname: "tag_this_project_with_your_employment", label: __("Tag this project with your Employment/Education"),default: r.message.tag_this_project_with_your_employment,  reqd: 1},
                                    {fieldtype: "Data", fieldname: "client", label: __("Client"),  default: r.message.client, reqd: 1},
                                    {fieldtype: "Section Break", fieldname: "project_status", label: __("Project Status"), reqd: 1},
                                    {fieldtype: "Check", fieldname: "in_progress", label: __("In Progress"), default: r.message.in_progress, reqd: 0},
                                    {fieldtype: "Column Break", fieldname: "cb1", label: __(""), reqd: 0},
                                    {fieldtype: "Check", fieldname: "finished", label: __("Finished"), default: r.message.finished, reqd: 0},
                                    {fieldtype: "Section Break", fieldname: "sb1", label: __(""), reqd: 1},
                                    {fieldtype: "Date", fieldname: "started_working_from", label: __("Started Working From"), default: r.message.started_working_from, reqd: 1},				
                                    {fieldtype: "Column Break", fieldname: "cb2", label: __(""), reqd: 0},
                                    {fieldtype: "Data", fieldname: "worked_till", label: __("Worked Till"), depends_on: 'eval:doc.in_progress', default: "Present", reqd: 0},
                                    {fieldtype: "Date", fieldname: "worked_till1", label: __("Worked Till"), depends_on: 'eval:doc.finished',  default: r.message.worked_till1,reqd: 0},
                                    {fieldtype: "Section Break", fieldname: "sb2", label: __(""), reqd: 1},
                                    {fieldtype: "Small Text", fieldname: "details_of_project", label: __("Details of Project"), default: r.message.details_of_project,reqd: 0},
                                    {fieldtype: "Check", fieldname: "add_more_derails", label: __("Add More Details"), default: r.message.add_more_derails, reqd: 0},
                                    {fieldtype: "Data", fieldname: "project_location", label: __("Project Location"), default: "Enter Your Location", depends_on: 'eval:doc.add_more_derails', reqd: 0},
                                    {fieldtype: "Section Break", fieldname: "project_site", label: __("Project Site"), depends_on: 'eval:doc.add_more_derails', reqd: 1},
                                    {fieldtype: "Check", fieldname: "offsite", label: __("Offsite"), default: r.message.offsite, reqd: 0},
                                    {fieldtype: "Column Break", fieldname: "cb3", label: __(""), reqd: 0},
                                    {fieldtype: "Check", fieldname: "onsite", label: __("Onsite"), default: r.message.onsite,reqd: 0},
                                    {fieldtype: "Section Break", fieldname: "nature_of_employment", label: __("Nature of Employment"), depends_on: 'eval:doc.add_more_derails', default: r.message.nature_of_employment,reqd: 1},
                                    {fieldtype: "Check", fieldname: "full_time", label: __("Full Time"), default: r.message.full_time,reqd: 0},
                                    {fieldtype: "Column Break", fieldname: "cb4", label: __(""), reqd: 0},
                                    {fieldtype: "Check", fieldname: "part_time", label: __("Part Time"), default: r.message.part_time,reqd: 0},
                                    {fieldtype: "Column Break", fieldname: "cb5", label: __(""), reqd: 0},
                                    {fieldtype: "Check", fieldname: "contractual", label: __("Contractual"), default: r.message.contactual,reqd: 0},
                                    {fieldtype: "Section Break", fieldname: "sb3", label: __(""),  depends_on: 'eval:doc.add_more_derails',reqd: 1},
                                    {fieldtype: "Select", fieldname: "team_size", label: __("Team Size"), default: r.message.team_size,reqd: 1,
                                    options: ["Select","1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20"]},
                                    {fieldtype: "Select", fieldname: "role", label: __("Role"), default: r.message.role,reqd: 1,
                                    options: ["Select"]},
                                    {fieldtype: "Data", fieldname: "skills_used", label: __("Skills Used"), default: r.message.skill_user,reqd: 0},
                                ]
                            });
                            dialog.show();
                            frm.set_value("project_details", "Updated");
                        } 
                    }
                })
            }
            dialog.set_primary_action(__("Save"), function() {
                var args = dialog.get_values();
                if(!args) return;
                else {
                    frappe.call({
                        "method":"vfinext.vfinext.doctype.project_details.project_details.save_project_details",
                        args: {
                            "candidate_id": frm.doc.name,
                            "project_title": args.project_title,
                            "tag_this_project_with_your_employment": args.tag_this_project_with_your_employment,
                            "client": args.client,
                            "in_progress": args.in_progress,
                            "finished": args.finished,
                            "started_working_from": args.started_working_from,
                            "worked_till": args.worked_till,
                            "worked_till1": args.worked_till1,
                            "details_of_project": args.details_of_project,
                            "add_more_derails": args.add_more_derails,
                            "project_location": args.project_location,
                            "offsite": args.offsite,
                            "onsite": args.onsite,
                            "full_time": args.full_time,
                            "part_time": args.part_time,
                            "contractual": args.contractual,
                            "team_size": args.team_size,
                            "role": args.role,
                            "skills_used": args.skills_used
                            
                        },
                        callback: function(r){
                            if(r.message){
                                console.log(r.message)
                                dialog.hide();
                            }
                        }
                    })
                }
            });
        },
        add_desired_career_profile:function(frm){
            if(frm.doc.desired_career_profile != "Updated"){
                var dialog = new frappe.ui.Dialog({
                    title: __("Add Desired Career Profile"),
                    fields: [
                        {fieldtype: "Section Break", fieldname: "desired_industries", label: __("Desired Industries"), reqd: 1},
                        {fieldtype: "Select", fieldname: "industry1", label: __("Industry1"), reqd: 1,
                            options: "Select"},
                        {fieldtype: "Column Break", fieldname: "cb6", label: __(""), reqd: 1},
                        {fieldtype: "Select", fieldname: "industry2", label: __("Industry2"), reqd: 1,
                            options: "Select"},
                        {fieldtype: "Column Break", fieldname: "cb7", label: __(""), reqd: 1},
                        {fieldtype: "Select", fieldname: "industry3", label: __("Industry3"), reqd: 1,
                            options: "Select"},
                        {fieldtype: "Section Break", fieldname: "sb31", label: __(""), reqd: 1},
                        {fieldtype: "Select", fieldname: "department", label: __("Functional Area / Department"), reqd: 1,
                            options: "Select"},
                        {fieldtype: "Select", fieldname: "role", label: __("Role"), reqd: 1,
                            options: "Select"},
                        {fieldtype: "Section Break", fieldname: "job_type", label: __("Job Type"), reqd: 1},
                        {fieldtype: "Check", fieldname: "permanent", label: __("Permanent"), reqd: 0},
                        {fieldtype: "Column Break", fieldname: "cb1", label: __(""), reqd: 1},
                        {fieldtype: "Check", fieldname: "contract", label: __("Contract"), reqd: 0},
                        {fieldtype: "Section Break", fieldname: "employment_type", label: __("Employment Type"), reqd: 0},
                        {fieldtype: "Check", fieldname: "full_time", label: __("Full Time"), reqd:0},
                        {fieldtype: "Column Break", fieldname: "cb2", label: __(""), reqd: 1},
                        {fieldtype: "Check", fieldname: "part_time", label: __("Part Time"), reqd:0},
                        {fieldtype: "Section Break", fieldname: "preferred_shift", label: __("Preferred Shift"), reqd: 1},
                        {fieldtype: "Check", fieldname: "day", label: __("Day"), reqd: 0},
                        {fieldtype: "Column Break", fieldname: "cb3", label: __(""), reqd: 0},
                        {fieldtype: "Check", fieldname: "night", label: __("Night"), reqd: 0},
                        {fieldtype: "Column Break", fieldname: "cb4", label: __(""), reqd: 1},
                        {fieldtype: "Check", fieldname: "flexible", label: __("Flexible"), reqd: 0},
                        {fieldtype: "Section Break", fieldname: "sb1", label: __(""), reqd: 0},
                        {fieldtype: "Select", fieldname: "availability_to_join", label: __("Availability to Join"), reqd: 1,
                            options: ["Join Immediately","15 Days","1 Month","3 Month","6 Month"]},
                        {fieldtype: "Section Break", fieldname: "sb2", label: __(""), reqd: 0},
                        {fieldtype: "Section Break", fieldname: "expected_salary", label: __("Expected Salary"), reqd: 1},
                        {fieldtype: "Check", fieldname: "indian_rupees", label: __("Indian Rupees"), reqd: 0},
                        {fieldtype: "Currency", fieldname: "lakhs", label: __("Lakhs"), reqd: 0},
                        {fieldtype: "Column Break", fieldname: "cb5", label: __(""), reqd: 0},
                        {fieldtype: "Check", fieldname: "us_dollars", label: __("US Dollars"), reqd: 0},
                        {fieldtype: "Currency", fieldname: "thousand", label: __("Thousand"), reqd: 0},
                        {fieldtype: "Section Break", fieldname: "desired_location", label: __("Desired Location"), reqd: 1},
                        {fieldtype: "Select", fieldname: "desired_location1", label: __("Desired Location1"), reqd: 1,
                            options: "Select"},
                        {fieldtype: "Column Break", fieldname: "cb8", label: __(""), reqd: 1},
                        {fieldtype: "Select", fieldname: "desired_location2", label: __("Desired Location2"), reqd: 1,
                            options: "Select"},
                        {fieldtype: "Column Break", fieldname: "cb9", label: __(""), reqd: 1},
                        {fieldtype: "Select", fieldname: "desired_location3", label: __("Desired Location3"), reqd: 1,
                            options: "Select"}
                    ]
                })
                dialog.show();
                frm.set_value("desired_career_profile", "Updated");
            } else {
                frappe.call({
                    "method":"frappe.client.get",
                    args: {
                        doctype:"Desired Career Profile Details",
                        filters: {
                            "candidate_id": frm.doc.name
                        },
                    },
                    callback: function(r){
                        if(r.message){
                            var dialog = new frappe.ui.Dialog({
                                title: __("Add Desired Career Profile"),
                                fields: [
                                    {fieldtype: "Section Break", fieldname: "desired_industries", label: __("Desired Industries"), reqd: 1},
                                    {fieldtype: "Select", fieldname: "industry1", label: __("Industry1"), default: r.message.industry1, reqd: 1,
                                        options: "Select"},
                                    {fieldtype: "Column Break", fieldname: "cb6", label: __(""), reqd: 1},
                                    {fieldtype: "Select", fieldname: "industry2", label: __("Industry2"), default: r.message.industry2, reqd: 1,
                                        options: "Select"},
                                    {fieldtype: "Column Break", fieldname: "cb7", label: __(""), reqd: 1},
                                    {fieldtype: "Select", fieldname: "industry3", label: __("Industry3"), default: r.message.industry3, reqd: 1,
                                        options: "Select"},
                                    {fieldtype: "Section Break", fieldname: "sb31", label: __(""), reqd: 1},
                                    {fieldtype: "Select", fieldname: "department", label: __("Functional Area / Department"), default: r.message.department,  reqd: 1,
                                        options: "Select"},
                                    {fieldtype: "Select", fieldname: "role", label: __("Role"), default: r.message.role,  reqd: 1,
                                        options: "Select"},
                                    {fieldtype: "Section Break", fieldname: "job_type", label: __("Job Type"),reqd: 1},
                                    {fieldtype: "Check", fieldname: "permanent", label: __("Permanent"), default: r.message.permanent,  reqd: 0},
                                    {fieldtype: "Column Break", fieldname: "cb1", label: __(""), reqd: 1},
                                    {fieldtype: "Check", fieldname: "contract", label: __("Contract"), default: r.message.contract,  reqd: 0},
                                    {fieldtype: "Section Break", fieldname: "employment_type", label: __("Employment Type"),reqd: 1},
                                    {fieldtype: "Check", fieldname: "full_time", label: __("Full Time"), default: r.message.full_time,  reqd:0},
                                    {fieldtype: "Column Break", fieldname: "cb2", label: __(""), reqd: 1},
                                    {fieldtype: "Check", fieldname: "part_time", label: __("Part Time"), default: r.message.part_time,  reqd:0},
                                    {fieldtype: "Section Break", fieldname: "preferred_shift", label: __("Preferred Shift"), reqd: 1},
                                    {fieldtype: "Check", fieldname: "day", label: __("Day"), default: r.message.day,  reqd: 0},
                                    {fieldtype: "Column Break", fieldname: "cb3", label: __(""),reqd: 1},
                                    {fieldtype: "Check", fieldname: "night", label: __("Night"), default: r.message.night,  reqd: 0},
                                    {fieldtype: "Column Break", fieldname: "cb4", label: __(""), reqd: 1},
                                    {fieldtype: "Check", fieldname: "flexible", label: __("Flexible"), default: r.message.flexible,  reqd: 0},
                                    {fieldtype: "Section Break", fieldname: "sb1", label: __(""), reqd: 0},
                                    {fieldtype: "Select", fieldname: "availability_to_join", label: __("Availability to Join"), default: r.message.availability_to_join,  reqd: 1,
                                        options: ["Join Immediately","15 Days","1 Month","3 Month","6 Month"]},
                                    {fieldtype: "Section Break", fieldname: "sb2", label: __(""), reqd: 0},
                                    {fieldtype: "Section Break", fieldname: "expected_salary", label: __("Expected Salary"), default: r.message.expected_salary,  reqd: 1},
                                    {fieldtype: "Check", fieldname: "indian_rupees", label: __("Indian Rupees"), default: r.message.indian_rupees,  reqd: 0},
                                    {fieldtype: "Currency", fieldname: "lakhs", label: __("Lakhs"), default: r.message.lakhs,  reqd: 0},
                                    {fieldtype: "Column Break", fieldname: "cb5", label: __(""), reqd: 0},
                                    {fieldtype: "Check", fieldname: "us_dollars", label: __("US Dollars"), default: r.message.us_dollars,  reqd: 0},
                                    {fieldtype: "Currency", fieldname: "thousand", label: __("Thousand"), default: r.message.thousand,  reqd: 0},
                                    {fieldtype: "Section Break", fieldname: "desired_location", label: __("Desired Location"), reqd: 1},
                                    {fieldtype: "Select", fieldname: "desired_location1", label: __("Desired Location1"), default: r.message.desired_location1, reqd: 1,
                                        options: "Select"},
                                    {fieldtype: "Column Break", fieldname: "cb8", label: __(""), reqd: 1},
                                    {fieldtype: "Select", fieldname: "desired_location2", label: __("Desired Location2"), default: r.message.desired_location2, reqd: 1,
                                        options: "Select"},
                                    {fieldtype: "Column Break", fieldname: "cb9", label: __(""), reqd: 1},
                                    {fieldtype: "Select", fieldname: "desired_location3", label: __("Desired Location3"), default: r.message.desired_location3, reqd: 1,
                                        options: "Select"}
                                ]
                            })
                            dialog.show();
                        } 
                    }
                })
            }
            dialog.set_primary_action(__("Save"), function() {
                var args = dialog.get_values();
                if(!args) return;
                else {
                    frappe.call({
                        "method":"vfinext.vfinext.doctype.desired_career_profile_details.desired_career_profile_details.save_desired_career_profile",
                        args: {
                            "candidate_id": frm.doc.name,
                            "industry1": args.industry1,
                            "industry2": args.industry2,
                            "industry3": args.industry3,
                            "department": args.department,
                            "role": args.role,
                            "permanent": args.permanent,
                            "contract": args.contract,
                            "full_time": args.full_time,
                            "part_time": args.part_time,
                            "day": args.day,
                            "night": args.night,
                            "flexible": args.flexible,
                            "availability_to_join": args.availability_to_join,
                            "indian_rupees": args.indian_rupees,
                            "lakhs": args.lakhs,
                            "us_dollars": args.us_dollars,
                            "thousand": args.thousand,
                            "desired_location1": args.desired_location1,
                            "desired_location2": args.desired_location2,
                            "desired_location3": args.desired_location3
                        },
                        callback: function(r){
                            if(r.message){
                                console.log(r.message)
                                dialog.hide();
                            }
                        }
                    })
                }
            });
            
        }

});
