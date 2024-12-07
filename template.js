const internal = require("stream")

tb = require("trollbox-bot")
fs = require("fs")

botname = "template";
prefix = "t!";
desc = "a template bot";
color = "blue";


tb.connect(botname, color, prefix, "")
commands = {
    "ping": function (data, socket) {
        socket.send("Pong!")
    },
    "help": function (data, socket) {
        out = desc + "\n"
        for (i in description) {
            out += prefix + i + ": " + description[i] + "\n"
        }
        socket.send(out)
    },
}
description = {
    "${prefix}ping": "Pong!",
    "${prefix}help": "Show commands and their descriptions",
}
for (i in commands) {
    tb.setcommand(i, commands[i])
    console.log("registered command: " + i)
}

tb.onmessage((data) => {
    /* Events that fire when a message is sent go here 
       Note: use so instead of socket */
})

so = null

tb.onuserjoined((data, socket) => {
    /* Events that fire when a user joins the chat go here 
       Note: use so instead of socket */
})


tb.onconnect = (socket) => {
    console.log("connected")
    so = socket
}

