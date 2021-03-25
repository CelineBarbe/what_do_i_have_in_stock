const threadDataMapper = require('../datamapper/threadDataMapper');

const threadController = {
    async findAll(request, response, next) {
        try {
            const sewaddict_id = request.params.id
            
            const threads = await threadDataMapper.getAllThreads(sewaddict_id);

            if (!threads) {
                response.locals.notFound = 'Aucun Fil';
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