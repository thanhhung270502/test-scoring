const subjectSelect = document.getElementById("subject-select");
const examSelect = document.getElementById("exam-select");
const examDatalist = document.getElementById("exam-select-options");
const defaultOptions = examDatalist.innerHTML;

const exams = [
  { subjectCode: "M001", examCode: "M001-01" },
  { subjectCode: "M001", examCode: "M001-02" },
  { subjectCode: "M001", examCode: "M001-03" },
  { subjectCode: "P001", examCode: "P001-01" },
  { subjectCode: "P001", examCode: "P001-02" },
  { subjectCode: "C001", examCode: "C001-01" },
  { subjectCode: "C001", examCode: "C001-02" },
  { subjectCode: "C001", examCode: "C001-03" },
];

// Lấy tất cả các mã đề
const allExamOptions = examDatalist.getElementsByTagName("option");

// Lưu trữ các đối tượng tùy chọn mã đề
const examOptions = {};

// Lặp qua tất cả các tùy chọn và lưu trữ chúng vào đối tượng examOptions
for (let i = 0; i < allExamOptions.length; i++) {
  examOptions[allExamOptions[i].value] = allExamOptions[i];
}

// Sự kiện thay đổi chọn môn học
subjectSelect.addEventListener("change", function() {
    const selectedSubject = this.value;

    examSelect.value = "";
    examDatalist.innerHTML = "";

    if (selectedSubject === "all") {
        examDatalist.innerHTML = defaultOptions;
        return;
    }

    // Lọc các đối tượng mã đề theo mã môn học được chọn
    const subjectExams = exams.filter(function(exam) {
        return exam.subjectCode === selectedSubject;
    });

    // Lặp qua các đối tượng mã đề được lọc và thêm chúng vào phần tử datalist
    for (let i = 0; i < subjectExams.length; i++) {
        const examCode = subjectExams[i].examCode;

        // Kiểm tra xem tùy chọn mã đề đã tồn tại trong examOptions hay chưa
        if (!examOptions[examCode]) {
        const newOption = document.createElement("option");
        newOption.value = examCode;
        examOptions[examCode] = newOption;
        }

        examDatalist.appendChild(examOptions[examCode]);
    }
});

// Sự kiện nhập liệu cho mã đề
examSelect.addEventListener("input", function() {
    const searchText = this.value.toLowerCase();

    const options = examDatalist.getElementsByTagName("option");

    // Lặp qua tất cả các tùy chọn và ẩn hoặc hiển thị tùy chọn tùy thuộc vào giá trị nhập liệu
    for (let i = 0; i < options.length; i++) {
        const optionValue = options[i].value.toLowerCase();

        if (optionValue.indexOf(searchText) !== -1 && searchText !== "") {
        options[i].style.display = "";
        } else {
        options[i].style.display = "none";
        }
    }

    // Nếu không có giá trị nhập liệu thì hiển thị tất cả các tùy chọn
    if (searchText === "") {
        for (let i = 0; i < options.length; i++) {
        options[i].style.display = "";
        }
    }
});