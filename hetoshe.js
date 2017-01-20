// get all elements on the page
var elements = document.getElementsByTagName('*');

// Map object of pronouns and words to replace
var mapObj = {
   he:"she",
   He:"She",
   his:"her",
   His:"Her",
   him:"her",
   Him:"Her",
   himself:"herself",
   Himself:"Herself",
   Mr:"Ms",
   Mrs:"Ms",
};

// Iterate through the elements on the page
for (var i=0; i < elements.length; i++) {
  var element = elements[i];

  // Iterate through the nodes within the element
  for (var j=0; j < element.childNodes.length; j++) {
    var node = element.childNodes[j];

    // if the node is text, store value of the text
    if (node.nodeType === 3) {
      var text = node.nodeValue;
      
      // If the text matches a key in the map object, get the corresponding value
      var replacedText = text.replace(/\bhe\b|\bHe\b|\bhis\b|\bHis\b|
        \bhim\b|\bHim\b|\bhimself\b|\bHimself\b|\bMr\b|\bMrs\b/g, 
        function(matched){
          return mapObj[matched];
        });

      // Replace the text on the page
      if (replacedText !== text) {
        element.replaceChild(document.createTextNode(replacedText), node);
      }
    }
  }
}