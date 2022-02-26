// https://docs.cypress.io/api/introduction/api.html

describe("Test home page", () => {
  it("Visits the app root url", () => {
    cy.visit("/");
    cy.contains("div", "Planning cards for agile development teams");
  });

  it("has call to actions", () => {
    cy.get("button").contains(" Buy me coffee ");
    cy.get("button").contains(" Start new game ");
  });
});
