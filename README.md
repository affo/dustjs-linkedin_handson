#DustJS Hands On
When I first approached DustJS I had no difficulties in understanding how the template engine works in terms of syntax (blocks, partials, sections and so on).  
My problem was to understand how to _view the html rendered on a page_ starting from something like:

```html
<ul>
{#things}
	<li>{thing}</li>
{/things}
</ul>
```

My doubts where a lot... Such as: "ok, with curly braces I can do anything, but now what do I have to do? Do I have to compile something? Why `dust.render(...)` returns `No template found` ?!" (yes, I am a newbie in this field).

Given this, this is not intended to be a DustJS tutorial.  
Instead, this is a collection of three examples to show how DustJS works apart from its syntax.  
So, how to compile `.dust` files and how to render them.

There are three folders and each one has a `README.md` that explains what that example does.

##Instructions

To make the project run on your machine:

```
$ git clone git@github.com:affo/dustjs_simple_test.git
$ cd dustjs_simple_test
$ npm install
$ node server.js
```

For infos about the packages used, consult the `package.json` files.