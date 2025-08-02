console.log("Youtube is a social Media Platform")
console.log("Spotify is a Audio Player")

setTimeout(()=> {
    console.log("ASync Nature of JS delays me and Runs at the last")
},1000);

console.log("The End")

const fn = () => {
  console.log("Nothing")
}

const callback = (arg,fn) => {
  console.log(arg);
  fn();
}

const loadScript = (src,callback) => {
    let sc = document.createElement("script");
    sc.src = src;
    sc.onload = callback("Aanand", fn);
    document.head.append(sc);
}

loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback)