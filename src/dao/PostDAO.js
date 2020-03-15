const database = require('../models').Post;

class PostDAO {

    getAll() {
        return database.findAll();
    }

    insert(data) {
        return database.create(data);
    }

    getById(identifier) {
        return database.findByPk(identifier);
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