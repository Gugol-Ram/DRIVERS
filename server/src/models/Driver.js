const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "Driver",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4, //para que se genere automaticamente los ID.
        allowNull: false,
        primaryKey: true,
        unique: true,
      },
      surname: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      image: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      nationality: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      dateOfBirth: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      createdInDataBase: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  );
};

/*
-  ID (deben ser distintos a los que vienen de la API). \*
-  Nombre. \*
-  Apellido. \*
-  Descripción. \*
-  Imagen. \*
-  Nacionalidad. \*
-  Fecha de Nacimiento.

*/
