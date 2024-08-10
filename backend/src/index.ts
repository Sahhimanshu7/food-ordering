import express, { Request, Response} from "express";
import cors from "cors";
import "dotenv/config";

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT;

app.get("/test", async(req: Request, res: Response) => {
    res.json({ message: "Hello!" })
});

app.listen(PORT, () => {
    console.log("Server started at PORT: " + PORT);
})