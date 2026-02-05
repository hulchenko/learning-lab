1. Bootstrap link:

<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous"/>

2. Font Awesome:

<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous">

//Selectors:

    by type: $("button"),
    by class: $(".btn"),
    by id $("#target1").

//Property change:

    .prop() that allows you to adjust the properties of elements.
    ex: .prop('disabled', true)
    .html() - text and tags can be replaced
    .text() - text can be replaced
    .remove()
    .appendTo() - allows to select HTML elements and append them to another element
    ex: $("#target4").appendTo("#left-well");
    .clone() - copies element, used with appendTo()
    ex: $("#target2").clone().appendTo("#right-well");
    .parent() - targets parent element of the element
    ex: $("#left-well").parent().css("background-color", "blue") >>therefore this one>> <div class="col-xs-6">
    .children() - opposite from .parent()
    .target:nth-child(n) - alternative way to select child elements(class > nth-child > (index))
    ex: $(".target:nth-child(3)").addClass("animated bounce");

//Body selector:
$("body").addClass("animated fadeOut");
