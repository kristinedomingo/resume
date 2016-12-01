var source = $("#resume-template").html();
var template = Handlebars.compile(source);

var data = {
  sections: [
    {
      header: "Employment",
      items: [
        {
          title: "Facebook",
          secondaryTitle: "Software Engineer",
          bullets: [
            "TBD"
          ]
        },
        {
          title: "RetailMeNot",
          secondaryTitle: "Software Engineering Intern",
          bullets: [
            "Created the front-page of RetailMeNot Gift Cards (giftcards.retailmenot.com, pending publication)",
            "Performed full-stack work, using Redux with FlightJS (by Twitter), Node, and Spring for the Java API",
            "Added an informational banner to the RetailMeNot homepage, promoting Gift Cards as a RetailMeNot product"
          ]
        },
        {
          title: "National Instruments",
          secondaryTitle: "Co-op Software Engineer",
          bullets: [
            "Transitioned from an Intern role to a part-time Software Engineer, on a team in the research and planning phase of an upcoming product",
            "Planned, designed, and wrote two specifications for features that would convert old product metadata into a new format"
          ]
        },
        {
          title: "National Instruments",
          secondaryTitle: "Software Engineering Intern",
          bullets: [
            "Created a tool that allowed the company's product developers to quickly and easily access database information",
            "Given complete responsibility of the project (with guidance), from planning and design to initial release",
            "Wrote the UI in C# with Windows Forms, and the back-end in C++"
          ]
        },
        {
          title: "ABB Enterprise Software",
          secondaryTitle: "Software Engineering Intern",
          bullets: [
            "Modified and expanded the company’s Cordova mobile application, correcting errors and increasing efficiency",
            "Wrote and fixed several unit tests using the Mocha test framework"
          ]
        }
      ]
    }
  ]
};

$('body').append(template(data));
