import React from "react";


function NothingToShow({text}) {
    return(
        <section className="nothing-to-show">
            <p className="nothing-to-show__text">{text}</p>
        </section>
    )
}

export default NothingToShow;