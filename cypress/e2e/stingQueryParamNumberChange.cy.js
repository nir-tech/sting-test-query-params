Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});

describe('Test that campaign_source query param changes phone number', () => {
  before('Load query paramters and related numbers from fixtures', () => {
    cy.fixture('queryParamsAndNumbers.json').as('queryParamsAndNumbers');
    cy.fixture('paths.json').as('paths');
  });

  it.only('Loop through all paths with relevant query params', function () {
    const queryParamsAndNumbers = this.queryParamsAndNumbers.objects;
    const paths = this.paths.objects;

    for (let i of queryParamsAndNumbers) {
      i = queryParamsAndNumbers.indexOf(i);

      paths.forEach((path) => {
        cy.log('Current Path:', path);
        cy.log('Current QueryParam:', queryParamsAndNumbers[i].queryParam);
        cy.log('Current Phone Number:', queryParamsAndNumbers[i].phoneNumber);

        // The baseUrl is configured from a script inside package.json
        cy.visit('/' + path, {
          qs: {
            campaign_source: queryParamsAndNumbers[i].queryParam,
          },
        });

        cy.get('#phoneNumber')
          .should('be.visible')
          .and('have.text', queryParamsAndNumbers[i].phoneNumber);
      });
    }
  });
});
