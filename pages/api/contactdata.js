// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as fs from 'fs'

export default async function handler(req, res) {
    if(req.method == 'POST'){
        console.log(req.body);
        res.status(200).json(req);
    }
    else{
        res.status(200).json(["allBlogs"]);
    }
}
