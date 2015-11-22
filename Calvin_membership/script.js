$(document).ready(function() {

	var jsonData = [
		{
			"MemberID" 	: 1,
			"Email"		: "asdf1@asdf.com",
			"FirstName"	: "first1",
			"LastName" 	: "last1",
			"JoinDate"	: "2015-01-05",
			"SumCheckIn": "19"
		},
		{
			"MemberID" 	: 2,
			"Email"		: "asdf2@asdf.com",
			"FirstName"	: "first2",
			"LastName" 	: "last2",
			"JoinDate"	: "2015-01-03",
			"SumCheckIn": "18"
		},
		{
			"MemberID" 	: 3,
			"Email"		: "asdf3@asdf.com",
			"FirstName"	: "first3",
			"LastName" 	: "last3",
			"JoinDate"	: "2015-01-01",
			"SumCheckIn": "17"
		},
		{
			"MemberID" 	: 4,
			"Email"		: "asdf4@asdf.com",
			"FirstName"	: "first4",
			"LastName" 	: "last4",
			"JoinDate"	: "2015-01-02",
			"SumCheckIn": "16"
		},
		{
			"MemberID" 	: 5,
			"Email"		: "asdf5@asdf.com",
			"FirstName"	: "first5",
			"LastName" 	: "last5",
			"JoinDate"	: "2015-01-04",
			"SumCheckIn": "15"
		},
		{
			"MemberID" 	: 11,
			"Email"		: "asdf1@asdf.com",
			"FirstName"	: "first1",
			"LastName" 	: "last1",
			"JoinDate"	: "2015-01-05",
			"SumCheckIn": "19"
		},
		{
			"MemberID" 	: 12,
			"Email"		: "asdf2@asdf.com",
			"FirstName"	: "first2",
			"LastName" 	: "last2",
			"JoinDate"	: "2015-01-03",
			"SumCheckIn": "18"
		},
		{
			"MemberID" 	: 13,
			"Email"		: "asdf3@asdf.com",
			"FirstName"	: "first3",
			"LastName" 	: "last3",
			"JoinDate"	: "2015-01-01",
			"SumCheckIn": "17"
		},
		{
			"MemberID" 	: 14,
			"Email"		: "asdf4@asdf.com",
			"FirstName"	: "first4",
			"LastName" 	: "last4",
			"JoinDate"	: "2015-01-02",
			"SumCheckIn": "16"
		},
		{
			"MemberID" 	: 15,
			"Email"		: "asdf5@asdf.com",
			"FirstName"	: "first5",
			"LastName" 	: "last5",
			"JoinDate"	: "2015-01-04",
			"SumCheckIn": "15"
		},
		{
			"MemberID" 	: 21,
			"Email"		: "asdf1@asdf.com",
			"FirstName"	: "first1",
			"LastName" 	: "last1",
			"JoinDate"	: "2015-01-05",
			"SumCheckIn": "19"
		},
		{
			"MemberID" 	: 22,
			"Email"		: "asdf2@asdf.com",
			"FirstName"	: "first2",
			"LastName" 	: "last2",
			"JoinDate"	: "2015-01-03",
			"SumCheckIn": "18"
		},
		{
			"MemberID" 	: 23,
			"Email"		: "asdf3@asdf.com",
			"FirstName"	: "first3",
			"LastName" 	: "last3",
			"JoinDate"	: "2015-01-01",
			"SumCheckIn": "17"
		},
		{
			"MemberID" 	: 24,
			"Email"		: "asdf4@asdf.com",
			"FirstName"	: "first4",
			"LastName" 	: "last4",
			"JoinDate"	: "2015-01-02",
			"SumCheckIn": "16"
		},
		{
			"MemberID" 	: 25,
			"Email"		: "asdf5@asdf.com",
			"FirstName"	: "first5",
			"LastName" 	: "last5",
			"JoinDate"	: "2015-01-04",
			"SumCheckIn": "15"
		},
		{
			"MemberID" 	: 31,
			"Email"		: "asdf1@asdf.com",
			"FirstName"	: "first1",
			"LastName" 	: "last1",
			"JoinDate"	: "2015-01-05",
			"SumCheckIn": "19"
		},
		{
			"MemberID" 	: 32,
			"Email"		: "asdf2@asdf.com",
			"FirstName"	: "first2",
			"LastName" 	: "last2",
			"JoinDate"	: "2015-01-03",
			"SumCheckIn": "18"
		},
		{
			"MemberID" 	: 33,
			"Email"		: "asdf3@asdf.com",
			"FirstName"	: "first3",
			"LastName" 	: "last3",
			"JoinDate"	: "2015-01-01",
			"SumCheckIn": "17"
		},
		{
			"MemberID" 	: 34,
			"Email"		: "asdf4@asdf.com",
			"FirstName"	: "first4",
			"LastName" 	: "last4",
			"JoinDate"	: "2015-01-02",
			"SumCheckIn": "16"
		},
		{
			"MemberID" 	: 35,
			"Email"		: "asdf5@asdf.com",
			"FirstName"	: "first5",
			"LastName" 	: "last5",
			"JoinDate"	: "2015-01-04",
			"SumCheckIn": "15"
		},
		{
			"MemberID" 	: 41,
			"Email"		: "asdf1@asdf.com",
			"FirstName"	: "first1",
			"LastName" 	: "last1",
			"JoinDate"	: "2015-01-05",
			"SumCheckIn": "19"
		},
		{
			"MemberID" 	: 42,
			"Email"		: "asdf2@asdf.com",
			"FirstName"	: "first2",
			"LastName" 	: "last2",
			"JoinDate"	: "2015-01-03",
			"SumCheckIn": "18"
		},
		{
			"MemberID" 	: 43,
			"Email"		: "asdf3@asdf.com",
			"FirstName"	: "first3",
			"LastName" 	: "last3",
			"JoinDate"	: "2015-01-01",
			"SumCheckIn": "17"
		},
		{
			"MemberID" 	: 44,
			"Email"		: "asdf4@asdf.com",
			"FirstName"	: "first4",
			"LastName" 	: "last4",
			"JoinDate"	: "2015-01-02",
			"SumCheckIn": "16"
		},
		{
			"MemberID" 	: 45,
			"Email"		: "asdf5@asdf.com",
			"FirstName"	: "first5",
			"LastName" 	: "last5",
			"JoinDate"	: "2015-01-04",
			"SumCheckIn": "15"
		}
	];

	function init() {
		//indication for header sorting
		$('#memberTable thead th').attr('title', 'click to sort');

		//jQuery date UI
		$(".date").datepicker({
            changeMonth: true,
            changeYear: true,
            dateFormat: "yy-mm-dd"
        });

        refreshTable();
	}


	function checkFilter(d) {
		if($('#searchFilter').val() != '') {
			var searchFilter = $('#searchFilter').val();
			var checkString = d.MemberID + ' ' + d.FirstName + ' ' + d.LastName + ' ' + d.JoinDate + ' ' + d.SumCheckIn;
			if(checkString.indexOf(searchFilter) >= 0)
				return true;
			else
				return false;
		}

		if($('#startDate').val() != null) {
			if(d.JoinDate >= $('#startDate').val())
				return true;
			else
				return false;
		}
		if($('#endDate').val() != '') {
			if(d.JoinDate <= $('#endDate').val())
				return true;
			else
				return false;
		}

		
		return true;
	}

	$(document).on('input', '#searchFilter', function() {
		refreshTable();
	});

	$(document).on('change', '.date', function() {
		refreshTable();
	});

	function refreshTable() {
		var tableArray = '';

		for(var i in jsonData) {
    		var d = jsonData[i];

    		if(checkFilter(d)) {
    			tableArray += '<tr>';
        		tableArray += '<td class="C1">' + d.MemberID + '</td>';
        		tableArray += '<td class="C2">' + d.Email + '</td>';
        		tableArray += '<td class="C3">' + d.FirstName + '</td>';
        		tableArray += '<td class="C4">' + d.LastName + '</td>';
        		tableArray += '<td class="C5">' + d.JoinDate + '</td>';
        		tableArray += '<td class="C6">' + d.SumCheckIn + '</td>';
        		tableArray += '</tr>';
    		}        	
    	}

    	$('#memberTable tbody').html(tableArray);
	}

	
	
	function OrderBy(a,b,n) {
	    if (n) return a-b;
	    if (a < b) return -1;
	    if (a > b) return 1;
	    return 0;
	}
    $(document).on('click', '#memberTable thead th', function(e){
	    var $th = $(this).closest('th');
    	$th.toggleClass('selected');
    	var isSelected = $th.hasClass('selected');
    	var isInput= $th.hasClass('input');
    	var column = $th.index();
    	var $table = $th.closest('table');
    	var isNum= $table.find('tbody > tr').children('td').eq(column).hasClass('num');
    	var rows = $table.find('tbody > tr').get();
    	rows.sort(function(rowA,rowB) {
    	    if (isInput) {
    	        var keyA = $(rowA).children('td').eq(column).children('input').val().toUpperCase();
    	        var keyB = $(rowB).children('td').eq(column).children('input').val().toUpperCase();
    	    } else {
    	        var keyA = $(rowA).children('td').eq(column).text().toUpperCase();
    	        var keyB = $(rowB).children('td').eq(column).text().toUpperCase();
    	    }
    	    if (isSelected) return OrderBy(keyA,keyB,isNum);
    	    return OrderBy(keyB,keyA,isNum);
    	});
    	$.each(rows, function(index,row) {
    	    $table.children('tbody').append(row);
    	});
    	return false;
	});

	init();


});






