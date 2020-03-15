'use strict';
module.exports = (sequelize, DataTypes) => {
    const Post = sequelize.define('Post', {
        title: DataTypes.STRING,
        description: DataTypes.TEXT,
        author: DataTypes.STRING
    }, {});
    Post.associate = function(models) {
        // associations can be defined here
        //TODO READ
    };
    return Post;
};