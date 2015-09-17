$(function () {

	//Grab the template
	var templateScript = $("#address-template").html();
	console.log(templateScript);



	// Compile the template

	var compiledTemplate = Handlebars.compile(templateScript);
	console.log(compiledTemplate);



	// Define my data object

		var dataObject = {
			me: [
			{firstName : "Brian",
			 lastName : "Daves",
			 schoolName: "Prime Academy",
			 wifesName: "Christine",
			 sonsName: "Elliot"
			}]
			 
		};



	// Test expressions

		// var testExpressions = {
		// 	"description" : {
		// 		"showHtml"


		// 	}
		// }


	// Pass data to the template

	var compiledData = compiledTemplate(dataObject);



	// Add the compiled HTML to the page

	$(".placeholder").html(compiledData);




});