const { Command, util } = require("klasa");

module.exports = class extends Command {
  constructor(...args) {
    super(...args, {
      guarded: true,
      description: "Generates HTML page of your commands",
      permLevel: 9,
      usage: "[nocss]"
    });
  }

  async run(msg, [nocss]) {
    const help = {};

    const commandNames = Array.from(this.client.commands.keys());

    await Promise.all(
      this.client.commands.filter(command => !command.permLevel || (command.permLevel && command.permLevel < 9)).map(command => {
        if (!help.hasOwnProperty(command.category)) help[command.category] = {};
        if (!help[command.category].hasOwnProperty(command.subCategory)) help[command.category][command.subCategory] = [];
        const description = typeof command.description === "function" ? command.description(msg) : command.description;
        help[command.category][command.subCategory].push(`<tr><td>${command.name}</td><td>${description}</td></tr>`);
      })
    );
    const categories = Object.keys(help);
    const header = `
<div id="header">
  <img src='${this.client.user.avatarURL()}' alt='${this.client.user.username}'/>
  <h1>${this.client.user.username}</h1>
</div>
`;
    const page = [header];
    for (let cat = 0; cat < categories.length; cat++) {
      page.push(`<div class="category">`);
      page.push(`  <h2>${categories[cat]} / ${help[categories[cat]].General.length} Commands</h2>`);

      const subCategories = Object.keys(help[categories[cat]]);

      for (let subCat = 0; subCat < subCategories.length; subCat++) {
        page.push(`  <div class="subcategory">`);
        if (subCategories.length > 1) page.push(`      <h3>${subCategories[subCat]}</h3>`);
        page.push(`      <table>`);
        page.push(`      <tr>`);
        page.push(`      <th>Command Name</th>  <th>Description</th>`);
        page.push(`      </tr>`);
        page.push(`      ${help[categories[cat]][subCategories[subCat]].join("\n")}`);
        page.push(`      </table>`);
        page.push(`  </div>`);
      }
      page.push(`</div>`);
    }

    page.push(
      nocss
        ? ""
        : `
        <style>
          body {
            text-align: center;
            justify-content: center;
            font-family: 'Roboto', sans-serif;
            margin: 30px;
          }
          .category {
            display: inline-block;
            width: auto;
            margin: 30px;
          }
          td, th {
            padding: 5px
          }
          .category {
            justify-content: center;
          }
          .category h2 {
            background: linear-gradient(to right, #209cee, #205fab);
            font-size: 15px;
            font-weight: 300;
            padding: 10px;
            color: #fff
          }
          .category h3 {
            background: linear-gradient(to right, #209cee, #205fab);
            font-size: 15px;
            font-weight: 300;
            width: 100px;
            color: #fff;
            display:inline-block;
            padding: 5px;
            border-radius: 10px;
          }
          #header {
            width: 800px;
            display:flex;
            align-items: center;
            justify-content: center;
            background: linear-gradient(to right, #209cee, #205fab);
            color: white;
            padding: 20px;
            margin: 0 auto;
          }
          #header img {
            border-radius: 100%;
            height:70px;
            margin-right:20px
          }
          #header h1 {
            font-weight: 300
          }
          table {
            width: 800px;
            margin: 0 20px 0 20px;
          }
          table th {
            font-size: 15px;
            font-weight: 300
          }
          table tr:first-of-type {
            background: linear-gradient(to right, #209cee, #205fab);
            color: #fff;
            margin: 0 20px 0 20px;
            padding: 0
          }
          table tr th {
            width: 150px
          }
          table tr td {
            margin: 10px;
            padding: 5px 10px 5px 10px;
          }
          table tr:hover {
            background-color: rgba(32, 156, 238, 0.18)
          }
        </style>
`
    );
    return msg.channel.sendFile(Buffer.from(page.join("\n"), "utf8"), "output.html");
  }
};
