let option = `<option value=''>Select District</option>`;
for (let index = 0; index < districtList.length; index++) {
  option += `<option value='${districtList[index]}'>${districtList[index]}</option>`;

}
/**
* currentState is dom select elemnet which can be selected by querySelector etc
**/
currentState.innerHTML = option;


function setDistrict(e) {
  let opt = `<option value=''>Select taluka</option>`;
  let key = e.target.value;
  let thistaluka = talukaList[key];

  for (let index = 0; index < thistaluka.length; index++) {
    opt += `<option value='${thistaluka[index]}'>${thistaluka[index]}</option>`;

  }
/**
* currentTaluka is dom select elemnet which can be selected by querySelector etc
**/
  const currentTaluka = document.querySelector('#currentTaluka');
  currentTaluka.innerHTML = opt;

}
