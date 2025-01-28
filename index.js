let myLeads = []
const inputEl = document.getElementById("input-el")
const title = document.getElementById("title-el").value
const downloadBtn = document.getElementById("download-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
const tabBtn = document.getElementById("tab-btn")
const noteBtn = document.getElementById("note-btn")


function exportNote() {
    try {
        const title = document.getElementById('title-el').value || 'untitled';
        const notes = JSON.parse(localStorage.getItem("myLeads")) || [];
        
        const htmlContent = `
            <!DOCTYPE html>
            <html>
            <head>
                <meta charset='utf-8'>
                <title>${title}</title>
                <style>
                    body { font-family: Arial; margin: 40px; }
                    h1 { color: #333; }
                    p { margin: 10px 0; }
                    a { color: #0066cc; }
                </style>
            </head>
            <body>
                <h1>${title}</h1>
                ${notes.map(note => {
                    if (isValidURL(note)) {
                        return `<p><a href="${note}">${note}</a></p>`;
                    }
                    return `<p>${note}</p>`;
                }).join('')}
            </body>
            </html>
        `;

        const blob = new Blob([htmlContent], {
            type: 'text/html;charset=utf-8'
        });
        saveAs(blob, `${title}.html`);
    } catch (error) {
        console.error('Export failed:', error);
        alert('Failed to export notes. Please try again.');
    }
}

downloadBtn.addEventListener("click", exportNote);


if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

tabBtn.addEventListener("click", function(){    
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads) )
        render(myLeads)
    })
})

function isValidURL(input) {
    // URL patterns to check
    const urlPatterns = [
        /\.com$/i,
        /\.org$/i,
        /\.net$/i,
        /\.edu$/i,
        /\.gov$/i,
        /\.in$/i
    ];
    
    // Check if input starts with http(s)
    if (input.startsWith('http://') || input.startsWith('https://')) {
        return true;
    }
    
    // Check if input ends with any of the URL patterns
    return urlPatterns.some(pattern => pattern.test(input));
}


function render(leads) {
    let listItems = ""
    for (let i = 0; i < leads.length; i++) {
        if (isValidURL(leads[i])) {
            listItems += `
                <div class="link-item ">
                    <a target='_blank' href='${leads[i].startsWith('http') ? leads[i] : 'https://' + leads[i]}'>
                        ${leads[i]}
                    </a>
                </div>
            `
        } else {
            listItems += `
                <div class="note-item ">
                    <p class="mb-0">${leads[i]}</p>
                </div>
            `
        }
    }
    ulEl.innerHTML = listItems
}

deleteBtn.addEventListener("dblclick", function() {
    localStorage.clear()
    myLeads = []
    render(myLeads)
})

// inputBtn.addEventListener("click", function() {
//     const input = inputEl.value.trim()
//     if (input) {
//         myLeads.push(input)
//         inputEl.value = ""
//         localStorage.setItem("myLeads", JSON.stringify(myLeads))
//         render(myLeads)
//     }
// })

noteBtn.addEventListener("click", function() {
    const input = inputEl.value.trim()
    if (input) {
        myLeads.push(input)
        inputEl.value = ""
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        render(myLeads)
    }
})