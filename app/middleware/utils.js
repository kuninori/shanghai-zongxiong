import anime from 'animejs';

export function loadImage(src) {
  return new Promise((resolve) => {
    const image = new Image();
    image.onload = () => {
      resolve(image)
    };
    image.src = src;
  });
}

export function isSP() {
  return window.innerWidth <= 750;
}

export function isVisible(el) {
  const style = getComputedStyle(el);
  return style.display !== "none";
}

export function path(path, jp = false) {
  return `${jp ? "/jp" : ""}${path}`
}


export function imgPath(path, en = false) {
  return `${en ? "/imgs/en" : "/imgs"}${path}`
}

export function scrollTo(y) {
  const t = {y: window.scrollY};
  anime({
    targets: t,
    y: y,
    easing: "easeOutCubic",
    update: () => window.scroll(0, t.y),
  })
}



export function headMetas({title}, en) {
  const name = en ? "SATAKE Precision Technology Co., Ltd." : "SATAKE GROUP 株式会社 佐竹製作所";
  const pageTitle = title ? `${title} | ${name}` : name;
  const desc = en
    ? ""
    : "佐竹製作所グループは金属部品加工で培った独自の技術と提案力を核とした次世代ソリューションカンパニーです。お客さまのニーズにお応えし、革新的な技術提案を続けてまいります。"

  return {
    title: pageTitle,
    meta: [
      {property:"og:title", content: pageTitle },
      { hid: 'description', name: 'description', content: desc },
      {property:"og:description", content: desc},
      {property:"og:site_name", content: name},
    ]
  }
}
