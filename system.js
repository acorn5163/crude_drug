  var Range_of_question = {"ne":true,"konkei":true,"ha":true,"kawa":true,"kazitu":true,"syusi":true,"other":true};
  var Hints = {"syouyakumei":true,"kigen":true,"sihyouseibun":true,"gakumei":true,"kamoku":true,"bui":true,"kounou":true};
  var type_of_answer = "syouyakumei"
  const ToA = {"syouyakumei":"生薬名","kigen":"基原","sihyouseibun":"指標成分","gakumei":"学名","kamoku":"科目","bui":"部位","kounou":"効能"};
  var number_of_Q = 10
  var modedict = {"type":"answercontainer","choose":"choosecontainer"}
  var importance = false
  mode = "choose"
  
fetch('data.json')
  .then(response => {
    if (!response.ok) {
      throw new Error('読み込み失敗: ' + response.statusText);
    }
    return response.json(); // JSONとしてパース
  })
  .then(data_gained => {
    console.log('読み込んだデータ:', data_gained);
    data = data_gained;
  })
  .catch(error => {
    console.error('エラー:', error);
  });

//   console.log(data["ne"]["ウコン"]);
  function ChangeRange(target){
    Range_of_question[target] = !Range_of_question[target];
    console.log(Range_of_question);
  }

  function ChangeHint(target){
    Hints[target] = !Hints[target];
    console.log(Hints);
  }

  function ChangeTarget(target){
    type_of_answer = target;
    console.log(type_of_answer);
  }

  function SetNumberofQ(target){
    number_of_Q = target;
    console.log(number_of_Q);
  }

  function SetMode(target){
    mode = target;
    console.log(mode);
  }

  function SwitchImportance(){
    importance = !importance;
    console.log("importance:",importance)
  }

  function StartGame(){
    document.getElementById('config').classList.add('d-none');
    document.getElementById('page_question').classList.remove('d-none');
    document.getElementById('result').classList.add('d-none');
    document.getElementById('Container_answer').classList.add('d-none');
    document.getElementById('textboxlabel').textContent = `答え(${ToA[type_of_answer]})`;
    Questions = MakeQuestion(number_of_Q);
    SetQuestion(Questions[0])
    Progress = 0;
    number_of_correct = 0;
    
  }


function Step1(answer){
    if(mode=="type"){
      submitted_answer = document.getElementById('answertextbox').value;
    }
    else{
      submitted_answer = document.getElementById(answer).textContent;
    }
    console.log("stepped. answer is ",submitted_answer);
    document.getElementById(modedict[mode]).classList.add('d-none');
    if(submitted_answer == Questions[Progress]["Answer"]){
        number_of_correct += 1;
        document.getElementById("C_correction").textContent = "正解！";
    }
    else{
        document.getElementById("C_correction").textContent = "不正解...";
    }
    document.getElementById('Container_answer').classList.remove('d-none');
}
function Step2(){
    document.getElementById('Container_answer').classList.add('d-none');
    Progress += 1;
    document.getElementById('answertextbox').value = "";
    console.log(Progress);
    if(Progress < number_of_Q){
        SetQuestion(Questions[Progress]);
        document.getElementById(modedict[mode]).classList.remove('d-none');
    }
    else{
        FinishGame();
    }
}
function MakeList(){
  var Qlist = {}
  for(key in Range_of_question){
    if(Range_of_question[key] == true){
      Object.assign(Qlist,data[key])
    } 
  }
  for(key in Qlist){
    if(Qlist[key]["importance"] != "Y"){
      delete Qlist[key]
    }
  }
  console.log("Qlist:",Qlist)
  console.log("length:",Object.keys(Qlist).length)
  return Qlist
}

function SetQuestion(Qdata){
  console.log(Qdata);
  document.getElementById("C_syouyakumei").textContent = Qdata["syouyakumei"];
  document.getElementById("C_kigen").textContent = Qdata["kigen"];
  document.getElementById("C_gakumei").textContent = Qdata["gakumei"];
  document.getElementById("C_kamoku").textContent = Qdata["kamoku"];
  document.getElementById("C_bui").textContent = Qdata["bui"];
  document.getElementById("C_sihyouseibun").textContent = Qdata["sihyouseibun"];
  document.getElementById("C_kounou").textContent = Qdata["kounou"];
  if(mode=="type"){
    document.getElementById("C_answer").textContent = Qdata["Answer"];
  }
  else if(mode=="choose"){
    document.getElementById("choose1").textContent = Qdata["choose1"];
    document.getElementById("choose2").textContent = Qdata["choose2"];
    document.getElementById("choose3").textContent = Qdata["choose3"];
    document.getElementById("C_answer").textContent = Qdata["Answer"];
  }
  console.log("Question is set.")
  document.getElementById("answercontainer").classList.add("d-none");
  document.getElementById("choosecontainer").classList.add("d-none");
  document.getElementById(modedict[mode]).classList.remove("d-none");
  document.getElementById("C_syouyakumei").scrollIntoView({  
  behavior: 'smooth'  
});
}

