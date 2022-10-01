module.exports = (sequelize, type) => {
    return sequelize.define('blog', {
        id: {
          type: type.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        title: type.STRING,
        description: type.STRING,
        userID : {
            type : type.INTEGER,
            references: {
              model: 'users',
              key: 'id'
            }
        }
    })
}