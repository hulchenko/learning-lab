import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { types, resolvers } from "@/graphql/config";

const server = new ApolloServer({ typeDefs: types, resolvers });
const handler = startServerAndCreateNextHandler(server);

export { handler as GET, handler as POST };

// TODO optional
// export const config = {
//   api: {
//     bodyParser: false,
//   },
// };
