import { useState } from "react";

let lang = "EN";
const Faq = () => {
    const [lang, setLang] = useState(lang);
    let q1;
    let a1;
    let q2;
    let a2;
    let q3;
    let a3;
    let q4;
    let a4;
    if (lang === "EN") {
        q1 = "Q: What sport items do you offer?";
        a1 = "A: We specialize in items for Soccer, Hockey and Basketball.";
        q2 = "Q: Do you ship internationally?";
        a2 = "A: We currently exclussivly ship in Canada but are currently working on expanding to shipping internationally.";
        q3 = "Q: What is your return policy?";
        a3="A: We have a 30 day return policy, no questions asked.";
        q4="Q: Where are you located?";
        a4="A: We are located in Ottawa but exclussivly sell on our online store.";

    } else{
        q1 = "Q: ds";
        a1 = "R:sd ";
        q2 = "Q: fd";
        a2 = "R: df";
        q3 = "Q: gf";
        a3="R: fg";
        q4="Q: hg";
        a4="R: gh";
    }
    const switchLang = (e) => {
        if(lang === "EN"){
            lang ="FR";
            setLang(lang);
        } else{
            lang ="EN";
            setLang(lang);
        }
    };
    return (<div className="faq bg-light">
        <div className="row mt-3 mb-3"><div className="col-11 text-center"><h1 >FAQ</h1></div><div className="col-1 x" onClick={(e) => { switchLang(e) }}><h3>{lang}</h3></div></div>
        <div className="container">

            <div className="container border border-3 border-dark  margin-left mb-3 mt-3 bold faq-box p-3" width="600px">
                {q1}<br />{a1}
            </div>
            <div className="container border border-3 border-dark margin-left mb-3 mt-3 bold faq-box p-3" width="600px">
                {q2}<br />{a2}
            </div>
            <div className="container border border-3 border-dark margin-left mb-3 mt-3 bold faq-box p-3" width="600px">
                {q3}<br />{a3}
            </div>
            <div className="container border border-3 border-dark margin-left mb-3 mt-3 bold faq-box p-3" width="600px">
                {q4}<br />{a4}
                <br />
                
            </div>

        </div>

    </div>);
}

export default Faq;