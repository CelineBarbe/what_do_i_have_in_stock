const patternDataMapper = require('../datamapper/patternDataMapper');

const patternController = {
    async findAll(request, response, next) {
        try {
            const sewaddict_id = request.params.id
            
            const patterns = await patternDataMapper.getAllPatterns(sewaddict_id);

            if (!patterns) {
                response.locals.notFound = 'Aucun patron';
                next();
                return;
            } else {
                response.json({ patterns });
            }
        } catch (error) {
            next(error);
        }
    },
}

module.exports = patternController;