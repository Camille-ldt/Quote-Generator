// Création d'un tableau d'objets contenant les citations avec leurs auteurs
let allQuote = [
    { quote: "Le succès n'est pas la clé du bonheur. Le bonheur est la clé du succès.", author: "– Albert Schweitzer" },
    { quote: "Il n'y a qu'une façon d'échouer, c'est d'abandonner avant d'avoir réussi.", author: "– Olivier Lockert" },
    { quote: "Le seul vrai voyage, ce ne serait pas d'aller vers de nouveaux paysages, mais d'avoir d'autres yeux.", author: "– Marcel Proust" },
    { quote: "La vie, c'est comme une bicyclette, il faut avancer pour ne pas perdre l'équilibre.", author: "– Albert Einstein" },
    { quote: "Crois en toi et tout sera possible.", author: "– Audrey Hepburn" },
    { quote: "Le plus grand risque est de ne jamais en prendre.", author: "– Mark Zuckerberg" },
    { quote: "Le succès, c'est se promener d'échecs en échecs tout en restant motivé.", author: "– Winston Churchill" },
    { quote: "Le courage n'est pas l'absence de peur, mais la capacité de vaincre ce qui fait peur.", author: "– Nelson Mandela" },
    { quote: "Les grandes choses ne sont jamais faites dans la précipitation, elles sont faites avec persévérance.", author: "– Léonard de Vinci" },
    { quote: "La vie est un mystère qu'il faut vivre, et non un problème à résoudre.", author: "– Gandhi" },
    { quote: "Il faut viser la lune, car même en cas d'échec, on atterrit dans les étoiles.", author: "– Oscar Wilde" },
    { quote: "La connaissance parle, mais la sagesse écoute.", author: "– Jimi Hendrix" },
    { quote: "La seule limite à notre épanouissement de demain sera nos doutes d'aujourd'hui.", author: "– Franklin D. Roosevelt" },
    { quote: "Ne cherchez pas à être quelqu'un de réussi, mais plutôt quelqu'un de valeur.", author: "– Albert Einstein" },
    { quote: "Rien n'est permanent, sauf le changement.", author: "– Héraclite" },
    { quote: "Il faut toujours viser la perfection, car c'est elle qui permet d'atteindre l'excellence.", author: "– Steve Jobs" },
    { quote: "Ce n'est pas ce que vous êtes qui vous retient, mais ce que vous pensez ne pas être.", author: "– Denis Waitley" },
    { quote: "Un pessimiste voit la difficulté dans chaque opportunité, un optimiste voit l’opportunité dans chaque difficulté.", author: "– Winston Churchill" },
    { quote: "La créativité, c'est l'intelligence qui s'amuse.", author: "– Albert Einstein" },
    { quote: "Le seul moyen de faire du bon travail, c'est d'aimer ce que vous faites.", author: "– Steve Jobs" },
    
]

  // Fonction qui permet de récupérer une citation aléatoire
  function getRandomQuote() {
      const index = Math.floor(Math.random() * allQuote.length);
      return allQuote[index];
  }
  
  // Fonction pour l'animation d'écriture
  async function typeWriter(element, text, speed ) {
      element.textContent = '';
      element.classList.add('cursor');
      
      for (let i = 0; i < text.length; i++) {
          element.textContent += text[i];
          await new Promise(resolve => setTimeout(resolve, speed));
      }
      
      await new Promise(resolve => setTimeout(resolve, 100)); // Pause à la fin
      element.classList.remove('cursor');
  }
  
  // Fonction qui permet d'afficher des citations aléatoires dans mon HTML avec animation
  async function showNewQuote() {
      const button = document.getElementById('new-quote');
      button.disabled = true;
      button.classList.add('opacity-50', 'cursor-not-allowed');
  
      const showRandomQuote = getRandomQuote();
      const quoteElem = document.getElementById('quote');
      const authorElem = document.getElementById('author');
  
      await typeWriter(quoteElem, `"${showRandomQuote.quote}"`, 70);
      await typeWriter(authorElem, `${showRandomQuote.author}`, 90);
  
      button.disabled = false;
      button.classList.remove('opacity-50', 'cursor-not-allowed');
  }
  
  // Button permettant l'affichage des citations aléatoirement
  document.addEventListener('DOMContentLoaded', () => {
      const button = document.getElementById('new-quote');
      button.addEventListener('click', showNewQuote);
      showNewQuote(); 
  });










