// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as fs from 'fs'

export default async function handler(req, res) {
  let data = await fs.promises.readdir('blogdata');
  console.log((data))
  let allBlogs = [] ;
  let myFile ;
  for (let index = 0; index < data.length ; index++) {
    myFile = await fs.promises.readFile(('blogdata/' + data[index] ), "utf-8");
    allBlogs.push(JSON.parse(myFile));
  }
  res.status(200).json(allBlogs);
}
