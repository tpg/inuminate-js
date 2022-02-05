export default class Inuminate {
    constructor(siteId, url) {
        this.siteId = siteId;
        this.url = url !== null && url !== void 0 ? url : 'https://inuminate.com';
    }
    track() {
        return new Promise((resolve, reject) => {
            fetch(this.endpoint('api/hit'), {
                method: 'POST',
                body: JSON.stringify({
                    s: this.siteId,
                    l: window.location,
                    h: this.hostname(),
                    r: this.referer(),
                }),
                headers: {
                    "Content-Type": "application/json"
                }
            }).then(response => {
                resolve(response);
            }).catch(rejected => {
                console.error('Unable to track hit');
                console.log(rejected);
                reject(rejected);
            });
        });
    }
    endpoint(uri) {
        let url = this.url;
        if (url[url.length - 1] !== '/') {
            url += '/';
        }
        let ep = uri;
        if (!!ep && ep[0] === '/') {
            ep = ep.substring(1);
        }
        return url + ep;
    }
    referer() {
        let referrer = '';
        if (document.referrer.indexOf(this.hostname()) < 0) {
            referrer = document.referrer;
        }
        return referrer;
    }
    hostname() {
        return window.location.hostname;
    }
}
//# sourceMappingURL=Inuminate.js.map