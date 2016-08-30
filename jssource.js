function changetext(a){
  var answer = $("#answer");
  $(answer).html(a);
}

//usernames used in titles to gain views
var usernames = ["Jacob Sartorius","Sam Pepper","Lance Stewart","RiceGum",
"KSI & Waka Flocka","fouseyTUBE","Marina Joyce","Jesse Wellens","SSSniperwolf",
"RomanAtwood","LispyJimmy","Unbox Therapy","PewDiePie","Misha","CaseyNeistat",
"Nadeshot","Leafy","Pyro","KEEMSTAR","Vitaly","KSI","Deji","Emmahdorable",
"FaZe","FunforLouis","Nfkrz","kwebbelkop","Justin Bieber","Selena Gomez",
"Philip Defranco","CashNastyGaming","The Slow Mo Guys","LEAFY",
"Comedyshortsgamer","Red Kiwiz","Harambe","Colossal Is Crazy","FineBros",
"LegendaryLea","PrankvsPrank","CopperCab","Claire Kittrell","Syndicate",
"PoodleCorp","Faze Rug"];

//tags used in titles to gain views
var tags = ["PlAcEfIsH Arrested","PlAcEfIsH Giveaways","PlAcEfIsH 9/11",
"Part 2","Cop PRANK! Hit & Run!","The Goddess of Love!","ft. PlAcEfIsH"];

//I mean, usernames are also tags.
tags = usernames.concat(tags);

//Using PlAcEfIsH as a placeholder for the name as WHY WOULD ANYONE TYPE LIKE THAT
var events = ["PlAcEfIsH PornHub Verified","PlAcEfIsH in DRAG!",
"PlAcEfIsH Nudes Confirmed?","PlAcEfIsH Films CRIME!","PlAcEfIsH Drinking",
"PlAcEfIsH Arrested!","PlAcEfIsH Giveaway FAKED?","PlAcEfIsH in title for VIEWS",
"PlAcEfIsH New Girlfriend!","Pornhub HACKED!","PlAcEfIsH NUDE",
"PlAcEfIsH Caught Sending D*ck Pics","PlAcEfIsH EXPOSED?","PlAcEfIsH SWATTED",
"PlAcEfIsH put a ring on it!","PlAcEfIsH North Korea",
"PlAcEfIsH Strike","PlAcEfIsH ARRESTED!","PlAcEfIsH for Subbotting",
"PlAcEfIsH Striked for BULLYING!","PlAcEfIsH New Music Video",
"PlAcEfIsH Homeless SCAM?","PlAcEfIsH Masturbation",
"PlAcEfIsH Back From The DEAD!","PlAcEfIsH Copy The Onion",
"PlAcEfIsH Calls Kids Cancer","PornHub ATTACKED!","PlAcEfIsH SHOT!",
"PlAcEfIsH Back Together?","PlAcEfIsH INTERVIEW","SEX CHANGE! PlAcEfIsH",
"GINGERS DO HAVE SOULS!!","PlAcEfIsH Hacked?"];


$(document).ready(function() {
  changetext(gen());
});

$(document).keypress(function(e) {
  changetext(gen());
});

function rand(arrayToTake, toReplace){
  //arrayToTake is the array to take a string from
  //toReplace is the data to use to replace any usage of PlAcEfIsH
  var selected1 = arrayToTake[Math.floor(Math.random() * arrayToTake.length)];

  //if only arrayToTake is supplied, choose a random string from it.
  if (typeof(toReplace) == "undefined"){
    return selected1;

  //if you are replacing a random choice with a string:
  } else if (typeof(toReplace) == "string"){
    return selected1.replace("PlAcEfIsH", toReplace);

  //if you are replacing a random choice with another random choice:
} else if (typeof(toReplace) == "array" || "object"){
    var selected2 = toReplace[Math.floor(Math.random() * toReplace.length)];
    return selected1.replace("PlAcEfIsH", selected2);

  };
};

var fontfaces = ["'Tiresias', sans-serif","'Lobster', cursive"];

function fontToggle(){
  $('.answer').css('font-family', fontfaces[0]);
  fontfaces.reverse();
};


function gen(){
  //gets a random name to be used as both a tag and in the event
  var name = rand(usernames);

  //An event using the chosen name
  var half = rand(events, name);
  var newTitle = half+" #DramaAlert";

  if (Math.random() < .8){
    newTitle += " " + rand(tags, usernames);

  } else{
    newTitle += " " + rand(events, usernames);
  };

  for (i = 0; i < 2; i++) {
    if (Math.random() < .8){
      newTitle += " - " + rand(tags, usernames);

    } else{
      newTitle += " - " + rand(events, usernames);
    };

  };

  return newTitle;
};
