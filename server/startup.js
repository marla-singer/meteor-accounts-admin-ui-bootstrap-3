Meteor.startup(function() {
	// Create Admin role if it doesn't exist
	Meteor.call('createRoleIfNotExisting', 'admin');
});
