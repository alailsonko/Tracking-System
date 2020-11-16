import express, { Application, Request, Response } from 'express';

const app: Application = express();

app.get("/", (req: Request, res: Response ) => {
   

   return  res.status(200).json({ message: "hello LUDKA 💘 " })
})

const PORT = process.env.PORT || 3333

app.listen(PORT, () => {
    console.log("listening on port 3333");
    
})