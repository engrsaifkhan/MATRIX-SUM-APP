
/////////////////////////////ADDITION//////////////////////////////
function addition(){
  document.querySelector(".result").innerHTML="";
  let array1=[[],[],[]];
  let array2=[[],[],[]];
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      array1[i][j]=+document.querySelector(`#index1${i}${j}`).value;
    }
  }
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      array2[i][j]=+document.querySelector(`#index2${i}${j}`).value;
    }
  }

  sumAdd(array1,array2);

}
function sumAdd(addval1,addval2){
  let add=[[],[],[]];
  for (let i = 0; i <3; i++) {
    for (var j = 0; j < 3; j++) {
      add[i][j]=addval1[i][j]+addval2[i][j];
    }
  }
  // document.querySelector(".result").innerHTML=`[`;



  for (let i = 0; i <3; i++) {
document.querySelector(".result").innerHTML+=`[`;
    for (let j = 0; j <3; j++) {
      document.querySelector(".result").innerHTML+=`${add[i][j]}`;
      if(j===2){break}
      document.querySelector(".result").innerHTML+=`,&nbsp;&nbsp;`;
    }
document.querySelector(".result").innerHTML+=`]`;
if(i===2){break}
document.querySelector(".result").innerHTML+=`,<br>`;
  }


  // document.querySelector(".result").innerHTML+=`]`;
}

////////////////////////////////////////SUBTRACTION////////////////////////////////

function subtraction(){
  let array1=[[],[],[]];
  let array2=[[],[],[]];
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      array1[i][j]=+document.querySelector(`#index1${i}${j}`).value;
    }
  }
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      array2[i][j]=+document.querySelector(`#index2${i}${j}`).value;
    }
  }

  sumSub(array1,array2);

}
function sumSub(subval1,subval2){
document.querySelector(".result").innerHTML="";
  let sub=[[],[],[]];
  for (let i = 0; i <3; i++) {
    for (var j = 0; j < 3; j++) {
      sub[i][j]=subval1[i][j]-subval2[i][j];
    }
  }
  // document.querySelector(".result").innerHTML=`[`;



  for (let i = 0; i <3; i++) {
document.querySelector(".result").innerHTML+=`[`;
    for (let j = 0; j <3; j++) {
      document.querySelector(".result").innerHTML+=`${sub[i][j]}`;
if (j===2) {break}
document.querySelector(".result").innerHTML+=`,&nbsp;&nbsp;`;
    }
document.querySelector(".result").innerHTML+=`]`;
if (i===2) {break}
document.querySelector(".result").innerHTML+=`,<br>`;
  }


  // document.querySelector(".result").innerHTML+=`]`;
}
