import React from "react";
import { useFormik } from "formik";
import styled from "styled-components";
import { useCvContext } from "../context/CvContext";

const Section = styled.section`
  margin-bottom: 20px;
`;

const ExperienceForm = styled.div`
  margin-bottom: 15px;
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.primary};
  border-radius: 5px;
`;

const Button = styled.button`
  background-color: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.text};
  border: none;
  padding: 8px 15px;
  border-radius: 5px;
  margin-top: 10px;
`;

export default function EditorPage() {
  const { cvData, updatePersonal, addExperience, updateExperience, removeExperience } = useCvContext();

  // Personal info form with Formik
  const formikPersonal = useFormik({
    initialValues: cvData.personal,
    enableReinitialize: true,
    onSubmit: values => {
      updatePersonal(values);
    }
  });

  function handlePersonalChange(e) {
    formikPersonal.handleChange(e);
    formikPersonal.handleSubmit();
  }

  return (
    <div className="container">
      <h1>עריכת קורות חיים</h1>

      <Section>
        <h2>פרטים אישיים</h2>
        <form>
          <label>שם מלא:</label><br />
          <input
            name="fullName"
            value={formikPersonal.values.fullName}
            onChange={handlePersonalChange}
          /><br />

          <label>אימייל:</label><br />
          <input
            name="email"
            type="email"
            value={formikPersonal.values.email}
            onChange={handlePersonalChange}
          /><br />

          <label>טלפון:</label><br />
          <input
            name="phone"
            value={formikPersonal.values.phone}
            onChange={handlePersonalChange}
          /><br />

          <label>כתובת:</label><br />
          <input
            name="address"
            value={formikPersonal.values.address}
            onChange={handlePersonalChange}
          />
        </form>
      </Section>

      <Section>
        <h2>ניסיון תעסוקתי</h2>
        {cvData.experiences.map(exp => (
          <ExperienceForm key={exp.id}>
            <label>תפקיד:</label><br />
            <input
              value={exp.role}
              onChange={e => updateExperience(exp.id, { role: e.target.value })}
            /><br />

            <label>מקום עבודה:</label><br />
            <input
              value={exp.company}
              onChange={e => updateExperience(exp.id, { company: e.target.value })}
            /><br />

            <label>תקופה:</label><br />
            <input
              value={exp.period}
              onChange={e => updateExperience(exp.id, { period: e.target.value })}
            /><br />

            <label>תיאור:</label><br />
            <textarea
              rows="3"
              value={exp.description}
              onChange={e => updateExperience(exp.id, { description: e.target.value })}
            />
            <br />
            <Button onClick={() => removeExperience(exp.id)}>מחק ניסיון</Button>
          </ExperienceForm>
        ))}

        <Button onClick={addExperience}>הוסף ניסיון</Button>
      </Section>
    </div>
  );
}
