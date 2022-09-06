import { pool } from '../db.js';

export const taskId = async (req, res) => {
    try {
        const { id } = req.params;
        const [result] = await pool.query('SELECT * FROM task WHERE id = ' + id);
        console.table(result[0]);

        if(result.length == 0)
            return res.status(404).json({ error: 'Task not found' });

        res.json(result[0])
    } catch (error) {
        res.status(500).json({message: error.message})
    }
    
}

export const tasks = async (req, res) => {
    try {
        const [result] = await pool.query('SELECT * FROM task')
        console.table(result);
        res.json(result)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
    
}

export const createTask = async (req, res) => {
    try {
        const { title, description } = req.body;
        const [result] = await pool.query('INSERT INTO task (title, description) VALUES (?, ?)', [ title, description ])
        res.json(
            {
                id: result.insertId,
                title: title,
                description: description,
            }
        )
    } catch (error) {
        res.status(500).json({message: error.message})
    }

}

export const updateTask = async (req, res) => {
    try {
        const id = req.params.id
        const result = await pool.query('UPDATE task SET ? WHERE id = ?', [req.body, id])
        res.json(result[0])
    } catch (error) {
        return res.status(500).json({message: error.message})
    }

}

export const deleteTask = async (req, res) => {
    try {
        const [result] = await pool.query('DELETE FROM task WHERE id = ' + req.params.id);
        console.log(result)
    
        result.affectedRows === 0 ? res.status(404).json({error: 'Task not found'}) : res.sendStatus(204)        
    } catch (error) {
        return res.status(500).json({message: error.message})
    }

}