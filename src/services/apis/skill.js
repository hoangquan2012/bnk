import axiosInstance from "../axios";

export const getSkills = () => axiosInstance.get('company/company');
