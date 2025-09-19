const QUESTIONS = [
  { q:"Who built the ark to survive the flood?", choices:["Abraham","Noah","Moses","David"], answer:1, exp:"Noah built the ark (Genesis 6–9)." },
  { q:"Which prophet was swallowed by a great fish?", choices:["Jonah","Elijah","Isaiah","Jeremiah"], answer:0, exp:"Jonah was swallowed by a fish (Jonah 1:17)." },
  { q:"How many disciples did Jesus choose?", choices:["10","11","12","13"], answer:2, exp:"Jesus chose 12 disciples (Matthew 10:1-4)." },
  { q:"Where was Jesus born?", choices:["Nazareth","Bethlehem","Jerusalem","Galilee"], answer:1, exp:"Jesus was born in Bethlehem (Luke 2:4-7)." },
  { q:"Who led the Israelites out of Egypt?", choices:["Joshua","Moses","Aaron","Samuel"], answer:1, exp:"Moses led the Exodus (Exodus 3–14)." },
  { q:"What was the first miracle of Jesus?", choices:["Healing a blind man","Feeding 5000","Turning water into wine","Walking on water"], answer:2, exp:"Jesus turned water into wine (John 2:1-11)." },
  { q:"Who was thrown into the lions’ den?", choices:["Elijah","Daniel","David","Solomon"], answer:1, exp:"Daniel was thrown into the lions' den (Daniel 6)." },
  { q:"What is the first book of the Bible?", choices:["Exodus","Psalms","Genesis","Revelation"], answer:2, exp:"The first book is Genesis." },
  { q:"Who betrayed Jesus for 30 pieces of silver?", choices:["Peter","Judas","Thomas","Paul"], answer:1, exp:"Judas Iscariot betrayed Jesus (Matthew 26:14-16)." },
  { q:"Which sea did Moses part?", choices:["Red Sea","Dead Sea","Mediterranean","Galilee"], answer:0, exp:"Moses parted the Red Sea (Exodus 14:21)." },
  { q:"Who was the strongest man in the Bible?", choices:["David","Gideon","Samson","Saul"], answer:2, exp:"Samson was known for his strength (Judges 13–16)." },
  { q:"What is the shortest verse in the Bible?", choices:["God is love.","Jesus wept.","Pray without ceasing.","Fear not."], answer:1, exp:"'Jesus wept.' (John 11:35)." },
  { q:"Who was the first king of Israel?", choices:["David","Saul","Solomon","Samuel"], answer:1, exp:"Saul was the first king (1 Samuel 9–10)." },
  { q:"Who was swallowed by a fish for disobeying God?", choices:["Jonah","Moses","Paul","Peter"], answer:0, exp:"Jonah disobeyed and was swallowed (Jonah 1:17)." },
  { q:"What is the last book of the Bible?", choices:["Genesis","Psalms","Acts","Revelation"], answer:3, exp:"The last book is Revelation." },
  { q:"Who was David’s best friend?", choices:["Saul","Jonathan","Nathan","Absalom"], answer:1, exp:"Jonathan was David’s best friend (1 Samuel 18)." },
  { q:"How many days did God take to create the world?", choices:["5","6","7","8"], answer:1, exp:"God created in 6 days and rested on the 7th (Genesis 1)." },
  { q:"Who was the mother of Jesus?", choices:["Elizabeth","Mary","Martha","Rachel"], answer:1, exp:"Mary was Jesus’ mother (Luke 1–2)." },
  { q:"Who wrote most of the Psalms?", choices:["Moses","David","Solomon","Asaph"], answer:1, exp:"David wrote many Psalms." },
  { q:"What did Jesus feed the 5,000 with?", choices:["Bread and wine","Fish and bread","Manna","Corn"], answer:1, exp:"He fed them with 5 loaves and 2 fish (Matthew 14:13-21)." },
  { q:"Who denied Jesus three times?", choices:["John","James","Peter","Judas"], answer:2, exp:"Peter denied Him three times (Luke 22:54-62)." },
  { q:"What was Paul’s name before conversion?", choices:["Saul","Simon","Stephen","Silas"], answer:0, exp:"Paul was known as Saul (Acts 9)." },
  { q:"Which tax collector became a disciple?", choices:["Levi","Matthew","Zacchaeus","Simon"], answer:1, exp:"Matthew was a tax collector (Matthew 9:9)." },
  { q:"Which giant did David defeat?", choices:["Goliath","Og","Anak","Nephilim"], answer:0, exp:"David killed Goliath (1 Samuel 17)." },
  { q:"What did God give Moses on Mount Sinai?", choices:["Ark","Manna","10 Commandments","Tabernacle"], answer:2, exp:"Moses received the 10 Commandments (Exodus 20)." },
  { q:"Who anointed David as king?", choices:["Samuel","Saul","Nathan","Elijah"], answer:0, exp:"Prophet Samuel anointed David (1 Samuel 16)." },
  { q:"What was Jesus’ first sermon called?", choices:["Sermon on the Mount","Upper Room","Great Commission","Mount Olives"], answer:0, exp:"The Sermon on the Mount (Matthew 5–7)." },
  { q:"Who was the father of John the Baptist?", choices:["Zechariah","Joseph","Nicodemus","Caiaphas"], answer:0, exp:"Zechariah was his father (Luke 1)." },
  { q:"Which disciple doubted Jesus’ resurrection?", choices:["Peter","Thomas","Philip","Andrew"], answer:1, exp:"Thomas doubted until he saw Jesus (John 20:24-29)." },
  { q:"Who dreamed of a ladder reaching to heaven?", choices:["Abraham","Isaac","Jacob","Joseph"], answer:2, exp:"Jacob saw the ladder (Genesis 28:12)." },
  { q:"What fruit did Adam and Eve eat?", choices:["Fig","Apple","Unknown fruit","Grape"], answer:2, exp:"The Bible says fruit, not apple (Genesis 3)." },
  { q:"Which river was Jesus baptized in?", choices:["Jordan","Nile","Euphrates","Tigris"], answer:0, exp:"Jesus was baptized in the Jordan River (Matthew 3:13)." },
  { q:"Who was the wisest king of Israel?", choices:["David","Saul","Solomon","Josiah"], answer:2, exp:"Solomon was the wisest (1 Kings 3)." },
  { q:"Who interpreted Pharaoh’s dreams?", choices:["Joseph","Moses","Daniel","Aaron"], answer:0, exp:"Joseph interpreted dreams (Genesis 41)." },
  { q:"What was the Tower of Babel built with?", choices:["Wood","Brick","Stone","Gold"], answer:1, exp:"It was built with bricks (Genesis 11)." },
  { q:"Which apostle wrote Revelation?", choices:["Peter","John","Paul","James"], answer:1, exp:"John wrote Revelation." },
  { q:"Who was the first martyr of the church?", choices:["Stephen","James","Paul","Barnabas"], answer:0, exp:"Stephen was stoned (Acts 7)." },
  { q:"Who was the Roman governor who tried Jesus?", choices:["Herod","Pilate","Caesar","Felix"], answer:1, exp:"Pontius Pilate tried Jesus (John 18:28-40)." },
  { q:"Which woman turned into a pillar of salt?", choices:["Lot’s wife","Sarah","Rebecca","Rachel"], answer:0, exp:"Lot’s wife looked back (Genesis 19:26)." },
  { q:"Who climbed a sycamore tree to see Jesus?", choices:["Zacchaeus","Matthew","Barnabas","Andrew"], answer:0, exp:"Zacchaeus climbed the tree (Luke 19)." },
  { q:"Which disciple walked on water with Jesus?", choices:["Peter","John","James","Philip"], answer:0, exp:"Peter walked on water (Matthew 14:28)." },
  { q:"Who wrote the Acts of the Apostles?", choices:["Luke","Paul","Peter","John"], answer:0, exp:"Luke wrote Acts." },
  { q:"Which gospel begins with 'In the beginning was the Word'?", choices:["Matthew","Mark","Luke","John"], answer:3, exp:"That’s the Gospel of John (John 1:1)." },
  { q:"Who was thrown into a fiery furnace?", choices:["Daniel","Shadrach, Meshach & Abednego","Joseph","Mordecai"], answer:1, exp:"Shadrach, Meshach & Abednego (Daniel 3)." },
  { q:"Who cut off the ear of the high priest’s servant?", choices:["John","Peter","Judas","Thomas"], answer:1, exp:"Peter cut off the ear (John 18:10)." },
  { q:"Which judge defeated Midian with 300 men?", choices:["Samson","Gideon","Jephthah","Deborah"], answer:1, exp:"Gideon won with 300 men (Judges 7)." },
  { q:"Who replaced Judas as an apostle?", choices:["Paul","Barnabas","Matthias","Silas"], answer:2, exp:"Matthias was chosen (Acts 1:26)." },
  { q:"Who saw a vision of dry bones coming to life?", choices:["Isaiah","Ezekiel","Jeremiah","Daniel"], answer:1, exp:"Ezekiel saw the dry bones (Ezekiel 37)." },
  { q:"How many books are in the Bible?", choices:["60","62","66","70"], answer:2, exp:"There are 66 books total." },
  { q:"What is the greatest commandment?", choices:["Do not kill","Love your neighbor","Love God","Keep the Sabbath"], answer:2, exp:"Love the Lord your God (Matthew 22:37-38)." },
  { q:"Which prayer did Jesus teach His disciples?", choices:["Hail Mary","Lord’s Prayer","Psalm 23","Apostles' Creed"], answer:1, exp:"The Lord’s Prayer (Matthew 6:9-13)." }
];


