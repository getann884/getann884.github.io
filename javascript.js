document.addEventListener("DOMContentLoaded", () => {
                                                                                              //KRMENÍ PROJEKTŮ

const projekts = [
  {
    tag: "gasos",
    title: "Gasoš merch",
    description: "Design reklamních předmětů pro Gymnázium a Střední školu Rokycany",
    long: "V roce 2022 jsem měla tu čest účastnit se soutěže o návrh reklamních předmětů pro Gymnázium a Střední školu Rokycany. Z mých návrhů byly nakonec vybrány a zhotoveny trička, plátěná taška, láhev, USB stick a kravata které se staly oficiálním merchem školy.",
    year: "2022",
    filter: "design",
    imgnum: 7,
    type: "real",
    link:"https://www.instagram.com/reel/CqUgeJmj7ft/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    link2:"Oficiální reklamní video"
  },
  {
    tag: "eyygee",
    title: "EyyGee",
    description: "EyyGee brand identity",
    long: "EyyGee je můj pseudonym, pod kterým tvořím a sdílím své projekty. Název vznikl jako fonetický přepis iniciálů AG (eɪ-ʤiː)",
    year: "2024",
    filter: "design",
    imgnum: 8,
    type: "osobni"
  },
  {
    tag: "brolo",
    title: "Brolo",
    description: "Návrh brand identity pro fiktivní firmu Brolo",
    long: "Brolo je fiktivní hračkářství, kteé jsem si vymyslela pro účely tohoto projektu. Cílem projektu bylo vytvořit logo, které by odráželo zábavnou a přátelskou povahu značky.",
    year: "2024",
    filter: "design",
    imgnum: 4,
    type: "osobni"
  },
  {
    tag: "vzory",
    title: "Generátor vzorů",
    description: "Webová aplikace pro tvorbu grafických vzorů.",
    long: "Generátor vzorů je interaktivní webová aplikace, která umožňuje uživatelům vytvářet a přizpůsobovat grafické vzory.",
    year: "2025",
    filter: "web",
    imgnum: 2,
    type: "skolni",
    link: "https://getann884.github.io/pattern/;https://github.com/getann884/pattern",
    link2: "Ukázka;Zdrojový kód"
  },
  {
    tag: "fyzio",
    title: "Fyzio.lorem",
    description: "Návrh brand identity pro firmu Fyzio.lorem",
    long: "Fyzio.lorem je firma specializující se na fyzioterapii. Pro tento projekt jsem navrhla vizuální identitu, která kombinuje prvky lidského těla a pohybu, aby odrážela zaměření firmy na tělesné zdraví.",
    year: "2025",
    filter: "design",
    imgnum: 6,
    type: "osobni"
  },
  {
    tag: "circles",
    title: "Circles",
    description: "Sada abstraktních plakátů",
    long: "Circles je sada plakátů, které vyjadřují několik abstraktních konceptů pomocí barev a tvarů.",
    year: "2023",
    filter: "design",
    imgnum: 5,
    type: "osobni"
  },
  {
    tag: "vascak",
    title: "RNDr. Vaščák",
    description: "Redesign webových stránek pro RNDr. Vaščáka",
    long: "Stránky pro RNDr. Vaščáka jsou navrženy s důrazem na přehlednost a snadnou navigaci. Originální stránky mají sice velice kvalitní edukativní obsah, ale jsou nepřehledné a zastaralé. Mým cílem bylo vytvořit moderní a funkční design, který by usnadnil přístup k informacím.",
    year: "2024",
    filter: "web",
    imgnum: 5,
    type: "skolni"
  },
  {
    tag: "bakesale",
    title: "Bake Sale",
    description: "Design plakátů dobrovolnické akce Bake Sale",
    long: "Jak už název napovídá, principem této akce byl prodej domácích dobrot, které pekli dobrovolníci. Cílem bylo získat finanční prostředky na přednášku o rakovině a následnou podporu charitativní organizace.<br><br>Prodej se konal v několika termínech a podle toho se také odvíjely tématické plakáty. Snažila jsem do plakátů zakomponovat motiv sladkostí ale také nějaký příběh a tak vznikl Mr. Cupcake s kamarády.",
    year: "2023",
    filter: "design",
    imgnum: 6,
    type: "real"
  },
  {
    tag: "les",
    title: "Les v domě",
    description: "Redesign knižní obálky Les v domě",
    long: "Obálka je inspirována pochmurným dějem knihy.",
    year: "2024",
    filter: "design",
    imgnum: 3,
    type: "osobni"
  },
 
];

projekts.sort((a, b) => b.year.localeCompare(a.year));

if (document.querySelector('.projekty-sekce')) {                                                                                              
const projektyContainer = document.querySelector('.projekty');                                                          


let btnWeb = document.querySelector('.filter [data-filter="web"] .filter-btn');
let btnDesign = document.querySelector('.filter [data-filter="design"] .filter-btn');
let btnAll = document.querySelector('.filter [data-filter="all"] .filter-btn');


numWebprojekts = projekts.filter(projekt => projekt.filter.includes("web")).length;
numDesignprojekts = projekts.filter(projekt => projekt.filter.includes("design")).length;
numallprojekts = projekts.length;

btnWeb.appendChild(document.createTextNode(` (${numWebprojekts})`));
btnDesign.appendChild(document.createTextNode(` (${numDesignprojekts})`));
btnAll.appendChild(document.createTextNode(` (${numallprojekts})`));

projektyContainer.innerHTML = '';
projekts.forEach(projekt => {
  const projektCard = document.createElement('a');
  projektCard.classList.add('projekt-link');
  projektCard.href = `projekty/${projekt.tag}/${projekt.tag}.html`;
  const projektdiv = document.createElement('div');
  projektdiv.classList.add('projekt', ...projekt.filter.split(" "));
  projektCard.appendChild(projektdiv);
  const img = document.createElement('img');
  img.src = `projekty/${projekt.tag}/icon.png`;
  img.alt = projekt.title;
  projektdiv.appendChild(img);

  const projektBG = document.createElement('div');
  projektBG.classList.add('projektBG');
  projektdiv.appendChild(projektBG);

  const projektTitle = document.createElement('h2');
  projektTitle.textContent = projekt.title;
  projektBG.appendChild(projektTitle);

  const projektDesc = document.createElement('p');
  projektDesc.classList.add('projekt-desc');
  projektDesc.textContent = projekt.description;
  projektBG.appendChild(projektDesc);

  projektyContainer.appendChild(projektCard);
});

                                                                                              // PAGINACE PROJEKTŮ
const filterButtons = document.querySelectorAll('.projekty-sekce .filter .container');
const projekty = document.querySelectorAll('.projekt-link');


let itemsPerPage = 8;
let currentPage = 1;
let activeFilter = "all";

const projektySection = document.querySelector('.projekty-sekce');
const projektPrevButton = document.querySelector('.projekty-sekce .projekt-prev');
const projektNextButton = document.querySelector('.projekty-sekce .projekt-next');
if (projektySection && projektPrevButton && projektNextButton) {

    projektPrevButton.addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            updatePagination();
        }
    });

    projektNextButton.addEventListener('click', () => {
        const visibleCards = [...projekty].filter(card =>
            activeFilter === "all" || card.querySelector('.projekt').classList.contains(activeFilter)
        );
        const totalPages = Math.ceil(visibleCards.length / itemsPerPage);

        if (currentPage < totalPages) {
            currentPage++;
            updatePagination();
        }
    });
}


