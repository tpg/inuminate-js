import Inuminate from './Inuminate';

function initInuminate() {
    const script = Array.from(document.getElementsByTagName('script')).filter(script => !!script.dataset.inuminateSite)[0];

    if (!script) {
        return;
    }

    const site = script.dataset.inuminateSite!;
    const url = script.dataset.inuminateUrl ?? null;

    const inuminate = new Inuminate(site, url);
    inuminate.track();

}

initInuminate();
