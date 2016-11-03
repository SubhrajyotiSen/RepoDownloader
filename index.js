var { ToggleButton } = require('sdk/ui/button/toggle');
var sdkPanels = require("sdk/panel");
var self = require("sdk/self");

var button = ToggleButton({
  id: "my-button",
  label: "my button",
  icon: {
    "16": "./icon-16.png",
    "32": "./icon-32.png",
    "64": "./icon-64.png"
  },
  onChange: handleChange
});

var myPanel = sdkPanels.Panel({
  height: 130,
  width: 200,
  contentURL: self.data.url("text-entry.html"),
  contentScriptFile: self.data.url("get-repo.js"),
  onHide: handleHide,
  contentScript: "self.port.emit('resize', " +
                   "{width: document.documentElement.clientWidth, " +
                   "height: document.documentElement.clientHeight});"

});

function handleChange(state) {
  if (state.checked) {
    myPanel.show({
      position: button
    });
  }
}

function handleHide() {
  button.state('window', {checked: false});
}