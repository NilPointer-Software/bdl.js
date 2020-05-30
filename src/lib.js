const fetch = require("node-fetch");
const { UPDATE_BOT } = require("./endpoints.js");

const createRequest = (token, body) => ({
    method: "POST",
    headers: {
        "authorization": `bearer ${token}`,
        "content-type": "application/json",
    },
    body: JSON.stringify(body)
});

const clientServers = client => {
    if (client.guilds.cache !== undefined)
        return client.guilds.cache.size;
    if (client.guilds.size !== undefined)
        return client.guilds.size;

    console.warn("Could not retrieve amount of servers from the client");
    return 0;
};

exports.connectBdlBot = async (token, client) => {
    console.info("Attempting to update bdl bot in 5 min");

    while (true) {
        await new Promise(resolve => setTimeout(resolve, 300000));
        fetch(UPDATE_BOT, createRequest(token, {"servers": clientServers(client)}))
            .then(resp => resp.json())
            .then(json => {
                if (json.errors !== undefined) {
                    console.error("Could not update the bdl bot. Make sure that your token is correct");
                } else if (json.status !== "ok") {
                    console.error("Could not update the bdl bot. Error: " + json.message);
                }
            })
            .catch(error => console.error(error));
    }
}
