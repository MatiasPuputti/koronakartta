function drawWindow()
{

    let mobiiliIkkuna = false;
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    mobiiliIkkuna = true;
    }
    
    // Set the page height.
    let valkor = valikko.clientHeight;
    sisalto.style.height = document.body.clientHeight - valkor + "px"; 

    // set the menu height.
    valikko.style.width = valkor + "px";
    search.style.width = valkor + "px";

    // Height of hamburger menu.
    valikko.style.height = header.clientHeight + "px";

    let hsisval = sisavalikko.clientHeight;
    let hvalvii = valvii1.clientHeight / hsisval * 100;
    let valviitop = ((((hsisval - valvii1.clientHeight * 3) / 4) / hsisval) * 100);
    let border = (valikko.clientHeight - hsisval) / 2;


    if(mobiiliIkkuna) 
    {
        paivitetty.style.left = 0 + "%"
        paivitetty.style.width = 100 + "%";
    }

    sisalto.style.borderLeft = border + "px solid #c4c4c4";
    sisalto.style.borderRight = border + "px solid #c4c4c4";
    paivitetty.style.height =  valkor + "px";
    paivitetty.style.borderTop = border + "px solid #c4c4c4";
    paivitetty.style.borderBottom = border + "px solid #c4c4c4";
    sulku.style.border = border + "px solid #c4c4c4";
    sulku.style.width = header.clientHeight + "px";
    sulku.style.height = header.clientHeight + "px";
    ruksi.style.fontSize = header.clientHeight + "px";
    kartta.style.height = ((sisalto.clientHeight - paivitetty.clientHeight) - border * 2) + "px"

    // Hampurilaisvalikkojen asettelu.
    valvii1.style.top = valviitop + "%";
    valvii2.style.top = hvalvii + valviitop * 2 +"%";
    valvii3.style.top = hvalvii * 2 + valviitop * 3 +"%";

    // Haku palkin asettelu. 
    syote.style.left = valikko.clientWidth + "px";
    syote.style.width = header.clientWidth - valikko.clientWidth * 2 + "px"
    syote.style.height = hsisval + "px";
}
