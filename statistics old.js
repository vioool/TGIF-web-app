//getData()
//
//async function getData() {
//
//var data =  
//    await fetch("https://dog.ceo/api/breeds/image/random", {
////        method: 'GET',
////        headers: {
////            'X-API-key': '<your API key goes here>'
////        }
//    })
//        .then(response => response.json())
//        .then(json => json)
//        .catch(err => console.error(err))
//
//    createImage(data.message)
//}
//
//function createImage(picture) {
//    var container = document.getElementById("attachImage");
//    var image = document.createElement("IMG");
//    image.setAttribute('src', picture)
//    container.appendChild(image)
//}


var allMembers = data.results[0].members;


var stats = {
    "requests": [
        {
            "party": "R",
            "number_of_reps": 0,
            "votes_with_party": 0,
            },
        {
            "party": "D",
            "number_of_reps": 0,
            "votes_with_party": 0,
            },
        {
            "party": "I",
            "number_of_reps": 0,
            "votes_with_party": 0,
            },
        {
            "party": "Total",
            "number_of_reps": 0,
            "votes_with_party": 0,
            }
     ]

}




var leastLoyal = [...allMembers.sort(function (a, b) { // make a new var where to store your sorted array
    return a.votes_with_party_pct - b.votes_with_party_pct; // sort your array by using key in data- ascending or descending
})]
var mostLoyal = [...allMembers.sort(function (a, b) {
    return b.votes_with_party_pct - a.votes_with_party_pct;
})]
var leastEngaged = [...allMembers.sort(function (a, b) {
    return a.missed_votes - b.missed_votes;
})]
var mostEngaged = [...allMembers.sort(function (a, b) {
    return b.missed_votes - a.missed_votes;
})]


useOneFunction(leastLoyal, 'votes_with_party_pct') //call your function(use your var here, and here the key in your data)
useOneFunction(mostLoyal, 'votes_with_party_pct') //you can call the same function as often as you want/needed

useOneFunction(leastEngaged, 'missed_votes')
useOneFunction(mostEngaged, 'missed_votes')


function useOneFunction(members, key) { //(members, key can be enything like (x, y))
    let tenPerc = [];
    for (var i = 0; i < members.length; i++) {
        //        console.log(members[i])
        if (i <= (members.length * 0.1)) {
            tenPerc.push(members[i])
        } else if (members[i][key] == members[i - 1][key]) {
            tenPerc.push(members[i])
        } else {
            break;
        }
    }
    //    console.log(tenPerc)
}



returnAllStats() //kan overal in het document staan. Roept de resultaten op van de gelijknamige functie hieronder

function returnAllStats() {

    var allRplc = []; //new empty array, waiting to be filled
    var allDmcr = [];
    var allIndp = [];

    var sumVotesRplc = 0; // var is set on 0 = first in the array and will be updated with +1 after every loop
    var sumVotesDmcr = 0;
    var sumVotesIndp = 0;

    for (var i = 0; i < allMembers.length; i++) { //loop trough all members
        if (allMembers[i].party == 'R') { // if party of member equals R
            allRplc.push(allMembers[i]); //add this member to the array
            sumVotesRplc += (allMembers[i].votes_with_party_pct);

        } else if (allMembers[i].party == 'D') {
            allDmcr.push(allMembers[i]);
            sumVotesDmcr += (allMembers[i].votes_with_party_pct);

        } else {
            allIndp.push(allMembers[i]);
            sumVotesIndp += (allMembers[i].votes_with_party_pct);
        }

    }

    var allTotal = allRplc + allDmcr + allIndp
    var sumVotesTotal = sumVotesIndp + sumVotesDmcr + sumVotesRplc


    stats.requests[0].votes_with_party = (sumVotesRplc / allRplc.length).toFixed(2) + " %"
    stats.requests[1].votes_with_party = (sumVotesDmcr / allDmcr.length).toFixed(2) + " %"
    stats.requests[2].votes_with_party = (sumVotesIndp / allIndp.length).toFixed(2) + " %"
    stats.requests[3].votes_with_party = (sumVotesTotal / allMembers.length).toFixed(2) + " %"


    stats.requests[0].number_of_reps = allRplc.length
    stats.requests[1].number_of_reps = allDmcr.length
    stats.requests[2].number_of_reps = allIndp.length
    stats.requests[3].number_of_reps = allIndp.length + allDmcr.length + allRplc.length


    stats.requests[0].party = "Republicans"
    stats.requests[1].party = "Democrates"
    stats.requests[2].party = "Independents"

}

