// Categorias do catálogo.
// Os nomes são separados por "|".

const grupos = {
  "Time Z":
    "Yoichi Isagi|Meguru Bachira|Rensuke Kunigami|Hyoma Chigiri|Gin Gagamaru|Jingo Raichi|Gurimu Igarashi|Wataru Kuon|Asahi Naruhaya|Okuhito Iemon|Yudai Imamura|Ryosuke Kira",

  "Time X":
    "Shoei Baro|Burai Daido|Chihiro Ezaki|Daiya Morinaga|Haato Meiji|Kosei Otsuka|Rian Sanga|Ruto Kora|Tsukoteru Eiyu|Yawara Banku|Yuza Dokomo",

  "Time Y":
    "Ikki Niko|Hibiki Okawa|Ashime Suzuki|Fuma Rokkaku|Hyuga Koshiba|Iori Sato|Juraki Ito|Mareto Takeyama|Shinichi Konan|Soshi Kagura|Tobio Madoka",

  "Time W":
    "Junichi Wanima|Keisuke Wanima|Hiromu Munakata|Kai Tokita|Kei Shishiya|Koki Mera|Noboru Jigen|Raito Fuwa|Takuma Isezaki|Yujin Koshinaka|Yusei Amazora",

  "Time V":
    "Seishiro Nagi|Reo Mikage|Zantetsu Tsurugi|Hirakazu Midorikawa|Kanji Torikai|Kisaburo Hijikata|Masumi Atatame|Rikiya Hohai|Retsu Nerima|Shuhei Ebina|Sota Nemoto|Ryo Nameoka",

  "Segunda seleção":
    "Aiki Himizu|Akira Endoji|Aoshi Tokimitsu|Eita Otoya|Hajime Nishioka|Haruhiko Yuzu|Jin Kiyora|Jyubei Aryu|Kairu Saramadara|Kenyu Yukimiya|Kyohei Shiguma|Nijiro Nanase|Ranze Kurona|Reiji Hiiragi|Rin Itoshi|Ryusei Shido|Shingen Tanaka|Shizuka Haiji|Tabito Karasu|Taiga Tsunzaki|Tetsu Sokura|Yo Hiori|Yukio Ishikari",

  "Japão Sub-20":
    "Gen Fukaku|Oliver Aiku|Kazuma Nio|Miroku Darai|Teppei Neru|Itsuki Wakatsuki|Haru Hayate|Sae Itoshi|Kento Cho|Teru Kitsunezato|Shuto Sendo|Takeshi Bito|Ryuhei Osuna|Iito Morita|Shinsuke Hekisa|Takayuki Tokorojoji|Ryu Kamioka|Imaru Akashi|Beita Tsuru|Kiyoshi Yasushi|Ken Andatte Shimura|Taisho Hagimoto",

  "Bastard München":
    "Noel Noa|Alexis Ness|Ali|Bachman|Benedict Grim|Birkenstock|Erik Gesner|Igor Schneider|Mensah|Michael Kaiser|Ndiaye|Theo Sachs",

  "FC Barcha":
    "Lavinho|Bos|Espesso|Gomez|Ignacio Lara|Moro|Picasso|Ruiz|So|Urzaiz",

  "Manshine City":
    "Chris Prince|Agi|Arthur|Busby|Damon|Driver|Rooke|Swift|Young",

  "Ubers":
    "Marc Snuffy|Abdi|Canali|Don Lorenzo|Drago|Peron|Rico",

  "Paris X Gen":
    "Julien Loki|Chapa|Charles Chevalier|Gabin|Michelin|Renoir",

  "World Five":
    "Adam Blake|Dada Silva|Leonardo Luna|Pablo Cavasoz",

  "Copa Sub-20":
    "Agbim|Bello|Ekpo|Ezekiel|Kaita|Godwin Kuso|Momodu|Oboabona|Innocent Onazi|Sadiq|Umaru|Bats|Camus|Delon|Hermes|Vivian Hugo|Leyden|Bunny Iglesias",

  "Side-B":
    "Haneru Shindo|Akira Shirosawa|Kevin Iehitori|Nagisa Nakajima|Neita Tami|Shigeo Mizuki|Takashi Nishiyama|Takeru Miike|Yasuji Ozu",

  "Outros jogadores":
    "Shohei Inaba|Tomonori Tada|Katsuta Ikirita",

  "Outros personagens":
    "Achanpong|Aiki's father|Aiki's mother|Alexis' brother|Alexis' father|Alexis' mother|Alexis' sister|Alice Love|Anri Teieri|Asahi's father|Asahi's mother|Atsuto Tereasa|Childs|Choki|Fox|Frederick Kaiser|Gabriel|Gambari|Ginji Hiori|Girolan Dabadie|Goodman|Gran|Gurimu's father|Gurimu's mother|Harutaro Natsuki|Hirotoshi Buratsuta|Hoichi Yasumori|Issei Isagi|Iyo Isagi|Jin's brother|Jinpachi Ego|Junko Hiori|Koyuki Chigiri|Lockhart|Mahiru Naruhaya|Mick Moon|Neneko Chigiri|Niang|Pedro|Ray Dark|Rin's father|Rin's mother|Ringo Pondemizu|Rodin|Seina Naruhaya|Shusaku Nihei|Skelton|Teddy Knight|Tenka Naruhaya|Yota Naruhaya|Yu Bachira|Yuya Naruhaya"
};

