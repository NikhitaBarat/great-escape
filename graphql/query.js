const { graphqlHTTP } = require('express-graphql')
const { buildSchema } = require('graphql')
const axios = require('axios')

let schema = buildSchema(`
    type Hotel {
        hotel_name: String,
        imgurl: String,
        despscription: String,
        rating: Float,
        old_price: Float,
        new_price: Float,
    }
    type Query {
        hello: String,
        hotels: [Hotel]
    }
`)

let root = {
    hello: () => {
        return 'Welcome to GraphQL'
    },
    hotels: () => {
        let hotels = []
        hotels = getHotels()
        return hotels
    }
}


const getHotels = async () => {
    try {
        const response = await axios.get('https://great-escape.herokuapp.com/api/hotels/all')
        return response.data
    }catch(err) {
        console.error(err)
    }

}

module.exports = graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
})