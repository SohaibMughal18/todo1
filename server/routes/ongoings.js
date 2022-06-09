const router = require('express').Router();
const {Todo} = require('../models/todo');
const {Ongo} = require('../models/ongoing');




const Fawn = require('fawn');
Fawn.init('mongodb://saibe:Meeaao1801@ac-7w6sgrv-shard-00-00.kqo2bpl.mongodb.net:27017,ac-7w6sgrv-shard-00-01.kqo2bpl.mongodb.net:27017,ac-7w6sgrv-shard-00-02.kqo2bpl.mongodb.net:27017/?ssl=true&replicaSet=atlas-13aje7-shard-0&authSource=admin&retryWrites=true&w=majority');

router.post ("/", async(req , res)=>{
    const todo = await Todo.findById(req.body._id);
    if (!todo) return res.status(400).send('Invalid Customer');
    
    let item = new Ongo({
        _id:todo._id,
        item:todo.item
    })
    try{
        new Fawn.Task()
        .save("ongos" , item )
        .remove('todos', {_id:todo._id}) 
         
         .run();

      res.send(item);
        
}
    catch(error){
        res.json(error)
     }
})

router.get ("/", async(req , res)=>{
    try{
        const allItem=  await Ongo.find({});
        res.status(200).json(allItem)
    }
    catch(error){
        res.json(error)
     }
})

router.delete ("/:id", async(req , res)=>{
    try{
        const upItem=  await Todo.findByIdAndDelete(req.params.id );

        res.status(200).json("Item Deleted ")
    }
    catch(error){
        res.json(error)
     }
})





module.exports= router;