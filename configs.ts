export default {
  ENTROPY_IMAGES: "./EntropyImages" || Deno.env.get("ENTROPY_IMAGES"),
  ENTROPY_DATA: "./EntropyData" || Deno.env.get("ENTROPY_DATA"),
  MONGO_STRING: "mongodb://localhost:27017" || Deno.env.get("MONGO_STRING"),
};
