import Inuminate from './Inuminate';

function initInuminate() {
    const script = Array.from(document.getElementsByTagName('script')).filter(script => !!script.dataset.inuminateSite)[0];

    if (!script) {
        return;
    }

    const data = JSON.parse(script.dataset.inuminate ?? '{}');

    const inuminate = new Inuminate(data.site, data.url);
    inuminate.track();

}

initInuminate();
