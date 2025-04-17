// @ts-check
import { test, expect } from '@playwright/test';

test('login com sucesso @login', async ({ page }) => {
  await page.goto('https://automationpratice.com.br');
  await page.getByRole('link', { name: ' Login' }).click();
  await page.locator('#user').click();
  await page.locator('#user').fill('ingrid.vanzeli.t@gmail.com');
  await page.locator('#password').click();
  await page.locator('#password').fill('123456');
  await page.screenshot({path:'screenshot/login_sucesso.png'});
  await page.getByRole('button', { name: 'login' }).click();
  await expect(page.getByRole('heading', { name: 'Login realizado' })).toBeVisible();
});

test('login com email vazio @login', async ({ page }) => {
  await page.goto('https://automationpratice.com.br/');
  await page.getByRole('link', { name: ' Login' }).click();
  await page.locator('#user').click();
  await page.locator('#user').fill('ingrid.vanzeli.t@gmail.com');
  await page.locator('#password').click();
  await page.locator('#password').fill('12345');
  await page.screenshot({path:'screenshot/login_sehna_incorreta.png'});
  await page.getByRole('button', { name: 'login' }).click();
  await expect(page.getByText('E-mail inválido.')).toBeVisible({timeout:100000});
});

test('login com senha incorreta @login', async ({ page }) => {
  await page.goto('https://automationpratice.com.br/');
  await page.getByRole('link', { name: ' Login' }).click();
  await page.locator('#user').click();
  await page.locator('#user').fill('ingrid.vanzeli.t@gmail.com');
  await page.locator('#password').click();
  await page.locator('#password').fill('12345');
  await page.screenshot({path:'screenshot/login_sehna_incorreta.png'});
  await page.getByRole('button', { name: 'login' }).click();
  await expect(page.getByText('Senha inválida.')).toBeVisible({timeout:10000});
});





