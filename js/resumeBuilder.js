// Bio data object
var bio = {
	"name": "Fran Delgado",
	"role": "Internet Builder",
	"contacts": {
		"mobile": "650-555-555",
		"email": "fran@thinway.org",
		"github": "thinway",
		"twitter": "@twitter",
		"location": "Sevilla (Spain)"
	},
	"welcomeMessage": "Code is poetry.",
	"skills": [
		"awesomeness", "delivering things", "cryogenic sleep", "saving the universe"
	],
	"bioPic": "images/fry.jpg"
}

// Dio display info function
bio.display = function() {
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	$("#header").prepend(formattedRole);

	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	$("#header").prepend(formattedName);

	var formattedImage = HTMLbioPic.replace("%data%", bio.bioPic);
	$('#header').append(formattedImage);

	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	$('#topContacts').append(formattedMobile);
	$('#footerContacts').append(formattedMobile);

	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	$('#topContacts').append(formattedEmail);
	$('#footerContacts').append(formattedEmail);

	var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
	$('#topContacts').append(formattedTwitter);
	$('#footerContacts').append(formattedTwitter);

	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
	$('#topContacts').append(formattedGithub);
	$('#footerContacts').append(formattedGithub);

	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
	$('#topContacts').append(formattedLocation);
	$('#footerContacts').append(formattedLocation);

	var formattedWelcomeMessage = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
	$('#header').append(formattedWelcomeMessage);

	if (bio.skills.length > 0) {
		$('#header').append(HTMLskillsStart);

		var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);

		$('#skills').append(formattedSkill);

		formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
		$('#skills').append(formattedSkill);
		formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
		$('#skills').append(formattedSkill);
		formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
		$('#skills').append(formattedSkill);
	};
}

// Education data object
var education = {
	"schools": [
		{
			"name": "Nova Southeastern University",
			"location": "Fort Lauderdale, FL",
			"degree": "Masters",
			"majors": ["CS"],
			"dates": 2013,
			"url": "http://example.com"
		},
		{
			"name": "Eckerd College",
			"location": "Saint Petersburg, FL",
			"degree": "BA",
			"majors": ["CS"],
			"dates": 2013,
			"url": "http://example.com"
		}
	],
	"onlinecourses": [
		{
			"title": "Javascript Crash Course",
			"school": "Udacity",
			"dates": 2014,
			"url": "http://www.udacity.com/course/ud804"
		}
	]
}

// Display education info function
education.display = function() {
	for(school in education.schools) {
		$('#education').append(HTMLschoolStart);

		var formattedSchoolNameDegree = 
			HTMLschoolName.replace("%data%",education.schools[school].name) +
			HTMLschoolDegree.replace("%data%",education.schools[school].degree);
		$('.education-entry:last').append(formattedSchoolNameDegree);

		var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		$('.education-entry:last').append(formattedSchoolLocation);

		var formattedSchoolDates = HTMLschoolDates.replace("%data%",education.schools[school].dates);
		$('.education-entry:last').append(formattedSchoolDates);

		var formattedSchoolMajor = HTMLschoolMajor.replace("%data%",education.schools[school].majors);
		$('.education-entry:last').append(formattedSchoolMajor);
	}

	for(onlinecourse in education.onlinecourses) {
		// Online Courses
		$('#education').append(HTMLonlineClasses);

		var formattedOnlineTitleSchool = 
			HTMLonlineTitle.replace("%data%",education.onlinecourses[onlinecourse].title) +
			HTMLonlineSchool.replace("%data%",education.onlinecourses[onlinecourse].school);
		$('#education').append(formattedOnlineTitleSchool);
		
		var formattedOnlineDates = HTMLonlineDates.replace("%data%",education.onlinecourses[onlinecourse].dates);
		$('#education').append(formattedOnlineDates);

		var formattedOnlineURL = HTMLonlineURL.replace("%data%",education.onlinecourses[onlinecourse].url);
		$('#education').append(formattedOnlineURL);

	}
}

// Work data object
var work = {
	"jobs": [
		{
			"employer": "Planet Express",
			"title": "Delivery Boy",
			"location": "Brookling, NY",
			"dates": "January 3000 - Future",
			"description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedable ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedable swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
		},
		{
			"employer": "Panucci's Pizza",
			"title": "Delivery Boy",
			"location": "Boston, Massachusets",
			"dates": "1998 - December 31, 1999",
			"description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedable ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedable swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
		}
	]
}

// Display work info function
work.display = function () {
	for(job in work.jobs){
		$('#workExperience').append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;

		$('.work-entry:last').append(formattedEmployerTitle);

		var formattedDates = HTMLworkDates.replace("%data%",work.jobs[job].dates);
		$('.work-entry:last').append(formattedDates);

		var formattedLocation = HTMLworkLocation.replace("%data%",work.jobs[job].location);
		$('.work-entry:last').append(formattedLocation);

		var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);
		$('.work-entry:last').append(formattedDescription);
	}
}

// Projects data object
var projects = {
	"projects": [
		{
			"title": "Sample Project 1",
			"dates": "2014",
			"description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedable ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedable swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg.",
			"images": ["images/197x148.gif","images/197x148.gif"]
		},
		{
			"title": "Sample Project 2",
			"dates": "2015",
			"description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedable ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedable swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg.",
			"images": ["images/197x148.gif","images/197x148.gif"]
		}

	]
}

// Display projects info function
projects.display = function() {
	for(project in projects.projects){
		$('#projects').append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%",projects.projects[project].title);
		$('.project-entry:last').append(formattedTitle);
		var formattedDates = HTMLprojectDates.replace("%data%",projects.projects[project].dates);
		$('.project-entry:last').append(formattedDates);
		var formattedDescription = HTMLprojectDescription.replace("%data%",projects.projects[project].description);
		$('.project-entry:last').append(formattedDescription);

		if( projects.projects[project].images.length > 0 ){
			for(image in projects.projects[project].images){
				var formattedImage = HTMLprojectImage.replace("%data%",projects.projects[project].images[image]);
				$('.project-entry:last').append(formattedImage);
			}
		}
	}
}

// Add elements to the page
bio.display();
work.display();
education.display();
projects.display();

// Add the map
$('#mapDiv').append(googleMap);