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
    }
};

module.exports = patternDataMapper;