document.getElementById("downloadBtn").addEventListener("click", function() {
    var cvContent = document.querySelector("main").jpg;
    var blob = new Blob([cvContent], { type: "jpg" });
    var link = document.createElement("a");
    link.download = "suraj saxena.jpg";
    link.href = window.URL.createObjectURL(blob);
    link.click();
});