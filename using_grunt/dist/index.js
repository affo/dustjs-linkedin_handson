(function(){dust.register("index",body_0);var blocks={"body":body_1};function body_0(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.partial("layout",ctx,{});}function body_1(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.write("<p>Body --> Hello ").reference(ctx.get(["name"], false),ctx,"h").write("!</p><ul>").section(ctx.get(["names"], false),ctx,{"block":body_2},{}).write("</ul><p>Now you are using grunt-dustjs-linkedin!</p>");}function body_2(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.write("<li>And also, hello to ").reference(ctx.get(["name"], false),ctx,"h").write("!</li>\n");}return body_0;})();