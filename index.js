const url = window.location.href;
const startIndex = url.indexOf('=') + 1;
const endIndex = url.indexOf('&') === -1 ? url.length + 1 : url.indexOf('&');

const id = url.slice(startIndex, endIndex);
const embedUrl = `https://youtube.com/embed/${id}?autoplay=1`;
window.location.href = embedUrl;

chrome.tabs.update(tab.id, {
    url: embedUrl
});