var VotesRplc = stats.requests[0].votes_with_party;
var VotesDecr = stats.requests[1].votes_with_party;
var VotesIndp = stats.requests[2].votes_with_party;
var VotesTotal = stats.requests[3].votes_with_party;

var NumberRplc = stats.requests[0].number_of_reps;
var NumberDecr = stats.requests[1].number_of_reps;
var NumberIndp = stats.requests[2].number_of_reps;
var NumberTotal = stats.requests[3].number_of_reps;

console.log(VotesRplc, VotesDecr, VotesIndp, VotesTotal)
console.log(NumberRplc, NumberDecr, NumberIndp, NumberTotal)


var statistics = [

    {
        "Party": "Democrats",
        "No. of Reps": NumberDecr,
        "% Voted w/ party": VotesDecr
   },

    {
        "Party": "Republicans",
        "No. of Reps": NumberRplc,
        "% Voted w/ party": VotesRplc
   }, {
        "Party": "Independents",
        "No. of Reps": NumberIndp,
        "% Voted w/ party": VotesRplc
   },

    {
        "Party": "Total",
        "No. of Reps": NumberTotal,
        "% Voted w/ party": VotesTotal
   }

 ];

console.log(statistics)


function generateTable(table, data) {

    for (let element of data) { //loop true data ()

        let row = table.insertRow();

        for (key in element) {

            let cell = row.insertCell();

            let text = document.createTextNode(element[key]);

            cell.appendChild(text);

        }

    }

}
var table = document.getElementById("table");

var data = Object.keys(statistics[0]);

generateTable(table, statistics);



