window.addEventListener("DOMContentLoaded", () => {
  //Tabs

  const tabs = document.querySelectorAll(".tabheader__item"),
    tabsContent = document.querySelectorAll(".tabcontent");

  const showHideTabsContent = (indexNum = 0) => {
    tabsContent.forEach(
      (item, i) => (item.style.display = i === indexNum ? "block" : "none"),
    );

    tabs.forEach((item, i) =>
      i === indexNum
        ? item.classList.add("tabheader__item_active")
        : item.classList.remove("tabheader__item_active"),
    );
  };

  tabs.forEach((item, index) =>
    item.addEventListener("click", () => showHideTabsContent(index)),
  );

  showHideTabsContent();
});
