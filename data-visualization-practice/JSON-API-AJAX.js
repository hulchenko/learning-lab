//APIs(Application Programming Interfaces)

// API request
<script>
  document.addEventListener('DOMContentLoaded', function()
  {
    (document.getElementById('getMessage').onclick = function () {
      const req = new XMLHttpRequest(); //XMLHttpRequest is an API in the form of an object(default command )
      req.open('GET', '/json/cats.json', true); //method initializes a request - this example is requesting data from an API, (1. therefore is a GET request; 2. URL of the API you are requesting data from; 3.Boolean value where true makes it an asynchronous request)
      req.send(); //method sends the request
      req.onload = function () {
        //event handler parses the returned data and applies the JSON.stringify method to convert the JavaScript object into a string
        const json = JSON.parse(req.responseText);
        document.getElementsByClassName(
          'message' //outputs in the HTML below
        )[0].innerHTML = JSON.stringify(json);
      };

      /* SAME but fetch() method:
      fetch('/json/cats.json')
            .then(response => response.json())
            .then(data => {
      document.getElementById('message').innerHTML = JSON.stringify(data)
    })
        */
    })
  }
  );
</script>;
<body>
  <p class="message box">OUTPUT GOES HERE</p>
</body>;
// ==================================================================================================================================== //

// Retrieving data:

// in addition to the code above:

        let html = "";
        json.forEach(function(val){ //val = all of the info
          const keys = Object.keys(val); //titles (id, imageLink, altText, codeNames)
          html = html + "<div class='cat'>"; 
          keys.forEach(function(key){
            html = html + '<strong>' + key + '</strong>: ' + val[key] + '<br>' //val[key] = all of the info after the title
            
          });
          html = html + '</div><br>'
        })

// final look of received DATA:
id: 0
imageLink: https://s3.amazonaws.com/freecodecamp/funny-cat.jpg
altText: A white cat wearing a green, helmet shaped melon on its head.
codeNames: Juggernaut,Mrs. Wallace,Buttercup

id: 1
imageLink: https://s3.amazonaws.com/freecodecamp/grumpy-cat.jpg
altText: A white cat with blue eyes, looking very grumpy.
codeNames: Oscar,Scrooge,Tyrion

id: 2
imageLink: https://s3.amazonaws.com/freecodecamp/mischievous-cat.jpg
altText: A ginger cat with one eye closed and mouth in a grin-like expression. Looking very mischievous.
codeNames: The Doctor,Loki,Joker

// ==================================================================================================================================== //

// to pull images only(from imageLink link):
html = html + "<img src='" + val.imageLink + "' " + "alt='" + val.altText + "'>"

// ==================================================================================================================================== //