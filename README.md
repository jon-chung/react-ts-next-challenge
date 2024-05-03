# Introduction

Hi everyone. This is a code test I did for another company about a couple weeks ago, which was a two-hour project roughly similar in style to what I think the code test will look like for our upcoming one. Hopefully this shows what I usually like doing. My personal stuff is probably way too rough. I'll also provide the instructions they gave me below.


### Acceptance Criteria

1. When on the Request List Page
   1. There should be a page heading saying "Request List"
   2. There should list of request cards
      1. When the list is loading the text "Loading" should be shown in place of the list
      2. When there is an error with the data fetching the text "Error" should be shown in place of the list
      3. When there are no requests returned by the server the text "No requests" should be shown in place of the list
      4. Each request should be a card
         1. Each card should have
            1. Headline
            2. Date
            3. Name of the user that submitted it
      5. The request list should be sorted by date, with the newest requests first
      6. The list should be paginated
         1. The list should be limited to 10 items per page
         2. There should be a indicator at the end of the list telling the user which page they're on
         3. There should be a button to go to the previous page
            1. The button should be disabled if the user is on the first page
         4. There should be a button to go to the next page
            1. The button should be disabled if the user is on the last page

### Notes

- Styling and layout do not matter except where instructions are specifically given via the acceptance criteria. No bonus points for style.

## Codebase structure

You are provided with a basic monorepo to help you get started as quick as possible. All of the setup required to do the challenge has been done. You are welcome to change the codebase however you see fit.

### Technologies

- Node.js
- Javascript/Typescript
- React

### Apps

- `api`: A minimal [Express.js](https://expressjs.com/) server
  - `requests-data.json` contains JSON data of sample requests relevant to the user story. It's up to you how to use this data.
  - Basic setup is done in `main.ts`
  - API will start via port `3001` with a hello world route at `/`.
- `frontend`: A [Next.js](https://nextjs.org/) frontend app
  - Frontend app will start via port `3000` with default hello world route at `/`
  - The component rendered for `/` can be found in `views/home.tsx`.

### System requirements

- Node.js >= v18.17.0
- NPM >= 8.19.2

### Develop

To develop all apps, run the following command at root or in each app's folder:

```
npm run dev
```

To run tests for all apps, run the following command at root or in each app's folder:

```
npm run test
```

## Submission

Please submit your solution as a Git repo (zipped) privately to your hiring manager's email.
