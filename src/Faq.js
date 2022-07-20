import { useState } from "react";

let langVal = "FR";
const Faq = () => {
    const [lang, setLang] = useState(langVal);
    let q1;
    let a1;
    let q2;
    let a2;
    let q3;
    let a3;
    let q4;
    let a4;
    if (langVal == "FR") {
        q1 = "Q: What sport items do you offer?";
        a1 = "A: We specialize in items for Soccer, Hockey and Basketball.";
        q2 = "Q: Do you ship internationally?";
        a2 = "A: We currently exclussivly ship in Canada but are currently working on expanding to shipping internationally.";
        q3 = "Q: What is your return policy?";
        a3 = "A: We have a 30 day return policy, no questions asked.";
        q4 = "Q: Where are you located?";
        a4 = "A: We are located in Ottawa but exclusively sell on our online store.";

    } else {
        q1 = "Q: Quels articles de sport proposez-vous?";
        a1 = "R: Nous spécialisons dans les articles pour le soccer, le hockey et le basketball.";
        q2 = "Q: Expédiez-vous à l'international?";
        a2 = "R: Nous expédions actuellement exclusivement au Canada, mais nous travaillons à l'expansion à l'international.";
        q3 = "Q: Quelle est votre politique de retour?";
        a3 = "R: Nous avons une politique de retour de 30 jours.";
        q4 = "Q: Où vous situez-vous?";
        a4 = "R: Nous sommes situés à Ottawa mais vendons exclusivement sur notre boutique en ligne.";
    }
    const switchLang = (e) => {
        if (langVal == "EN") {
            console.log("if")
            langVal = "FR";
            setLang(langVal);
        } else {
            console.log("else")
            langVal = "EN";
            setLang(langVal);
        }
    };
    return (<div className="faq bg-light">
        <div className="row mt-3 mb-3"><div className="col-11 text-center"><h1 >FAQ</h1></div><div className="col-1 x" onClick={(e) => { switchLang(e) }}><h3>{langVal}</h3></div></div>
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
            </div>
        </div>
    </div>);
}

export default Faq;