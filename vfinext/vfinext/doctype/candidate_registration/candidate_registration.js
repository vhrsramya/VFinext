// Copyright (c) 2018, VHRS and contributors
// For license information, please see license.txt

frappe.ui.form.on('Candidate Registration', {
	fresher: function(frm) {
		frappe.set_route("Form","Candidate Details","New Candidate Details",{"type": "Fresher"});
	},
	professional: function(frm){
		frappe.set_route("Form","Candidate Details","New Candidate Details",{"type": "Professional"});
	}
});
