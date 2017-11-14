const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

const port = process.env.PORT ||3000;
const instructors = {
  data:[
    {
      id: 1,
      "Full Name": "Kyle Coberly",
      Title: "Faculty Director",
      "Number of dogs": 0
    },
    {
      id: 2,
      "Full Name": "Danny Fritz",
      Title: "Lead Instructor",
      "Number of dogs": 0
    },
    {
      id: 3,
      "Full Name": "CJ Reynolds",
      Title: "Lead Instructor",
      "Number of dogs": 0
    },
    {
      id: 4,
      "Full Name": "Brooks Patton",
      Title: "Lead Instructor",
      "Number of dogs": 0
    },
    {
      id: 5,
      "Full Name": "Roberto Ortega",
      Title: "Lead Instructor",
      "Number of dogs": 1
    },
    {
      id: 6,
      "Full Name": "Chad Drummond",
      Title: "Instructor",
      "Number of dogs": 0
    },
    {
      id: 7,
      "Full Name": "Kim Schlesinger",
      Title: "Instructor",
      "Number of dogs": 0
    },
    {
      id: 8,
      "Full Name": "Peter Ostiguy",
      Title: "Associate Instructor",
      "Number of dogs": 1
    },
    {
      id: 9,
      "Full Name": "Cass Torske",
      Title: "Resident",
      "Number of dogs": 1
    },
    {
      id: 10,
      "Full Name": "Matt Winzer",
      Title: "Resident",
      "Number of dogs": 2
    },
    {
      id: 11,
      "Full Name": "Aaron Goodman",
      Title: "Resident",
      "Number of dogs": 0
    },
    {
      id: 12,
      "Full Name": "Michelle Bergquist",
      Title: "Resident",
      "Number of dogs": 1
    }
  ]};

function getID(data, id){
  for (let i = 0; i < data.length; i++) {
    if (data[i].id == id){
      return data[i];
    }
  }
  return null;
}

app.get("/", function(request, response){
  response.json(instructors);
});

app.get("/:id", function(request, response){
  var record = getID(instructors.data, request.params.id);
  if (!record){
    response.status(404);
    response.json({
      error: {
        message: "No record found!"
      }
    });
  }
  response.json(record);
});

app.listen(port);
