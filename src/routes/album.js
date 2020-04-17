const express = require('express');
const router = express.Router();

// Para poder instalar un modulo de nodejs, instalaremos "nodemon", con el cual ya no tendras que estar a cada rato reiniciando el servico, en otras palabras, en el real tiempo y solo se recarga

// sudo npm install nodemon -D

const mysqlConnection = require('../database');

// para listar todos los elementos
router.get('/', (req, res) => {
    mysqlConnection.query('SELECT * FROM album', (err, rows, fields) => {
        if(!err){
            res.json(rows);
        } else{
            console.log(err);   
        }
    });
});

// Para listar un elemento seleccionado por su id_cancion
router.get('/:id', (req, res ) => {
    const {id}  = req.params;
    mysqlConnection.query('SELECT * FROM album WHERE id_album = ?', [id], (err,rows,fields)=>{
        if(!err){
            res.json(rows[0]);
        }else{
            console.log(err);
        }
    });
});

router.delete('/:id', (req, res)=>{
    const {id} = req.params;
    mysqlConnection.query('DELETE FROM album WHERE id_album = ?',[id],(err,rows,fields) =>{
        if(!err){
            res.json({Estado: 'Cancion Eliminada'});
        }else{
            console.log(err);
        }
    } );
});






// // Para insertar datos en la tabla cancion
// router.post('/', (req,res)=>{
//     const {id_cancion, nombre_cancion, album_cancion, letra_cancion, artista, anno,  compositor} = req.body;
//     console.log(req.body);
//     const query = `
//         CALL songAddOrUpdate(?,?,?,?,?,?,?);
//     `;
//     mysqlConnection.query(query, [id_cancion, nombre_cancion, album_cancion, letra_cancion, artista, anno,  compositor] , (err,rows,fields) =>{
//         if(!err){
//             res.json({Estado: 'Cancion Guardada'});
//         }else{
//             console.log(err);
//         }
//     });
// });

// router.put('/:id', (req, res)=>{
//     const { nombre_cancion, album_cancion, letra_cancion, artista, anno,  compositor} = req.body;
//     const {id} = req.params;
//     const query = 'CALL songAddOrUpdate(?,?,?,?,?,?,?);';
//     mysqlConnection.query(query, [id, nombre_cancion, album_cancion, letra_cancion, artista, anno,  compositor] , (err,rows,fields) =>{
//         if(!err){
//             res.json({Estado: 'Cancion Actualizado'});
//         }else{
//             console.log(err);
//         }
//     });
// });


module.exports = router;