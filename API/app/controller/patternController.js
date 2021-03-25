const patternDataMapper = require('../datamapper/patternDataMapper');

const patternController = {
    async findAll(request, response, next) {
        try {
            const sewaddict_id = request.params.id
            
            const patterns = await patternDataMapper.getAllPatterns(sewaddict_id);

            if (!patterns) {
                response.status(404);
                next();
                return;
            } else {
                response.json({ patterns });
            }
        } catch (error) {
            next(error);
        }
    },
    async findById(request, response, next) {
        try {
            const sewaddict_id = request.params.id;
            const id = request.params.patternId;

            const patterns = await patternDataMapper.getPatternById(id, sewaddict_id);

            if (!patterns) {
                response.status(404);
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