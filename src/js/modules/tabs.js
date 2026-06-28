export default function tabs(
  tabsSelector,
  tabsContentSelector,
  activeSelector,
) {
  const tabs = document.querySelectorAll(tabsSelector),
    tabsContent = document.querySelectorAll(tabsContentSelector);

  const showHideTabsContent = (indexNum = 0) => {
    tabsContent.forEach(
      (item, i) => (item.style.display = i === indexNum ? "block" : "none"),
    );

    tabs.forEach((item, i) =>
      i === indexNum
        ? item.classList.add(activeSelector)
        : item.classList.remove(activeSelector),
    );
  };

  tabs.forEach((item, index) =>
    item.addEventListener("click", () => showHideTabsContent(index)),
  );

  showHideTabsContent();
}
