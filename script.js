// Update image names later when you upload them
const story = {
  title: "Avery and the Scrap-Bot",
  chapters: [
    {
      name: "Chapter 2: The Signal",
      pages: [
        {
          src: "assets/ch2_p1.png",
          text: "Avery woke up to a sound.\nBEEP. BEEP. BEEP.\n\nScrap-Bot’s eyes were flashing red.\n\n“That’s not good,” Avery said."
        },
        {
          src: "assets/ch2_p2.png",
          text: "Scrap-Bot’s head turned toward the hills outside town.\n\n“EVIL ROBOT SIGNAL,” Scrap-Bot said.\n“STRONG ONE.”"
        },
        {
          src: "assets/ch2_p3.png",
          text: "Avery swallowed.\n\n“Stronger than Mega-Tron 9000?”"
        },
        {
          src: "assets/ch2_p4.png",
          text: "Scrap-Bot nodded."
        },
        {
          src: "assets/ch2_p5.png",
          text: "They ran."
        }
      ]
    }
  ]
};

let chapterIndex = 0;
let pageIndex = 0;

const art = document.getElementById("art");
const caption = document.getElementById("caption");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const chapterTitle = document.getElementById("chapterTitle");
const counter = document.getElementById("counter");

function render() {
  const chapter = story.chapters[chapterIndex];
  const page = chapter.pages[pageIndex];

  chapterTitle.textContent = chapter.name;
  art.src = page.src;
  caption.textContent = page.text;
  counter.textContent = `${pageIndex + 1} / ${chapter.pages.length}`;

  prev.disabled = (chapterIndex === 0 && pageIndex === 0);
  next.disabled = (chapterIndex === story.chapters.length - 1 && pageIndex === chapter.pages.length - 1);
}

prev.onclick = () => {
  if (pageIndex > 0) {
    pageIndex--;
  } else if (chapterIndex > 0) {
    chapterIndex--;
    pageIndex = story.chapters[chapterIndex].pages.length - 1;
  }
  render();
};

next.onclick = () => {
  const chapter = story.chapters[chapterIndex];
  if (pageIndex < chapter.pages.length - 1) {
    pageIndex++;
  } else if (chapterIndex < story.chapters.length - 1) {
    chapterIndex++;
    pageIndex = 0;
  }
  render();
};

render();
