function getData() {
    var filter = new Array(),
        resultsCust = new Array(),
        resultsNoCust = new Array(),
        results,
        srCust,
        srNoCust;

    //Santa clara search -> with customers only
    filter[0] = new nlobjSearchFilter("name", null, "startswith", "NJ02");
    filter[1] = new nlobjSearchFilter("custrecord_customer", null, "noneof", "@NONE@");
    filter[2] = new nlobjSearchFilter("custrecord_customer", null, "anyof", "@NONE@");
    
    srCust = nlapiSearchRecord(null, "customsearch543", [filter[0], filter[1]], null);
    srNoCust = nlapiSearchRecord(null, "customsearch543", [filter[0], filter[2]], null);

   
    for (var i = 0; i < srCust.length; i++) {
        var cols = srCust[i].getAllColumns();
        resultsCust[i] = {
            "site" : srCust[i].getText(cols[0]) ,
            "name" : srCust[i].getValue(cols[4]),
            "customer" : srCust[i].getText(cols[5]),
            "status" : srCust[i].getText(cols[6]),
            "xAxis" : srCust[i].getText(cols[11]),
            "yAxis" : srCust[i].getText(cols[12]),
            "pod" : srCust[i].getText(cols[13]),
            "row" : srCust[i].getText(cols[14]),
            "cab" : srCust[i].getText(cols[15])
        };
       
    }
    
    
    
    for (var i = 0; i < srNoCust.length; i++) {
        var cols = srNoCust[i].getAllColumns();
        resultsNoCust[i] = {
            "site" : srNoCust[i].getText(cols[0]) ,
            "name" : srNoCust[i].getValue(cols[4]),
            "customer" : srNoCust[i].getText(cols[5]),
            "status" : srNoCust[i].getText(cols[6]),
            "xAxis" : srNoCust[i].getText(cols[11]),
            "yAxis" : srNoCust[i].getText(cols[12]),
            "pod" : srNoCust[i].getText(cols[13]),
            "row" : srNoCust[i].getText(cols[14]),
"cab" : srNoCust[i].getText(cols[15])
        };
       
    }
    
    results = {
            "cust" : resultsCust,
            "noCust" : resultsNoCust
    };

    results = JSON.stringify(results);
    
    return results;
}
