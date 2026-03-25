import pool from "../configs/database.config.js";

export const getAlltariffs = async (req, res) => {
    const {rows: tariffs} = await pool.query ("SELECT * FROM tariffs;")

    res.json({
        success: true,
        data: tariffs,
    });
};


export const  createTariffs = async ( req,res)=>{
    const {price, position, consert_id} = req.body;
    const {rows: data} = await pool.query(
        `INSERT INTO tariffs (price, position,consert_id) VALUES ($1, $2, $3) RETURNING * `,
       [price,position,consert_id],
    );
    

    res.json({
        success: true,
        data: data,
    });
};

export const updatetariffs = async (req, res) => {
    const {id}=req.params
    const {price, position,consert_id}=req.body;
    await pool.query(
        `UPDATE tariffs SET price=$1, position=$2, consert_id=$3 WHERE id=$4 `,
        [price,position,consert_id,id],

    );
    res.status(204).send();
};


export const deletetariffs = async (req,res) => {
    const {id}= req.params;
    await pool.query(
        `DELETE from tariffs WHERE id = $1`,
        [id]
    );
    res.status(204).send();
};