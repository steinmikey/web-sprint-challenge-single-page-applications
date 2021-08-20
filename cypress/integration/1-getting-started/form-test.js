describe("Lambda Eats App", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });
  const startOrder = () => cy.get(`button[id='start-order']`);
  const inputName = () => cy.get(`input[id='name-input']`);
  const selectSize = () => cy.get("select[id='size-dropdown']");
  const submit = () => cy.get(`button[id='order-button']`);
  const pepperoni = () => cy.get(`input[name='pepperoni']`);
  const sausage = () => cy.get(`input[name='sausage']`);
  const blackOlives = () => cy.get(`input[name='blackOlives']`);
  const extraCheese = () => cy.get(`input[name='extraCheese']`);

  it("Testing testing", () => {
    expect(4 + 7).to.equal(11);
  });

  it("The correct elements are showing after starting order", () => {
    startOrder().should("exist");
    startOrder().click();
    inputName().should("exist");
    selectSize().should("exist");
    submit().should("exist");
    pepperoni().should("exist");
    sausage().should("exist");
    blackOlives().should("exist");
    extraCheese().should("exist");
  });

  describe("Can Input text into text fields", () => {
    it("Can input Name", () => {
      startOrder().click();
      inputName().should("have.value", "").type("Michael").should("have.value", "Michael");
    });
    it("Can select multiple toppings", () => {
      startOrder().click();
      pepperoni().check().should("be.checked");
      sausage().check().should("be.checked");
      blackOlives().check().should("be.checked");
      extraCheese().check().should("be.checked");
    });
  });
});
