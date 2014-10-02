##Using Grunt
The problem is that any `.dust` file you generate, you have to compile it by hand (also, any time you edit it) and include the corresponding `.js` file in `index.html`.

The solution is to use [Grunt](http://gruntjs.com/) and make the process automatic:

* [Grunt DustJS Linkedin](https://github.com/coryroloff/grunt-dustjs-linkedin) compiles (simply using `dustc`) the files in `dust` directory and puts the `.js` output files in `dist`
* [Grunt Concat](https://github.com/gruntjs/grunt-contrib-concat) concatenates all `.js` files in `dist` and outputs `built.js`
* `built.js` will be included in `index.html` (only one file)  

Using also [Grunt Watch](https://github.com/gruntjs/grunt-contrib-watch), the process can be executed at any change in `.dust` files.