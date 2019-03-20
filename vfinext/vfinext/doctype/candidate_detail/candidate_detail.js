// Copyright (c) 2019, VHRS and contributors
// For license information, please see license.txt

frappe.ui.form.on('Candidate Detail', {
	refresh: function(frm) {
		frm.toggle_display("all_keywords");
		frm.toggle_display("all_keywords_1");
		console.log(refresh)
	},
	add_new:function(frm){
        frm.toggle_display("all_keywords", "add_new");
		frm.toggle_display("add_new_1");
	},
	// add_new_1:function(frm){
    //     frm.toggle_display("all_keywords_1", "add_new_1");
	// 	frm.toggle_display("add_new_1");
	// }
});
