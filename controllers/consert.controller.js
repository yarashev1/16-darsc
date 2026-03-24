import pool from "../configs/database.config.js";

export const GetAllConserts =  async(req,res) =>{
    const{rows:consert}= await pool.query("SELECT * FROM conserts;")
        

    res.json({
        success: true,
        data : consert
    });
};

export const CreateConserts = async(req,res)=>{
    const{name,date,size,location}=req.body;
    const{rows: data}=await pool.query(
        `INSERT INTO conserts (name,date,size,location) VALUES ($1, $2, $3, $4) RETURNING * `,
    [name,date,size,location]
    );
    
    res.json({
        success:true,
        data,
    });
};

export const UpdateConserts = async(req,res)=>{
    const{name,date,size,location,id}=req.body;
    await pool.query(
        `UPDATE conserts SET name=$1, date=$2, size=$3, location=$4 WHERE id=$5`,
        [name,date,size,location,id],
    );
    res.status(204).send();
};

export const deleteConserts = async (req,res) => {
    const{id} = req.params;
    await pool.query( `DELETE from conserts WHERE id=$1`,
        [1]
     );
     res.status(204).send();
}