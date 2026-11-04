import promptSync from "prompt-sync";
const prompt = promptSync();
let playlist = ["firestarter", "watch me", "never going back", "girls"]
console.log(playlist)
playlist.push("villain")
playlist.shift()
console.log(playlist)