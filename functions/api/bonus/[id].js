// Cloudflare Pages Function - Bonus Redirect Proxy
// URL asli bonus resources disimpan di sini (server-side)

const BONUS_LINKS = {
    '1': 'https://docs.google.com/spreadsheets/d/1iMyiivGdD7qxnZqSC2MW6Fp2bNgXUjjm/edit?usp=sharing&ouid=108567366322498627276&rtpof=true&sd=true',
    '2': 'https://docs.google.com/document/d/1qE922ROyW14dnFrzZ4fBLvxfdi8xxbxnTBR05dGwe6Q/edit?usp=sharing',
    '3': 'https://drive.google.com/drive/folders/1ya9IxlU2q42l2TSnAzDrRW1SDHZnbJGS?usp=sharing',
    '4': 'https://drive.google.com/file/d/16wJlJCy87QzEjdwgQjcImkK2GTpa83kt/view?usp=sharing',
    '5': 'https://docs.google.com/document/d/1p9vGr8k6FwlUGdm7QDfnbhA9x-jjZTP8EY98qvbT0Ao/edit?usp=sharing',
};

export function onRequest(context) {
    const id = context.params.id;
    const url = BONUS_LINKS[id];

    if (!url) {
        return new Response('Not Found', { status: 404 });
    }

    return Response.redirect(url, 302);
}
