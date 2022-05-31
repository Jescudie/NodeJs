export default function handler(req, res) {
    const { id } = req.query
    res.json({ status: 200, data: {movieId: id} });
}