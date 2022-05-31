import { ObjectId } from "mongodb";
import clientPromise from "../../lib/mongodb";

/**
* @swagger
* /api/comment:
*   post:
*       description: ajoute un commentaire a un film
*       responses:
*           200:
*               description: Hello Movies
*       parameters:
*         - in: query
*           name: id
*           required: true
*           type: string
*           description: Id du commentaire
*         - in: query
*           name: name
*           required: true
*           type: string
*           description: Nom de l'utilisateur
*         - in: query
*           name: email
*           required: true
*           type: string
*           description: email de l'utilisateur
*         - in: query
*           name: movie_id
*           required: true
*           type: string
*           description: Id du film que l'on commente
*         - in: query
*           name: text
*           required: true
*           type: text
*           description: Commentaire
*/

export default async function handler(req, res) {
const client = await clientPromise;
const db = client.db("sample_mflix");
const { titre } = req.query;
console.log(titre)
const movies = await db.collection("movies").find().limit(10).toArray();
res.json({ status: 200, data: movies });
}