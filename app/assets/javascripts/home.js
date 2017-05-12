// # Place all the behaviors and hooks related to the matching controller here.
// # All this logic will automatically be available in application.js.
// # You can use CoffeeScript in this file: http://coffeescript.org/

  // arrays
  // var socrates = [
  //   "The secret of happiness, you see, is not found in seeking more, but in developing the capacity to enjoy less.",
  //   "Let him who would move the world first move himself.",
  //   "Death may be the greatest of all human blessings.",
  //   "No man has the right to be an amateur in the matter of physical training. It is a shame for a man to grow old without seeing the beauty and strength of which his body is capable.",
  //   "The only good is knowledge and the only evil is ignorance.",
  //   "Contentment is natural wealth, luxury is artificial poverty.",
  //   "Do not do to others what angers you if done to you by others.",
  //   "Every action has its pleasures and its price.",
  //   "Employ your time in improving yourself by other men's writings so that you shall come easily by what others have labored hard for.",
  //   "I am not an Athenian or a Greek, but a citizen of the world.",
  //   "The hour of departure has arrived, and we go our separate ways, I to die, and you to live. Which of these two is better only God knows.",
  //   "Prefer knowledge to wealth, for the one is transitory, the other perpetual.",
  //   "If you don't get what you want, you suffer; if you get what you don't want, you suffer; even when you get exactly what you want, you still suffer because you can't hold on to it forever. Your mind is your predicament. It wants to be free of change. Free of pain, free of the obligations of life and death. But change is law and no amount of pretending will alter that reality."
  // ]
  // var confucius = [
  //   "By three methods we may learn wisdom: First, by reflection, which is noblest; Second, by imitation, which is easiest; and third by experience, which is the bitterest.",
  //   "Wheresoever you go, go with all your heart.",
  //   "Everything has beauty, but not everyone sees it.",
  //   "It does not matter how slowly you go as long as you do not stop.",
  //   "He who knows all the answers has not been asked all the questions.",
  //   "If you make a mistake and do not correct it, this is called a mistake.",
  //   "Life is really simple, but we insist on making it complicated.",
  //   "The man who moves a mountain begins by carrying away small stones.",
  //   "The funniest people are the saddest ones.",
  //   "Study the past if you would define the future.",
  //   "Before you embark on a journey of revenge, dig two graves.",
  //   "To be wronged is nothing, unless you continue to remember it.",
  //   "Respect yourself and others will respect you.",
  //   "Silence is a true friend who never betrays.",
  //   "You cannot open a book without learning something.",
  //   "Attack the evil that is within yourself, rather than attacking the evil that is in others.",
  //   "When you see a good person, think of becoming like her/him. When you see someone not so good, reflect on your own weak points.",
  //   "What the superior man seeks is in himself; what the small man seeks is in others.",
  //   "The man who asks a question is a fool for a minute, the man who does not ask is a fool for life.",
  //   "I hear and I forget. I see and I remember. I do and I understand.",
  //   "Music produces a kind of pleasure which human nature cannot do without.",
  //   "It is not the failure of others to appreciate your abilities that should trouble you, but rather your failure to appreciate theirs."
  // ]
  // var proverbs = [
  //   "Absence cools moderate passions, and inflames violent ones.",
  //   "Adversity makes a man wise, not rich.",
  //   "Give neither advice nor salt until you are asked for it.",
  //   "He that's afraid of wounds must not come nigh a battle.",
  //   "Age before honesty.",
  //   "Two of a trade seldom agree.",
  //   "Agues come on horseback, but go away on foot.",
  //   "Good ale is meat, drink, and cloth.",
  //   "He that buys land buys many stones, He that buys flesh buys many bones, He that buys eggs buys many shells, He that buys ale buys nothing else.",
  //   "A bad day never hath a good night.",
  //   "There's no great banquet but some fare ill.",
  //   "Barefooted men should not tread on thorns.",
  //   "At a great bargain make a great pause.",
  //   "One beats the bush and another catcheth the bird.",
  //   "Once a year butter is in the cow's horn.",
  //   "Tell me what company you keep, and I will tell you who you are.",
  //   "A merry companion on the road is as good as a nag.",
  //   "He that knows himself best, esteems himself least.",
  //   "Fair and softly go far in a day.",
  //   "Happy is he who knows his follies in his youth.",
  //   "No one is a fool always; every one sometimes.",
  //   "A fool may ask more questions in half an hour than a wise man can answer in seven years.",
  //   "Fortune favours the brave.",
  //   "Eaten bread is soon forgotten.",
  //   "What the heart thinketh, the tongue speaketh."
  // ]
  // var haiku = [
  //   "All Heaven and Earth <br> Flowered white obliterate... <br> Snow...unceasing snow",
  //   "Arise from sleep, old cat, <br> And with great yawns and stretchings... <br> Amble out for love",
  //   "April's air stirs in <br> Willow-leaves...a butterfly <br> Floats and balances",
  //   "In the city fields <br> Contemplating cherry-trees... <br> Strangers are like friends",
  //   "Many solemn nights <br> Blond moon, we stand and marvel... <br> Sleeping our noons away",
  //   "Dead my old fine hopes <br> And dry my dreaming but still... <br> Iris, blue each spring",
  //   "Ballet in the air...<br> Twin butterflies until, twice white <br> They Meet, they mate"
  // ]
  // var animalFacts = [
  //   'The first sharks lived more than 400 million years ago—200 million years before the first dinosaurs. They have changed very little over the eons.',
  //   'Unlike dogs, cats do not have a sweet tooth. Scientists believe this is due to a mutation in a key taste receptor.',
  //   'There are approximately 38,000 known species of spiders. Scientists believe there are probably as many more to be discovered.',
  //   'The life span of giant pandas in the wild is approximately 20 years. Captive pandas may live to be 25-30 years old.',
  //   'All dogs can be traced back 40 million years ago to a weasel-like animal called the Miacis which dwelled in trees and dens. The Miacis later evolved into the Tomarctus, a direct forbear of the genus Canis, which includes the wolf and jackal as well as the dog.',
  //   'Sharks belong to a group of fish known as the elasmobranchs, or cartilaginous fishes. Rays and skates, which may have evolved from sharks, also belong to this group.',
  //   'When a cat chases its prey, it keeps its head level. Dogs and humans bob their heads up and down.',
  //   'Spiders are vital to a healthy ecosystem. They eat harmful insects, pollinate plants, and recycle dead animal and plants back into the earth. They are also a valuable food source for many small mammals, birds, and fish.',
  //   'The eyespots of a giant panda cub are initially in the shape of a circle. As the cub grows, the circles become shaped like a teardrop.',
  //   'Small quantities of grapes and raisins can cause renal failure in dogs. Chocolate, macadamia nuts, cooked onions, or anything with caffeine can also be harmful.',
  //   'Because sharks very rarely get cancer, scientists study their cartilage in the hopes of finding a cure for the disease.',
  //   'The technical term for a cat’s hairball is a “bezoar.”',
  //   'The giant panda has been on the endangered species list since 1990. The most significant threats to pandas are habitat loss and poaching. China is only approximately 5% greater than the U.S. in area but has four times the population.',
  //   'Male spiders weave a small “sperm” web. They then place a drop of semen on the web, suck it up with their pedipalps, and then use the pedipalp to insert the sperm into the female.',
  //   'Apple and pear seeds contain arsenic, which may be deadly to dogs.',
  //   'The first written account of a shark attack is found in Herodotus’ (c. 484–425 B.C.) description of hordes of “monsters” devouring the shipwrecked sailors of the Persian fleet.',
  //   'A group of cats is called a “clowder.”',
  //   'Pandas have been a symbol of peace in China. For example, hundreds of years ago, warring tribes in China would raise a flag with a picture of a panda on it to stop a battle or call a truce.',
  //   'Dogs have sweat glands in between their paws.',
  //   'While blood likely does not provoke a shark to attack, a shark in the vicinity likely can detect the blood. Without any conclusive proof of how sharks might respond, some scientists suggest women stay out of the water while menstruating.',
  //   'A cat can’t climb head first down a tree because every claw on a cat’s paw points the same way. To get down from a tree, a cat must back down.',
  //   'The Bagheera kiplingi is the world’s only (mostly) vegetarian spider.',
  //   'Giant pandas are on the brink of extinction, with just over 1,000 pandas left in the world. Scientists are hoping to increase the wild panda population to 5,000 by 2025.',
  //   'Giant pandas are on the brink of extinction, with just over 1,000 pandas left in the world. Scientists are hoping to increase the wild panda population to 5,000 by 2025.',
  //   'In 2003, Dr. Roger Mugford invented the “wagometer,” a device that claims to interpret a dog’s exact mood by measuring the wag of its tail.',
  //   'When a shark eats food that it can’t digest (like a turtle shell or tin can), it can vomit by thrusting its stomach out its mouth then pulling it back in.',
  //   'Cats make about 100 different sounds. Dogs make only about 10.',
  //   'The red panda and the giant panda share the same habitat and diet, and both animals are also endangered. However, scientific tests show that the red panda is in the raccoon family while the giant panda is in the bear family. Some scientists believe that the giant panda is so special that it should belong to its own family group.',
  //   'In rare instances, some spider bites can cause blood disorders. For example, the brown recluse venom may cause red blood cells to burst. This can lead to other symptoms, such as acute kidney injury and jaundice.',
  //   'Ancient Egyptians revered their dogs. When a pet dog would die, the owners shaved off their eyebrows, smeared mud in their hair, and mourned aloud for days.',
  //   'A shark’s jaw is not attached to its cranium. Because its mouth is situated on the underside of its head, a shark can temporarily dislocate its jaw and jut it forward to take a bite.',
  //   'According to legend, the panda was once an all-white bear. When a small girl tried to save a panda cub from being attacked by a leopard, the leopard killed the girl instead. Pandas came to her funeral wearing armbands of black ashes. As they wiped their eyes, hugged each other, and covered the ears, they smudged the black ashes.',
  //   'The venom of the black widow spider attacks nerves by blocking their signals to the muscles, which causes the muscles to contract repeatedly and often painfully. Black widow bites can also cause other nerve-related problems, such as high blood pressure, restlessness, and severe facial spasms.',
  //   'Dogs have three eyelids. The third lid, called a nictitating membrane or “haw,” keeps the eye lubricated and protected.',
  //   'Before sandpaper was invented, people used the rough skin of sharks, called shagreen, to smooth and polish wood. Japanese warriors wrapped the skin around the handles of their swords to keep the swords from slipping out of their hands.',
  //   'There are more than 500 million domestic cats in the world, with approximately 40 recognized breeds.',
  //   'Pandas can stand upright, but their short hind legs aren’t strong enough to support their bodies. A panda’s bones are twice as heavy as the bones of other animals the same size.',
  //   'A dog’s shoulder blades are unattached to the rest of the skeleton to allow greater flexibility for running.',
  //   'The first pup to hatch inside the sand tiger shark mother devours its brothers and sisters until there are only two pups left, one on each side of the womb. This form of cannibalism is called oophagy.',
  //   'Pandas are pigeon-toed; in other words, they walk with their front paws turned inward.',
  //   'The first use of the word “shark” in English occurred in 1569. Previously, English sailors and fishermen used the term “sea dog” or the Spanish tiburón. It could possibly be from the German Schorck, which is a variant of Schurke (“scoundrel villain”) from shürgen (“to poke, stir”).',
  //   'While it is commonly thought that the ancient Egyptians were the first to domesticate cats, the oldest known pet cat was recently found in a 9,500-year-old grave on the Mediterranean island of Cyprus. This grave predates early Egyptian art depicting cats by 4,000 years or more.',
  //   'The most deadly spiders in the world include the black widow, funnel web, and brown recluse spiders. One of the most feared spiders in the world, the tarantula, actually has surprisingly weak venom and a bite that feels more like a wasp sting.',
  //   'The phrase “raining cats and dogs” originated in seventeenth-century England. During heavy rainstorms, many homeless animals would drown and float down the streets, giving the appearance that it had actually rained cats and dogs.',
  //   'Jellyfish are found in every ocean of the world. They are even found in some freshwater lakes and ponds.',
  //   'During the time of the Spanish Inquisition, Pope Innocent VIII condemned cats as evil and thousands of cats were burned. Unfortunately, the widespread killing of cats led to an explosion of the rat population, which exacerbated the effects of the Black Death.',
  //   'Many Chinese philosophers believe that the universe is made from two opposing forces, the Yin and Yang. The panda is one symbol of this philosophy with its contrasting black-and-white fur. The Chinese believe that the gentle nature of the panda demonstrates how the Yin and Yang bring peace and harmony when they are balanced.',
  //   'Pekingese and Japanese Chins were so important in the ancient Far East that they had their own servants and were carried around trade routes as gifts for kings and emperors. Pekingese were even worshipped in the temples of China for centuries.',
  //   'The most venomous spider in the world is the Brazilian Wandering Spider, or the banana spider. This aggressive spider wanders the forest floors of Central and South America looking for food. Just a small amount of venom is enough to kill a human.',
  //   'Each jellyfish tentacle is armed with thousands of cells called cnidoblasts. Inside the cnidoblasts are nematocysts, each of which contains a coiled stinging thread. When a fish or other object becomes tangled in the tentacles, the pressure inside the nematocysts causes the venomous threads to uncoil like a spring-loaded harpoon.',
  //   'The first cat in space was a French cat named Felicette (a.k.a. “Astrocat”) In 1963, France blasted the cat into outer space. Electrodes implanted in her brains sent neurological signals back to Earth. She survived the trip.',
  //   'While humans have muscles on the outside of their skeleton, spiders have muscles on the inside. A spider’s skeleton, or exoskeleton, covers and protects its muscles.',
  //   'The Portuguese man-of-war looks like a jellyfish, but it is not a true jellyfish. In fact, it is not even a single animal. It is a siphonophore, which is an animal made up of a colony of organisms that work together. Specifically, the man-of-war consists of four separate polyps. The top polyp is a gas-filled bladder that reminded people of the sails on a once common ship called a man-of-war.',
  //   'Approximately 40,000 people are bitten by cats in the U.S. annually.'
  // ]

  // var soc = Math.floor((Math.random() * 13) + 1);
  // var con = Math.floor((Math.random() * 22) + 1);
  // var prov = Math.floor((Math.random() * 25) + 1);
  // var haik = Math.floor((Math.random() * 7) + 1);
  // var ani = Math.floor((Math.random() * 54) + 1);
  //
  // var fillSoc = document.getElementById('confScroll');
  // fillSoc.innerHTML = socrates[soc];

  // random numbers
  var whichVid = Math.floor((Math.random() * 3) + 1);
  var swPeeps = Math.floor((Math.random() * 87) + 1);
  var pokePeeps = Math.floor((Math.random() * 721) + 1);


  // star wars api
  $.getJSON("http://swapi.co/api/people/" + swPeeps,
    function(response) {
      console.log(response);

      var name = response.name;
      var height = "Height: " + response.height;
      var mass = "Mass: " + response.mass;
      var hair = "Hair: " + response.hair_color;
      var skin = "Skin: " + response.skin_color;
      var eyes = "Eyes: " + response.eye_color;
      var birth_year = "Birth Year: " +response.birth_year;
      var gender = "Gender: " + response.gender;
      var species = response.species;
      var homeworld = response.homeworld;
      var films = response.films;


      $.getJSON(species + "?format=json",
        function(response) {
          console.log(response);

          var speciesName = "Species: " + response.name;
          var content = document.getElementById("content");

          var s = document.createElement("p");
          s.innerHTML = speciesName;
          content.appendChild(s);
        }
      );


      $.getJSON(homeworld + "?format=json",
        function(response) {
          console.log(response);

          var homeworldName = "Homeworld: " + response.name;
          var content = document.getElementById("content");

          var eight = document.createElement("p");
          var content = document.getElementById("content");
          eight.innerHTML = homeworldName;
          content.appendChild(eight);
        }
      );


      for (i = 0; i < response.films.length; i++) {

        var film = response.films[i];

          $.getJSON(film + "?format=json",
            function(response) {
              console.log(response);

              var filmsTitle = response.title;
              var filmContent = document.getElementById("filmContent");

              var nine = document.createElement("p");
              var content = document.getElementById("content");
              nine.innerHTML = filmsTitle;
              filmContent.appendChild(nine);
            }
          );
      }


      // HTML elements stored in variables
      var headline = document.getElementById("hTest");
      var content = document.getElementById("content");
      var one = document.createElement("p");
      var two = document.createElement("p");
      var three = document.createElement("p");
      var four = document.createElement("p");
      var five = document.createElement("p");
      var six = document.createElement("p");
      var seven = document.createElement("p");

      // populates HTML with API data
      headline.innerHTML = name;

      one.innerHTML = height;
      two.innerHTML = mass;
      three.innerHTML = hair;
      four.innerHTML = skin;
      five.innerHTML = eyes;
      six.innerHTML = birth_year;
      seven.innerHTML = gender;

      content.appendChild(one);
      content.appendChild(two);
      content.appendChild(three);
      content.appendChild(four);
      content.appendChild(five);
      content.appendChild(six);
      content.appendChild(seven);
    }
  );


  // pokemon api
  $.getJSON("http://pokeapi.co/api/v2/pokemon/" + pokePeeps + "/",
    function(response) {
      console.log(response);

      var pokeName = response.name;

      // HTML elements stored in variables
      var pokeContent = document.getElementById("pokeContent");
      var poke1 = document.createElement("p");

      // populates HTML with API data

      poke1.innerHTML = pokeName;
      pokeContent.appendChild(poke1);
    }
  );


  // chuck Norris jokes api
  $.getJSON("http://api.icndb.com/jokes/random",
    function(response) {
      console.log(response);

      var joke = response.value.joke;

      // HTML elements stored in variables
      var randomJoke = document.getElementById("randomJoke");
      var joke1 = document.createElement("span");

      // populates HTML with API data

      joke1.innerHTML = joke;
      randomJoke.appendChild(joke1);
    }
  );
