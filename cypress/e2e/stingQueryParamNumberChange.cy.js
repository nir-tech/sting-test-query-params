Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});

describe('test that campaign_source query param changes phone number', () => {
  before('oad query paramters and related numbers from fixtures', () => {
    cy.fixture('queryParamsAndNumbers.json').as('queryParamsAndNumbers');
    cy.fixture('paths.json').as('paths');
  });

  it('loop through sting pages', function () {
    const queryParamsAndNumbers = this.queryParamsAndNumbers.objects;
    const paths = this.paths.objects;

    for (let i of queryParamsAndNumbers) {
      i = queryParamsAndNumbers.indexOf(i);

      paths.forEach((path) => {
        cy.log('Current Path:', path);
        cy.log('Current QueryParam:', queryParamsAndNumbers[i].queryParam);
        cy.log('Current Phone Number:', queryParamsAndNumbers[i].phoneNumber);

        cy.visit('/' + path, {
          // the content of the 'qs' are the query parameters to be appeneded to thg url
          qs: {
            campaign_source: queryParamsAndNumbers[i].queryParam,
          },
        });

        cy.get('#phoneNumber').should(
          'have.text',
          queryParamsAndNumbers[i].phoneNumber
        );
      });
    }
  });
});
