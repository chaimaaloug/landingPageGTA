
/*======== COUNTDOWN TIMER =========*/
(function () {
    const second = 1000,
          minute = second * 60,
          hour = minute * 60,
          day = hour * 24;

    let today = new Date(),
        dd = String(today.getDate()).padStart(2, "0"),
        mm = String(today.getMonth() + 1).padStart(2, "0"),
        yyyy = today.getFullYear(),
        nextYear = yyyy + 1,
        dayMonth = "12/15/",
        releaseDay = dayMonth + yyyy;
    
    today = mm + "/" + dd + "/" + yyyy;
    if (today > releaseDay) {
      releaseDay = dayMonth + nextYear;
    }
    
    const countDown = new Date(releaseDay).getTime(),
        x = setInterval(function() {    
            const now = new Date().getTime(),
            distance = countDown - now;
  
            document.getElementById("days").innerText = Math.floor(distance / (day)),
            document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
            document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
            document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);
  
          if (distance < 0) {
            document.getElementById("countdown").style.display = "none";
            document.getElementById("content").style.display = "block";
            clearInterval(x);
          }
        }, 0)
    }());


/*========= FAQ LIST ==========*/
const toggles = document.querySelectorAll('.c-faq-toggle');
toggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
        toggle.parentNode.classList.toggle('active');
    });
});


/*======== AGE VERIFICATION ==========*/

/*======== SLIDER SECTION ==========*/
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  grabCursor: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

/*======== RESPONSIVE MENU ===========*/


/*======== TRANSLATION SCRIPT ===========*/
let langs = document.querySelector(".langs"),
     link = document.querySelectorAll("a"),
     linkOne = document.querySelector(".linkOne"),
     linkTwo = document.querySelector(".linkTwo"),
     linkThree = document.querySelector(".linkThree"),
     mainTitle = document.querySelector(".hero-text-title");
     mainBtn = document.querySelector(".mainBtn");
     preorderBotton = document.querySelector(".preorderBotton");

     clydeBtn = document.querySelector(".clyde-btn");

     preorderTitle = document.querySelector(".c-section-version__title");
     bonusTitle = document.querySelector(".c-section-version__right--title");
     bonusDesc = document.querySelector(".c-section-version__right--text");

     selectPlateform = document.querySelector(".c-section-version__btn");

     introTitle = document.querySelector(".c-section-intro__title");
     introDescr = document.querySelector(".c-section-intro__desc");

     charactersTitle = document.querySelector(".c-section-characters__title"),
     btn1 = document.querySelector(".btnOne");
     btn2 = document.querySelector(".btnTwo");
     desc1 = document.querySelector(".descOne");
     desc2 = document.querySelector(".descTwo");

     overviewTitle = document.querySelector(".c-section-overview__title"),

     overviewTitle1 = document.querySelector(".c-section-overview__title-1"),
     overviewDesc1 = document.querySelector(".c-section-overview__desc-1"),
     overviewTitle2 = document.querySelector(".c-section-overview__title-2"),
     overviewDesc2 = document.querySelector(".c-section-overview__desc-2"),
     overviewTitle3 = document.querySelector(".c-section-overview__title-3"),
     overviewDesc3 = document.querySelector(".c-section-overview__desc-3"),
     overviewTitle4 = document.querySelector(".c-section-overview__title-4"),
     overviewDesc4 = document.querySelector(".c-section-overview__desc-4"),

     partnersTitle = document.querySelector(".c-section-partner__title"),

     questionOne = document.querySelector(".one");
     respOne = document.querySelector(".respOne");

     questionTwo = document.querySelector(".two");
     respTwo = document.querySelector(".respTwo");

     questionThree = document.querySelector(".three");
     respThree = document.querySelector(".respThree");

     questionFour = document.querySelector(".four");
     respFour = document.querySelector(".respFour");

     questionFive = document.querySelector(".five");
     respFive = document.querySelector(".respFive");

     day = document.querySelector(".day");
     hours = document.querySelector(".hours");
     minutes = document.querySelector(".minutes");
     secondes = document.querySelector(".secondes");




