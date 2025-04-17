const { test } = require ('@playwright/test');
const {abrirSiteLogin, logarComSucesso, verifcarSeLogado,logarComEmailVazio,verificarEmailInvalido, logarComSenhaIncorreta, verificarSenhaInvalida} = require('./loginPage')

test('login com sucesso @login', async ({ page }) => {
  await abrirSiteLogin(page);
  await logarComSucesso(page);
  await verifcarSeLogado(page);
});

test('login com email vazio @login', async ({ page }) => {
  await abrirSiteLogin(page);
  await logarComEmailVazio(page);
  await verificarEmailInvalido(page);
});

test('login com senha incorreta @login', async ({ page }) => {
  await abrirSiteLogin(page);
  await logarComSenhaIncorreta(page);
  await verificarSenhaInvalida;
});
