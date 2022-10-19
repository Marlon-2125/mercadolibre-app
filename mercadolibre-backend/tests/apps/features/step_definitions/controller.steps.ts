import { AfterAll, BeforeAll, Given, Then } from 'cucumber';
import request from 'supertest';
import { ProductsApp } from '../../../../src/apps/ProductsApp';

let _request: request.Test;
let application: ProductsApp;

Given('I send a GET request to {string}', (route: string) => {
  _request = request(application.httpServer).get(route);
});

Then('the response status code should be {int}', async (status: number) => {
  const response = await _request.expect(status);
  console.log(response);
});

BeforeAll(async () => {
  application = new ProductsApp();
  await application.start();
});

AfterAll(async () => {
  await application.stop();
});
