const fabricDataMapper = require('../datamapper/fabricDataMapper');

const fabricController = {
    async findAll(request, response, next) {
        try {
            const sewaddict_id = request.params.id;
            
            const fabrics = await fabricDataMapper.getAllFabrics(sewaddict_id);

            if (!fabrics) {
                response.status(404);
                next();
                return;
            } else {
                response.json({ fabrics });
            }
        } catch (error) {
            next(error);
        }
    },

    async findById(request, response, next) {
        try {
            const sewaddict_id = request.params.id;
            const id = request.params.fabricId;

            const fabrics = await fabricDataMapper.getFabricById(id, sewaddict_id);

            if (!fabrics) {
                response.status(404);
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