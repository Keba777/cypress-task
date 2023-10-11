/* eslint-disable no-undef */
describe("TodoList Tests", () => {
  beforeEach(() => {
    // Assuming the app is running at http://localhost:3000
    cy.visit("http://localhost:3000");
  });

  it("should display tasks and completed tasks", () => {
    cy.get(
      '[data-testid^="complete-button-"], [data-testid^="edit-button-"]'
    ).should("have.length", 15);
  });

  it("should navigate to Edit Todo page when clicking 'Edit Task'", () => {
    cy.get('[data-testid^="edit-button-"]').first().click();
    cy.url().should("include", "todos/edit");
  });

  it("should remove a task when clicking 'Remove Task'", () => {
    cy.get('[data-testid^="remove-button-"]').then(($buttons) => {
      // Click each remove button in sequence
      Cypress.$.each($buttons, (_, button) => {
        cy.wrap(button).click();
      });
    });
  });
});
