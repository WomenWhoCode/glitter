$(document).ready(function(){ 
    var template = $('#loadNav').html();
    var output = $('#navMenu');
  
    var data = {
        "Subject": "Template Engines",
        "navLinks": [
            {
                "linkDestination": "index.html",
                "linkName": "Home",
            },
            {
                "linkDestination": "buttons.html",
                "linkName": "Buttons",
            },
            {
                "linkDestination": "checkboxes.html",
                "linkName": "Checkboxes",
            },
            {
                "linkDestination": "https://github.com/WomenWhoCode/glitter",
                "linkName": "GitHub",
            },
            {
                "linkDestination": "https://www.womenwhocode.com/",
                "linkName": "Women Who Code",
            }
        ]
    };
  
    var result = Mustache.render(template, data);
    
    output.append(result);
  
  });