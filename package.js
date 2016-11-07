Package.describe({
	summary: "A roles based account management system using bootstrap 3",
    version: "0.2.8",
	name: "brylie:accounts-admin-ui",
    git: "https://github.com/brylie/meteor-accounts-admin-ui-bootstrap-3.git"
});

Package.on_use(function (api, where) {
  api.versionsFrom("1.0.1");
	api.use(["standard-app-packages",
        "alanning:roles@1.2.11"
        ], ["client", "server"]);

    api.use("brylie:first-user-admin@0.1.9", ["server"]);

    api.use(["accounts-ui@1.0.0",
        "accounts-password@1.3.0",
        "kurounin:pagination-blaze@1.0.2",
        "twbs:bootstrap@3.3.6"
    ]);

	api.add_files("libs/user_query.js", ["client", "server"]);

    api.add_files(["client/startup.js",
        "client/accounts_admin.html",
        "client/accounts_admin.js",
        "client/delete_account_modal.html",
        "client/delete_account_modal.js",
        "client/info_account_modal.html",
        "client/info_account_modal.js",
        "client/update_account_modal.html",
        "client/update_account_modal.js",
        "client/update_roles_modal.html",
        "client/update_roles_modal.js"
    ], "client");

	api.add_files("style/style.css", "client");

	api.add_files(["server/startup.js",
        "server/publish.js",
        "server/methods.js"
        ], "server");
});
