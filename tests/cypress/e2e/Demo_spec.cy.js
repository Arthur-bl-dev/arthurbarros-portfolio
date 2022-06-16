const urlBase = "https://arthurbldev.com.br/demo";

describe("Test Home - Elements html", () => {
  it("Deve ter um elemento h1 na página com o nome Arthur Barros", () => {
    cy.visit("https://arthurbldev.com.br/demo");

    var element = "h1";
    var data = "Arthur Barros";

    cy.contains(element, data).screenshot();
  });

  it("Deve ter o título da página com o nome do projeto", () => {
    cy.visit("https://arthurbldev.com.br/demo");

    var element = "title";
    var data = "Demo";

    cy.contains(element, data).screenshot();
  });
});
