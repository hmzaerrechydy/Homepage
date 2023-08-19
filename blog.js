const { Client } = require('@notionhq/client');

const notion = new Client({ auth: 'secret_oiSO7K8gn0JFk4qL5nghLMJtexixZaf0NVoytcCX3Ly'});

const { NotionToMarkdown } = require("notion-to-md");
const n2m = new NotionToMarkdown({ notionClient: notion });

const fs = require("fs");


async function getPostsId(){
  const response = await notion.databases.query({
    database_id: 'de9e6f2935014800b7d6bcaad0592146'
  }) 

  return response.results.map(post => post.id); 
}


async function getPostsContent(id){ 
  const mdblocks = await n2m.pageToMarkdown(id);
  const mdString = n2m.toMarkdownString(mdblocks);
  return mdString.parent;
}


async function getPostsTitle(id){
  const response = await notion.databases.query({
    database_id: 'de9e6f2935014800b7d6bcaad0592146'
  }) 
  const title = response.results.filter(post => post.id == id)[0].properties.Name.title.map(item => item.plain_text)[0]; 

  return title; 
}
/*
(async () => {
  const ids = await getPostsId(); 
  let count = 0; 
  ids.map(async id => {
    const post = await getPostsContent(id); 
    const title = await getPostsTitle(id); 

    let showdown  = require('showdown'),
    converter = new showdown.Converter(),
    text      = post,
    html      = converter.makeHtml(text);
    
    const page = 
    `
    <!DOCTYPE html>
    <html>
        <head>
          <title>
            Hamza Errechydy
          </title>
          <link rel="stylesheet" href="../style.css">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9" crossorigin="anonymous">  
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css">            
        </head>
        <body>
        <article id = "post">
          <button  class="btn btn-light">
            <a href="../blog.html">
              <i class="bi bi-arrow-left"></i> Other Posts 
            </a>
          </button>
          <br />
          <h1>${title}</h1>
          <br/>
            ${html}
        </article>
        </body>
    </html>
    `;

    fs.writeFile(`./posts/${title}.html`, page, (err) => {
      if (err) {
        console.log(err);
      }
      console.log("File saved!");
    });

    count++; 
  })
})(); 

*/

let files = fs.readdirSync('./posts');

let html = "";


for(const file of files){
  const name = file.split(".")[0]; 
  const tag = `<li class="list-group-item"><a href="./posts/${name}.html">${name}</a></li>`;  
  console.log(tag)
  html += tag; 
}

html = 
`
<!DOCTYPE html>
<html>
    <head></head>
    <body>
        <ul class="list-group">
          ${html}
        </ul>
        <script src="app.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-HwwvtgBNo3bZJJLYd8oVXjrBZt8cqVSpeBNS5n7C8IVInixGAoxmnlMuBnhbgrkm" crossorigin="anonymous" async></script>
    </body>
</html>
`; 


fs.writeFile(`./blog.html`, html, (err) => {
  if (err) {
    console.log(err);
  }
  console.log("File saved!");
});