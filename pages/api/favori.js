import { ObjectId } from "mongodb";
import clientPromise from "../../lib/mongodb";

/**
* @swagger
* /api/favori:
*   post:
*       description: ajoute un commentaire a un film
*       responses:
*           200:
*               description: Hello Movies
*       parameters:
*         - in: query
*           name: name
*           required: true
*           type: string
*           description: Nom de l'utilisateur
*         - in: query
*           name: movie_id
*           required: true
*           type: string
*           description: Id du film que l'on commente
*/

export default async function handler(req, res) {
    const client = await clientPromise;
    const db = client.db("sample_mflix");

    var { name } = req.query;
    if (name == null) { var name = req.body.name; };
    console.log(name);

    var { movie_id } = req.query;
    if (movie_id == null) { var movie_id = req.body.movie_id; };
    console.log(movie_id);

    const currentDate = new Date();
    
    console.log("name :", name);
    console.log("movie_id :", movie_id);
    console.log("date :", currentDate);
    const newFavori = await db.collection("favori").insertOne({name:name,movie_id:ObjectId(movie_id), date:Date(currentDate)});
    res.json({ status: 200, data: {id: newFavori.insertedId, Information: "favoris enregistré" }});
}