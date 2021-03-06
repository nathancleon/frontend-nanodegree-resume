//Defining bio object
var bio = {
    "name": "Nathaniel Collins",
    "role": "Front-End Web Developer",
    "contacts": {
			"mobile": "512-567-5674",
			"email": "nathancleon@gmail.com",
			"github": "nathancleon",
			"twitter": "@nathancleon",
			"location": "Austin, Texas 78749"
    },
    "welcomeMessage": "I'm really excited to learn web development and can't wait to build websites for others!",
    "skills": [ "HTML", "CSS", "JavaScript", "Research" ],
    "bioPic": "images/nathan.jpg"
	};


//Defining the Education object
var education = {
    "schools": [
			{
				"name": "St. Edward's University",
				"location": "Austin, Texas 78704",
				"major": "Psychology",
				"dates": "2009-2013",
				"degree": "Bachelor of Arts"
			}
    ],
    "onlineCourses": [
			{
				"title": "Front-End Web Development Nanodegree",
				"name": "Udacity",
				"dates": "October - Present",
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


//Bio function to append to the page
bio.display = function() {
	'use strict';

	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	$("#header").prepend(formattedRole);

	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	$("#header").prepend(formattedName);

	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
	$("#topContacts").append(formattedLocation);

	var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
	$("#header").append(formattedBioPic);

	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	$("#topContacts").append(formattedMobile);

	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	$("#topContacts").append(formattedEmail);

	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
	$("#topContacts").append(formattedGithub);

	var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
	$("#topContacts").append(formattedTwitter);

	var formattedwelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
	$("#header").append(formattedwelcomeMessage);

	var formattedSkill, skill;

    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);
        for (skill in bio.skills) {
            if (bio.skills.hasOwnProperty(skill)) {
                formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
                $("#skills").append(formattedSkill);
            }
        }
    }
};

bio.display();


//Education function to append to page
education.display = function () {
    'use strict';
    var edu;
    if (education.schools.length > 0) {
        for (edu in education.schools) {
                $("#education").append(HTMLschoolStart);
                $(".education-entry:last").prepend(HTMLschoolName.replace("%data%", education.schools[edu].name));
					      $(".education-entry:last").append(HTMLschoolMajor.replace("%data%", education.schools[edu].major));
								$(".education-entry:last").prepend(HTMLschoolDates.replace("%data%", education.schools[edu].dates));
								$(".education-entry:last").append(HTMLschoolDegree.replace("%data%", education.schools[edu].degree));
                $(".education-entry:last").append(HTMLschoolLocation.replace("%data%", education.schools[edu].location));
        }
		if (education.onlineCourses.length > 0) {
        for (edu in education.onlineCourses) {
								$(".education-entry:first").append(HTMLonlineClasses);
                $(".education-entry:last").append(HTMLonlineTitle.replace("%data%", education.onlineCourses[edu].title));
								$(".education-entry:last").append(HTMLonlineSchool.replace("%data%", education.onlineCourses[edu].name));
								$(".education-entry:last").append(HTMLonlineDates.replace("%data%", education.onlineCourses[edu].dates));
                $(".education-entry:last").append(HTMLonlineURL.replace("%data%", education.onlineCourses[edu].url));
            }
        }
    }
};

education.display();

//Work history function to append to the page
work.display = function() {
	var job;
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

work.display();


//Projects function to append to the page
projects.display = function() {
	var project;
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
$("#mapDiv").append(googleMap);

//Toggle the nav menu
$(function() {
	$('.nav-toggle').on('click', function(){
		$('.nav-main').toggleClass('open');
	});
});
