import Main from "./src/main.html";

const server = Bun.serve({
    routes: {
        "/": Main,
    },
});

console.log(`Server started at ${server.url}`);
