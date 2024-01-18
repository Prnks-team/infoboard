console.stdlog = console.log.bind(console);
    console.logs = ["test"];
    console.log = function(){
    console.logs.push(Array.from(arguments));
    console.stdlog.apply(console, arguments);
    }
    if (console.logs = ["test"]);
      console.warn("Console works");
