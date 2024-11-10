// Function to handle form submission
const form = document.getElementById("resumeForm") as HTMLFormElement;
form.addEventListener("submit", function (event) {
    event.preventDefault();  // Prevent the form from reloading the page

    // Get form values
    const name = (document.getElementById("name") as HTMLInputElement).value;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const phone = (document.getElementById("phone") as HTMLInputElement).value;
    const degree = (document.getElementById("degree") as HTMLInputElement).value;
    const university = (document.getElementById("university") as HTMLInputElement).value;
    const year = (document.getElementById("year") as HTMLInputElement).value;
    const jobTitle = (document.getElementById("jobTitle") as HTMLInputElement).value;
    const company = (document.getElementById("company") as HTMLInputElement).value;
    const yearsWorked = (document.getElementById("yearsWorked") as HTMLInputElement).value;
    const skills = (document.getElementById("skills") as HTMLTextAreaElement).value;

    // Create a resume object
    const resumeData = {
        name: name,
        email: email,
        phone: phone,
        education: {
            degree: degree,
            university: university,
            year: year
        },
        workExperience: {
            jobTitle: jobTitle,
            company: company,
            yearsWorked: yearsWorked
        },
        skills: skills
    };

    // Generate resume and display it
    generateResume(resumeData);
});

// Function to generate and display resume
function generateResume(data: any) {
    const resumeDiv = document.getElementById("resume")!;
    const resumeOutput = document.getElementById("resumeOutput")!;

    // Build the HTML for the resume
    resumeDiv.innerHTML = `
        <h3>${data.name}</h3>
        <p>Email: ${data.email}</p>
        <p>Phone: ${data.phone}</p>
        
        <h4>Education</h4>
        <p>${data.education.degree}, ${data.education.university} (${data.education.year})</p>
        
        <h4>Work Experience</h4>
        <p>${data.workExperience.jobTitle} at ${data.workExperience.company} (${data.workExperience.yearsWorked})</p>
        
        <h4>Skills</h4>
        <p>${data.skills}</p>
    `;

    // Show the generated resume
    resumeOutput.style.display = "block";
}
