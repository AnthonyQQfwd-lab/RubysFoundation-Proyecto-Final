/* CRUD - Dog */
const API_URL = "https://api.thedogapi.com/v1/breeds";
const API_KEY = "live_BYoNBDxK5BqkHD5mpI6FgQQwymhhxdY6EwxlUcUpmAOXSagJGHjImR3xNGlUN0CO";

// (GET) - todas las razas de perros
async function getDogs() {
  try {
    const peticion = await fetch("/api/v1/breeds", {
      method: "GET",
      headers: {
        "x-api-key": API_KEY,
        "Content-Type": "application/json",
      },
    });

    if (!peticion.ok) {
      throw new Error("Error getting dogs");
    }

    const dogs = await peticion.json();
    return dogs;
  } catch (error) {
    console.error("There is a problem getting dogs", error);
    throw error;
  }
}

// (GET) - buscar una raza de perro por nombre
async function getDog(name) {
  try {
    const peticion = await fetch(`/api/v1/breeds/search?q=${name}`, {
      method: "GET",
      headers: {
        "x-api-key": API_KEY,
        "Content-Type": "application/json",
      },
    });

    if (!peticion.ok) {
      throw new Error("Error getting dog");
    }

    const dog = await peticion.json();
    return dog;
  } catch (error) {
    console.error("There is a problem getting dog", error);
    throw error;
  }
}


// (GET) - todas las razas de gatos
async function getCats() {
  try {
    const peticion = await fetch("https://api.thecatapi.com/v1/breeds", {
      method: "GET",
      headers: {
        "x-api-key": "live_NV4f2PdxQSGdKXFnVxfij3yBpZsdUrtcluKlWLa7tDo2Hmv2DmyQ6P9O0Bgk4YqX",
        "Content-Type": "application/json",
      },
    });

    if (!peticion.ok) {
      throw new Error("Error getting dogs");
    }

    const cats = await peticion.json();
    return cats;
  } catch (error) {
    console.error("There is a problem getting dogs", error);
    throw error;
  }
}

// (GET) - buscar una raza de gatos por nombre
async function getCat(name) {
  try {
    const peticion = await fetch(`https://api.thecatapi.com/v1/search?q=${name}`, {
      method: "GET",
      headers: {
        "x-api-key": "live_NV4f2PdxQSGdKXFnVxfij3yBpZsdUrtcluKlWLa7tDo2Hmv2DmyQ6P9O0Bgk4YqX",
        "Content-Type": "application/json",
      },
    });

    if (!peticion.ok) {
      throw new Error("Error getting dog");
    }

    const cat = await peticion.json();
    return cat;
  } catch (error) {
    console.error("There is a problem getting dog", error);
    throw error;
  }
}

export { getDogs, getDog, getCats, getCat };