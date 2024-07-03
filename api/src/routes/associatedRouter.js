const associatedRouter = require('express').Router()

// ticketRouter.get( '/ticket' , async ( req, res ) => {
//     try {
//         let allTicket = await getAllTicket();
//         allTicket ? res.status(200).json(allTicket) : res.status(400).send("failure")
//     } catch (e) {
//         console.log( "error en ruta get tickets" , e.message)
//     }
// })


module.exports = associatedRouter;