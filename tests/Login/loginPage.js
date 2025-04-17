const { expect } = require ('@playwright/test');

const abrirSiteLogin = async (page) =>{
    await page.goto('https://automationpratice.com.br/login');
}
const logarComSucesso = async (page) =>{
    await page.locator('#user').fill('ingrid.vanzeli.t@gmail.com');
    await page.locator('#password').fill('123456');
    await page.getByRole('button', { name: 'login' }).click();
    await page.screenshot({path:'screenshot/login_sucesso.png'});
}
const logarComEmailVazio = async (page) =>{
    await page.locator('#user').fill('');
    await page.locator('#password').fill('123456');
    await page.getByRole('button', { name: 'login' }).click();
    await page.screenshot({path:'screenshot/login_email_vazio.png'});
}
const logarComSenhaIncorreta = async (page) =>{
    await page.locator('#user').fill('ingrid.vanzeli.t@gmail.com');
    await page.locator('#password').fill('12345678');
    await page.getByRole('button', { name: 'login' }).click();
    await page.screenshot({path:'screenshot/login_seha_incorreta.png'});
}
const verifcarSeLogado = async (page) =>{
    await expect(page.getByRole('heading', { name: 'Login realizado' })).toBeVisible();
}
const verificarEmailInvalido = async (page) =>{
    await expect(page.getByText('E-mail inválido.')).toBeVisible({timeout:100000});
} 
const  verificarSenhaInvalida = async (page) =>{
    await expect(page.getByText('Senha inválida.')).toBeVisible({timeout:100000});
} 

module.exports = {
    abrirSiteLogin,
    logarComSucesso,
    verifcarSeLogado,
    logarComEmailVazio,
    logarComSenhaIncorreta,
    verificarEmailInvalido,
    verificarSenhaInvalida
}