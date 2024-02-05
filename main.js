var datos = undefined;
var file = undefined;
var lineas = undefined;
var jpgArray = [];

window.onload = () => {
    pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://unpkg.com/pdfjs-dist@2.9.359/build/pdf.worker.min.js';
}

function carregarFitxer(event) {
    let lv_file = event.currentTarget.files[0];;
    let lv_fileSizeKB = lv_file.size / 1024;
    if (lv_fileSizeKB <= 1024) {
        file = lv_file;
        //need to convert to JPG
        convertToJPG(file);
    } else {
        alert("Archivo excede 1024kb");
    }
    console.log(lv_file);
}

function clickBoto() {
    //Prepare form data
    var formData = new FormData();

    formData.append("file", jpgArray[0]);
    formData.append("language", "spa");
    formData.append("apikey", "K84034668688957");//K84034668688957
    formData.append("isOverlayRequired", true);
    formData.append("isTable", true);
    formData.append("filetype", "JPG");
    formData.append("OCREngine", 2);
    //Send OCR Parsing request asynchronously


    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == XMLHttpRequest.DONE) {
            datos = JSON.parse(xhr.response);
            lineas = datos.ParsedResults[0].TextOverlay.Lines;
            transformarDatos();
        }
    }
    xhr.open('POST', 'https://api.ocr.space/parse/image', true);
    xhr.send(formData);

}

var datos = {
    "lunes":[],
    "martes":[],
    "miercoles":[],
    "jueves":[],
    "viernes":[],
};

function transformarDatos() {

    lineas.forEach((linea) => {
        for (let i = 0; i < linea.Words.length; i++) {
            let word = linea.Words[i];
            if (word.Left == 691) {
                datos.miercoles.push(linea);
                break;
            }
        };

    });

}



function convertToJPG(file) {
    jpgArray = [];
    const reader = new FileReader();

    reader.onload = function (e) {
        const data = new Uint8Array(e.target.result);

        // Load the PDF using pdf.js
        pdfjsLib.getDocument({ data }).promise.then(function (pdfDoc) {
            const numPages = pdfDoc.numPages;
            const promises = [];

            // Iterate through each page and convert it to JPG
            for (let pageNumber = 1; pageNumber <= numPages; pageNumber++) {
                promises.push(convertPageToJpg(pdfDoc, pageNumber));
            }

            // Wait for all conversion promises to resolve, means we have all JPG loaded.
            Promise.all(promises).then(function () {


            });
        });
    };

    reader.readAsArrayBuffer(file);

}

function convertPageToJpg(pdfDoc, pageNumber) {
    return pdfDoc.getPage(pageNumber).then(function (page) {
        const viewport = page.getViewport({ scale: 1 });
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');

        canvas.height = viewport.height;
        canvas.width = viewport.width;

        const renderContext = {
            canvasContext: ctx,
            viewport: viewport,
        };

        return page.render(renderContext).promise.then(function () {

            canvas.toBlob(function (blob) {
                // Create a File object from the Blob
                const jpgFile = new File([blob], `page_${pageNumber}.jpg`, { type: 'image/jpeg' });
                jpgArray.push(jpgFile);

                var ctx = document.getElementById('the-canvas').getContext('2d');
                var url = URL.createObjectURL(jpgFile);
                var img = new Image();
                img.onload = function () {
                    ctx.drawImage(img, 20, 20);
                }
                img.src = url;

            }, 'image/jpeg', 1);


        });


    });
}
