

const meet = (req, res)=>{
    const id = req.params.id;
    res.send(`Hello ${id}`);
}

export default meet;