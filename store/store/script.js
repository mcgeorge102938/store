const url = "https://dog.ceo/api/breeds/image/random?json";
fetch(url)
    .then(function(response) {
      return response.json();
    }).then(function(json) {
      
      const image1 = "<img src='" + json.message + "'/>";
      document.getElementById("img1").innerHTML = image1;
    });

    
fetch(url)
    .then(function(response) {
      return response.json();
    }).then(function(json) {
      
      const image2 = "<img src='" + json.message + "'/>";
      document.getElementById("img2").innerHTML = image2;
    });

    
fetch(url)
    .then(function(response) {
      return response.json();
    }).then(function(json) {
      
      const image3 = "<img src='" + json.message + "'/>";
      document.getElementById("img3").innerHTML = image3;
    });

    
fetch(url)
    .then(function(response) {
      return response.json();
    }).then(function(json) {
      
      const image4 = "<img src='" + json.message + "'/>";
      document.getElementById("img4").innerHTML = image4;
    });


fetch(url)
    .then(function(response) {
      return response.json();
    }).then(function(json) {
      
      const image5 = "<img src='" + json.message + "'/>";
      document.getElementById("img5").innerHTML = image5;
    });
    
    const url1 = "https://random.dog/woof.json"
fetch(url1)
    .then(function(response) {
      return response.json();
    }).then(function(json) {
      console.log(json); 
      
      const image6 = "<img src='" + json.url + "'/>";
      document.getElementById("img6").innerHTML = image6;
    });
    

    
fetch(url)
    .then(function(response) {
      return response.json();
    }).then(function(json) {
      
      const image7 = "<img src='" + "http://placegoat.com/200/200" + "'/>";
      document.getElementById("img7").innerHTML = image7;
    });

    fetch(url)
    .then(function(response) {
      return response.json();
    }).then(function(json) {
      
      const image8 = "<img src='" + json.message + "'/>";
      document.getElementById("img8").innerHTML = image8;
    });

    fetch(url)
    .then(function(response) {
      return response.json();
    }).then(function(json) {
      
      const image9 = "<img src='" + json.message + "'/>";
      document.getElementById("img9").innerHTML = image9;
    });
    
    
