# Rick & Morty Character Finder
Find your favorite Rick & Morty character and read their bio and linked episodes which are sorted by unique character dimension.

## Setup
Copy `.env.local.example` and rename it to `.env.local`.

Get the Rick & Morty GraphQL API URL and paste it in the `.env.local`.
```
VITE_GRAPHQL_API_URL=
```

Start the app
```
yarn install
yarn dev
```
> Note: The usage of Yarn is forced. Running `npm` will return an Error.

### Test the app
```
yarn test
```

## Info
- The app is created using Vite, React and Typescript
- Tested using Jest and React Testing Library
- shadcn/ui components are used to shape the app
- TanStack Router used for routing
- TanStack Query used for data fetching and caching
