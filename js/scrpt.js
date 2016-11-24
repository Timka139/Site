   (function () {
        var white =document.body.clientWidth,
    height= document.body.clientHeight;

    var testSyle = document.getElementsByClassName("my-nav-li"),
        style=testSyle[0].style;
        if (white <= 1801) {
            console.log(white);
            style.li.white= 100+"px";
            console.log(style.white);
        }
   })();

function tes () {
    var dalay=1000,i=0,b=000,c=0;

    startTimet = function () {
        var testSyle = document.getElementById("block-test"),
        style=testSyle.style;
        if (i<1000) {
            style.background= "rgba(216, "+c+", 81, "+b+")";
            b=b+0.1;
            c=c++;
            setTimeout(startTimet,dalay);
            i++;
        }
    };
    var timer = setTimeout(startTimet, dalay);
};
