import urlcat from "https://deno.land/x/urlcat/src/index.ts";
import Aqua from "https://deno.land/x/aqua/mod.ts";
import * as mutt from "https://deno.land/x/mutevents/mod.ts";
import { customAlphabet } from "https://deno.land/x/nanoid/customAlphabet.ts";
import { Bson, MongoClient } from "https://deno.land/x/mongo@v0.22.0/mod.ts";

function nanoid(length: number) {
    return customAlphabet("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890_", length)()
}

export {
    Aqua,
    mutt,
    nanoid,
    Bson, MongoClient,
    urlcat,
};
