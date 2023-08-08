/* all menu */
function toggleMenu() {
  $("body").toggleClass("openMenu");
}

/* wr */
$(function () {
  $("input.text").each(function () {
    if ($(this).val() == "" || $(this).val() == undefined) {
      $(this).removeClass("wr");
    } else {
      $(this).addClass("wr");
    }
  });

  $("input.text")
    .on("input change", function () {
      $(this).toggleClass("wr", Boolean($(this).val()));
    })
    .trigger("propertychange");

  $("select.select").each(function () {
    if ($(this).val() == "" || $(this).val() == undefined) {
      $(this).next(".nice-select").removeClass("wr");
    } else {
      $(this).next(".nice-select").addClass("wr");
    }
  });

  $("select.select")
    .on("change", function () {
      $(this)
        .next(".nice-select")
        .toggleClass("wr", Boolean($(this).val()));
    })
    .trigger("propertychange");
});

/* pop */
function popOpen(divID) {
  $(divID).show().css("display", "flex");
  $("body").addClass("pop_open");
}
function popClose(divID) {
  $(divID).hide();
  $("body").removeClass("pop_open");
}
