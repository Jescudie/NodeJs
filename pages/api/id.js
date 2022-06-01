import { ObjectId } from "mongodb";
import clientPromise from "../../lib/mongodb";
/**
* @swagger
* /api/id:
*   get:
*       description: Retourne les films par leur titres
*       responses:
*           200:
*               description: Hello Movies
*       parameters:
*         - in: body
*           name: id
*           required: true
*           type: string
*           description: Cherche les films par id
*/

export default async function handler(req, res) {
    const client = await clientPromise;
    const db = client.db("sample_mflix");
    var { id } = req.query;
    if (id == null) { var id = req.body.id; };
    console.log(id)
    const movies = await db.collection("movies").find({_id: ObjectId(id) }).limit(10).toArray();
    res.json({ status: 200, data: movies });
}