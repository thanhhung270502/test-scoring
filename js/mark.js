const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

var z = $(".frame");
const inputImage = $(".inputImage");

inputImage.onchange = (e) => {
    z.setAttribute("src", URL.createObjectURL(e.target.files[0]))
}

const btn_add_new_stu = $(".btn-add-new-stu");
var table = $('.second-section');

var modal = $$("#myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = $$("#myImg");
var modalImg = $$("#img01");
var captionText = $$("#caption");

var span = $$(".close");

btn_add_new_stu.onclick = () => {
    // Ảnh tải lên
    var frame1 = document.createElement("img");
    frame1.setAttribute("id", "myImg");
    frame1.setAttribute("class", "img-fluid frame1");
    frame1.setAttribute("src", z.src);
    frame1.setAttribute("alt", "anc");

    // // Modal
    var btn_close = document.createElement("span");
    btn_close.setAttribute("class", "close");
    btn_close.textContent = `x`;

    var modal_img = document.createElement("img");
    modal_img.setAttribute("id", "img01");
    modal_img.setAttribute("class", "modal-content");

    var caption = document.createElement("div");
    caption.setAttribute("id", "caption");

    var modalz = document.createElement("div");
    modalz.setAttribute("class", "modal-custom");
    modalz.setAttribute("id", "myModal");
    modalz.setAttribute("style", "display: none;");
    modalz.appendChild(btn_close);
    modalz.appendChild(modal_img);
    modalz.appendChild(caption);
    

    var col1 = document.createElement("div");
    col1.setAttribute("class", "col-2 col-custom col-body border");
    col1.appendChild(frame1);
    col1.appendChild(modalz);

    // Họ tên
    var name = document.createElement("div");
    name.setAttribute("class", "name");
    name.textContent = "Huỳnh Ngọc Thanh Thảo";

    var col2 = document.createElement("div");
    col2.setAttribute("class", "col-4 col-custom col-body border");
    col2.appendChild(name);

    // Điểm
    var col3 = document.createElement("div");
    col3.setAttribute("class", "col-4 col-custom col-body border");
    col3.textContent = "110/120";

    // Ảnh đã chấm
    var frame2 = document.createElement("img");
    frame2.setAttribute("src", z.src);
    frame2.setAttribute("class", "img-fluid frame1");
    frame2.setAttribute("id", "myImg");

    // // Modal
    var btn_close2 = document.createElement("span");
    btn_close2.setAttribute("class", "close");
    btn_close2.textContent = `x`;

    var modal_img2 = document.createElement("img");
    modal_img2.setAttribute("id", "img01");
    modal_img2.setAttribute("class", "modal-content");

    var caption2 = document.createElement("div");
    caption2.setAttribute("id", "caption");

    var modalz2 = document.createElement("div");
    modalz2.setAttribute("class", "modal-custom");
    modalz2.setAttribute("id", "myModal");
    modalz2.setAttribute("style", "display: none;");
    modalz2.appendChild(btn_close2);
    modalz2.appendChild(modal_img2);
    modalz2.appendChild(caption2);

    var col4 = document.createElement("div");
    col4.setAttribute("class", "col-2 col-custom col-body border");
    col4.appendChild(frame2);
    col1.appendChild(modalz2);

    // Row
    var row = document.createElement("div");
    row.setAttribute("class", "d-flex table-custom");
    row.appendChild(col1);
    row.appendChild(col2);
    row.appendChild(col3);
    row.appendChild(col4);

    // Place
    var place = $(".second-section");
    place.appendChild(row);

    modal = $$("#myModal");

    // Get the image and insert it inside the modal - use its "alt" text as a caption
    img = $$("#myImg");
    modalImg = $$("#img01");
    captionText = $$("#caption");

    span = $$(".close");

    img.forEach((value, index) => {
        value.onclick = () => {
            console.log(value);
            console.log(index);
            modal[index].style.display = "block";
            modalImg[index].src = value.src;
            captionText[index].innerHTML = value.alt;
        }
    })
    
    span.forEach((value, index) => {
        value.onclick = () => {
            modal[index].style.display = "none";
        }
    })

    z.setAttribute("src", "");
}

img.forEach((value, index) => {
    value.onclick = () => {
        console.log(value);
        console.log(index);
        modal[index].style.display = "block";
        modalImg[index].src = value.src;
        captionText[index].innerHTML = value.alt;
    }
})

span.forEach((value, index) => {
    value.onclick = () => {
        modal[index].style.display = "none";
    }
})