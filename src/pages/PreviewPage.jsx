import React from "react";
import styled from "styled-components";
import { useCvContext } from "../context/CvContext";

const Container = styled.div`
  max-width: 800px;
  margin: 20px auto;
  padding: 15px;
  background-color: ${({ theme }) => theme.secondary};
  color: ${({ theme }) => theme.text};
  border-radius: 10px;
`;

const Section = styled.section`
  margin-bottom: 20px;
`;

const ExperienceItem = styled.div`
  margin-bottom: 10px;
  padding-bottom: 5px;
  border-bottom: 1px solid ${({ theme }) => theme.primary};
`;

export default function PreviewPage() {
  const { cvData } = useCvContext();
  const { personal, experiences } = cvData;

  return (
    <Container>
      <h1>תצוגת קורות חיים</h1>

      <Section>
        <h2>פרטים אישיים</h2>
        <p><strong>שם מלא:</strong> {personal.fullName}</p>
        <p><strong>אימייל:</strong> {personal.email}</p>
        <p><strong>טלפון:</strong> {personal.phone}</p>
        <p><strong>כתובת:</strong> {personal.address}</p>
      </Section>

      <Section>
        <h2>ניסיון תעסוקתי</h2>
        {experiences.length === 0 && <p>לא הוזן ניסיון תעסוקתי</p>}
        {experiences.map(exp => (
          <ExperienceItem key={exp.id}>
            <p><strong>תפקיד:</strong> {exp.role}</p>
            <p><strong>מקום עבודה:</strong> {exp.company}</p>
            <p><strong>תקופה:</strong> {exp.period}</p>
            <p><strong>תיאור:</strong> {exp.description}</p>
          </ExperienceItem>
        ))}
      </Section>
    </Container>
  );
}
