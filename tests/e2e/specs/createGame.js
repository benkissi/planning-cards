describe("Test home page", () => {
  const gameName = 'Sprint2020'
  const userName = 'Ben10'

  it("Visits create game page", () => {
    cy.visit("/create");
    cy.contains("div", "Create new game").should('be.visible');
  });

  it("creates new game", () => {
    cy.get('input[placeholder*="Game name"]').type(gameName);
    cy.get('input[placeholder*="Pick a username"]').type(userName);
    cy.get("div").contains("Select voting type").click();

    cy.get("div").contains('Powers').click()
    cy.get("button").contains(" Start game ").click();
    cy.wait(1000);
    cy.contains("div", " Get Invite Link ").should('be.visible');
    cy.contains("div", " sprint2020 ").should("be.visible");
  });

  it("adds new task", () => {
    cy.get('input[placeholder*="Task title"]').type('Task 1');
    cy.get("button").contains(" Add Task ").click();
    cy.contains("div", "Task 1").should("be.visible");
  })

  it("adds votes to task", () => {
    cy.contains("div", "13").should("be.visible");
    cy.contains("div", "13").click();
    cy.contains("div", "13").should("have.class", "bg-purple-400");
    cy.contains("div", "Voted").should("be.visible")
  });

  it("reveals cards", () => {
    cy.contains("div", " Reveal cards ").should("be.visible");
    cy.contains("div", " Reveal cards ").click();
    // cy.contains("div", "13").should("not.exist");

    cy.get(".flex-1.flex.flex-col.justify-center.items-center.h-full.mx-4")
      .within(() => {
      cy.contains("div", "13")
    })
    cy.contains("div", "Total: 13");
  });
});
