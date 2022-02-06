export default class Inuminate {
    constructor(siteId, url) {
        this.siteId = siteId;
        this.url = url !== null && url !== void 0 ? url : 'https://inuminate.com';
        this.direct = document.referrer === '';
        this.referrer = this.direct ? '' : window.location.origin;
    }
    withReferrer(referrer) {
        this.referrer = referrer;
        return this;
    }
    track() {
        return new Promise((resolve, reject) => {
            fetch(this.endpoint('api/hit'), {
                method: 'POST',
                body: JSON.stringify({
                    s: this.siteId,
                    l: window.location.href,
                    p: window.location.protocol,
                    h: this.hostname(),
                    r: this.referrer,
                    d: this.direct,
                }),
                headers: {
                    "Content-Type": "application/json"
                }
            }).then(response => {
                if (this.direct) {
                    this.direct = false;
                    this.referrer = window.location.origin;
                }
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
    hostname() {
        return window.location.hostname;
    }
}
//# sourceMappingURL=Inuminate.js.map