


function calcWeek(){
    var week = document.getElementById('week').value;
    var result = document.getElementById('w-output').value;

    if(week == 1){
        document.getElementById('w-output').value = 'Saterday';
    }
    else if(week == 2){
        document.getElementById('w-output').value = 'Sunday';
    }
    else if(week == 3){
        document.getElementById('w-output').value = 'Monday';
    }
    else if(week == 4){
        document.getElementById('w-output').value = 'Tuesday';
    }
    else if(week == 5){
        document.getElementById('w-output').value = 'Wednesday';
    }
    else if(week == 6){
        document.getElementById('w-output').value = 'Thursday';
    }
    else if(week == 7){
        document.getElementById('w-output').value = 'Friday';
    }
    else{
        document.getElementById('w-output').value = 'Not a week number';
    }


}


function calcMonth(){
    var month = document.getElementById('month').value;
    var result = document.getElementById('moutput').value;

    if(month == 1){
        document.getElementById('moutput').value = 'January = 31';
    }
    else if(month == 2){
        document.getElementById('moutput').value = 'February = 28/29';
    }
    else if(month == 3){
        document.getElementById('moutput').value = 'March = 31';
    }
    else if(month == 4){
        document.getElementById('moutput').value = 'April = 30';
    }
    else if(month == 5){
        document.getElementById('moutput').value = 'May = 31';
    }
    else if(month == 6){
        document.getElementById('moutput').value = 'June = 30';
    }
    else if(month == 7){
        document.getElementById('moutput').value = 'July = 31';
    }
    else if(month == 8){
        document.getElementById('moutput').value = 'August = 31';
    }
    else if(month == 9){
        document.getElementById('moutput').value = 'September = 30';
    }
    else if(month == 10){
        document.getElementById('moutput').value = 'October = 31';
    }
    else if(month == 11){
        document.getElementById('moutput').value = 'November = 30';
    }
    else if(month == 12){
        document.getElementById('moutput').value = 'December = 31';
    }
    else{
        document.getElementById('moutput').value = 'Not a month number';
    }

}


function calcVowel(){
    var vowel = document.getElementById('vowel').value;
    var result = document.getElementById('voutput').value;

    if(vowel=='a' || vowel=='e' || vowel=='i' || vowel=='o' || vowel=='u' || vowel=='A' || vowel=='E' || vowel=='I' || vowel=='O' || vowel=='U'){
        document.getElementById('voutput').value='This is Vowel';
    }
    else{
        document.getElementById('voutput').value='This is consunent';
    }
}


function calcBig(){
    var firstnumber = document.getElementById('first-number').value;
    var secondnumber = document.getElementById('second-number').value;

    if(firstnumber > secondnumber){
        document.getElementById('bigoutput').value='Bigest Number is = '+ firstnumber;
    }
    else{
        document.getElementById('bigoutput').value= 'Bigest Number is = '+ secondnumber;
    }
}

function calcOdd(){
    var odd = document.getElementById('odd').value;
    var result = document.getElementById('oddoutput').value;

    if(odd%2 == 0){
        document.getElementById('oddoutput').value='This is a Even number';
    }
    else{
        document.getElementById('oddoutput').value='This is a Odd number';
    }
}


function calcPositive(){
    var positive = document.getElementById('positive').value;
    if(positive>0){
        document.getElementById('positiveoutput').value=positive + ' = Positive number';
    }
    else if(positive==0){
        document.getElementById('positiveoutput').value=positive + ' = This is Zero';
    }
    else{
        document.getElementById('positiveoutput').value=positive + ' = Negative number';
    }
}

function calcRooted(){
    var rooted = document.getElementById('rooted').value;
    var a = Math.sqrt(rooted);
    document.getElementById('rootoutput').value='Rooted Value is =' + a;
}