// Posições sugeridas para personagens específicos.

const especiais = {
  "Gin Gagamaru": "GOL",
  "Gen Fukaku": "GOL",
  "Agbim": "GOL",
  "Oliver Aiku": "ZAG",
  "Don Lorenzo": "ZAG",
  "Ikki Niko": "ZAG",
  "Jyubei Aryu": "ZAG",
  "Kazuma Nio": "ZAG",
  "Miroku Darai": "ZAG",
  "Teppei Neru": "LD",
  "Hyoma Chigiri": "LE",
  "Jingo Raichi": "VOL",
  "Tabito Karasu": "VOL",
  "Reo Mikage": "MEI",
  "Sae Itoshi": "MEI",
  "Alexis Ness": "MEI",
  "Charles Chevalier": "MEI",
  "Yo Hiori": "MEI",
  "Ranze Kurona": "LD",
  "Meguru Bachira": "PON",
  "Eita Otoya": "PON",
  "Zantetsu Tsurugi": "PON",
  "Kenyu Yukimiya": "PON"
};

// Converte os grupos em uma lista única de personagens.

const catalogoBase = Object.entries(grupos).flatMap(
  ([equipe, nomes]) =>
    nomes.split("|").map((nome) => ({
      id:
        "base-" +
        nome.toLowerCase().replace(/[^a-z0-9]/g, "-"),

      nome,
      equipe,

      posicao:
        especiais[nome] ||
        (equipe === "Outros personagens" ? "—" : "ATA"),

      foto: IMAGENS_PERSONAGENS[nome] || null
    }))
);

// Atalho para encontrar elementos pelo ID.

const $ = (id) => document.getElementById(id);

// Recupera dados salvos no navegador.
// Se não existirem ou ocorrer um erro, usa o padrão.

function ler(chave, padrao) {
  try {
    return JSON.parse(localStorage.getItem(chave)) ?? padrao;
  } catch {
    return padrao;
  }
}

// Estado da aplicação.

let extras = ler("bl-extras", []);
let escalados = ler("bl-escalados", []);
let banco = ler("bl-banco", []);

// Compatibilidade com fotos salvas em versões anteriores.

let fotos = ler("bl-fotos", {});

// Retorna todos os personagens.

const todos = () => [...catalogoBase, ...extras];

// Localiza um personagem pelo ID.

const obter = (id) => todos().find((p) => p.id === id);

// Salva os dados no navegador.

function salvar() {
  try {
    localStorage.setItem(
      "bl-extras",
      JSON.stringify(extras)
    );

    localStorage.setItem(
      "bl-escalados",
      JSON.stringify(escalados)
    );

    localStorage.setItem(
      "bl-banco",
      JSON.stringify(banco)
    );

    localStorage.setItem(
      "bl-fotos",
      JSON.stringify(fotos)
    );
  } catch {
    alert(
      "Não foi possível salvar as alterações no navegador. " +
      "Verifique o armazenamento ou as permissões do site."
    );
  }
}

// Cria o avatar do personagem.
// Usa a imagem alternativa em caso de erro.
// Se todas falharem, mostra as iniciais.

