export const GET_CHARACTERS = `#graphql
  query Characters($filter: FilterCharacter) {
    characters(filter: $filter) {
      results {
        name
        id
        image
        status
      }
    }
  }
`

export const GET_CHARACTER = `#graphql
  query Character($characterId: ID!) {
    character(id: $characterId) {
      id
      name
      image
      status
      species
      type
      gender
      origin {
        dimension
        id
        name
        type
      }      
      location {
        dimension
        id
        name
        type
      }
      episode {
        episode
        id
        name
        characters {
          id
          image
          name
          origin {
            id
            dimension
            name
          }
        }
      }
    }
  }
`
