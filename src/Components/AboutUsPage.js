import React from "react";
import Header from "./Header";
import Title from "./Title";
import Tags from "./Tags";

const headTag =
    "MORADABADSATTA MORADABAD MATKA MORADABAD KING MORADABADKING MORADABAD NIGHT SUPER FAST KING RESULT SATTA KINGS DARBAR MATKA NUMBER SATTA KING DARBAR SATTA GAME DESAWAR MORADABAD SATTA GALI SATTA DELHI6 GHAZIABAD SATTA FARIDABAD SATTA DELHI SATTA SATTAKING RESULT SATTA FREE RESULT DELHI RESULT SATTA NEWS MORADABAD RESULT SATTA GALI SATTA MORADABAD CHART RECORD DELHI6 SATTA KING CHART OLD SATTA CHART LIVE RESULT SATTA BAJAR SATTA MATKA DESHAWER SATTA";

const footTag =
    "NEW_MORADABADSATTA SUPERFASTKING OKSATTA SATTAKINGDARBAR SATTAKINGZ MATKAKINGZ SATTA-KING SATTAMATKA SATTAKINGRESULT SATTA-NO SATTAKING-GURU MORADABADSATTA.COM SUPERFASTSATTA Satta King Result SattaKing Satta Satta.Com Satta Com Gali Result Satta News Today Satta Result Live Satta King Satta Aaj Ka Satta Result Gali Result Today MORADABAD SATTA LIVE Satta king 2020 leak number";

const AboutUsPage = () => {
    return (
        <div>
            <Header></Header>
            <br />
            <br />
            <br />
            <br />
            <br />

            <Title title="ABOUT US"></Title>

            <div
                style={{
                    color: "black",
                    padding: "50px",
                    paddingTop: "20px",
                    textAlign: "justified",
                }}
            >
                <h1>
                    <b style={{ color: "black" }}>
                        This is gaming website which is fully sponsored we do
                        not promote gambling.
                        <br />
                        <br />
                        Through this site you will find the latest result of
                        various Regions of India and its neighbouring countries.
                        <br />
                        <br />
                        You can check the latest record and make a prediction of
                        upcoming number.
                    </b>
                </h1>
                <br />
                <Tags tag={headTag} />
                <Tags tag={footTag} />
            </div>
        </div>
    );
};
export default AboutUsPage;
