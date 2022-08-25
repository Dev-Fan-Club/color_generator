let outputs = document.getElementById("outputs");

    function colors(){

    var red= document.getElementById("red").value;
    var green = document.getElementById("green").value;
    var blue = document.getElementById("blue").value;

    outputs.style.backgroundColor =
    'rgb(' + red + ',' + green + ',' + blue + ')';

    document.getElementById("output").innerHTML =  RGBToHex(red ,green, blue) ;
    //'rgb(' + red + ',' + green + ',' + blue + ')'
    }

    function setDefault(){

    }

    function copyToClipboard() {
        var copyText = document.getElementById("output");
        console.log(copyText);
        copyText.select();
        document.execCommand("copy");
         
     }
     function RGBToHex(r,g,b) {
        r = r.toString(16);
        g = g.toString(16);
        b = b.toString(16);
      
        if (r.length == 1)
          r = "0" + r;
        if (g.length == 1)
          g = "0" + g;
        if (b.length == 1)
          b = "0" + b;
      
        return "#" + r + g + b;
      }