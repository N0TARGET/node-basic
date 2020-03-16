const database = require('../models/post');

class PostDAO {

    async getAll() {
        return await database.find();
    }

    insert(data) {
        return database.create(data);
    }

    getById(identifier) {
        return database.findById(identifier);
    }

    update(data) {
        return database.update(
            {value: data.value},
            {where: {id: data.id}}
        );
    }

    remove(identifier) {
        return database.destroy({
            where: {id: identifier}
        });
    }
}

module.exports = new PostDAO();