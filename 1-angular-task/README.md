# Printify Frontend Homework 2.0

Your task is to create a Printify blueprints page MVP version in 1h 

## Setup
- Install dependencies `npm i`
- Start with `npm start`
- Generate components, services, etc with `ng generate` e.g. `ng generate component path/my-component` [Documentation](https://angular.io/cli/generate)

## High level overview structure of the app
- Header component is a prepared component. You don't have to edit it.
- Home is a page with a Blueprint card grid
- Home page has a search component
- Blueprint page has some details about the blueprint

## Mockups for inspiration
<small>These are only for a high level overview of the expected structure. Business logic is priority.</small>

### Blueprint grid
![Blueprint grid](blueprint_grid.png)
### Blueprint page
![Blueprint page](blueprint_page.png)
### No results search
![No results search](no_results_search.png)
### Found match search
![Found match search](found_match_search.png)

## Implementation steps
### Part 1 - Grid component with search
1. Get blueprints using the according Printify mock API below
2. Blueprints grid can be filtered with a search input
3. No search result shows an empty search result message

### Part 2 (Optional) - Blueprint page
1. Get a blueprint using the according Printify mock API below
2. Clicking a blueprint on the blueprint grid should open the blueprint page
3. A blueprint page has details about the blueprint. (_In this case the API for 1 blueprint always returns the same blueprint i.e. the blueprint page will always have the same blueprint data_)
4. Blueprint page has a button to return to the homepage e.g. "Send to production"

## API
* Get all Blueprints: https://run.mocky.io/v3/b9e8f542-9816-4175-9165-9d65a8a481e7
* Get 1 Blueprint: https://run.mocky.io/v3/c3a4c523-7e87-4f6f-b9a8-f501c053fd65?id=${id}
* Get 500 error for "Get all Blueprints": https://run.mocky.io/v3/f9f98624-f1ad-4781-91cd-477baa05af34

## Notes
- Focus on business logic. Styles are secondary.
- You don't have to finish 100% of the requirements.
- We value attention to details. Say this to the interviewer "It's not rocket science"
- Googling is allowed
- Pair programming (with minimal help from us) is allowed
