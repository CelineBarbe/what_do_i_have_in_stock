const threadDataMapper = require('../datamapper/threadDataMapper');

const threadController = {
    async findAll(request, response, next) {
        try {
            const sewaddict_id = request.params.id
            
            const threads = await threadDataMapper.getAllThreads(sewaddict_id);

            if (!threads) {
                response.status(404);
                next();
                return;
            } else {
                response.json({ threads });
            }
        } catch (error) {
            next(error);
        }
    },
    async findById(request, response, next) {
        try {
            const sewaddict_id = request.params.id;
            const id = request.params.threadId;

            const threads = await threadDataMapper.getThreadById(id, sewaddict_id);

            if (!threads) {
                response.status(404);
                next();
                return;
            } else {
                response.json({ threads });
            }
        } catch (error) {
            next(error);
        }
    },
    async create(request, response, next) {
        try {
            const picture = request.body.picture;
            const brand = request.body.brand;
            const color = request.body.color;
            const type = request.body.type;
            const reference = request.body.reference;
            const stock = request.body.stock;
            const sewaddict_id = request.params.id;

            const savedThread = await threadDataMapper.createThread(picture, brand, color, type, reference, stock, sewaddict_id);

            if (!savedThread) {
                response.status(404);
                console.log("Fil non sauvegardé");
                next();
                return;
            } else {
                response.json({ savedThread })
            }
        } catch (error) {
            next(error);
        }
    },
    async delete(request, response, next) {
        try {
            const sewaddict_id = request.params.id;
            const id = request.params.threadId;

            const deletedThread = await threadDataMapper.deleteThread(id, sewaddict_id);

            if (!deletedThread) {
                next();
                return;
            } else {
                response.json({ message: 'Fil supprimé' });
            }
        } catch (error) {
            next(error);
        }
    },
    async update(request, response, next) {
        try {
            const picture = request.body.picture;
            const brand = request.body.brand;
            const color = request.body.color;
            const type = request.body.type;
            const reference = request.body.reference;
            const stock = request.body.stock;
            const sewaddict_id = request.params.id;
            const id = request.params.threadId;

            const updatedThread = await threadDataMapper.updateThread(id, picture, brand, color, type, reference, stock, sewaddict_id);

            if (!updatedThread) {
                response.status(404);
                console.log("Fil non sauvegardé");
                next();
                return;
            } else {
                response.json({ updatedThread });
            } 
        } catch (error) {
            next(error);
        }
    }
}

module.exports = threadController;