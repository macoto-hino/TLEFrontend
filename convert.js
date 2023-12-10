import fs from 'fs';
import readline from 'readline';

const fileList = fs.readdirSync("./dist/assets/").filter((name) => name.endsWith(".js"));

async function processLineByLine() {
  let payload = `namespace C2VM.TrafficLightsEnhancement.Systems.UISystem;

public static class Payload
{
    public const string payload = """
    (function(){
`;
  for (const fileName of fileList) {
    const fileStream = fs.createReadStream("./dist/assets/" + fileName);

    const rl = readline.createInterface({
      input: fileStream,
      crlfDelay: Infinity,
    });
  
    for await (const line of rl) {
      payload += "    " + line + "\n";
    }
  }
  payload += `    })();
    """;
}`;
  fs.writeFileSync('./dist/assets/Payload.cs', payload);
}

processLineByLine(); 