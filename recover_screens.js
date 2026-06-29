const fs = require('fs');
const readline = require('readline');

async function processLineByLine() {
  const fileStream = fs.createReadStream('/Users/abhi/.gemini/antigravity-ide/brain/e7c1ee6a-0a77-4b6d-b940-5adf84dd5045/.system_generated/logs/transcript_full.jsonl');
  const rl = readline.createInterface({ input: fileStream, crlfDelay: Infinity });

  const files = {
    'pan-card-screen.tsx': null,
    'aadhaar-card-screen.tsx': null,
    'bank-account-screen.tsx': null,
    'documents-submitted-screen.tsx': null
  };

  for await (const line of rl) {
    if (line.includes('write_to_file')) {
      try {
        const obj = JSON.parse(line);
        if (obj.tool_calls) {
          for (const tc of obj.tool_calls) {
            if (tc.name === 'write_to_file' && tc.args && tc.args.TargetFile) {
              for (const fileName of Object.keys(files)) {
                if (tc.args.TargetFile.includes(fileName)) {
                  files[fileName] = tc.args.CodeContent;
                }
              }
            }
          }
        }
      } catch (e) {}
    }
  }

  for (const [name, content] of Object.entries(files)) {
    if (content) {
      fs.writeFileSync(`/Users/abhi/projects/my-app/src/features/agro-onboarding/screens/${name}`, content);
      console.log(`Recovered ${name}`);
    } else {
      console.log(`Could not find ${name}`);
    }
  }
}

processLineByLine();
