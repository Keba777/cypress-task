/* eslint-disable no-undef */
describe("Edit Todo Page Tests", () => {
  const taskId = 1;

  beforeEach(() => {
    cy.visit(`http://localhost:3000/todos/edit/${taskId}`);
  });

  it("should display the Edit Todo page", () => {
    cy.contains("Save Changes").should("exist");
    cy.get("input").should("exist"); // Ensure the input field exists
    cy.contains("Save Changes").should("exist"); // Ensure the submit button exists
  });

  it("should update a task when submitting the form", () => {
    const updatedTaskText = "Updated Task";
    cy.get("input").clear().type(updatedTaskText);
    cy.contains("Save Changes").click();
    cy.url().should("eq", "http://localhost:3000/"); // Adjust the URL if needed
    cy.contains(updatedTaskText).should("exist"); // Ensure the updated task is displayed on the page
  });
});
