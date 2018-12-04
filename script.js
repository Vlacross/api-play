

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




function handleResponse(res) {
	console.log(res.content)
	if (!res.ok) {
		if (
			res.headers.has("content-type") &&
			res.headers.get("content-type").startsWith("application/json")
		) {
			return res.json().then(err => Promise.reject(err))
		}
		return Promise.reject({
			code: res.status,
			message: res.statutText
		});
	}
	console.log(res.json());
	// if (res.ok) {
	// return res.json()}
	// throw new error(response.statusText);
}

function pend(resj) {
	for(i = 0; i < resj.length; i++) {
$('.js-results').append(`<a href="${resj[i].html_url}" target="_blank">${resj[i].name}</a>`)
	

	}
}

function getData(handle) {
	const par = '/repos?&type=owner'
	
	const params = {
			"type": 'owner',
				}

	const URL = 'https://api.github.com/users/'
	const paramKey = Object.keys(params)
	fetch(URL + handle + par)
	.then(response => response.json())
	.then(resj => pend(resj))


}



$('.form').submit(function(e) {
	e.preventDefault();
	$('.js-results').empty().removeClass('hidden')
	const handle = $('.js-search-field').val()
	getData(handle);
	console.log()
})



/*
fetch(URL + handle + '/repos?&' + paramKey + `=` + params.type)


*/