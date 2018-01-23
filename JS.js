var esc = document.createElement('div');
var opac = document.createElement('div');
var img = document.createElement('div');
var right = document.createElement('div');
var left = document.createElement('div');
var image = document.createElement('img');
var b = 0;
var tip = 0;
function gallery(a)
{
    var imgnav = "images/img" + a + ".jpg";
    b = a;
    opac.id = "opac";
    img.id = "bigimg";
    img.className = "photo";
    image.src = imgnav;
    switch(b)
    {
        case 1: image.alt = "Simeon Panda"; break;
        case 2: image.alt = "Lazar Angelov"; break;
        case 3: image.alt = "Ryan Terry"; break;
        case 4: image.alt = "Lazar Novovic"; break;
        case 5: image.alt = "Arnold Szwarzenegger"; break;
        case 6: image.alt = "Michal Karmowski"; break;
    }
    esc.id = "esc";
    esc.innerHTML = '<div class="glyph-icon flaticon-remove-button" onclick=remove()></div>';
    right.id = "right";
    right.innerHTML = '<div class="glyph-icon flaticon-shape" onclick=change(1)></div>';
    left.id = "left";
    left.innerHTML = '<div class="glyph-icon flaticon-arrows" onclick=change(-1)></div>';
    var body = document.getElementsByTagName('body')[0];
    body.appendChild(opac);
    body.appendChild(esc);
    body.appendChild(left);
    body.appendChild(img);
    body.appendChild(right);
    img.appendChild(image);
}
function remove()
{
    var body = document.getElementsByTagName('body')[0];
    body.removeChild(esc);
    body.removeChild(opac);
    body.removeChild(img);
    body.removeChild(right)
    body.removeChild(left);
}
function change(a)
{
    b = b + a;
    if (b == 7) b = 1;
    if (b == 0) b = 6;
    img.removeChild(image);
    img.appendChild(image);
    image.src = "images/img" + b + ".jpg";
    switch (b) {
        case 1: image.alt = "Simeon Panda"; break;
        case 2: image.alt = "Lazar Angelov"; break;
        case 3: image.alt = "Ryan Terry"; break;
        case 4: image.alt = "Lazar Novovic"; break;
        case 5: image.alt = "Arnold Szwarzenegger"; break;
        case 6: image.alt = "Michal Karmowski"; break;
    }
     
}
function change_tip(a) {
    if (sessionStorage.tip)
        sessionStorage.tip = Number(sessionStorage.tip) + 1+a;
    else sessionStorage.tip = 0;
    sessionStorage.tip = sessionStorage.tip % 5;
    var tiptext = document.getElementById('tips');
    var number = Number(sessionStorage.tip);
    switch (number)
    {
        case 0: tiptext.innerHTML = '1. Nie zniechęcaj się. Efekty na pewno nie będą widoczne po tygodniu, ale kiedy już je zauważysz, nie będziesz żałował.'; break;
        case 1: tiptext.innerHTML= "2.Pamiętaj że trening to zaledwie 30% sukcesu. Bez odpowiedniej diety twoje wysiłki na siłowni pójdą na marne."; break;
        case 2: tiptext.innerHTML= "3.Jeśli jedna z twoich części ciała nie rośnie, nie musisz diametralnie zwiększać ilości treningów. Pomyśl raczej o zmianie ćwiczeń, może obecne nie są dla Ciebie odpowiednie"; break;
        case 3: tiptext.innerHTML= '4.Kopiowanie treningów zawodowców może nie być dla Ciebie dobrą decyzją. Pamiętaj że ich organizm jest przygotowywany do tego typu wysiłku, taki trening zwykłemu "śmiertelnikowi" mogą nawet zaszkodzić'; break;
        case 4: tiptext.innerHTML = "5.Nie bój się suplementów. W dzisiejszych czasach jedzenie zawiera bardzo mało witamin, oraz makroelementów, których braki możesz bezpiecznie uzupełnić przy użycciu suplementów."; break;
    }

}