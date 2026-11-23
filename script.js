let time = 60 
let timer = 20
let box = 1;
let click = 1;
let check = 0;
let marks = 0;
let count = 1;    
let checking = 0;
let check1 = "a";
let check2 = "";
let check3 = "";
let check4 = "";
let check5 = "";
let check6 = "";
let check7 = "";
let check8 = "";
let check9 = "";
let check10 = "";
let one = [
"HTML ka full form kya hai?", 
"High Text Machine Language",
"Hyper Text Markup Language",
"Hyper Tool Multi Language",
"Home Text Markup Language"
]
let two = [
"HTML ka use kis liye hota hai?",
"Computer ko repair karne ke liye",
"Database delete karne ke liye",
"Webpage ka structure banane ke liye",
"Operating system banane ke liye"
]
let three = [
"<html> tag ka kya kaam hai?",
"HTML document ka root element banana",
"Text ko bold karna",
"Image ko resize karna",
"Button ko click karna"
]
let four = [
"<head> aur <body> mein kya difference hai?",
"Dono sirf images ke liye hain",
"<head> content aur <body> links ke liye hai",
"Dono ka same kaam hai",
"<head> settings, <body> webpage ka liya."
]
let five = [
"<title> tag kahan use hota hai?",
"Body ke andar",
"Head ke andar",
"Footer ke andar",
"Image ke andar"
]
let six = [
"<h1> se <h6> tak kitni heading levels hain?",
"4",
"5",
"6",
"8"
]
let seven = [
"<p> tag kis liye use hota hai?",
"Paragraph banane ke liye",
"Picture lagane ke liye",
"Link banane ke liye",
"Table banane ke liye"
]
let eight = [
"<br> aur <hr> mein kya difference hai?",
"Dono image lagate hain",
"<br> heading aur <hr> paragraph banata hai",
"Dono text bold karte hain",
"<br> line break aur <hr> horizontal line ke liye "
]
let nine = [
"HTML attribute kya hota hai?",
"HTML ka ek alag software",
"Tag ko additional information dene wala feature",
"CSS ki ek file",
"Browser ka naam"
]
let ten =  [
"HTML mein comment kaise likhte hain?",
"// Comment",
"** Comment **",
"<!-- Comment -->",
"## Comment ##"
]
document.getElementById("question").textContent = one[0]
document.getElementById("a").textContent = one[1]
document.getElementById("b").textContent = one[2]
document.getElementById("c").textContent = one[3]
document.getElementById("d").textContent = one[4]

        // A //
    function filla() { 
     let fill1 = document.getElementById('circle1');
     let fill2 = document.getElementById('circle2');
     let fill3 = document.getElementById('circle3');
     let fill4 = document.getElementById('circle4');
     let chapter1 = document.getElementById('chapter1');
     let chapter2 = document.getElementById('chapter2');
     let chapter3 = document.getElementById('chapter3');
     let chapter4 = document.getElementById('chapter4');
click++
        box++
        check=1
    let boxfill = box%2;
        if(boxfill<=0 || click>2){
    fill1.style.backgroundColor= "#8E1523"
    fill2.style.backgroundColor= ""
    fill3.style.backgroundColor= ""
    fill4.style.backgroundColor= ""
    chapter1.style.backgroundColor= "#8e15235f"
    chapter2.style.backgroundColor= ""
    chapter3.style.backgroundColor= ""
    chapter4.style.backgroundColor= ""
    fill1.style.borderColor= "#8E1523"
    fill2.style.borderColor= "#d8c4a0"
    fill3.style.borderColor= "#d8c4a0"
    fill4.style.borderColor= "#d8c4a0"
    chapter1.style.borderColor= "#8E1523"    
    chapter2.style.borderColor= ""    
    chapter3.style.borderColor= ""    
    chapter4.style.borderColor= ""    
        }
        
        else{
    fill1.style.backgroundColor= "white"

        }

}
    // B //
    function fillb() { 
     let fill1 = document.getElementById('circle1');
     let fill2 = document.getElementById('circle2');
     let fill3 = document.getElementById('circle3');
     let fill4 = document.getElementById('circle4');
     let chapter1 = document.getElementById('chapter1');
     let chapter2 = document.getElementById('chapter2');
     let chapter3 = document.getElementById('chapter3');
     let chapter4 = document.getElementById('chapter4');
     click++
        box++
                check=2
    let boxfill = box%2;
        if(boxfill<=0 || click>2){
    fill1.style.backgroundColor= ""
    fill2.style.backgroundColor= "#8E1523"
    fill3.style.backgroundColor= ""
    fill4.style.backgroundColor= ""
    chapter1.style.backgroundColor= ""
    chapter2.style.backgroundColor= "#8e15235f"
    chapter3.style.backgroundColor= ""
    chapter4.style.backgroundColor= ""
    fill1.style.borderColor= "#d8c4a0"
    fill2.style.borderColor= "#8E1523"
    fill3.style.borderColor= "#d8c4a0"
    fill4.style.borderColor= "#d8c4a0"
    chapter1.style.borderColor= ""    
    chapter2.style.borderColor= "#8E1523"    
    chapter3.style.borderColor= ""    
    chapter4.style.borderColor= ""        }
        else{
    fill2.style.backgroundColor= "white"

        }
    }
    // C //
    function fillc() { 
     let fill1 = document.getElementById('circle1');
     let fill2 = document.getElementById('circle2');
     let fill3 = document.getElementById('circle3');
     let fill4 = document.getElementById('circle4');
     let chapter1 = document.getElementById('chapter1');
     let chapter2 = document.getElementById('chapter2');
     let chapter3 = document.getElementById('chapter3');
     let chapter4 = document.getElementById('chapter4');click++
        box++
                check=3
    let boxfill = box%2;
        if(boxfill<=0 || click>2){
    fill1.style.backgroundColor= ""
    fill2.style.backgroundColor= ""
    fill3.style.backgroundColor= "#8E1523"
    fill4.style.backgroundColor= ""
    chapter1.style.backgroundColor= ""
    chapter2.style.backgroundColor= ""
    chapter3.style.backgroundColor= "#8e15235f"
    chapter4.style.backgroundColor= ""    
    fill1.style.borderColor= "#d8c4a0"
    fill2.style.borderColor= "#d8c4a0"
    fill3.style.borderColor= "#8E1523"
    fill4.style.borderColor= "#d8c4a0" 
    chapter1.style.borderColor= ""    
    chapter2.style.borderColor= ""    
    chapter3.style.borderColor= "#8E1523"    
    chapter4.style.borderColor= ""       }
        else{
    fill3.style.backgroundColor= "white"

        }
    }
    // D //
    function filld() { 
     let fill1 = document.getElementById('circle1');
     let fill2 = document.getElementById('circle2');
     let fill3 = document.getElementById('circle3');
     let fill4 = document.getElementById('circle4');
     let chapter1 = document.getElementById('chapter1');
     let chapter2 = document.getElementById('chapter2');
     let chapter3 = document.getElementById('chapter3');
     let chapter4 = document.getElementById('chapter4');
     click++
        box++
                check=4
    let boxfill = box%2;
        if(boxfill<=0 || click>2){
    fill1.style.backgroundColor= ""
    fill2.style.backgroundColor= ""
    fill3.style.backgroundColor= ""
    fill4.style.backgroundColor= "#8E1523"
    chapter1.style.backgroundColor= ""
    chapter2.style.backgroundColor= ""
    chapter3.style.backgroundColor= ""
    chapter4.style.backgroundColor= "#8e15235f"
    fill1.style.borderColor= "#d8c4a0"
    fill2.style.borderColor= "#d8c4a0"
    fill3.style.borderColor= "#d8c4a0"
    fill4.style.borderColor= "#8E1523"
    chapter1.style.borderColor= ""    
    chapter2.style.borderColor= ""    
    chapter3.style.borderColor= ""    
    chapter4.style.borderColor= "#8E1523"        }
        else{
    fill4.style.backgroundColor= "white"

        }
    }
    function submit() {
        count++
        let top = document.getElementById('top');
        let btn1 = document.getElementById('btn1');
        let btn2= document.getElementById('btn2');
        let main= document.getElementById('main');
     let fill1 = document.getElementById('circle1');
     let fill2 = document.getElementById('circle2');
     let fill3 = document.getElementById('circle3');
     let fill4 = document.getElementById('circle4');
     let chapter1 = document.getElementById('chapter1');
     let chapter2 = document.getElementById('chapter2');
     let chapter3 = document.getElementById('chapter3');
     let chapter4 = document.getElementById('chapter4');
click++
        
                if(count==1){
                document.getElementById("question").textContent = one[0]
                document.getElementById("a").textContent = one[1]
                document.getElementById("b").textContent = one[2]
                document.getElementById("c").textContent = one[3]
                document.getElementById("d").textContent = one[4]
                document.getElementById("p").textContent = "10 of 1"
   }             
                   else if(count==2){
                document.getElementById("question").textContent = two[0]
                document.getElementById("a").textContent = two[1]
                document.getElementById("b").textContent = two[2]
                document.getElementById("c").textContent = two[3]
                document.getElementById("d").textContent = two[4]
                document.getElementById("p").textContent = "10 of 2"
                }       
                else if(count==3){
                document.getElementById("question").textContent = three[0]
                document.getElementById("a").textContent = three[1]
                document.getElementById("b").textContent = three[2]
                document.getElementById("c").textContent = three[3]
                document.getElementById("d").textContent = three[4]
                document.getElementById("p").textContent = "10 of 3"

                }else if(count==4){
                document.getElementById("question").textContent = four[0]
                document.getElementById("a").textContent = four[1]
                document.getElementById("b").textContent = four[2]
                document.getElementById("c").textContent = four[3]
                document.getElementById("d").textContent = four[4]
                document.getElementById("p").textContent = "10 of 4"
               }else if(count==5){
                document.getElementById("question").textContent = five[0]
                document.getElementById("a").textContent = five[1]
                document.getElementById("b").textContent = five[2]
                document.getElementById("c").textContent = five[3]
                document.getElementById("d").textContent = five[4]
                document.getElementById("p").textContent = "10 of 5"
                }else if(count==6){
                document.getElementById("question").textContent = six[0]
                document.getElementById("a").textContent = six[1]
                document.getElementById("b").textContent = six[2]
                document.getElementById("c").textContent = six[3]
                document.getElementById("d").textContent = six[4]
                document.getElementById("p").textContent = "10 of 6"
                }else if(count==7){
                document.getElementById("question").textContent = seven[0]
                document.getElementById("a").textContent = seven[1]
                document.getElementById("b").textContent = seven[2]
                document.getElementById("c").textContent = seven[3]
                document.getElementById("d").textContent = seven[4]
                document.getElementById("p").textContent = "10 of 7"
                }else if(count==8){
                document.getElementById("question").textContent = eight[0]
                document.getElementById("a").textContent = eight[1]
                document.getElementById("b").textContent = eight[2]
                document.getElementById("c").textContent = eight[3]
                document.getElementById("d").textContent = eight[4]
                document.getElementById("p").textContent = "10 of 8"
                }
                else if(count==9){
                document.getElementById("question").textContent = nine[0]
                document.getElementById("a").textContent = nine[1]
                document.getElementById("b").textContent = nine[2]
                document.getElementById("c").textContent = nine[3]
                document.getElementById("d").textContent = nine[4]
                document.getElementById("p").textContent = "10 of 9"
                }else if(count==10){
                document.getElementById("question").textContent = ten[0]
                document.getElementById("a").textContent = ten[1]
                document.getElementById("b").textContent = ten[2]
                document.getElementById("c").textContent = ten[3]
                document.getElementById("d").textContent = ten[4]
                document.getElementById("p").textContent = "10 of 10"
                }else if(count==11){
                document.getElementById("question").textContent = "complete"
                document.getElementById("p").textContent = ""
                document.getElementById("a").textContent = ""
                document.getElementById("b").textContent = ""
                document.getElementById("c").textContent = ""
                document.getElementById("d").textContent = ""
                submit()
//          )

                }else if(count==12){
                document.getElementById("question").textContent = "Retry Quiz"
                document.getElementById("p").textContent = ""
                btn1?.remove();
                btn2?.remove();
                main?.remove();
                btns?.remove();
                top.style.height = "100px"
                top.style.width = "200px"
                top.style.padding = "30px"
                top.addEventListener('click', function() {
    window.location.href = 'file:///C:/Users/ik2026/Desktop/Project%20Quiz/.html'; // Yahan apna link likhein
    
  });
                
                
                }else{
                document.getElementById("question").textContent = ""
}           
            if(check==1 && count==2){
                checking=0
                marks=marks
                check1=1
            }
            else if(check==2 && count==2){
                marks++
                checking=1
                check1=2
            }      
            else if(check==3 && count==2){
                checking=0
                marks=marks
                check1 =3
            }      
            else if(check==4 && count==2){
                checking=0
                marks=marks
                check1=4
            }      
            else if(check==1 && count==3){
                checking=0
                marks=marks
                check2="a"
            }      
            else if(check==2 && count==3){
                checking=0
                marks=marks
                check2="b"
            }      
            else if(check==3 && count==3){
                marks++
                checking=1
                check2="c"
            }      
            else if(check==4 && count==3){
                checking=0
                marks=marks
                check2="d"
            }     
            else if(check==1 && count==4){
                marks++
                checking=1
                check3="a"
            }   
            else if(check==2 && count==4){
                checking=0
                marks=marks
                check3="b"
            }   
            else if(check==3 && count==4) { 
                checking=0
                marks=marks
                check3="c"
            }   
            else if(check==4 && count==4){
                checking=0
                marks=marks
                check3="d"
            }    
            else if(check==1 && count==5){
                checking=0
                marks=marks
                check4="a"
            }
            else if(check==2 && count==5){
                checking=0
                marks=marks
                check4="b"
            }
            else if(check==3 && count==5){
                checking=0
                marks=marks
                check4="c"
            }
            else if(check==4 && count==5){
                marks++
                checking=1
                check4 ="d"
            }     
            else if(check==1 && count==6){
                    checking=0
                    marks=marks
                    check5="a"
            }
            else if(check==2 && count==6){
                marks++
                checking=1
                check5="b"
            }
            else if(check==3 && count==6){
                checking=0
                marks=marks
                check5="c"
            }
            else if(check==4 && count==6){
                checking=0
                marks=marks
                check5="d"
            }
            else if(check==1 && count==7){
                checking=0
                marks=marks
                check6="a"
            }
            else if(check==2 && count==7){
                checking=0
                marks=marks
                check6="b"
            }
            else if(check==3 && count==7){
                marks++
                checking=1
                check6="c"
            }
            else if(check==4 && count==7){
                checking=0
                marks=marks
                check6="d"
            }     
            else if(check==1 && count==8){
                marks++
                checking=1
                check7="a"
            }
            else if(check==2 && count==8){
                checking=0
                marks=marks
                check7="b"
            }
            else if(check==3 && count==8){
                checking=0
                marks=marks
                check7="c"
            }
            else if(check==4 && count==8){
                checking=0
                marks=marks
                check7="d"
            }
            else if(check==1 && count==9){
                checking=0
                marks=marks
                check8="a"
            }
            else if(check==2 && count==9){
                checking=0
                marks=marks
                check8="b"
            }
            else if(check==3 && count==9){
                checking=0
                marks=marks
                check8="c"
            }
            else if(check==4 && count==9){
                marks++
                checking=1
                check8="d"
            }   
            else if(check==1 && count==10){
                checking=0
                marks=marks
                check9="a"
            }     
            else if(check==2 && count==10){
                marks++
                checking=1
                check9="b"
            }     
            else if(check==3 && count==10){
                checking=0
                marks=marks
                check9="c"
            }   
            else if(check==4 && count==10){
                checking=0
                marks=marks
                check9="d"
            }
            else if(check==1 && count==11){
                checking=0
                marks=marks
                check10="a"
            }
            else if(check==2 && count==11){
                marks++
                checking=1
                check10 = "b"
            }
            else if(check==3 && count==11){
                checking=0
                marks=marks
                check10="c"
            }
            else if(check==4 && count==11){
                checking=0
                marks=marks
                check10="d"
            }
            else{
                checking=0
                    marks=marks
                }
localStorage.setItem("check1" , check1);
localStorage.setItem("check2" , check2)
localStorage.setItem("check3" , check3)
localStorage.setItem("check4" , check4)
localStorage.setItem("check5" , check5)
localStorage.setItem("check6" , check6)
localStorage.setItem("check7" , check7)
localStorage.setItem("check8" , check8)
localStorage.setItem("check9" , check9)
localStorage.setItem("check10" , check10) 
let checkone = localStorage.getItem("check1")
let checktwo = localStorage.getItem("check2")
let checkthree = localStorage.getItem("check3")
let checkfour = localStorage.getItem("check4")
let checkfive = localStorage.getItem("check5")
let checksix = localStorage.getItem("check6")
let checkseven = localStorage.getItem("check7")
let checkeight = localStorage.getItem("check8")
let checknine = localStorage.getItem("check9")
let checkten = localStorage.getItem("check10")
console.log(checkone)

            }function previous() {
            count--

                if(count==1){
                document.getElementById("question").textContent = one[0]
                document.getElementById("a").textContent = one[1]
                document.getElementById("b").textContent = one[2]
                document.getElementById("c").textContent = one[3]
                document.getElementById("d").textContent = one[4]
                document.getElementById("p").textContent = "10 of 1"
   }             
                   else if(count==2){
                document.getElementById("question").textContent = two[0]
                document.getElementById("a").textContent = two[1]
                document.getElementById("b").textContent = two[2]
                document.getElementById("c").textContent = two[3]
                document.getElementById("d").textContent = two[4]
                document.getElementById("p").textContent = "10 of 2"
                }       
                else if(count==3){
                document.getElementById("question").textContent = three[0]
                document.getElementById("a").textContent = three[1]
                document.getElementById("b").textContent = three[2]
                document.getElementById("c").textContent = three[3]
                document.getElementById("d").textContent = three[4]
                document.getElementById("p").textContent = "10 of 3"

                }else if(count==4){
                document.getElementById("question").textContent = four[0]
                document.getElementById("a").textContent = four[1]
                document.getElementById("b").textContent = four[2]
                document.getElementById("c").textContent = four[3]
                document.getElementById("d").textContent = four[4]
                document.getElementById("p").textContent = "10 of 4"
               }else if(count==5){
                document.getElementById("question").textContent = five[0]
                document.getElementById("a").textContent = five[1]
                document.getElementById("b").textContent = five[2]
                document.getElementById("c").textContent = five[3]
                document.getElementById("d").textContent = five[4]
                document.getElementById("p").textContent = "10 of 5"
                }else if(count==6){
                document.getElementById("question").textContent = six[0]
                document.getElementById("a").textContent = six[1]
                document.getElementById("b").textContent = six[2]
                document.getElementById("c").textContent = six[3]
                document.getElementById("d").textContent = six[4]
                document.getElementById("p").textContent = "10 of 6"
                }else if(count==7){
                document.getElementById("question").textContent = seven[0]
                document.getElementById("a").textContent = seven[1]
                document.getElementById("b").textContent = seven[2]
                document.getElementById("c").textContent = seven[3]
                document.getElementById("d").textContent = seven[4]
                document.getElementById("p").textContent = "10 of 7"
                }else if(count==8){
                document.getElementById("question").textContent = eight[0]
                document.getElementById("a").textContent = eight[1]
                document.getElementById("b").textContent = eight[2]
                document.getElementById("c").textContent = eight[3]
                document.getElementById("d").textContent = eight[4]
                document.getElementById("p").textContent = "10 of 8"
                }
                else if(count==9){
                document.getElementById("question").textContent = nine[0]
                document.getElementById("a").textContent = nine[1]
                document.getElementById("b").textContent = nine[2]
                document.getElementById("c").textContent = nine[3]
                document.getElementById("d").textContent = nine[4]
                document.getElementById("p").textContent = "10 of 9"
                }else if(count==10){
                document.getElementById("question").textContent = ten[0]
                document.getElementById("a").textContent = ten[1]
                document.getElementById("b").textContent = ten[2]
                document.getElementById("c").textContent = ten[3]
                document.getElementById("d").textContent = ten[4]
                document.getElementById("p").textContent = "10 of 10"
                }else if(count==11){
                document.getElementById("question").textContent = "complete"
                document.getElementById("p").textContent = ""
                }else if(count==12){
                document.getElementById("question").textContent = marks/10*100 +"Score"
                document.getElementById("p").textContent = ""
                }else{
                document.getElementById("question").textContent = ""
}                if(checking==1){
                    marks--
                }
                else{
                    marks=marks
                }
}
    
    setInterval(function timing() {
time--
document.getElementById('time').textContent = time
document.getElementById('long').textContent = timer
if(time==0) {
time=60
timer--
}
else if(timer==0){
  timer=20
submit()
}
else if(count==11){
  document.getElementById('totaltime').textContent = "00 : 00"

}
else if(count==1 || count==2 || count==3 || count==4 || count==5 || count==6 || count==7 || count==9 || count==10 ){
 timer=20
}
else if(count==11 ){
 timer=21
}

else if(time<9){
document.getElementById('time').textContent = "0"+time
}
else if(timer<9){
document.getElementById('long').textContent = time
}
},16.66666666666667);

  //=======================================\\
 //            second page                  \\
//===========================================\\