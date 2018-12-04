

/*
Submit form:
	-clear results section
	-use user input in URL and send to fetching function
Build Parameter object:
	make an object with wanted params to pass to fetching function
Call fetching function:
	- fetch URL with specified params(this case username)
	- handle response(check for err in response data and catch status errors)
	- change response to JSON format
	send response data to display function
call display function:
	-grab response data and append into a template literal to the results section
	-console log response data*/


function addContent(resj) {
	for(i = 0; i < resj.length; i++) {
$('.js-results').append(`<a href="${resj[i].html_url}" target="_blank">${resj[i].name}</a>`)

  }
}

function handleError(err) {
$('.js-results').append(`<p>There was a problem : ${err.message}</p>`)
}

function checkRes(res) {
if (res.ok) {
	return res.json()
}
throw new Error(response.statusText)

}

function getData(handle) {
	const param = '/repos?&type=owner'
	
	const URL = 'https://api.github.com/users/'
	
	fetch(URL + handle + param)
	.then(response => checkRes(response))
	.then(resj => addContent(resj))
	.catch(err => handleError(err))


}


function formListener() {

$('.form').submit(function(e) {
	e.preventDefault();
	$('.js-results').empty().removeClass('hidden')
	const handle = $('.js-search-field').val()
	getData(handle);
})
}

formListener()

