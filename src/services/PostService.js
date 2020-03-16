// const dao = require('../postgres/dao/PostDAO');
const dao = require('../mongo/dao/PostDAO');

class PostService {

    getAll() {
        return dao.getAll();
    }

    insert(post) {

        return dao.insert(post);
    }

    getById(identifier) {
        return dao.getById(identifier);
    }

    update(post) {
        return dao.update(post);
    }

    remove(identifier) {
        return dao.remove(identifier);
    }
}

module.exports = new PostService();
