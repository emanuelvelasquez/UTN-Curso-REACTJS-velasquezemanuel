var pool = require("./db");
var md5 = require("md5");
//USUARIO
//get usuario para login
async function getUserByNameAndPassword(user, password) {
  try {
    var query = "select * from usuarios where user = ? and pass = ? limit 1";
    var rows = await pool.query(query, [user, md5(password)]);
    return rows[0];
  } catch (error) {
    throw error;
  }
}
//ver si existe un usario
async function getUser(user) {
  try {
    var query = "select * from usuarios where user= ?";
    var rows = await pool.query(query, [user]);
    return rows;
  } catch (error) {
    throw error;
  }
}
//insert usuario nuevo
async function insertUser(userNew) {
  try {
    var query = "insert into usuarios set ?";
    userNew.pass = md5(userNew.pass);
    var row = await pool.query(query, [userNew]);
    return row;
  } catch (error) {
    throw error;
  }
}
//CANCIONES //
//lista de canciones
async function getListaCanciones() {
  try {
    var query = "select * from canciones";
    var rows = await pool.query(query);
    return rows;
  } catch (error) {
    throw error;
  }
}
//get cancion
async function getCancion(id_cancion) {
  try {
    var query = "select * from canciones where id_cancion = ?";
    var rows = await pool.query(query, [id_cancion]);
    return rows[0];
  } catch (error) {
    throw error;
  }
}
//insert cancion
async function insertCancion(cancion) {
  try {
    var query = "insert into canciones set ?";
    var row = await pool.query(query, [cancion]);
    return row;
  } catch (error) {
    throw error;
  }
}
//update canciones
async function updateCancion(cancion, id) {
  try {
    var query = "update canciones set ? where id_cancion = ?";
    var row = await pool.query(query, [cancion, id]);
    return row;
  } catch (error) {
    throw error;
  }
}
//delete cancion
async function deleteCancion(id) {
  try {
    var query = "delete from canciones where id_cancion = ?";
    var row = await pool.query(query, [id]);
    return row;
  } catch (error) {
    throw error;
  }
}
//ARTISTA //
//lista de artissta
async function getListaArtitas() {
  try {
    var query = "select * from artistas";
    var rows = await pool.query(query);
    return rows;
  } catch (error) {
    throw error;
  }
}
//get artista
async function getArtista(id_artista) {
  try {
    var query = "select * from artistas where id_artista = ?";
    var rows = await pool.query(query, [id_artista]);
    return rows[0];
  } catch (error) {
    throw error;
  }
}
//insert artita
async function insertArtista(artista) {
  try {
    var query = "insert into artistas set ?";
    var row = await pool.query(query, [artista]);
    return row;
  } catch (error) {
    throw error;
  }
}
//update artita
async function updateArtista(artista, id) {
  try {
    var query = "update artistas set ? where id_artista = ?";
    var row = await pool.query(query, [artista, id]);
    return row;
  } catch (error) {
    throw error;
  }
}

async function deleteArtista(id) {
  try {
    var query = "delete from artistas where id_artista = ?";
    var row = await pool.query(query, [id]);
    return row;
  } catch (error) {
    throw error;
  }
}
//GENERO //
//lista de generos
async function getListaGeneros() {
  try {
    var query = "select * from generos";
    var rows = await pool.query(query);
    return rows;
  } catch (error) {
    throw error;
  }
}
//get
async function getGenero(id_genero) {
  try {
    var query = "select * from generos where id_genero = ?";
    var rows = await pool.query(query, [id_genero]);
    return rows[0];
  } catch (error) {
    throw error;
  }
}
//insert
async function insertGenero(genero) {
  try {
    var query = "insert into generos set ?";
    var row = await pool.query(query, [genero]);
    return row;
  } catch (error) {
    throw error;
  }
}
//update genero
async function updateGenero(genero, id) {
  try {
    var query = "update generos set ? where id_genero = ?";
    var row = await pool.query(query, [genero, id]);
    return row;
  } catch (error) {
    throw error;
  }
}
async function deleteGenero(id) {
  try {
    var query = "delete from generos where id_genero = ?";
    var row = await pool.query(query, [id]);
    return row;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  getUserByNameAndPassword,
  getUser,
  insertUser,
  getListaCanciones,
  getCancion,
  insertCancion,
  updateCancion,
  deleteCancion,
  getListaArtitas,
  getArtista,
  insertArtista,
  updateArtista,
  deleteArtista,
  getListaGeneros,
  getGenero,
  insertGenero,
  updateGenero,
  deleteGenero,
};
