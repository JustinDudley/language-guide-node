This is app 1 of 3, as part of my annual SMART goals.

It is based on the Jonas Schmedtmann Udemy class on Node and MongoDB.
For that class I created a project called jonas-udemy-1-node-farm-starter,
which is in my gitHub repo.
This project is modeled closely on that one.
I will use typescript in this app

Tip for adding emoji as favicon: https://dev.to/pickleat/add-an-emoji-favicon-to-your-site-co2

// TODO:
Need to get more knowledge about typescript. For now, this is where we stand:

-Created tsconfig.json file modeled on this tutorial: 
https://blog.appsignal.com/2022/01/19/how-to-set-up-a-nodejs-project-with-typescript.html
-- but changed node16 to node14

-Ran these 3:
npm install --save-dev typescript
npm install ts-node  // nodemon didn't work without this
npm install @tsconfig/node14 --save-dev


To run:
$ node index.ts
runs on port 8080
