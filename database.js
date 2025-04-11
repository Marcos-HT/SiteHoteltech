// ==================================================
// ==          BANCO DE DADOS DOS HOTÉIS           ==
// ==================================================
// Arquivo centralizado com todos os dados dos hotéis.
// IMPORTANTE: Preencha os dados técnicos, linkWhatsAppGrupo e Localização
// marcados como 'null' ou com placeholders para TODOS os hotéis.

const hotelDatabase = {
    // === Hotéis da index.html ===
    "bourbon-curitiba": {
        nome: "Bourbon Curitiba", // Nome oficial: Bourbon Curitiba Hotel & Suites
        cidade: "Curitiba", // <-- LOCALIZAÇÃO ADICIONADA
        estado: "PR",       // <-- LOCALIZAÇÃO ADICIONADA
        pais: "BR",         // <-- LOCALIZAÇÃO ADICIONADA
        imagens: ["assets/logo-hotel/bourbon_logo.jpg"],
        descricao: "O Bourbon Curitiba Convention Hotel está localizado no centro de Curitiba, próximo aos principais pontos turísticos e centros empresariais. Oferece apartamentos e suítes modernas, além de uma completa estrutura para eventos e lazer.",
        infoAdicional: [{ titulo: "Endereço", valor: "R. Cândido Lopes, 102 - Centro, Curitiba - PR, 80020-060" }, { titulo: "Telefone", valor: "(41) 3221-4600" }, { titulo: "Website", valor: "<a href='https://www.bourbon.com.br/hotel/bourbon-curitiba' target='_blank'>Site Oficial</a>" }],
        linkWhatsAppGrupo: "https://chat.whatsapp.com/FGbRzyOopOs0BkfonudQjF", // Link preenchido
        backupLink: "https://0.0.0.0",
        acessoRB: { ovpn: "10.31.0.61:3055", ipLocal: "10.17.4.167", user: "hoteltech", senha: "@ht2020*!" },
        acessoFlussonic: { ovpn: "10.31.0.26", ipRede: "192.168.88.41", portaSSH: 22, portaWeb: 8080, userSSH: "hoteltech", senhaSSH: "@ht2020*", userWeb: "admin", senhaWeb: "@ht2020*", linkWeb: "http://10.31.0.26:8080" },
        acessoIRD: { ovpn: "10.31.0.61:8583", ipRede: "192.168.88.136", user: "admin", senha: "admin", linkWeb: "http://10.31.0.61:8583/" },
        acessoRemoto: { tipo: "Canal Institucional", anydesk: "1492046315", senha: "@ht2020*" },
        infoAdm: null
    },
    "bourbon-ponta-grossa": {
        nome: "Bourbon Ponta Grossa",
        cidade: "Ponta Grossa", // <-- LOCALIZAÇÃO (Exemplo)
        estado: "PR",          // <-- LOCALIZAÇÃO (Exemplo)
        pais: "BR",            // <-- LOCALIZAÇÃO (Exemplo)
        imagens: ["assets/logo-hotel/bourbon_logo.jpg"],
        descricao: "Localizado em Ponta Grossa, este hotel oferece conforto e conveniência para viajantes a negócios ou lazer na região dos Campos Gerais.",
        infoAdicional: [{ titulo: "Endereço", valor: "Rua Jacob Holzmann, 219 - Olarias, Ponta Grossa - PR, 84035-290" }, { titulo: "Telefone", valor: "(42) 3220-3700" }, { titulo: "Website", valor: "<a href='https://www.bourbon.com.br' target='_blank'>bourbon.com.br</a>" }],
        linkWhatsAppGrupo: null,
        backupLink: null,
        acessoRB: { ovpn: "10.31.0.152:8580", ipLocal: "192.168.1.3", user: "hoteltech", senha: "@ht2020*!" },
        acessoFlussonic: { ovpn: "10.31.0.39", ipRede: "192.168.10.3", portaSSH: 3322, portaWeb: 80, userSSH: "hoteltech", senhaSSH: "@ht2020*", userWeb: "admin", senhaWeb: "@ht2020*", linkWeb: "http://10.31.0.39:80" },
        acessoIRD: { ovpn: "10.31.0.152:8581", ipRede: "192.168.0.136", user: "admin", senha: "admin", linkWeb: "http://10.31.0.152:8581" },
        acessoRemoto: { tipo: "Canal Institucional", anydesk: "1054079761", senha: "@ht2020*" },
    },
    "bourbon-dom-ricardo": {
        nome: "Bourbon Dom Ricardo | Aeroporto Curitiba Hotel",
        cidade: "São José dos Pinhais", // <-- LOCALIZAÇÃO (Exemplo)
        estado: "PR",                 // <-- LOCALIZAÇÃO (Exemplo)
        pais: "BR",                    // <-- LOCALIZAÇÃO (Exemplo)
        imagens: ["assets/logo-hotel/bourbon_logo.jpg"],
        descricao: "Hotel próximo ao Aeroporto Afonso Pena em São José dos Pinhais, oferecendo conveniência com transfer cortesia (check-in/out), apartamentos modernos, restaurante Viccenza, fitness center, room service 24h e estrutura para eventos. Ideal para quem viaja ou precisa de fácil acesso ao aeroporto.",
        infoAdicional: [{ titulo: "Endereço", valor: "Av. Rocha Pombo, 2400 - Águas Belas, São José dos Pinhais - PR, 83010-620" }, { titulo: "Telefone", valor: "(41) 3299-2400" }, { titulo: "Website", valor: "<a href='https://www.bourbon.com.br/hotel/bourbon-dom-ricardo-hotel' target='_blank'>Site Oficial</a>" }],
        linkWhatsAppGrupo: null,
        backupLink: null,
        acessoRB: { ovpn: "10.31.0.108:8580", ipLocal: "192.168.0.107", user: "hoteltech", senha: "@ht2020*!" },
        acessoFlussonic: { ovpn: "10.31.0.141", ipRede: "192.168.10.242", portaSSH: 3050, portaWeb: 8583, userSSH: "hoteltech", senhaSSH: "@ht2020*", userWeb: "hoteltech", senhaWeb: "@ht2020*", linkWeb: "http://10.31.0.108:8583" },
        acessoIRD: { ovpn: "10.31.0.108:8581", ipRede: "192.168.0.136", user: "hoteltech", senha: "@ht2020*", linkWeb: "http://10.31.0.108:8581" },
        acessoRemoto: "O acesso no IRD e feito atravez do mini pc do canal institucional do hotel.",
        infoAdm: null
    },
    "bourbon-rio": { // Rio Hotel by Bourbon Curitiba Batel
        nome: "Rio Hotel by Bourbon Curitiba Batel",
        cidade: "Curitiba", // <-- LOCALIZAÇÃO (Exemplo)
        estado: "PR",       // <-- LOCALIZAÇÃO (Exemplo)
        pais: "BR",         // <-- LOCALIZAÇÃO (Exemplo)
        imagens: ["assets/logo-hotel/bourbon_logo.jpg"],
        descricao: "Localizado no bairro Batel em Curitiba, este hotel foca em praticidade e conforto com um ambiente acolhedor e funcional. Oferece fitness center, passadoria (auto-serviço), terraço para eventos com vista panorâmica e recepção/room service 24h.",
        infoAdicional: [{ titulo: "Endereço", valor: "Av. Visconde de Guarapuava, 4889 - Batel, Curitiba - PR, 80240-010" }, { titulo: "Telefone", valor: "(41) 3342-7990" }, { titulo: "Website", valor: "<a href='https://www.bourbon.com.br/hotelrio/rio-hotel-by-bourbon-curitiba-batel' target='_blank'>Site Oficial</a>" }],
        linkWhatsAppGrupo: null,
        backupLink: null,
        acessoRB: "Este Hotel não tem RB",
        acessoFlussonic: { ovpn: "187.95.152.50", ipRede: "192.168.0.241", portaSSH: 3055, portaWeb: 8081, userSSH: "hotel", senhaSSH: "@ht2020*", userWeb: "hoteltech", senhaWeb: "@ht2020*", linkWeb: "http://187.95.152.50:8081" },
        acessoIRD: "O acesso no IRD e feito atravez do mini pc do canal institucional do hotel.",
        acessoRemoto: { tipo: "Canal Institucional", anydesk: "1937162446", senha: "@ht2020*" },
        infoAdm: null
    },
    "viale-cataratas": {
        nome: "Viale Cataratas Hotel & Eventos",
        cidade: "Foz do Iguaçu", // <-- LOCALIZAÇÃO (Exemplo)
        estado: "PR",           // <-- LOCALIZAÇÃO (Exemplo)
        pais: "BR",              // <-- LOCALIZAÇÃO (Exemplo)
        imagens: ["assets/logo-hotel/Vialle-Cataratas_logo.jpg"],
        descricao: "Hotel contemporâneo em Foz do Iguaçu, localizado na Avenida das Cataratas. Possui quartos e suítes casuais, restaurante, academia, piscina externa e estrutura para eventos.",
        infoAdicional: [{ titulo: "Endereço", valor: "Av. das Cataratas, 2420 - Vila Yolanda, Foz do Iguaçu - PR, 85853-000" }, { titulo: "Telefone", valor: "(45) 2105-7200" }, { titulo: "Website", valor: "<a href='https://www.vialehoteis.com.br/' target='_blank'>Site Oficial (Rede)</a>" }],
        linkWhatsAppGrupo: null,
        backupLink: null,
        acessoRB: { ovpn: "10.31.0.58:8580", ipLocal: "192.168.1.5", user: "hoteltech", senha: "@ht2020*!" },
        acessoFlussonic: { ovpn: "10.31.0.143", ipRede: "192.168.88.248", portaSSH: 3055, portaWeb: 8080, userSSH: "hoteltech", senhaSSH: "@ht2020*", userWeb: "admin", senhaWeb: "@ht2020*", linkWeb: "http://10.31.0.143:8080" },
        acessoIRD: { ovpn: "10.31.0.58:9090", ipRede: "192.168.88.136", user: "admin", senha: "admin", linkWeb: "http://10.31.0.58:9090" },
        acessoRemoto: { tipo: "Canal Institucional", anydesk: "1089743902", senha: "@ht2020*" },
        infoAdm: null
    },
    "fazzenda-park": {
        nome: "Fazzenda Park Hotel", // Ajustado
        cidade: "Gaspar",           // Localização adicionada
        estado: "SC",               // Localização adicionada
        pais: "BR",                 // Localização adicionada
        imagens: ["assets/logo-hotel/Fazenda-Park_logo.jpg"],
        descricao: "Considerado um dos melhores hotéis-fazenda do Brasil, o Fazzenda Park Resort está localizado em Gaspar (SC), no Vale Europeu. Com uma área de 2 milhões de m², oferece ampla estrutura de lazer integrada à natureza, incluindo piscinas, passeios a cavalo, quadras esportivas, lago, SPA e recreação infantil (Clubinho do Gasparinho). Opera frequentemente com regime All Inclusive, destacando-se pela gastronomia.", // Descrição da busca
        infoAdicional: [], // Preencher se tiver Endereço/Telefone específico aqui
        linkWhatsAppGrupo: "https://chat.whatsapp.com/JFlvcFt86fl2BeermekOnJ",
        backupLink: null, // Preencher se houver
        acessoRB: "Este Hotel não tem RB", // Mensagem personalizada
        acessoFlussonic: { ovpn: "10.31.0.38", ipRede: "192.168.180.98", portaSSH: 3055, portaWeb: 80, userSSH: "hoteltech", senhaSSH: "@ht2020*", userWeb: "admin", senhaWeb: "@ht2020*", linkWeb: "http://10.31.0.38:80" }, // Nota interna: IP Secundário 192.168.175.187 (VLAN 100) omitido. Senha Root omitida.
        acessoIRD: "O acesso no IRD e feito atravez do servidor de integração.", // Mensagem personalizada (Detalhes: IP 192.168.63.197 / User/Pass admin)
        acessoProcentric: {
            ipRede: "192.168.63.200",
            portaSSH: 22,
            portaWeb: 80, // Porta Web inferida, não explicitada
            userSSH: "admin",
            senhaSSH: "Password4Partners",
            userWeb: "procentric", // User principal Web
            senhaWeb: "H0t3lTF4zz22*", // Senha principal Web
            linkWeb: "http://192.168.63.200:80", // Construído com IP e Porta Web
            nota: "Acesso Web/IRD/Procentric via Servidor de Integração. IP Secundário: 192.168.171.20. Outros Users Web: hoteltech (HtT3ch*2022), Ramires (H0t3lTF4zz20*)" // Nota combinada
        },
        acessoRemotoCanal: { tipo: "Canal Institucional", anydesk: "1579563512", senha: "@ht2020*" }, // Separado
        acessoRemotoIntegracao: { tipo: "Servidor Integração", anydesk: "828007415", senha: "@ht2020*" }, // Separado
        infoAdm: null // Preencher se houver
    },
    // --- DEMAIS HOTÉIS --- (ADICIONAR cidade, estado, pais) ---
    "viale-tower": { nome: "Viale Tower", cidade: "Foz do Iguaçu", estado: "PR", pais: "BR", imagens: ["assets/logo-hotel/Vialle-Tower_logo.jpg"], descricao: "...", infoAdicional: [], linkWhatsAppGrupo: null, backupLink: null, acessoRB: null, acessoFlussonic: null, acessoIRD: null, acessoRemoto: null, infoAdm: null },
    "doubletree-hilton": { nome: "DoubleTree by Hilton", cidade: "Foz do Iguaçu", estado: "PR", pais: "BR", imagens: ["assets/logo-hotel/By-Hilton_logo.jpg"], descricao: "...", infoAdicional: [], linkWhatsAppGrupo: null, backupLink: null, acessoRB: null, acessoFlussonic: null, acessoIRD: null, acessoRemoto: null, infoAdm: null },
    "intercity-canoas": { nome: "Intercity Canoas", cidade: "Canoas", estado: "RS", pais: "BR", imagens: ["assets/logo-hotel/intercity-canoas_logo.jpg"], descricao: "...", infoAdicional: [], linkWhatsAppGrupo: null, backupLink: null, acessoRB: null, acessoFlussonic: null, acessoIRD: null, acessoRemoto: null, infoAdm: null },
    // ... Adicionar cidade/estado/pais para TODOS os outros ...

    // === Hotéis da satelite.html ===
    "san-juan-eco": { // Foz do Iguaçu?
        nome: "San Juan Eco",
        cidade: "Foz do Iguaçu", // <-- LOCALIZAÇÃO ADICIONADA
        estado: "PR",          // <-- LOCALIZAÇÃO ADICIONADA
        pais: "BR",             // <-- LOCALIZAÇÃO ADICIONADA
        imagens: ["assets/logo-hotel/San-Juan-Eco_logo.jpg"],
        descricao: "Descrição San Juan Eco...", infoAdicional: [],
        linkWhatsAppGrupo: "https://chat.whatsapp.com/E8XYmwIeccoEjTnjcjnqXz", // Link preenchido
        backupLink: null, acessoRB: null, acessoFlussonic: null, acessoIRD: null, acessoRemoto: null, infoAdm: null
    },
    "bourbon-cataratas": { // Foz do Iguaçu
        nome: "Bourbon Cataratas", cidade: "Foz do Iguaçu", estado: "PR", pais: "BR", imagens: ["assets/logo-hotel/bourbon_logo.jpg"], descricao: "...", infoAdicional: [], linkWhatsAppGrupo: null, backupLink: null, acessoRB: null, acessoFlussonic: null, acessoIRD: null, acessoRemoto: null, infoAdm: null
    },
    // ... Adicionar cidade/estado/pais para TODOS os outros hotéis de satélite...
    "windham-foz": { nome: "Windham Foz", cidade: "Foz do Iguaçu", estado: "PR", pais: "BR", imagens: ["assets/logo-hotel/Windhan-Foz_logo.jpg"], descricao: "...", infoAdicional: [], linkWhatsAppGrupo: null, backupLink: null, acessoRB: null, acessoFlussonic: null, acessoIRD: null, acessoRemoto: null, infoAdm: null },
    "golden-park-foz": { nome: "Golden Park Foz", cidade: "Foz do Iguaçu", estado: "PR", pais: "BR", imagens: ["assets/logo-hotel/Golden-park_logo.jpg"], descricao: "...", infoAdicional: [], linkWhatsAppGrupo: null, backupLink: null, acessoRB: null, acessoFlussonic: null, acessoIRD: null, acessoRemoto: null, infoAdm: null },
    "nadai": { nome: "Nadai", cidade: "Foz do Iguaçu", estado: "PR", pais: "BR", imagens: ["assets/logo-hotel/Nadai_logo.jpg"], descricao: "...", infoAdicional: [], linkWhatsAppGrupo: null, backupLink: null, acessoRB: null, acessoFlussonic: null, acessoIRD: null, acessoRemoto: null, infoAdm: null },
    "foz-plaza": { nome: "Foz Plaza", cidade: "Foz do Iguaçu", estado: "PR", pais: "BR", imagens: ["assets/logo-hotel/Foz-plaza_logo.jpg"], descricao: "...", infoAdicional: [], linkWhatsAppGrupo: null, backupLink: null, acessoRB: null, acessoFlussonic: null, acessoIRD: null, acessoRemoto: null, infoAdm: null },
    "bourbon-jl": { nome: "Bourbon JL", cidade: "Foz do Iguaçu", estado: "PR", pais: "BR", imagens: ["assets/logo-hotel/JL-Bourbon_logo.jpg"], descricao: "...", infoAdicional: [], linkWhatsAppGrupo: null, backupLink: null, acessoRB: null, acessoFlussonic: null, acessoIRD: null, acessoRemoto: null, infoAdm: null },
    "days-inn-cascavel": { nome: "Days Inn Cascavel", cidade: "Cascavel", estado: "PR", pais: "BR", imagens: ["assets/logo-hotel/Days-inn-Cascavel_logo.jpg"], descricao: "...", infoAdicional: [], linkWhatsAppGrupo: null, backupLink: null, acessoRB: null, acessoFlussonic: null, acessoIRD: null, acessoRemoto: null, infoAdm: null },
    "ibis-cascavel": { nome: "Ibis Cascavel", cidade: "Cascavel", estado: "PR", pais: "BR", imagens: ["assets/logo-hotel/Hibis_logo.jpg"], descricao: "...", infoAdicional: [], linkWhatsAppGrupo: null, backupLink: null, acessoRB: null, acessoFlussonic: null, acessoIRD: null, acessoRemoto: null, infoAdm: null },
    "harbor-cascavel": { nome: "Harbor Cascavel", cidade: "Cascavel", estado: "PR", pais: "BR", imagens: ["assets/logo-hotel/Harbor-Cascavel_logo.jpg"], descricao: "...", infoAdicional: [], linkWhatsAppGrupo: null, backupLink: null, acessoRB: null, acessoFlussonic: null, acessoIRD: null, acessoRemoto: null, infoAdm: null },
    "copas-executive-cascavel": { nome: "Copas Executive Cascavel", cidade: "Cascavel", estado: "PR", pais: "BR", imagens: ["assets/logo-hotel/Copas-executivo_logo.jpg"], descricao: "...", infoAdicional: [], linkWhatsAppGrupo: null, backupLink: null, acessoRB: null, acessoFlussonic: null, acessoIRD: null, acessoRemoto: null, infoAdm: null },
    "copas-verde-cascavel": { nome: "Copas Verde Cascavel", cidade: "Cascavel", estado: "PR", pais: "BR", imagens: ["assets/logo-hotel/Copas-Verde_logo.jpg"], descricao: "...", infoAdicional: [], linkWhatsAppGrupo: null, backupLink: null, acessoRB: null, acessoFlussonic: null, acessoIRD: null, acessoRemoto: null, infoAdm: null },
    "vivas-cataratas": { nome: "Vivaz Cataratas", cidade: "Foz do Iguaçu", estado: "PR", pais: "BR", imagens: ["assets/logo-hotel/Vivaz-Cataratas_logo.jpg"], descricao: "...", infoAdicional: [], linkWhatsAppGrupo: null, backupLink: null, acessoRB: null, acessoFlussonic: null, acessoIRD: null, acessoRemoto: null, infoAdm: null },
    "arcas-toledo": { nome: "Arcas Toledo", cidade: "Toledo", estado: "PR", pais: "BR", imagens: ["assets/logo-hotel/Arcas_logo.jpg"], descricao: "...", infoAdicional: [], linkWhatsAppGrupo: null, backupLink: null, acessoRB: null, acessoFlussonic: null, acessoIRD: null, acessoRemoto: null, infoAdm: null }

    // Adicione NOVOS HOTEIS AQUI MANTENDO O FORMATO E LOCALIZAÇÃO
};