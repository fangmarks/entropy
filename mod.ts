import server from "./src/utils/server.ts";
import { nanoid } from './deps.ts'
nanoid(10)
console.log('[Entropy] online')

type files = {
    [key: string]: Blob
}

server.post("/upload", async (req) => {
    console.log('image upload :eyes:')

    let files: files = req.files;
    //await console.log(files)

    const mappedFiles = Object.entries(files).map(([name, blob]) => ({
        name: nanoid(15),
        file: name,
        ext: name.split('.').pop(),
        data: blob
    })
    )
    //    await console.log(mappedFiles)
    await console.log('')
    mappedFiles.forEach(async file => {
        let data = new Uint8Array(await file.data.arrayBuffer());
        console.log(file);

        await Deno.writeFile(`/var/data/denoimages/${file.name}.${file.ext}`, data, { create: true })
    })
    //await Deno.writeFile(newProfilePicture.name, new Uint8Array(await newProfilePicture.arrayBuffer()));

    return "Uploaded!";
});
