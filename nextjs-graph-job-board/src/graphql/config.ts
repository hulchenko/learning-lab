const types = `#graphql
    type Query {
        greeting: String
    }
`;

const resolvers = {
  Query: {
    greeting: () => "Hello!",
  },
};

export { types, resolvers };
