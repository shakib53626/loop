






function calcBigsm(){
	var big = parseInt(document.getElementById('big-number').value);
	var sm = parseInt(document.getElementById('sm-number').value);
	var result1=document.getElementById("result1");

	for(var x=big; x<=sm; x++){
		var print1=parseInt(x);
		result1.innerHTML+=print1+" ";
	}
}

function calcBig(){
	var bgn = parseInt(document.getElementById('bgn').value);
	var smn = parseInt(document.getElementById('smn').value);
	var result2=document.getElementById("result2");

	for(var x=bgn; x>=smn; x--){
		var print2=parseInt(x);	
		result2.innerHTML+=print2+" ";
	}
}


var frm=document.getElementById("form");
frm.onsubmit=function(){
	var sch=document.getElementById("sch").value;
	var ech=document.getElementById("ech").value;
	var result=document.getElementById("result");

	var i;
	for(i=sch.charCodeAt(0); i<=ech.charCodeAt(0); i++){
		var print=String.fromCharCode(i);
		result.innerHTML+=print+" ";
	}
	return false;
}

function calcBn(){
	var bn=parseInt(document.getElementById("bn").value);
	var sn=parseInt(document.getElementById("sn").value);
	var result3=document.getElementById("result3");
	var sum=0;

	for(x=bn; x<=sn; x++){
		var print3=parseInt(x);
		result3.innerHTML+=print3+" ";
		sum=sum+x;
		
	}
	result3.innerHTML+="<br>"+ "Sum = " + sum;
}



function calcMalti(){
	var malti=parseInt(document.getElementById("malti").value);
	var result4=document.getElementById("result4");

	for(var x=1; x<=10; x++){
		var print4=parseInt(x);
		result4.innerHTML+= malti + " × " + print4 + " = " + (malti*print4)+ "<br>"; 
	}
}


function calcCount(){
	var count=parseInt(document.getElementById("count").value);
	var result5 = document.getElementById("result5");
	var sum=0;
	var coun=0;
	var reminder=0;
	var lastdigit=count%10;

	while(count != 0){
		reminder = count%10;
		sum = sum+reminder;
		count = parseInt(count/10);
		coun++;
	}
	result5.innerHTML+= "Sum = "+ sum+"<br>";
	result5.innerHTML+= "Total Digit Number = "+ coun+"<br>";
	
}


function calcDigitf(){
	var digit = parseInt(document.getElementById("digit-find").value);
	var result6 = document.getElementById("result6");
	var sum =0;
	var lastnum= digit % 10;
	while(digit >= 10){
		digit = parseInt(digit/10);
	}
	result6.innerHTML+= "First Digit = "+ digit+"<br>";
	result6.innerHTML+= "Last Digit = "+ lastnum+"<br>";
	result6.innerHTML+= "Sum of first or last digit = "+ (digit+lastnum);
}


function calcReverse(){
	var reverse=document.getElementById("reverse").value;
	var orginal=document.getElementById("reverse").value;
	var frq=document.getElementById("reverse").value;
	var result7=document.getElementById("result7");
	result7.innerHTML+= "Your Submition Value is = "+reverse+"<br>";
	var lastdigit=0;
	var product=1;
	var num=0;
	var freq=[];

	for(var i=0; i<10; i++){
		freq[i]=0;
	}
	while(reverse !=0){
		num=(num * 10)+(reverse%10);
		lastdigit=reverse%10;
		reverse=parseInt(reverse/10);
		product=parseInt(product*lastdigit);

		var lastd=frq%10;
		frq=parseInt(num/10);
		freq[lastd]++;
		
	}
	result7.innerHTML+="Reverse Number = "+ num+"<br>";
	result7.innerHTML+="Calculate Product Number Digit = "+product+"<br>";
	if(orginal == num){
		result7.innerHTML+= "This is a Palindrome Number = "+ num;
	}
	else{
		result7.innerHTML+= "This is Not a Palindrome Number = "+ num;
	}

	result7.innerHTML+= "Frequency of Digits in this Number";

	
	

}


