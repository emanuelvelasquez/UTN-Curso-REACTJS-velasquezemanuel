-- phpMyAdmin SQL Dump
-- version 5.0.4deb2ubuntu5
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:3306
-- Tiempo de generación: 28-11-2021 a las 22:03:37
-- Versión del servidor: 8.0.27-0ubuntu0.21.10.1
-- Versión de PHP: 8.0.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `reactdb`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `artistas`
--

CREATE TABLE `artistas` (
  `id_artista` int NOT NULL,
  `nombre` varchar(200) COLLATE utf8_spanish_ci NOT NULL,
  `descripcion` varchar(500) COLLATE utf8_spanish_ci DEFAULT NULL,
  `id_img` varchar(100) COLLATE utf8_spanish_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `artistas`
--

INSERT INTO `artistas` (`id_artista`, `nombre`, `descripcion`, `id_img`) VALUES
(6, 'Sele Vera', 'Un grupo de chamame romántico cantado.', 'uptohkrhztbejtweozfd'),
(15, 'Mana', 'Maná es una banda de rock pop mexicana fundada en 1986 en Guadalajara, Jalisco', 'v17qph8fsejb3nbdcqz5'),
(16, 'Callejeros', 'Callejeros fue una banda de rock barrial, argentina, formada en Ciudad Celina, en el año 1995 y disuelta en 2010', 'kwshpdkkr3xigkc36wmp'),
(17, 'Los Piojos', 'Los Piojos fue una banda de rock argentino formada a fines de 1988, oriunda de Ciudad Jardín Lomas del Palomar', 'grmjdu7thxyiv7ukieyi'),
(18, 'Wisin Y Yandel', ' Wisin & Yandel are a Puerto Rican reggaeton duo, consisting of Juan Luis Morera Luna (Wisin) and Llandel Veguilla Malavé (Yandel). ', 'awzmp9meom8p1stvck9b'),
(19, 'Daddy Yankee', 'Ramón Luis Ayala Rodríguez, ​ mejor conocido como Daddy Yankee, es un rapero, cantante, compositor, actor, productor discográfico, locutor de radio​ y empresario puertorriqueño.​ ', 'xnm894c7frqjbppmmwav'),
(20, 'Chayanne', 'Elmer Figueroa Arce, conocido como Chayanne, es un cantante, compositor, bailarín y actor puertorriqueño', 't3jlsqiwnnsricjvadli'),
(21, 'Shakira', 'Shakira Isabel Mebarak Ripoll (Barranquilla, Departamento de Atlántico, Colombia; 2 de febrero de 1977), conocida simplemente como Shakira, es una cantautora, bailarina, actriz, embajadora de buena voluntad de UNICEF y empresaria colombiana.', 'gjbhn3yno8rvgc397x4a'),
(22, 'Arcángel', 'Austin Agustín Santos, ​más conocido por su nombre artístico Arcángel, es un cantante estadounidense con ascendencia puertorriqueña y dominicana.', 'n6ehksyfjypvjhetvob1'),
(23, 'Damas Gratis', 'Damas Gratis es un grupo de cumbia villera fundado en San Fernando el 23 de septiembre del año 2000 por el tecladista, compositor y cantante Pablo Lescano.', 'bv8yf305dowmdpqclj17'),
(24, 'Yerba Brava', 'Yerba Brava es un grupo argentino de cumbia villera, formado en 1998 en San Fernando, localidad del Gran Buenos Aires.', 'pkcnoo0pwsx3hnisw1me'),
(25, 'Rodrigo', 'Rodrigo Alejandro Bueno, conocido simplemente como Rodrigo, fue un cantante argentino de cuarteto.', 's5ybktibzitvt0n0qsto'),
(26, 'Banda XXI', 'Banda XXI es un grupo de cuarteto formado en Río Cuarto, Córdoba, Argentina en 1998. ', 'hlal7uxyulme0yjceddp');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `canciones`
--

CREATE TABLE `canciones` (
  `id_cancion` int NOT NULL,
  `nombre` varchar(200) COLLATE utf8_spanish_ci NOT NULL,
  `descripcion` varchar(500) CHARACTER SET utf8 COLLATE utf8_spanish_ci DEFAULT NULL,
  `id_artista` int NOT NULL,
  `id_genero` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `canciones`
--

INSERT INTO `canciones` (`id_cancion`, `nombre`, `descripcion`, `id_artista`, `id_genero`) VALUES
(8, 'Duele', 'musica como para no dejar de bailar', 6, 3),
(9, 'Manda una señal', 'lo vi en Mtv', 15, 4),
(10, 'Arde el cielo', 'visto en MTV', 15, 4),
(11, 'Limbo', '2012', 19, 6),
(12, 'Dejaría Todo', 'Incluido en Grandes Exitos.', 20, 4),
(13, 'Torero', 'Unos de los mas conocido entre sus canciones.', 20, 4),
(14, ' La Cumbia de los Trapos', 'La Cumbia de los Trapos. Yerba Brava.', 24, 8),
(15, 'Soy cordobés', '1999', 25, 9),
(16, 'Amor Clasificado', 'Imposible no bailar', 25, 9),
(17, 'Ocho Cuarenta', 'Provided to YouTube by The Orchard Enterprises', 25, 9),
(18, 'Gasolina', '2010', 19, 6),
(19, ' Hace Mucho Tiempo', 'Grabado en francia', 22, 6),
(20, 'Por Amar A Ciegas', 'lanzado en el 2008', 22, 6),
(21, 'Waka Waka ', 'Cancion Oficial de la Copa Mundial de la FIFA� Sudafrica 2010', 21, 4),
(22, ' Ciega, Sordomuda', 'Una de las primeras canciones.', 21, 4),
(23, 'Lo mejor del amor ', '1996', 25, 9),
(24, 'No te creas tan importante', '2018', 23, 8),
(25, 'Que bonito', '2021 y se sigo escuchando este temazo', 26, 9),
(26, 'Quiero saber de ti', 'Lanzado en el 2009', 26, 9),
(27, ' TU Y YO', 'Cultura Argentina Señores', 6, 3),
(28, 'Me muero de amor', '2019', 23, 8),
(29, 'Me Estas Tentando', 'Solo la vieja escuela seguimos escuchando estas canciones en pleno 2021', 18, 6),
(30, 'Te Siento', 'Esta canción estuvo demasiada adelantada para su época, ', 18, 6),
(31, 'Como Alí', 'Año: 2003', 17, 5),
(32, 'El amor verdadero perdona', '2011', 15, 4),
(33, 'Ruleta', 'Del disco Verde Paisaje del Infierno (2000)', 17, 5),
(34, 'Creo', 'Del disco \"Señales\".', 16, 5),
(35, 'Prohibido', 'Callejeros - Prohibido (Vivo) - Mezclado y Masterizado 2017', 16, 5),
(36, 'Una Nueva Noche Fría', 'Que buen tema ...!!!', 16, 5);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `generos`
--

CREATE TABLE `generos` (
  `id_genero` int NOT NULL,
  `nombre` varchar(100) COLLATE utf8_spanish_ci NOT NULL,
  `descripcion` varchar(500) COLLATE utf8_spanish_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `generos`
--

INSERT INTO `generos` (`id_genero`, `nombre`, `descripcion`) VALUES
(3, 'Folk-Rock', 'El folk rock, en un sentido amplio, es un género musical que combina elementos de la música folk, el blues y el rock.'),
(4, 'Pop', 'La música pop es un género de música popular que tuvo su origen a finales de los años 1950'),
(5, 'Rock', 'El rock es un amplio género de música popular originado como «rock and roll» a principios de la década de 1950 en Estados Unidos'),
(6, 'Reguetón ', 'El reguetón es un género musical​ que se deriva del reggae en español que es a su vez un subgénero del dancehall, así como elementos principalmente del hip hop y la música latina. '),
(8, 'Cumbia Villera', 'La cumbia villera es un subgénero de cumbia nacida en las zonas marginales o villas miseria, que tuvo sus inicios aproximadamente en el año 1997 en Argentina.'),
(9, 'Cuarteto', 'El cuarteto característico, o simplemente cuarteto, es un género de música popular oriundo de la ciudad de Córdoba (Argentina). Se caracteriza por un ritmo alegre y activo.');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id_user` int NOT NULL,
  `user` varchar(100) COLLATE utf8_spanish_ci NOT NULL,
  `pass` varchar(100) COLLATE utf8_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id_user`, `user`, `pass`) VALUES
(1, 'dbuser', '5e13f5f57d9792d3b38d5f3795e15d0b'),
(3, 'dbuser2', '5e13f5f57d9792d3b38d5f3795e15d0b'),
(4, 'dbuser1', 'a4560d55b8a766f32e741daccbd73e9e'),
(5, 'dbuser23', 'b50a04b14c3ebdb66427e73ce64b9ee6');

-- --------------------------------------------------------

--
-- Estructura Stand-in para la vista `vCanciones`
-- (Véase abajo para la vista actual)
--
CREATE TABLE `vCanciones` (
`id_cancion` int
,`id_artista` int
,`id_genero` int
,`nombreCancion` varchar(200)
,`descripcion` varchar(500)
,`nombreArtista` varchar(200)
,`id_img` varchar(100)
,`nombreGenero` varchar(100)
);

-- --------------------------------------------------------

--
-- Estructura para la vista `vCanciones`
--
DROP TABLE IF EXISTS `vCanciones`;

CREATE ALGORITHM=MERGE DEFINER=`reactdbuser`@`localhost` SQL SECURITY DEFINER VIEW `vCanciones`  AS SELECT `canciones`.`id_cancion` AS `id_cancion`, `artistas`.`id_artista` AS `id_artista`, `generos`.`id_genero` AS `id_genero`, `canciones`.`nombre` AS `nombreCancion`, `canciones`.`descripcion` AS `descripcion`, `artistas`.`nombre` AS `nombreArtista`, `artistas`.`id_img` AS `id_img`, `generos`.`nombre` AS `nombreGenero` FROM ((`canciones` join `artistas` on((`canciones`.`id_artista` = `artistas`.`id_artista`))) join `generos` on((`canciones`.`id_genero` = `generos`.`id_genero`))) ;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `artistas`
--
ALTER TABLE `artistas`
  ADD PRIMARY KEY (`id_artista`);

--
-- Indices de la tabla `canciones`
--
ALTER TABLE `canciones`
  ADD PRIMARY KEY (`id_cancion`),
  ADD KEY `id_artista` (`id_artista`),
  ADD KEY `id_genero` (`id_genero`);

--
-- Indices de la tabla `generos`
--
ALTER TABLE `generos`
  ADD PRIMARY KEY (`id_genero`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id_user`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `artistas`
--
ALTER TABLE `artistas`
  MODIFY `id_artista` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT de la tabla `canciones`
--
ALTER TABLE `canciones`
  MODIFY `id_cancion` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=38;

--
-- AUTO_INCREMENT de la tabla `generos`
--
ALTER TABLE `generos`
  MODIFY `id_genero` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id_user` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `canciones`
--
ALTER TABLE `canciones`
  ADD CONSTRAINT `id_artista` FOREIGN KEY (`id_artista`) REFERENCES `artistas` (`id_artista`) ON DELETE RESTRICT,
  ADD CONSTRAINT `id_genero` FOREIGN KEY (`id_genero`) REFERENCES `generos` (`id_genero`) ON DELETE RESTRICT ON UPDATE RESTRICT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
