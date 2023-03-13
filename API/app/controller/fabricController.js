const fabricDataMapper = require('../datamapper/fabricDataMapper');

const fabricController = {
    async findAll(request, response, next) {
        try {
            const sewaddict_id = request.params.id;
            
            const fabrics = await fabricDataMapper.getAllFabrics(sewaddict_id);

            if (!fabrics) {
                response.status(404);
                console.log("Tissu non trouvé");
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
                console.log("Tissu non trouvé");
                next();
                return;
            } else {
                response.json({ fabrics });
            }
        } catch (error) {
            next(error);
        }
    },
    async create(request, response, next) {
        try {
            const picture = request.body.picture;
            const width = request.body.width;
            const length = request.body.length;
            const type = request.body.type;
            const notice = request.body.notice;
            const color = request.body.color;
            const sewaddict_id = request.params.id;
      
            const savedFabric = await fabricDataMapper.createFabric(picture, width, length, type, notice, color, sewaddict_id);

            if (!savedFabric) {
                response.status(404);
                console.log("Tissu non sauvegardé");
                next();
                return;
            } else {
                response.json({ savedFabric })
            }
        } catch (error) {
            next(error);
        }
    },
    async delete(request, response, next) {
        try {
            const sewaddict_id = request.params.id;
            const id = request.params.fabricId;

            const deletedFabric = await fabricDataMapper.deleteFabric(id, sewaddict_id);

            if (!deletedFabric) {
                next();
                return;
            } else {
                response.json({ message: 'Tissu supprimé' });
            }
        } catch (error) {
            next(error);
        }
    },
    async update(request, response, next) {
        try {
            const picture = request.body.picture;
            const width = request.body.width;
            const length = request.body.length;
            const type = request.body.type;
            const notice = request.body.notice;
            const color = request.body.color;
            const sewaddict_id = request.params.id;
            const id = request.params.fabricId;

            const updatedFabric = await fabricDataMapper.updateFabric(id, picture, width, length, type, notice, color, sewaddict_id);

            if (!updatedFabric) {
                response.status(404);
                console.log("Tissu non sauvegardé");
                next();
                return;
            } else {
                response.json({ updatedFabric });
            } 
        } catch (error) {
            next(error);
        }
    }
}

module.exports = fabricController;