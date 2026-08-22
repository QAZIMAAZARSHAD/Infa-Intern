import React from "react";

const MONTHS = [
  {
    label: "August '22",
    sections: [
      {
        title: "Onboarding",
        items: [
          "Joined on 22 August 2022",
          "Learned about the company and its products",
        ],
      },
      { title: "Setup", items: ["Finished workspace setup"] },
    ],
  },
  {
    label: "September '22",
    items: [
      { id: "MDMN-86490", text: "Fix e2e tests failing on BUI after tenant model change" },
      { id: "MDMN-53574", text: "CSS Bug" },
      { id: "MDMN-52689", text: "CSS Bug" },
      { id: "MDMN-89348", text: "Translation Bug" },
      { id: "MDMN-89341", text: "Translation Bug" },
      { id: "MDMN-89941", text: "Translation Bug" },
      { id: "MDMN-89316", text: "Translation Bug" },
    ],
  },
  {
    label: "October '22",
    items: [
      { id: "MDMN-64253", text: "E2E Tests" },
      { id: "MDMN-89215", text: "Translation Bug" },
      { id: "MDMN-89218", text: "Translation Bug" },
      { id: "MDMN-89347", text: "Translation Bug" },
      { id: "MDMN-89337", text: "Translation Bug" },
      { id: "MDMN-89928", text: "Translation Bug" },
      { id: "MDMN-89287", text: "Translation Bug" },
    ],
  },
  {
    label: "November '22",
    items: [
      { id: "MDMN-89223", text: "Translation Bug" },
      { id: "MDMN-89285", text: "Translation Bug" },
      { id: "MDMN-90072", text: "Translation Bug" },
      { id: "MDMN-89229", text: "Translation Bug" },
      { id: "MDMN-80337", text: "CSS Bug" },
      { id: "PXM-4684", text: "CSS Bug" },
      { id: "MDMN-81674", text: "E2E Tests" },
    ],
  },
  {
    label: "December '22",
    items: [
      { id: "MDMN-91236", text: "Translation Bug" },
      { id: "MDMN-91234", text: "Translation Bug" },
      { id: "MDMN-91237", text: "Translation Bug" },
      { id: "PXM-4230", text: "Seq Edit Bug" },
      { id: "PXM-2129", text: "CSS Bug" },
      { id: "MDMN-75522", text: "CSS Bug" },
      { id: "MDMN-61109", text: "CSS Bug" },
    ],
  },
  {
    label: "January '23",
    items: [
      { id: "PXM-3871", text: "RBAC SHM Bug" },
      { id: "MDMN-94451", text: "Customer Story (DateTime Range Facet)" },
      { id: "MDMN-80065", text: "R360 SHM Bug" },
      { id: "MDMN-95716", text: "Enrichment Bug" },
      { id: "PXM-2674", text: "Hierarchy Bug" },
      { id: "MDMN-97750", text: "Tenant Model Update Story" },
      { id: "MDMN-97956", text: "Link Accept API Story" },
    ],
  },
  {
    label: "February '23",
    items: [
      { id: "MDMN-96519", text: "SHM UI Bug" },
      { id: "MDMN-97235", text: "Enrichment Bug" },
      { id: "MDMN-88552", text: "Enrichment Bug" },
      { id: "MDMN-98367", text: "Enrichment Bug" },
      { id: "MDMN-102821", text: "Feature Toggle Bug" },
      { id: "MDMN-95509", text: "Config API Story" },
      { id: "MDMN-96902", text: "Enrichment Bug" },
    ],
  },
  {
    label: "March '23",
    items: [
      { id: "MDMN-64777", text: "Record Pages Bug" },
      { id: "PXM-2374", text: "Hierarchy Bug" },
      { id: "PXM-2375", text: "Hierarchy Bug" },
      { id: "MDMN-105711", text: "Address Validation Bug" },
      { id: "MDMN-105793", text: "Vader Bug" },
      { id: "MDMN-107700", text: "Enrichment Bug" },
    ],
  },
  {
    label: "April '23",
    items: [
      { id: "PXM-3987", text: "RBAC SHM Bug" },
      { id: "PXM-3873", text: "Enrichment Bug" },
      { id: "MDMN-110036", text: "CLAIRE Bug" },
      { id: "MDMN-111725", text: "DnB Bug" },
      { id: "MDMN-109386", text: "CLAIRE Card Bug" },
      { id: "MDMN-113233", text: "SHM Bug" },
    ],
  },
  {
    label: "May '23",
    items: [
      { id: "MDMN-111377", text: "API Integration Story" },
      { id: "MDMN-111156", text: "Blackduck Scan" },
      { id: "MDMN-111157", text: "Veracode Scan" },
      { id: "MDMN-109732", text: "Workflow Bug Brand" },
      { id: "MDMN-118324", text: "Workflow Bug Hierarchy" },
      { id: "MDMN-119190", text: "DnB UI Bug" },
    ],
  },
  {
    label: "June '23",
    items: [
      { id: "MDMN-115220", text: "ModelServe Bug" },
      { id: "MDMN-112541", text: "DnB Bug" },
      { id: "MDMN-111387", text: "CAI IFI Story" },
      { id: "MDMN-117615", text: "CAI CDI Story" },
      { id: "RDCV-113870", text: "Version Fix" },
      { id: "RDCV-153869", text: "Version Fix" },
    ],
  },
  {
    label: "July '23",
    items: [
      { id: "RDCV-153871", text: "Version Fix" },
      { id: "RDCV-153872", text: "Version Fix" },
      { id: "RDCV-153868", text: "Version Fix" },
      { id: "RDCV-153874", text: "Version Fix" },
      { id: "MDMN-123754", text: "Blackduck Scan" },
      { id: "MDMN-123755", text: "Veracode Scan" },
    ],
  },
  {
    label: "August '23",
    items: [
      { id: "MDMN-123873", text: "CAI Bug" },
      { id: "MDMN-124915", text: "CAI OSC Bug" },
      { id: "MDMN-124966", text: "Options API UI Bug" },
      { id: "MDMN-125597", text: "Accept/Reject API UI Bug" },
      { id: "MDMN-124960", text: "Model Version Bug" },
      { id: "MDMN-121376", text: "Update Post Approval API Story" },
    ],
  },
];

const MonthCard = ({ month }) => (
  <article className="month-card">
    <header className="month-card__header">
      <h3>{month.label}</h3>
    </header>
    <div className="month-card__body">
      {month.sections?.map((section) => (
        <div key={section.title}>
          <h4>{section.title}</h4>
          <ul>
            {section.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
      {month.items && (
        <ul>
          {month.items.map((item) => (
            <li key={item.id}>
              <span className="jira">{item.id}</span>: {item.text}
            </li>
          ))}
        </ul>
      )}
    </div>
  </article>
);

const Contributions = () => {
  return (
    <section id="contribution" className="section">
      <div className="wrap">
        <h2 className="my_heading">
          My <span>Contributions</span>
        </h2>
        <div className="month-grid">
          {MONTHS.map((month) => (
            <MonthCard key={month.label} month={month} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contributions;
