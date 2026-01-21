const next = document.getElementById('next');

let num = 1;


next.addEventListener('click', () => {
    if(num == 1){
        num++;
        document.querySelector('.card').innerHTML = `
        <p> It's almost Valentines day <br>
            but I still want to let you know<br>
            how much I love you.<br>
        </p>`;
        
    }
    else if(num == 2){
        num++;
        document.querySelector('.card').innerHTML = `
        <p>You really have brought such<br>
            happiness to my life and I will be <br>
            forever grateful. It's been us <br>
            learing so much about about each<br>
            other. Learning how to care for <br>
            each other and love each other.<br> 
        </p>`;

    }
    else if(num == 3){
        num++;
        document.querySelector('.card').innerHTML = `
        <p>So all I want to ask is....<br>
        `;
        
    }
    else if(num == 4){
        window.location.href ="yesno.html";
    }
    
});