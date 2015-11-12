import {app} from "../app_module";
app.directive("sortMessages", (AppConfig) => {
  return {
    restrict: 'A',
    link: function(scope, elem, attrs) {
      let col = attrs.sortMessages;
      let chevron = angular.element("<i style='padding-left: 0.25em' class='fa'></i>");
      elem.append(chevron);
      elem.on("click", (evt) => AppConfig.sort = (AppConfig.sort === `+${col}`) ? `-${col}` : `+${col}`);
      scope.$watch(() => AppConfig.sort, (newVal) => {
        chevron.toggleClass("fa-sort-asc", newVal == `+${col}`);
        chevron.toggleClass("fa-sort-desc", newVal == `-${col}`);
      });
    }
  }
});