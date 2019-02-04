// Copyright (c) 2018, VHRS and contributors
// For license information, please see license.txt

frappe.ui.form.on('Generate Token', {
	refresh: function(frm) {
		frm.disable_save();
	},
	generate: function(frm) {
		frappe.call ({
			"method":"vfinext.vfinext.api.hi",
			args: {
			},
			callback: function(r) {
				
			}
		});
	}
});