link.forEach(el=>{
      el.addEventListener("click", ()=>{
          langs.querySelector(".active").classList.remove("active");
          el.classList.add("active");

          let attr = el.getAttribute("language")
           console.log("fgjdshfgjsf")
          mainTitle.textContent = data[attr].mainTitle
          mainBtn.textContent = data[attr].mainBtn
          linkOne.textContent = data[attr].linkOne
          linkTwo.textContent = data[attr].linkTwo
          linkThree.textContent = data[attr].linkThree
          preorderBotton.textContent = data[attr].preorderBotton

          bonusTitle.textContent = data[attr].bonusTitle
          bonusDesc.textContent = data[attr].bonusDesc

          preorderTitle.textContent = data[attr].preorderTitle
          selectPlateform.textContent = data[attr].selectPlateform

          introTitle.textContent = data[attr].introTitle
          introDescr.textContent = data[attr].introDescr

          charactersTitle.textContent = data[attr].charactersTitle
          btn1.textContent = data[attr].btn1
          btn2.textContent = data[attr].btn2
          desc1.textContent = data[attr].desc1
          desc2.textContent = data[attr].desc2

          overviewTitle.textContent = data[attr].overviewTitle
          console.log("fgjdshfgjsf")
          overviewTitle1.textContent = data[attr].overviewTitle1
          overviewDesc1.textContent = data[attr].overviewDesc1
          overviewTitle2.textContent = data[attr].overviewTitle2
          overviewDesc2.textContent = data[attr].overviewDesc2
          overviewTitle3.textContent = data[attr].overviewTitle3
          overviewDesc3.textContent = data[attr].overviewDesc3
          overviewTitle4.textContent = data[attr].overviewTitle4
          overviewDesc4.textContent = data[attr].overviewDesc4


          partnersTitle.textContent = data[attr].partnersTitle

          questionOne.textContent = data[attr].questionOne
          respOne.textContent = data[attr].respOne

          questionTwo.textContent = data[attr].questionTwo
          respTwo.textContent = data[attr].respTwo

          questionThree.textContent = data[attr].questionThree
          respThree.textContent = data[attr].respThree

          questionFour.textContent = data[attr].questionFour
          respFour.textContent = data[attr].respFour

          questionFive.textContent = data[attr].questionFive
          respFive.textContent = data[attr].respFive

          day.textContent = data[attr].day
          hours.textContent = data[attr].hours
          minutes.textContent = data[attr].minutes
          secondes.textContent = data[attr].secondes

     })
})

