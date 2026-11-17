// Fontes consultadas em 06/11/2026.
// Este arquivo contém apenas links, sem arquivos de imagem.

const BASE_FOTOS =
  "https://bluelockdle.com/images/characters/bluelock/";

const BASE_ALTERNATIVAS =
  "https://static.wikia.nocookie.net/bluelock/images/";

// Formato de cada linha:
// Nome do personagem|nome-do-arquivo
//
// O endereço final será:
// BASE_FOTOS + nome-do-arquivo + ".webp"

const ARQUIVOS_FOTOS = `
Abdi|abdi
Achanpong|achanpong
Adam Blake|adam-blake
Agbim|agbim
Agi|agi
Aiki Himizu|aiki-himizu
Aiki's father|aikis-father
Aiki's mother|aikis-mother
Akira Endoji|akira-endoji
Akira Shirosawa|akira-shirosawa
Alexis Ness|alexis-ness
Alexis' brother|alexis-brother
Alexis' father|alexis-father
Alexis' mother|alexis-mother
Alexis' sister|alexis-sister
Ali|ali
Alice Love|alice-love
Anri Teieri|anri-teieri
Aoshi Tokimitsu|aoshi-tokimitsu
Arthur|arthur
Asahi Naruhaya|asahi-naruhaya
Asahi's father|asahis-father
Asahi's mother|asahis-mother
Ashime Suzuki|ashime-suzuki
Atsuto Tereasa|atsuto-tereasa
Bachman|bachman
Bats|bats
Beita Tsuru|beita-tsuru
Bello|bello
Benedict Grim|benedict-grim
Birkenstock|birkenstock
Bos|bos
Bunny Iglesias|bunny-iglesias
Burai Daido|burai-daido
Busby|busby
Camus|camus
Canali|canali
Chapa|chapa
Charles Chevalier|charles-chevalier
Chihiro Ezaki|chihiro-ezaki
Childs|childs
Choki|choki
Chris Prince|chris-prince
Dada Silva|dada-silva
Daiya Morinaga|daiya-morinaga
Damon|damon
Delon|delon
Don Lorenzo|don-lorenzo
Drago|drago
Driver|driver
Eita Otoya|eita-otoya
Ekpo|ekpo
Erik Gesner|erik-gesner
Espesso|espesso
Ezekiel|ezekiel
Fox|fox
Frederick Kaiser|frederick-kaiser
Fuma Rokkaku|fuma-rokkaku
Gabin|gabin
Gabriel|gabriel
Gambari|gambari
Gen Fukaku|gen-fukaku
Gin Gagamaru|gin-gagamaru
Ginji Hiori|ginji-hiori
Girolan Dabadie|girolan-dabadie
Godwin Kuso|godwin-kuso
Gomez|gomez
Goodman|goodman
Gran|gran
Gurimu Igarashi|gurimu-igarashi
Gurimu's father|gurimus-father
Gurimu's mother|gurimus-mother
Haato Meiji|haato-meiji
Hajime Nishioka|hajime-nishioka
Haneru Shindo|haneru-shindo
Haru Hayate|haru-hayate
Haruhiko Yuzu|haruhiko-yuzu
Harutaro Natsuki|harutaro-natsuki
Hermes|hermes
Hibiki Okawa|hibiki-okawa
Hirakazu Midorikawa|hirakazu-midorikawa
Hiromu Munakata|hiromu-munakata
Hirotoshi Buratsuta|hirotoshi-buratsuta
Hoichi Yasumori|hoichi-yasumori
Hyoma Chigiri|hyoma-chigiri
Hyuga Koshiba|hyuga-koshiba
Ignacio Lara|ignacio-lara
Igor Schneider|igor-schneider
Iito Morita|iito-morita
Ikki Niko|ikki-niko
Imaru Akashi|imaru-akashi
Innocent Onazi|innocent-onazi
Iori Sato|iori-sato
Issei Isagi|issei-isagi
Itsuki Wakatsuki|itsuki-wakatsuki
Iyo Isagi|iyo-isagi
Jin Kiyora|jin-kiyora
Jin's brother|jins-brother
Jingo Raichi|jingo-raichi
Jinpachi Ego|jinpachi-ego
Julien Loki|julian-loki
Junichi Wanima|junichi-wanima
Junko Hiori|junko-hiori
Juraki Ito|juraki-ito
Jyubei Aryu|jyubei-aryu
Kai Tokita|kai-tokita
Kairu Saramadara|kairu-saramadara
Kaita|kaita
Kanji Torikai|kanji-torikai
Katsuta Ikirita|katsuta-ikirita
Kazuma Nio|kazuma-nio
Kei Shishiya|kei-shishiya
Keisuke Wanima|keisuke-wanima
Ken Andatte Shimura|ken-andatte-shimura
Kento Cho|kento-cho
Kenyu Yukimiya|kenyu-yukimiya
Kevin Iehitori|kevin-iehitori
Kisaburo Hijikata|kisaburo-hijikata
Kiyoshi Yasushi|kiyoshi-yasushi
Koki Mera|koki-mera
Kosei Otsuka|kosei-otsuka
Koyuki Chigiri|koyuki-chigiri
Kyohei Shiguma|kyohei-shiguma
Lavinho|lavinho
Leonardo Luna|leonardo-luna
Leyden|leyden
Mahiru Naruhaya|mahiru-naruhaya
Marc Snuffy|marc-snuffy
Mareto Takeyama|mareto-takeyama
Masumi Atatame|masumi-atatame
Meguru Bachira|meguru-bachira
Mensah|mensah
Michael Kaiser|michael-kaiser
Michelin|michelin
Mick Moon|mick-moon
Miroku Darai|miroku-darai
Momodu|momodu
Moro|moro
Nagisa Nakajima|nagisa-nakajima
Ndiaye|ndiaye
Neita Tami|neita-tami
Neneko Chigiri|neneko-chigiri
Niang|niang
Nijiro Nanase|nijiro-nanase
Noboru Jigen|noboru-jigen
Noel Noa|noel-noa
Oboabona|oboabona
Okuhito Iemon|okuhito-iemon
Oliver Aiku|oliver-aiku
Pablo Cavasoz|pablo-cavasoz
Pedro|pedro
Peron|peron
Picasso|picasso
Raito Fuwa|raito-fuwa
Ranze Kurona|ranze-kurona
Ray Dark|ray-dark
Reiji Hiiragi|reiji-hiiragi
Renoir|renoir
Rensuke Kunigami|rensuke-kunigami
Reo Mikage|reo-mikage
Retsu Nerima|retsu-nerima
Rian Sanga|rian-sanga
Rico|rico
Rikiya Hohai|rikiya-hohai
Rin Itoshi|rin-itoshi
Rin's father|rins-father
Rin's mother|rins-mother
Ringo Pondemizu|ringo-pondemizu
Rodin|rodin
Rooke|rooke
Ruiz|ruiz
Ruto Kora|ruto-kora
Ryo Nameoka|ryo-nameoka
Ryosuke Kira|ryosuke-kira
Ryu Kamioka|ryu-kamioka
Ryuhei Osuna|ryuhei-osuna
Ryusei Shido|ryusei-shidou
Sadiq|sadiq
Sae Itoshi|sae-itoshi
Seina Naruhaya|seina-naruhaya
Seishiro Nagi|seishiro-nagi
Shigeo Mizuki|shigeo-mizuki
Shingen Tanaka|shingen-tanaka
Shinichi Konan|shinichi-konan
Shinsuke Hekisa|shinsuke-hekisa
Shizuka Haiji|shizuka-haiji
Shoei Baro|shoei-barou
Shohei Inaba|shohei-inaba
Shuhei Ebina|shuhei-ebina
Shusaku Nihei|shusaku-nihei
Shuto Sendo|shuto-sendo
Skelton|skelton
So|so
Soshi Kagura|soshi-kagura
Sota Nemoto|sota-nemoto
Swift|swift
Tabito Karasu|tabito-karasu
Taiga Tsunzaki|taiga-tsunzaki
Taisho Hagimoto|taisho-hagimoto
Takashi Nishiyama|takashi-nishiyama
Takayuki Tokorojoji|takayuki-tokorojoji
Takeru Miike|takeru-miike
Takeshi Bito|takeshi-bito
Takuma Isezaki|takuma-isezaki
Teddy Knight|teddy-knight
Tenka Naruhaya|tenka-naruhaya
Teppei Neru|teppei-neru
Teru Kitsunezato|teru-kitsunezato
Tetsu Sokura|tetsu-sokura
Theo Sachs|theo-sachs
Tobio Madoka|tobio-madoka
Tomonori Tada|tomonori-tada
Tsukoteru Eiyu|tsukoteru-eiyu
Umaru|umaru
Urzaiz|uraziz
Vivian Hugo|vivian-hugo
Wataru Kuon|wataru-kuon
Yasuji Ozu|yasuji-ozu
Yawara Banku|yawara-banku
Yo Hiori|yo-hiori
Yoichi Isagi|yoichi-isagi
Yota Naruhaya|yota-naruhaya
Young|young
Yu Bachira|yu-bachira
Yudai Imamura|yudai-imamura
Yujin Koshinaka|yujin-koshinaka
Yukio Ishikari|yukio-ishikari
Yusei Amazora|yusei-amazora
Yuya Naruhaya|yuya-naruhaya
Yuza Dokomo|yuza-dokomo
Zantetsu Tsurugi|zantetsu-tsurugi
`;

