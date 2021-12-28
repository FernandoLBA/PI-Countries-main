/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require("chai");
const session = require("supertest-session");
const app = require("../../src/app.js");
const { Country, Activity, conn } = require("../../src/db.js");

const agent = session(app);
const country = {
  id: "VEN",
  name: "Venezuela",
  flags: "https://flagcdn.com/w320/ve.png",
  continents: ["1234"],
  capital: ["Caracas"],
  subregion: "South America",
  area: 916445,
  population: 28435943,
};

describe("Country routes", () => {
  before(() =>
    conn.authenticate().catch((err) => {
      console.error("Unable to connect to the database:", err);
    })
  );
  beforeEach(() =>
    Country.sync({ force: true }).then(() => Country.create(country))
  );
  describe("GET /countries", () => {
    it("should get 200", () => agent.get("/countries").expect(200));
  });
  describe("GET /countries?name=", () => {
    it("should get 200", () =>
      agent.get("/countries?name='Venezuela'").expect(200));
  });
  describe("GET /countries/:id", () => {
    it("should get 200", () => agent.get("/countries/'VEN'").expect(200));
  });
});

const activity = {
  name: "Kayak",
  difficulty: "5",
  duration: "for life",
  season: "Autumn",
  countries: ["VEN"],
};

describe("Activity routes", () => {
  before(() =>
    conn.authenticate().catch((err) => {
      console.error("Unable to connect to the database:", err);
    })
  );
  beforeEach(() =>
    Activity.sync({ force: true }).then(() => Activity.create(activity))
  );
  describe("GET /activities", () => {
    it("should get 200", () => agent.get("/activities").expect(200));
  });
  describe("POST /activity", () => {
    it("should get 200", () => agent.post("/activity", activity).expect(200));
  });
});
