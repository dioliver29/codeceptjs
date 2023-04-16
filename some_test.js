Feature('login');

Scenario('test incorrect login', async ({ I, loginPage }) => {
	loginPage.urlPath('/login');
	loginPage.sendForm('diana', 'diana');
	I.see('Invalid username or password!', '#name');
	
});

Scenario('test success logout', async ({ I, loginPage }) => {
	loginPage.urlPath('/login');
	loginPage.sendForm('Diana1', 'Dianadiana1!');
	I.click('Log out', loginPage.buttons.logoutButton);
});

Scenario('test empty login', async ({ I, loginPage }) => {
	loginPage.urlPath('/login');
	loginPage.sendForm('', 'diana');
	I.moveCursorTo(loginPage.fields.login);
	I.seeCssPropertiesOnElements(loginPage.fields.login, { 'border-color': "#dc3545" });
});

Scenario('test empty password', async ({ I, loginPage }) => {
	loginPage.urlPath('/login');
	loginPage.sendForm('diana', '');
	I.moveCursorTo(loginPage.fields.login);
	I.seeCssPropertiesOnElements(loginPage.fields.password, { 'border-color': "#dc3545" });
});

Scenario('test success login', async ({ I, loginPage }) => {
	loginPage.urlPath('/login');
	loginPage.sendForm('Diana1', 'Dianadiana1!');
	I.see('Diana1', '#userName-value');
});

