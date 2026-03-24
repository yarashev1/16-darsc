import pool from "../configs/database.config.js";

export const getAllUsers = async (req,res)=>{
  const{rows: users} = await pool.query("SELECT * FROM  users;")


  res.json({
    success: true,
    data: users,
  });
};

export const createUser = async (req,res) => {
  const { name , phone, email} = req.body;
  const {rows: data } = await pool.query(
    `INSERT INTO users (name, phone, email) VALUES ($1, $2, $3) RETURNING * `,
    [name,phone,email],
  );

  res.json({
    success: true,
    data,
  });
};

export const updateUser = async(req,res) =>{
  const { name , phone, email,id}=req.body;
  await pool.query(
    `UPDATE users SET name=$1, phone=$2, email=$3 WHERE id=$4`,
    [name,phone,email,id],
  );
  res.status(204).send();
};


export const deleteUser = async (req,res) => {
  const{id}= req.params;
  await pool.query(`DELETE from users WHERE id =$1`,
    [id]
  );
  res.status(204).send();
};