import fs from "fs";
import os from "os";

const userName = os.userInfo().username;
const newMinecraftName = fs.readFileSync('fake_name').toString();

// Actual program
const profilesPath = `/Users/${userName}/Library/Application Support/minecraft/launcher_profiles.json`;

fs.readFile(profilesPath, (err, data) => {
  if (err) throw err;
  else {
    const json = JSON.parse(data);

    const authDb = json.authenticationDatabase;

    const profiles = authDb[Object.keys(authDb)[0]].profiles;

    profiles[Object.keys(profiles)[0]].displayName = newMinecraftName;

    const toWrite = JSON.stringify(json);

    fs.writeFileSync(profilesPath, toWrite);
  }
});
