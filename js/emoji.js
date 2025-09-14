const emojiMap = {
    ':tr:': 'emoji/flag/tr.png',
    ':discord:': 'emoji/platform/discord.png',
    ':x:': 'emoji/platform/x.png',
    ':telegram:': 'emoji/platform/telegram.png',
    ':youtube:': 'emoji/platform/youtube.png',
    ':cat:': 'emoji/face/cat.png'
};

// Function to replace emojis in a text node
function replaceEmojisInTextNode(textNode) {
    let html = textNode.nodeValue;
    for (const key in emojiMap) {
        const imgTag = `<img class="emoji" src="${emojiMap[key]}" alt="${key}">`;
        html = html.split(key).join(imgTag);
    }

    if (html !== textNode.nodeValue) {
        const span = document.createElement('span');
        span.innerHTML = html;
        textNode.parentNode.replaceChild(span, textNode);
    }
}

// Walk through all text nodes in the body
function walkAndReplace(node) {
    if (node.nodeType === Node.TEXT_NODE) {
        replaceEmojisInTextNode(node);
    } else {
        node.childNodes.forEach(child => walkAndReplace(child));
    }
}

// Run on page load
document.addEventListener('DOMContentLoaded', () => {
    walkAndReplace(document.body);
});