let data = {
     english: {
          mainTitle: "Release scheduled for december 15, 2022",
          mainBtn:"Pre-order",
          preorderBotton: "Pre-order",
          selectPlateform:"SELECT A PLATFORM",
          preorderTitle:"Pre-order Now",
          clydeBtn: "See Bonnie",
          bonusTitle:"Launch Bonus",
          bonusDesc:"For all pre-orders you will receive $1,000,000 to spend in the game. That is $500,000 for your characters in GTA Online and $500,000 which will be awarded to Franklin solo at the start of the game. If you pre-order the game before December 1 on the Rockstar website, you will also have games offered in digital version from the following list :",

          linkOne: "Overview",
          linkTwo: "Features",
          linkThree: "Partners",
          day: "DAYS",
          hours:" HOURS",
          minutes:" MINUTES",
          secondes:"SECONDES",

          introTitle: "Welcome to Vice City",
          introDescr: "When a young street hustler, a retired bank robber, and a terrifying psychopath find themselves mixed up with some of the scariest and most deranged elements of the underworld, the US government, and the entertainment industry, they must pull off a series of dangerous heists to survive in an unforgiving city in which they can't trust anyone - let alone each other Current players can transfer both GTAV's Story Mode progress and characters and progression from GTA Online to PlayStation 5 and Xbox Series X|S with one-time migration.",

          charactersTitle: "Characters",
          desc1: "The fate of Hope County is in your hands. Take on the cult solo or team up with a fellow resister in co-op mode and wreak havoc upon Joseph Seed and his band of cult followers. In the biggest Far Cry release ever, you'll have everything at your disposal – from hired guns to hired fangs and the baddest arsenal this side of the Mississippi.",
          desc2: "The fate of Hope County is in your hands. Take on the cult solo or team up with a fellow resister in co-op mode and wreak havoc upon Joseph Seed and his band of cult followers. In the biggest Far Cry release ever, you'll have everything at your disposal – from hired guns to hired fangs and the baddest arsenal this side of the Mississippi.",
          btn1:"See Clyde",
          btn2:"See Bonnie",

          overviewTitle: "Game Overview",
          overviewTitle1:"OPEN WORLD MULTIPLAYER",
          overviewDesc1:"The fate of Hope County is in your hands. Take on the cult solo or team up with a fellow resister in co-op mode and wreak havoc upon Joseph Seed and his band of cult followers. In the biggest Far Cry release ever, you'll have everything at your disposal – from hired guns to hired fangs and the baddest arsenal this side of the Mississippi.",

          overviewTitle2:"A WORLD THAT RESUMES",
          overviewDesc2:"The fate of Hope County is in your hands. Take on the cult solo or team up with a fellow resister in co-op mode and wreak havoc upon Joseph Seed and his band of cult followers. In the biggest Far Cry release ever, you'll have everything at your disposal – from hired guns to hired fangs and the baddest arsenal this side of the Mississippi.",
          overviewTitle3:"Activity",
          overviewDesc3:"The fate of Hope County is in your hands. Take on the cult solo or team up with a fellow resister in co-op mode and wreak havoc upon Joseph Seed and his band of cult followers. In the biggest Far Cry release ever, you'll have everything at your disposal – from hired guns to hired fangs and the baddest arsenal this side of the Mississippi.",
          overviewTitle4:"OPEN WORLD MULTIPLAYER",
          overviewDesc4:"The fate of Hope County is in your hands. Take on the cult solo or team up with a fellow resister in co-op mode and wreak havoc upon Joseph Seed and his band of cult followers. In the biggest Far Cry release ever, you'll have everything at your disposal – from hired guns to hired fangs and the baddest arsenal this side of the Mississippi.",

          partnersTitle:"Our Partners",

          questionOne:"How to find and manage your pre-orders?",
          respOne:"You can track recommended games and anything else you've purchased through the Microsoft Store by signing in to your Microsoft account.",

          questionTwo:"When can I play my game?",
          respTwo: "You can play the game as soon as it is released in your region, usually shortly after 00:00 local time on the release date.",

          questionThree:"What happens if the release date of a pre-order changes?",
          respThree:"The release dates of the pre-orders that we indicate on our site are based on information we receive from publishers or manufacturers and may be subject to change.",

          questionFour:"How to cancel a pre-order on the Store?",
          respFour:"When you pre-order a game, your wallet or payment method will be charged.",

          questionFive:"Can I change my payment method?",
          respFive:"If you were logged in when you made your booking pre-order, you will need to be logged in to modify your reservation.",
     },
     french: {
          mainTitle: "Sortie prévue le 15 décembre 2022",
          preorderBotton: "Précommander",
          mainBtn: "Précommander",
          selectPlateform:"SÉLECTIONNER UNE PLATEFORME",
          preorderTitle:"Précommandez dès maintenant",
          bonusTitle:"Bonus de lancement",
          bonusDesc:"Pour toutes pré-commandes vous recevrez 1.000.000 de dollars à dépenser dans le jeu. Soit 500.000$ pour votre personnages dans GTA Online et 500.000$ qui sera attribués à Franklin en solo au début du jeu. Si vous pré-commandez le jeu avant le 1 Décembre sur le site de Rockstar, vous aurez en plus de ça des jeux offert en version digitale parmi la liste suivante : ",

          linkOne: "Aperçu",
          linkTwo: "Fonctionnalités",
          linkThree: "Partenaires",
          day: "JOURS",
          hours: "HEURES",
          minutes: "MINUTES",
          secondes: "SECONDES",
          introTitle: "Bienvenue à Vice City",
          introDescr: "Lorsqu'un jeune arnaqueur de rue, un braqueur de banque à la retraite et un psychopathe terrifiant se retrouvent mêlés à certains des éléments les plus effrayants et les plus dérangés de la pègre, du gouvernement américain et de l'industrie du divertissement, ils doivent réussir une série de cambriolages dangereux pour survivre dans une ville impitoyable dans laquelle ils ne peuvent faire confiance à personne - encore moins les uns aux autres   Les joueurs actuels peuvent transférer à la fois la progression du mode Histoire de GTAV et les personnages et la progression de GTA Online vers PlayStation 5 et Xbox Series X|S avec une migration unique.",

          charactersTitle: "Personnages",
          desc1:  "Le destin de Hope County est entre vos mains. Affrontez le culte en solo ou faites équipe avec un compatriote résistant en mode coopératif et faire des ravages sur Joseph Seed et sa bande deadeptes de la secte. Dans la plus grande version de Far Cry à ce jour, vous aurez tout survotre disposition - des armes à feu aux crocs en location et le plus mauvais arsenal de ce côté du Mississippi.",
          desc2:  "Le destin de Hope County est entre vos mains. Affrontez le culte en solo ou faites équipe avec un compatriote résistant en mode coopératif et faire des ravages sur Joseph Seed et sa bande deadeptes de la secte. Dans la plus grande version de Far Cry à ce jour, vous aurez tout survotre disposition - des armes à feu aux crocs en location et le plus mauvais arsenal de ce côté du Mississippi.",
          btn1:"Voir Clyde",
          btn2:"Voir Bonnie",

          overviewTitle: "Aperçu du jeu",
          overviewTitle1:"MULTIJOUEUR EN MONDE OUVERT",
          overviewDesc1:"Le destin de Hope County est entre vos mains. Affrontez le culte en solo ou faites équipe avec un compatriote résistant en mode coopératif et faire des ravages sur Joseph Seed et sa bande deadeptes de la secte. Dans la plus grande version de Far Cry à ce jour, vous aurez tout survotre disposition - des armes à feu aux crocs en location et le plus mauvais arsenal de ce côté du Mississippi.",

          overviewTitle2: "UN MONDE QUI REPREND",
          overviewDesc2:"Le destin de Hope County est entre vos mains. Affrontez le culte en solo ou faites équipe avec un compatriote résistant en mode coopératif et faire des ravages sur Joseph Seed et sa bande deadeptes de la secte. Dans la plus grande version de Far Cry à ce jour, vous aurez tout survotre disposition - des armes à feu aux crocs en location et le plus mauvais arsenal de ce côté du Mississippi.",

          overviewTitle3: "ACTIVITÉS",
          overviewDesc3:"Le destin de Hope County est entre vos mains. Affrontez le culte en solo ou faites équipe avec un compatriote résistant en mode coopératif et faire des ravages sur Joseph Seed et sa bande deadeptes de la secte. Dans la plus grande version de Far Cry à ce jour, vous aurez tout survotre disposition - des armes à feu aux crocs en location et le plus mauvais arsenal de ce côté du Mississippi.",
          overviewTitle4: "MULTIJOUEUR EN MONDE OUVERT",
          overviewDesc4:"Le destin de Hope County est entre vos mains. Affrontez le culte en solo ou faites équipe avec un compatriote résistant en mode coopératif et faire des ravages sur Joseph Seed et sa bande deadeptes de la secte. Dans la plus grande version de Far Cry à ce jour, vous aurez tout survotre disposition - des armes à feu aux crocs en location et le plus mauvais arsenal de ce côté du Mississippi.",

          partnersTitle:"Nos Partenaires",

          questionOne:"Comment trouvez et gérez vos précommandes?",
          respOne:"Vous pouvez suivre les jeux précommandés et tout ce que vous avez acheté via le Microsoft Store en vous connectant à votre compte Microsoft.",

          questionTwo:"Quand puis-je jouer à mon jeu?",
          respTwo:"Vous pouvez jouer au jeu dès sa sortie dans votre région, généralement peu après 00h00 heure locale à la date de sortie.",

          questionThree:"Que se passe-t-il si la date de sortie d'une précommande change?",
          respThree:"Les dates de sortie des précommandes que nous indiquons sur notre site sont basées sur les informations que nous recevons des éditeurs ou des fabricants et peuvent être sujettes à modification.",

          questionFive:"Puis-je changer mon mode de paiement?",
          respFive:"Si vous étiez connecté lorsque vous avez effectué votre réservation de précommande, vous devrez être connecté pour modifier votre réservation.",


          questionFour:"Comment annuler une précommande sur le Store?",
          respFour:"Lorsque vous précommandez un jeu, votre portefeuille ou votre mode de paiement sera débité.",
     }
}

