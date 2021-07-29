const rl = require("readline-sync");
const fs = require("fs");
let server,
    user,
    version,
    token,
    prefix,
    scid,
    logsc,
    jc,
    onlinecommandChannelid;

version = rl.question("what version did the server use ? : ");
token = rl.question("Enter Your Token : ");
prefix = rl.question("Enter the discord bot prefix : ");
scid = rl.question("Enter the server chat channel id : ");
logsc = rl.keyInYNStrict(' Do you want the server chat at log');

jc = rl.question("Enter an command that will the bot execute after join a server: ");
onlinecommandChannelid = rl.question("Enter an channel id that -online can work at: ");
server = rl.question("Enter the server ip that the bot will run on: ");
user = rl.question("Enter the MC account email/username: ");


console.clear();
console.log("Server: " + server);
console.log("Version: " + version);
console.log("token: " + token);
console.log("prefix: " + prefix);
console.log("User: " + user);
console.log("sc channel: " + scid);
console.log("Joincommand: " + jc);
console.log("online place: " + onlinecommandChannelid);
console.log("Log Sc: " + logsc);

fs.writeFileSync(
    "botname.json",
    JSON.stringify({
        bot1: user + 1,
        bot2: user + 2,
        bot3: user + 3,
        bot4: user + 4,
        bot5: user + 5,
        bot6: user + 6,
        bot7: user + 7,
        bot8: user + 8,
        bot9: user + 9,
        bot10: user + 10,
        bot11: user + 11,
        bot12: user + 12,
        bot13: user + 13,
        bot14: user + 14,
        bot15: user + 15,
        bot16: user + 16,
        bot17: user + 17,
        bot18: user + 18,
        bot19: user + 19,
        bot20: user + 20,
    }, null, 2)
);

fs.writeFileSync(
    "botnameo.txt",
    `${user}1
${user}2
${user}3
${user}5
${user}6
${user}7
${user}8
${user}9
${user}10
${user}11
${user}12
${user}13
${user}14
${user}15
${user}16
${user}17
${user}18
${user}19
${user}20`);

if (rl.keyInYNStrict("Is this ok? ")) {
    console.clear();
    fs.writeFileSync(
        "config.json",
        JSON.stringify({
            server: server,
            token: token,
            prefix: prefix,
            sc: scid,
            logsc: logsc,
            jc: jc,
            version: version,
            accountSharingChannel: onlinecommandChannelid
        }, null, 2)
    );
    return rl.keyInPause("File created. You now can run the program.");
}
rl.keyInPause("OK. Cancelling...");
