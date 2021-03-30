const client = require('./client');

const patternDataMapper = {
    async getAllPatterns(sewaddict_id) {
        const result = await client.query(`
        SELECT * FROM sewing_pattern WHERE sewaddict_id = $1`, [sewaddict_id]);

        if (result.rowCount == 0) {
            return null;
        } else {
            return result.rows
        };
    },
    async getPatternById(id, sewaddict_id) {
        const result = await client.query(`
        SELECT * FROM sewing_pattern WHERE id = $1 AND sewaddict_id = $2`, [id, sewaddict_id]);

        if (result.rowCount == 0) {
            return null;
        } else {
            return result.rows[0];
        };
    },
    async createPattern(picture, brand, name, type, target, sewaddict_id) {

        const result = await client.query(`INSERT INTO sewing_pattern(picture, brand, name, type, target, sewaddict_id) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`, [picture, brand, name, type, target, sewaddict_id]);
        
        return result.rows[0];
    },
    async deletePattern(id, sewaddict_id) {
        const pattern = await client.query(`SELECT * FROM sewing_pattern WHERE id = $1 AND sewaddict_id = $2`, [id, sewaddict_id]);

        if (pattern.rowCount == 0) {
            return null
        } else {
            const deletePattern = await client.query(`DELETE FROM sewing_pattern WHERE id = $1 AND sewaddict_id = $2`, [id, sewaddict_id]);
            return deletePattern.rowCount;
        }
    },
    async updatePattern(id, picture, brand, name, type, target, sewaddict_id) {
        const pattern = await client.query(`SELECT * FROM sewing_pattern WHERE id = $1 AND sewaddict_id = $2`, [id, sewaddict_id]);

        if (pattern.rowCount == 0) {
            return null;
        } 
        const updatePattern = await client.query(`UPDATE sewing_pattern SET picture = $1, brand = $2, name = $3, type = $4, target = $5, sewaddict_id = $6 WHERE id = $7 RETURNING *`, [picture, brand, name, type, target, sewaddict_id, id]);

        return updatePattern.rowCount
    }
};

module.exports = patternDataMapper;