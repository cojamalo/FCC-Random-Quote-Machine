


function getQuote() {
 $('#red').show();
  $('#yellow').show();
  $('#green').show();
   $('#blue').show();
  $('h5').text('loading...');

  var q = $('#search-box1').val();
  var j = Math.floor(Math.random() * 75);
  var bg = Math.floor(Math.random() * 4);
 // var img = ["https://dl.dropboxusercontent.com/u/47040279/CodePen/Quote/blue.png","https://dl.dropboxusercontent.com/u/47040279/CodePen/Quote/green.png","https://dl.dropboxusercontent.com/u/47040279/CodePen/Quote/red.png","https://dl.dropboxusercontent.com/u/47040279/CodePen/Quote/yellow.png"];
  var color = {
    "blue": ["33%","26%"],
    "green": ["32%","22%"],
    "red": ["41%","21%"],
    "yellow": ["38%","25%"]
    
  }; 
      
      
  
  if (bg == 0) {
    $('#blue').removeClass("transparent");
    $('#green').addClass("transparent");
    $('#red').addClass("transparent");
    $('#yellow').addClass("transparent");
  }
  
  else if (bg == 1) {
    $('#blue').addClass("transparent");
    $('#green').removeClass("transparent");
    $('#red').addClass("transparent");
    $('#yellow').addClass("transparent");
  }
  
  else if (bg == 2) {
    $('#blue').addClass("transparent");
    $('#green').addClass("transparent");
    $('#red').removeClass("transparent");
    $('#yellow').addClass("transparent");
  }
  
   else {
    $('#blue').addClass("transparent");
    $('#green').addClass("transparent");
    $('#red').addClass("transparent");
    $('#yellow').removeClass("transparent");
  }
  
  
  var str = "btn waves-effect waves-light btn-large darken-2 center-align "+Object.keys(color)[bg];
  $('button').attr("class", str);
  $('#tweet-quote').attr("class", str);
  $('h5').css("top", color[Object.keys(color)[bg]][0]);
  $('h5').css("left", color[Object.keys(color)[bg]][1]);
  $.ajax({
      type: "GET",
      dataType: "json",
      data: {
        q: q,
        restrict_sr: "true",
        count: j
      },
      url: "http://www.reddit.com/r/quotes/search.json?jsonp=?",
      success: function(response) {
        $('h5').html('');
             
          
           var children = response.data.children;
        var i = Math.floor(Math.random() * 25);
        if (children[i].data.title !== "self" && children[i].data.title !== "default") {
          var quote = children[i].data.title;
          quote = quote.replace(/["“”]+/g, '');
          
          
          $('h5').append('<a class="" href="https://www.reddit.com' + children[i].data.permalink + '" target="_blank">' + quote + '</a>').fadeTo(1000,1);
      
          
          $('#tweet-quote').attr('href', 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + children[i].data.title))

        }
          
        
        
        
          
      },
    error: function() {
      ('h5').append('There was an error retrieving quotes.');
    }

    })
    .done(function() {
      console.log('SUCCESS :)');
    })
    .fail(function() {
      console.log('FAIL :(');
    })
    .always(function() {
      console.log('Doh, I\'m fired anyway');
    });;};


getQuote();


