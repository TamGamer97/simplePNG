document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('captureButton').addEventListener('click', function () {
      chrome.tabs.captureVisibleTab(null, { format: 'png' }, function (dataUrl) {
        const link = document.createElement('a');
        link.href = dataUrl;
        link.download = 'PNG.png';
        link.click();
      });
    });
  });
  