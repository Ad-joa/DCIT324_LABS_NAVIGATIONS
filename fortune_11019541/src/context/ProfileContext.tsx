import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface ProfileData {
  name: string;
  indexNumber: string;
  programme: string;
  level: string;
  bio: string;
}

interface ProfileContextType {
  profile: ProfileData;
  updateProfile: (newData: Partial<ProfileData>) => void;
}

const defaultProfile: ProfileData = {
  name: 'Fortune Asare',
  indexNumber: '11019541',
  programme: 'BSc Computer Science',
  level: 'Level 300',
  bio: 'Passionate about mobile app development and navigation structures!',
};

const ProfileContext = createContext<ProfileContextType | undefined>(undefined);

export const ProfileProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [profile, setProfile] = useState<ProfileData>(defaultProfile);

  const updateProfile = (newData: Partial<ProfileData>) => {
    setProfile((prev) => ({ ...prev, ...newData }));
  };

  return (
    <ProfileContext.Provider value={{ profile, updateProfile }}>
      {children}
    </ProfileContext.Provider>
  );
};

export const useProfile = () => {
  const context = useContext(ProfileContext);
  if (!context) {
    throw new Error('useProfile must be used within a ProfileProvider');
  }
  return context;
};
