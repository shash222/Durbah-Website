function updateConstantsFile() {
    var inputs = document.getElementsByClassName("formInput");
    if (inputs.length === 0) console.log("Nothing entered");
    var updateObj = {};
    for (var i = 0; i < inputs.length; i++) {
        var input = inputs[i];
        var inputValue = input.value.trim();
        if (inputValue.length > 0) {
            if (input.name === "promoVideoUrl") {
                inputValue = getYoutubeEmbedCodeFromVideoUrl(input.value);
            }
            updateObj[input.name] = inputValue;
        }
    }
    console.log(updateObj);
    fetch("https://server.durbah.org:5000/upcomingSeminarData", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
	},
	body: JSON.stringify(updateObj) // body data type must match "Content-Type" header

    }).then((response) => {
        console.log(response);
    })
}

function getYoutubeEmbedCodeFromVideoUrl(url) {
    var splitUrl = url.split("/");
    var baseEmbedUrl = "https://www.youtube.com/embed/"
    return baseEmbedUrl + splitUrl[splitUrl.length - 1]
}
