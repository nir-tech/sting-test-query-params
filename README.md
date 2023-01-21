# sting-test-query-params

A script that tests that query param changes a phone number in Sting landing pages.
Run this script locally after

### How to use this test script

1. inside `cypress/fixtures/paths.json` add slugs of landing pages to to the `objects` property to configure the slugs of the landing pages that the script will run on.
2. inside `cypress/fixtures/queryParamsAndNumbers.json` add an object or objects of the query parameter and the related phone number you want to test.

3. run in terminal `cy-run-staging` to run the script in staging env or `cy-run-production` to run in production.
