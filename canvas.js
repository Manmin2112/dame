window.onload = function()
{
    var c = document.getElementById('mon_canvas');
        if(!c)
        {
            alert("Impossible de récupérer le canvas");
            return;
        }

    var ctx = c.getContext('2d');
        if(!ctx)
        {
            alert("Impossible de récupérer le context du canvas");
            return;
        }


    //C'est ici que l'on placera tout le code servant à nos dessins.
//début case noir
  ctx.beginPath();
  ctx.fillStyle = 'grey';
    for (var i = 1; i <= 9 ; i+=2 ) {
          for (var j = 0; j < 9; j+=2) {
              ctx.fillRect(100*i, j*100,100, 100); //Case noirs
          ctx.fillRect(j*100, 100*i,100, 100);
          }
    }
      ctx.closePath();

//fin case noirs

//début du cadre et lignes

    ctx.beginPath();
    ctx.lineWidth= 10;
    ctx.strokeRect(0,0,1000,1000);
    ctx.closePath();
    var couleur = false ;
    //Lignes horizontale
    ctx.lineWidth= 1;
    ctx.beginPath();
    for (var i = 1; i <= 9; i++) {

        ctx.moveTo(0,100*i);
        ctx.lineTo(1000,100*i);
        ctx.stroke();

        ctx.moveTo(100*i,0);
        ctx.lineTo(100*i,1000);  //lignes vertical
        ctx.stroke();



    }
  ctx.closePath();
//fin du cadre et lignes




}//fin canvas
