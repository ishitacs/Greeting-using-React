 import React from 'react';

 function App() {
  const currdate= new Date(2020,5,5,14).getHours();
  let greeting='';
  const cssStyle={};
  if(currdate>=1 && currdate<12){ greeting="Good Morning"; cssStyle.color="green";}
  else if(currdate>=12 && currdate<19 ){greeting="Good Afternoon"; cssStyle.color="orange";}
 else{greeting="Good Night"; cssStyle="black";}

 return (
   <>
   <div>
<h1>Hey,<span style={cssStyle}>{greeting}</span></h1>
</div>
</>
   
 )
 }
 export default App;