var totalProgress = 0;

function funcProgress(pcProgress) {
    totalProgress = totalProgress + pcProgress;

    console.log(pcProgress)
    if (pcProgress === 1) {
        $(".progress-bar").css('color', 'blue')
    };
    if (pcProgress === 3) {
        $(".progress-bar").css('color', 'lightgreen')
    };
    if (pcProgress === 7) {
        $(".progress-bar").css('color', '#903')
    };
    if (totalProgress <= 25) {
        $(".progress-bar").prop("class", "progress-bar progress-bar-striped progress-bar-animated")
    } else {
        if (totalProgress <= 75) {
            $(".progress-bar").prop("class", "progress-bar bg-success progress-bar-striped progress-bar-animated")
        } else {
            $(".progress-bar").prop("class", "progress-bar bg-danger progress-bar-striped progress-bar-animated")
        }
    }
    if (totalProgress > 100) {
        totalProgress = 100;
        $("button").prop("disabled", true);
        $(".progress-bar").prop("class", "progress-bar progress-bar-striped bg-danger progress-bar-animated")
    };
    $("#my-progress-bar").width(String(totalProgress) + "%");
    $('.progress-bar').text(totalProgress + '%');
}