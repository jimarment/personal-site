import React from "react";
import * as styles from "./tr.module.css";

const PATIENTS = [
  {
    firstName: "Jennifer",
    lastName: "Arment",
    dob: "12/4/1983",
  },
  {
    firstName: "James",
    lastName: "Arment",
    dob: "11/20/1985",
  },
  {
    firstName: "Jabin",
    lastName: "Arment",
    dob: "10/20/2011",
  },
  {
    firstName: "Naia",
    lastName: "Arment",
    dob: "7/7/2013",
  },
];

const yesterday = new Date();
yesterday.setDate(yesterday.getDate() - 1);
const testDateString = yesterday.toLocaleDateString("en-US");

const loadNewPage = function loadNewPage(patientNumber) {
  window.location.assign(`${window.location.pathname}?${patientNumber}`);
};

const TestResult = ({
  firstName: firstNameDefault,
  lastName: lastNameDefault,
  dob: dobDefault,
}) => {
  let firstName = firstNameDefault;
  let lastName = lastNameDefault;
  let dob = dobDefault;

  const buttons = [];

  try {
    const patientNumber = parseInt(window.location.href.split("?")[1], 10);

    if (patientNumber < PATIENTS.length) {
      firstName = PATIENTS[patientNumber].firstName;
      lastName = PATIENTS[patientNumber].lastName;
      dob = PATIENTS[patientNumber].dob;

      buttons.push(
        <button
          onClick={() => {
            if (patientNumber === 0) {
              loadNewPage(PATIENTS.length - 1);
            } else {
              loadNewPage(patientNumber - 1);
            }
          }}
        >
          Previous
        </button>,
        <button
          onClick={() => {
            if (patientNumber === PATIENTS.length - 1) {
              loadNewPage(0);
            } else {
              loadNewPage(patientNumber + 1);
            }
          }}
        >
          Next
        </button>
      );
    } else {
      buttons.push(
        <button
          onClick={() => {
            loadNewPage(1);
          }}
        >
          Next
        </button>
      );
    }
  } catch (error) {
    console.error(error);
  }

  return (
    <div>
      <div className={styles.wrapper}>
        <div className={styles.banner} />

        <div className={styles.content}>
          <h1>COVID-19 Rapid Antigen Test Result Lynnwood</h1>

          <h2>GS Labs</h2>

          <p className={styles.field}>
            <div>Test Date:</div>
            <strong>{testDateString}</strong>
          </p>

          <p className={styles.field}>
            <div>Your Rapid Antigen Result is:</div>
            <strong>Negative</strong>
          </p>

          <p className={styles.field}>
            <div>Type of Test Conducted:</div>
            <strong>Accessbio CareStart COVID-19 Antigen</strong>
          </p>

          <p className={styles.field}>
            <div>Specimen Source:</div>
            <strong>Nasal Swab</strong>
          </p>

          <hr className={styles.hr} />

          <p className={styles.field}>
            <div>Name:</div>
            <strong>
              {firstName} {lastName}
            </strong>
          </p>

          <p className={styles.field}>
            <div>Patient DOB:</div>
            <strong>{dob}</strong>
          </p>

          <div className={styles.footer}>
            <p>
              This test is not FDA cleared or approved but acceptable under the
              FDA Emergency Use Authorization (EUA). The performance of this
              test was established based on the evaluation of a limited number
              of clinical specimens. Clinical performance has not been
              established with all circulating variants but is anticipated to be
              reflective of the prevalent variants in circulation at the time
              and location of the clinical evaluation. Performance at the time
              of testing may vary depending on the variants circulating,
              including newly emerging strains of SARS-CoV-2 and their
              prevalence, which change over time. Positive results do not
              preclude the possibility of co-infection with other pathogens and
              negative results do not rule out SARS-CoV-2 (COVID-19) infections.
              Results should not be used as the sole context for treatment or
              management decisions.
            </p>
          </div>
        </div>

        <p className={styles.companyAddress}>
          All lab work performed by GS Labs.
          <br />
          GS Labs, LLC.
          <br />
          CLIA #: MTSW.FS.61143380
          <br />
          3815 196th Street SW #135,
          <br />
          Lynnwood, WA 98036
          <br />
          855-569-8872
        </p>
      </div>
      {buttons.length > 0 && <div className={styles.buttonBar}>{buttons}</div>}
    </div>
  );
};

TestResult.defaultProps = {
  ...PATIENTS[0],
};

export default TestResult;
