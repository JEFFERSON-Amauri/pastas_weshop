module.exports = (sequelize, DataTypes) => {
    const produto = sequelize.define(
        "produto", {
            "id": {
                primaryKey: true,
                autoIncrement: true,
                type: DataTypes.INTEGER,
                allowNull: false
            },
            "produto": {
                type: DataTypes.STRING,
                allowNull: false
            },
            "preco":{
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

    return produto;
}


