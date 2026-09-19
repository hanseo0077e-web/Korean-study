const content = document.getElementById("content");

let currentLevel = 1;

const words = {
  1: [
    {
      korean: "안녕하세요",
      chinese: "你好",
      pinyin: "nǐ hǎo",
      koreanSound: "an nyeong ha se yo",
      example: "안녕하세요! 만나서 반가워요."
    },
    {
      korean: "감사합니다",
      chinese: "谢谢",
      pinyin: "xiè xie",
      koreanSound: "gam sa ham ni da",
      example: "도와줘서 감사합니다."
    },
    {
      korean: "친구",
      chinese: "朋友",
      pinyin: "péng you",
      koreanSound: "chin gu",
      example: "나는 친구와 놀아요."
    },
    {
      korean: "학교",
      chinese: "学校",
      pinyin: "xué xiào",
      koreanSound: "hak gyo",
      example: "나는 학교에 가요."
    },
    {
      korean: "물",
      chinese: "水",
      pinyin: "shuǐ",
      koreanSound: "mul",
      example: "물을 마셔요."
    },
    {
      korean: "밥",
      chinese: "饭",
      pinyin: "fàn",
      koreanSound: "bap",
      example: "밥을 먹어요."
    }
  ],

  2: [
    {
      korean: "가족",
      chinese: "家人",
      pinyin: "jiā rén",
      koreanSound: "ga jok",
      example: "우리 가족은 네 명이에요."
    },
    {
      korean: "선생님",
      chinese: "老师",
      pinyin: "lǎo shī",
      koreanSound: "seon saeng nim",
      example: "선생님께 인사해요."
    },
    {
      korean: "친절하다",
      chinese: "亲切",
      pinyin: "qīn qiè",
      koreanSound: "chin jeol ha da",
      example: "우리 선생님은 친절해요."
    },
    {
      korean: "좋아하다",
      chinese: "喜欢",
      pinyin: "xǐ huān",
      koreanSound: "jo a ha da",
      example: "나는 한국어를 좋아해요."
    },
    {
      korean: "먹다",
      chinese: "吃",
      pinyin: "chī",
      koreanSound: "meok da",
      example: "맛있는 음식을 먹어요."
    }
  ],

  3: [
    {
      korean: "재미있다",
      chinese: "有趣",
      pinyin: "yǒu qù",
      koreanSound: "jae mi it da",
      example: "한국어 공부는 재미있어요."
    },
    {
      korean: "행복하다",
      chinese: "幸福",
      pinyin: "xìng fú",
      koreanSound: "haeng bok ha da",
      example: "오늘 정말 행복해요."
    },
    {
      korean: "공부하다",
      chinese: "学习",
      pinyin: "xué xí",
      koreanSound: "gong bu ha da",
      example: "한국어를 공부해요."
    },
    {
      korean: "좋아하는",
      chinese: "喜欢的",
      pinyin: "xǐ huān de",
      koreanSound: "jo a ha neun",
      example: "내가 좋아하는 음식이에요."
    },
    {
      korean: "도와주다",
      chinese: "帮助",
      pinyin: "bāng zhù",
      koreanSound: "do wa ju da",
      example: "친구를 도와줘요."
    }
  ]
};

const sentences = {
  1: [
    {
      korean: "안녕하세요!",
      chinese: "你好！",
      pinyin: "nǐ hǎo!",
      koreanSound: "an nyeong ha se yo"
    },
    {
      korean: "감사합니다.",
      chinese: "谢谢。",
      pinyin: "xiè xie.",
      koreanSound: "gam sa ham ni da"
    },
    {
      korean: "나는 학생이에요.",
      chinese: "我是学生。",
      pinyin: "wǒ shì xué shēng.",
      koreanSound: "na neun hak saeng i e yo"
    }
  ],

  2: [
    {
      korean: "나는 친구와 놀아요.",
      chinese: "我和朋友一起玩。",
      pinyin: "wǒ hé péng you yì qǐ wán.",
      koreanSound: "na neun chin gu wa no ra yo"
    },
    {
      korean: "나는 한국어를 공부해요.",
      chinese: "我学习韩语。",
      pinyin: "wǒ xué xí hán yǔ.",
      koreanSound: "na neun han gu geo reul gong bu hae yo"
    },
    {
      korean: "오늘 날씨가 좋아요.",
      chinese: "今天天气很好。",
      pinyin: "jīn tiān tiān qì hěn hǎo.",
      koreanSound: "o neul nal ssi ga jo a yo"
    }
  ],

  3: [
    {
      korean: "나는 한국어 공부가 재미있어요.",
      chinese: "我觉得学习韩语很有趣。",
      pinyin: "wǒ jué de xué xí hán yǔ hěn yǒu qù.",
      koreanSound: "na neun han gu geo gong bu ga jae mi i sseo yo"
    },
    {
      korean: "친구와 함께 공부하고 싶어요.",
      chinese: "我想和朋友一起学习。",
      pinyin: "wǒ xiǎng hé péng you yì qǐ xué xí.",
      koreanSound: "chin gu wa ham kke gong bu ha go si peo yo"
    }
  ]
};


