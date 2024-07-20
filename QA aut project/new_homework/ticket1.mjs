function printAfterDelay(text, milliseconds) {
  setTimeout(() => {
    console.log(text);
  }, milliseconds);
}

printAfterDelay("Privit, text vivede cherez 5 sekynd", 5000);
