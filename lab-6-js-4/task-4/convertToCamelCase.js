const textarea = document.createElement("textarea");

const button = document.createElement("button");
button.textContent = "Convert";

document.body.append(textarea);
document.body.append(button);

button.addEventListener("click", function () {
  const text = textarea.value;
  const rows = text.split("\n");

  for (const [i, row] of rows.entries()) {
    const words = row.toLowerCase().trim().split("_").filter(Boolean);
    const convertedWords = words.map((word, index) =>
      index === 0 ? word : word[0].toUpperCase() + word.slice(1)
    );
    const output = convertedWords.join("");
    console.log(`${output.padEnd(20, " ")}${"✅".repeat(i + 1)}`);
  }
});
