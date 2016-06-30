/*
The first section is the bio section. In this section, user will see general
information about my self including the following. contact information, name
and desired role, introduction message, and profile picture.

bio = dot notation object
*/

// This is the bio object and all of the main items
var bio = {
  "name" : "Omar Jandali",
  "role" : "Full Stack Web Developer",
  "contacts" : {
    "mobile" : "(951) 534-3666",
    "email" : "omar@omnacore.com",
    "twitter" : "@ItsMeOmarJ",
    "github" : "omar-jandali",
    "location" : "Mission Viejo, CA",
    "blog" : "www.omarjandali.com",
  },
  "welcomeMessage" : "\"The best way to predict the future is to build it.\" - John D. Rockefeller Jr.",
  "skills" : [
    "Web Development",
    "Git/GitHub",
    "Bootstrap",
    "HTML/CSS/Javascript"],
  "biopic" : "http://placehold.it/180x180"
};

var work = {
  "jobs" : [
    {
      "employer" : "OmnaCore Marketing",
      "dates" : "September 2015 - Current",
      "title" : "Founder",
      "location" : "Mission Viejo, CA",
      "description" : "Founder of a marketing firm focused on help startups" +
      "take their ideas to the next level. I worked with 2 startup clothing" +
      "companies (Open Nine Five and Palit) based out of Pasadena, CA and one <br>" +
      "travel accessories (Botte.us) company based out of San Dimas, CA."
    },
    {
      "employer" : "Addrenal",
      "dates" : "January 2016 - May 2016",
      "title" : "Social Media Specialist",
      "location" : "Huntington, CA",
      "description" : "Addrenal is a small action sports marketing firm and during" +
      "my time at Addrenal, I worked on the management and content creation for" +
      "Edgard VoVo Periera who is a pro big air skateboarder. "
    },
    {
      "employer" : "Freelance Marketing",
      "dates" : "June 2015 - September 2016",
      "title" : "Social Media Specialist",
      "location" : "Mission Viejo, CA",
      "description" : "As a freelance marketing specialist, I helped a few" +
      "friends and small clients with their social media platforms as well as" +
      "help with website and blog design as well as development using Wordpress."
    }
  ]
};

var projects = {
  "projects" : [
    {
      "title" : "TasteBuds",
      "dates" : " June 2016 - work in progress",
      "description" : " This is a website that i want to build that is a place where people can go online and" +
      "input, rate, comment, and more for their favorite restaurant in Los Angeles and other major cities",
      "images" : [
        "http://placecorgi.com/260/180"
      ]
    },
    {
      "title" : "Fyt",
      "dates" : "June 2016 - work in progress",
      "description" : "This is a website that i want to develop into an app. This app will become similar to a personal" +
      "trainer for those who want to get fyt and change their lives for the better.",
      "images" : [
        "http://placecorgi.com/260/180"
      ]
    },
    {
      "title" : "Palit Website",
      "dates" : "July 2016",
      "description" : "This is a project that I will start working on later on in the year. I am assisting a close friend with" +
      "the website for his new and minimalistic clothing brand that he is building and working on. ",
      "images" : [
        "http://placecorgi.com/260/180"
      ]
    },
  ]
};

var education = {
  "schools" : [
    {
      "name" : "Arizona State University - Online",
      "location" : "Temple, AZ",
      "degree" : "Bachelors",
      "dates" : "2015 - 2017",
      "majors" : ["Marketing"],
      "url" : "www.asu.edu"
    },
    {
      "name" : "Saddleback College",
      "location" : "Mission Viejo, CA",
      "degree" : "Bachelors",
      "dates" : "2013 - 2015",
      "majors" : ["Marketing"],
      "url" : "www.saddleback.edu"
    },
    {
      "name" : "La Sierra University",
      "location" : "Riverside, CA",
      "degree" : "Bachelors",
      "dates" : "2011 - 2013",
      "majors" : ["Biology"],
      "url" : "www.lasierra.edu"
    }
  ],
  "onlineCourses" : [
    {
      "title" : "Git and GitHub",
      "school" : "Udacity",
      "dates" : "June 2016",
      "url" : "https://www.udacity.com/course/how-to-use-git-and-github--ud775"
    },
    {
      "title" : "Javascript Basics",
      "school" : "Udacity",
      "dates" : "June 2016",
      "url" : "https://www.udacity.com/course/javascript-basics--ud804"
    },
    {
      "title" : "Front End Web Developer Nanodegree",
      "school" : "Udacity",
      "dates" : "June 2016",
      "url" : "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
    }
  ]
};

