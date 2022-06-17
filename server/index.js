const express = require("express")
const app = express();

app.use(express.json())

app.get('/', (req, res) => {
    res.status(200).send("Server started")
})

app.get('/getMoviesData', (req, res) => {
    let moviesList = [...Array(20)].map((value, index) => {
            return {
                "name": `Movie${index + 1}`,
                "rating": index % 5 + 1,
                "releasedOn": "01-03-1999"
            }
        }
    )
    res.status(200).send({"status": 200, "data": moviesList})
}) 

app.listen(3001, () => {
    console.log("Server started")
})