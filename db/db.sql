create database if not exists gamma_ray;
use gamma_ray;

CREATE TABLE `cancion` (
  `id_cancion` int(8) NOT NULL,
  `nombre_cancion` varchar(50) NOT NULL,
  `album_cancion` varchar(50) NOT NULL,
  `letra_cancion` text NOT NULL,
  `artista` varchar(50) NOT NULL,
  `anno` year(4) NOT NULL,
  `compositor` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

DESCRIBE cancion;
