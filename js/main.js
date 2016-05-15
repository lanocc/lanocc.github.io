function askQuestions () {

/* This is all the area for asking questions */

var firstName = prompt('what is your first name?');
var lastName = prompt('what is your last name?');
var fullName = firstName + ' ' + lastName;
console.log(fullName);

var age = prompt('How old are you?');
age = parseInt(age);

if (age >=18) {
	console.log( 'User is an adult');
} else if (age>=13)  {
	console.log ( 'User is a teenager');
} else {
	console.log( 'User is a child' + 'aged' + age);
}

/* if the user's first name is 'General' and the last name is not 'Assembly' then greet the General */

if (firstName == 'General' && lastName !== 'Assembly') {
console.log(' Hail Great General ' + ' ' + lastName);
$('h2').text('Hail Great ' + firstName + ' ' + lastName + '!');
} else  {
	console.log( 'This is General Assembly');
}

var faveColour = prompt('What is your favourite colour, ' + ' ' + firstName + '?').toLowerCase();

if (faveColour ==='red' || 
	faveColour === 'blue' ||
	faveColour === 'green' ||
	faveColour === 'yellow' ) {

$('h1').css('color',faveColour);

}
}



// When the page loads
$(function() {

		$('img').on('click', askQuestions);


	// When the user clicks a heading
	$('h3').on('click', function(){


	// Hide the content after the heading 
	$(this).next().slideToggle(5000);

	});


})

