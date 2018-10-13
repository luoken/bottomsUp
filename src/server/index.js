const express = require('express');
const cors = require('cors');
const graphqlHTTP = require('express-graphql');
const gql = require('graphql-tag');
const {buildASTSchema} = require('graphql');

const POST = [
    {author: 'John Doe', body: "hello worl!"},
    {author: 'Jane Doe', body: "Hi"},
];

const schema = buildASTSchema(gql`
    type Query{
        posts: [Post]
        post(id: ID!): Post
    }

    type Post{
        id: ID
        author: String
        body: String
    }
`);

const mapPost = (post, id) => post && ({id, ...post});

const root = {
    posts: () => POST.map(mapPost),
    post: ({id})=> mapPost(POST[id], id),
}

const app = express();
app.use(cors());
app.use('/graphql', graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true,
}));

const port = process.env.PORT || 4000
app.listen(port);
connsole.log(`running a graphql api server at localhost: ${port}/qraphql`);