/* -----------------------------
   레벨 선택
----------------------------- */

function showLevel(level) {
  currentLevel = level;

  content.innerHTML = `
    <div class="study-box">
      <h2>⭐ 레벨 ${level}</h2>

      <p>
        ${
          level === 1
            ? "처음 배우는 쉬운 한국어"
            : level === 2
            ? "조금 더 다양한 한국어"
            : "조금 더 어려운 한국어"
        }
      </p>

      <div class="menu-buttons">
        <button class="big-button" onclick="showWords()">
          📚 단어 공부하기
        </button>

        <button class="big-button" onclick="showSentences()">
          💬 문장 공부하기
        </button>
      </div>
    </div>
  `;
}


/* -----------------------------
   단어 공부
----------------------------- */

function showWords() {
  const list = words[currentLevel];

  content.innerHTML = `
    <div class="study-box">
      <h2>📚 단어 공부</h2>

      <p>한국어 단어를 하나씩 배워봐요!</p>

      <div id="word-list"></div>
    </div>
  `;

  const wordList = document.getElementById("word-list");

  list.forEach((word, index) => {
    wordList.innerHTML += `
      <div class="word-card">

        <h2>🇰🇷 ${word.korean}</h2>

        <p>
          🇨🇳 중국어:
          <strong>${word.chinese}</strong>
        </p>

        <p>
          🔤 병음:
          <strong>${word.pinyin}</strong>
        </p>

        <p>
          🗣️ 한국어 발음 참고:
          <strong>${word.koreanSound}</strong>
        </p>

        <p>
          💬 예문:
          ${word.example}
        </p>

        <div class="sound-buttons">

          <button onclick="speakKorean('${word.korean}')">
            🔊 한국어 듣기
          </button>

          <button onclick="speakChinese('${word.chinese}')">
            🔊 중국어 듣기
          </button>

        </div>

        <button class="write-button"
          onclick="showWriting('${word.korean}')">
          ✏️ ${word.korean} 쓰기 연습
        </button>

      </div>
    `;
  });
}


/* -----------------------------
   문장 공부
----------------------------- */

function showSentences() {
  const list = sentences[currentLevel];

  content.innerHTML = `
    <div class="study-box">

      <h2>💬 문장 공부</h2>

      <p>단어 공부처럼 문장도 하나씩 배워봐요!</p>

      <div id="sentence-list"></div>

    </div>
  `;

  const sentenceList = document.getElementById("sentence-list");

  list.forEach(sentence => {

    sentenceList.innerHTML += `
      <div class="word-card">

        <h2>🇰🇷 ${sentence.korean}</h2>

        <p>
          🇨🇳 중국어:
          <strong>${sentence.chinese}</strong>
        </p>

        <p>
          🔤 병음:
          <strong>${sentence.pinyin}</strong>
        </p>

        <p>
          🗣️ 한국어 발음 참고:
          <strong>${sentence.koreanSound}</strong>
        </p>

        <div class="sound-buttons">

          <button onclick="speakKorean('${sentence.korean}')">
            🔊 한국어 듣기
          </button>

          <button onclick="speakChinese('${sentence.chinese}')">
            🔊 중국어 듣기
          </button>

        </div>

      </div>
    `;
  });
}


/* -----------------------------
   한국어 발음
----------------------------- */

function speakKorean(text) {

  if (!("speechSynthesis" in window)) {
    alert("이 기기에서는 음성 기능을 사용할 수 없어요.");
    return;
  }

  speechSynthesis.cancel();

  const speech = new SpeechSynthesisUtterance(text);

  speech.lang = "ko-KR";
  speech.rate = 0.75;
  speech.pitch = 1.1;

  speechSynthesis.speak(speech);
}


/* -----------------------------
   중국어 발음
----------------------------- */

