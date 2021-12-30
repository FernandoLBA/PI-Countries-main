const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "country",
    {
      id: {
        // propiedad cca3 de la api string de 3 digitos.
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
        unique: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      flags: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      continents: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false,
      },
      capital: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false,
      },
      subregion: {
        type: DataTypes.STRING,
      },
      area: {
        type: DataTypes.INTEGER,
      },
      population: {
        type: DataTypes.INTEGER,
      },
      createdInDb: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
    },
    {
      timestamps: false,
    }
  );
};
