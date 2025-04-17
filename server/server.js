import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

const types = `#graphql
    type Query {
        greeting: String
    }
`;

const resolvers = {
  Query: {
    greeting: function () {
      return "Hello!";
    },
  },
};

const server = new ApolloServer({ typeDefs: types, resolvers });
const { url } = await startStandaloneServer(server, { listen: { port: 9000 } });
console.log("Server is running on : ", url);
