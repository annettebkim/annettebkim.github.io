var add_to_cart = document.querySelectorAll('.btn-danger'); 
var count = 0;
document.querySelector('.fa-shopping-basket').setAttribute('data-value', count);
count++;

add_to_cart.forEach((elt)=>{
    elt.addEventListener('click',(e)=>{
        console.log(e.target.parentNode.parentNode.querySelector('.product-description').innerText);
        var img = e.target.parentNode.parentNode.querySelector('img').getAttribute('src');
        var title = e.target.parentNode.parentNode.querySelector('.product-description').innerText;
        document.querySelector('.basket-table').innerHTML += '<tr><td><img src="'+ img +'" width="100%"></td><td>'+ title +'</td></tr>';
        elt.innerHTML = '<div class="spinner"><div class="rect1"></div><div class="rect2"></div><div class="rect3"></div><div class="rect4"></div><div class="rect5"></div></div>';
        setTimeout(()=>{
            elt.innerHTML = 'تم إضافة المنتج إلى سلتك ';
            elt.className= 'btn btn-success mb-3 mt-2';
            document.querySelector('.fa-shopping-basket').setAttribute('data-value', count);
            setInterval(()=>{
                document.querySelector('.fa-shopping-basket').style.fontSize = '24px';
                setTimeout(()=>{
                    document.querySelector('.fa-shopping-basket').style.fontSize = '18px';
                },500);
            },1000);
            count++;
            document.querySelector('.fa-shopping-basket').style.fontWeight = 'bold';
            elt.style.fontWeight = 'bold';  
            window.scrollTo(0, 0); 

        },2000);
    })
});




/* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
function openNav() {
    document.getElementById("mySidenav").style.width = "80%";
    if(count != 1){
        document.querySelector('.empty-basket').style.display = 'none';
        document.querySelectorAll('.z1').forEach((elt)=>{
            elt.style.display = 'block';
        });
    }
    else{
        document.querySelector('.empty-basket').style.display = 'block';
        document.querySelectorAll('.z1').forEach((elt)=>{
            elt.style.display = 'none';
        });
    }
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }