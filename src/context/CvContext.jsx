import React, { createContext, useContext, useState } from "react";

const CvContext = createContext();

export function CvProvider({ children }) {
  const [cvData, setCvData] = useState({
    personal: {
      fullName: "",
      email: "",
      phone: "",
      address: ""
    },
    experiences: []
  });

  function updatePersonal(newPersonal) {
    setCvData(prev => ({
      ...prev,
      personal: { ...prev.personal, ...newPersonal }
    }));
  }

  function addExperience() {
    setCvData(prev => ({
      ...prev,
      experiences: [
        ...prev.experiences,
        { id: Date.now(), role: "", company: "", period: "", description: "" }
      ]
    }));
  }

  function updateExperience(id, newData) {
    setCvData(prev => ({
      ...prev,
      experiences: prev.experiences.map(exp =>
        exp.id === id ? { ...exp, ...newData } : exp
      )
    }));
  }

  function removeExperience(id) {
    setCvData(prev => ({
      ...prev,
      experiences: prev.experiences.filter(exp => exp.id !== id)
    }));
  }

  return (
    <CvContext.Provider
      value={{
        cvData,
        updatePersonal,
        addExperience,
        updateExperience,
        removeExperience
      }}
    >
      {children}
    </CvContext.Provider>
  );
}

export function useCvContext() {
  return useContext(CvContext);
}
