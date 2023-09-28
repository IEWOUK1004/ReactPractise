"use client"
import React, { createContext, useContext, useState, ReactNode, Dispatch, SetStateAction } from 'react';

interface DigimonData {
  [key: string]: {
    image: string;
    introduce: string;
  };
}

interface DigimonContextType {
  digimonData: DigimonData;
  image: string;
  setImage: Dispatch<SetStateAction<string>>;
  introduce: string;
  setIntroduce: Dispatch<SetStateAction<string>>;
}

const DigimonContext = createContext<DigimonContextType | undefined>(undefined);

export function DigimonProvider({ children, data }: { children: ReactNode; data: DigimonData }) {
  const [image, setImage] = useState('');
  const [introduce, setIntroduce] = useState('');

  return (
    <DigimonContext.Provider value={{ digimonData: data, image, setImage, introduce, setIntroduce }}>
      {children}
    </DigimonContext.Provider>
  );
}

export function useDigimonContext() {
  const context = useContext(DigimonContext);
  if (context === undefined) {
    throw new Error('useDigimonContext must be used within a DigimonProvider');
  }
  return context;
}