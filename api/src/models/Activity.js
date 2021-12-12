const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "activity",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      difficulty: {
        type: DataTypes.STRING,
        // type: DataTypes.ENUM("1", "2", "3", "4", "5"),
      },
      duration: {
        // entre 1 y 5
        type: DataTypes.STRING,
      },
      season: {
        // verano, otoño, invierno y/o primavera)
        type: DataTypes.ARRAY(DataTypes.STRING),
        // type: DataTypes.ENUM("Summer", "Winter", "Autumn", "Spring"),
      },
    },
    {
      timestamps: false,
    }
  );
};
