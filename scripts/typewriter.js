function typeWriterEffect() {

  const words = [ "LET THE EMBER BREATHE", "A LOST LETTER", "CLASP ONTO THE CORAL", "A PORCELAIN PARADISE", "DON'T SIFT THE SAND", "A WORRIED WARRIOR", "FEEL THE TREE RINGS", "A CONFUSED COMET"];
  let wordCount = 0;
  let letterCount = 0;

  let currentText = '';
  let currentWord = '';

  let timeOut = 400;

  let isDeleting = false;

  function type() {
    if(words.length === wordCount) {
      wordCount = 0;
    }

    currentWord = words[wordCount];

    if(isDeleting) {
      currentText = currentWord.slice(0, --letterCount);
    } else {
      currentText = currentWord.slice(0, ++letterCount);
    }

    document.querySelector(".typewrite").textContent = currentText;

    timeOut = isDeleting ? 100 : 100;

    if(!isDeleting && currentText.length === currentWord.length) {
      timeOut = 1500;
      isDeleting = true;
    } else if(isDeleting && currentText.length === 0) {
      timeOut = 100;
      isDeleting = false;
      wordCount++;
    }

    setTimeout(type, timeOut);
  }

  type();
}

typeWriterEffect();