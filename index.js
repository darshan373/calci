let string="";
let buttons=document.querySelectorAll(".button");
Array.from(buttons).forEach((button)=>{
button.addEventListener('click',(e)=> {try
    {
        if(e.target.innerHTML=="=")
        {
            string=eval(string);
            document.querySelector('.inp').value=string;
        }
        else if(e.target.innerHTML=='C')
        {
            string='';
            document.querySelector('.inp').value=string;
        }
        else{
            console.log(e.target)
            string=string+e.target.innerHTML;
            document.querySelector('.inp').value=string;
        }
    }
    catch(error)
    {
        console.error("Error:", error.message);
        document.querySelector(".inp").value = "Error";
        string = "";
    }}
);
});
