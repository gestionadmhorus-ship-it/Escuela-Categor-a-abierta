const fs = require('fs');
let code = fs.readFileSync('app.js', 'utf8');
const startAdmin = code.indexOf('function renderAdmin');

if(startAdmin !== -1) {
    const patch = `
    // --- RECEPCIÓN DE LIVE PREVIEW ---
    window.addEventListener('message', (event) => {
        const data = event.data;
        if (!data || !data.type) return;
        if (data.type === 'SYNC_DATA') {
            if (data.siteData) siteData = data.siteData;
            if (data.courseData) courseData = data.courseData;
            if (data.contactData) contactData = data.contactData;
            if (data.testimonialsData) testimonialsData = data.testimonialsData;
            renderSite();
        } else if (data.type === 'SCROLL_TO') {
            const target = document.getElementById(data.target);
            if (target) { target.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
        }
    });
});
`;
    const newCode = code.substring(0, startAdmin) + patch;
    fs.writeFileSync('app.js', newCode);
    console.log("Patched successfully");
} else {
    console.log("Could not find startAdmin");
}