function speakChinese(text) {

  if (!("speechSynthesis" in window)) {
    alert("이 기기에서는 음성 기능을 사용할 수 없어요.");
    return;
  }

  speechSynthesis.cancel();

  const speech = new SpeechSynthesisUtterance(text);

  speech.lang = "zh-CN";
  speech.rate = 0.75;
  speech.pitch = 1;

  speechSynthesis.speak(speech);
}


/* -----------------------------
   한글 쓰기 연습
----------------------------- */

function showWriting(word) {

  content.innerHTML = `
    <div class="study-box">

      <h2>✏️ ${word} 쓰기 연습</h2>

      <p>먼저 글자를 보고 따라 써보세요!</p>

      <div class="writing-target">
        ${word}
      </div>

      <div class="writing-buttons">

        <button onclick="showWritingGuide('${word}')">
          👀 쓰는 방법 다시 보기
        </button>

        <button onclick="startWriting('${word}')">
          ✏️ 직접 써보기
        </button>

      </div>

      <button onclick="showWords()">
        🔙 단어 목록으로
      </button>

    </div>
  `;
}


/* -----------------------------
   쓰는 방법 안내
----------------------------- */

function showWritingGuide(word) {

  content.innerHTML = `
    <div class="study-box">

      <h2>👀 ${word} 쓰는 방법</h2>

      <p>
        글자를 크게 보면서 천천히 따라가 보세요.
      </p>

      <div class="stroke-demo">

        <div class="stroke-number">1</div>
        <div class="stroke-text">${word}</div>

        <div class="stroke-number">2</div>
        <div class="stroke-text">${word}</div>

        <div class="stroke-number">3</div>
        <div class="stroke-text">${word}</div>

      </div>

      <p class="guide-message">
        💡 한 번에 빠르게 쓰지 말고<br>
        천천히 따라 써보세요!
      </p>

      <button onclick="startWriting('${word}')">
        ✏️ 이제 직접 써보기
      </button>

      <button onclick="showWriting('${word}')">
        🔄 다시 보기
      </button>

    </div>
  `;
}


/* -----------------------------
   직접 쓰기
----------------------------- */

function startWriting(word) {

  content.innerHTML = `
    <div class="study-box">

      <h2>✏️ 직접 써보세요!</h2>

      <p>
        아래 칸에 손가락이나 펜으로 ${word}을/를 써보세요.
      </p>

      <canvas
        id="writingCanvas"
        width="600"
        height="350">
      </canvas>

      <div class="canvas-buttons">

        <button onclick="clearCanvas()">
          🧹 다시 쓰기
        </button>

        <button onclick="showWritingGuide('${word}')">
          👀 쓰는 방법 보기
        </button>

      </div>

      <button onclick="showWords()">
        🔙 단어 목록으로
      </button>

    </div>
  `;

  setupCanvas();
}


/* -----------------------------
   그림판 기능
----------------------------- */

let canvas;
let ctx;
let drawing = false;

function setupCanvas() {

  canvas = document.getElementById("writingCanvas");

  if (!canvas) return;

  ctx = canvas.getContext("2d");

  ctx.lineWidth = 8;
  ctx.lineCap = "round";
  ctx.lineJoin = "round";

  canvas.addEventListener("pointerdown", startDrawing);
  canvas.addEventListener("pointermove", draw);
  canvas.addEventListener("pointerup", stopDrawing);
  canvas.addEventListener("pointerleave", stopDrawing);
}


function getPosition(event) {

  const rect = canvas.getBoundingClientRect();

  return {
    x: (event.clientX - rect.left) *
      (canvas.width / rect.width),

    y: (event.clientY - rect.top) *
      (canvas.height / rect.height)
  };
}


function startDrawing(event) {

  drawing = true;

  const position = getPosition(event);

  ctx.beginPath();

  ctx.moveTo(
    position.x,
    position.y
  );
}


function draw(event) {

  if (!drawing) return;

  const position = getPosition(event);

  ctx.lineTo(
    position.x,
    position.y
  );

  ctx.stroke();
}


function stopDrawing() {

  drawing = false;
}


function clearCanvas() {

  if (!canvas || !ctx) return;

  ctx.clearRect(
    0,
    0,
    canvas.width,
    canvas.height
  );
}


/* -----------------------------
   처음 화면
----------------------------- */

if (content) {

  content.innerHTML = `
    <div class="study-box">

      <h2>📚 공부할 내용을 선택하세요</h2>

      <p>
        먼저 위에서 레벨을 선택해주세요!
      </p>

    </div>