function avatar(p) {
  const el = document.createElement("div");
  el.className = "avatar";

  const iniciais = p.nome
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("");

  el.textContent = iniciais;

  const src = fotos[p.id] || p.foto;

  if (!src) {
    return el;
  }

  const img = document.createElement("img");

  img.alt = p.nome;
  img.loading = "lazy";
  img.decoding = "async";
  img.referrerPolicy = "no-referrer";

  let tentouAlternativa = false;

  img.addEventListener("error", () => {
    const alternativa = IMAGENS_ALTERNATIVAS[p.nome];

    if (
      !tentouAlternativa &&
      alternativa &&
      alternativa !== img.src
    ) {
      tentouAlternativa = true;
      img.src = alternativa;
    } else {
      el.replaceChildren(
        document.createTextNode(iniciais)
      );

      el.title =
        "Imagem indisponível na origem: " + p.nome;
    }
  });

  img.src = src;
  el.replaceChildren(img);

  return el;
}

// Cria um cartão para o catálogo ou para as reservas.

function item(p, acao, classe) {
  const el = document.createElement("div");
  el.className = classe;

  el.append(avatar(p));

  const desc = document.createElement("div");

  const strong = document.createElement("strong");
  strong.textContent = p.nome;

  const small = document.createElement("small");
  small.textContent = p.posicao + " · " + p.equipe;

  desc.append(strong, small);
  el.append(desc);

  el.addEventListener("click", () => acao(p));

  return el;
}

// Coloca um personagem no campo.
// Se já houver 11 jogadores, coloca no banco.

function escalar(p) {
  if (escalados.some((j) => j.id === p.id)) {
    return;
  }

  if (escalados.length >= 11) {
    if (!banco.includes(p.id)) {
      banco.push(p.id);
    }
  } else {
    escalados.push({
      id: p.id,
      x: 15 + Math.random() * 55,
      y: 20 + Math.random() * 60
    });

    banco = banco.filter((id) => id !== p.id);
  }

  salvar();
  render();
}

// Retira um jogador do campo e o coloca no banco.

function retirar(id) {
  escalados = escalados.filter((j) => j.id !== id);

  if (!banco.includes(id)) {
    banco.push(id);
  }

  salvar();
  render();
}

// Atualiza o catálogo considerando busca e filtro.

function renderCatalogo() {
  const busca = $("busca").value.toLowerCase();
  const filtro = $("filtro").value;

  const itens = todos().filter(
    (p) =>
      p.nome.toLowerCase().includes(busca) &&
      (!filtro || p.equipe === filtro)
  );

  $("total").textContent = `(${itens.length})`;

  $("catalogo").replaceChildren(
    ...itens.map((p) =>
      item(p, escalar, "catalog-item")
    )
  );
}

// Atualiza catálogo, campo e banco de reservas.

function render() {
  renderCatalogo();

  const campo = $("campo");

  campo
    .querySelectorAll(".jogador")
    .forEach((n) => n.remove());

  escalados = escalados.filter((j) => obter(j.id));

  for (const j of escalados) {
    const p = obter(j.id);
    const el = document.createElement("div");

    el.className = "jogador";
    el.style.left = j.x + "%";
    el.style.top = j.y + "%";

    el.append(avatar(p));

    const nome = document.createElement("label");
    nome.textContent = p.nome;
    el.append(nome);

    const remover = document.createElement("button");

    remover.className = "remover";
    remover.textContent = "×";
    remover.title = "Retirar do campo";

    remover.addEventListener(
      "pointerdown",
      (e) => e.stopPropagation()
    );

    remover.addEventListener("click", (e) => {
      e.stopPropagation();
      retirar(j.id);
    });

    el.append(remover);

    // Arrastar com mouse, toque ou caneta.

    el.addEventListener("pointerdown", (e) => {
      if (e.target === remover) {
        return;
      }

      e.preventDefault();
      el.setPointerCapture(e.pointerId);

      const mover = (ev) => {
        const r = campo.getBoundingClientRect();

        j.x = Math.max(
          5,
          Math.min(
            95,
            ((ev.clientX - r.left) / r.width) * 100
          )
        );

        j.y = Math.max(
          8,
          Math.min(
            92,
            ((ev.clientY - r.top) / r.height) * 100
          )
        );

        el.style.left = j.x + "%";
        el.style.top = j.y + "%";
      };

      const fim = () => {
        el.removeEventListener("pointermove", mover);
        el.removeEventListener("pointerup", fim);
        el.removeEventListener("pointercancel", fim);

        salvar();
      };

      el.addEventListener("pointermove", mover);
      el.addEventListener("pointerup", fim);
      el.addEventListener("pointercancel", fim);
    });

    campo.append(el);
  }

  $("contagem").textContent =
    `${escalados.length}/11`;

  
  $("reservas").replaceChildren(
  ...banco
    .map(obter)
    .filter(Boolean)
    .map((p) => {
      // Cria o cartão do jogador reserva.
      const card = item(p, escalar, "reserva");

      // Cria o botão de remover.
      const remover = document.createElement("button");

      remover.className = "remover-reserva";
      remover.textContent = "×";
      remover.title = "Remover do banco de reservas";
      remover.type = "button";

      // Evento de clique no botão.
      remover.addEventListener("click", (e) => {
        // Impede que o clique também escale o jogador.
        e.stopPropagation();

        // Remove o jogador do banco.
        banco = banco.filter((id) => id !== p.id);

        // Salva a alteração.
        salvar();

        // Atualiza a interface.
        render();
      });

      // Adiciona o botão ao cartão.
      card.appendChild(remover);

      return card;
    })
);


  $("reservasCount").textContent =
    `(${banco.length})`;
}

