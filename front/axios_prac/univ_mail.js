const univ = document.getElementById("university");
const result_univ = document.getElementById("result");
const univ_email = document.getElementById("univ_email");

univ.addEventListener("change", (event) => {
  const selectedUniv = event.target.value;
  let resultUniv = "";

  switch (selectedUniv) {
    case "sangmyung": // 상명대
      resultUniv = "sangmyung.kr"; 
      break;
    case "swu": // 서울여대
      resultUniv = "swu.ac.kr";
      break;
    case "kangnam": //강남대
      resultUniv = "kangnam.ac.kr";
      break;
    case "hufs": //한국외대
      resultUniv = "hufs.ac.kr";
      break;
    case "skuniv": // 서경대
      resultUniv = "skuniv.ac.kr";
      break;
    default: //성결대
      resultUniv = "sungkyul.ac.kr";
      break;
  }

  result_univ.textContent = resultUniv;
  univ_email.placeholderContent = resultUniv;
});