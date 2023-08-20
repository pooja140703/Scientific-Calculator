

let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";


function tan(){
    try{
    if(string==''){
        throw string;
    }
    string = Math.tan(string);
    input.value =string;
}catch{
    alert('Please Enter the Number first and then Press Button');
    // string = string.toString().slice(0,-3);
    //  input.value = string;
}
 }


function sqrt(){
    try{
        if(string==''){
            throw string;
        }
                   try{
                        if(string < 0){
                            throw string;
                        }
                    
    
        string = Math.sqrt(string);
        input.value =string;
    }catch{
        alert('Square root of negative number is not valid');
        string = "";
        input.value = string;
    }
         
    }catch{
        
            alert('Please Enter the Number first and then Press Button');
            // string = string.toString().slice(0,-3);
            //  input.value = string;
    
       }
    
   
}

  


function sin(){
    
    try{
        if(string==''){
            throw string;
        }
        string = Math.sin(string);
        input.value =string;
    }catch{
        alert('Please Enter the Number first and then Press Button');
        // string = string.toString().slice(0,-3);
        //  input.value = string;
    }
     }
 

 function exp(){
    
    try{
        if(string==''){
            throw string;
        }
        string = Math.exp(string);
        input.value =string;
    }catch{
        alert('Please Enter the Number first and then Press Button');
        // string = string.toString().slice(0,-3);
        //  input.value = string;
    }
     }
 



 function cos(){
    try{
        if(string==''){
            throw string;
        }
        string = Math.cos(string);
        input.value =string;
    }catch{
        alert('Please Enter the Number first and then Press Button');
        // string = string.toString().slice(0,-3);
        //  input.value = string;
    }
     }
 

 function cube(){
    
    try{
        if(string==''){
            throw string;
        }
        string = Math.pow(string,3);
        input.value =string;
    }catch{
        alert('Please Enter the Number first and then Press Button');
    }
 }

function pow(){
    try{
        if(string==''){
            throw string;
        }
        string = Math.pow(string,2);
        input.value =string;
    }catch{
        alert('Please Enter the Number first and then Press Button');
    }
 }

 function log(){
    try{
        if(string==''){
            throw string;
        }
        string = Math.log(string);
        input.value =string;
    }catch{
        alert('Please Enter the Number first and then Press Button');
        // string = string.toString().slice(0,-3);
        //  input.value = string;
    }
 }

let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (e) =>{

 
    if(e.target.innerHTML == '='){
        try{
            string = eval(string);
            input.value = string;
            if((input.value == 'Infinity')||(input.value == 'NaN')||(input.value == 'undefined'))
            {
                throw input.value;
            }
           
        }catch(error){
            if(input.value == 'Infinity'){
                alert("You cannot devide by zero..!!");
                string = "";
                input.value = string;
            }else if(input.value == 'NaN'){
                alert("You cannot take modulo by zero..!!");
                string = "";
                input.value = string;
            }
            else{
                alert("You should use buttons from Website"); 
                string = "";
                input.value = string; 
            }
    }
}
    

        else if(e.target.innerHTML == 'AC'){
            string = "";
            input.value = string;
        }
        else if(e.target.innerHTML == 'DE'){
            // string = string.substring(0, string.length-1);
            string = string.toString().slice(0,-1);
            input.value = string;
        }
        else{
            
            string += e.target.innerHTML;
            input.value = string;
            if(e.target.innerHTML == '√'){
                try{
                   
                    
                    string = string.toString().slice(0,-1);
                    input.value = string;
                     
                if(input.value =='NaN' && input.value>=0){
                    throw input.value;
                }
                }catch{
                    solution();
                }
            }


            if(e.target.innerHTML == 'tan'){
                try{
                    
                    string = string.toString().slice(0,-3);
                    input.value = string;
                    if((input.value =='NaN'))
                    {
                       throw input.value;
                    }
               }catch{
                solution();
               }
                
            }


            if(e.target.innerHTML == 'x^2'){
                try{
                    string = string.toString().slice(0,-3);
                    input.value = string;
                    if((input.value =='NaN')||(input.value =='0'))
                    {
                       throw input.value;
                    }
               }catch{
                 solution();
               }
                
            }

            if(e.target.innerHTML == 'log'){
                try{
                string = string.toString().slice(0,-3);
                input.value = string;
                if((input.value =='NaN')||input.value=='-Infinity'){
                    throw input.value;
                }
                }catch{
                    solution();
                }
            }
           
            if(e.target.innerHTML == 'sin'){
                try{
                string = string.toString().slice(0,-3);
                input.value = string;
                if(input.value =='NaN'){
                    throw input.value;
                }
                }catch{
                    solution();
                    
                }
            }

            if(e.target.innerHTML == 'cos'){
                try{
                string = string.toString().slice(0,-3);
                input.value = string;
                if(input.value =='NaN'){
                    throw input.value;
                }
                }catch{
                    solution();
                }
            }

            if(e.target.innerHTML == 'e'){
                try{
                string = string.toString().slice(0,-1);
                input.value = string;
                if(input.value =='NaN'){
                    throw input.value;
                }
                }catch{
                    solution();
                }
            }

            if(e.target.innerHTML == 'x^3'){
                try{
                string = string.toString().slice(0,-3);
                input.value = string;
                if(input.value =='NaN'){
                    throw input.value;
                }
                }catch{
                    solution();
                }
            }

        }
    })

})

function solution(){
    if(input.value =='NaN'){
        alert('Please enter only numbers....!!');
        string = "";
        input.value = string;
    }
}
