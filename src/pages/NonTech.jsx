import React from "react";
import { useParams } from "react-router-dom";

const teamHeadings = {
    eventManagementTeam: "Event Management Team",
    socialMediaMarketingTeam: "Social Media & Marketing Team",
    designContentTeam: "Design & Content Team",
    videoPhotographyTeam: "Videography and Photography Team",
};

function NonTech() {
    const { teamParam } = useParams();
    const heading = teamHeadings[teamParam] || "Non-Tech Team";

    return (
        <section className="px-6 py-10">
            <h1 className="text-3xl font-bold">{heading}</h1>
        </section>
    );
}

export default NonTech;
