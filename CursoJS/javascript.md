# COMANDOS JAVASCRIPT


String -> Number(Int, Float)
Number.parseInt(n);
Number.parseFloat(n);
Number(n);


Number -> String
String(n);
n.toString();


## Template String
m = "JavaScript"; 
"Eu estou aprendendo" + m;	//metodo sem Template String
`Eu estou aprendendo ${m}`; 	//metodo usando o Template String


## Formatando Strings
var s = "JavaScript";
s.length;			//quantos caracteres a string tem
s.toUpperCase();		//tudo para MAIÚSCULAS
s.toLowerCase();		//tudo para MINÚSCULAS


## Formatando Números
var n1 = 1545.5;
n1.toFixed(2);    == "1545.50" 
n1.toFixed(2).replace("." , ",");  == "1545,50" 
n1.toLocaleString("pt-BR" , {style: "currency", currency: "BRL"});   == "R$ 1,545.50"


## OPERAÇÕES JAVA SCRIPT

+ = Soma
- = Subtração 
* = Multiplicação
/ = Divisão (Divisão com numeros Reais, numeros com virgula, diferente do java)
% = Resto (Igual no Java)
** = Potência (Igual o Math.pow() em java)

## Ordem de Precedência 

()
**
* / %
+ -