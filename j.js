let jokeArray = ["What does a storm cloud wear under his raincoat? Thunderwear.", 
    "What do kids play when their mom is using the phone? Bored games.",
    "Why are snails slow? Because they're carrying a house on their back.", 
    "What's the smartest insect? A spelling bee!", "What is fast, loud and crunchy? A rocket chip.",
    "How does the ocean say hi? It waves!", 
    "Name the kind of tree you can hold in your hand? A palm tree!", 
    "What do birds give out on Halloween? Tweets.",
    "What has ears but cannot hear? A cornfield."];

let btn = document.getElementById("Generate-joke");   // Get access of button by id.
let joke = document.querySelector("#Joke");           // get acess of array by querySelector.

generateJokes = () =>{
return Math.floor(Math.random()*jokeArray.length);  // Generate random number by using (Math.random) 0 to 1 & roundof it by usning math.floor
}

btn.addEventListener('click', () =>{
joke.textContent = jokeArray[generateJokes()];  // textContent is same as inner.html to display on html file. 
})