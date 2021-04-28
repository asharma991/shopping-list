$(document).ready(function () {
  $("ul").on("click", ".shopping-item-toggle", function (event) {
    event.stopPropagation();
    $(this).parent().prev().toggleClass("shopping-item__checked");
    $(this).children(".button-label").text() === "check"
      ? $(this).children(".button-label").text("uncheck")
      : $(this).children(".button-label").text("check");
  });
  $("ul").on("click", ".shopping-item-delete", function (event) {
    $(this).parents("li").remove();
  });
  $("#js-shopping-list-form").on("submit", function (event) {
    $("ul").append(
      `<li>
          <span class="shopping-item">` +
        $(this).children("#shopping-list-entry").val() +
        `</span>
          <div class="shopping-item-controls">
            <button class="shopping-item-toggle">
              <span class="button-label">check</span>
            </button>
            <button class="shopping-item-delete">
              <span class="button-label">delete</span>
            </button>
          </div>
        </li>`
    );
    event.preventDefault();
    $(this).children("#shopping-list-entry").val("");
  });
});
