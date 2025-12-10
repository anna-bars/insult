// Բաղադրիչները բեռնելու ֆունկցիա
async function loadComponent(element) {
    const src = element.getAttribute('data-include')
    if (!src) return
    
    try {
        const response = await fetch(src)
        const html = await response.text()
        element.innerHTML = html
        
        // Կատարել սքրիպտները (եթե կան)
        element.querySelectorAll('script').forEach(oldScript => {
            const newScript = document.createElement('script')
            if (oldScript.src) {
                newScript.src = oldScript.src
            } else {
                newScript.textContent = oldScript.textContent
            }
            oldScript.parentNode.replaceChild(newScript, oldScript)
        })
    } catch (error) {
        console.error(`Error loading ${src}:`, error)
    }
}

// Բոլոր բաղադրիչները բեռնել էջի բեռնումից հետո
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('[data-include]').forEach(loadComponent)
})