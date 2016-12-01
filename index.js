var source = $("#resume-template").html();
var template = Handlebars.compile(source);

var data = {
  nameplate: {
    firstName: "Kristine",
    lastName: "Domingo",
    icons: [
      {
        display: "me@kristinedomingo.com",
        link: "mailto:me@kristinedomingo.com",
        icon: ""
      },
      {
        display: "(713) 417-4961",
        link: "",
        icon: ""
      },
      {
        display: "kristinedomingo.com",
        link: "kristinedomingo.com",
        icon: ""
      },
      {
        display: "kristinedomingo",
        link: "https://www.linkedin.com/in/kristinedomingo",
        icon: ""
      },
      {
        display: "kristinedomingo",
        link: "https://github.com/kristinedomingo",
        icon: ""
      }
    ]
  },
  sections: [
    {
      header: "Education",
      items: [
        {
          title: "The University of Texas at Austin",
          secondaryTitle: "Bachelors of Science and Arts in Computer Science",
          duration: "Spring 2017",
          bullets: [
            "CS GPA: 3.47",
            "Business Foundations Program",
            "Freshman Research Initiative (Computational Intelligence in Game Design)"
          ]
        }
      ]
    },
    {
      header: "Employment",
      items: [
        {
          title: "Facebook",
          secondaryTitle: "Software Engineer",
          duration: "July 2017",
          bullets: [
            "TBD"
          ]
        },
        {
          title: "RetailMeNot",
          secondaryTitle: "Software Engineering Intern",
          duration: "June 2016 to Aug 2016",
          bullets: [
            "Created the front-page of RetailMeNot Gift Cards (giftcards.retailmenot.com, pending publication)",
            "Performed full-stack work, using Redux with FlightJS (by Twitter), Node, and Spring for the Java API",
            "Added an informational banner to the RetailMeNot homepage, promoting Gift Cards as a RetailMeNot product"
          ]
        },
        {
          title: "National Instruments",
          secondaryTitle: "Co-op Software Engineer",
          duration: "Aug 2015 to Nov 2015",
          bullets: [
            "Transitioned from an Intern role to a part-time Software Engineer, on a team in the research and planning phase of an upcoming product",
            "Planned, designed, and wrote two specifications for features that would convert old product metadata into a new format"
          ]
        },
        {
          title: "National Instruments",
          secondaryTitle: "Software Engineering Intern",
          duration: "Jun 2015 to Aug 2015",
          bullets: [
            "Created a tool that allowed the company's product developers to quickly and easily access database information",
            "Given complete responsibility of the project (with guidance), from planning and design to initial release",
            "Wrote the UI in C# with Windows Forms, and the back-end in C++"
          ]
        },
        {
          title: "ABB Enterprise Software",
          secondaryTitle: "Software Engineering Intern",
          duration: "May 2014 to July 2014",
          bullets: [
            "Modified and expanded the company’s Cordova mobile application, correcting errors and increasing efficiency",
            ""
          ]
        }
      ]
    },
    {
      header: "Projects",
      items: [
        {
          title: "SWEet Music (sweetmusic.me)",
          bullets: [
            "Working with a group, created an interactive web application that allows users to browse a vast amount of music­-related data",
            "Written using Flask and AngularJS with a MySQL database"
          ]
        },
        {
          title: "Interactive Evolution with Minecraft Textures",
          bullets: [
            "Working with a group, created a program that could generate a design to display as a skin model in the video game, Minecraft",
            "Based on the concept of \"evolutionary art\", using user-guided evolution"
          ]
        }
      ]
    },
    {
      header: "Academic Involvement",
      items: [
        {
          title: "The University of Texas",
          secondaryTitle: "Undergraduate Teaching Assistant",
          duration: "Aug 2016 to Dec 2016",
          bullets: [
            "For CS 373: Software Engineering, by Professor Glenn Downing",
            "Assisted students in learning development tools (Docker, git, Travis CI) and web frameworks/tools (AngularJS, PostgreSQL, Flask)"
          ]
        },
        {
          title: "The University of Texas",
          secondaryTitle: "Undergraduate Teaching Assistant",
          duration: "Jan 2016 to May 2016",
          bullets: [
            "For CS 314: Data Structures, by Lecturer Mike Scott",
            "Led weekly discussion sections, graded weekly projects written in Java, and assisted students in learning fundamental data structures"
          ]
        }
      ]
    }
  ]
};

$('body').append(template(data));