function calculateItemsPerPage() {
    const cardWidth = 220;
    const cardHeight = 180;
    const gap = 16;
    const headerHeight = 100;
    const padding = 100;
    
    const containerWidth = document.querySelector('.projekty')?.offsetWidth || 500;
    const availableHeight = window.innerHeight - headerHeight - padding;
    
    const cardsPerRow = Math.max(1, Math.floor((containerWidth + gap) / (cardWidth + gap)));
    const rowsPerView = Math.max(1, Math.floor(availableHeight / (cardHeight + gap)));
    
    itemsPerPage = Math.min(8, cardsPerRow * rowsPerView);
    currentPage = 1;
    updatePagination();
}

window.addEventListener('resize', calculateItemsPerPage);

function updatePagination() {
    
    const visibleCards = [...projekty].filter(card =>
    activeFilter === "all" || card.querySelector('.projekt').classList.contains(activeFilter)
    );

    const totalPages = Math.ceil(visibleCards.length / itemsPerPage);

    
    projekty.forEach(card => card.style.display = "none");

    visibleCards.forEach((card, index) => {
    if (index >= (currentPage - 1) * itemsPerPage &&
        index < currentPage * itemsPerPage) {
        card.style.display = "block";
    }
    });

    if (totalPages > 1) {
      renderDots(totalPages);
    } else {
        document.getElementById('page').innerHTML = "";
    }

  
    if (projektPrevButton && projektNextButton) {
        projektPrevButton.style.visibility = currentPage === 1 ? 'hidden' : 'visible';
        projektNextButton.style.visibility = currentPage === totalPages ? 'hidden' : 'visible';
    }
    
}

function renderDots(totalPages) {
    const container = document.getElementById('page');
    container.innerHTML = '';

    for (let i = 1; i <= totalPages; i++) {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if (i === currentPage) dot.classList.add('active');

        dot.addEventListener('click', () => {
            currentPage = i;
            updatePagination();
        });

        container.appendChild(dot);
    }
}                                                                                               
                                                                                                        // FILTRY PROJEKTŮ
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        activeFilter = button.dataset.filter;
        currentPage = 1;

        updatePagination();
    });
});

    calculateItemsPerPage();
}

                                                                                                        //DETAIL PROJEKTU
