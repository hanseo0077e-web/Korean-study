const content = document.getElementById("content");

const words = [
  ["안녕하세요", "你好 / 您好"],
  ["감사합니다", "谢谢"],
  ["친구", "朋友"],
  ["학교", "学校"],
  ["물", "水"],
  ["밥", "饭 / 米饭"]
];

function showSection(section) {
  if (section === "hangul") {
    content.innerHTML = `
      <h2>🔤 한글 배우기</h2>
      <p>먼저 기본 자음과 모음을 익혀 봐요.</p>
      <p><b>자음:</b> ㄱ ㄴ ㄷ ㄹ ㅁ ㅂ ㅅ ㅇ ㅈ ㅊ ㅋ ㅌ ㅍ ㅎ</p>
      <p><b>모음:</b> ㅏ ㅑ ㅓ ㅕ ㅗ ㅛ ㅜ ㅠ ㅡ ㅣ</p>
      <p>예: ㄱ + ㅏ = <b>가</b></p>`;
  }

  if (section === "words") {
    content.innerHTML = `<h2>📚 단어 공부</h2>` +
      words.map((w, i) => `
        <div class="word">
          <span><b>${w[0]}</b> — ${w[1]}</span>
          <button class="speak" onclick="speak('${w[0]}')">🔊 듣기</button>
        </div>`).join("");
  }

  if (section === "conversation") {
    content.innerHTML = `
      <h2>🗣️ 기초 회화</h2>
      <div class="word"><span><b>안녕하세요!</b><br>你好！</span><button class="speak" onclick="speak('안녕하세요')">🔊</button></div>
      <div class="word"><span><b>저는 ○○예요.</b><br>我是○○。</span><button class="speak" onclick="speak('저는 학생이에요')">🔊</button></div>
      <div class="word"><span><b>만나서 반가워요.</b><br>很高兴见到你。</span><button class="speak" onclick="speak('만나서 반가워요')">🔊</button></div>`;
  }

  if (section === "quiz") {
    content.innerHTML = `
      <h2>🎮 퀴즈</h2>
      <p><b>“감사합니다”의 뜻은 무엇일까요?</b></p>
      <button class="quiz-option" onclick="answer(false)">① 你好</button>
      <button class="quiz-option" onclick="answer(true)">② 谢谢</button>
      <button class="quiz-option" onclick="answer(false)">③ 学校</button>
      <p id="result"></p>`;
  }
}

function answer(correct) {
  document.getElementById("result").textContent =
    correct ? "🎉 정답이에요!" : "🙂 다시 생각해 봐요!";
}

function speak(text) {
  if ("speechSynthesis" in window) {
    const u = new SpeechSynthesisUtterance(text);
    u.lang = "ko-KR";
    speechSynthesis.speak(u);
  } else {
    alert("이 브라우저에서는 음성 기능을 사용할 수 없어요.");
  }
}
