import React ,{useState,useEffect} from 'react'
import "../Style/cards.css"

const Card = (props) => {
    const [card,setCard]=useState([]);
useEffect(()=>{
    setCard(props.cardData);
    console.log(card);
})

// card&&console.log(card[0]);

if(card.length){
    var newCard=  new Array(6);
    for (var i=0;i<card[0].length;i++)
        newCard[i]=card[0][i];
     

   var trail =  newCard.filter((card)=>card.region===props.info.location.toLowerCase()).map((filteredCard)=>{
     return(
        <>
        <h1 className="card-text">Time {filteredCard.time} </h1>
        <div className="card-text win-number">
               update
              
                <div className="left"><h2>{isNaN(filteredCard.yesterday_no)?'-':filteredCard.yesterday_no}</h2></div>
                <div className="right"><h2>{isNaN(filteredCard.today_no)?'-':filteredCard.today_no}</h2></div>
            </div>
            </>
        )})
    }

    return (
        <div className="card col-sm-12 col-md-6 col-lg-4" id={props.info.key}>
            <div className="card-body">
            <h4 className="card-title">{props.info.location}</h4>
            {/* <h1 className="card-text">{props.info.name} </h1> */}
            {/* <div className="card-text win-number"> */}
            {/*     update */}
            {/*     <div className="left"><h2>{props.cardData.yesterday_no}</h2></div> */}
            {/*     <div className="right"><h2>{props.cardData.today_no}</h2></div> */}
            {/* </div> */}
            <div>{trail}</div>
            <h4 className="card-button"  onClick={()=>props.click(props.info.location)}>{props.info.loading}</h4>
            </div>
        </div>
    )
}
export default Card