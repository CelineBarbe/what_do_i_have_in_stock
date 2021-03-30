const client = require('./client');

const fabricDataMapper = {
    async getAllFabrics(sewaddict_id) {
        const result = await client.query(`
        SELECT * FROM fabric WHERE sewaddict_id = $1`, [sewaddict_id]);

        if (result.rowCount == 0) {
            return null;
        } else {
            return result.rows
        };
    },
    async getFabricById(id, sewaddict_id) {
        const result = await client.query(`
        SELECT * FROM fabric WHERE id = $1 AND sewaddict_id = $2`, [id, sewaddict_id]);

        if (result.rowCount == 0) {
            return null;
        } else {
            return result.rows[0];
        };
    },
    async createFabric(picture, width, length, type, notice, color, sewaddict_id) {

        const result = await client.query(`INSERT INTO fabric(picture, width, length, type, notice, color, sewaddict_id) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *`, [picture, width, length, type, notice, color, sewaddict_id]);
        
        return result.rows[0];
    },
    async deleteFabric(id, sewaddict_id) {
        const fabric = await client.query(`SELECT * FROM fabric WHERE id = $1 AND sewaddict_id = $2`, [id, sewaddict_id]);

        if (fabric.rowCount == 0) {
            return null
        } else {
            const deleteFabric = await client.query(`DELETE FROM fabric WHERE id = $1 AND sewaddict_id = $2`, [id, sewaddict_id]);
            return deleteFabric.rowCount;
        }
    },
    async updateFabric(id, picture, width, length, type, notice, color, sewaddict_id) {
        const fabric = await client.query(`SELECT * FROM fabric WHERE id = $1 AND sewaddict_id = $2`, [id, sewaddict_id]);

        if (fabric.rowCount == 0) {
            return null;
        } 
        const updateFabric = await client.query(`UPDATE fabric SET picture = $1, width = $2, length = $3, type = $4, notice = $5, color = $6, sewaddict_id = $7 WHERE id = $8 RETURNING *`, [picture, width, length, type, notice, color, sewaddict_id, id]);

        return updateFabric.rowCount
    }
};

module.exports = fabricDataMapper