//Name and Role variables defined
var myname = "Nathaniel Collins";
var role = "Front-End Web Developer";


//Defining bio object
var bio = {
    "name": "Nathaniel Collins",
    "role": "Front-End Web Developer",
    "contacts": {
        "mobile": "512-567-5674",
        "email": "nathancleon@gmail.com",
        "github": "nathancleon",
        "twitter": "@nathancleon",
        "location": "Austin, Texas"
    },
    "welcomeMessage": "I'm really excited to learn web development and I feel like I am finally making progress!",
    "skills": [ "HTML", "CSS", "JavaScript", "Research" ],
    "bioPic": "images/nathan.jpg"
};

//Defining variables and replacing data in helper.js with bio data
var formattedName = HTMLheaderName.replace("%data%", myname);
var formattedRole = HTMLheaderRole.replace("%data%", role);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
var formattedwelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);


//Appending the variables to the page
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").append(formattedBioPic);
$("#header").append(formattedwelcomeMessage);
$("#topContacts").append(formattedMobile);
$("#topContacts").append(formattedEmail);
$("#topContacts").append(formattedGithub);
$("#topContacts").append(formattedTwitter);
$("#topContacts").append(formattedLocation);


//Defining the Education object
var education = {
    "schools": [
        {
            "name": "St. Edward's University",
            "city": "Austin, Texas",
            "majors": "Psychology",
            "years": "2009-2013",
            "url": "http://www.stedwards.edu"
        }
    ],
    "onlineCourses": [
        {
            "title": "Front-End Web Development Nanodegree",
            "school": "Udacity",
            "url": "http://www.udacity.com"
        }
    ]
};


//Defining the work object
var work = {
    "jobs": [
        {
            "employer": "Texas Windstorm Insurance Association",
            "title": "Quality Assurance Analyst",
            "dates": "October 2015 - Present",
            "description": "Provided quality assurance for daily and catastrophe claim handling, prepared training documents and trained personal, prepared technical documents for management review and approval, prepared and presented to outside vendors, participated in management planning sessions. Completed quarterly audits of claim files and conducted slant audits to research trends in claim handling."
        },
        {
            "employer": "Texas Windstorm Insurance Association",
            "title": "Claims Examiner",
            "dates": "September 2013 - October 2015",
            "description": "Tasks performed include adjusting reserves and providing reserve recommendations to ensure consistent reserving activities, conduct detailed bill reviews to implement claim management and expense control, contact and/or interview claimants to get additional information, examine claims investigated by insurance adjusters, further investigating questionable claims to determine payment authorization, present cases and participate in their discussion at claim committee meetings, resolve complex, severe exposure claims using high service oriented file handling, verify and analyze data used in settling claims to ensure claims are valid and that settlements are made according to company practices and procedures."
        }
    ]
};


//Defining the projects object
var projects = {
    "projects": [
        {
            "title": "About Me",
            "dates": "September, 2015",
            "description": "Created an about me page using HTML and CSS as part of the Udacity Front-End Web Development Nanodegree.",
						"images": [
							"images/about-me.png"
						]
        },
        {
            "title": "Portfolio",
            "dates": "October, 2015",
            "description": "Created portfolio page based on a mock up image provided by Udacity using Bootstrap.",
						"images": [
							"images/portfolio.png"
						]
        }
    ]
};


//Skills - using an if statement to append to the page
if (bio.skills.length > 0) {

    $("#header").append(HTMLskillsStart);

    var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
    $("#skills").append(formattedSkill);
}


//Work history function to append to the page
function displayWork() {
	for (job in work.jobs) {
			$("#workExperience").append(HTMLworkStart);

			var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
			var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
			var formattedEmployerTitle = formattedEmployer + formattedTitle;

			$(".work-entry:last").append(formattedEmployerTitle);

			var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
			$(".work-entry:last").append(formattedDates);

			var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
			$(".work-entry:last").append(formattedDescription);
	}
}

displayWork();


//Projects function to append to the page
projects.display = function() {
	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);

		if (projects.projects[project].images.length > 0) {
			for (image in projects.projects[project].images) {

				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedImage);

			}
		}
	}
}

projects.display();

//adding map and interactivity to the javascript
