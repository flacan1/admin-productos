describe("Examen Final - Serie II", () => {
  beforeEach(() => {
    cy.visit("/")
    cy.get("#usuario").type("admin")
    cy.get("#clave").type("1234")
    cy.get("#btn-login").click()
  })

  it("1. Inicia sesion y el panel de administracion es visible", () => {
    cy.get("#admin").should("be.visible")
  })

  it("2. Agrega un producto y aparece en la tabla", () => {
    cy.get("#nombre").type("Webcam")
    cy.get("#precio").type("350")
    cy.get("#stock").type("12")
    cy.get("#btn-guardar").click()
    cy.get(".fila-producto").should("have.length", 6)
    cy.contains(".fila-producto", "Webcam").should("be.visible")
  })

  it("3. No permite agregar un producto con precio 0", () => {
    cy.get("#nombre").type("Cable")
    cy.get("#precio").type("0")
    cy.get("#stock").type("3")
    cy.get("#btn-guardar").click()
    cy.get("#form-msg").should("have.text", "El precio debe ser un numero mayor que 0.")
    cy.get(".fila-producto").should("have.length", 5)
  })
})