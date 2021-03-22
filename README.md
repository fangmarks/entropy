# Entropy

A random Image API made for personal use :sparkles:

While this is already usable, I'd advice against using it until I'm further along in development <3

# Requirements

- Deno
- MongoDB
- Docker (Optional)

# How to run

1. Install Deno (and/or Docker Compose)
2. `sudo docker-compose up -d` to bring up Mongo and Mongo-Express
3. `deno run -A mod.ts` to start Entropy

By default it will use `./EntropyImages` to dump images into and `mongodb://example:password@localhost:27017` as the mongodb host

You can change these by either editing the ends of `config.ts`'s exports or by running it like:

```shell
deno run -A mod.ts --ENTROPY_IMAGES=/path/to/dir --MONGO_STRING=mongodb://example:password@localhost:27017
// or
ENTROPY_IMAGES=/path/to/dir MONGO_STRING=mongodb://example:password@localhost:27017 deno run -A mod.ts
```

# Author

- [Lio] - [Twitter] - [Contact]

[lio]: https://himbo.cat
[twitter]: https://kji.tf/twitter
[contact]: mailto:entropy@werewolf.design?subject=%5BENTROPY%5D%20-
