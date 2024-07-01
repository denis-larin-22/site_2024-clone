const contentful = require('contentful');

console.log(process.env.CONTENTFUL_SPACE_ID);


export const client = contentful.createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
})