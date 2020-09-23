import React from 'react'
import Header from './Header'
import Title from './Title'
import { propTypes } from 'react-bootstrap/esm/Image'
import ChartsTable from './ChartsTable'
import '../Style/title.css'
import '../Style/charts.css'
import Tags from './Tags'
const Charts = (props) => {
    console.log(props)
    var region= localStorage.getItem("region")
    
 const headTag =
    "MORADABADSATTA MORADABAD MATKA MORADABAD KING MORADABADKING MORADABAD NIGHT SUPER FAST KING RESULT SATTA KINGS DARBAR MATKA NUMBER SATTA KING DARBAR SATTA GAME DESAWAR MORADABAD SATTA GALI SATTA DELHI6 GHAZIABAD SATTA FARIDABAD SATTA DELHI SATTA SATTAKING RESULT SATTA FREE RESULT DELHI RESULT SATTA NEWS MORADABAD RESULT SATTA GALI SATTA MORADABAD CHART RECORD DELHI6 SATTA KING CHART OLD SATTA CHART LIVE RESULT SATTA BAJAR SATTA MATKA DESHAWER SATTA";

const footTag =
    "NEW_MORADABADSATTA SUPERFASTKING OKSATTA SATTAKINGDARBAR SATTAKINGZ MATKAKINGZ SATTA-KING SATTAMATKA SATTAKINGRESULT SATTA-NO SATTAKING-GURU MORADABADSATTA.COM SUPERFASTSATTA Satta King Result SattaKing Satta Satta.Com Satta Com Gali Result Satta News Today Satta Result Live Satta King Satta Aaj Ka Satta Result Gali Result Today MORADABAD SATTA LIVE Satta king 2020 leak number";   
    
    return(
        <div>
            <Header></Header>
            <br/><br/><br/><br/><br/>
            <Tags tag={headTag} />
               
            <br class="small-screen"></br>
            <br class="small-screen"></br>
            <br class="small-screen"></br>
            <br class="small-screen"></br>
            <br class="small-screen"></br>
            <br class="small-screen"></br>
            <br class="small-screen"></br>
            <br class="small-screen"></br>
            <Title title="CHARTS"></Title>
            <Title title={region}></Title>
            <ChartsTable></ChartsTable>
             <Tags tag={footTag} />
        </div>
    )
}
export default Charts