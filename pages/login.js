const { I } = inject();

module.exports = {

    // setting locators

	
    fields: {
		login: '#userName',
		password: '#password'
	},

	buttons: {
		loginButton: '#login',
		newUserButton: '#newUser',
		logoutButton: '#submit',
		goToStore: '#gotoStore'
	},

	urlPath(urlPath) {
		I.amOnPage(urlPath);
	},

	sendForm(login, password) {
		I.fillField(this.fields.login, login);
        I.fillField(this.fields.password, password);
		I.click(this.buttons.loginButton);
    },
}