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
    async create(request, response, next) {
        try {
            const picture = request.body.picture;
            const brand = request.body.brand;
            const name = request.body.name;
            const type = request.body.type;
            const target = request.body.target;
            const sewaddict_id = request.params.id;
      
            const savedPattern = await patternDataMapper.createPattern(picture, brand, name, type, target, sewaddict_id);

            if (!savedPattern) {
                response.status(404);
                console.log("Patron non sauvegardé");
                next();
                return;
            } else {
                response.json({ savedPattern })
            }
        } catch (error) {
            next(error);
        }
    },
    async delete(request, response, next) {
        try {
            const sewaddict_id = request.params.id;
            const id = request.params.patternId;

            const deletedPattern = await patternDataMapper.deletePattern(id, sewaddict_id);

            if (!deletedPattern) {
                next();
                return;
            } else {
                response.json({ message: 'Patron supprimé' });
            }
        } catch (error) {
            next(error);
        }
    }
}

module.exports = patternController;