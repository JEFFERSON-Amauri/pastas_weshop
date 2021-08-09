module.exports = (sequelize, DataTypes) => {
    const usuario = sequelize.define(
        "usuario",
        {
            "id": {
                primaryKey: true,
                autoIncrement: true,
                type: DataTypes.INTEGER,
                allowNull: false
            },
            "nome": {
                type: DataTypes.STRING,
                allowNull: false
            },
            "cpf": {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            "email": {
                type: DataTypes.STRING,
                allowNull: false
            }
        },
        {
            "tableName": "usuario",
            "timestamps": true 
            // createdAt e updatedAt
        }
    );

    return usuario;
}


