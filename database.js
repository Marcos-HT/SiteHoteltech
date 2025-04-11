// ==================================================
// ==          BANCO DE DADOS DOS HOTÉIS           ==
// ==================================================
// Arquivo centralizado com todos os dados dos hotéis.
// IMPORTANTE: Preencha os dados técnicos (acessoRB, acessoFlussonic, etc.)
// marcados como 'null' ou com placeholders para TODOS os hotéis.

const hotelDatabase = {
    // === Hotéis da index.html ===
    "bourbon-curitiba": {
        nome: "Bourbon Curitiba", // Nome oficial: Bourbon Curitiba Hotel & Suites
        imagens: ["assets/logo-hotel/bourbon_logo.jpg"],
        descricao: "O Bourbon Curitiba Convention Hotel está localizado no centro de Curitiba, próximo aos principais pontos turísticos e centros empresariais. Oferece apartamentos e suítes modernas, além de uma completa estrutura para eventos e lazer.",
        infoAdicional: [
            { titulo: "Endereço", valor: "R. Cândido Lopes, 102 - Centro, Curitiba - PR, 80020-060" },
            { titulo: "Telefone", valor: "(41) 3221-4600" },
            { titulo: "Website", valor: "<a href='https://www.bourbon.com.br/hotel/bourbon-curitiba' target='_blank'>Site Oficial</a>" } // Link site Bourbon Curitiba Hotel & Suites
        ],
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
        infoAdicional: [
            { titulo: "Endereço", valor: "Rua Jacob Holzmann, 219 - Olarias, Ponta Grossa - PR, 84035-290" },
            { titulo: "Telefone", valor: "(42) 3220-3700" },
            { titulo: "Website", valor: "<a href='https://www.bourbon.com.br' target='_blank'>bourbon.com.br</a>" } // Link genérico Bourbon
        ],
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
        descricao: "Hotel próximo ao Aeroporto Afonso Pena em São José dos Pinhais, oferecendo conveniência com transfer cortesia (check-in/out), apartamentos modernos, restaurante Viccenza, fitness center, room service 24h e estrutura para eventos. Ideal para quem viaja ou precisa de fácil acesso ao aeroporto.",
        infoAdicional: [
            { titulo: "Endereço", valor: "Av. Rocha Pombo, 2400 - Águas Belas, São José dos Pinhais - PR, 83010-620" },
            { titulo: "Telefone", valor: "(41) 3299-2400" },
            { titulo: "Website", valor: "<a href='https://www.bourbon.com.br/hotel/bourbon-dom-ricardo-hotel' target='_blank'>Site Oficial</a>" }
        ],
        backupLink: null,
        acessoRB: { ovpn: "10.31.0.108:8580", ipLocal: "192.168.0.107", user: "hoteltech", senha: "@ht2020*!" },
        acessoFlussonic: { ovpn: "10.31.0.141", ipRede: "192.168.10.242", portaSSH: 3050, portaWeb: 8583, userSSH: "hoteltech", senhaSSH: "@ht2020*", userWeb: "hoteltech", senhaWeb: "@ht2020*", linkWeb: "http://10.31.0.108:8583" },
        acessoIRD: { ovpn: "10.31.0.108:8581", ipRede: "192.168.0.136", user: "hoteltech", senha: "@ht2020*", linkWeb: "http://10.31.0.108:8581" },
        acessoRemoto: null, // Confirmado que não há acesso remoto padrão
        infoAdm: null
    },
    "bourbon-rio": { // Rio Hotel by Bourbon Curitiba Batel
        nome: "Rio Hotel by Bourbon Curitiba Batel",
        imagens: ["assets/logo-hotel/bourbon_logo.jpg"], // Usar logo específico se houver
        descricao: "Localizado no bairro Batel em Curitiba, este hotel foca em praticidade e conforto com um ambiente acolhedor e funcional. Oferece fitness center, passadoria (auto-serviço), terraço para eventos com vista panorâmica e recepção/room service 24h.",
        infoAdicional: [
            { titulo: "Endereço", valor: "Av. Visconde de Guarapuava, 4889 - Batel, Curitiba - PR, 80240-010" },
            { titulo: "Telefone", valor: "(41) 3342-7990" },
            { titulo: "Website", valor: "<a href='https://www.bourbon.com.br/hotelrio/rio-hotel-by-bourbon-curitiba-batel' target='_blank'>Site Oficial</a>" }
        ],
        backupLink: null, // Não fornecido
        acessoRB: "Este Hotel não tem RB", // Mensagem personalizada
        acessoFlussonic: { ovpn: "187.95.152.50", ipRede: "192.168.0.241", portaSSH: 3055, portaWeb: 8081, userSSH: "hotel", senhaSSH: "@ht2020*", userWeb: "hoteltech", senhaWeb: "@ht2020*", linkWeb: "http://187.95.152.50:8081" }, // Dados fornecidos na última msg
        acessoIRD: "O acesso no IRD e feito atravez do mini pc do canal institucional do hotel.", // Mensagem personalizada (OBS fornecida)
        acessoRemoto: { tipo: "Canal Institucional", anydesk: "1937162446", senha: "@ht2020*" }, // Dados fornecidos na última msg
        infoAdm: null // Não fornecido
    },
    "viale-cataratas": {
        nome: "Viale Cataratas Hotel & Eventos",
        imagens: ["assets/logo-hotel/Vialle-Cataratas_logo.jpg"],
        descricao: "Hotel contemporâneo em Foz do Iguaçu, localizado na Avenida das Cataratas. Possui quartos e suítes casuais, restaurante, academia, piscina externa e estrutura para eventos.",
        infoAdicional: [
            { titulo: "Endereço", valor: "Av. das Cataratas, 2420 - Vila Yolanda, Foz do Iguaçu - PR, 85853-000" },
            { titulo: "Telefone", valor: "(45) 2105-7200" },
            { titulo: "Website", valor: "<a href='https://www.vialehoteis.com.br/' target='_blank'>Site Oficial (Rede)</a>" }
        ],
        backupLink: null, // Não fornecido
        acessoRB: { ovpn: "10.31.0.58:8580", ipLocal: "192.168.1.5", user: "hoteltech", senha: "@ht2020*!" }, // Dados padrão fornecidos
        acessoFlussonic: { ovpn: "10.31.0.143", ipRede: "192.168.88.248", portaSSH: 3055, portaWeb: 8080, userSSH: "hoteltech", senhaSSH: "@ht2020*", userWeb: "admin", senhaWeb: "@ht2020*", linkWeb: "http://10.31.0.143:8080" }, // Nota: OVPN do SSH (.143) diferente do listado para Web (.58). LinkWeb usa o IP da Web (.58). Favor verificar.
        acessoIRD: { ovpn: "10.31.0.58:9090", ipRede: "192.168.88.136", user: "admin", senha: "admin", linkWeb: "http://10.31.0.58:9090" }, // Dados padrão fornecidos. LinkWeb construído.
        acessoRemoto: { tipo: "Canal Institucional", anydesk: "1089743902", senha: "@ht2020*" },
        infoAdm: null // Não fornecido
    },
    "viale-tower": {
        nome: "Viale Tower", imagens: ["assets/logo-hotel/Vialle-Tower_logo.jpg"], descricao: "Descrição do Viale Tower...", infoAdicional: [],
        backupLink: null, acessoRB: null, acessoFlussonic: null, acessoIRD: null, acessoRemoto: null, infoAdm: null // PREENCHER DADOS TÉCNICOS
    },
    "doubletree-hilton": { // Foz do Iguaçu?
        nome: "DoubleTree by Hilton", imagens: ["assets/logo-hotel/By-Hilton_logo.jpg"], descricao: "Descrição do DoubleTree by Hilton Foz...", infoAdicional: [],
        backupLink: null, acessoRB: null, acessoFlussonic: null, acessoIRD: null, acessoRemoto: null, infoAdm: null // PREENCHER DADOS TÉCNICOS
    },
    "intercity-canoas": {
        nome: "Intercity Canoas", imagens: ["assets/logo-hotel/intercity-canoas_logo.jpg"], descricao: "Descrição do Intercity Canoas...", infoAdicional: [],
        backupLink: null, acessoRB: null, acessoFlussonic: null, acessoIRD: null, acessoRemoto: null, infoAdm: null // PREENCHER DADOS TÉCNICOS
    },
    "bristol-sabrina": { // Localização?
        nome: "Bristol Sabrina", imagens: ["assets/logo-hotel/Bristol-Sabrina_logo.jpg"], descricao: "Descrição do Bristol Sabrina...", infoAdicional: [],
        backupLink: null, acessoRB: null, acessoFlussonic: null, acessoIRD: null, acessoRemoto: null, infoAdm: null // PREENCHER DADOS TÉCNICOS
    },
    "bristol-infinity": { // Localização?
        nome: "Bristol Infinity", imagens: ["assets/logo-hotel/Bristol-Infinity_logo.jpg"], descricao: "Descrição do Bristol Infinity...", infoAdicional: [],
        backupLink: null, acessoRB: null, acessoFlussonic: null, acessoIRD: null, acessoRemoto: null, infoAdm: null // PREENCHER DADOS TÉCNICOS
    },
    "bristol-santo-andre": {
        nome: "Bristol Santo André", imagens: ["assets/logo-hotel/Bristol-Santo-Andre_logo.jpg"], descricao: "Descrição do Bristol Santo André...", infoAdicional: [],
        backupLink: null, acessoRB: null, acessoFlussonic: null, acessoIRD: null, acessoRemoto: null, infoAdm: null // PREENCHER DADOS TÉCNICOS
    },
    "capivari-ecoresort": {
        nome: "Capivari Ecoresort", imagens: ["assets/logo-hotel/Capivari_logo.jpg"], descricao: "Descrição do Capivari Ecoresort...", infoAdicional: [],
        backupLink: null, acessoRB: null, acessoFlussonic: null, acessoIRD: null, acessoRemoto: null, infoAdm: null // PREENCHER DADOS TÉCNICOS
    },
    "my-mabu": { // ID simplificado
        nome: "My Mabu", imagens: ["assets/logo-hotel/My-Mabu_logo.jpg"], descricao: "Descrição do My Mabu...", infoAdicional: [],
        backupLink: null, acessoRB: null, acessoFlussonic: null, acessoIRD: null, acessoRemoto: null, infoAdm: null // PREENCHER DADOS TÉCNICOS
    },
    "fazzenda-park": { // ID simplificado
        nome: "Fazzenda Park", imagens: ["assets/logo-hotel/Fazenda-Park_logo.jpg"], descricao: "Descrição do Fazzenda Park...", infoAdicional: [],
        backupLink: null, acessoRB: null, acessoFlussonic: null, acessoIRD: null, acessoRemoto: null, infoAdm: null // PREENCHER DADOS TÉCNICOS
    },
    "gloria-blumenau": { // ID simplificado
        nome: "Gloria Blumenau", imagens: ["assets/logo-hotel/Gloria_logo.jpg"], descricao: "Descrição do Hotel Gloria Blumenau...", infoAdicional: [],
        backupLink: null, acessoRB: null, acessoFlussonic: null, acessoIRD: null, acessoRemoto: null, infoAdm: null // PREENCHER DADOS TÉCNICOS
    },
    "bluetree-verbo-divino": { // São Paulo
        nome: "Blue Tree Verbo Divino", imagens: ["assets/logo-hotel/Blue-tree_logo.jpg"], descricao: "Descrição do Blue Tree Verbo Divino...", infoAdicional: [],
        backupLink: null, acessoRB: null, acessoFlussonic: null, acessoIRD: null, acessoRemoto: null, infoAdm: null // PREENCHER DADOS TÉCNICOS
    },
    "aqualand": { // Salinas PR?
        nome: "Aqualand", imagens: ["assets/logo-hotel/Aqualand_logo.jpg"], descricao: "Descrição do Aqualand...", infoAdicional: [],
        backupLink: null, acessoRB: null, acessoFlussonic: null, acessoIRD: null, acessoRemoto: null, infoAdm: null // PREENCHER DADOS TÉCNICOS
    },
    "amazon-taiama": { // Cuiabá?
        nome: "Amazon Taiamã", imagens: ["assets/logo-hotel/Amazon_logo.jpg"], descricao: "Descrição do Amazon Taiamã...", infoAdicional: [],
        backupLink: null, acessoRB: null, acessoFlussonic: null, acessoIRD: null, acessoRemoto: null, infoAdm: null // PREENCHER DADOS TÉCNICOS
    },
    "amazon-plaza": { // Cuiabá?
        nome: "Amazon Plaza", imagens: ["assets/logo-hotel/Amazon_logo.jpg"], descricao: "Descrição do Amazon Plaza...", infoAdicional: [],
        backupLink: null, acessoRB: null, acessoFlussonic: null, acessoIRD: null, acessoRemoto: null, infoAdm: null // PREENCHER DADOS TÉCNICOS
    },
    "amazon-aeroporto": { // Várzea Grande?
        nome: "Amazon Aeroporto", imagens: ["assets/logo-hotel/Amazon_logo.jpg"], descricao: "Descrição do Amazon Aeroporto...", infoAdicional: [],
        backupLink: null, acessoRB: null, acessoFlussonic: null, acessoIRD: null, acessoRemoto: null, infoAdm: null // PREENCHER DADOS TÉCNICOS
    },
    "fazenda-3-pinheiros": {
        nome: "Fazenda 3 Pinheiros", imagens: ["assets/logo-hotel/Fazenda-3-Pinheiros_logo.jpg"], descricao: "Descrição da Fazenda 3 Pinheiros...", infoAdicional: [],
        backupLink: null, acessoRB: null, acessoFlussonic: null, acessoIRD: null, acessoRemoto: null, infoAdm: null // PREENCHER DADOS TÉCNICOS
    },
    "chocoland": { // Gramado?
        nome: "Chocoland", imagens: ["assets/logo-hotel/Chocoland_logo.jpg"], descricao: "Descrição do Chocoland...", infoAdicional: [],
        backupLink: null, acessoRB: null, acessoFlussonic: null, acessoIRD: null, acessoRemoto: null, infoAdm: null // PREENCHER DADOS TÉCNICOS
    },
    "ouro-minas": { // ID simplificado (era ouro-minas-wifi) - BH?
        nome: "Ouro Minas", imagens: ["assets/logo-hotel/Ouro-minas_logo.jpg"], descricao: "Descrição do Ouro Minas...", infoAdicional: [],
        backupLink: null, acessoRB: null, acessoFlussonic: null, acessoIRD: null, acessoRemoto: null, infoAdm: null // PREENCHER DADOS TÉCNICOS
    },
    "intercity-bavaria": { // Gramado?
        nome: "Intercity Bavaria Sport", imagens: ["assets/logo-hotel/intercity-Bavaria_logo.jpg"], descricao: "Descrição do Intercity Bavaria Sport...", infoAdicional: [],
        backupLink: null, acessoRB: null, acessoFlussonic: null, acessoIRD: null, acessoRemoto: null, infoAdm: null // PREENCHER DADOS TÉCNICOS
    },
    "japy-golf": { // Cabreúva?
        nome: "Japy Golf Resort", imagens: ["assets/logo-hotel/Japy-Golf_logo.jpg"], descricao: "Descrição do Japy Golf Resort...", infoAdicional: [],
        backupLink: null, acessoRB: null, acessoFlussonic: null, acessoIRD: null, acessoRemoto: null, infoAdm: null // PREENCHER DADOS TÉCNICOS
    },
    "thermas-walter-world": { // Poços de Caldas?
        nome: "Thermas Resort Walter World", imagens: ["assets/logo-hotel/Thermas-Poços-de-caldas_logo.jpg"], descricao: "Descrição do Thermas Resort Walter World...", infoAdicional: [],
        backupLink: null, acessoRB: null, acessoFlussonic: null, acessoIRD: null, acessoRemoto: null, infoAdm: null // PREENCHER DADOS TÉCNICOS
    },
    "vilage-inn": { // Poços de Caldas?
        nome: "Vilage Inn", imagens: ["assets/logo-hotel/Vilage-inn_logo.jpg"], descricao: "Descrição do Vilage Inn...", infoAdicional: [],
        backupLink: null, acessoRB: null, acessoFlussonic: null, acessoIRD: null, acessoRemoto: null, infoAdm: null // PREENCHER DADOS TÉCNICOS
    },
    "golden-pocos": { // Poços de Caldas
        nome: "Golden Park Poços de Caldas", imagens: ["assets/logo-hotel/Golden-park_logo.jpg"], descricao: "Descrição do Golden Park Poços de Caldas...", infoAdicional: [],
        backupLink: null, acessoRB: null, acessoFlussonic: null, acessoIRD: null, acessoRemoto: null, infoAdm: null // PREENCHER DADOS TÉCNICOS
    },
    "jurema": { // Iretama?
        nome: "Jurema Águas Quentes", imagens: ["assets/logo-hotel/Jurema_logo.jpg"], descricao: "Descrição do Jurema Águas Quentes...", infoAdicional: [],
        backupLink: null, acessoRB: null, acessoFlussonic: null, acessoIRD: null, acessoRemoto: null, infoAdm: null // PREENCHER DADOS TÉCNICOS
    },
    "thermas-olimpia": { // Olímpia SP? Wyndham?
        nome: "Thermas Park Olimpia", imagens: ["assets/logo-hotel/Thermas-Park-Olimpia_logo.jpg"], descricao: "Descrição do Thermas Park Olimpia...", infoAdicional: [],
        backupLink: null, acessoRB: null, acessoFlussonic: null, acessoIRD: null, acessoRemoto: null, infoAdm: null // PREENCHER DADOS TÉCNICOS
    },
    "hospital-evangelico": { // Curitiba?
        nome: "Hospital Evangélico", imagens: ["assets/logo-hotel/Hospital-Evangelico_logo.jpg"], descricao: "Descrição do Hospital Evangélico...", infoAdicional: [],
        backupLink: null, acessoRB: null, acessoFlussonic: null, acessoIRD: null, acessoRemoto: null, infoAdm: null // PREENCHER DADOS TÉCNICOS
    },
    "hospital-inc": { // Curitiba
        nome: "Hospital Inc Curitiba", imagens: ["assets/logo-hotel/hospital-inc_logo.jpg"], descricao: "Descrição do Hospital Inc...", infoAdicional: [],
        backupLink: null, acessoRB: null, acessoFlussonic: null, acessoIRD: null, acessoRemoto: null, infoAdm: null // PREENCHER DADOS TÉCNICOS
    },
    "sun-city": { // Ciudad del Este PY?
        nome: "Sun City", imagens: ["assets/logo-hotel/sun-city_logo.jpg"], descricao: "Descrição do Sun City...", infoAdicional: [],
        backupLink: null, acessoRB: null, acessoFlussonic: null, acessoIRD: null, acessoRemoto: null, infoAdm: null // PREENCHER DADOS TÉCNICOS
    },
    "mabu-business": { // Curitiba? Mabu Curitiba Business
        nome: "Mabu Curitiba Business", imagens: ["assets/logo-hotel/mabu-curitiba_logo.jpg"], descricao: "Descrição do Mabu Curitiba Business...", infoAdicional: [],
        backupLink: null, acessoRB: null, acessoFlussonic: null, acessoIRD: null, acessoRemoto: null, infoAdm: null // PREENCHER DADOS TÉCNICOS
    },
    "westin-porto": { // Porto de Galinhas?
        nome: "Westin Porto de Galinhas", imagens: ["assets/logo-hotel/PGA_logo.jpg"], descricao: "Descrição do Westin Porto de Galinhas...", infoAdicional: [],
        backupLink: null, acessoRB: null, acessoFlussonic: null, acessoIRD: null, acessoRemoto: null, infoAdm: null // PREENCHER DADOS TÉCNICOS
    },
    // --- CANDEIAS --- (Muitos precisam de dados técnicos)
    "candeias-picarras": {
        nome: "Candeias Piçarras", imagens: ["assets/logo-hotel/Candeias_logo.jpg"], descricao: "Descrição Candeias Piçarras...", infoAdicional: [],
        backupLink: null, acessoRB: null, acessoFlussonic: null, acessoIRD: null, acessoRemoto: null, infoAdm: null
    },
    "candeias-guaruja": {
        nome: "Candeias Guarujá", imagens: ["assets/logo-hotel/Candeias_logo.jpg"], descricao: "Descrição Candeias Guarujá...", infoAdicional: [],
        backupLink: null, acessoRB: null, acessoFlussonic: null, acessoIRD: null, acessoRemoto: null, infoAdm: null
    },
    "candeias-goldfish": {
        nome: "Candeias Gold Fish", imagens: ["assets/logo-hotel/Candeias_logo.jpg"], descricao: "Descrição Candeias Gold Fish...", infoAdicional: [],
        backupLink: null, acessoRB: null, acessoFlussonic: null, acessoIRD: null, acessoRemoto: null, infoAdm: null
    },
    "candeias-complexo": {
        nome: "Candeias Complexo Turístico", imagens: ["assets/logo-hotel/Candeias_logo.jpg"], descricao: "Descrição Candeias Complexo...", infoAdicional: [],
        backupLink: null, acessoRB: null, acessoFlussonic: null, acessoIRD: null, acessoRemoto: null, infoAdm: null
    },
    "candeias-parador": {
        nome: "Candeias Parador Cachoeira", imagens: ["assets/logo-hotel/Candeias_logo.jpg"], descricao: "Descrição Candeias Parador...", infoAdicional: [],
        backupLink: null, acessoRB: null, acessoFlussonic: null, acessoIRD: null, acessoRemoto: null, infoAdm: null
    },
    "candeias-caioba": {
        nome: "Candeias Caiobá", imagens: ["assets/logo-hotel/Candeias_logo.jpg"], descricao: "Descrição Candeias Caiobá...", infoAdicional: [],
        backupLink: null, acessoRB: null, acessoFlussonic: null, acessoIRD: null, acessoRemoto: null, infoAdm: null
    },
    "candeias-ubatuba": {
        nome: "Candeias Ubatuba", imagens: ["assets/logo-hotel/Candeias_logo.jpg"], descricao: "Descrição Candeias Ubatuba...", infoAdicional: [],
        backupLink: null, acessoRB: null, acessoFlussonic: null, acessoIRD: null, acessoRemoto: null, infoAdm: null
    },
    "candeias-guarany": {
        nome: "Candeias Guarany", imagens: ["assets/logo-hotel/Candeias_logo.jpg"], descricao: "Descrição Candeias Guarany...", infoAdicional: [],
        backupLink: null, acessoRB: null, acessoFlussonic: null, acessoIRD: null, acessoRemoto: null, infoAdm: null
    },
    "candeias-guaratuba": { // Nome sem espaço no HTML original
        nome: "Candeias Guaratuba", imagens: ["assets/logo-hotel/Candeias_logo.jpg"], descricao: "Descrição Candeias Guaratuba...", infoAdicional: [],
        backupLink: null, acessoRB: null, acessoFlussonic: null, acessoIRD: null, acessoRemoto: null, infoAdm: null
    },
    "candeias-sanfelice": {
        nome: "Candeias San Felice", imagens: ["assets/logo-hotel/Candeias_logo.jpg"], descricao: "Descrição Candeias San Felice...", infoAdicional: [],
        backupLink: null, acessoRB: null, acessoFlussonic: null, acessoIRD: null, acessoRemoto: null, infoAdm: null
    },
    "candeias-viviane": {
        nome: "Candeias Viviane", imagens: ["assets/logo-hotel/Candeias_logo.jpg"], descricao: "Descrição Candeias Viviane...", infoAdicional: [],
        backupLink: null, acessoRB: null, acessoFlussonic: null, acessoIRD: null, acessoRemoto: null, infoAdm: null
    },
    "candeias-costaverde": {
        nome: "Candeias Costa Verde", imagens: ["assets/logo-hotel/Candeias_logo.jpg"], descricao: "Descrição Candeias Costa Verde...", infoAdicional: [],
        backupLink: null, acessoRB: null, acessoFlussonic: null, acessoIRD: null, acessoRemoto: null, infoAdm: null
    },
    "candeias-bellavista": {
        nome: "Candeias Bella Vista", imagens: ["assets/logo-hotel/Candeias_logo.jpg"], descricao: "Descrição Candeias Bella Vista...", infoAdicional: [],
        backupLink: null, acessoRB: null, acessoFlussonic: null, acessoIRD: null, acessoRemoto: null, infoAdm: null
    },
    "candeias-balneario2": {
        nome: "Candeias Balneario 2", imagens: ["assets/logo-hotel/Candeias_logo.jpg"], descricao: "Descrição Candeias Balneario 2...", infoAdicional: [],
        backupLink: null, acessoRB: null, acessoFlussonic: null, acessoIRD: null, acessoRemoto: null, infoAdm: null
    },
    "candeias-foz": {
        nome: "Candeias Foz do Iguaçu", imagens: ["assets/logo-hotel/Candeias_logo.jpg"], descricao: "Descrição Candeias Foz...", infoAdicional: [],
        backupLink: null, acessoRB: null, acessoFlussonic: null, acessoIRD: null, acessoRemoto: null, infoAdm: null
    },
    "candeias-camboriu": {
        nome: "Candeias Camboriú Central", imagens: ["assets/logo-hotel/Candeias_logo.jpg"], descricao: "Descrição Candeias Camboriú...", infoAdicional: [],
        backupLink: null, acessoRB: null, acessoFlussonic: null, acessoIRD: null, acessoRemoto: null, infoAdm: null
    },
    "candeias-ilhasgregas": {
        nome: "Candeias Ilhas Gregas", imagens: ["assets/logo-hotel/Candeias_logo.jpg"], descricao: "Descrição Candeias Ilhas Gregas...", infoAdicional: [],
        backupLink: null, acessoRB: null, acessoFlussonic: null, acessoIRD: null, acessoRemoto: null, infoAdm: null
    },
    // --- FIM CANDEIAS ---
    "slaviero-rockfeler": { // Curitiba?
        nome: "Slaviero Rockfeler", imagens: ["assets/logo-hotel/Slavieiro-Curitiba_logo.jpg"], descricao: "Descrição Slaviero Rockfeler...", infoAdicional: [],
        backupLink: null, acessoRB: null, acessoFlussonic: null, acessoIRD: null, acessoRemoto: null, infoAdm: null
    },
    "gav-resorts": { // Localização?
        nome: "Gav Resorts", imagens: ["assets/logo-hotel/Gav-Resorts_logo.jpg"], descricao: "Descrição Gav Resorts...", infoAdicional: [],
        backupLink: null, acessoRB: null, acessoFlussonic: null, acessoIRD: null, acessoRemoto: null, infoAdm: null
    },
    "hilton-maceio": { // Hilton Garden Inn Maceio?
        nome: "Hilton Inn Maceio", imagens: ["assets/logo-hotel/Hilton-Maceio_logo.jpg"], descricao: "Descrição Hilton Inn Maceio...", infoAdicional: [],
        backupLink: null, acessoRB: null, acessoFlussonic: null, acessoIRD: null, acessoRemoto: null, infoAdm: null
    },
    "hilton-tulip": { // Tulip Inn? Onde? Relacionado ao Hilton?
        nome: "Hilton Tulip Inn", imagens: ["assets/logo-hotel/Tulip-Inn_logo.jpg"], descricao: "Descrição Hilton Tulip Inn...", infoAdicional: [],
        backupLink: null, acessoRB: null, acessoFlussonic: null, acessoIRD: null, acessoRemoto: null, infoAdm: null
    },
    "bourbon-barrafunda": { // São Paulo? Rio Hotel by Bourbon SP Barra Funda?
        nome: "Bourbon Barra Funda", imagens: ["assets/logo-hotel/bourbon-rio-barra-funda_logo.jpg"], descricao: "Descrição Bourbon Barra Funda...", infoAdicional: [],
        backupLink: null, acessoRB: null, acessoFlussonic: null, acessoIRD: null, acessoRemoto: null, infoAdm: null
    },
    "center-hotel": { // Greenville? Onde?
        nome: "Center Hotel", imagens: ["assets/logo-hotel/center-greenville_logo.jpg"], descricao: "Descrição Center Hotel...", infoAdicional: [],
        backupLink: null, acessoRB: null, acessoFlussonic: null, acessoIRD: null, acessoRemoto: null, infoAdm: null
    },
    "daninn-foz": { // Foz do Iguaçu
        nome: "Dan inn Foz", imagens: ["assets/logo-hotel/dan-inn_logo.jpg"], descricao: "Descrição Dan inn Foz...", infoAdicional: [],
        backupLink: null, acessoRB: null, acessoFlussonic: null, acessoIRD: null, acessoRemoto: null, infoAdm: null
    },
    "nacionalinn-bh": { // Belo Horizonte
        nome: "Nacional Inn BH", imagens: ["assets/logo-hotel/Nacional-Inn_logo.jpg"], descricao: "Descrição Nacional Inn BH...", infoAdicional: [],
        backupLink: null, acessoRB: null, acessoFlussonic: null, acessoIRD: null, acessoRemoto: null, infoAdm: null
    },
    "nacionalinn-guaruja": { // Guarujá
        nome: "Nacional Inn Guaruja", imagens: ["assets/logo-hotel/Nacional-Inn_logo.jpg"], descricao: "Descrição Nacional Inn Guarujá...", infoAdicional: [],
        backupLink: null, acessoRB: null, acessoFlussonic: null, acessoIRD: null, acessoRemoto: null, infoAdm: null
    },
    "nacionalinn-foz": { // Foz do Iguaçu
        nome: "Nacional Inn Foz", imagens: ["assets/logo-hotel/Nacional-Inn_logo.jpg"], descricao: "Descrição Nacional Inn Foz...", infoAdicional: [],
        backupLink: null, acessoRB: null, acessoFlussonic: null, acessoIRD: null, acessoRemoto: null, infoAdm: null
    },
    "nacionalinn-ubatuba": { // Ubatuba
        nome: "Nacional Inn Ubatuba", imagens: ["assets/logo-hotel/Nacional-Inn_logo.jpg"], descricao: "Descrição Nacional Inn Ubatuba...", infoAdicional: [],
        backupLink: null, acessoRB: null, acessoFlussonic: null, acessoIRD: null, acessoRemoto: null, infoAdm: null
    },
    "nacionalinn-piracicaba": { // Piracicaba
        nome: "Nacional Inn Piracicaba", imagens: ["assets/logo-hotel/Nacional-Inn_logo.jpg"], descricao: "Descrição Nacional Inn Piracicaba...", infoAdicional: [],
        backupLink: null, acessoRB: null, acessoFlussonic: null, acessoIRD: null, acessoRemoto: null, infoAdm: null
    },
    "nacionalinn-jaragua": { // Jaraguá do Sul?
        nome: "Nacional Inn Jaraguá", imagens: ["assets/logo-hotel/Nacional-Inn_logo.jpg"], descricao: "Descrição Nacional Inn Jaraguá...", infoAdicional: [],
        backupLink: null, acessoRB: null, acessoFlussonic: null, acessoIRD: null, acessoRemoto: null, infoAdm: null
    },
    "golden-salvador": { // Salvador
        nome: "Golden Park Salvador", imagens: ["assets/logo-hotel/Golden-park_logo.jpg"], descricao: "Descrição Golden Park Salvador...", infoAdicional: [],
        backupLink: null, acessoRB: null, acessoFlussonic: null, acessoIRD: null, acessoRemoto: null, infoAdm: null
    },
    "daninn-salvador": { // Salvador
        nome: "Dan Inn Salvador", imagens: ["assets/logo-hotel/dan-inn_logo.jpg"], descricao: "Descrição Dan Inn Salvador...", infoAdicional: [],
        backupLink: null, acessoRB: null, acessoFlussonic: null, acessoIRD: null, acessoRemoto: null, infoAdm: null
    },
    "nacionalinn-alagoinhas": { // Alagoinhas BA
        nome: "Nacional inn Alagoinhas", imagens: ["assets/logo-hotel/Nacional-Inn_logo.jpg"], descricao: "Descrição Nacional Inn Alagoinhas...", infoAdicional: [],
        backupLink: null, acessoRB: null, acessoFlussonic: null, acessoIRD: null, acessoRemoto: null, infoAdm: null
    },
    "softinn-alagoinhas": { // Alagoinhas BA
        nome: "Soft inn Alagoinhas", imagens: ["assets/logo-hotel/Soft-Inn_logo.jpg"], descricao: "Descrição Soft Inn Alagoinhas...", infoAdicional: [],
        backupLink: null, acessoRB: null, acessoFlussonic: null, acessoIRD: null, acessoRemoto: null, infoAdm: null
    },
    "colline-de-france": { // Gramado
        nome: "Colline De France", imagens: ["assets/logo-hotel/Colline-De-France_logo.jpg"], descricao: "Descrição Colline De France...", infoAdicional: [],
        backupLink: null, acessoRB: null, acessoFlussonic: null, acessoIRD: null, acessoRemoto: null, infoAdm: null
    },

    // === Hotéis da satelite.html ===
    "san-juan-eco": { // Foz do Iguaçu?
        nome: "San Juan Eco", imagens: ["assets/logo-hotel/San-Juan-Eco_logo.jpg"], descricao: "Descrição San Juan Eco...", infoAdicional: [],
        backupLink: null, acessoRB: null, acessoFlussonic: null, acessoIRD: null, acessoRemoto: null, infoAdm: null // PREENCHER DADOS TÉCNICOS
    },
    "bourbon-cataratas": { // Foz do Iguaçu
        nome: "Bourbon Cataratas", imagens: ["assets/logo-hotel/bourbon_logo.jpg"], descricao: "Descrição Bourbon Cataratas...", infoAdicional: [],
        backupLink: null, acessoRB: null, acessoFlussonic: null, acessoIRD: null, acessoRemoto: null, infoAdm: null // PREENCHER DADOS TÉCNICOS
    },
    "windham-foz": { // Wyndham Golden Foz Suites?
        nome: "Windham Foz", imagens: ["assets/logo-hotel/Windhan-Foz_logo.jpg"], descricao: "Descrição Wyndham Foz...", infoAdicional: [],
        backupLink: null, acessoRB: null, acessoFlussonic: null, acessoIRD: null, acessoRemoto: null, infoAdm: null // PREENCHER DADOS TÉCNICOS
    },
    "golden-park-foz": { // Foz do Iguaçu
        nome: "Golden Park Foz", imagens: ["assets/logo-hotel/Golden-park_logo.jpg"], descricao: "Descrição Golden Park Foz...", infoAdicional: [],
        backupLink: null, acessoRB: null, acessoFlussonic: null, acessoIRD: null, acessoRemoto: null, infoAdm: null // PREENCHER DADOS TÉCNICOS
    },
    "nadai": { // Foz do Iguaçu - Nadai Confort Hotel & Spa?
        nome: "Nadai", imagens: ["assets/logo-hotel/Nadai_logo.jpg"], descricao: "Descrição Nadai...", infoAdicional: [],
        backupLink: null, acessoRB: null, acessoFlussonic: null, acessoIRD: null, acessoRemoto: null, infoAdm: null // PREENCHER DADOS TÉCNICOS
    },
    "foz-plaza": { // Foz do Iguaçu
        nome: "Foz Plaza", imagens: ["assets/logo-hotel/Foz-plaza_logo.jpg"], descricao: "Descrição Foz Plaza...", infoAdicional: [],
        backupLink: null, acessoRB: null, acessoFlussonic: null, acessoIRD: null, acessoRemoto: null, infoAdm: null // PREENCHER DADOS TÉCNICOS
    },
    "bourbon-jl": { // Foz do Iguaçu - JL Hotel by Bourbon
        nome: "Bourbon JL", imagens: ["assets/logo-hotel/JL-Bourbon_logo.jpg"], descricao: "Descrição JL Hotel by Bourbon...", infoAdicional: [],
        backupLink: null, acessoRB: null, acessoFlussonic: null, acessoIRD: null, acessoRemoto: null, infoAdm: null // PREENCHER DADOS TÉCNICOS
    },
    "days-inn-cascavel": { // Cascavel PR
        nome: "Days Inn Cascavel", imagens: ["assets/logo-hotel/Days-inn-Cascavel_logo.jpg"], descricao: "Descrição Days Inn Cascavel...", infoAdicional: [],
        backupLink: null, acessoRB: null, acessoFlussonic: null, acessoIRD: null, acessoRemoto: null, infoAdm: null // PREENCHER DADOS TÉCNICOS
    },
    "ibis-cascavel": { // Cascavel PR
        nome: "Ibis Cascavel", imagens: ["assets/logo-hotel/Hibis_logo.jpg"], descricao: "Descrição Ibis Cascavel...", infoAdicional: [],
        backupLink: null, acessoRB: null, acessoFlussonic: null, acessoIRD: null, acessoRemoto: null, infoAdm: null // PREENCHER DADOS TÉCNICOS
    },
    "harbor-cascavel": { // Cascavel PR - Harbor Querencia Hotel
        nome: "Harbor Cascavel", imagens: ["assets/logo-hotel/Harbor-Cascavel_logo.jpg"], descricao: "Descrição Harbor Querencia Hotel...", infoAdicional: [],
        backupLink: null, acessoRB: null, acessoFlussonic: null, acessoIRD: null, acessoRemoto: null, infoAdm: null // PREENCHER DADOS TÉCNICOS
    },
    "copas-executive-cascavel": { // Cascavel PR
        nome: "Copas Executive Cascavel", imagens: ["assets/logo-hotel/Copas-executivo_logo.jpg"], descricao: "Descrição Copas Executive...", infoAdicional: [],
        backupLink: null, acessoRB: null, acessoFlussonic: null, acessoIRD: null, acessoRemoto: null, infoAdm: null // PREENCHER DADOS TÉCNICOS
    },
    "copas-verde-cascavel": { // Cascavel PR
        nome: "Copas Verde Cascavel", imagens: ["assets/logo-hotel/Copas-Verde_logo.jpg"], descricao: "Descrição Copas Verde...", infoAdicional: [],
        backupLink: null, acessoRB: null, acessoFlussonic: null, acessoIRD: null, acessoRemoto: null, infoAdm: null // PREENCHER DADOS TÉCNICOS
    },
    "vivas-cataratas": { // Foz do Iguaçu - Vivaz Cataratas Hotel Resort
        nome: "Vivaz Cataratas", imagens: ["assets/logo-hotel/Vivaz-Cataratas_logo.jpg"], descricao: "Descrição Vivaz Cataratas...", infoAdicional: [],
        backupLink: null, acessoRB: null, acessoFlussonic: null, acessoIRD: null, acessoRemoto: null, infoAdm: null // PREENCHER DADOS TÉCNICOS
    },
    "arcas-toledo": { // Toledo PR
        nome: "Arcas Toledo", imagens: ["assets/logo-hotel/Arcas_logo.jpg"], descricao: "Descrição Arcas Toledo...", infoAdicional: [],
        backupLink: null, acessoRB: null, acessoFlussonic: null, acessoIRD: null, acessoRemoto: null, infoAdm: null // PREENCHER DADOS TÉCNICOS
    }

    // Adicione NOVOS HOTEIS AQUI MANTENDO O FORMATO
};