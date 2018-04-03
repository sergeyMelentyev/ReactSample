import axios from "axios";

function getProfile(userName) {
	var encodedURI = window.encodeURI(`https://api.github.com/users/${userName}`);
	return axios.get(encodedURI).then(response => response.data);
}
function getRepos(userName) {
	var encodedURI = window.encodeURI(`https://api.github.com/users/${userName}/repos?per_page=100`);
	return axios.get(encodedURI);
}
function getStarCount(repos) {
	return repos.data.reduce((count, repo) => count + repo.stargazers_count, 0);
}
function calculateScore(profile, repos) {
	return profile.followers + getStarCount(repos);
}
function handleError(error) {
	console.warn(error);
	return null;
}
function getUserData(user) {
	return axios.all([
		getProfile(user),
		getRepos(user)
	]).then(response => {
		var profile = response[0];
		var repos = response[1];
		return {
			profile: profile,
			score: calculateScore(profile, repos)
		};
	});
}

export default {
	fetchCompareUsers: function(users) {
		return axios.all(users.map(getUserData)).catch(handleError);
	},
	fetchPopularRepos: function(language) {
		var encodedURI = window.encodeURI(`https://api.github.com/search/repositories?q=stars:>1+language:${language}&sort=stars&order=desc&type=Repositories`);
		return axios.get(encodedURI).then(response => response.data.items);
	}
};