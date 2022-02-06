export default class Inuminate {

    siteId: string;
    url: string;
    referrer: string;
    direct: boolean;

    constructor (siteId: string, url?: string|null) {
        this.siteId = siteId;
        this.url = url ?? 'https://inuminate.com';

        this.direct = document.referrer === '';
        this.referrer = this.direct ? '' : window.location.origin;
    }

    withReferrer(referrer: string): Inuminate {

        this.referrer = referrer;
        return this;
    }

    track (): Promise<object> {

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

    hostname (): string {
        return window.location.hostname;
    }
}