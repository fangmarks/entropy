import parser from "https://deno.land/x/yargs_parser/deno.ts";
const ENV = parser(Deno.args)
export default {
  ENTROPY_IMAGES: ENV.ENTROPY_IMAGES || Deno.env.get("ENTROPY_IMAGES") || "./EntropyImages",
  MONGO_STRING: ENV.MONGO_STRING || Deno.env.get("MONGO_STRING") || "mongodb://localhost:27017"
};