//var test = 12;
//
//document.getElementById("senate-data").innerHTML = JSON.stringify(test, null, 2);
//
//var sayHello = "hello";
//
//document.getElementById("senate-data").innerHTML = JSON.stringify(sayHello, null, 2);
//
//document.getElementById("senate-data").innerHTML = JSON.stringify(data.results[0].members[1].last_name, null, 2); //gives back the last name of the second member of the results of the data object of the document and append to the HTMLdoc

var allMembers = data.results[0].members; //make new object (where multiple value is stored) you can use in your equation!

var republican = document.getElementById("inlineCheckbox1");
republican.addEventListener("click", function () {
    filterParty();
});

var democrat = document.getElementById("inlineCheckbox2");
democrat.addEventListener("click", function () {
    filterParty();
});

var independent = document.getElementById("inlineCheckbox3");
independent.addEventListener("click", function () {
    filterParty();
});

//console.log(filteredArray)


//filterParty()

buildTable(allMembers)

function filterParty() { //create filter
    var filteredArray = []; //?????????????

    for (var i = 0; i < allMembers.length; i++) {
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
       buildTable(filteredArray)
}



//    document.getElementById("senate-data").innerHTML = (filteredArray);



//buildTable(allMembers)

function buildTable(array) {
    var table = document.getElementById("table"); //Get Table Node from HTML 
    //    var table = document.createElement("Table"); // Create a table 
    table.innerHTML = "";

    var tblB = document.createElement("TBody");

    // Create a table body 
    // Append/attach the tablebody to the table.
    for (var i = 0; i < array.length; i++) { // Loop to create cells and rows&run through the array outside object/doc

        var tr = document.createElement('tr'); // Create the rows
        var name; // Create a new object to specify nulls in names
        if (array[i].middle_name != null) {
            name = (array[i].last_name + ', ' + array[i].middle_name + ', ' + array[i].first_name).link(array[i].url);
        } else {
            name = (array[i].last_name + ', ' + array[i].first_name).link(array[i].url);
        } // create statement to avoiding nulls before!!! the creation of the textnode => see next line.
        var tdName = document.createElement('td');
        tdName.innerHTML = name;

        //        var textnodeName = document.createTextNode(name); // Create a text node
        //        tdName.appendChild(textnodeName);
        tr.appendChild(tdName);
        // Append/attach the text to <tr>
        // Append/attach table-row to the tablebody

        var td = document.createElement('td'); // Create the cells
        var textnodeParty = document.createTextNode(array[i].party); // Create a text knooppunt
        td.appendChild(textnodeParty); // Append/attach the text to <td>
        tr.appendChild(td); // Append/attach cells to the rows

        var td = document.createElement('td'); // Create the cells
        var textnodeState = document.createTextNode(array[i].state); // Create a text knooppunt
        td.appendChild(textnodeState); // Append/attach the text to <td>
        tr.appendChild(td); // Append/attach cells to the rows

        var td = document.createElement('td'); // Create the cells
        var textnodeSeniority = document.createTextNode(array[i].seniority); // Create a text knooppunt
        td.appendChild(textnodeSeniority); // Append/attach the text to <td>
        tr.appendChild(td); // Append/attach cells to the rows

        var td = document.createElement('td'); // Create the cells
        var textnodeVotes = document.createTextNode(array[i].votes_with_party_pct); // Create a text knooppunt
        td.appendChild(textnodeVotes); // Append/attach the text to <td>
        tr.appendChild(td); // Append/attach cells to the rows
        tblB.appendChild(tr);

    }

//    console.log(table)
    table.appendChild(tblB);


}

//addLink();
