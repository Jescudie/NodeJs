import clientPromise from "../../lib/mongodb";

/**
* @swagger
* /api/annee:
*   get:
*       description: Retourne les films par leur année
*       responses:
*           200:
*               description: Hello Movies
*       parameters:
*         - in: query
*           name: annee
*           required: true
*           type: integer
*           description: Cherche les films par annee
*/

export default async function handler(req, res) {
const client = await clientPromise;
const db = client.db("sample_mflix");
const { annee } = req.query;
console.log(parseInt(annee))
const movies = await db.collection("movies").find({year: parseInt(annee)}).limit(10).toArray();
res.json({ status: 200, data: movies });
}