bio.display = function(){
  var formattedName = HTMLheaderName.replace("%data%", bio.name);
  var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
  var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
  var formattedBioPicture = HTMLbioPic.replace("%data%", bio.biopic);

  var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
  var formattedPhone = HTMLmobile.replace("%data%", bio.contacts.mobile);
  var formattedGitHub = HTMLgithub.replace("%data%", bio.contacts.github);
  var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
  var formattedBlog = HTMLblog.replace("%data%", bio.contacts.blog);
  var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

  $("#header").prepend(formattedRole);
  $("#header").prepend(formattedName);

  $("#topContacts, #footerContacts").append(formattedPhone);
  $("#topContacts, #footerContacts").append(formattedEmail);
  $("#topContacts, #footerContacts").append(formattedGitHub);
  $("#topContacts, #footerContacts").append(formattedTwitter);
  $("#topContacts, #footerContacts").append(formattedBlog);
  $("#topContacts, #footerContacts").append(formattedLocation);

  $("#header").append(formattedBioPicture);
  $("#header").append(formattedMessage);

  if (bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);

    for (var i = 0; i < bio.skills.length; i++) {
      var formattedSkills = HTMLskills.replace("%data%", bio.skills[i]);
      $("#skills").append(formattedSkills);
    }

  }

};

work.display = function(){

  for(var job = 0; job < work.jobs.length; job++){
  $("#workExperience").append(HTMLworkStart);

    var workEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var workTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    var formattedEmployerTitle = workEmployer + workTitle;
    $(".work-entry:last").append(formattedEmployerTitle);

    var workPeriod = HTMLworkDates.replace("%data%", work.jobs[job].dates);
    $(".work-entry:last").append(workPeriod);

    var workDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
    $(".work-entry:last").append(workDescription);

    var workLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
    $(".work-entry:last").append(workLocation);
  }
};

projects.display = function(){
  for(var project = 0; project < projects.projects.length; project++){
    $("#projects").append(HTMLprojectStart);

    var projectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
    $(".project-entry:last").append(projectTitle);

    var projectDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
    $(".project-entry:last").append(projectDates);

    var projectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
    $(".project-entry:last").append(projectDescription);

    var projectImages = HTMLprojectImage.replace("%data%", projects.projects[project].images);
    $(".project-entry:last").append(projectImages);
  }
};

education.display = function(){
  $("#education").append(HTMLschoolStart);

  $("#education").append(HTMLonlineClasses);
  for (var school = 0; school < education.schools.length; school++){

    var educationName = HTMLschoolName.replace("%data%", education.schools[school].name);
    var educationLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
    var educationDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
    var educationDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
    var educationMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);

    $(".education-entry:last").append(educationName + educationDegree);
    $(".education-entry:last").append(educationDates);
    $(".education-entry:last").append(educationLocation);
    $(".education-entry:last").append(educationMajor);
  }


  for (var online = 0; online < education.onlineCourses.length; online++){

    var onlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[online].title);
    var onlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[online].school);
    var onlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[online].dates);
    var onlineUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[online].url);

    $(".education-entry:last").append(onlineTitle + onlineSchool);
    $(".education-entry:last").append(onlineDates);
    $(".education-entry:last").append(onlineUrl);
  }
};

function inName(name){
  name = name.trim().split(" ");

  name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
  name[1] = name[1].toUpperCase();

  return name[0] + " " + name[1];

}
inName(bio.name);

bio.display();
work.display();
projects.display();
education.display();

$("#mapDiv").append(googleMap);

$("#main").append(internationalizeButton);