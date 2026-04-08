## Star Wars Courses

this is a sample app designed to brush up on:
- modern react 
- next JS 
- tailwind css
- mobX state management
- Incremental Static Regeneration (ISR)

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## NOTE:
- feel free to add custom data to a JSON BIN and setup your own env, or use the data provided in /mocks (https://jsonbin.io/)

## TODO!

- Set up proper cacheing / implement ISR, remember the 4 caching methods in next (memoization, data cache, full route cache, router cache)

- improve mobX implementation. Suggestions: add explicitly annotated configuration object / update global singleton instance and instead inject store via React Context.

- add loading states, spinners or 

- Setup the CourseStore, and access it from the course video page to fill out some meta data

- Create a side panel on the player to jump between lessons

- continue creating components, utilizing best practices and optimizing! 