let questions = [], currentIndex=0, score=0, streak=0, userAnswers=[];


const qText=document.getElementById("qText"),
      qNumber=document.getElementById("qNumber"),
      choicesEl=document.getElementById("choices"),
      explainEl=document.getElementById("explain"),
      nextBtn=document.getElementById("nextBtn"),
      skipBtn=document.getElementById("skipBtn"),
      restartBtn=document.getElementById("restartBtn"),
      scoreEl=document.getElementById("score"),
      streakEl=document.getElementById("streak"),
      progressFill=document.getElementById("progressFill"),
      progressText=document.getElementById("progressText"),
      endFooter=document.getElementById("endFooter"),
      finalScore=document.getElementById("finalScore"),
      correctCountEl=document.getElementById("correctCount"),
      totalQsEl=document.getElementById("totalQs"),
      bestScoreEl=document.getElementById("bestScore");


function init(){
  loadBest();
  resetGame();
}
function loadBest(){
  const best=localStorage.getItem("cq_best");
  bestScoreEl.textContent=best?best:"0";
}
function resetGame(){
  questions=shuffle(QUESTIONS.slice());
  currentIndex=0;score=0;streak=0;userAnswers=[];
  showQuestion();
  updateUI();
  endFooter.style.display="none";
}


function showQuestion(){
  explainEl.style.display="none";
  nextBtn.style.display="none";
  const q=questions[currentIndex];
  qNumber.textContent=`Question ${currentIndex+1} / ${questions.length}`;
  qText.textContent=q.q;
  choicesEl.innerHTML="";
  q.choices.forEach((c,i)=>{
    const btn=document.createElement("div");
    btn.className="choice";
    btn.innerHTML=`<strong>${String.fromCharCode(65+i)}.</strong> ${c}`;
    btn.addEventListener("click",()=>choose(i));
    choicesEl.appendChild(btn);
  });
  updateUI();
}
function choose(i){
  const q=questions[currentIndex];
  Array.from(choicesEl.children).forEach(c=>c.style.pointerEvents="none");
  if(i===q.answer){
    score+=10;streak++;explainEl.textContent="Correct! "+q.exp;
    choicesEl.children[i].classList.add("correct");
  }else{
    streak=0;explainEl.textContent="Not quite. "+q.exp;
    choicesEl.children[i].classList.add("wrong");
    choicesEl.children[q.answer].classList.add("correct");
  }
  explainEl.style.display="block";
  nextBtn.style.display="inline-block";
  userAnswers.push(i===q.answer);
  updateUI();
}
function next(){
  currentIndex++;
  if(currentIndex>=questions.length) endGame();
  else showQuestion();
}
function skip(){
  userAnswers.push(false);
  currentIndex++;
  if(currentIndex>=questions.length) endGame();
  else showQuestion();
}
function endGame(){
  endFooter.style.display="block";
  finalScore.textContent=score;
  correctCountEl.textContent=userAnswers.filter(a=>a).length;
  totalQsEl.textContent=questions.length;
  if(score>(+localStorage.getItem("cq_best")||0)){
    localStorage.setItem("cq_best",score);
    bestScoreEl.textContent=score;
  }
}
function updateUI(){
  scoreEl.textContent=score;
  streakEl.textContent=streak;
  progressFill.style.width=(currentIndex/questions.length*100)+"%";
  progressText.textContent=`${currentIndex} / ${questions.length}`;
}

function shuffle(a){
  for(let i=a.length-1;i>0;i--){
    const j=Math.floor(Math.random()*(i+1));
    [a[i],a[j]]=[a[j],a[i]];
  }
  return a;
}


nextBtn.onclick=next;
skipBtn.onclick=skip;
restartBtn.onclick=()=>resetGame();
document.getElementById("playAgain").onclick=()=>resetGame();


window.onload=init;