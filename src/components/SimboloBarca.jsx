// Il simbolo della barca a vela (versione 04 del logo), come disegno vettoriale in pagina.
// I cinque pezzi prendono i colori dalle variabili --c-barca-1 ... --c-barca-5, definite in
// src/index.css: nel tema chiaro sono i blu del simbolo a colori, nel tema scuro quelli del
// logo su fondo blu (scafo bianco). Così resta leggibile in entrambi.
//
// - monocromo: tutti i pezzi nel colore del testo (currentColor), utile sui fondi colorati.
//   La trasparenza si dà con una classe sull'elemento (es. opacity-10), non con il colore,
//   così i pezzi sovrapposti non si scuriscono a vicenda.
const PEZZI = [
  "M572,122 C595,175 615,250 616,330 C616,380 608,405 598,418 C585,425 565,428 540,432 C548,380 550,300 546,240 C552,190 566,150 572,122 Z",
  "M512,30 C545,120 560,210 558,300 C556,360 550,400 545,430 C470,455 370,470 285,455 C280,380 400,200 512,30 Z",
  "M552,225 C556,300 556,370 545,432 C470,458 370,470 285,455 C300,420 380,360 552,225 Z",
  "M45,395 C52,435 95,462 150,460 C190,458 222,440 240,408 C246,392 262,386 276,392 C296,400 296,426 280,444 C330,462 460,445 540,432 C585,424 612,414 630,408 C642,408 648,420 652,452 C665,490 700,508 750,506 C790,503 820,482 845,458 C815,508 760,528 700,526 C660,524 635,500 610,470 C560,500 480,520 400,522 C330,522 270,500 238,474 C215,488 170,492 130,488 C85,482 50,445 45,395 Z",
  "M440,560 C490,548 545,525 574,514 C590,526 610,545 632,555 C604,552 584,542 572,534 C535,542 480,556 440,560 Z",
];

function SimboloBarca(props) {
  const { monocromo = false, className = "", style, ...resto } = props;
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox="40 25 810 540"
      className={className}
      style={style}
      {...resto}
    >
      {PEZZI.map((d, i) => (
        <path key={i} d={d} fill={monocromo ? "currentColor" : `var(--c-barca-${i + 1})`} />
      ))}
    </svg>
  );
}

export default SimboloBarca;
