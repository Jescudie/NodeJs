import clientPromise from "../../lib/mongodb";

/**
* @swagger
* /api/titre:
*   get:
*       description: Retourne les films par leur titres
*       responses:
*           200:
*               description: Hello Movies
*       parameters:
*         - in: body
*           name: titre
*           required: true
*           type: string
*           description: Cherche les films par titre
*/

export default async function handler(req, res) {
    const client = await clientPromise;
    const db = client.db("sample_mflix");
    var { titre } = req.query;
    if (titre == null) { var titre = req.body.titre; };
    console.log(titre)
    const movies = await db.collection("movies").find({title: titre}).limit(10).toArray();
    res.json({ status: 200, data: movies });
}