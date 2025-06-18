import axios from "axios";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const isAuthenticated = (): boolean => {
  return getItem("userEmail");
};

export function setItem(key: string, value: string) {
  try {
    localStorage.setItem(key, value);
  } catch (error) {
    console.error("Error saving to localStorage", error);
  }
}

export function getItem(key: string) {
  try {
    const item = localStorage.getItem(key);
    return item;
  } catch (error) {
    console.error("Error reading from localStorage", error);
  }
}

export const uploadToS3 = async (presignedUrl: string, file: File) => {
  console.log(presignedUrl);
  const mimetype = file.type;
  console.log(mimetype);
  try {
    const response = await axios.put(presignedUrl, file, {
      headers: {
        "Content-Type": mimetype,
      },
    });
    console.log(response);
    
    return response.data;
  } catch (e: any) {
    console.log(e);
  }
};
