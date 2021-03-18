import server from "./src/utils/server.ts";
console.log('[Entropy] online')

server.post("/upload", async (req) => {
    console.log('image upload :eyes:')

    const files = req.files;
    await console.log(files)
    //await Deno.writeFile(newProfilePicture.name, new Uint8Array(await newProfilePicture.arrayBuffer()));

    return "Uploaded!";
});
