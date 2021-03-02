baguetteBox.run('.gallery');
// const search = new Filter('search', 'data-caption');

/****************************************/
/* SEARCH FUNCTION                      */
/****************************************/


function photoSearch() { 
    let input = document.getElementById('search').value;
    let a = document.getElementsByTagName('a');
    input = input.toLowerCase(); 
     
    
    for (i = 0; i < a.length; i++) { 
        if (!a[i].getAttribute('data-caption').toLowerCase().includes(input)) { 
            a[i].style.display="none"; 
        } else { 
            a[i].style.display="";				 
            } 
     } 
} 
