import pool  from "../configs/database.config.js";

export const getAlltickets = async (req,res) => {
    const {rows: tickets} = await pool.query (
    `SELECT u.name AS consert_name, c.date, t.position, t.price, tc.created_at
    FROM tickets AS tc
    JOIN users AS  u ON tc.user_id = u.id
    JOIN tariffs AS t ON tc.tariff_id = t.id
    JOIN conserts AS c ON c.id = t.consert_id`
    );


    res.json({
        success: true,
        data: tickets,
    });
       
};


export const createTickets = async (req,res) => {
    const {user_id, tariff_id} = req.body;
    const {rows:data} = await pool.query(
        `INSERT INTO tickets (user_id,tariff_id) VALUES ($1, $2) RETURNING * `,
        [user_id, tariff_id]
    );

    res.json({
        success: true,
        data,
    })

};

 export const deleteTickets =  async (req,res)=>{
    const {user_id} = req.params;
    await pool.query(
        ` DELETE from tickets  WHERE user_id = $1`,
        [user_id],
    );
    res.status(204).send();
 };