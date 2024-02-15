// Hamburger menu to X

let navToggle = document.querySelector('.nav-toggle')
let bars = document.querySelectorAll('.bar')

function toggleHamburger(e) {
bars.forEach(bar => bar.classList.toggle('x'))
}

navToggle.addEventListener('click', toggleHamburger)

// Menu open 

const openNav = $(".collapse");

        $(".navbar-toggler").click(function()
        {
            $(openNav).toggleClass("navbar-open");

            if($(openNav).hasClass('navbar-open')) {
                $("body").css("overflow", "hidden");
                $(".navbar").addClass("navbar-bg");
                $(".navbar-brand").css("display", "none");
                $(".bar").css("background-color", "white");
            } else {
                $("body").css("overflow-y", "scroll");
                $(".navbar").removeClass("navbar-bg");
                $(".navbar-brand").css("display", "block");
                $(".bar").css("background-color", "black");
            }
        });

        // Form using jQuery

   // Document is ready
$(document).ready(function () {
 
    // Validate Username
    $("#usercheck").hide();
    let usernameError = true;
    $("#usernames").keyup(function () {
        validateUsername();
    });
 
    function validateUsername() {
        let usernameValue = $("#usernames").val();
        if (usernameValue.length == "") {
            $("#usercheck").show();
            usernameError = false;
            return false;
        } else if (usernameValue.length < 1 || usernameValue.length > 50) {
            $("#usercheck").show();
            $("#usercheck").html("**length of username must be between 1 and 50");
            usernameError = false;
            return false;
        } else {
            $("#usercheck").hide();
        }
    }
 
    // Validate Email
    const email = document.getElementById("email");
    email.addEventListener("blur", () => {
        let regex =
        /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
        let s = email.value;
        if (regex.test(s)) {
            email.classList.remove("is-invalid");
            emailError = true;
        } else {
            email.classList.add("is-invalid");
            emailError = false;
        }
    });
 
    // Submit button
    $("#submitbtn").click(function () {
        validateUsername();
        validatePassword();
        validateConfirmPassword();
        validateEmail();
        if (
            usernameError == true &&
            emailError == true
        ) {
            return true;
        } else {
            return false;
        }
    });
});


$(document).ready(function() {
  $("#basic-form").validate();
});
    
// Filter menu using jQuery

const filterBtn = $(".filter-active");
        $(filterBtn).click(function() {
            $(this).css("background-color", "#ff1300");
            $(this).css("color", "#302f38");
            $(this).siblings().css("background-color", "#302f38");
            $(this).siblings().css("color", "#fff");
        })

//Card filtering
            
document.querySelector("#filter-coding").addEventListener("click", filterCoding);
document.querySelector("#filter-marketing").addEventListener("click", filterMarketing);
document.querySelector("#filter-design").addEventListener("click", filterDesign);


function filterCoding() {
    var allCards = document.querySelectorAll(".card");

    allCards.forEach(card => {
    card.style.display = "none";
    });

    var codingCards = document.querySelectorAll(".coding");
    codingCards.forEach(codingCard => {
    codingCard.style.display = "inline-block";
    });
}

function filterMarketing() {
    var allCards = document.querySelectorAll(".card");

    allCards.forEach(card => {
        card.style.display = "none";
    });

    var marketingCards = document.querySelectorAll(".marketing");
    marketingCards.forEach(marketingCard => {
        marketingCard.style.display = "inline-block";
    });
}

function filterDesign() {
var allCards = document.querySelectorAll(".card");

allCards.forEach(card => {
    card.style.display = "none";
});

var designCards = document.querySelectorAll(".design");
designCards.forEach(designCard => {
    designCard.style.display = "inline-block"
})
}

//Load More option

if(window.innerWidth < 426) {
    console.clear();
    var work = document.querySelector("#workOuterShell");
    var items = Array.from(work.querySelectorAll(".card"));
    var loadMore = document.getElementById("loadMore");
    maxItems = 6;
    loadItems = 6;
    hiddenClass = "hiddenStyle";
    hiddenItems = Array.from(document.querySelectorAll(".hiddenStyle"));

    items.forEach(function (item, index) {
    if (index > maxItems - 1) {
        item.classList.add(hiddenClass);
    }
    });

    loadMore.addEventListener("click", function () {
    [].forEach.call(document.querySelectorAll("." + hiddenClass), function (
        item,
        index
    ) {
        if (index < loadItems) {
        item.classList.remove(hiddenClass);
        }

        if (document.querySelectorAll("." + hiddenClass).length === 0) {
        loadMore.style.display = "none";
        }
    });
    });
}