getData()

async function getData() {

    var data =
        await fetch("https://api.propublica.org/congress/v1/113/senate/members.json", {
            method: 'GET',
            headers: new Headers({
                "X-API-Key": 'ynNlsKIHmCeXkYbQsaTMWD3sBKdGZ91Dpj0gh9Z'
            })
        })
        .then(response => response.json())
        .then(json => json)
        .catch(err => console.error(err))



    allMembers = data.results[0].members; //make new object (where multiple value is stored) you can use in your equation!

    republican = document.getElementById("inlineCheckbox1");
    republican.addEventListener("click", function () {
        filteren();
    });

    democrat = document.getElementById("inlineCheckbox2");
    democrat.addEventListener("click", function () {
        filteren();
    });

    independent = document.getElementById("inlineCheckbox3");
    independent.addEventListener("click", function () {
        filteren();
    });

    list = document.getElementById("states-selector"); //dropdown menu list
    list.addEventListener("change", function () {
        filteren();
    });

    
    var filteredArr = []; //collect all filtered value in an array
    var myVar;
        

    buildTable(allMembers)
    removeDuplicates()
    addList(filteredArr)

//    for (var i = 0; i < allMembers.length; i++) {
//        if (allMembers[i].state == "TN" && list.checked == true) {
//            filteredArray.push(allMembers[i]);
//        }
//
//
//        if (allMembers[i].party == "TH" && list.checked == true) {
//            filteredArray.push(allMembers[i]);
//        }
//
//
//        if (allMembers[i].party == "WI" && list.checked == true) {
//            filteredArray.push(allMembers[i]);
//        }
//    }

}

function myFunction() {
  myVar = setTimeout(showPage, 2000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}

function buildTable(array) {
    var tblB = document.getElementById("table"); // Create a table body 
    tblB.innerHTML = "";

    for (var i = 0; i < array.length; i++) { // Loop to create cells and rows&run through the array outside object/doc

        var tr = document.createElement('tr'); // Create the rows
        var name; // Create a new object to specify nulls in names
        if (array[i].middle_name != null) {
            name = (array[i].last_name + ', ' + array[i].middle_name + ', ' + array[i].first_name).link(array[i].url);
        } else {
            name = (array[i].last_name + ', ' + array[i].first_name).link(array[i].url);
        }
        var tdName = document.createElement('td');
        tdName.innerHTML = name;
        tr.appendChild(tdName);

        var td = document.createElement('td'); // Create the cells
        var textnodeParty = document.createTextNode(array[i].party); // Create a text knooppunt
        td.appendChild(textnodeParty); // Append/attach the text to <td>
        tr.appendChild(td); // Append/attach cells to the rows

        var td = document.createElement('td'); // Create the cells
        var textnodeState = document.createTextNode(array[i].state); // Create a text knooppunt
        td.appendChild(textnodeState); // Append/attach the text to <td>
        tr.appendChild(td); // Append/attach cells to the rows

        var td = document.createElement('td'); // Create the cells
        var textnodeSeniority = document.createTextNode(array[i].seniority);
        td.appendChild(textnodeSeniority); // Append/attach the text to <td>
        tr.appendChild(td); // Append/attach cells to the rows

        var td = document.createElement('td'); // Create the cells
        var textnodeVotes = document.createTextNode(array[i].votes_with_party_pct);
        
        td.appendChild(textnodeVotes); // Append/attach the text to <td>
        tr.appendChild(td); // Append/attach cells to the rows
        tblB.appendChild(tr);

    }

}


function filteren() { //create filter
    var filteredArray = []; //collect all filtered value in an array
    var stateSelectorValue = list.value;
    for (var i = 0; i < allMembers.length; i++) {

        if (stateSelectorValue == allMembers[i].state || stateSelectorValue == 'all') {
            if (allMembers[i].party == "R" && republican.checked == true) {
                filteredArray.push(allMembers[i]);
            }


            if (allMembers[i].party == "D" && democrat.checked == true) {
                filteredArray.push(allMembers[i]);
            }


            if (allMembers[i].party == "I" && independent.checked == true) {
                filteredArray.push(allMembers[i]);
            }

        }
    }
    buildTable(filteredArray)
}


function removeDuplicates() {
    var allStates = [];
    for (var i = 0; i < allMembers.length; i++) {

        allStates.push(allMembers[i].state)
        var unique = [...new Set(allStates)];

    }
    addList(unique.sort());
}


function addList(arr) {
    for (var i = 0; i < arr.length; i++) {
        var option = document.createElement("option"); // Create a <option> node
        option.setAttribute("value", arr[i])
        var textnode = document.createTextNode(arr[i]); // Create a text node
        option.appendChild(textnode); // Append the text to <li>
        list.appendChild(option)

    }
}