////sortMostLoyal() //this function is now combined in the one above
//
//function sortMostLoyal() {
//
//    var tenPerc = [];
//
//    var members = allMembers.sort(function (a, b) { //new var to work with: sort all members by using a key in a sort function within a 
//        return b.votes_with_party_pct - a.votes_with_party_pct; //dig directly in your JSON data - give back what you want use in your equation
//    })
//
//    //    console.log(members)
//
//    for (var i = 0; i < members.length; i++) {
//        //        console.log(members[i])
//        if (i <= (members.length * 0.1)) {
//            tenPerc.push(members[i])
//        } else if (members[i].votes_with_party_pct == members[i - 1].votes_with_party_pct) {
//            tenPerc.push(members[i])
//        } else {
//            break;
//        }
//
//        var maxLoyalPerc = tenPerc[i].votes_with_party_pct //when digging into the JSON list again, make a new var to excess that
//        var maxLoyalName = tenPerc[i].last_name + " " + tenPerc[i].first_name
//        var maxLoyalNumb = tenPerc[i].total_votes
//
//        stats.requests[0].most_loyal_percent = maxLoyalPerc
//        stats.requests[0].most_loyal_name = maxLoyalName
//        stats.requests[0].most_loyal_number = maxLoyalNumb
//
//        //        console.log(stats.requests[0].most_loyal_percent)
//        //        console.log(stats.requests[0].most_loyal_name)
//        //        console.log(stats.requests[0].most_loyal_number)
//
//    }
//    //    console.log(tenPerc)
//
//}
//
//
////sortLeastLoyal() //this function is now combined in the one above
//
//function sortLeastLoyal() {
//
//    var tenPerc = [];
//
//    var members = allMembers.sort(function (a, b) { //new var to work with: sort all members by using a key in a sort function within a 
//        return a.votes_with_party_pct - b.votes_with_party_pct; //dig directly in your JSON data - give back what you want use in your equation
//    })
//
//    //    console.log(members)
//
//    for (var i = 0; i < members.length; i++) {
//        //        console.log(members[i])
//        if (i <= (members.length * 0.1)) {
//            tenPerc.push(members[i])
//        } else if (members[i].votes_with_party_pct == members[i - 1].votes_with_party_pct) {
//            tenPerc.push(members[i])
//        } else {
//            break;
//        }
//
//        var minLoyalPerc = tenPerc[i].votes_with_party_pct //when digging into the JSON list again, make a new var to excess that
//        var minLoyalName = tenPerc[i].last_name + " " + tenPerc[i].first_name
//        var minLoyalNumb = tenPerc[i].total_votes
//
//        stats.requests[0].most_loyal_percent = minLoyalPerc
//        stats.requests[0].most_loyal_name = minLoyalName
//        stats.requests[0].most_loyal_number = minLoyalNumb
//
//        //        console.log(stats.requests[0].most_loyal_percent)
//        //        console.log(stats.requests[0].most_loyal_name)
//        //        console.log(stats.requests[0].most_loyal_number)
//
//    }
//    //    console.log(tenPerc)
//
//}
//
//
////sortMostEngaged() //this function is now combined in the one above
//
//function sortMostEngaged() {
//
//    var tenPerc = [];
//
//    var members = allMembers.sort(function (a, b) { //new var to work with: sort all members by using a key in a sort function within a 
//        return b.missed_votes_pct - a.missed_votes_pct; //dig directly in your JSON data - give back what you want use in your equation
//    })
//
//    //    console.log(members)
//
//    for (var i = 0; i < members.length; i++) {
//        //        console.log(members[i])
//        if (i <= (members.length * 0.1)) {
//            tenPerc.push(members[i])
//        } else if (members[i].missed_votes_pct == members[i - 1].missed_votes_pct) {
//            tenPerc.push(members[i])
//        } else {
//            break;
//        }
//
//        var maxEngagePerc = tenPerc[i].missed_votes_pct
//        var maxEngageName = tenPerc[i].last_name + " " + tenPerc[i].first_name
//        var maxEngageNumb = tenPerc[i].missed_votes
//
//        stats.requests[0].most_engaged_percent = maxEngagePerc
//        stats.requests[0].most_engaged_name = maxEngageName
//        stats.requests[0].most_engaged_number = maxEngageNumb
//        //
//        //        console.log(stats.requests[0].most_engaged_percent)
//        //        console.log(stats.requests[0].most_engaged_name)
//        //        console.log(stats.requests[0].most_engaged_number)
//
//    }
//    //    console.log(tenPerc)
//
//}
//
////sortLeastEngaged() //this function is now combined in the one above
//
//function sortLeastEngaged() {
//
//    var tenPerc = [];
//
//    var members = allMembers.sort(function (a, b) { //new var to work with: sort all members by using a key in a sort function within a 
//        return a.missed_votes_pct - b.missed_votes_pct; //dig directly in your JSON data - give back what you want use in your equation
//    })
//
//    //    console.log(members)
//
//    for (var i = 0; i < members.length; i++) {
//        //        console.log(members[i])
//        if (i <= (members.length * 0.1)) {
//            tenPerc.push(members[i])
//        } else if (members[i].missed_votes_pct == members[i - 1].missed_votes_pct) {
//            tenPerc.push(members[i])
//        } else {
//            break;
//        }
//
//        var minEngagePerc = tenPerc[i].missed_votes_pct
//        var minEngageName = tenPerc[i].last_name + " " + tenPerc[i].first_name
//        var minEngageNumb = tenPerc[i].total_votes
//
//        stats.requests[0].least_engaged_percent = minEngagePerc
//        stats.requests[0].least_engaged_name = minEngageName
//        stats.requests[0].least_engaged_number = minEngageNumb
//
//        //        console.log(stats.requests[0].least_engaged_percent)
//        //        console.log(stats.requests[0].least_engaged_name)
//        //        console.log(stats.requests[0].least_engaged_number)
//
//    }
//    //    console.log(tenPerc)
//
//}
//}
