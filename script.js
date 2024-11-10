// Function to handle form submission
var form = document.getElementById("resumeForm");
form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from reloading the page
    // Get form values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var degree = document.getElementById("degree").value;
    var university = document.getElementById("university").value;
    var year = document.getElementById("year").value;
    var jobTitle = document.getElementById("jobTitle").value;
    var company = document.getElementById("company").value;
    var yearsWorked = document.getElementById("yearsWorked").value;
    var skills = document.getElementById("skills").value;
    // Create a resume object
    var resumeData = {
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
function generateResume(data) {
    var resumeDiv = document.getElementById("resume");
    var resumeOutput = document.getElementById("resumeOutput");
    // Build the HTML for the resume
    resumeDiv.innerHTML = "\n        <h3>".concat(data.name, "</h3>\n        <p>Email: ").concat(data.email, "</p>\n        <p>Phone: ").concat(data.phone, "</p>\n        \n        <h4>Education</h4>\n        <p>").concat(data.education.degree, ", ").concat(data.education.university, " (").concat(data.education.year, ")</p>\n        \n        <h4>Work Experience</h4>\n        <p>").concat(data.workExperience.jobTitle, " at ").concat(data.workExperience.company, " (").concat(data.workExperience.yearsWorked, ")</p>\n        \n        <h4>Skills</h4>\n        <p>").concat(data.skills, "</p>\n    ");
    // Show the generated resume
    resumeOutput.style.display = "block";
}