// Transforma as linhas acima em um objeto de URLs.
const IMAGENS_PERSONAGENS = Object.fromEntries(
  ARQUIVOS_FOTOS.trim()
    .split("\n")
    .map((linha) => {
      const [nome, arquivo] = linha.trim().split("|");

      return [
        nome,
        BASE_FOTOS + arquivo + ".webp"
      ];
    })
);

// Personagem adicional encontrado na outra fonte.
IMAGENS_PERSONAGENS["Lockhart"] =
  BASE_ALTERNATIVAS + "6/66/Lockhart.png";

// Links alternativos para quando a foto principal falhar.
// Formato:
// Nome do personagem|caminho na hospedagem alternativa

const ARQUIVOS_ALTERNATIVOS = `
Abdi|2/2a/ABDI.png
Achanpong|e/e1/Achanpong.png
Adam Blake|d/d4/Adam_Blake.png
Agbim|e/e0/AgbimPortrait.png
Agi|5/5c/Agi.png
Aiki Himizu|7/74/Aiki_Himizu.png
Akira Endoji|1/19/Akira_Endoji.png
Alexis Ness|1/18/Alexis_Ness.png
Ali|0/02/Ali.png
Anri Teieri|1/15/Anri_Teieri.png
Aoshi Tokimitsu|b/b4/Aoshi_Tokimitsu.png
Arthur|5/50/Arthur.png
Asahi Naruhaya|8/89/Asahi_Naruhaya.png
Ashime Suzuki|9/9c/Ashime_Suzuki.png
Atsuto Tereasa|4/47/Atsuto_Tereasa.png
Bachman|d/d8/Bachman.png
Bats|1/11/Bats.png
Beita Tsuru|b/b6/Beita_Tsuru.png
Bello|0/0b/Bello.png
Benedict Grim|b/b0/Benedict_Grim.png
Birkenstock|c/c3/Birkenstock.png
Bos|8/82/Bos.png
Bunny Iglesias|8/81/Bunny_Iglesias.png
Burai Daido|9/9f/Burai_Daido.png
Busby|a/a7/Busby.png
Camus|a/ad/Camus.png
Canali|f/fc/Canali.png
Chapa|a/a8/Chapa_PXG.png
Charles Chevalier|6/6d/Charles.png
Chihiro Ezaki|f/f8/Chihiro_Ezaki.png
Childs|7/76/Childs.png
Choki|0/06/Choki.png
Chris Prince|f/f1/Chris_Prince.png
Dada Silva|7/71/Dada_Silva.png
Daiya Morinaga|1/16/Daiya_Morinaga.png
Damon|8/82/Damon.png
Delon|f/f2/Delon.png
Drago|d/dd/DRAGO.png
Driver|d/d1/Driver.png
Eita Otoya|2/23/Eita_Otoya.png
Ekpo|2/2e/Epko_Headshot.png
Erik Gesner|0/04/Erik_Gesner.png
Espesso|a/a2/Espesso.png
Ezekiel|c/c7/EzekielPortrait.png
Fox|e/e0/FoxPortrait.png
Frederick Kaiser|1/13/Frederick_Kaiser.png
Fuma Rokkaku|f/f1/Fuma_Rokkaku.png
Gabin|e/e7/Gabon.png
Gambari|c/ce/Gambari.png
Gen Fukaku|4/44/Gen_Fukaku.png
Gin Gagamaru|7/79/Gin_Gagamaru.png
Girolan Dabadie|c/c9/Giraud_Dabadie.png
Godwin Kuso|2/27/KusoPortrait.png
Gomez|0/03/Gomez.png
Goodman|0/0f/GoodmanPortrait.png
Gran|b/b2/Baya_%28Manga%29.png
Gurimu Igarashi|a/aa/Gurimu_Igarashi.png
Haato Meiji|d/d2/Haato_Meiji.png
Hajime Nishioka|8/83/Hajime_Nishioka_02.png
Haneru Shindo|1/13/ShindoPortrait.png
Haru Hayate|4/49/Haru_Hayate.png
Haruhiko Yuzu|b/bc/Haruhiko_Yuzu.png
Harutaro Natsuki|e/ee/Harutaro_Natsuki.png
Hermes|0/0d/Hermes.png
Hibiki Okawa|b/bc/Hibiki_Okawa.png
Hirakazu Midorikawa|a/a9/Hirakazu_Midorikawa.png
Hiromu Munakata|8/85/Hiromu_Munakata.png
Hirotoshi Buratsuta|9/9e/Hirotoshi_Buratsuta.png
Hoichi Yasumori|4/46/Yasumori_Hoichi.png
Hyoma Chigiri|f/f5/Hyoma_Chigiri.png
Hyuga Koshiba|9/93/Hyuga_Koshiba.png
Ignacio Lara|f/f7/Ignacio_Lara.png
Igor Schneider|d/d7/Igor_Schneider.png
Iito Morita|c/c9/Iito_Morita.png
Ikki Niko|a/a4/Ikki_Niko.png
Imaru Akashi|1/1b/Imaru_Akashi.png
Iori Sato|0/05/Iori_Sato.png
Issei Isagi|a/a0/Issei_Isagi.png
Itsuki Wakatsuki|a/af/Itsuki_Wakatsuki.png
Iyo Isagi|e/ea/Iyo_Isagi.png
Jin Kiyora|a/a9/Jin_Kiyora.png
Jingo Raichi|5/5c/Jingo_Raichi.png
Jinpachi Ego|3/3b/Jinpachi_Ego.png
Julien Loki|2/21/Julian_Loki.png
Junichi Wanima|2/2b/Junichi_Wanima.png
Juraki Ito|2/2a/Juraki_Ito.png
Jyubei Aryu|4/40/Jyubei_Aryu.png
Kai Tokita|3/34/Kai_Tokita.png
Kairu Saramadara|a/ac/Kairu_Saramadara.png
Kaita|d/d7/KaitaPortrait.png
Kanji Torikai|d/de/Kanji_Torikai.png
Katsuta Ikirita|d/dd/Ikirita_Katsuta.png
Kazuma Nio|0/0b/Kazuma_Nio.png
Kei Shishiya|c/c4/Kei_Shishiya.png
Keisuke Wanima|a/a6/Keisuke_Wanima.png
Ken Andatte Shimura|8/8d/Andatte_Ken_Shimura.png
Kento Cho|1/1d/Kento_Cho.png
Kenyu Yukimiya|7/73/Kenyu_Yukimiya.png
Kevin Iehitori|9/92/Kevin_Iehitori.png
Kisaburo Hijikata|c/cc/Kisaburo_Hijikata.png
Kiyoshi Yasushi|d/d8/Kiyoshi_Yasushi.png
Koki Mera|8/8f/Koki_Mera.png
Kosei Otsuka|7/76/Kosei_Otsuka.png
Koyuki Chigiri|a/af/Koyuki.png
Kyohei Shiguma|4/46/Kyohei_Shiguma.png
Lavinho|b/ba/Lavinho.png
Leonardo Luna|b/b4/Leonardo_Luna.png
Leyden|3/3c/Leyden.png
Mahiru Naruhaya|3/30/Mahiru_Naruhaya.png
Marc Snuffy|e/e7/Marc_Snuffy.png
Mareto Takeyama|3/30/Mareto_Takeyama.png
Masumi Atatame|f/ff/Masumi_Atatame.png
Meguru Bachira|f/f5/Meguru_Bachira.png
Mensah|d/de/Mensah.png
Michael Kaiser|f/f0/Michael_Kaiser.png
Michelin|1/1a/Michelin.png
Mick Moon|0/00/Mick_Moon.png
Miroku Darai|4/45/Miroku_Darai.png
Momodu|d/df/Momodu_Portrait.png
Moro|2/22/Moro_Portrait.png
Nagisa Nakajima|0/02/Nagisa_Nakajima.png
Ndiaye|c/c1/Ndiaye.png
Neita Tami|1/13/Neita_Tami.png
Neneko Chigiri|7/71/Neneko.png
Niang|7/7c/Niang.png
Nijiro Nanase|8/86/Nijiro_Nanase.png
Noboru Jigen|3/35/Noboru_Jigen.png
Noel Noa|1/1d/Noel_Noa.png
Oboabona|8/8a/OboabonaHeadshot.png
Okuhito Iemon|8/83/Okuhito_Iemon.png
Oliver Aiku|f/fc/Oliver_Aiku.png
Pablo Cavasoz|8/87/Pablo_Cavasoz.png
Peron|9/99/PERON.png
Picasso|5/5b/Picasso.png
Raito Fuwa|6/65/Raito_Fuwa.png
Ranze Kurona|a/ae/Ranze_Kurona.png
Ray Dark|c/c9/Ray_Dark.png
Reiji Hiiragi|d/dd/Reiji_Hiiragi.png
Renoir|b/b5/Renoir.png
Rensuke Kunigami|7/71/Rensuke_Kunigami_Wild_Card.png
Reo Mikage|4/40/Reo_Mikage.png
Retsu Nerima|f/fe/Retsu_Nerima.png
Rian Sanga|7/7e/Rian_Sanga.png
Rico|1/1c/RICO.png
Rikiya Hohai|b/bc/Rikiya_Hohai.png
Rin Itoshi|1/12/Rin_Itoshi.png
Ringo Pondemizu|2/25/Ringo_Pondemizu.png
Rodin|5/51/Rodin.png
Rooke|1/1b/Rook.png
Ruiz|d/d4/Ruiz.png
Ruto Kora|9/9e/Ruto_Kora.png
Ryo Nameoka|b/bd/Ryo_Nameoka.png
Ryosuke Kira|b/b1/Ryosuke_Kira.png
Ryu Kamioka|f/fc/Ryu_Kamioka.png
Ryuhei Osuna|8/88/Ryuhei_Osuna.png
Ryusei Shido|b/b3/Ryusei_Shido.png
Sadiq|1/16/Sadiq_Portrait.png
Sae Itoshi|f/f3/Sae_Itoshi.png
Seina Naruhaya|2/2a/Seina_Manga.png
Seishiro Nagi|c/c9/Seishiro_Nagi.png
Shingen Tanaka|e/e4/Shingen_Tanaka.png
Shinichi Konan|a/af/Shinichi_Konan.png
Shinsuke Hekisa|b/ba/Shinsuke_Hekisa.png
Shizuka Haiji|9/9d/Shizuka_Haiji.png
Shoei Baro|f/f0/Shoei_Baro.png
Shohei Inaba|a/ab/Shohei_inaba%28anime%29.png
Shuhei Ebina|f/f9/Shuhei_Ebina.png
Shusaku Nihei|4/41/Shushaku_Nihei_%28Manga%29.png
Shuto Sendo|1/19/Shuto_Sendo.png
Skelton|0/0f/Skelton.png
So|f/f5/So.png
Soshi Kagura|e/e6/Soshi_Kagura.png
Sota Nemoto|e/e7/Sota_Nemoto.png
Swift|0/00/Swift.png
Tabito Karasu|4/4b/Tabito_Karasu.png
Taiga Tsunzaki|a/a1/Taiga_Tsunzaki.png
Taisho Hagimoto|b/bd/Taisho_Hagimoto.png
Takashi Nishiyama|6/6b/Takashi_Nishiyama.png
Takayuki Tokorojoji|f/f7/Takayuki_Tokorojoji.png
Takeru Miike|f/f7/Takeru_Miike.png
Takeshi Bito|e/e1/Takeshi_Bito.png
Takuma Isezaki|e/ea/Takuma_Isezaki.png
Teddy Knight|1/1d/Teddy_Knight.png
Tenka Naruhaya|3/31/Tenka_Manga.png
Teppei Neru|2/28/Teppei_Neru.png
Teru Kitsunezato|2/26/Teru_Kitsunezato.png
Tetsu Sokura|d/d8/Tetsu_Sokura.png
Theo Sachs|6/66/Theo_Sachs.png
Tobio Madoka|1/1f/Tobio_Madoka.png
Tomonori Tada|4/49/Tama.png
Tsukoteru Eiyu|9/9c/Tsukoteru_Eiyu.png
Umaru|c/c5/UmaruPortrait.png
Urzaiz|3/38/Uraziz.png
Vivian Hugo|0/02/Hugo.png
Wataru Kuon|e/ed/Wataru_Kuon.png
Yasuji Ozu|0/07/Yasuji_Ozu.png
Yawara Banku|5/5c/Yawara_Banku.png
Yo Hiori|6/65/Yo_Hiori.png
Yoichi Isagi|3/39/Yoichi_Isagi.png
Yota Naruhaya|e/e4/Youta_Manga.png
Young|d/d2/Young.png
Yu Bachira|5/54/Yu_Bachira.png
Yudai Imamura|2/2e/Yudai_Imamura.png
Yujin Koshinaka|0/0f/Yujin_Koshinaka.png
Yukio Ishikari|0/01/Yukio_Ishikari.png
Yusei Amazora|4/4c/Yusei_Amazora.png
Yuya Naruhaya|8/89/Yuya_Manga.png
Yuza Dokomo|e/e8/Yuza_Dokomo.png
Zantetsu Tsurugi|3/39/Zantetsu_Tsurugi.png
`;

const IMAGENS_ALTERNATIVAS = Object.fromEntries(
  ARQUIVOS_ALTERNATIVOS.trim()
    .split("\n")
    .map((linha) => {
      const [nome, caminho] = linha.trim().split("|");

      return [
        nome,
        BASE_ALTERNATIVAS + caminho
      ];
    })
);