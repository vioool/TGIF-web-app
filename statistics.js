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
            },
        {
            "most_loyal_name": 0,
            "most_loyal_number": 0,
            "most_loyal_percent": 0,
            },
        {
            "least_loyal_name": 0,
            "least_loyal_number": 0,
            "least_loyal_percent": 0,
            },
        {
            "most_engaged_name": 0,
            "most_engaged_number": 0,
            "most_engaged_percent": 0,
            },
        {
            "least_engaged_name": 0,
            "least_engaged_number": 0,
            "least_engaged_percent": 0,
            }
     ]

}

sortMostLoyal()

function sortMostLoyal() {

    var tenPerc = [];

    var members = allMembers.sort(function (a, b) { //new var to work with: sort all members by using a key in a sort function within a 
        return b.votes_with_party_pct - a.votes_with_party_pct; //dig directly in your JSON data - give back what you want use in your equation
    })

    //    console.log(members)

    for (var i = 0; i < members.length; i++) {
        //        console.log(members[i])
        if (i <= (members.length * 0.1)) {
            tenPerc.push(members[i])
        } else if (members[i].votes_with_party_pct == members[i - 1].votes_with_party_pct) {
            tenPerc.push(members[i])
        } else {
            break;
        }

        var maxLoyalPerc = tenPerc[i].votes_with_party_pct //when digging into the JSON list again, make a new var to excess that
        var maxLoyalName = tenPerc[i].last_name + " " + tenPerc[i].first_name
        var maxLoyalNumb = tenPerc[i].total_votes

        stats.requests[0].most_loyal_percent = maxLoyalPerc
        stats.requests[0].most_loyal_name = maxLoyalName
        stats.requests[0].most_loyal_number = maxLoyalNumb

        console.log(stats.requests[0].most_loyal_percent)
        console.log(stats.requests[0].most_loyal_name)
        console.log(stats.requests[0].most_loyal_number)

    }
    console.log(tenPerc)

}


sortLeastLoyal()

function sortLeastLoyal() {

    var tenPerc = [];

    var members = allMembers.sort(function (a, b) { //new var to work with: sort all members by using a key in a sort function within a 
        return a.votes_with_party_pct - b.votes_with_party_pct; //dig directly in your JSON data - give back what you want use in your equation
    })

    //    console.log(members)

    for (var i = 0; i < members.length; i++) {
        //        console.log(members[i])
        if (i <= (members.length * 0.1)) {
            tenPerc.push(members[i])
        } else if (members[i].votes_with_party_pct == members[i - 1].votes_with_party_pct) {
            tenPerc.push(members[i])
        } else {
            break;
        }

        var minLoyalPerc = tenPerc[i].votes_with_party_pct //when digging into the JSON list again, make a new var to excess that
        var minLoyalName = tenPerc[i].last_name + " " + tenPerc[i].first_name
        var minLoyalNumb = tenPerc[i].total_votes

        stats.requests[0].most_loyal_percent = minLoyalPerc
        stats.requests[0].most_loyal_name = minLoyalName
        stats.requests[0].most_loyal_number = minLoyalNumb

        console.log(stats.requests[0].most_loyal_percent)
        console.log(stats.requests[0].most_loyal_name)
        console.log(stats.requests[0].most_loyal_number)

    }
    console.log(tenPerc)

}


sortMostEngaged()

function sortMostEngaged() {

    var tenPerc = [];

    var members = allMembers.sort(function (a, b) { //new var to work with: sort all members by using a key in a sort function within a 
        return b.missed_votes_pct - a.missed_votes_pct; //dig directly in your JSON data - give back what you want use in your equation
    })

    //    console.log(members)

    for (var i = 0; i < members.length; i++) {
        //        console.log(members[i])
        if (i <= (members.length * 0.1)) {
            tenPerc.push(members[i])
        } else if (members[i].missed_votes_pct == members[i - 1].missed_votes_pct) {
            tenPerc.push(members[i])
        } else {
            break;
        }

        var maxEngagePerc = tenPerc[i].missed_votes_pct
        var maxEngageName = tenPerc[i].last_name + " " + tenPerc[i].first_name
        var maxEngageNumb = tenPerc[i].missed_votes

        stats.requests[0].most_engaged_percent = maxEngagePerc
        stats.requests[0].most_engaged_name = maxEngageName
        stats.requests[0].most_engaged_number = maxEngageNumb

        console.log(stats.requests[0].most_engaged_percent)
        console.log(stats.requests[0].most_engaged_name)
        console.log(stats.requests[0].most_engaged_number)

    }
    console.log(tenPerc)

}

sortLeastEngaged()

function sortLeastEngaged() {

    var tenPerc = [];

    var members = allMembers.sort(function (a, b) { //new var to work with: sort all members by using a key in a sort function within a 
        return a.missed_votes_pct - b.missed_votes_pct; //dig directly in your JSON data - give back what you want use in your equation
    })

    //    console.log(members)

    for (var i = 0; i < members.length; i++) {
        //        console.log(members[i])
        if (i <= (members.length * 0.1)) {
            tenPerc.push(members[i])
        } else if (members[i].missed_votes_pct == members[i - 1].missed_votes_pct) {
            tenPerc.push(members[i])
        } else {
            break;
        }

        var minEngagePerc = tenPerc[i].missed_votes_pct
        var minEngageName = tenPerc[i].last_name + " " + tenPerc[i].first_name
        var minEngageNumb = tenPerc[i].total_votes

        stats.requests[0].least_engaged_percent = minEngagePerc
        stats.requests[0].least_engaged_name = minEngageName
        stats.requests[0].least_engaged_number = minEngageNumb

        console.log(stats.requests[0].least_engaged_percent)
        console.log(stats.requests[0].least_engaged_name)
        console.log(stats.requests[0].least_engaged_number)

    }
    console.log(tenPerc)

}


returnAllStats() //kan overal in het document staan. Roept de resultaten op van de gelijknamige functie hieronder

function returnAllStats() {

    var allRplc = []; //new empty array, waiting to be filled
    var allDmcr = [];
    var allIndp = [];

    var sumVotesRplc = 0; // var is now put on 0 and will be uodated with +1 after every loop
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
    stats.requests[1].votes_with_party = sumVotesDmcr / allDmcr.length + " %"
    stats.requests[2].votes_with_party = sumVotesIndp / allIndp.length + " %"
    stats.requests[3].votes_with_party = sumVotesTotal / allMembers.length + " %"

    //    console.log(stats.requests[0].votes_with_party)
    //    console.log(stats.requests[1].votes_with_party)
    //    console.log(stats.requests[2].votes_with_party)
    //    console.log(stats.requests[3].votes_with_party)

    stats.requests[0].number_of_reps = allRplc.length
    stats.requests[1].number_of_reps = allDmcr.length
    stats.requests[2].number_of_reps = allIndp.length
    stats.requests[3].number_of_reps = allIndp.length + allDmcr.length + allRplc.length

    //    console.log("Republicans have " + stats.requests[0].number_of_reps + " reps")
    //    console.log("Democrates have " + stats.requests[1].number_of_reps + " reps")
    //    console.log("Independents have " + stats.requests[2].number_of_reps + " reps")
    //    console.log("In total al the parties have " + stats.requests[3].number_of_reps + " reps")

    stats.requests[0].party = "Republicans"
    stats.requests[1].party = "Democrates"
    stats.requests[2].party = "Independents"

    //    console.log(stats.requests[0].party)
    //    console.log(stats.requests[1].party)
    //    console.log(stats.requests[2].party)

}
