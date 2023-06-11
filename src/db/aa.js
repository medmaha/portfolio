function transFormTextUrl(text) {
    const urlRegex = /(https?:\/\/[^\s]+)/g
    const urls = text.match(urlRegex)
    if (urls) {
        urls.forEach((url) => {
            text = text.replace(
                url,
                `<a href="${url}" class="texts-sky-500 cursor-pointer">${url}</a>`,
            )
        })
        console.log(text)
    }
    return text
}
