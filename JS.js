//проверка полной загрузки окна, чтобы можно было работать с изображением
window.addEventListener('load', function() {
    //получение элемента, содержащего изображение
    var objPicture = document.getElementById('pic');

    //получение файла изображения svg
    var svgContent = objPicture.contentDocument;

    //функция для очистки всех секторов
    function ClearFigs() {
        var figs = svgContent.getElementsByClassName('stFilled');
        for (var i=0; i < figs.length; i++){
            figs[i].setAttribute('class','stEmpty');
        }
    }

    // далее - обработка нажатий для каждого сектора

    //обработка нажатия 1 сектора
    //получение элемента 1 сектора из svg
    var fig1 = svgContent.getElementById('Fig1Filling');
    //обработка события нажатия
    fig1.onclick = function () {
        //очистка всех сеткоров
        ClearFigs();
        //заливка цветом сектора
        this.setAttribute('class','stFilled');
        //получения элемента соответствующей метки radiobutton
        var rad1 = document.getElementById('rad1');
        //включение метки
        rad1.checked = true;
    };
    //для остальных секторов - такая же обработка

    //обработка нажатия 2 сектора
    var fig2 = svgContent.getElementById('Fig2Filling');
    console.log(fig2);
    fig2.onclick = function () {
        ClearFigs();
        this.setAttribute('class','stFilled');
        var rad2 = document.getElementById('rad2');
        rad2.checked = true;
    };

    //обработка нажатия 3 сектора
    var fig3 = svgContent.getElementById('Fig3Filling');
    console.log(fig3);
    fig3.onclick = function () {
        ClearFigs();
        this.setAttribute('class','stFilled');
        var rad3 = document.getElementById('rad3');
        rad3.checked = true;
    };

    //обработка нажатия 4 сектора
    var fig4 = svgContent.getElementById('Fig4Filling');
    console.log(fig4);
    fig4.onclick = function () {
        ClearFigs();
        this.setAttribute('class','stFilled');
        var rad4 = document.getElementById('rad4');
        rad4.checked = true;
    };

    //обработка нажатия 5 сектора
    var fig5 = svgContent.getElementById('Fig5Filling');
    console.log(fig5);
    fig5.onclick = function () {
        ClearFigs();
        this.setAttribute('class','stFilled');
        var rad5 = document.getElementById('rad5');
        rad5.checked = true;
    };

    //обработка нажатия 6 сектора
    var fig6 = svgContent.getElementById('Fig6Filling');
    console.log(fig6);
    fig6.onclick = function () {
        ClearFigs();
        this.setAttribute('class','stFilled');
        var rad6 = document.getElementById('rad6');
        rad6.checked = true;
    };

    //обработка нажатия 7 сектора
    var fig7 = svgContent.getElementById('Fig7Filling');
    console.log(fig7);
    fig7.onclick = function () {
        ClearFigs();
        this.setAttribute('class','stFilled');
        var rad7 = document.getElementById('rad7');
        rad7.checked = true;
    };

    //обработка нажатия 8 сектора
    var fig8 = svgContent.getElementById('Fig8Filling');
    console.log(fig8);
    fig8.onclick = function () {
        ClearFigs();
        this.setAttribute('class','stFilled');
        var rad8 = document.getElementById('rad8');
        rad8.checked = true;
    };

    //обработка нажатия 9 сектора
    var fig9 = svgContent.getElementById('Fig9Filling');
    console.log(fig9);
    fig9.onclick = function () {
        ClearFigs();
        this.setAttribute('class','stFilled');
        var rad9 = document.getElementById('rad9');
        rad9.checked = true;
    };

    //обработка нажатия 10 сектора
    var fig10 = svgContent.getElementById('Fig10Filling');
    console.log(fig10);
    fig10.onclick = function () {
        ClearFigs();
        this.setAttribute('class','stFilled');
        var rad10 = document.getElementById('rad10');
        rad10.checked = true;
    };

    //обработка нажатия 11 сектора
    var fig11 = svgContent.getElementById('Fig11Filling');
    console.log(fig3);
    fig11.onclick = function () {
        ClearFigs();
        this.setAttribute('class','stFilled');
        var rad11 = document.getElementById('rad11');
        rad11.checked = true;
    };

    //обработка нажатия 12 сектора
    var fig12 = svgContent.getElementById('Fig12Filling');
    console.log(fig3);
    fig12.onclick = function () {
        ClearFigs();
        this.setAttribute('class','stFilled');
        var rad12 = document.getElementById('rad12');
        rad12.checked = true;
    };

    //обработка нажатия центрального сектора
    var figCenter = svgContent.getElementById('FigCenterFilling');
    console.log(figCenter);
    figCenter.onclick = function () {
        ClearFigs();
        this.setAttribute('class','stFilled');
        var rad0 = document.getElementById('rad0');
        rad0.checked = true;
    };

    //далее - обработка выбора разных пунктов radiobutton (и заливка соответсвующих секторов)

    //обработка выбора 1 radiobutton
    var radio1 = document.getElementById('rad1');
    radio1.onclick = function () {
        if (radio1.checked){
            ClearFigs();
            fig1.setAttribute('class','stFilled');
        }
    };

    //обработка выбора 2 radiobutton
    var radio2 = document.getElementById('rad2');
    radio2.onclick = function () {
        if (radio2.checked){
            ClearFigs();
            fig2.setAttribute('class','stFilled');
        }
    };

    //обработка выбора 3 radiobutton
    var radio3 = document.getElementById('rad3');
    radio3.onclick = function () {
        if (radio3.checked){
            ClearFigs();
            fig3.setAttribute('class','stFilled');
        }
    };

    //обработка выбора 4 radiobutton
    var radio4 = document.getElementById('rad4');
    radio4.onclick = function () {
        if (radio4.checked){
            ClearFigs();
            fig4.setAttribute('class','stFilled');
        }
    };

    //обработка выбора 5 radiobutton
    var radio5 = document.getElementById('rad5');
    radio5.onclick = function () {
        if (radio5.checked){
            ClearFigs();
            fig5.setAttribute('class','stFilled');
        }
    };

    //обработка выбора 6 radiobutton
    var radio6 = document.getElementById('rad6');
    radio6.onclick = function () {
        if (radio6.checked){
            ClearFigs();
            fig6.setAttribute('class','stFilled');
        }
    };

    //обработка выбора 7 radiobutton
    var radio7 = document.getElementById('rad7');
    radio7.onclick = function () {
        if (radio7.checked){
            ClearFigs();
            fig7.setAttribute('class','stFilled');
        }
    };

    //обработка выбора 8 radiobutton
    var radio8 = document.getElementById('rad8');
    radio8.onclick = function () {
        if (radio8.checked){
            ClearFigs();
            fig8.setAttribute('class','stFilled');
        }
    };

    //обработка выбора 9 radiobutton
    var radio9 = document.getElementById('rad9');
    radio9.onclick = function () {
        if (radio9.checked){
            ClearFigs();
            fig9.setAttribute('class','stFilled');
        }
    };

    //обработка выбора 10 radiobutton
    var radio10 = document.getElementById('rad10');
    radio10.onclick = function () {
        if (radio10.checked){
            ClearFigs();
            fig10.setAttribute('class','stFilled');
        }
    };

    //обработка выбора 11 radiobutton
    var radio11 = document.getElementById('rad11');
    radio11.onclick = function () {
        if (radio11.checked){
            ClearFigs();
            fig11.setAttribute('class','stFilled');
        }
    };

    //обработка выбора 12 radiobutton
    var radio12 = document.getElementById('rad12');
    radio12.onclick = function () {
        if (radio12.checked){
            ClearFigs();
            fig12.setAttribute('class','stFilled');
        }
    };

    //обработка выбора radiobutton центрального сектора
    var radioCentral = document.getElementById('rad0');
    radioCentral.onclick = function () {
        if (radioCentral.checked){
            ClearFigs();
            figCenter.setAttribute('class','stFilled');
        }
    };
});
