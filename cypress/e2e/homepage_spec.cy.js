/* eslint-disable no-undef */
describe("Homepage Tests", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("should display the main title", () => {
    cy.get("[data-testid=main-title]").should("contain", "My Tasks");
  });

  it('should navigate to Add Todo page when clicking "Add Task" button', () => {
    cy.contains("Add Task").click();
    cy.url().should("include", "/todos/add");
  });
});
