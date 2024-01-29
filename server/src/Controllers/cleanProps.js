const cleanProps = (arr) => {
  const clean = arr.map((property) => {
    return {
      id: property.id,
      name: property.name.forename,
      surname: property.name.surname,
      description: property.description,
      image: property.image.url,
      nationality: property.nationality,
      dateOfBirth: property.dob,
      teams: property.teams,
      createdInDataBase: false,
    };
  });
  return clean;
};

module.exports = cleanProps;

/*
-  ID (deben ser distintos a los que vienen de la API). \*
-  Nombre. \*
-  Apellido. \*
-  Descripción. \*
-  Imagen. \*
-  Nacionalidad. \*
-  Fecha de Nacimiento.

*/
