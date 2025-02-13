// Array of keynote speakers
const speakers = [
    {
        name: "Prof. Filipe Samuel Silva",
        title: "Professor, University of Minho, Portugal",
        subtitle: "CEO & Founder of Extremater Dental Solutions",
        description: "Dr. Samuel earned his MSc and PhD, both from Minho University, Portugal. Recognized among the “World’s Top 2% Scientists 2021” by Stanford University and Elsevier, he specializes in Materials Science Engineering, Dentistry, Oral Surgery & Medicine, Metallurgy, and Mechanics. He coordinates the Laboratory of Micro Fabrication and Systems Integration within the Center for MicroElectro Mechanical Systems (CMEMS) at the university. Dr. Samuel holds five international patents, numerous publications, and six international research awards, reflecting significant global recognition in materials science and biomedical engineering.",
        image: "../images/Silva.jpeg"
    },
    {
        name: "Prof. Anil Kaul",
        title: "Acting Vice-Chancellor,<br />IIPH-Hyderabad",
        subtitle: "Director – Dr. Cyrus Poonawalla Centre for Infectious Diseases",
        description: "Prof. Kaul, a physician-scientist and public health professional, has over 35 years of experience in infectious diseases and women’s health. He holds formal education in Medicine from Madras Medical College, Dentistry from King George’s Medical College (Lucknow), and Public Health Administration from the University of Minnesota. His expertise lies in translational and operational research, aimed at enhancing patient health and reducing healthcare costs.",
        image: "../images/Anil-Kaul.jpg"
    },
    {
        name: "Prof (Dr.) Anuj Kumar",
        title: "Head of Research, Rushford Business School, Switzerland",
        description: "Dr. Kumar completed his M.Sc. at University College Dublin, Ireland, and earned his PhD from Aligarh Muslim University, India. He was also honored with the Outstanding Achiever award at MAHSA University, Malaysia. He is associated with INTI International University, Malaysia as a Research Fellow (Honorary Role). His primary areas of expertise include marketing, international business, and general management. Dr. Kumar has received several prestigious academic recognitions, including Best Researcher, Outstanding Academician, Dynamic Leader, Best Mentor, and Young Achiever awards, among others.",
        image: "../images/Anuj.jpeg"
    },
    
    {
        name: "Dr. Sayantan Mandal",
        title: "Senior Assistant Professor, <br /> IIT Jammu",
        description: "Dr. Mandal graduated from the Aarhus University, Denmark; and completed his PhD with Cum Laude from the University of Deusto. Previously, he worked at NIEPA and University of Delhi, while coordinating a large-scale study on Teaching and Learning in Indian Higher Education system and co-authored the Indian Higher Education Report 2017 on Teaching, Learning, and Quality. At IIT Jammu, Dr. Mandal is presently coordinating two research projects on Integrating Digital Technologies with Digital Education (ITLDE) in the Jammu & Kashmir and Ladakh region, and GenAI and Teacher Competencies (ICSSR).",
        image: "../images/Dr-mandal.jpeg"
    }
];

// Array of organizing committee members

// Array for Chief Patron and Patron
const chiefPatronAndPatron = [
    { role: "Chief Patron", name: "Prof. (Dr.) Pragati Kumar", title: "Vice Chancellor, SMVDU", image: "../images/prof.pragatikumar.jpg" },
    { role: "Patron", name: "Mr. Ajay Kumar Sharma (JKAS)", title: "Registrar, SMVDU", image: "../images/registrar.jpg" }
];

// Array for Chairpersons
const chairpersons = [
    { role: "Chairperson", name: "Prof. Kumud Ranjan Jha", title: "Dean, Faculty of Engineering, SMVDU", image: "../images/Dr-KRjha.jpeg" },
    { role: "Chairperson", name: "Prof. Ashutosh Vashishtha", title: "Dean, Faculty of Management, SMVDU", image: "../images/ashutoshv.jpeg" },
    { role: "Chairperson", name: "Dr. Sunil Kumar Wanchoo", title: "Dean, Faculty of Sciences, SMVDU", image: "../images/sunilWanchoo.jpeg" },
    { role: "Chairperson", name: "Dr. Amitabh V Dwivedi", title: "Dean, Faculty of Humanities & Social Sciences, SMVDU", image: "../images/Amitabh.jpeg" }
];

// Array for Coordinators
const coordinators = [
    { role: "Coordinator", name: "Dr. Sakshi Arora", title: "Associate Professor, SoCSE, SMVDU", image: "../images/dr-sakshi-arora.jpeg" },
    { role: "Coordinator", name: "Dr. Isha Malhotra", title: "Assistant Professor, SoLL, SMVDU", image: "../images/Dr-IshaMalhotra.jpeg" },
    { role: "Coordinator", name: "Dr. Ankush Raina", title: "Assistant Professor, SoME, SMVDU", image: "../images/AnkushRaina-1.jpeg" },
    { role: "Coordinator", name: "Mr. Rishav Bali", title: "Research Scholar, SoLL, SMVDU", image: "../images/RishavBali.jpeg" },
    { role: "Coordinator", name: "Ms. Chakshu Gupta", title: "Research Scholar, SoLL, SMVDU", image: "../images/ChakshuGupta.jpg" }
]


// Function to create bubbles
function createBubbles() {
    const container = document.getElementById('bubbles-container');
    if (!container) return; // Prevents errors if container is missing

    const committeeMembers = [...chiefPatronAndPatron, ...chairpersons, ...coordinators]; // Merge all members

    committeeMembers.forEach(member => {
        const bubble = document.createElement('div');
        bubble.className = 'bubble';

        bubble.innerHTML = `
            <img src="${member.image}" alt="${member.role}" class="bubble-image">
            <div class="bubble-text">
                <strong>${member.role}</strong><br>
                ${member.name}<br>
                <small>${member.title}</small>
            </div>
        `;
        container.appendChild(bubble);
    });
}


// Call the function to create bubbles
createBubbles();


function register() {
    window.open('https://forms.gle/r1hHJh12C1uxGf3v6', '_blank');
}

function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        // alert('Copied to clipboard: ' + text);
    }).catch(err => {
        console.error('Could not copy text: ', err);
    });
}
// Function to create speaker cards
function createSpeakerCards() {
    const container = document.getElementById('speakers-container');

    speakers.forEach(speaker => {
        const card = document.createElement('div');
        card.className = 'card';

        card.innerHTML = `
            <div class="speak-propic">
                <img src="${speaker.image}" alt="${speaker.name}">
            </div>
            <div class="speak-cont">
                <h3>${speaker.name}</h3>
                <h4>${speaker.title}</h4>
                ${speaker.subtitle ? `<h4>${speaker.subtitle}</h4>` : ''}
                <p>${speaker.description}</p>
            </div>
        `;

        container.appendChild(card);
    });
}

// Call the function to create cards
createSpeakerCards();