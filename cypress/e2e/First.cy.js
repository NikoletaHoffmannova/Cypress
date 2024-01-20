/// <reference types="Cypress" />

describe('Validate login & Check/Uncheck Checkboxes', function(){

  beforeEach(function() {
        // Visit the login page and validate login with valid credentials
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        // Enter username and password
        cy.get("input[placeholder='Username']").type("Admin")
        cy.get("input[placeholder='Password']").type("admin123")
        // Click the login button
        cy.get("button[type='submit']").click();
        // Assertions for successful login
        cy.title().should('eq','OrangeHRM')
        cy.url().should('include', '/dashboard/index');

  });     
  
  it('Check/Uncheck Checkboxes in Admin menu', function(){
        // Click on the Admin menu
        cy.contains('Admin').click();
        // Check all Checkboxes
        cy.get('input[type="checkbox"]').check({force: true})
        // Uncheck all Checkboxes
        cy.get('input[type="checkbox"]').uncheck({force: true})
  })

})