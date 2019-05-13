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


var table = document.getElementById("table1");
var tableEngagedMost = document.getElementById("table2");
var tableEngagedLess = document.getElementById("table3");

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


var LeastEng = useOneFunction(leastEngaged, 'missed_votes');
var MostEng = useOneFunction(mostEngaged, 'missed_votes');


//console.log(statistics)
useOneFunction(leastLoyal, 'votes_with_party_pct') //call your function(use your var here, 'and here the key in your data')
useOneFunction(mostLoyal, 'votes_with_party_pct') //you can call the same function as often as you want/needed

useOneFunction(leastEngaged, 'missed_votes')
useOneFunction(mostEngaged, 'missed_votes')

 //kan overal in het document staan. Roept de resultaten op van de gelijknamige functie hieronder


var dataFromList = returnAllStats(stats, allMembers).requests




generateTable(table, dataFromList);
createTable(tableEngagedMost, LeastEng)
createTable(tableEngagedLess, MostEng)








function useOneFunction(members, key) { //(members, key can be enything like (x, y))
    var tenPerc = [];
    for (var i = 0; i < members.length; i++) {
//                console.log(members[i])
        if (i <= (members.length * 0.1)) {
            tenPerc.push(members[i])
        } else if (members[i][key] == members[i - 1][key]) {
            tenPerc.push(members[i])
        } else {
            break;
        }
    }
        return tenPerc;

}

function returnAllStats(stats, allMembers) {

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
    
    return stats;

}

function generateTable(table, dataFromList) { //(table, data can be enything like (x, y))

    for (var element of dataFromList) { //loop through data and make a new element with a var
        var row = table.insertRow(); //make new rows and insert it to the table

        for (key in element) { 
            var cell = row.insertCell(); //make the cells
            var text = document.createTextNode(element[key]); // make new textnode
            cell.appendChild(text); //append cells to the textnode

        }

    }

}

function createTable (table, array){
    
    for(var i = 0; i <array.length; i++){
        var row = document.createElement("tr")
        var nameCel = document.createElement("td");
        nameCel.innerHTML = array[i].first_name + " " + array[i].last_name;
        
        var votesCel = document.createElement("td");
        votesCel.innerHTML = array[i].missed_votes;
        
        var pctCel = document.createElement("td");
        pctCel.innerHTML = array[i].missed_votes_pct.toFixed(2) + " %";
        
        
        row.appendChild(nameCel);
        row.appendChild(votesCel);
        row.appendChild(pctCel);
        table.appendChild(row);
    }
    
}

