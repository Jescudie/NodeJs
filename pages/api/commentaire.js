import { ObjectId } from "mongodb";
import clientPromise from "../../lib/mongodb";

/**
* @swagger
* /api/commentaire:
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

    var { name } = req.query;
    if (name == null) { var name = req.body.name; };

    var { email } = req.query;
    if (email == null) { var email = req.body.email; };

    var { movie_id } = req.query;
    if (movie_id == null) { var movie_id = req.body.movie_id; };

    var { text } = req.query;
    if (text == null) { var text = req.body.text; };

    const currentDate = new Date();
    
    console.log("name :", name, "\temail :", email,"\tmovie_id :", movie_id,"\ttext :", text,"\tdate :", currentDate);
    const newComment = await db.collection("comments").insertOne({name:name, email:email, movie_id:ObjectId(movie_id), text:text, date:Date(currentDate)});
    res.json({ status: 200, data: {id: newComment.insertedId, Information: "Commentaire enregistré" }});
}