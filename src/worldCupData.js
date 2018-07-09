

/**
 * Should fetch the entire world cup json file and return 
 * a promise that can be resolved containing the json data
 */


/*
  Store the entire json as an object that can be exported.

  Then have a function on the App component that will loop through the 
  json data and grab all of the matches for each individual round and then each
  final and store them as objects within arrays with names matching their stage in the tournament.
*/

let data;

getWorldCupData = (data) =>
{
  fetch("https://raw.githubusercontent.com/openfootball/world-cup.json/master/2018/worldcup.json")
    .then((response) =>
    {
      return response.body.json();
    })
}

getWorldCupData();

