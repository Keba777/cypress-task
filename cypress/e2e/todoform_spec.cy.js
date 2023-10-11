/* eslint-disable no-undef */
describe("TodoForm Tests", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/todos/add");
  });

  it("should display the TodoForm with the correct elements", () => {
    cy.wait(1000); // Adjust the wait time as needed

    cy.get('[data-testid="todo-form"]').should("exist");
    cy.get('[data-testid="todo-input"]').should("exist");
  });
});
