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
    }
};

module.exports = patternDataMapper;