function MakeQuestion(number){
    let QuestionList = []
    let RawQuestionList = MakeList();
    
    if(Object.keys(RawQuestionList).length < number){
        var N_o_Q = Object.keys(RawQuestionList).length;
    }
    else{
        var N_o_Q = number
    }
    console.log("N_o_Q",N_o_Q)
    
    if(mode == "type"){
      console.log("type question");
      for(let i=0;i < N_o_Q ;i++){
        var T_number = Math.floor(Math.random()*Object.keys(RawQuestionList).length);
        var Q_rawdata = RawQuestionList[Object.keys(RawQuestionList)[T_number]];
        var Q_data = {};
        console.log("Q_rawdata:",Q_rawdata)
        for(key in Q_rawdata){
            if(Hints[key]){
                Q_data[key] = Q_rawdata[key];
            }
            else{
                Q_data[key] = "-";
            }
        }
        Q_data["Answer"] = Q_rawdata[type_of_answer];
        QuestionList.push(Q_data);
        delete RawQuestionList[Object.keys(RawQuestionList)[T_number]];
      }
    }
    else if(mode == "choose"){
      for(let i=0;i < N_o_Q;i++){
        var T_number = Math.floor(Math.random()*Object.keys(RawQuestionList).length);
        var Q_rawdata = RawQuestionList[Object.keys(RawQuestionList)[T_number]];
        var Q_data = {};
        console.log("Q_rawdata:",Q_rawdata)
        for(key in Q_rawdata){
          if(Hints[key]){
              Q_data[key] = Q_rawdata[key];
          }
          else{
              Q_data[key] = "-";
          }
        }
        Q_data["Answer"] = Q_rawdata[type_of_answer];
        var trueanswer_number = Math.floor(Math.random()*3);
        var fakes = []
        for(key in RawQuestionList){
          fakes.push(RawQuestionList[key][type_of_answer]);
        }
        fakes = Array.from(new Set(fakes));
        fakes = fakes.filter(element => !(element == Q_rawdata[type_of_answer]));
        if(trueanswer_number == 0){
          Q_data["choose1"] = Q_rawdata[type_of_answer];
          Q_data["choose2"] = fakes[Math.floor(Math.random()*fakes.length)];
          fakes = fakes.filter(element => !(element==Q_data["choose2"]));
          Q_data["choose3"] = fakes[Math.floor(Math.random()*fakes.length)];
        }
        if(trueanswer_number == 1){
          Q_data["choose2"] = Q_rawdata[type_of_answer];
          Q_data["choose3"] = fakes[Math.floor(Math.random()*fakes.length)];
          fakes = fakes.filter(element => !(element==Q_data["choose3"]));
          Q_data["choose1"] = fakes[Math.floor(Math.random()*fakes.length)];
        }
        if(trueanswer_number == 2){
          Q_data["choose3"] = Q_rawdata[type_of_answer];
          Q_data["choose1"] = fakes[Math.floor(Math.random()*fakes.length)];
          fakes = fakes.filter(element => !(element==Q_data["choose1"]));
          Q_data["choose2"] = fakes[Math.floor(Math.random()*fakes.length)];
        }
        QuestionList.push(Q_data);
        delete RawQuestionList[Object.keys(RawQuestionList)[T_number]];
        }
      }
    console.log("Question:",QuestionList)
    return QuestionList 
}

document.getElementById("answertextbox").addEventListener("keydown", submit_event);

function FinishGame(){
    updateAccuracy(number_of_correct/number_of_Q);
    document.getElementById('config').classList.add('d-none');
    document.getElementById('page_question').classList.add('d-none');
    document.getElementById('result').classList.remove('d-none');
}

function submit_event(e) {
  if (e.key === "Enter") {
    console.log('回答されました。');
    Step1()
  }  
  return false;
}

function updateAccuracy(percent) {
    const value = Math.max(0, Math.min(percent*100, 100)); // 0-100にクリップ
    document.getElementById('accuracy-value').textContent = `${value}%`;
    const bar = document.getElementById('accuracy-bar');
    bar.style.width = `${value}%`;
    bar.setAttribute('aria-valuenow', value);
    bar.textContent = `${value}%`;
}

function Reset(){
    document.getElementById('config').classList.remove('d-none');
    document.getElementById('page_question').classList.add('d-none');
    document.getElementById('result').classList.add('d-none');

    Progress = 0;
    number_of_correct=0;
    // location.reload();

}