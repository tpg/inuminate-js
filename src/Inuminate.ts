export default class Inuminate {

    siteId: string;
    url: string;

    constructor (siteId, url = 'https://inuminate.com') {
        this.siteId = siteId;
        this.url = url;
    }

    track (): Promise<object> {
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
                resolve(response)
            }).catch(rejected => {
                console.error('Unable to track hit');
                console.log(rejected);
                reject(rejected);
            });

        })
    }

    endpoint (uri: string|null): string {
        let url = this.url;
        if (url[url.length -1] !== '/') {
            url += '/';
        }

        let ep = uri;
        if (!!ep && ep[0] === '/') {
            ep = ep.substring(1);
        }

        return url + ep;
    }

    referer (): string|null {

        let referrer = '';
        if (document.referrer.indexOf(this.hostname()) < 0) {
            referrer = document.referrer;
        }

        return referrer;
    }

    hostname (): string {
        return window.location.hostname;
    }
}