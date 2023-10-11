/* eslint-disable no-undef */
describe("Cypress demo", () => {
  it("passes", () => {
    cy.visit("http://localhost:3000/");

    cy.get('[data-testid="main-title"]')
      .should("exist")
      .should("have.text", "My Tasks");
  });
});
