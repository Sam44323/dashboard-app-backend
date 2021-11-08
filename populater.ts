import {
  CollegeDescription,
  CollegeDescriptionModel,
  StudentDescriptionModel,
} from "./model/dashboard.model";

let [c, s] = [1, 1];
let state = ["WB", "AP", "GJ", "RJ", "JK", "SK", "NG", "KL"];
let city = ["City 1", "City 2", "City 3", "City 4", "City"];
let courses = ["CS", "BCOM", "BBA", "MPhiL", "DPhil", "MSC", "MBA", "MCOM"];
let country = ["India", "USA", "UK", "Canada", "Australia"];
let years = [1941, 1942, 1943, 1944, 1981, 1982, 1983, 2001, 2002, 2003, 2004];
let skills = [
  "Coding",
  "Script Writing",
  "Film-making",
  "Accounts",
  "Photography",
  "Singing",
];

export const populate = async () => {
  let college: CollegeDescription = new CollegeDescriptionModel();
  college.college_name = `College ${c++}`.toString();
  college.state_name = state[Math.floor(Math.random() * state.length)];
  college.founded_on = years[Math.floor(Math.random() * years.length)];
  college.city_name = city[Math.floor(Math.random() * city.length)];
  college.no_students = Math.floor(Math.random() * 1000);
  college.country_name = country[Math.floor(Math.random() * country.length)];
  college.courses_offered = courses.slice(
    0,
    courses.length - Math.floor(Math.random() * courses.length - 1)
  );

  console.log(college);

  CollegeDescriptionModel.create(college, (err, res) => {
    if (err) {
      console.log(err);
    }
  });
  console.log("create-another");
};

export const fetcherIds = async () =>
  await (
    await CollegeDescriptionModel.find({}, { _id: 1 })
  ).map((doc) => {
    return doc._id.toString();
  });
