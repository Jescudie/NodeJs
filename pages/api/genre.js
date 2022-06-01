import clientPromise from "../../lib/mongodb";

/**
* @swagger
* /api/genre:
*   get:
*       description: Retourne les films par leur genre
*       responses:
*           200:
*               description: Hello Movies
*       parameters:
*         - in: query
*           name: genre
*           required: true
*           type: string
*           description: Cherche les films par genre
*/

export default async function handler(req, res) {
    const client = await clientPromise;
    const db = client.db("sample_mflix");
    var { genre } = req.query;
    if (genre == null) { var genre = req.body.genre; };
    console.log(genre)
    const movies = await db.collection("movies").find({genres: genre}).limit(10).toArray();
    res.json({ status: 200, data: movies });
}