describe("Lambda Eats App", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });
  const startOrder = () => cy.get(`button[id='start-order']`);
  const inputName = () => cy.get(`input[id='name-input']`);
  const selectSize = () => cy.get("select[id='size-dropdown']");
  const submit = () => cy.get(`button[id='order-button']`);

  it("Testing testing", () => {
    expect(4 + 7).to.equal(11);
  });

  it("The correct elements are showing after starting order", () => {
    startOrder().should("exist");
    startOrder().click();
    inputName().should("exist");
    selectSize().should("exist");
    submit().should("exist");
  });
});