// Coordenadas percentuais de cada formação.
// Cada par corresponde a [posição horizontal, posição vertical].

const posicoes = {
  "433": [
    [9, 50],
    [28, 15],
    [28, 38],
    [28, 62],
    [28, 85],
    [52, 24],
    [52, 50],
    [52, 76],
    [79, 20],
    [84, 50],
    [79, 80]
  ],

  "442": [
    [9, 50],
    [28, 15],
    [28, 38],
    [28, 62],
    [28, 85],
    [55, 15],
    [55, 38],
    [55, 62],
    [55, 85],
    [83, 35],
    [83, 65]
  ],

  "4231": [
    [9, 50],
    [28, 15],
    [28, 38],
    [28, 62],
    [28, 85],
    [45, 38],
    [45, 62],
    [66, 20],
    [66, 50],
    [66, 80],
    [85, 50]
  ],

  "352": [
    [9, 50],
    [29, 24],
    [29, 50],
    [29, 76],
    [51, 10],
    [51, 30],
    [51, 50],
    [51, 70],
    [51, 90],
    [83, 35],
    [83, 65]
  ]
};

// Aplica a formação selecionada.

$("organizar").onclick = () => {
  const pontos = posicoes[$("formacao").value];

  escalados.forEach((j, i) => {
    [j.x, j.y] = pontos[i];
  });

  salvar();
  render();
};

// Move todos os jogadores do campo para o banco.

$("limpar").onclick = () => {
  if (confirm("Retirar todos do campo?")) {
    banco = [
      ...new Set([
        ...banco,
        ...escalados.map((j) => j.id)
      ])
    ];

    escalados = [];

    salvar();
    render();
  }
};

// Pesquisa e filtro.

$("busca").oninput = renderCatalogo;
$("filtro").onchange = renderCatalogo;

// Cadastro de personagem personalizado com link HTTPS.

$("novo").onsubmit = (e) => {
  e.preventDefault();

  const nome = $("nome").value.trim();
  const posicao = $("posicao").value;
  const foto = $("foto").value.trim();

  if (!nome) {
    return;
  }

  if (foto) {
    try {
      if (new URL(foto).protocol !== "https:") {
        throw new Error("Protocolo inválido");
      }
    } catch {
      $("foto").setCustomValidity(
        "Informe um link HTTPS válido para a imagem."
      );

      $("foto").reportValidity();
      return;
    }
  }

  extras.push({
    id:
      "extra-" +
      Date.now() +
      "-" +
      Math.random().toString(36).slice(2),

    nome,
    equipe: "Personalizados",
    posicao,
    foto: foto || null
  });

  salvar();
  e.target.reset();
  render();
};

// Limpa o erro de validação quando o link é editado.

$("foto").oninput = () => {
  $("foto").setCustomValidity("");
};

// Cria as opções do filtro de equipes.

for (
  const grupo of [
    ...Object.keys(grupos),
    "Personalizados"
  ]
) {
  const op = document.createElement("option");

  op.value = grupo;
  op.textContent = grupo;

  $("filtro").append(op);
}

// Desenha a primeira tela.

render();