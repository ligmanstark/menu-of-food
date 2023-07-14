import axios from 'axios';
import { API_URL } from './config';

const getMealById = async (mealId) => {
	const response = await axios.get(API_URL + 'lookup.php?i' + mealId);
	return await response;
};
const getAllCategories = async () => {
	const response = await axios.get(API_URL + 'categories.php');
	return await response;
};

const getFilteredCategory = async (filter) => {
	const response = await axios.get(API_URL + 'filter.php?c' + filter);
	return await response;
};

export { getMealById, getAllCategories, getFilteredCategory };
