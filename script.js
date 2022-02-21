const contents = [
  {
    name: "Tanya Sinclair",
    info: `“ I’ve been interested in coding for a while but never taken the jump, until now.
                I couldn’t recommend this course enough. I’m now in the job of my dreams and so
                excited about the future. ”`,
    designation: "UX Engineer",
    pic: "tanya",
  },
  {
    name: "John Tarkpor",
    info: ` “ If you want to lay the best foundation possible I’d recommend taking this course.
                The depth the instructors go into is incredible. I now feel so confident about
                starting up as a professional developer. ”`,
    designation: "Junior Front-end Developer",
    pic: "john",
  },
];

const btnNext = document.querySelector(".btn-next");
const btnPrev = document.querySelector(".btn-prev");
const imagesection = document.querySelector(".profile-img img");
const devname = document.querySelector(".name");
const info = document.querySelector(".info");
const role = document.querySelector(".role");

console.log(contents.length);
let index = 0;

const leftClick = function () {
  index--;
  if (index < 0) {
    index = contents.length - 1;
  }
  devname.textContent = contents[index].name;
  info.textContent = contents[index].info;
  role.textContent = contents[index].designation;
  imagesection.setAttribute("src", `images/image-${contents[index].pic}.jpg`);
};
btnPrev.addEventListener("click", leftClick);

const rightClick = function () {
  index++;
  if (index > contents.length - 1) {
    index = 0;
  }
  devname.textContent = contents[index].name;
  info.textContent = contents[index].info;
  role.textContent = contents[index].designation;
  imagesection.setAttribute("src", `images/image-${contents[index].pic}.jpg`);
};
btnNext.addEventListener("click", rightClick);
