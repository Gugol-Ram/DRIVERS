const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "Teams",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,

        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },

    {
      timestamps: false, //paraque no agregue los registros de fechay hora en que se modifican.
    }
  );
};

/*
-  ID. \*
-  Nombre. \*
*/
