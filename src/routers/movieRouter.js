const router = require('express').Router()
const conn = require('../connection/connection')


//addmovie
router.post('/addmovie',async (req,res)=>{
    const sql = `INSERT INTO movies SET ?;`
    const sql2 = `SELECT * FROM movies`
    const data = req.body
    conn.query(sql, data, (err, result) => {
        if(err) return res.send(err.sqlMessage)
        conn.query(sql2, (err, result) => {
            if(err) return res.send(err)
            res.send(result)
        })
    })
})

// delete movie
router.delete('/movies/delete', (req, res) => { 
    const sql = `DELETE FROM movies WHERE id = ?`
    const data = req.body.id
    conn.query(sql, data, (err, result) => {
        if(err) return res.send(err)
        res.send(result)
    })
})


//edit movie
router.patch('/movies/:movieId', (req, res) => { 
    const sql = `UPDATE movies SET ? WHERE id = ?`
    const data = [req.body, req.params.movieId]
    conn.query(sql, data, (err, result) => {
        if (err) return res.send(err.mess)
        res.send(result)
    })
})

// show all movie
router.get('/movies/allMovie', (req, res) => { 
    const sql = `SELECT * FROM movies`

    conn.query(sql, (err, result) => {
        if(err) return res.send(err.message)
        const movies = result
        if(!movies) return res.send("Movie not found")

        res.send({
            movies
        })
    })
})



module.exports = router