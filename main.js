console.log("hello world");

document.querySelectorAll("*").forEach((el) => {
  if (el.scrollWidth > el.clientWidth) {
    console.log("Found the w0rst element ever: ", el);
  }
});

console.log("test");
