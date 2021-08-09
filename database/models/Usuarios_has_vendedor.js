module.exports = (sequelize, DataTypes) => {
    const contato = sequelize.define(
        "usuarios_has_vendedor",
        {
             usuario_id:{
                       type:Sequelize.INTEGER,
                        primaryKey: true,
                        allowNull: true,
                        autoIncremet: true
             },
 
             vendedor_id:{
                      type:Sequelize.INTEGER,
                      allowNull:false
             }
         },
         {
            "tableName": "alunos",
            "timestamps": true 
            
          }
         );

return usuarios_has_vendedor;
}