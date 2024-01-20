document.getElementById("myCard").style.display = "none";


let Predict = async () =>{
    var name = document.getElementById("nameinput").value;
    const ApiUrl = `https://api.genderize.io/?name=${name}`;

    const response = await fetch(ApiUrl);
    const data = await response.json();
    

    document.getElementById("name").innerText = data.name;
    

    if(data.gender == "male"){
        document.getElementById("genderdiv").innerHTML = "<div class='gender' id='genderdiv'><h1 id='gender'>Male</h1><i class='fa-solid fa-3x fa-mars'></i></div>";
    }else{
        document.getElementById("genderdiv").innerHTML = "<div class='gender' id='genderdiv'><h1 id='gender'>Female</h1><i class='fa-solid fa-3x fa-venus'></i></div>";
    }

    document.getElementById("probability").innerText = `Probability: ${data.probability}`;
    

    document.getElementById("myCard").style.display = "flex";

    
}