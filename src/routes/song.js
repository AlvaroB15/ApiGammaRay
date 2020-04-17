const express = require('express');
const router = express.Router();

// Para poder instalar un modulo de nodejs, instalaremos "nodemon", con el cual ya no tendras que estar a cada rato reiniciando el servico, en otras palabras, en el real tiempo y solo se recarga

// sudo npm install nodemon -D

const mysqlConnection = require('../database');

// para listar todos los elementos
router.get('/', (req, res) => {
    mysqlConnection.query('SELECT * FROM cancion', (err, rows, fields) => {
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
    // Para poder llamar por medio del Id y obtner toda la data, este solo mostrara 1 resultado
    mysqlConnection.query('SELECT * FROM cancion WHERE nombre_cancion LIKE ?', [id] + '%', (err,rows,fields)=>{   
    // mysqlConnection.query('SELECT * FROM cancion WHERE nombre_cancion LIKE ?', [id] , (err,rows,fields)=>{ 
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    });
});

router.delete('/:id', (req, res)=>{
    const {id} = req.params;
    mysqlConnection.query('DELETE FROM cancion WHERE id_cancion=?',[id],(err,rows,fields) =>{
        if(!err){
            res.json({Estado: 'Cancion Eliminada'});
        }else{
            console.log(err);
        }
    } );
});








        // atributos de la tabla cancion
        // id_album, id_cancion, nombre_cancion, letra_cancion, creacion_musica, creacion_letra

// Para insertar datos en la tabla cancion


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