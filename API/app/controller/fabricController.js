const fabricDataMapper = require('../datamapper/fabricDataMapper');

const fabricController = {
    async findAll(request, response, next) {
        try {
            const sewaddict_id = request.params.id
            
            const fabrics = await fabricDataMapper.getAllFabrics(sewaddict_id);

            if (!fabrics) {
                response.locals.notFound = 'Aucun tissu';
                next();
                return;
            } else {
                response.json({ fabrics });
            }
        } catch (error) {
            next(error);
        }
    },
}

module.exports = fabricController;