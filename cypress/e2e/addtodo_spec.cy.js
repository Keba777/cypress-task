/* eslint-disable no-undef */
describe("Add Todo Page Tests", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/todos/add");
  });

  it("should display the Add Todo page", () => {
    cy.contains("Add Task").should("exist");
    cy.get("input").should("exist"); // Ensure the input field exists
    cy.contains("Add Task").should("exist"); // Ensure the submit button exists
  });

  it("should add a task when submitting the form", () => {
    const taskText = "Test Task";
    cy.get("input").type(taskText);
    cy.contains("Add Task").click();
    cy.url().should("eq", "http://localhost:3000/"); // Adjust the URL if needed
    cy.contains(taskText).should("exist"); // Ensure the task is displayed on the page
  });
});
