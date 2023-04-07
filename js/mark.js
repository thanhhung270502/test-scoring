const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const inputImage = $(".inputImage");

var placeContainImage = $(".reviewImage");

inputImage.onchange = (e) => {
    console.log(e.target.files.length);
    for (let i = 0; i < e.target.files.length; i++) {
        var image_place = document.createElement("img")
        image_place.setAttribute("class", "img-fluid frame");
        image_place.setAttribute("src", URL.createObjectURL(e.target.files[i]));

        var outer_place = document.createElement("div")
        outer_place.setAttribute("class", "col-3 outer__image");
        outer_place.appendChild(image_place);

        placeContainImage.appendChild(outer_place);
    }
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
    var z = $$(".frame");
    
    for (let i = 0; i < z.length; i++) {
        // Ảnh tải lên
        var frame1 = document.createElement("img");
        frame1.setAttribute("id", "myImg");
        frame1.setAttribute("class", "img-fluid frame1");
        frame1.setAttribute("src", z[i].src);
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
        var col2 = document.createElement("div");
        col2.setAttribute("class", "col-4 col-custom col-body border");
        col2.textContent = "Huỳnh Ngọc Thanh Thảo";

        // Họ tên
        var col3 = document.createElement("div");
        col3.setAttribute("class", "col-2 col-custom col-body border");
        col3.textContent = "2010301";

        // Họ tên
        var col4 = document.createElement("div");
        col4.setAttribute("class", "col-2 col-custom col-body border");
        col4.textContent = "1234";

        // Điểm
        var col5 = document.createElement("div");
        col5.setAttribute("class", "col-2 col-custom col-body border");
        col5.textContent = "110/120";

        

        // Row
        var row = document.createElement("div");
        row.setAttribute("class", "d-flex table-custom");
        row.appendChild(col1);
        row.appendChild(col2);
        row.appendChild(col3);
        row.appendChild(col4);
        row.appendChild(col5);

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
    }
    var outer__image = $$(".outer__image");
    for (let j = 0; j < outer__image.length; j++) {
        placeContainImage.removeChild(outer__image[j])
    } 
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