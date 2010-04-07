document.title = "\u01DD";
function flip()
 {
 spans = document.getElementsByTagName('span');
 for(i = 0; i < spans.length; i++)
  {
  if(spans[i].getAttribute('class') == "flipme")
   {spans[i].innerHTML = "\u01DD";}
  else
   {console.log("#" + i + " " + spans[i].getAttribute('class'))}
  }
 }