function calcChe(){
    var che = document.getElementById('che').value;
    if(che >= 'a' && che <= 'z' || che >= 'A' && che <= 'Z'){
        document.getElementById('cheoutput').value='This is Character';
    }
    else if(che >= '0' && che <= '9'){
        document.getElementById('cheoutput').value='This is Number';
    }
    else{
        document.getElementById('cheoutput').value='This is special character';
    }
}

function calcUpper(){
    var upper = document.getElementById('upper').value;
    if(upper >= 'A' && upper <= 'Z'){
        document.getElementById('upperoutput').value='Uppercase';
    }
    else if(upper >= 'a' && upper <= 'z'){
        document.getElementById('upperoutput').value='Lowercase';
    }
    else{
        document.getElementById('upperoutput').value='Not a Character';
    }
}

function calcAngle(){
    var angle1 = parseInt(document.getElementById('angle1').value);
    var angle2 = parseInt(document.getElementById('angle2').value);
    var angle3 = parseInt(document.getElementById('angle3').value);

    var sum = angle1+angle2+angle3;

    if(sum == 180 && angle1>0 && angle2>0 && angle3>0){
        document.getElementById('angleoutput').value='Valid Triangle';
    }
    else{
        document.getElementById('angleoutput').value='Not a Triangle'
    }
}

function calcLine(){
    var a = parseInt(document.getElementById('line1').value);
    var b = parseInt(document.getElementById('line2').value);
    var c = parseInt(document.getElementById('line3').value);

    if(a+b>c && a+c>b && b+c>a){
        document.getElementById('lineoutput').value='Triangle';
    }
    else{
        document.getElementById('lineoutput').value='Not a Triangle';
    }
}

function calcCost(){
    var cost = parseInt(document.getElementById('cost').value);
    var sell = parseInt(document.getElementById('sell').value);

    if(cost < sell){
        document.getElementById('costoutput').value=(sell-cost) +' টাকা লাভ';
    }
    else if(cost > sell){
        document.getElementById('costoutput').value=(cost-sell) +' টাকা লস';
    }
    else{
        document.getElementById('costoutput').value='NO লাভ NO লস'
    }
}

function calcGread(){
    var fname = document.getElementById('fname').value;
    var lname = document.getElementById('lname').value;
    var ph = parseInt(document.getElementById('ph').value);
    var ch = parseInt(document.getElementById('ch').value);
    var bi = parseInt(document.getElementById('bi').value);
    var ma = parseInt(document.getElementById('ma').value);
    var co = parseInt(document.getElementById('co').value);

    var fulname = document.getElementById('name').value=fname + ' ' + lname;
    var totalmark = (ph+ch+bi+ma+co)/5;

    if(totalmark >= 80 && totalmark <= 100){
        document.getElementById('avgoutput').value= fulname + ' = ' + totalmark + ' / A+';
    }
    else if(totalmark >= 70 && totalmark <= 79){
        document.getElementById('avgoutput').value= fulname + ' = ' + totalmark + ' / A';
    }
    else if(totalmark >= 60 && totalmark <= 69){
        document.getElementById('avgoutput').value= fulname + ' = ' + totalmark + ' / A-';
    }
    else if(totalmark >= 50 && totalmark <= 59){
        document.getElementById('avgoutput').value= fulname + ' = ' + totalmark + ' / B';
    }
    else if(totalmark >= 40 && totalmark <= 49){
        document.getElementById('avgoutput').value= fulname + ' = ' + totalmark + ' / C';
    }
    else if(totalmark >= 33 && totalmark <= 39){
        document.getElementById('avgoutput').value= fulname + ' = ' + totalmark + ' / D';
    }
    else if(totalmark >= 0 && totalmark <= 32){
        document.getElementById('avgoutput').value= fulname + ' Congraculation You Are Fail';
    }

    
}






    function calcStn(){
        var stn = parseInt(document.getElementById('stn').value);
        var enn = parseInt(document.getElementById('enn').value);

        for (var i = stn; i <= enn; i++) {
            var res = document.write(i);
        }
    document.getElementById('stnoutput').value=i;

    }

    



    
