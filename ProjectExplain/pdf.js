document.addEventListener("DOMContentLoaded", function() {
    var pdfViewer = document.getElementById("pdf-viewer");

    // Check if browser supports iframe PDF embedding
    if (!pdfViewer.contentWindow) {
        var link = document.createElement("a");
        link.href = pdfViewer.src;
        link.textContent = "Download PDF";
        link.style.display = "block";
        link.style.marginTop = "20px";
        link.setAttribute("download", "");
        pdfViewer.parentNode.appendChild(link);
    }
});