if (document.querySelector('.articleDetail')) {
const file = window.location.pathname.split("/").pop();
if (file && file.endsWith(".html") && file !== "index.html") {
    const page = file.replace(".html", "");
    const projekt = projekts.find(p => p.tag === page);
    if (projekt) {

        if (projekt.description) {
        document.getElementById('description').setAttribute("content", projekt.description);
        }

        if(projekt.year){
        const yearDiv = document.createElement('div');
        yearDiv.classList.add('year');
        yearDiv.textContent = projekt.year;

        document.querySelector('.articleDetail .tags').appendChild(yearDiv);}

        if(projekt.type){
        const typeDiv = document.createElement('div');
        typeDiv.classList.add('type');
        switch (projekt.type) {
          case "skolni":
             typeDiv.classList.add('skolni')
            typeDiv.textContent = "Školní projekt";
            break;
        case "osobni":
           typeDiv.classList.add('osobni')
            typeDiv.textContent = "Osobní projekt";
            break;
            case "real":
               typeDiv.classList.add('real')
            typeDiv.textContent = "Reálný projekt";
            break;
          default:
            break;
        }
        document.querySelector('.articleDetail .tags').appendChild(typeDiv);}  

        document.querySelector('.barTitle').textContent = projekt.title;
        document.querySelector('.projektTitle').textContent = projekt.title;

        if (document.querySelector('.articlePopis')) {
            document.querySelector('.articlePopis').appendChild(document.createElement('h3')).textContent = "Popis";
            document.querySelector('.articlePopis').appendChild(document.createElement('p')).innerHTML = projekt.long;
        }
        if (document.querySelector('.articlePopis')) {
          if (projekt.link) {
            document.querySelector('.articlePopis').appendChild(document.createElement('h3')).textContent = "Odkazy";
            const links = projekt.link.split(";");
            const linkNames = projekt.link2 ? projekt.link2.split(";") : links;
            links.forEach((link, index) => {
              const a = document.createElement('a');
              a.classList.add('link-button');
              a.href = link;
              a.textContent = linkNames[index] || link;
              a.target = "_blank";
              document.querySelector('.articlePopis').appendChild(a);
            });
         }};

        if (document.querySelector('.slideshowContainer')) { 
          document.querySelector('.slideshowContainer').appendChild(document.createElement('div')).classList.add('prev');
          for (let i = 1; i <= projekt.imgnum; i++) {
            const slide = document.createElement('div');
            slide.classList.add('mySlides');
            const img = document.createElement('img');
            img.src = `./${i}.png`;
            img.alt = `${projekt.title} - obrázek ${i}`;
            slide.appendChild(img);
            document.querySelector('.slideshowContainer').appendChild(slide);
          }
          document.querySelector('.slideshowContainer').appendChild(document.createElement('div')).classList.add('next');
        }


    }
  }}

                                                                                                        // GALERIE V PROJEKTECH
if (document.querySelector('.slideshowContainer')) {                                                                                                        
const slides = document.querySelectorAll('.slideshowContainer .mySlides');
const prev= document.querySelector('.slideshowContainer .prev');
const next = document.querySelector('.slideshowContainer .next');
const indicator = document.querySelector('.articleSlides');

let current = 1;

function showSlide(n) {
    const total = slides.length;

    
    if (n < 1) current = 1;
    if (n > total) current = total;

    
    slides.forEach((slide, i) => {
        slide.style.display = (i === current - 1) ? "block" : "none";
    });

    prev.style.visibility = current === 1 ? "hidden" : "visible";
    next.style.visibility = current === total ? "hidden" : "visible";
    indicator.innerHTML = `${current} / ${total}`;
}

prev.addEventListener('click', () => {
    current--;
    showSlide(current);
});

next.addEventListener('click', () => {
    current++;
    showSlide(current);
});

showSlide(current);

}
                                                                                              //TOOGLE
const root = document.documentElement;
const toggle = document.getElementById('dark-mode-toggle');
const toggleMobile = document.getElementById('dark-mode-toggle-mobile');

function toggleTheme() {
    const currentTheme = root.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', newTheme);
    localStorage.setItem("theme", newTheme);
}

if (toggle) {
    toggle.addEventListener('click', () => {
        toggle.classList.toggle('move');
        toggleTheme();
    });
}

if (toggleMobile) {
    toggleMobile.addEventListener('click', () => {
        toggleMobile.classList.toggle('move');
        toggleTheme();
    });
}

                                                                                              //HAM NAV
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('open');
    });
    
    
    navMenu.addEventListener('click', (e) => {
        if (e.target.tagName === 'A') {
            hamburger.classList.remove('active');
            navMenu.classList.remove('open');
        }
    });
    
    
    document.addEventListener('click', (e) => {
        if (!hamburger.contains(e.target) && !navMenu.contains(e.target) && navMenu.classList.contains('open')) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('open');
        }
    });
}


});
