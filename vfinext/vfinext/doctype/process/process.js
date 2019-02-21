// Copyright (c) 2019, VHRS and contributors
// For license information, please see license.txt

frappe.ui.form.on('Process', {
	refresh: function(frm) {

	},
	back:function(frm){
		frappe.set_route("Form","Candidate Details","New Candidate Details")
	}
	
});
