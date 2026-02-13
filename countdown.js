// Set the date we're counting down to
var countDownDate = new Date("Feb 14, 2026 00:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = `<div class="card">
            <h2>Happy Valentines Day to you my love</h2>
        <p id="cardmessage">
            There's only so many ways I can say I love you but <br>
            I will still find a way to say it to you. When I <br> 
            think of love, a picture of you is the only thing <br> 
            that comes up. And seeing you smile is priceless to <br> 
            me. I'm glad that I can get to see you smile. It's <br>
            something I will love until the day I die.<br><br> 
            I think about the type of woman I want to spend my <br> 
            life with, someone kind, someone thoughtful, someone <br> 
            I can share the laughs and excitement with as well as<br>
            the mundane. And I find myself just describing you. <br>
            You have been such a blessing in my life I couldn't ask <br>
            for more, except for a way to end the distance. You <br>
            compliment my life so well, it just seems so easy with <br>
            you, to be myself and open up. I love loving you and I <br>
            will keep loving you.<br><br> 
            This relationship has taught me a lot of things I like <br> 
            and dislike, but more importantly, it has taught me how <br> 
            to love you. And I admit, it is not something that ever <br> 
            ends, but its something that I want to keep doing for you.<br> 
            Through the smiles and the tears, I will never stop loving<br> 
            you. I will always do my best to do right by you and bring a <br> 
            smile to your face. I've fallen in love with you and I <br> 
            will keep falling because with someone as amazing as you,<br> 
            what else is there to do.
        </p>        
        </div>
        <div class="pictures">
            <img src="pictures/pLot.jpeg">
            <img src="pictures/flower.jpg">
            <img src="pictures/Birthday.jpeg">
        </div>`;
  }
}, 1000);

