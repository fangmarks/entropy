import { MongoClient, Bson } from '../../deps.ts'
import CONFIG from "../../configs.ts";

const client = new MongoClient();
await client.connect(CONFIG.MONGO_STRING);

interface ImageSchema {
    _id: { $oid: string };
    file: string;
    ext: string;
    name: string;
}


const db = client.database("entropy");
const images = db.collection<ImageSchema>("images");

export default images