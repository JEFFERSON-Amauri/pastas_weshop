module.exports = (sequelize, DataTypes) => {
    const contato = sequelize.define(
        "contato", {
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
            "telefone":{
                type: DataTypes.STRING,
                allowNull: false
            },
            "email": {
                type: DataTypes.STRING,
                allowNull: false
            },
            "mensagem": {
                type: DataTypes.STRING,
                allowNull: false
            },
            
        },
        {
            "tableName": "usuario",
            "timestamps": true 
            // createdAt e updatedAt
        }
    );

    return contato;
}


