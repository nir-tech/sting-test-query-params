// Declare paths
const paths = [
  // 'lp/students-plus/',
  // 'lp/plus/',
  // 'lp/perfect',
  // 'lp/moving-perfect',
  // 'lp/moving-plus/',
  // 'lp/packages/',
  // 'lp/stingtv-netflix/',
  // 'lp/sting-ds/',
  'lp/samsung-stingtv/'
  ]

// Declare
const queryParamsAndNumbers = [
  {
    queryParam: '1205',
    phoneNumber: '08-6268324'
  },
  {
    queryParam: '1206',
    phoneNumber: '08-6268325'
  },
  {
    queryParam: '1207',
    phoneNumber: '08-6268326'
  },
  {
    queryParam: '1208',
    phoneNumber: '08-6268327'
  },
  {
    queryParam: '1209',
    phoneNumber: '08-6268328'
  },


]

// Decalre variables from env object inside cypress.config.js
const stagingSting = Cypress.env('stagingSting')
const productionSting = Cypress.env('productionSting')


describe('Test that campaign_source query param changes phone number', () => {

  // Test that the query
  it.only('Loop through all paths with relevant query params', () => {
                                        
    for (let i = 0; i < queryParamsAndNumbers.length; i++) {
           
      paths.forEach(path => {

        // Log to dashboard the current test data
        cy.log('Current Path: ', path)
        cy.log('Current QueryParam: ', queryParamsAndNumbers[i].queryParam)
        cy.log('Current Phone Number: ', queryParamsAndNumbers[i].phoneNumber)

        // Open 
        cy.visit(productionSting + path, {

          // add the query  
          qs: {
            campaign_source: queryParamsAndNumbers[i].queryParam
          }
        })
        // Grab phone number and assert that it's the correct number
        cy.get('#phoneNumber')
          .should('be.visible')
          .and('have.text', queryParamsAndNumbers[i].phoneNumber)
      })
    }
  })                           
})



