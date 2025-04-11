// ==================================================
// ==          BANCO DE DADOS DOS HOTÉIS           ==
// ==================================================
// Arquivo centralizado com todos os dados dos hotéis.
// IMPORTANTE: Preencha os dados técnicos E linkWhatsAppGrupo
// marcados como 'null' ou com placeholders para TODOS os hotéis.

const hotelDatabase = {
    // === Hotéis da index.html ===
    "bourbon-curitiba": {
        nome: "Bourbon Curitiba", // Nome oficial: Bourbon Curitiba Hotel & Suites
        imagens: ["assets/logo-hotel/bourbon_logo.jpg"],
        descricao: "O Bourbon Curitiba Convention Hotel está localizado no centro de Curitiba, próximo aos principais pontos turísticos e centros empresariais. Oferece apartamentos e suítes modernas, além de uma completa estrutura para eventos e lazer.",
        infoAdicional: [{ titulo: "Endereço", valor: "R. Cândido Lopes, 102 - Centro, Curitiba - PR, 80020-060" }, { titulo: "Telefone", valor: "(41) 3221-4600" }, { titulo: "Website", valor: "<a href='https://www.bourbon.com.br/hotel/bourbon-curitiba' target='_blank'>Site Oficial</a>" }],
        linkWhatsAppGrupo: "https://chat.whatsapp.com/FGbRzyOopOs0BkfonudQjF",
        backupLink: "https://0.0.0.0", // Exemplo, usar link real
        acessoRB: { ovpn: "10.31.0.61:3055", ipLocal: "10.17.4.167", user: "hoteltech", senha: "@ht2020*!" },
        acessoFlussonic: { ovpn: "10.31.0.26", ipRede: "192.168.88.41", portaSSH: 22, portaWeb: 8080, userSSH: "hoteltech", senhaSSH: "@ht2020*", userWeb: "admin", senhaWeb: "@ht2020*", linkWeb: "http://10.31.0.26:8080" },
        acessoIRD: { ovpn: "10.31.0.61:8583", ipRede: "192.168.88.136", user: "admin", senha: "admin", linkWeb: "http://10.31.0.61:8583/" },
        acessoRemoto: { tipo: "Canal Institucional", anydesk: "1492046315", senha: "@ht2020*" },
        infoAdm: null
    },
    "bourbon-ponta-grossa": {
        nome: "Bourbon Ponta Grossa",
        imagens: ["assets/logo-hotel/bourbon_logo.jpg"],
        descricao: "Localizado em Ponta Grossa, este hotel oferece conforto e conveniência para viajantes a negócios ou lazer na região dos Campos Gerais.",
        infoAdicional: [{ titulo: "Endereço", valor: "Rua Jacob Holzmann, 219 - Olarias, Ponta Grossa - PR, 84035-290" }, { titulo: "Telefone", valor: "(42) 3220-3700" }, { titulo: "Website", valor: "<a href='https://www.bourbon.com.br' target='_blank'>bourbon.com.br</a>" }],
        linkWhatsAppGrupo: null, // <--- NOVO CAMPO: PREENCHER LINK DO GRUPO
        backupLink: null,
        acessoRB: { ovpn: "10.31.0.152:8580", ipLocal: "192.168.1.3", user: "hoteltech", senha: "@ht2020*!" },
        acessoFlussonic: { ovpn: "10.31.0.39", ipRede: "192.168.10.3", portaSSH: 3322, portaWeb: 80, userSSH: "hoteltech", senhaSSH: "@ht2020*", userWeb: "admin", senhaWeb: "@ht2020*", linkWeb: "http://10.31.0.39:80" },
        acessoIRD: { ovpn: "10.31.0.152:8581", ipRede: "192.168.0.136", user: "admin", senha: "admin", linkWeb: "http://10.31.0.152:8581" },
        acessoRemoto: { tipo: "Canal Institucional", anydesk: "1054079761", senha: null },
        infoAdm: { contato: "adm@pg.com" }
    },
    "bourbon-dom-ricardo": {
        nome: "Bourbon Dom Ricardo | Aeroporto Curitiba Hotel",
        imagens: ["assets/logo-hotel/bourbon_logo.jpg"],
        descricao: "Hotel próximo ao Aeroporto Afonso Pena em São José dos Pinhais...", // Descrição resumida
        infoAdicional: [{ titulo: "Endereço", valor: "Av. Rocha Pombo, 2400 - Águas Belas, São José dos Pinhais - PR, 83010-620" }, { titulo: "Telefone", valor: "(41) 3299-2400" }, { titulo: "Website", valor: "<a href='https://www.bourbon.com.br/hotel/bourbon-dom-ricardo-hotel' target='_blank'>Site Oficial</a>" }],
        linkWhatsAppGrupo: null, // <--- NOVO CAMPO: PREENCHER LINK DO GRUPO
        backupLink: null,
        acessoRB: { ovpn: "10.31.0.108:8580", ipLocal: "192.168.0.107", user: "hoteltech", senha: "@ht2020*!" },
        acessoFlussonic: { ovpn: "10.31.0.141", ipRede: "192.168.10.242", portaSSH: 3050, portaWeb: 8583, userSSH: "hoteltech", senhaSSH: "@ht2020*", userWeb: "hoteltech", senhaWeb: "@ht2020*", linkWeb: "http://10.31.0.108:8583" }, // Link conforme user
        acessoIRD: { ovpn: "10.31.0.108:8581", ipRede: "192.168.0.136", user: "hoteltech", senha: "@ht2020*", linkWeb: "http://10.31.0.108:8581" },
        acessoRemoto: null, // Confirmado que não há acesso remoto padrão
        infoAdm: null
    },
    "bourbon-rio": { // Rio Hotel by Bourbon Curitiba Batel
        nome: "Rio Hotel by Bourbon Curitiba Batel",
        imagens: ["assets/logo-hotel/bourbon_logo.jpg"],
        descricao: "Localizado no bairro Batel em Curitiba, este hotel foca em praticidade e conforto...", // Descrição resumida
        infoAdicional: [{ titulo: "Endereço", valor: "Av. Visconde de Guarapuava, 4889 - Batel, Curitiba - PR, 80240-010" }, { titulo: "Telefone", valor: "(41) 3342-7990" }, { titulo: "Website", valor: "<a href='https://www.bourbon.com.br/hotelrio/rio-hotel-by-bourbon-curitiba-batel' target='_blank'>Site Oficial</a>" }],
        linkWhatsAppGrupo: null, // <--- NOVO CAMPO: PREENCHER LINK DO GRUPO
        backupLink: null,
        acessoRB: "Este Hotel não tem RB", // Mensagem personalizada
        acessoFlussonic: { ovpn: "187.95.152.50", ipRede: "192.168.0.241", portaSSH: 3055, portaWeb: 8081, userSSH: "hotel", senhaSSH: "@ht2020*", userWeb: "hoteltech", senhaWeb: "@ht2020*", linkWeb: "http://187.95.152.50:8081" },
        acessoIRD: "O acesso no IRD e feito atravez do mini pc do canal institucional do hotel.", // Mensagem personalizada
        acessoRemoto: { tipo: "Canal Institucional", anydesk: "1937162446", senha: "@ht2020*" },
        infoAdm: null
    },
    "viale-cataratas": {
        nome: "Viale Cataratas Hotel & Eventos",
        imagens: ["assets/logo-hotel/Vialle-Cataratas_logo.jpg"],
        descricao: "Hotel contemporâneo em Foz do Iguaçu, localizado na Avenida das Cataratas...", // Descrição resumida
        infoAdicional: [{ titulo: "Endereço", valor: "Av. das Cataratas, 2420 - Vila Yolanda, Foz do Iguaçu - PR, 85853-000" }, { titulo: "Telefone", valor: "(45) 2105-7200" }, { titulo: "Website", valor: "<a href='https://www.vialehoteis.com.br/' target='_blank'>Site Oficial (Rede)</a>" }],
        linkWhatsAppGrupo: null, // <--- NOVO CAMPO: PREENCHER LINK DO GRUPO
        backupLink: null,
        acessoRB: { ovpn: "10.31.0.58:8580", ipLocal: "192.168.1.5", user: "hoteltech", senha: "@ht2020*!" }, // Dados confirmados pelo user
        acessoFlussonic: { ovpn: "10.31.0.143", ipRede: "192.168.88.248", portaSSH: 3055, portaWeb: 8080, userSSH: "hoteltech", senhaSSH: "@ht2020*", userWeb: "admin", senhaWeb: "@ht2020*", linkWeb: "http://10.31.0.143:8080" }, // Link conforme user
        acessoIRD: { ovpn: "10.31.0.58:9090", ipRede: "192.168.88.136", user: "admin", senha: "admin", linkWeb: "http://10.31.0.58:9090" }, // Dados confirmados pelo user
        acessoRemoto: { tipo: "Canal Institucional", anydesk: "1089743902", senha: "@ht2020*" }, // Dados confirmados pelo user
        infoAdm: null
    },

    // --- DEMAIS HOTÉIS --- (ADICIONADO linkWhatsAppGrupo: null) ---
    "viale-tower": {
        nome: "Viale Tower", imagens: ["assets/logo-hotel/Vialle-Tower_logo.jpg"], descricao: "Descrição do Viale Tower...", infoAdicional: [], linkWhatsAppGrupo: null,
        backupLink: null, acessoRB: null, acessoFlussonic: null, acessoIRD: null, acessoRemoto: null, infoAdm: null
    },
    "doubletree-hilton": {
        nome: "DoubleTree by Hilton", imagens: ["assets/logo-hotel/By-Hilton_logo.jpg"], descricao: "Descrição do DoubleTree by Hilton Foz...", infoAdicional: [], linkWhatsAppGrupo: null,
        backupLink: null, acessoRB: null, acessoFlussonic: null, acessoIRD: null, acessoRemoto: null, infoAdm: null
    },
    "intercity-canoas": {
        nome: "Intercity Canoas", imagens: ["assets/logo-hotel/intercity-canoas_logo.jpg"], descricao: "Descrição do Intercity Canoas...", infoAdicional: [], linkWhatsAppGrupo: null,
        backupLink: null, acessoRB: null, acessoFlussonic: null, acessoIRD: null, acessoRemoto: null, infoAdm: null
    },
    "bristol-sabrina": {
        nome: "Bristol Sabrina", imagens: ["assets/logo-hotel/Bristol_logo.jpg"], descricao: "Descrição do Bristol Sabrina...", infoAdicional: [], linkWhatsAppGrupo: null,
        backupLink: null, acessoRB: null, acessoFlussonic: null, acessoIRD: null, acessoRemoto: null, infoAdm: null
    },
    "bristol-infinity": {
        nome: "Bristol Infinity", imagens: ["assets/logo-hotel/Bristol_logo.jpg"], descricao: "Descrição do Bristol Infinity...", infoAdicional: [], linkWhatsAppGrupo: null,
        backupLink: null, acessoRB: null, acessoFlussonic: null, acessoIRD: null, acessoRemoto: null, infoAdm: null
    },
    "bristol-santo-andre": {
        nome: "Bristol Santo André", imagens: ["assets/logo-hotel/Bristol_logo.jpg"], descricao: "Descrição do Bristol Santo André...", infoAdicional: [], linkWhatsAppGrupo: null,
        backupLink: null, acessoRB: null, acessoFlussonic: null, acessoIRD: null, acessoRemoto: null, infoAdm: null
    },
    "capivari-ecoresort": {
        nome: "Capivari Ecoresort", imagens: ["assets/logo-hotel/Capivari_logo.jpg"], descricao: "Descrição do Capivari Ecoresort...", infoAdicional: [], linkWhatsAppGrupo: null,
        backupLink: null, acessoRB: null, acessoFlussonic: null, acessoIRD: null, acessoRemoto: null, infoAdm: null
    },
    "my-mabu": {
        nome: "My Mabu", imagens: ["assets/logo-hotel/My-Mabu_logo.jpg"], descricao: "Descrição do My Mabu...", infoAdicional: [], linkWhatsAppGrupo: null,
        backupLink: null, acessoRB: null, acessoFlussonic: null, acessoIRD: null, acessoRemoto: null, infoAdm: null
    },
    "fazzenda-park": {
        nome: "Fazzenda Park", imagens: ["assets/logo-hotel/Fazenda-Park_logo.jpg"], descricao: "Descrição do Fazzenda Park...", infoAdicional: [], linkWhatsAppGrupo: null,
        backupLink: null, acessoRB: null, acessoFlussonic: null, acessoIRD: null, acessoRemoto: null, infoAdm: null
    },
    "gloria-blumenau": {
        nome: "Gloria Blumenau", imagens: ["assets/logo-hotel/Gloria_logo.jpg"], descricao: "Descrição do Hotel Gloria Blumenau...", infoAdicional: [], linkWhatsAppGrupo: null,
        backupLink: null, acessoRB: null, acessoFlussonic: null, acessoIRD: null, acessoRemoto: null, infoAdm: null
    },
    "bluetree-verbo-divino": {
        nome: "Blue Tree Verbo Divino", imagens: ["assets/logo-hotel/Blue-tree_logo.jpg"], descricao: "Descrição do Blue Tree Verbo Divino...", infoAdicional: [], linkWhatsAppGrupo: null,
        backupLink: null, acessoRB: null, acessoFlussonic: null, acessoIRD: null, acessoRemoto: null, infoAdm: null
    },
    "aqualand": {
        nome: "Aqualand", imagens: ["assets/logo-hotel/Aqualand_logo.jpg"], descricao: "Descrição do Aqualand...", infoAdicional: [], linkWhatsAppGrupo: null,
        backupLink: null, acessoRB: null, acessoFlussonic: null, acessoIRD: null, acessoRemoto: null, infoAdm: null
    },
    "amazon-taiama": {
        nome: "Amazon Taiamã", imagens: ["assets/logo-hotel/Amazon_logo.jpg"], descricao: "Descrição do Amazon Taiamã...", infoAdicional: [], linkWhatsAppGrupo: null,
        backupLink: null, acessoRB: null, acessoFlussonic: null, acessoIRD: null, acessoRemoto: null, infoAdm: null
    },
    "amazon-plaza": {
        nome: "Amazon Plaza", imagens: ["assets/logo-hotel/Amazon_logo.jpg"], descricao: "Descrição do Amazon Plaza...", infoAdicional: [], linkWhatsAppGrupo: null,
        backupLink: null, acessoRB: null, acessoFlussonic: null, acessoIRD: null, acessoRemoto: null, infoAdm: null
    },
    "amazon-aeroporto": {
        nome: "Amazon Aeroporto", imagens: ["assets/logo-hotel/Amazon_logo.jpg"], descricao: "Descrição do Amazon Aeroporto...", infoAdicional: [], linkWhatsAppGrupo: null,
        backupLink: null, acessoRB: null, acessoFlussonic: null, acessoIRD: null, acessoRemoto: null, infoAdm: null
    },
    "fazenda-3-pinheiros": {
        nome: "Fazenda 3 Pinheiros", imagens: ["assets/logo-hotel/Fazenda-3-Pinheiros_logo.jpg"], descricao: "Descrição da Fazenda 3 Pinheiros...", infoAdicional: [], linkWhatsAppGrupo: null,
        backupLink: null, acessoRB: null, acessoFlussonic: null, acessoIRD: null, acessoRemoto: null, infoAdm: null
    },
    "chocoland": {
        nome: "Chocoland", imagens: ["assets/logo-hotel/Chocoland_logo.jpg"], descricao: "Descrição do Chocoland...", infoAdicional: [], linkWhatsAppGrupo: null,
        backupLink: null, acessoRB: null, acessoFlussonic: null, acessoIRD: null, acessoRemoto: null, infoAdm: null
    },
    "ouro-minas": {
        nome: "Ouro Minas", imagens: ["assets/logo-hotel/Ouro-minas_logo.jpg"], descricao: "Descrição do Ouro Minas...", infoAdicional: [], linkWhatsAppGrupo: null,
        backupLink: null, acessoRB: null, acessoFlussonic: null, acessoIRD: null, acessoRemoto: null, infoAdm: null
    },
    "intercity-bavaria": {
        nome: "Intercity Bavaria Sport", imagens: ["assets/logo-hotel/intercity-Bavaria_logo.jpg"], descricao: "Descrição do Intercity Bavaria Sport...", infoAdicional: [], linkWhatsAppGrupo: null,
        backupLink: null, acessoRB: null, acessoFlussonic: null, acessoIRD: null, acessoRemoto: null, infoAdm: null
    },
    "japy-golf": {
        nome: "Japy Golf Resort", imagens: ["assets/logo-hotel/Japy-Golf_logo.jpg"], descricao: "Descrição do Japy Golf Resort...", infoAdicional: [], linkWhatsAppGrupo: null,
        backupLink: null, acessoRB: null, acessoFlussonic: null, acessoIRD: null, acessoRemoto: null, infoAdm: null
    },
    "thermas-walter-world": {
        nome: "Thermas Resort Walter World", imagens: ["assets/logo-hotel/Thermas-Poços-de-caldas_logo.jpg"], descricao: "Descrição do Thermas Resort Walter World...", infoAdicional: [], linkWhatsAppGrupo: null,
        backupLink: null, acessoRB: null, acessoFlussonic: null, acessoIRD: null, acessoRemoto: null, infoAdm: null
    },
    "vilage-inn": {
        nome: "Vilage Inn", imagens: ["assets/logo-hotel/Vilage-inn_logo.jpg"], descricao: "Descrição do Vilage Inn...", infoAdicional: [], linkWhatsAppGrupo: null,
        backupLink: null, acessoRB: null, acessoFlussonic: null, acessoIRD: null, acessoRemoto: null, infoAdm: null
    },
    "golden-pocos": {
        nome: "Golden Park Poços de Caldas", imagens: ["assets/logo-hotel/Golden-park_logo.jpg"], descricao: "Descrição do Golden Park Poços de Caldas...", infoAdicional: [], linkWhatsAppGrupo: null,
        backupLink: null, acessoRB: null, acessoFlussonic: null, acessoIRD: null, acessoRemoto: null, infoAdm: null
    },
    "jurema": {
        nome: "Jurema Águas Quentes", imagens: ["assets/logo-hotel/Jurema_logo.jpg"], descricao: "Descrição do Jurema Águas Quentes...", infoAdicional: [], linkWhatsAppGrupo: null,
        backupLink: null, acessoRB: null, acessoFlussonic: null, acessoIRD: null, acessoRemoto: null, infoAdm: null
    },
    "thermas-olimpia": {
        nome: "Thermas Park Olimpia", imagens: ["assets/logo-hotel/Thermas-Park-Olimpia_logo.jpg"], descricao: "Descrição do Thermas Park Olimpia...", infoAdicional: [], linkWhatsAppGrupo: null,
        backupLink: null, acessoRB: null, acessoFlussonic: null, acessoIRD: null, acessoRemoto: null, infoAdm: null
    },
    "hospital-evangelico": {
        nome: "Hospital Evangélico", imagens: ["assets/logo-hotel/Hospital-Evangelico_logo.jpg"], descricao: "Descrição do Hospital Evangélico...", infoAdicional: [], linkWhatsAppGrupo: null,
        backupLink: null, acessoRB: null, acessoFlussonic: null, acessoIRD: null, acessoRemoto: null, infoAdm: null
    },
    "hospital-inc": {
        nome: "Hospital Inc Curitiba", imagens: ["assets/logo-hotel/hospital-inc_logo.jpg"], descricao: "Descrição do Hospital Inc...", infoAdicional: [], linkWhatsAppGrupo: null,
        backupLink: null, acessoRB: null, acessoFlussonic: null, acessoIRD: null, acessoRemoto: null, infoAdm: null
    },
    "sun-city": {
        nome: "Sun City", imagens: ["assets/logo-hotel/sun-city_logo.jpg"], descricao: "Descrição do Sun City...", infoAdicional: [], linkWhatsAppGrupo: null,
        backupLink: null, acessoRB: null, acessoFlussonic: null, acessoIRD: null, acessoRemoto: null, infoAdm: null
    },
    "mabu-business": {
        nome: "Mabu Curitiba Business", imagens: ["assets/logo-hotel/mabu-curitiba_logo.jpg"], descricao: "Descrição do Mabu Curitiba Business...", infoAdicional: [], linkWhatsAppGrupo: null,
        backupLink: null, acessoRB: null, acessoFlussonic: null, acessoIRD: null, acessoRemoto: null, infoAdm: null
    },
    "westin-porto": {
        nome: "Westin Porto de Galinhas", imagens: ["assets/logo-hotel/PGA_logo.jpg"], descricao: "Descrição do Westin Porto de Galinhas...", infoAdicional: [], linkWhatsAppGrupo: null,
        backupLink: null, acessoRB: null, acessoFlussonic: null, acessoIRD: null, acessoRemoto: null, infoAdm: null
    },
    "candeias-picarras": { nome: "Candeias Piçarras", imagens: ["assets/logo-hotel/Candeias_logo.jpg"], descricao: "...", infoAdicional: [], linkWhatsAppGrupo: null, backupLink: null, acessoRB: null, acessoFlussonic: null, acessoIRD: null, acessoRemoto: null, infoAdm: null },
    "candeias-guaruja": { nome: "Candeias Guarujá", imagens: ["assets/logo-hotel/Candeias_logo.jpg"], descricao: "...", infoAdicional: [], linkWhatsAppGrupo: null, backupLink: null, acessoRB: null, acessoFlussonic: null, acessoIRD: null, acessoRemoto: null, infoAdm: null },
    "candeias-goldfish": { nome: "Candeias Gold Fish", imagens: ["assets/logo-hotel/Candeias_logo.jpg"], descricao: "...", infoAdicional: [], linkWhatsAppGrupo: null, backupLink: null, acessoRB: null, acessoFlussonic: null, acessoIRD: null, acessoRemoto: null, infoAdm: null },
    "candeias-complexo": { nome: "Candeias Complexo Turístico", imagens: ["assets/logo-hotel/Candeias_logo.jpg"], descricao: "...", infoAdicional: [], linkWhatsAppGrupo: null, backupLink: null, acessoRB: null, acessoFlussonic: null, acessoIRD: null, acessoRemoto: null, infoAdm: null },
    "candeias-parador": { nome: "Candeias Parador Cachoeira", imagens: ["assets/logo-hotel/Candeias_logo.jpg"], descricao: "...", infoAdicional: [], linkWhatsAppGrupo: null, backupLink: null, acessoRB: null, acessoFlussonic: null, acessoIRD: null, acessoRemoto: null, infoAdm: null },
    "candeias-caioba": { nome: "Candeias Caiobá", imagens: ["assets/logo-hotel/Candeias_logo.jpg"], descricao: "...", infoAdicional: [], linkWhatsAppGrupo: null, backupLink: null, acessoRB: null, acessoFlussonic: null, acessoIRD: null, acessoRemoto: null, infoAdm: null },
    "candeias-ubatuba": { nome: "Candeias Ubatuba", imagens: ["assets/logo-hotel/Candeias_logo.jpg"], descricao: "...", infoAdicional: [], linkWhatsAppGrupo: null, backupLink: null, acessoRB: null, acessoFlussonic: null, acessoIRD: null, acessoRemoto: null, infoAdm: null },
    "candeias-guarany": { nome: "Candeias Guarany", imagens: ["assets/logo-hotel/Candeias_logo.jpg"], descricao: "...", infoAdicional: [], linkWhatsAppGrupo: null, backupLink: null, acessoRB: null, acessoFlussonic: null, acessoIRD: null, acessoRemoto: null, infoAdm: null },
    "candeias-guaratuba": { nome: "Candeias Guaratuba", imagens: ["assets/logo-hotel/Candeias_logo.jpg"], descricao: "...", infoAdicional: [], linkWhatsAppGrupo: null, backupLink: null, acessoRB: null, acessoFlussonic: null, acessoIRD: null, acessoRemoto: null, infoAdm: null },
    "candeias-sanfelice": { nome: "Candeias San Felice", imagens: ["assets/logo-hotel/Candeias_logo.jpg"], descricao: "...", infoAdicional: [], linkWhatsAppGrupo: null, backupLink: null, acessoRB: null, acessoFlussonic: null, acessoIRD: null, acessoRemoto: null, infoAdm: null },
    "candeias-viviane": { nome: "Candeias Viviane", imagens: ["assets/logo-hotel/Candeias_logo.jpg"], descricao: "...", infoAdicional: [], linkWhatsAppGrupo: null, backupLink: null, acessoRB: null, acessoFlussonic: null, acessoIRD: null, acessoRemoto: null, infoAdm: null },
    "candeias-costaverde": { nome: "Candeias Costa Verde", imagens: ["assets/logo-hotel/Candeias_logo.jpg"], descricao: "...", infoAdicional: [], linkWhatsAppGrupo: null, backupLink: null, acessoRB: null, acessoFlussonic: null, acessoIRD: null, acessoRemoto: null, infoAdm: null },
    "candeias-bellavista": { nome: "Candeias Bella Vista", imagens: ["assets/logo-hotel/Candeias_logo.jpg"], descricao: "...", infoAdicional: [], linkWhatsAppGrupo: null, backupLink: null, acessoRB: null, acessoFlussonic: null, acessoIRD: null, acessoRemoto: null, infoAdm: null },
    "candeias-balneario2": { nome: "Candeias Balneario 2", imagens: ["assets/logo-hotel/Candeias_logo.jpg"], descricao: "...", infoAdicional: [], linkWhatsAppGrupo: null, backupLink: null, acessoRB: null, acessoFlussonic: null, acessoIRD: null, acessoRemoto: null, infoAdm: null },
    "candeias-foz": { nome: "Candeias Foz do Iguaçu", imagens: ["assets/logo-hotel/Candeias_logo.jpg"], descricao: "...", infoAdicional: [], linkWhatsAppGrupo: null, backupLink: null, acessoRB: null, acessoFlussonic: null, acessoIRD: null, acessoRemoto: null, infoAdm: null },
    "candeias-camboriu": { nome: "Candeias Camboriú Central", imagens: ["assets/logo-hotel/Candeias_logo.jpg"], descricao: "...", infoAdicional: [], linkWhatsAppGrupo: null, backupLink: null, acessoRB: null, acessoFlussonic: null, acessoIRD: null, acessoRemoto: null, infoAdm: null },
    "candeias-ilhasgregas": { nome: "Candeias Ilhas Gregas", imagens: ["assets/logo-hotel/Candeias_logo.jpg"], descricao: "...", infoAdicional: [], linkWhatsAppGrupo: null, backupLink: null, acessoRB: null, acessoFlussonic: null, acessoIRD: null, acessoRemoto: null, infoAdm: null },
    "slaviero-rockfeler": {
        nome: "Slaviero Rockfeler", imagens: ["assets/logo-hotel/Slavieiro-Curitiba_logo.jpg"], descricao: "Descrição Slaviero Rockfeler...", infoAdicional: [], linkWhatsAppGrupo: null,
        backupLink: null, acessoRB: null, acessoFlussonic: null, acessoIRD: null, acessoRemoto: null, infoAdm: null
    },
    "gav-resorts": {
        nome: "Gav Resorts", imagens: ["assets/logo-hotel/Gav-Resorts_logo.jpg"], descricao: "Descrição Gav Resorts...", infoAdicional: [], linkWhatsAppGrupo: null,
        backupLink: null, acessoRB: null, acessoFlussonic: null, acessoIRD: null, acessoRemoto: null, infoAdm: null
    },
    "hilton-maceio": {
        nome: "Hilton Inn Maceio", imagens: ["assets/logo-hotel/Hilton-Maceio_logo.jpg"], descricao: "Descrição Hilton Inn Maceio...", infoAdicional: [], linkWhatsAppGrupo: null,
        backupLink: null, acessoRB: null, acessoFlussonic: null, acessoIRD: null, acessoRemoto: null, infoAdm: null
    },
    "hilton-tulip": {
        nome: "Hilton Tulip Inn", imagens: ["assets/logo-hotel/Tulip-Inn_logo.jpg"], descricao: "Descrição Hilton Tulip Inn...", infoAdicional: [], linkWhatsAppGrupo: null,
        backupLink: null, acessoRB: null, acessoFlussonic: null, acessoIRD: null, acessoRemoto: null, infoAdm: null
    },
    "bourbon-barrafunda": {
        nome: "Bourbon Barra Funda", imagens: ["assets/logo-hotel/bourbon-rio-barra-funda_logo.jpg"], descricao: "Descrição Bourbon Barra Funda...", infoAdicional: [], linkWhatsAppGrupo: null,
        backupLink: null, acessoRB: null, acessoFlussonic: null, acessoIRD: null, acessoRemoto: null, infoAdm: null
    },
    "center-hotel": {
        nome: "Center Hotel", imagens: ["assets/logo-hotel/center-greenville_logo.jpg"], descricao: "Descrição Center Hotel...", infoAdicional: [], linkWhatsAppGrupo: null,
        backupLink: null, acessoRB: null, acessoFlussonic: null, acessoIRD: null, acessoRemoto: null, infoAdm: null
    },
    "daninn-foz": {
        nome: "Dan inn Foz", imagens: ["assets/logo-hotel/dan-inn_logo.jpg"], descricao: "Descrição Dan inn Foz...", infoAdicional: [], linkWhatsAppGrupo: null,
        backupLink: null, acessoRB: null, acessoFlussonic: null, acessoIRD: null, acessoRemoto: null, infoAdm: null
    },
    "nacionalinn-bh": {
        nome: "Nacional Inn BH", imagens: ["assets/logo-hotel/Nacional-Inn_logo.jpg"], descricao: "Descrição Nacional Inn BH...", infoAdicional: [], linkWhatsAppGrupo: null,
        backupLink: null, acessoRB: null, acessoFlussonic: null, acessoIRD: null, acessoRemoto: null, infoAdm: null
    },
    "nacionalinn-guaruja": {
        nome: "Nacional Inn Guaruja", imagens: ["assets/logo-hotel/Nacional-Inn_logo.jpg"], descricao: "Descrição Nacional Inn Guarujá...", infoAdicional: [], linkWhatsAppGrupo: null,
        backupLink: null, acessoRB: null, acessoFlussonic: null, acessoIRD: null, acessoRemoto: null, infoAdm: null
    },
    "nacionalinn-foz": {
        nome: "Nacional Inn Foz", imagens: ["assets/logo-hotel/Nacional-Inn_logo.jpg"], descricao: "Descrição Nacional Inn Foz...", infoAdicional: [], linkWhatsAppGrupo: null,
        backupLink: null, acessoRB: null, acessoFlussonic: null, acessoIRD: null, acessoRemoto: null, infoAdm: null
    },
    "nacionalinn-ubatuba": {
        nome: "Nacional Inn Ubatuba", imagens: ["assets/logo-hotel/Nacional-Inn_logo.jpg"], descricao: "Descrição Nacional Inn Ubatuba...", infoAdicional: [], linkWhatsAppGrupo: null,
        backupLink: null, acessoRB: null, acessoFlussonic: null, acessoIRD: null, acessoRemoto: null, infoAdm: null
    },
    "nacionalinn-piracicaba": {
        nome: "Nacional Inn Piracicaba", imagens: ["assets/logo-hotel/Nacional-Inn_logo.jpg"], descricao: "Descrição Nacional Inn Piracicaba...", infoAdicional: [], linkWhatsAppGrupo: null,
        backupLink: null, acessoRB: null, acessoFlussonic: null, acessoIRD: null, acessoRemoto: null, infoAdm: null
    },
    "nacionalinn-jaragua": {
        nome: "Nacional Inn Jaraguá", imagens: ["assets/logo-hotel/Nacional-Inn_logo.jpg"], descricao: "Descrição Nacional Inn Jaraguá...", infoAdicional: [], linkWhatsAppGrupo: null,
        backupLink: null, acessoRB: null, acessoFlussonic: null, acessoIRD: null, acessoRemoto: null, infoAdm: null
    },
    "golden-salvador": {
        nome: "Golden Park Salvador", imagens: ["assets/logo-hotel/Golden-park_logo.jpg"], descricao: "Descrição Golden Park Salvador...", infoAdicional: [], linkWhatsAppGrupo: null,
        backupLink: null, acessoRB: null, acessoFlussonic: null, acessoIRD: null, acessoRemoto: null, infoAdm: null
    },
    "daninn-salvador": {
        nome: "Dan Inn Salvador", imagens: ["assets/logo-hotel/dan-inn_logo.jpg"], descricao: "Descrição Dan Inn Salvador...", infoAdicional: [], linkWhatsAppGrupo: null,
        backupLink: null, acessoRB: null, acessoFlussonic: null, acessoIRD: null, acessoRemoto: null, infoAdm: null
    },
    "nacionalinn-alagoinhas": {
        nome: "Nacional inn Alagoinhas", imagens: ["assets/logo-hotel/Nacional-Inn_logo.jpg"], descricao: "Descrição Nacional Inn Alagoinhas...", infoAdicional: [], linkWhatsAppGrupo: null,
        backupLink: null, acessoRB: null, acessoFlussonic: null, acessoIRD: null, acessoRemoto: null, infoAdm: null
    },
    "softinn-alagoinhas": {
        nome: "Soft inn Alagoinhas", imagens: ["assets/logo-hotel/Soft-Inn_logo.jpg"], descricao: "Descrição Soft Inn Alagoinhas...", infoAdicional: [], linkWhatsAppGrupo: null,
        backupLink: null, acessoRB: null, acessoFlussonic: null, acessoIRD: null, acessoRemoto: null, infoAdm: null
    },
    "colline-de-france": {
        nome: "Colline De France", imagens: ["assets/logo-hotel/Colline-De-France_logo.jpg"], descricao: "Descrição Colline De France...", infoAdicional: [], linkWhatsAppGrupo: null,
        backupLink: null, acessoRB: null, acessoFlussonic: null, acessoIRD: null, acessoRemoto: null, infoAdm: null
    },

    // === Hotéis da satelite.html ===
    "san-juan-eco": {
        nome: "San Juan Eco", imagens: ["assets/logo-hotel/San-Juan-Eco_logo.jpg"], descricao: "Descrição San Juan Eco...", infoAdicional: [], linkWhatsAppGrupo: "https://chat.whatsapp.com/E8XYmwIeccoEjTnjcjnqXz",
        backupLink: null, acessoRB: null, acessoFlussonic: null, acessoIRD: null, acessoRemoto: null, infoAdm: null
    },
    "bourbon-cataratas": {
        nome: "Bourbon Cataratas", imagens: ["assets/logo-hotel/bourbon_logo.jpg"], descricao: "Descrição Bourbon Cataratas...", infoAdicional: [], linkWhatsAppGrupo: null,
        backupLink: null, acessoRB: null, acessoFlussonic: null, acessoIRD: null, acessoRemoto: null, infoAdm: null
    },
    "windham-foz": {
        nome: "Windham Foz", imagens: ["assets/logo-hotel/Windhan-Foz_logo.jpg"], descricao: "Descrição Wyndham Foz...", infoAdicional: [], linkWhatsAppGrupo: null,
        backupLink: null, acessoRB: null, acessoFlussonic: null, acessoIRD: null, acessoRemoto: null, infoAdm: null
    },
    "golden-park-foz": {
        nome: "Golden Park Foz", imagens: ["assets/logo-hotel/Golden-park_logo.jpg"], descricao: "Descrição Golden Park Foz...", infoAdicional: [], linkWhatsAppGrupo: null,
        backupLink: null, acessoRB: null, acessoFlussonic: null, acessoIRD: null, acessoRemoto: null, infoAdm: null
    },
    "nadai": {
        nome: "Nadai", imagens: ["assets/logo-hotel/Nadai_logo.jpg"], descricao: "Descrição Nadai...", infoAdicional: [], linkWhatsAppGrupo: null,
        backupLink: null, acessoRB: null, acessoFlussonic: null, acessoIRD: null, acessoRemoto: null, infoAdm: null
    },
    "foz-plaza": {
        nome: "Foz Plaza", imagens: ["assets/logo-hotel/Foz-plaza_logo.jpg"], descricao: "Descrição Foz Plaza...", infoAdicional: [], linkWhatsAppGrupo: null,
        backupLink: null, acessoRB: null, acessoFlussonic: null, acessoIRD: null, acessoRemoto: null, infoAdm: null
    },
    "bourbon-jl": {
        nome: "Bourbon JL", imagens: ["assets/logo-hotel/JL-Bourbon_logo.jpg"], descricao: "Descrição JL Hotel by Bourbon...", infoAdicional: [], linkWhatsAppGrupo: null,
        backupLink: null, acessoRB: null, acessoFlussonic: null, acessoIRD: null, acessoRemoto: null, infoAdm: null
    },
    "days-inn-cascavel": {
        nome: "Days Inn Cascavel", imagens: ["assets/logo-hotel/Days-inn-Cascavel_logo.jpg"], descricao: "Descrição Days Inn Cascavel...", infoAdicional: [], linkWhatsAppGrupo: null,
        backupLink: null, acessoRB: null, acessoFlussonic: null, acessoIRD: null, acessoRemoto: null, infoAdm: null
    },
    "ibis-cascavel": {
        nome: "Ibis Cascavel", imagens: ["assets/logo-hotel/Hibis_logo.jpg"], descricao: "Descrição Ibis Cascavel...", infoAdicional: [], linkWhatsAppGrupo: null,
        backupLink: null, acessoRB: null, acessoFlussonic: null, acessoIRD: null, acessoRemoto: null, infoAdm: null
    },
    "harbor-cascavel": {
        nome: "Harbor Cascavel", imagens: ["assets/logo-hotel/Harbor-Cascavel_logo.jpg"], descricao: "Descrição Harbor Querencia Hotel...", infoAdicional: [], linkWhatsAppGrupo: null,
        backupLink: null, acessoRB: null, acessoFlussonic: null, acessoIRD: null, acessoRemoto: null, infoAdm: null
    },
    "copas-executive-cascavel": {
        nome: "Copas Executive Cascavel", imagens: ["assets/logo-hotel/Copas-executivo_logo.jpg"], descricao: "Descrição Copas Executive...", infoAdicional: [], linkWhatsAppGrupo: null,
        backupLink: null, acessoRB: null, acessoFlussonic: null, acessoIRD: null, acessoRemoto: null, infoAdm: null
    },
    "copas-verde-cascavel": {
        nome: "Copas Verde Cascavel", imagens: ["assets/logo-hotel/Copas-Verde_logo.jpg"], descricao: "Descrição Copas Verde...", infoAdicional: [], linkWhatsAppGrupo: null,
        backupLink: null, acessoRB: null, acessoFlussonic: null, acessoIRD: null, acessoRemoto: null, infoAdm: null
    },
    "vivas-cataratas": {
        nome: "Vivaz Cataratas", imagens: ["assets/logo-hotel/Vivaz-Cataratas_logo.jpg"], descricao: "Descrição Vivaz Cataratas...", infoAdicional: [], linkWhatsAppGrupo: null,
        backupLink: null, acessoRB: null, acessoFlussonic: null, acessoIRD: null, acessoRemoto: null, infoAdm: null
    },
    "arcas-toledo": {
        nome: "Arcas Toledo", imagens: ["assets/logo-hotel/Arcas_logo.jpg"], descricao: "Descrição Arcas Toledo...", infoAdicional: [], linkWhatsAppGrupo: null,
        backupLink: null, acessoRB: null, acessoFlussonic: null, acessoIRD: null, acessoRemoto: null, infoAdm: null
    }

    // Adicione NOVOS HOTEIS AQUI MANTENDO O FORMATO
};