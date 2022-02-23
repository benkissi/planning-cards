describe("Test home page", () => {
  it("Visits create game page", () => {
    cy.visit("/create");
    cy.contains("div", "Create new game");
  });
});
