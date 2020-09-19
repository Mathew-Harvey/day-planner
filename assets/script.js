$(document).ready(function () {
    // var time = (moment().format("H"))
    //---------------------------------------------------------------------------------------
    // Use this to dummy test the time code
    //---------------------------------------------------------------------------------------
    var time = "13"     
    console.log(time)
    //---------------------------------------------------------------------------------------
    // 9am
    //---------------------------------------------------------------------------------------
    function colourRow9() {
        if (time == "9") {
            $("#nineAmRow").addClass("present")
        }
        else if (time !== "9") {
            $("#nineAmRow").addClass("past")
        }
    }
    colourRow9()
    //---------------------------------------------------------------------------------------
    // 9am Save text field
    //---------------------------------------------------------------------------------------
    var saveTextContent9 = document.querySelector("#textContent9")
    var saved9 = localStorage.getItem("text9")
    $(".saveBtn").on("click", function () {
        localStorage.setItem("text9", saveTextContent9.innerHTML)
    })
    document.querySelector("#textContent9").innerHTML = saved9
    //---------------------------------------------------------------------------------------
    // 10am
    //---------------------------------------------------------------------------------------
    function colourRow10() {
        if (time == "10") {
            $("#tenAmRow").addClass("present")
        }
        else if (time == "9") {
            $("#tenAmRow").addClass("future")
        }
        else if (time !== "9" || time != "9") {
            $("#tenAmRow").addClass("past")
        }
    }
    colourRow10()
    //---------------------------------------------------------------------------------------
    // 10am Save text field
    //---------------------------------------------------------------------------------------
    var saveTextContent10 = document.querySelector("#textContent10")
    var saved10 = localStorage.getItem("text10")
    $(".saveBtn").on("click", function () {
        localStorage.setItem("text10", saveTextContent10.innerHTML)
    })
    document.querySelector("#textContent10").innerHTML = saved10
    //---------------------------------------------------------------------------------------
    // 11am
    //---------------------------------------------------------------------------------------
    function colourRow11() {
        if (time == "11") {
            $("#elevenAmRow").addClass("present")
        }
        else if (time == "9" || time == "10") {
            console.log(time)
            $("#elevenAmRow").addClass("future")
        }
        else if (time != "9" || time !== "10" || time !== "11") {
            $("#elevenAmRow").addClass("past")
        }
    }
    colourRow11()
    //---------------------------------------------------------------------------------------
    // 11am Save text field
    //---------------------------------------------------------------------------------------
    var saveTextContent11 = document.querySelector("#textContent11")
    var saved11 = localStorage.getItem("text11")
    $(".saveBtn").on("click", function () {
        localStorage.setItem("text11", saveTextContent11.innerHTML)
    })
    document.querySelector("#textContent11").innerHTML = saved11
    //---------------------------------------------------------------------------------------
    // 12pm
    //---------------------------------------------------------------------------------------
    function colourRow12() {
        if (time == "12") {
            $("#twelvePmRow").addClass("present")
        }
        else if (time == "9" || time == "10" || time == "11") {
            $("#twelvePmRow").addClass("future")
        }
        else if (time !== "9" || time !== "10" || time !== "11" || time !== "12") {
            $("#twelvePmRow").addClass("past")
        }
    }
    colourRow12()
    //---------------------------------------------------------------------------------------
    // 12pm Save text field
    //---------------------------------------------------------------------------------------
    var saveTextContent12 = document.querySelector("#textContent12")
    var saved12 = localStorage.getItem("text12")
    $(".saveBtn").on("click", function () {
        localStorage.setItem("text12", saveTextContent12.innerHTML)
    })
    document.querySelector("#textContent12").innerHTML = saved12
    //---------------------------------------------------------------------------------------
    // 1pm
    //---------------------------------------------------------------------------------------
    function colourRow1() {
        if (time == "13") {
            $("#onePmRow").addClass("present")
        }
        else if (time == "9" || time == "10" || time == "11" || time == "12") {
            $("#onePmRow").addClass("future")
        }
        else if (time !== "9" || time !== "10" || time !== "11" || time !== "12" || time !== "13") {
            $("#onePmRow").addClass("past")
        }
    }
    colourRow1()
    //---------------------------------------------------------------------------------------
    // 1pm Save text field
    //---------------------------------------------------------------------------------------
    var saveTextContent1 = document.querySelector("#textContent1")
    var saved1 = localStorage.getItem("text1")
    $(".saveBtn").on("click", function () {
        localStorage.setItem("text1", saveTextContent1.innerHTML)
    })
    document.querySelector("#textContent1").innerHTML = saved1
    //---------------------------------------------------------------------------------------
    // 2pm
    //---------------------------------------------------------------------------------------
    function colourRow2() {
        if (time == "14") {
            $("#twoPmRow").addClass("present")
        }
        else if (time == "9" || time == "10" || time == "11" || time == "12" || time == "13") {
            $("#twoPmRow").addClass("future")
        }
        else if (time !== "9" || time !== "10" || time !== "11" || time !== "12" || time !== "13") {
            $("#twoPmRow").addClass("past")
        }
    }
    colourRow2()
    //---------------------------------------------------------------------------------------
    // 2pm Save text field
    //---------------------------------------------------------------------------------------
    var saveTextContent2 = document.querySelector("#textContent2")
    var saved2 = localStorage.getItem("text2")
    $(".saveBtn").on("click", function () {
        localStorage.setItem("text2", saveTextContent2.innerHTML)
    })
    document.querySelector("#textContent2").innerHTML = saved2
    //---------------------------------------------------------------------------------------
    // 3pm
    //---------------------------------------------------------------------------------------
    function colourRow3() {
        if (time == "15") {
            $("#threePmRow").addClass("present")
        }
        else if (time == "9" || time == "10" || time == "11" || time == "12" || time == "13" || time == "14") {
            $("#threePmRow").addClass("future")
        }
        else if (time !== "9" || time !== "10" || time !== "11" || time !== "12" || time !== "13" || time !== "14") {
            $("#threePmRow").addClass("past")
        }
    }
    colourRow3()
    //---------------------------------------------------------------------------------------
    // 3pm Save text field
    //---------------------------------------------------------------------------------------
    var saveTextContent3 = document.querySelector("#textContent3")
    var saved3 = localStorage.getItem("text3")
    $(".saveBtn").on("click", function () {
        localStorage.setItem("text3", saveTextContent3.innerHTML)
    })
    document.querySelector("#textContent3").innerHTML = saved3
    //---------------------------------------------------------------------------------------
    // 4pm
    //---------------------------------------------------------------------------------------
    function colourRow4() {
        if (time == "16") {
            $("#fourPmRow").addClass("present")
        }
        else if (time == "9" || time == "10" || time == "11" || time == "12" || time == "13" || time == "14"|| time == "15") {
            $("#fourPmRow").addClass("future")
        }
        else if (time !== "9" || time !== "10" || time !== "11" || time !== "12" || time !== "13" || time !== "14"|| time !== "15") {
            $("#fourPmRow").addClass("past")
        }
    }
    colourRow4()
    //---------------------------------------------------------------------------------------
    // 4pm Save text field
    //---------------------------------------------------------------------------------------
    var saveTextContent4 = document.querySelector("#textContent4")
    var saved4 = localStorage.getItem("text4")
    $(".saveBtn").on("click", function () {
        localStorage.setItem("text4", saveTextContent4.innerHTML)
    })
    document.querySelector("#textContent4").innerHTML = saved4
    //---------------------------------------------------------------------------------------
    // 5pm
    //---------------------------------------------------------------------------------------
    function colourRow5() {
        if (time == "17") {
            $("#fivePmRow").addClass("present")
        }
        else if (time == "9" || time == "10" || time == "11" || time == "12" || time == "13" || time == "14"|| time == "15"|| time == "14") {
            $("#fivePmRow").addClass("future")
        }
        else if (time !== "9" || time !== "10" || time !== "11" || time !== "12" || time !== "13" || time !== "14"|| time !== "15"||time !== "14") {
            $("#fivePmRow").addClass("past")
        }
    }
    colourRow5()
    //---------------------------------------------------------------------------------------
    // 5pm Save text field
    //---------------------------------------------------------------------------------------
    var saveTextContent5 = document.querySelector("#textContent5")
    var saved5 = localStorage.getItem("text5")
    $(".saveBtn").on("click", function () {
        localStorage.setItem("text5", saveTextContent5.innerHTML)
    })
    document.querySelector("#textContent5").innerHTML = saved5
})


