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
}

module.exports = threadController;