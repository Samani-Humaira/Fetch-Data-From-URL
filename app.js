let url = "https://api.microlink.io/?url=";
let list = document.querySelector("ul");
let btn = document.querySelector("button");
let input=document.querySelector("input");
input.value= " ";
// button event
btn.addEventListener("click",async() =>{
    list.innerText = " ";
    let inp=document.querySelector("input").value;
    inp.innerText = " ";
        await getData(inp);
        console.log("btn clicked");
});

// enter event
 input.addEventListener("keypress",async(e) =>{
    list.innerText = " ";
    if ( e.code == "Enter" ){
        let inp2=document.querySelector("input").value;
        await getData(inp2)
    }  
 });

// Fetching data from url
async function getData(inp){
    try{
   let li=document.createElement("li");
   li.classList.add("align");
   let res = await axios.get(url + inp);
     let resul = res.data.data;
   li.innerHTML = `<span style="color:red;font-weight:900;">Title</span> : ${resul.title}   
   <span style="color:red;font-weight:900;">Description</span> : ${resul.description} 
    <span style="color:red;font-weight:900;">Publisher</span> : ${resul.publisher}
    <span style="color:red;font-weight:900;">UsersImage</span> : ${resul.image.url} 
      <span style="color:red;font-weight:900;">Domain's_Image</span> : ${resul.logo.url}
      <span style="color:red;font-weight:900;">Current_Date</span> : ${resul.date}`;
   list.appendChild(li);
    }
    catch(err){
        return err;
    }
}
