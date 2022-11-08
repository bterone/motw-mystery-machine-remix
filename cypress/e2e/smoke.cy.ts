import { faker } from "@faker-js/faker";

describe("smoke tests", () => {
  afterEach(() => {
    cy.cleanupUser();
  });

  it("should allow you to register and login", () => {
    const loginForm = {
      email: `${faker.internet.userName()}@example.com`,
      password: faker.internet.password(),
    };

    cy.then(() => ({ email: loginForm.email })).as("user");

    cy.visitAndCheck("/");

    cy.findByRole("link", { name: /sign up/i }).click();

    cy.findByRole("textbox", { name: /email/i }).type(loginForm.email);
    cy.findByLabelText(/password/i).type(loginForm.password);
    cy.findByRole("button", { name: /create account/i }).click();

    cy.findByRole("link", { name: /dashboard/i }).click();
    cy.findByRole("button", { name: /logout/i }).click();
    cy.findByRole("link", { name: /log in/i });
  });

  it("should allow you to make a mystery", () => {
    const testMystery = {
      concept: faker.lorem.sentences(1),
      hook: faker.lorem.sentences(1),
      countdown: {
        day: faker.lorem.sentences(1),
        shadows: faker.lorem.sentences(1),
        sunset: faker.lorem.sentences(1),
        dusk: faker.lorem.sentences(1),
        nightfall: faker.lorem.sentences(1),
        midnight: faker.lorem.sentences(1),
      },
      tenSecrets: faker.helpers.uniqueArray(faker.lorem.sentences, 10),
    }

    cy.login();

    cy.visitAndCheck("/");

    cy.findByRole("link", { name: /dashboard/i }).click();
    cy.findByText("Create a mystery to get started");

    cy.findByRole("link", { name: /mysteries/i }).click();
    cy.findByRole("link", { name: /\+ new mystery/i }).click();

    cy.findByRole("textbox", { name: /concept/i }).type(testMystery.concept);
    cy.findByRole("textbox", { name: /hook/i }).type(testMystery.hook);
    cy.findByRole("textbox", { name: /day/i }).type(testMystery.countdown.day);
    cy.findByRole("textbox", { name: /shadows/i }).type(testMystery.countdown.shadows);
    cy.findByRole("textbox", { name: /dusk/i }).type(testMystery.countdown.dusk);
    cy.findByRole("textbox", { name: /nightfall/i }).type(testMystery.countdown.nightfall);
    cy.findByRole("textbox", { name: /midnight/i }).type(testMystery.countdown.midnight);
    cy.findByRole("button", { name: /save/i }).click();

    cy.findByRole("button", { name: /delete/i }).click();

    cy.findByText("Create a mystery to get started");
  });
});
