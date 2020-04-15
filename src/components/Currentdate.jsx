import React from 'react';

export default function Currentdate () {
    

  const Today=new Date();


    

    

    return(
    <p>{Today.getDate()}/{Today.getMonth()+1 }/{Today.getFullYear()} </p>
    )
    
    

}




