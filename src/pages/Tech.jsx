import React from "react";
import { useParams } from "react-router-dom";

const teamHeadings = {
    webDTeam: "Web Development Team",
    androidTeam: "Android Dev Team",
    mlTeam: "Machine Learning Team",
    blockChainTeam: "BlockChain Team",
    womenTechmakers: "Women Techmakers",
};

function Tech() {
    const { teamParam } = useParams();
    const heading = teamHeadings[teamParam] || "Tech Team";

    return (
        <section className="px-6 py-10">
            <h1 className="text-3xl font-bold">{heading}</h1>
        </section>
    );
}

export default Tech;
