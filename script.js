const navDialogue = document.getElementById("nav-dialogue");
function handleMenu() {
  navDialogue.classList.toggle("hidden");
}

const initialTranslateLeftToRight = -48 * 4;
const initialTranslateRightToLeft = 36 * 4;

function setupIntersectionObserver(element, isLefttoRight, speed) {
  const intersectionCallback = (entries) => {
    const isIntersecting = entries[0].isIntersecting;
    if (isIntersecting === true) {
      document.addEventListener("scroll", scrollHandler);
    } else {
      document.removeEventListener("scroll", scrollHandler);
    }
  };

  // function setupIntersectionObserver(element, isLeftToRight, speed) {
  //   const intersectionCallback = (entries) => {
  //     entries.forEach((entry) => {
  //       console.log(entry.target.id, entry.isIntersecting);
  //     });
  //   };

  const intersectionObserver = new IntersectionObserver(intersectionCallback);

  intersectionObserver.observe(element);

  function scrollHandler() {
    const translateX =
      (window.innerHeight - element.getBoundingClientRect().top) * speed;

    let totalTranslate = 0;
    if (isLefttoRight) {
      totalTranslate = translateX + initialTranslateLeftToRight;
    } else {
      totalTranslate = -(translateX + initialTranslateLeftToRight);
    }

    element.style.transform = `translateX(${totalTranslate}px)`;
  }
}

const line1 = document.getElementById("line1");
const line2 = document.getElementById("line2");
const line3 = document.getElementById("line3");
const line4 = document.getElementById("line4");

setupIntersectionObserver(line1, true, 0.15);
setupIntersectionObserver(line2, false, 0.15);
setupIntersectionObserver(line3, true, 0.15);
setupIntersectionObserver(line4, true, 0.8);
