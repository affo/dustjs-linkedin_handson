(function(){dust.register("layout",body_0);function body_0(chk,ctx){return chk.partial("partials/header",ctx,{}).block(ctx.getBlock("body"),ctx,{"block":body_1},{}).partial("partials/footer",ctx,{});}function body_1(chk,ctx){return chk.write("<p>The default body</p>");}return body_0;})();