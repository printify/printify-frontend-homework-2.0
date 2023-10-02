# Printify Frontend Homework 2.0

Your task is to create a Printify blueprints page MVP version within 40 minutes 

## Setup
- Install dependencies `npm i`
- Start with `npm start`
- Generate components, services, etc with `ng generate` e.g. `npm run ng generate component path/my-component` [Documentation](https://angular.io/cli/generate)

## High level overview structure of the app
- Header component is a prepared component. You don't have to edit it.

## Implementation steps
### Part 1 - A page displaying blueprints that can be searched
- Display blueprints from the endpoint in the **API** section  
- The blueprints can be filtered using a search input. Search can be done using the blueprint name
- No search result shows an empty result message to the user
- The route for this blueprint list page is the root page i.e. 'http://localhost:4200'


### Part 2 (Optional) - Blueprint page
1. Get a blueprint using the according Printify mock API below
2. Clicking a blueprint on the blueprint grid should open the blueprint page
3. A blueprint page has details about the blueprint. (_In this case the API for 1 blueprint always returns the same blueprint i.e. the blueprint page will always have the same blueprint data_)
4. Blueprint page has a button to return to the homepage e.g. "Send to production"

## API
* Get all Blueprints: https://run.mocky.io/v3/3e3e7230-ed6f-4e07-984a-0c283a8cceb2
* Get 1 Blueprint: https://run.mocky.io/v3/773715ee-7134-4999-b2bd-bef3d41a1b41?id=${id}
* Get 500 error for "Get all Blueprints": https://run.mocky.io/v3/48713e9f-f176-47aa-8585-7005c278814d

## Notes
- Focus on business logic. Styles are secondary.
- You don't have to finish 100% of the requirements.
- We value attention to details. Say this to the interviewer -> "It's not rocket science"
- Googling is allowed
- Pair programming (with minimal help from us) is allowed

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


