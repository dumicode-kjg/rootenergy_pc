/* all menu */
function toggleMenu() {
  $("body").toggleClass("openMenu");
}

/* Tab */
$(function () {
  if ($(".sub_tab").length) {
    $(".sub_tab a").on("click", function (e) {
      //e.preventDefault();

      let index = $(".sub_tab a").index(this);

      $(".sub_tab a").removeClass("active");
      $(this).addClass("active");
      $(".sub_tabcon").removeClass("active").eq(index).addClass("active");
    });
  }
});

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

/* togglebox */
$(function () {
  $(".detail_togglebox .in_title").on("click", function () {
    $(this).toggleClass("on").next(".in_cont").slideToggle("fast");
  });
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

// checkBoxAll
$(function () {
  $(".terms_area .check_all").click(function () {
    $(this).parents(".terms_box").siblings().find("input[type=checkbox]").prop("checked", $(this).prop("checked"));
  });

  $(".terms_list input[type=checkbox]").click(function () {
    var lenTotal = $(this).parents(".terms_list").find("input[type=checkbox]").length;
    var lenSelect = $(this).parents(".terms_list").find("input[type=checkbox]:checked").length;
    if (lenTotal == lenSelect) {
      $(this).parents(".terms_area").find(".check_all").prop("checked", true);
    } else {
      $(this).parents(".terms_area").find(".check_all").prop("checked", false);
    }
  });
});