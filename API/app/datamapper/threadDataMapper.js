const client = require('./client');

const threadDataMapper = {
    async getAllThreads(sewaddict_id) {
        const result = await client.query(`
        SELECT * FROM sewing_thread WHERE sewaddict_id = $1`, [sewaddict_id]);

        if (result.rowCount == 0) {
            return null;
        } else {
            return result.rows
        };
    },
    async getThreadById(id, sewaddict_id) {
        const result = await client.query(`
        SELECT * FROM sewing_thread WHERE id = $1 AND sewaddict_id = $2`, [id, sewaddict_id]);

        if (result.rowCount == 0) {
            return null;
        } else {
            return result.rows[0];
        };
    }
};

module.exports = threadDataMapper;