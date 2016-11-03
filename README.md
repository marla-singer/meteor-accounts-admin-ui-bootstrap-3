# Accounts Admin UI (Bootstrap 3)

A roles based account management system using bootstrap 3 for Meteor.

**Table of Contents**

- [TODO](#todo)
- [History](#history)
- [Quick Start](#quick-start)
- [Iron Router Integration](#iron-router-integration)
- [Contributing](#contributing)

## TODO

- ~~Implement UI to create/remove roles (currently done at Meteor.startup)~~ DONE
- Configurable fields
- ~~Implement pagination~~ DONE
- Write tests
- User impersonation (for admins)

## History
**Latest Version:** 0.2.6
- Remove hard dependency to bootstrap-3 (so less-bootstrap-3 or similar can be used). (Thanks to [@johnm](https://github.com/johnm))
- Documentation updates
- Fixes [Issue #18](https://github.com/hharnisc/meteor-accounts-admin-ui-bootstrap-3/issues/18)

**Version:** 0.2.5

- Bump roles version; v1.2.8 is Blaze-compatible (thanks to [@alanning](https://github.com/alanning)!)

**Version:** 0.2.4

- Support [changes made in Meteor 0.8.0-rc0](https://github.com/meteor/meteor/issues/1930)
- Fixes [Issue #7](https://github.com/hharnisc/meteor-accounts-admin-ui-bootstrap-3/issues/7)
- Update to bootstrap-3.1.1

**Version:** 0.2.3

- Now supports changing usernames from admin interface (thanks to [@djkmiles](https://github.com/djkmiles)!)

**Version:** 0.2.2

- Fixed bugs due to fallout from removing bootstrap-modal

**Version:** 0.2.1

- Removed dependency to bootstrap-modal

**Version:** 0.2.0

- Added UI to create/remove roles

**Version:** 0.1.0

- Created a basic UI to find users, delete users, and modify roles.

## Quick Start

Set up a simple admin page

```sh
$ meteor create app-name
$ cd app-name
$ meteor add twbs:bootstrap  # or some Bootstrap 3 package
$ meteor add accounts-password
$ meteor add accounts-ui-bootstrap-3
$ meteor add brylie:accounts-admin-ui
$ meteor remove autopublish
$ meteor remove insecure
```

**app-name**
```html
<template name="home">
  <div class="navbar navbar-default" role="navigation">
    <div class="navbar-header">
      <div class="navbar-header">
        <a class="navbar-brand" href="/">Accounts Admin</a>
      </div>
    </div>
    <div class="navbar-collapse collapse">
      <ul class="nav navbar-nav">
      </ul>
      <ul class="nav navbar-nav navbar-right">
        {{> loginButtons }}
      </ul>
    </div>
  </div>
    <div class="container">
      {{#if isInRole 'admin'}}
        {{> accountsAdmin recordsPerPage=2 }}
      {{else}}
        Must be admin to see this...
      {{/if}}
  </div>
</template>
```
Use `recordsPerPage=10` in `accountsAdmin` template to set limit of records on page.
After you edit app-name.html you need to sign in with a new user. The first user will automatically be added as an admin.

## Iron Router Integration

This tool plays nice with Iron Router package, add to following configuration to your router.
Or take a look at this [working example](https://github.com/hharnisc/meteor-accounts-admin-ui-bootstrap-3-demo).

**router.js**
```javascript
Router.route('/', function () {
    this.render('Home', {
        data: function () { return Meteor.users.find(); }
    });
});
```

## Contributing

If you've got a change you think would benefit the community send me a pull request.

**Contributors**
- [@djkmiles](https://github.com/djkmiles)
- [@alanning](https://github.com/alanning)
- [@johnm](https://github.com/johnm)