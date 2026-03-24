import pool from "../configs/database.config.js";

export const getAlltariffs = async (req, res) => {
    const {rows: tariffs} = await pool.query ("SELECT * FROM tariffs;")

    res.json({
        success: true,
        data: tariffs,
    });
};


export const  createTariffs = async ( req,res)=>{
    const {price, position,consert_id}=req.body;
    const {rows: data} = await pool.query(
        `INSERT INTO tariffs (price, position,consert_id) VALUES ($1, $2, $3) RETURNING * `,
       [price,position,consert_id]
    );
    

    res.json({
        success: true,
        data: data,
    });
};