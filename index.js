// Import stylesheets
import "./style.css";

// Write Javascript code!
const appDiv = document.getElementById("app");
appDiv.innerHTML = `<h1>JS Starter</h1>`;

let dateOfBirth = "27-02-2021  12.00.00";

let birthdate = `${(new Date(dateOfBirth).getMonth() + 1)
  .toString()
  .padStart(2, "0")}-${new Date(dateOfBirth)
  .getDate()
  .toString()
  .padStart(2, "0")}-${new Date(dateOfBirth).getFullYear()}`;

console.log(
  `${(new Date(dateOfBirth).getMonth() + 1).toString().padStart(2, "0")}`
);
if (birthdate) {
  let t = "27-02-2021  12.00.00";
  t = t.split("  ")[0];
  //console.log('tttt',t.split("-")[]);
  let dateString = `${t.split("-")[1]}-${t.split("-")[0]}-${t.split("-")[2]}`;

  console.log("datestring", dateString);
  var d = new Date(dateString);

  console.log(d);

  console.log(`${d.getMonth() + 1}-${d.getDate()}-${d.getFullYear()}`);
}

let iCIMSGradeStr = "",
  iCIMSGradeNumber = null,
  erinGradeId = null;
iCIMSGradeStr = "Grade 15A";
let cr_erin_bonus_dt = {
  data: [
    {
      id: "a9d7a382-4ad6-4892-b926-379a4d177506",
      companyId: "401de09c-ec8e-4816-b405-a8726534b0af",
      name: "Grade 12-13",
      archived: null,
      tiers: [
        {
          amount: "2000",
          recipientType: "employee",
          payOutDays: "90",
          userGroup: "1e891760-4c35-11ea-b596-39c5748850b1"
        }
      ],
      __typename: "TieredBonus"
    },
    {
      id: "71a5fd7c-5de8-4d43-bdc2-942f0364776d",
      companyId: "401de09c-ec8e-4816-b405-a8726534b0af",
      name: "Grade 0-11",
      archived: null,
      tiers: [
        {
          amount: "500",
          recipientType: "employee",
          payOutDays: "90",
          userGroup: "1e891760-4c35-11ea-b596-39c5748850b1"
        }
      ],
      __typename: "TieredBonus"
    },
    {
      id: "458012f0-80be-4c6c-8f96-0ecd66107514",
      companyId: "401de09c-ec8e-4816-b405-a8726534b0af",
      name: "Grade 19+",
      archived: null,
      tiers: [
        {
          amount: "5000",
          recipientType: "employee",
          payOutDays: "90",
          userGroup: "1e891760-4c35-11ea-b596-39c5748850b1"
        }
      ],
      __typename: "TieredBonus"
    },
    {
      id: "791b432b-c800-414f-8410-5660ca75f426",
      companyId: "401de09c-ec8e-4816-b405-a8726534b0af",
      name: "Grade 14-18",
      archived: null,
      tiers: [
        {
          amount: "3000",
          recipientType: "employee",
          payOutDays: "90",
          userGroup: "1e891760-4c35-11ea-b596-39c5748850b1"
        }
      ],
      __typename: "TieredBonus"
    }
  ]
};
//console.log("hey", extractNumbersFromString);
iCIMSGradeStr = "Grade 17A";
let extractNumbersFromString = iCIMSGradeStr.replace(/\D/g, "");
if (extractNumbersFromString) {
  iCIMSGradeNumber = extractNumbersFromString;
  cr_erin_bonus_dt.data.forEach((bs, bsi) => {
    if (erinGradeId) {
      return;
    }

    let startNumber = 0;
    let endNumber = 0;
    let erinGradesRange = bs.name
      ? bs.name
          .split(" ")[1]
          .replace(/[^a-zA-Z0-9-. ]/g, "")
          .split("-")
      : [];
    startNumber = erinGradesRange[0] ? erinGradesRange[0] : null;
    endNumber = erinGradesRange[1] ? erinGradesRange[1] : 99999999;

    console.log('here.',startNumber, endNumber);
    console.log('icims no', extractNumbersFromString);

    if (startNumber != null && endNumber != null) {
      if (
        Number(extractNumbersFromString) >= Number(startNumber) &&
        Number(extractNumbersFromString) <= Number(endNumber)
      ) {
        erinGradeId = bs.id;
      }
    }
  });
}
console.log("erinGradeId==>", erinGradeId);
