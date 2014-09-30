#Simple DustJS Test
This simple test aims at explaining a simple usage of DustJS.  
I am a newbie in client side template engines and so It was hard for me to understand what to do with DustJS at the first time!

I am still a newbie, but, at least, `Hello, Affo!` appears on the screen!

To make the project run on your machine:

```
$ git clone git@github.com:affo/dustjs_simple_test.git
$ cd dustjs_simple_test
$ npm install
$ node server.js
```

The file `test.js` is generated running the command:

```
$ dustc test.html test.js
```

from the main folder (maybe you should run something like `./node_modules/dustjs-linkedin/bin/dustc test.html test.js` if DustJS wan't installed globally).