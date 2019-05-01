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
//.filter(Boolean) // the identity function: `item => item` would also work here :)
//.map(makeDisplayName);
console.log(allMembers)
//var text = "";
//for (i = 0; i < allMembers.length; i++) {
//    text += allMembers[i].first_name + "<br>";
//}
//
//document.getElementById("senate-data").innerHTML = JSON.stringify(text, null, 2);


buildTable()

function buildTable() {
    var table = document.createElement("Table"); // Create a table 

    var tblB = document.createElement("TBody"); // Create a table body 
    table.appendChild(tblB); // Append/attach the tablebody to the table.
    for (var i = 0; i < allMembers.length; i++) { // Loop to create cells and rows&run through the array outside object/doc
        //        if (!middle_name == null) {}

        var tr = document.createElement('tr'); // Create the rows
        var name; // Create a new object to specify nulls in names
        if (allMembers[i].middle_name != null) {
            name = allMembers[i].last_name + ', ' + allMembers[i].middle_name + ', ' + allMembers[i].first_name;
        } else {
            name = allMembers[i].last_name + ', ' + allMembers[i].first_name;
        } // create statement to avoiding nulls before!!! the creation of the textnode => see next line.
        var textnodeName = document.createTextNode(name); // Create a text node
        tr.appendChild(textnodeName); // Append/attach the text to <tr>
        tblB.appendChild(tr); // Append/attach table-row to the tablebody

        var td = document.createElement('td'); // Create the cells
        var textnodeParty = document.createTextNode(allMembers[i].party); // Create a text knooppunt
        td.appendChild(textnodeParty); // Append/attach the text to <td>
        tr.appendChild(td); // Append/attach cells to the rows

        var td = document.createElement('td'); // Create the cells
        var textnodeState = document.createTextNode(allMembers[i].state); // Create a text knooppunt
        td.appendChild(textnodeState); // Append/attach the text to <td>
        tr.appendChild(td); // Append/attach cells to the rows

        var td = document.createElement('td'); // Create the cells
        var textnodeSeniority = document.createTextNode(allMembers[i].seniority); // Create a text knooppunt
        td.appendChild(textnodeSeniority); // Append/attach the text to <td>
        tr.appendChild(td); // Append/attach cells to the rows

        var td = document.createElement('td'); // Create the cells
        var textnodeVotes = document.createTextNode(allMembers[i].votes_with_party_pct); // Create a text knooppunt
        td.appendChild(textnodeVotes); // Append/attach the text to <td>
        tr.appendChild(td); // Append/attach cells to the rows

    }

    console.log(table)
    document.getElementById("table").appendChild(table);


}
