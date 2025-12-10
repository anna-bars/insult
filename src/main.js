// src/main.js

// 1. Բեռնել Toolbar
async function loadToolbar() {
    try {
        // ՓՈՓՈԽԵԼ: հեռացնել առաջին /-ը
        const response = await fetch('./components/Toolbar/Toolbar.html')
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`)
        }
        
        const html = await response.text()
        
        // Տեղադրել toolbar-ը
        const toolbarContainer = document.querySelector('[data-toolbar]')
        if (toolbarContainer) {
            toolbarContainer.innerHTML = html
            console.log('✅ Toolbar loaded!')
            
            // CSS-ը ավտոմատ միացնել
            const cssLink = document.createElement('link')
            cssLink.rel = 'stylesheet'
            cssLink.href = './components/Toolbar/Toolbar.css'
            document.head.appendChild(cssLink)
        } else {
            console.error('❌ No [data-toolbar] element found')
        }
    } catch (error) {
        console.error('❌ Error loading toolbar:', error)
    }
}

// 2. Բեռնել ամեն ինչ էջի բեռնումից հետո
document.addEventListener('DOMContentLoaded', () => {
    console.log('📄 DOM loaded, loading toolbar...')
    loadToolbar()
})

// 3. Debug-ի համար ավելացնել
console.log('🚀 main.js loaded')