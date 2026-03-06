// Cloudflare Pages Function - GPT Redirect Proxy
// URL asli ChatGPT disimpan di sini (server-side, nggak keliatan di browser)

const GPT_LINKS = {
  '1': 'https://chatgpt.com/g/g-69aa705d61688191a6197e7e6d96a5a0-asisten-literature-review',
  '2': 'https://chatgpt.com/g/g-69aa716afd9481919bc93f7e69f42c98-asisten-penulisan-manuscript',
  '3': 'https://chatgpt.com/g/g-69aa72148fcc8191b0d0f0711649d8e6-asisten-penasihat-karir-akademik-senior',
  '4': 'https://chatgpt.com/g/g-69aa746b52188191921dfdc8a799fe9f-asisten-ahli-strategi-karir-akademik-guru-besar',
  '5': 'https://chatgpt.com/g/g-69aa754e41988191bef14f261e2e2943-asisten-response-peer-review',
  '6': 'https://chatgpt.com/g/g-69aa75c9d518819185a3e2a7e5175347-asisten-pemilihan-dan-verivikasi-jurnal-senior',
  '7': 'https://chatgpt.com/g/g-69aa76783cec8191ba23db1920291f05-asisten-penulisan-proposal-riset-hibah',
  '8': 'https://chatgpt.com/g/g-69aa771c4a8c8191ad94f6a3b440db54-asisten-riset-metodologi-kualitatif',
  '9': 'https://chatgpt.com/g/g-69aa789017b8819189617570a5cec1e8-asisten-ahli-parafrase-akademik',
  '10': 'https://chatgpt.com/g/g-69aa791ae34c819192398981b6115521-asisten-transalator-akademik-senior',
  '11': 'https://chatgpt.com/g/g-69aa79b346bc8191962513960faf37f4-asisten-abstract-review-akademik',
  '12': 'https://chatgpt.com/g/g-69aa7a1abbe0819196f960feae0068f3-asisten-simulator-peer-review-akademik',
  '13': 'https://chatgpt.com/g/g-69aa7aaf40048191a4b7cb5e302fd6af-asisten-kalkulator-hitung-angka-kredit',
  '14': 'https://chatgpt.com/g/g-69aa7b6747fc81918d4499b0fbf2b18d-asisten-author-guidelines-jurnal-scopus',
  '15': 'https://chatgpt.com/g/g-69aa7c844f288191bebbaeb2a1adfa8d-asisten-dokumen-response-generator',
};

export function onRequest(context) {
  const id = context.params.id;
  const url = GPT_LINKS[id];

  if (!url) {
    return new Response('Not Found', { status: 404 });
  }

  return Response.redirect(url, 302);
}
