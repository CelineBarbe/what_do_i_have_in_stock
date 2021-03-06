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
    },
    async createThread(picture, brand, color, type, reference, stock, sewaddict_id) {

    const result = await client.query(`INSERT INTO sewing_thread(picture, brand, color, type, reference, stock, sewaddict_id) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *`, [picture, brand, color, type, reference, stock, sewaddict_id]);
        
    return result.rows[0];
    },
    async deleteThread(id, sewaddict_id) {
        const thread = await client.query(`SELECT * FROM sewing_thread WHERE id = $1 AND sewaddict_id = $2`, [id, sewaddict_id]);

        if (thread.rowCount == 0) {
            return null
        } else {
            const deleteThread = await client.query(`DELETE FROM sewing_thread WHERE id = $1 AND sewaddict_id = $2`, [id, sewaddict_id]);
            return deleteThread.rowCount;
        }
    },
    async updateThread(id, picture, brand, color, type, reference, stock, sewaddict_id) {
        const thread = await client.query(`SELECT * FROM sewing_thread WHERE id = $1 AND sewaddict_id = $2`, [id, sewaddict_id]);

        if (thread.rowCount == 0) {
            return null;
        } 
        const updateThread = await client.query(`UPDATE sewing_thread SET picture = $1, brand = $2, color = $3, type = $4, reference = $5, stock = $6, sewaddict_id = $7 WHERE id = $8 RETURNING *`, [picture, brand, color, type, reference, stock, sewaddict_id, id]);

        return updateThread.rowCount
    }
    
};

module.exports = threadDataMapper;