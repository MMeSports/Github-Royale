import axios from 'axios';
import Log from './Log';

//var id = "client id";
//var sec = "client secret";
//var params = "?client_id" + id + "&client_secret" + sec;
var params = "";

function getUserInfo(username) {
	return axios.get("https://api.github.com/users/" + username + params);
}

function getRepos(username) {
	return axios.get("https://api.github.com/users/" + username + "/repos");
}

function getTotalStars(repos) {
	return repos.data.reduce(function(prev, curr) {
		return prev + curr.stargazers_count;
	}, 0);
}

function getPlayersData(player) {
	return getRepos(player.login).
		then(getTotalStars).
		then(function(stars) {
			return {
				followers: player.followers,
				totalStars: stars
			}
		});
}

function calculateScores(players) {
	return [
		players[0].followers * 3 + players[0].totalStars,
		players[1].followers * 3 + players[1].totalStars,
	]
}

export default {
	getPlayersInfo: function(players) {
		return axios.all(players.map(function(username) {
			return getUserInfo(username)
		})).then(function(resp) {
			return resp.map(function(user) {
				return user.data;
			});
		}).catch(function(err) {
			return Log.Error(err.statusText, {
				error: err,
				players: players
			});
		});
	},
	battle: function(players) {
		var p1data = getPlayersData(players[0]);
		var p2data = getPlayersData(players[1]);
		return axios.all([p1data, p2data]).
			then(calculateScores).
			catch(function(err) {
				return Log.Error(err.statusText, {
					error: err,
					players: players
				});
			});
	}
};
