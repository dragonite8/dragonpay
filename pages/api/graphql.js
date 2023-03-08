

const main = async () => {
const { PrismaClient } = require('@prisma/client') ;
const { ApolloServer } = require('@apollo/server') ;
const { makeExecutableSchema } = require('@graphql-tools/schema') ;
const { startStandaloneServer } = require('@apollo/server/standalone') ;

const prisma = new PrismaClient();

const typeDefs = `
    type Ach_Eft_Detail {
        xfer_id: ID!
        payment_id: Int!
        paymentstatus: Boolean!
        paymentmethod: String
        payments: String
    }
    type Credentials {
        credential_id: Int
        plaidaccesstoken: String
        plaiditemid: String
        supplier_id: Int
        suppliers: String
    }
    type Payments {
        payment_id: Int!
        po_id: Int!
        amount: Int!
        fxrate: Int!
        paid: Boolean!
        ach_eft_detail: Ach_Eft_Detail
        purchaseorders: String
    }
    type Projects {
        project_id: Int!
        projectname: String!
        projectdescription: String!
        projectamount: String!
        customer_id: String!
        purchaseorders: PurchaseOrders
        suppliers_projects: Suppliers_Projects
    } 
    type PurchaseOrders {
        po_id: Int!
        project_id: Int!
        projectname: String!
        currency: String!
        amount: Int!
        payments: Int!
        projects: String!
    }
    type Suppliers {
        supplier_id: Int!
        suppliername: String!
        address: String!
        city: String!
        state: String!
        zip: String!
        phonenumber: String!
        credentials: String!
        suppliers_projects: String!
    }
    type Suppliers_Projects {
        project_id: Int!
        supplier_id: Int!
    }
    type Users {
        user_id: Int!
        username: String!
        password: String!
        supplier_id: Int!
    } 
    type Query {
        ach_eft_detail: Ach_Eft_Detail
        credentials: Credentials
        payments: Payments
        project: Projects
        purchaseorder: PurchaseOrders
        supplier: [Suppliers!]
        suppliers_projects: Suppliers_Projects
        users: [Users]
        userPassword: [Users!]
    }
    type Mutation {
        createUser(user_id: Int, username: String, password: String, suppliername: String): Users!
    }
`;

const resolvers = {
    Query: {
      users: async () => {
        return await prisma.users.findMany();
      },
      supplier: async () => {
        return await prisma.suppliers.findMany();
      }
    },
    Mutation: {
        createUser: async (_, args) => {
            console.log('hello world');
        }
    }
};


// const schema = makeExecutableSchema({
//     resolvers,
//     typeDefs,
// });

const server = new ApolloServer({
    typeDefs,
    resolvers
});

const { url } = await startStandaloneServer(server, {
    listen: {port: 4000}
})

console.log(`🚀  Server ready at: ${url}`);
}

main();

