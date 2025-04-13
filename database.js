// ==================================================
// ==          BANCO DE DADOS DOS HOTÉIS           ==
// ==================================================
// Arquivo centralizado com todos os dados dos hotéis.
// Comentários de início/fim adicionados para cada hotel para melhor organização.
// Informações públicas preenchidas via busca web. Viale Tower atualizado com dados do usuário.
// IMPORTANTE: Revisar dados técnicos, links privados e info ADM (a maioria ainda precisa ser preenchida internamente).

const hotelDatabase = {

    // --- INÍCIO BOURBON CURITIBA HOTEL & SUITES ---
    "bourbon-curitiba": {
        nome: "Bourbon Curitiba Hotel & Suites",
        cidade: "Curitiba", estado: "PR", pais: "BR",
        imagens: ["assets/logo-hotel/bourbon_logo.jpg"],
        descricao: "Localizado no centro de Curitiba, próximo a pontos turísticos e centros empresariais. Oferece apartamentos e suítes modernas, restaurante, bar, piscina e estrutura para eventos.",
        infoAdicional: [ { titulo: "Endereço", valor: "R. Cândido Lopes, 102 - Centro, Curitiba - PR, 80020-060" }, { titulo: "Telefone", valor: "(41) 3221-4600" }, { titulo: "Website", valor: "<a href='https://www.bourbon.com.br/hotel/bourbon-curitiba' target='_blank'>Site Oficial</a>" } ],
        linkWhatsAppGrupo: "https://chat.whatsapp.com/FGbRzyOopOs0BkfonudQjF", backupLink: "https://0.0.0.0", infoAdm: null, acessoRemotoIntegracao: null,
        acessoRB: { ovpn: "10.31.0.61:3055", ipLocal: "10.17.4.167", user: "hoteltech", senha: "@ht2020*!" },
        acessoFlussonic: { ovpn: "10.31.0.26", ipRede: "192.168.88.41", portaSSH: 22, portaWeb: 8080, userSSH: "hoteltech", senhaSSH: "@ht2020*", userWeb: "admin", senhaWeb: "@ht2020*", linkWeb: "http://10.31.0.26:8080" },
        acessoIRD: { ovpn: "10.31.0.61:8583", ipRede: "192.168.88.136", user: "admin", senha: "admin", linkWeb: "http://10.31.0.61:8583/" },
        acessoRemotoCanal: { tipo: "Canal Institucional", anydesk: "1492046315", senha: "@ht2020*" }
    },
    // --- FIM BOURBON CURITIBA HOTEL & SUITES ---

    // --- INÍCIO BOURBON PONTA GROSSA CONVENTION HOTEL ---
    "bourbon-ponta-grossa": {
        nome: "Bourbon Ponta Grossa Convention Hotel",
        cidade: "Ponta Grossa", estado: "PR", pais: "BR",
        imagens: ["assets/logo-hotel/bourbon_logo.jpg"],
        descricao: "Hotel de negócios em Ponta Grossa, com fácil acesso ao centro da cidade. Oferece apartamentos confortáveis, restaurante, bar, academia e salas para eventos.",
        infoAdicional: [ { titulo: "Endereço", valor: "R. Jacob Holzmann, 219 - Olarias, Ponta Grossa - PR, 84035-290" }, { titulo: "Telefone", valor: "(42) 3220-3700" }, { titulo: "Website", valor: "<a href='https://www.bourbon.com.br/hotel/bourbon-ponta-grossa-convention-hotel/' target='_blank'>Site Oficial</a>" } ],
        linkWhatsAppGrupo: null, backupLink: null, infoAdm: null, acessoRemotoIntegracao: null,
        acessoRB: { ovpn: "10.31.0.152:8580", ipLocal: "192.168.1.3", user: "hoteltech", senha: "@ht2020*!" },
        acessoFlussonic: { ovpn: "10.31.0.39", ipRede: "192.168.10.3", portaSSH: 3322, portaWeb: 80, userSSH: "hoteltech", senhaSSH: "@ht2020*", userWeb: "admin", senhaWeb: "@ht2020*", linkWeb: "http://10.31.0.39:80" },
        acessoIRD: { ovpn: "10.31.0.152:8581", ipRede: "192.168.0.136", user: "admin", senha: "admin", linkWeb: "http://10.31.0.152:8581" },
        acessoRemotoCanal: { tipo: "Canal Institucional", anydesk: "1054079761", senha: "@ht2020*" }
    },
    // --- FIM BOURBON PONTA GROSSA CONVENTION HOTEL ---

    // --- INÍCIO BOURBON DOM RICARDO | AEROPORTO CURITIBA BUSINESS HOTEL ---
    "bourbon-dom-ricardo": {
        nome: "Bourbon Dom Ricardo | Aeroporto Curitiba Business Hotel",
        cidade: "São José dos Pinhais", estado: "PR", pais: "BR",
        imagens: ["assets/logo-hotel/bourbon_logo.jpg"],
        descricao: "Hotel próximo ao Aeroporto Afonso Pena (CWB), oferece transfer cortesia, apartamentos modernos, restaurante, fitness center e estrutura para eventos. Conveniente para viajantes.",
        infoAdicional: [ { titulo: "Endereço", valor: "Av. Rocha Pombo, 2400 - Águas Belas, São José dos Pinhais - PR, 83010-620" }, { titulo: "Telefone", valor: "(41) 3299-2400" }, { titulo: "Website", valor: "<a href='https://www.bourbon.com.br/hotel/bourbon-dom-ricardo-aeroporto-curitiba-business-hotel/' target='_blank'>Site Oficial</a>" } ],
        linkWhatsAppGrupo: null, backupLink: null, infoAdm: null, acessoRemotoIntegracao: null,
        acessoRB: { ovpn: "10.31.0.108:8580", ipLocal: "192.168.0.107", user: "hoteltech", senha: "@ht2020*!" },
        acessoFlussonic: { ovpn: "10.31.0.141", ipRede: "192.168.10.242", portaSSH: 3050, portaWeb: 8583, userSSH: "hoteltech", senhaSSH: "@ht2020*", userWeb: "hoteltech", senhaWeb: "@ht2020*", linkWeb: "http://10.31.0.108:8583" },
        acessoIRD: { ovpn: "10.31.0.108:8581", ipRede: "192.168.0.136", user: "hoteltech", senha: "@ht2020*", linkWeb: "http://10.31.0.108:8581" },
        acessoRemotoCanal: "O acesso no IRD e feito atravez do mini pc do canal institucional do hotel." // Mantido como string
    },
    // --- FIM BOURBON DOM RICARDO | AEROPORTO CURITIBA BUSINESS HOTEL ---

    // --- INÍCIO RIO HOTEL BY BOURBON CURITIBA BATEL ---
    "bourbon-rio": {
        nome: "Rio Hotel by Bourbon Curitiba Batel",
        cidade: "Curitiba", estado: "PR", pais: "BR",
        imagens: ["assets/logo-hotel/bourbon_logo.jpg"],
        descricao: "Hotel moderno no bairro Batel, focado em praticidade. Oferece quartos funcionais, fitness center, passadoria e terraço com vista para a cidade.",
        infoAdicional: [ { titulo: "Endereço", valor: "Av. Visc. de Guarapuava, 4889 - Batel, Curitiba - PR, 80240-010" }, { titulo: "Telefone", valor: "(41) 3342-7990" }, { titulo: "Website", valor: "<a href='https://www.bourbon.com.br/hotelrio/rio-hotel-by-bourbon-curitiba-batel' target='_blank'>Site Oficial</a>" } ],
        linkWhatsAppGrupo: null, backupLink: null, infoAdm: null, acessoRemotoIntegracao: null, acessoRB: "Este Hotel não tem RB",
        acessoFlussonic: { ovpn: "187.95.152.50", ipRede: "192.168.0.241", portaSSH: 3055, portaWeb: 8081, userSSH: "hotel", senhaSSH: "@ht2020*", userWeb: "hoteltech", senhaWeb: "@ht2020*", linkWeb: "http://187.95.152.50:8081" },
        acessoIRD: "O acesso no IRD e feito atravez do mini pc do canal institucional do hotel.",
        acessoRemotoCanal: { tipo: "Canal Institucional", anydesk: "1937162446", senha: "@ht2020*" }
    },
    // --- FIM RIO HOTEL BY BOURBON CURITIBA BATEL ---

    // --- INÍCIO VIALE CATARATAS HOTEL & EVENTOS ---
    "viale-cataratas": {
        nome: "Viale Cataratas Hotel & Eventos",
        cidade: "Foz do Iguaçu", estado: "PR", pais: "BR",
        imagens: ["assets/logo-hotel/Vialle-Cataratas_logo.jpg"],
        descricao: "Hotel contemporâneo na Av. das Cataratas, próximo às Cataratas do Iguaçu. Oferece quartos modernos, restaurante, bar, piscina externa, academia e ampla estrutura para eventos.",
        infoAdicional: [ { titulo: "Endereço", valor: "Av. das Cataratas, 2420 - Vila Yolanda, Foz do Iguaçu - PR, 85853-000" }, { titulo: "Telefone", valor: "(45) 2105-7200" }, { titulo: "Website", valor: "<a href='https://www.vialehoteis.com.br/viale-cataratas' target='_blank'>Site Oficial</a>" } ],
        linkWhatsAppGrupo: null, backupLink: null, infoAdm: null, acessoRemotoIntegracao: null,
        acessoRB: { ovpn: "10.31.0.58:8580", ipLocal: "192.168.1.5", user: "hoteltech", senha: "@ht2020*!" },
        acessoFlussonic: { ovpn: "10.31.0.143", ipRede: "192.168.88.248", portaSSH: 3055, portaWeb: 8080, userSSH: "hoteltech", senhaSSH: "@ht2020*", userWeb: "admin", senhaWeb: "@ht2020*", linkWeb: "http://10.31.0.143:8080" },
        acessoIRD: { ovpn: "10.31.0.58:9090", ipRede: "192.168.88.136", user: "admin", senha: "admin", linkWeb: "http://10.31.0.58:9090" },
        acessoRemotoCanal: { tipo: "Canal Institucional", anydesk: "1089743902", senha: "@ht2020*" }
    },
    // --- FIM VIALE CATARATAS HOTEL & EVENTOS ---

    // --- INÍCIO VIALE TOWER HOTEL ---
    "viale-tower": {
        nome: "Viale Tower Hotel", cidade: "Foz do Iguaçu", estado: "PR", pais: "BR",
        imagens: ["assets/logo-hotel/Vialle-Tower_logo.jpg"],
        descricao: "Hotel executivo no centro de Foz do Iguaçu, próximo a restaurantes e comércio. Ideal para viagens de negócios, oferece quartos confortáveis, piscina na cobertura com vista panorâmica, restaurante e salas de reunião.",
        infoAdicional: [ { titulo: "Endereço", valor: "Av. Jorge Schimmelpfeng, 232 - Centro, Foz do Iguaçu - PR, 85851-110" }, { titulo: "Telefone", valor: "(45) 3026-8800" }, { titulo: "Website", valor: "<a href='https://www.vialehoteis.com.br/viale-tower' target='_blank'>Site Oficial</a>" } ],
        linkWhatsAppGrupo: null, backupLink: null, infoAdm: null, acessoProcentric: null, acessoRemotoIntegracao: null,
        acessoRB: { ovpn: "10.31.0.59:8291", ipLocal: "192.168.20.73", user: "admin", senha: "@ht2020*!", nota: "IP RB Primário (Vivo): 192.168.2.67" },
        acessoFlussonic: { ovpn: "10.31.0.60", ipRede: "192.168.88.250", portaSSH: null, portaWeb: 8080, userSSH: "hoteltech", senhaSSH: "@ht2020*", userWeb: "admin", senhaWeb: "@ht2020*", linkWeb: "http://10.31.0.60:8080" },
        acessoIRD: { ovpn: "10.31.0.59", ipRede: "192.168.0.136", user: "admin", senha: "admin", linkWeb: "http://10.31.0.59:8581" },
        acessoRemotoCanal: { tipo: "Canal Institucional", anydesk: "1780610971", senha: "@ht2020*" }
    },
    // --- FIM VIALE TOWER HOTEL ---

    // --- INÍCIO DOUBLETREE BY HILTON FOZ DO IGUAÇU ---
"doubletree-hilton": {
    nome: "DoubleTree by Hilton Foz do Iguaçu",
    cidade: "Foz do Iguaçu", estado: "PR", pais: "BR",
    imagens: ["assets/logo-hotel/By-Hilton_logo.jpg"],
    descricao: "Resort urbano sofisticado em Foz do Iguaçu, oferecendo quartos elegantes, piscinas, spa, restaurantes, bares e estrutura de lazer completa para famílias e casais.", // Mantida descrição
    infoAdicional: [ { titulo: "Endereço", valor: "Av. das Cataratas, 2930 - Vila Carimã, Foz do Iguaçu - PR, 85855-435" }, { titulo: "Telefone", valor: "(45) 3145-5300" }, { titulo: "Website", valor: "<a href='https://www.hilton.com/en/hotels/iguardi-doubletree-foz-do-iguacu-brazil/' target='_blank'>Site Oficial</a>" } ], // Mantidos dados públicos
    linkWhatsAppGrupo: null, backupLink: null, infoAdm: null, acessoIRD: null, acessoProcentric: null, acessoRemotoIntegracao: null, // Campos nulos agrupados
    acessoRB: { // <<< ATUALIZADO
        ovpn: "10.31.0.51:8080", ipLocal: "192.168.12.252", user: "admin", senha: "@ht2020*!"
    },
    acessoFlussonic: { // <<< ATUALIZADO
        ovpn: "10.31.0.52", // OVPN Principal (SSH)
        ipRede: "192.168.88.40", portaSSH: 22, portaWeb: 8080, userSSH: "hoteltech", senhaSSH: "@ht2020*", userWeb: "admin", senhaWeb: "@ht2020*",
        linkWeb: "http://10.31.0.52:8080", // Link construído com OVPN Web específico (10.31.0.167)
        nota: "OVPN Acesso Web: 10.31.0.167" // Nota sobre OVPN Web diferente
    },
    acessoRemotoCanal: { // <<< ATUALIZADO
        tipo: "Canal Institucional", anydesk: "1122274968", senha: "@ht2020*",
        nota: "Mini PC Win: tvdthiltonfoz@outlook.com / @ht2020*" // Nota com login do Windows
    }
},
// --- FIM DOUBLETREE BY HILTON FOZ DO IGUAÇU ---

    // --- INÍCIO INTERCITY CANOAS ---
    "intercity-canoas": {
        nome: "Intercity Canoas",
        cidade: "Canoas", estado: "RS", pais: "BR",
        imagens: ["assets/logo-hotel/intercity-canoas_logo.jpg"],
        descricao: "Hotel moderno em Canoas, próximo ao ParkShopping Canoas e com fácil acesso a Porto Alegre. Oferece quartos confortáveis, piscina, academia, restaurante e espaço para eventos.", // Mantida descrição
        infoAdicional: [ { titulo: "Endereço", valor: "Av. Getúlio Vargas, 5161 - Centro, Canoas - RS, 92010-011" }, { titulo: "Telefone", valor: "(51) 3123-5151" }, { titulo: "Website", valor: "<a href='https://www.intercityhotels.com/hotel-canoas/intercity-canoas/19/' target='_blank'>Site Oficial</a>" } ], // Mantidos dados públicos
        linkWhatsAppGrupo: null, backupLink: null, infoAdm: null, acessoIRD: null, acessoProcentric: null, acessoRemotoIntegracao: null, // Campos nulos padrão
        acessoRB: { // <<< ATUALIZADO
            ovpn: "10.31.0.54:8580", ipLocal: "187.49.70.146", user: "hoteltech", senha: "@ht2020*!", nota: "IP Local informado parece ser público" // Adicionada nota
        },
        acessoFlussonic: { // <<< ATUALIZADO
            ovpn: "10.31.0.55", ipRede: "192.168.88.34", portaSSH: 3055, portaWeb: 8080, userSSH: "hoteltech", senhaSSH: "@ht2020*", userWeb: "hoteltech", senhaWeb: "@ht2020*", linkWeb: "http://10.31.0.55:8080"
        },
        acessoProxmox: { // <<< NOVO BLOCO
            ovpn: "10.31.0.56", ipRede: "192.168.88.10", portaSSH: 2222, portaWeb: 8006, userSSH: "root", senhaSSH: "@ht2020*", userWeb: "root", senhaWeb: "@ht2020*", linkWeb: "https://10.31.0.56:8006", // Proxmox usa HTTPS
            logoPath: null // TODO: Adicionar caminho PNG Proxmox
        },
        acessoXtreamCodes: { // <<< NOVO BLOCO
            ovpn: "10.31.0.57", ipRede: "192.168.88.25", portaSSH: 22, portaWeb: 25500, userSSH: "hoteltech", senhaSSH: "@ht2020*", userWeb: "hoteltech", senhaWeb: "@ht2020!*", linkWeb: "http://10.31.0.57:25500",
            logoPath: null // TODO: Adicionar caminho PNG Xtream Codes
        },
        acessoServidorApk: { // <<< NOVO BLOCO
            ovpn: "10.31.0.119", ipRede: "192.168.88.24", portaSSH: 3030, portaWeb: 8087, userSSH: null, senhaSSH: null, userWeb: null, senhaWeb: null, linkWeb: "http://10.31.0.119:8087", // Usuário/Senha não informados
            logoPath: null // TODO: Adicionar caminho PNG Servidor APK
        },
        acessoRemotoCanal: { // <<< ATUALIZADO
            tipo: "Canal Institucional", anydesk: "1023851336", senha: "@ht2020*"
        }
    },
    // --- FIM INTERCITY CANOAS ---

    // --- INÍCIO BRISTOL SABRINA HOTEL DE CHARME ---
    "bristol-sabrina": {
        nome: "Bristol Sabrina Hotel de Charme", // Nome Corrigido
        cidade: "Joinville", estado: "SC", pais: "BR", // Localização Corrigida
        imagens: ["assets/logo-hotel/Bristol_logo.jpg"], // Manter logo genérico Bristol?
        descricao: "Hotel de charme localizado no centro histórico de Joinville, em um casarão tombado. Oferece quartos elegantes, café da manhã e ambiente acolhedor.", // Descrição Atualizada (Exemplo Joinville)
        infoAdicional: [ // Info Atualizada (Exemplo Joinville - VERIFICAR)
             { titulo: "Endereço", valor: "Rua 15 de Novembro, 495 - Centro, Joinville - SC, 89201-601" },
             { titulo: "Telefone", valor: "(47) 3433-9111" },
             { titulo: "Website", valor: "<a href='https://www.bristolhoteis.com.br/hoteis/joinville/bristol-sabrina-hotel-de-charme/' target='_blank'>Site Oficial</a>" }
        ],
        linkWhatsAppGrupo: null, backupLink: null, infoAdm: null, acessoProcentric: null, acessoRemotoIntegracao: null, // Campos nulos padrão
        acessoRB: { // <<< ATUALIZADO
            ovpn: "10.31.0.49:8580", ipLocal: "e7dd0e39f76f.sn.mynetname.net", user: "hoteltech", senha: "@ht2020*!", // IP Local é DynDNS
            nota: "IP na LAN: 172.21.15.254" // Nota com IP LAN
        },
        acessoFlussonic: { // <<< ATUALIZADO
            ovpn: "10.31.0.48", ipRede: "192.168.88.30", portaSSH: 3055, portaWeb: 80, userSSH: "hoteltech", senhaSSH: "@ht2020*", userWeb: "admin", senhaWeb: "@ht2020*", linkWeb: "http://10.31.0.48:80"
        },
        acessoIRD: { // <<< ATUALIZADO
             ovpn: "10.31.0.49", ipRede: "192.168.88.136", user: "admin", senha: "admin", linkWeb: "http://10.31.0.49:8581"
        },
        acessoRemotoCanal: { // <<< ATUALIZADO
            tipo: "Hotel não tem acesso remoto, canal institucional usa uma box android.", anydesk: null, senha: null
        }
        // Outros blocos como Proxmox, Xtream, etc., não foram fornecidos para este hotel.
    },
    // --- FIM BRISTOL SABRINA HOTEL DE CHARME ---

    // --- INÍCIO BRISTOL INFINITY ---
    "bristol-infinity": {
        nome: "Bristol Infinity", // Mantido nome original
        cidade: "Rio Claro", estado: "SP", pais: "BR", // Localização Corrigida
        imagens: ["assets/logo-hotel/Bristol_logo.jpg"], // Manter logo genérico Bristol?
        descricao: "Hotel moderno e bem localizado no centro de Rio Claro, ideal para viagens de negócios. Oferece quartos confortáveis, restaurante, piscina, academia e estrutura para eventos.", // Descrição Atualizada (Exemplo Rio Claro)
        infoAdicional: [ // Info Atualizada (Exemplo Rio Claro - VERIFICAR)
             { titulo: "Endereço", valor: "Rua 1, 1333 - Centro, Rio Claro - SP, 13500-144" },
             { titulo: "Telefone", valor: "(19) 3522-5500" },
             { titulo: "Website", valor: "<a href='https://www.bristolhoteis.com.br/hoteis/rio-claro/bristol-infinity/' target='_blank'>Site Oficial</a>" }
        ],
        linkWhatsAppGrupo: null, backupLink: null, infoAdm: null, acessoProcentric: null, acessoRemotoIntegracao: null, // Campos nulos padrão
        acessoRB: { // <<< ATUALIZADO
            ovpn: "10.31.0.65:8580", ipLocal: "172.30.172.48", user: "hoteltech", senha: "@ht2020*!"
        },
        acessoFlussonic: { // <<< ATUALIZADO
            ovpn: "10.31.0.66", ipRede: "192.168.10.31", portaSSH: 3055, portaWeb: 80, userSSH: "hoteltech", senhaSSH: "@ht2020*", userWeb: "admin", senhaWeb: "@ht2020*", linkWeb: "http://10.31.0.66:80"
        },
        acessoIRD: { // <<< ATUALIZADO
             ovpn: "10.31.0.65", ipRede: "192.168.10.136", user: "hoteltech", senha: "@ht2020*", linkWeb: "http://10.31.0.65:8581"
        },
        acessoRemotoCanal: { // <<< ATUALIZADO
            tipo: "Canal Institucional", anydesk: "1467599661", senha: "@ht2020*"
        }
    },
    // --- FIM BRISTOL INFINITY ---

    // --- INÍCIO BRISTOL SANTO ANDRÉ ---
    "bristol-santo-andre": {
        nome: "Bristol Santo André",
        cidade: "Santo André", estado: "SP", pais: "BR",
        imagens: ["assets/logo-hotel/Bristol_logo.jpg"], // Manter logo genérico Bristol?
        descricao: "Hotel executivo em Santo André, bem localizado no ABC Paulista. Oferece acomodações confortáveis, restaurante, academia e salas de reuniões.", // Descrição Mantida
        infoAdicional: [ // Info Mantida
             { titulo: "Endereço", valor: "Av. Industrial, 885 - Jardim, Santo André - SP, 09080-510" },
             { titulo: "Telefone", valor: "(11) 4433-0700" },
             { titulo: "Website", valor: "<a href='https://www.bristolhoteis.com.br/hoteis/santo-andre/bristol-santo-andre/' target='_blank'>Site Oficial</a>" }
        ],
        linkWhatsAppGrupo: null, backupLink: null, infoAdm: null, acessoProcentric: null, acessoRemotoIntegracao: null, // Campos nulos padrão
        acessoRB: { // <<< ATUALIZADO
            ovpn: "10.31.0.25:8580", ipLocal: "67.159.239.38", user: "hoteltech", senha: "@ht2020*!",
            nota: "IP Local parece ser público." // Nota adicionada
        },
        acessoFlussonic: { // <<< ATUALIZADO
            ovpn: "10.31.0.26", ipRede: "192.168.10.50", portaSSH: 3055, portaWeb: 8080, userSSH: "hoteltech", senhaSSH: "@ht2020*", userWeb: "admin", senhaWeb: "@ht2020*", linkWeb: "http://10.31.0.26:8080"
        },
        acessoIRD: { // <<< ATUALIZADO
             ovpn: "10.31.0.25", ipRede: "192.168.10.136", user: "admin", senha: "admin", linkWeb: "http://10.31.0.25:8583"
        },
        acessoRemotoCanal: { // <<< ATUALIZADO
            tipo: "Canal Institucional", anydesk: "1058337896", senha: "@ht2020*"
        }
        // Outros blocos como Proxmox, Xtream, APK não foram fornecidos para este hotel.
    },
    // --- FIM BRISTOL SANTO ANDRÉ ---

    // --- INÍCIO CAPIVARI ECORESORT ---
    "capivari-ecoresort": {
        nome: "Capivari Ecoresort",
        cidade: "Campina Grande do Sul", estado: "PR", pais: "BR",
        imagens: ["assets/logo-hotel/Capivari_logo.jpg"],
        descricao: "Ecoresort localizado em meio à natureza na região metropolitana de Curitiba. Oferece chalés e apartamentos, piscinas, atividades de lazer como cavalgadas e trilhas, restaurante e espaço para eventos.", // Mantida Descrição
        infoAdicional: [ // Mantida Info
            { titulo: "Endereço", valor: "Estrada Municipal Antônio Kovalski, s/n - Capivari, Campina Grande do Sul - PR, 83430-000" },
            { titulo: "Telefone", valor: "(41) 3685-8300" },
            { titulo: "Website", valor: "<a href='https://capivariecoresort.com.br/' target='_blank'>Site Oficial</a>" }
        ],
        linkWhatsAppGrupo: null, backupLink: null, infoAdm: null, acessoIRD: null, acessoProcentric: null, acessoRemotoIntegracao: null, // Campos nulos padrão
        acessoRB: "Hotel não tem RB", // <<< ATUALIZADO (String)
        acessoFlussonic: { // <<< ATUALIZADO
            ovpn: "10.31.0.67", ipRede: "192.168.91.221", portaSSH: 3055, portaWeb: 80, userSSH: "hoteltech", senhaSSH: "@ht2020*", userWeb: "hoteltech", senhaWeb: "@ht2020*", linkWeb: "http://10.31.0.67:80",
            nota: "IP Entrada (enp7s0): 192.168.91.221 / IP Saída (enp8s0): 192.168.50.10" // Nota com IPs/Interfaces
        },
        acessoXtreamCodes: { // <<< NOVO BLOCO
            ovpn: "10.31.0.81", ipRede: "192.168.91.222", portaSSH: 3050, portaWeb: 25500, userSSH: "hoteltech", senhaSSH: "@ht2020*", userWeb: "hoteltech", senhaWeb: "@ht2020*!", linkWeb: "http://45.175.123.254:25500", // Link Web Externo
            logoPath: null, // TODO: Adicionar caminho PNG Xtream Codes
            nota: "IP Entrada (enp1s0): 192.168.91.222 / IP Saída Multicast (enp2s0): 192.168.50.10. Acesso Web via IP Público." // Nota com IPs e Acesso Externo
        },
        acessoRemotoCanal: { // <<< ATUALIZADO
            tipo: "Hotel não tem acesso remoto, canal institucional usa uma box android.", anydesk: null, senha: null
        }
        // Outros blocos como Proxmox, Servidor APK não foram fornecidos para este hotel.
    },
    // --- FIM CAPIVARI ECORESORT ---

    // --- INÍCIO MY MABU ---
    "my-mabu": {
        nome: "My Mabu",
        cidade: "Foz do Iguaçu", estado: "PR", pais: "BR",
        imagens: ["assets/logo-hotel/My-Mabu_logo.jpg"],
        descricao: "Apartamentos de temporada dentro do complexo Mabu Thermas Grand Resort, com acesso às piscinas termais e ao parque aquático Blue Park.",
        infoAdicional: [ { titulo: "Endereço", valor: "Av. das Cataratas, 3175 - Vila Yolanda, Foz do Iguaçu - PR, 85853-000" }, { titulo: "Telefone", valor: "(45) 3521-2000" }, { titulo: "Website", valor: "<a href='https://www.mymabu.com.br/' target='_blank'>Site Oficial</a>" } ],
        linkWhatsAppGrupo: null, backupLink: null, acessoRB: null, acessoFlussonic: null, acessoIRD: null, acessoRemotoCanal: null, acessoRemotoIntegracao: null, infoAdm: null
    },
    // --- FIM MY MABU ---

    // --- INÍCIO FAZZENDA PARK RESORT ---
    "fazzenda-park": {
        nome: "Fazzenda Park Resort",
        cidade: "Gaspar", estado: "SC", pais: "BR",
        imagens: ["assets/logo-hotel/Fazenda-Park_logo.jpg"],
        descricao: "Resort estilo fazenda em Gaspar, conhecido pela ampla estrutura de lazer com piscinas, atividades ao ar livre, recreação infantil e gastronomia farta, operando frequentemente em regime All Inclusive.",
        infoAdicional: [ { titulo: "Endereço", valor: "Rodovia SC-411, Km 6, Gaspar - SC, 89110-000" }, { titulo: "Telefone", valor: "(47) 3397-9000" }, { titulo: "Website", valor: "<a href='https://www.fazzenda.com.br/' target='_blank'>Site Oficial</a>" } ],
        linkWhatsAppGrupo: "https://chat.whatsapp.com/JFlvcFt86fl2BeermekOnJ", backupLink: null, infoAdm: null, acessoRB: "Este Hotel não tem RB",
        acessoFlussonic: { ovpn: "10.31.0.38", ipRede: "192.168.180.98", portaSSH: 3055, portaWeb: 80, userSSH: "hoteltech", senhaSSH: "@ht2020*", userWeb: "admin", senhaWeb: "@ht2020*", linkWeb: "http://10.31.0.38:80" },
        acessoIRD: "O acesso no IRD e feito atravez do servidor de integração.",
        acessoProcentric: { ipRede: "192.168.63.200", portaSSH: 22, portaWeb: 80, userSSH: "admin", senhaSSH: "Password4Partners", userWeb: "procentric", senhaWeb: "H0t3lTF4zz22*", linkWeb: "http://192.168.63.200:80", nota: "Acesso Web/IRD/Procentric via Servidor de Integração. IP Secundário: 192.168.171.20. Outros Users Web: hoteltech (HtT3ch*2022), Ramires (H0t3lTF4zz20*)" },
        acessoRemotoCanal: { tipo: "Canal Institucional", anydesk: "1579563512", senha: "@ht2020*" },
        acessoRemotoIntegracao: { tipo: "Servidor Integração", anydesk: "828007415", senha: "@ht2020*" }
    },
    // --- FIM FAZZENDA PARK RESORT ---

    // --- INÍCIO HOTEL GLÓRIA ---
    "gloria-blumenau": {
        nome: "Hotel Glória",
        cidade: "Blumenau", estado: "SC", pais: "BR",
        imagens: ["assets/logo-hotel/Gloria_logo.jpg"],
        descricao: "Hotel tradicional no centro de Blumenau, conhecido pela arquitetura enxaimel. Oferece quartos confortáveis, café da manhã colonial, restaurante e piscina.",
        infoAdicional: [ { titulo: "Endereço", valor: "Rua 7 de Setembro, 954 - Centro, Blumenau - SC, 89010-202" }, { titulo: "Telefone", valor: "(47) 3326-1988" }, { titulo: "Website", valor: "<a href='https://www.hotelgloria.com.br/' target='_blank'>Site Oficial</a>" } ],
        linkWhatsAppGrupo: null, backupLink: null, acessoRB: null, acessoFlussonic: null, acessoIRD: null, acessoRemotoCanal: null, acessoRemotoIntegracao: null, infoAdm: null
    },
    // --- FIM HOTEL GLÓRIA ---

    // --- INÍCIO BLUE TREE TOWERS VERBO DIVINO ---
    "bluetree-verbo-divino": {
        nome: "Blue Tree Towers Verbo Divino",
        cidade: "São Paulo", estado: "SP", pais: "BR",
        imagens: ["assets/logo-hotel/Blue-tree_logo.jpg"],
        descricao: "Hotel de negócios na Chácara Santo Antônio, em São Paulo. Próximo a centros empresariais, oferece quartos, restaurante, piscina, academia e salas de eventos.",
        infoAdicional: [ { titulo: "Endereço", valor: "Rua Verbo Divino, 1323 - Chácara Santo Antônio, São Paulo - SP, 04719-002" }, { titulo: "Telefone", valor: "(11) 5683-4600" }, { titulo: "Website", valor: "<a href='https://www.bluetree.com.br/hotel/blue-tree-towers-verbo-divino/' target='_blank'>Site Oficial</a>" } ],
        linkWhatsAppGrupo: null, backupLink: null, acessoRB: null, acessoFlussonic: null, acessoIRD: null, acessoRemotoCanal: null, acessoRemotoIntegracao: null, infoAdm: null
    },
    // --- FIM BLUE TREE TOWERS VERBO DIVINO ---

    // --- INÍCIO AQUALAND RESORT ---
    "aqualand": {
        nome: "Aqualand Resort",
        cidade: "Salinópolis", estado: "PA", pais: "BR",
        imagens: ["assets/logo-hotel/Aqualand_logo.jpg"],
        descricao: "Resort com parque aquático integrado em Salinópolis, Pará. Oferece apartamentos, piscinas, rio lento, toboáguas e atividades de lazer para famílias.",
        infoAdicional: [ { titulo: "Endereço", valor: "PA-124, Km 5, S/N - Destacado, Salinópolis - PA, 68721-000" }, { titulo: "Telefone", valor: "(91) 3184-2100" }, { titulo: "Website", valor: "<a href='https://www.aqualandpark.com.br/' target='_blank'>Site Oficial</a>" } ],
        linkWhatsAppGrupo: null, backupLink: null, acessoRB: null, acessoFlussonic: null, acessoIRD: null, acessoRemotoCanal: null, acessoRemotoIntegracao: null, infoAdm: null
    },
    // --- FIM AQUALAND RESORT ---

    // --- INÍCIO HOTEL TAIAMÃ ---
    "amazon-taiama": {
        nome: "Hotel Taiamã",
        cidade: "Cuiabá", estado: "MT", pais: "BR",
        imagens: ["assets/logo-hotel/Amazon_logo.jpg"],
        descricao: "Hotel da Rede Amazônia em Cuiabá, voltado para o público corporativo. Oferece estrutura com quartos, restaurante, piscina e centro de convenções.",
        infoAdicional: [ { titulo: "Endereço", valor: "Av. Historiador Rubens de Mendonça, 1184 - Bosque da Saúde, Cuiabá - MT, 78050-000" }, { titulo: "Telefone", valor: "(65) 2121-1000" }, { titulo: "Website", valor: "<a href='https://www.amazoniahoteis.com.br/hotel-taia' target='_blank'>Site Oficial</a>" } ],
        linkWhatsAppGrupo: null, backupLink: null, acessoRB: null, acessoFlussonic: null, acessoIRD: null, acessoRemotoCanal: null, acessoRemotoIntegracao: null, infoAdm: null
    },
    // --- FIM HOTEL TAIAMÃ ---

    // --- INÍCIO AMAZON PLAZA HOTEL ---
    "amazon-plaza": {
        nome: "Amazon Plaza Hotel",
        cidade: "Cuiabá", estado: "MT", pais: "BR",
        imagens: ["assets/logo-hotel/Amazon_logo.jpg"],
        descricao: "Hotel central da Rede Amazônia em Cuiabá, com decoração regional. Possui quartos, restaurante com culinária local, piscina e estrutura para eventos.",
        infoAdicional: [ { titulo: "Endereço", valor: "Av. Getúlio Vargas, 600 - Popular, Cuiabá - MT, 78005-370" }, { titulo: "Telefone", valor: "(65) 2121-2000" }, { titulo: "Website", valor: "<a href='https://www.amazoniahoteis.com.br/amazon-plaza-hotel' target='_blank'>Site Oficial</a>" } ],
        linkWhatsAppGrupo: null, backupLink: null, acessoRB: null, acessoFlussonic: null, acessoIRD: null, acessoRemotoCanal: null, acessoRemotoIntegracao: null, infoAdm: null
    },
    // --- FIM AMAZON PLAZA HOTEL ---

    // --- INÍCIO HOTEL EXPRESS AEROPORTO ---
    "amazon-aeroporto": {
        nome: "Hotel Express Aeroporto",
        cidade: "Várzea Grande", estado: "MT", pais: "BR",
        imagens: ["assets/logo-hotel/Amazon_logo.jpg"],
        descricao: "Hotel da Rede Amazônia próximo ao Aeroporto de Cuiabá (Várzea Grande), focado em praticidade para passageiros. Oferece quartos funcionais e café da manhã.",
        infoAdicional: [ { titulo: "Endereço", valor: "Av. João Ponce de Arruda, 850 - Jardim Aeroporto, Várzea Grande - MT, 78110-375" }, { titulo: "Telefone", valor: "(65) 3682-3734" }, { titulo: "Website", valor: "<a href='https://www.amazoniahoteis.com.br/hotel-express-aeroporto' target='_blank'>Site Oficial</a>" } ],
        linkWhatsAppGrupo: null, backupLink: null, acessoRB: null, acessoFlussonic: null, acessoIRD: null, acessoRemotoCanal: null, acessoRemotoIntegracao: null, infoAdm: null
    },
    // --- FIM HOTEL EXPRESS AEROPORTO ---

    // --- INÍCIO FAZENDA 3 PINHEIROS ---
    "fazenda-3-pinheiros": {
        nome: "Fazenda 3 Pinheiros",
        cidade: "Engenheiro Passos", estado: "RJ", pais: "BR",
        imagens: ["assets/logo-hotel/Fazenda-3-Pinheiros_logo.jpg"],
        descricao: "Hotel fazenda em Engenheiro Passos (RJ), próximo à Serra da Mantiqueira. Oferece lazer rural com pensão completa, piscinas, lago, cavalgadas e recreação.",
        infoAdicional: [ { titulo: "Endereço", valor: "Estrada Resende - Riacho, Km 18 - Engenheiro Passos, Resende - RJ, 27555-000" }, { titulo: "Telefone", valor: "(24) 3357-1111" }, { titulo: "Website", valor: "<a href='https://www.hotelfazenda3pinheiros.com.br/' target='_blank'>Site Oficial</a>" } ],
        linkWhatsAppGrupo: null, backupLink: null, acessoRB: null, acessoFlussonic: null, acessoIRD: null, acessoRemotoCanal: null, acessoRemotoIntegracao: null, infoAdm: null
    },
    // --- FIM FAZENDA 3 PINHEIROS ---

    // --- INÍCIO CHOCOLAND HOTEL GRAMADO ---
    "chocoland": {
        nome: "Chocoland Hotel Gramado",
        cidade: "Gramado", estado: "RS", pais: "BR",
        imagens: ["assets/logo-hotel/Chocoland_logo.jpg"],
        descricao: "Hotel temático inspirado em chocolate em Gramado. Oferece experiências lúdicas, quartos decorados, restaurante e atividades relacionadas ao tema.",
        infoAdicional: [ { titulo: "Endereço", valor: "Av. Borges de Medeiros, 4875 - Centro, Gramado - RS, 95670-000" }, { titulo: "Telefone", valor: "(54) 3421-0770" }, { titulo: "Website", valor: "<a href='https://chocoland.com.br/' target='_blank'>Site Oficial</a>" } ],
        linkWhatsAppGrupo: null, backupLink: null, acessoRB: null, acessoFlussonic: null, acessoIRD: null, acessoRemotoCanal: null, acessoRemotoIntegracao: null, infoAdm: null
    },
    // --- FIM CHOCOLAND HOTEL GRAMADO ---

    // --- INÍCIO OURO MINAS PALACE HOTEL ---
    "ouro-minas": {
        nome: "Ouro Minas Palace Hotel",
        cidade: "Belo Horizonte", estado: "MG", pais: "BR",
        imagens: ["assets/logo-hotel/Ouro-minas_logo.jpg"],
        descricao: "Hotel 5 estrelas em Belo Horizonte, conhecido pelo luxo e sofisticação. Possui quartos elegantes, restaurantes premiados, health center com piscina climatizada e amplo centro de convenções.",
        infoAdicional: [ { titulo: "Endereço", valor: "Av. Cristiano Machado, 4001 - Ipiranga, Belo Horizonte - MG, 31160-342" }, { titulo: "Telefone", valor: "(31) 3429-4001" }, { titulo: "Website", valor: "<a href='https://www.ourominas.com.br/' target='_blank'>Site Oficial</a>" } ],
        linkWhatsAppGrupo: null, backupLink: null, acessoRB: null, acessoFlussonic: null, acessoIRD: null, acessoRemotoCanal: null, acessoRemotoIntegracao: null, infoAdm: null
    },
    // --- FIM OURO MINAS PALACE HOTEL ---

    // --- INÍCIO INTERCITY BAVARIA SPORT HOTEL ---
    "intercity-bavaria": {
        nome: "Intercity Bavaria Sport Hotel",
        cidade: "Gramado", estado: "RS", pais: "BR",
        imagens: ["assets/logo-hotel/intercity-Bavaria_logo.jpg"],
        descricao: "Hotel em Gramado com estilo bávaro. Dispõe de quartos aconchegantes, piscinas (externa e interna aquecida), quadras esportivas, restaurante e área verde.",
        infoAdicional: [ { titulo: "Endereço", valor: "R. da Bavária, 543 - Bavária, Gramado - RS, 95670-000" }, { titulo: "Telefone", valor: "(54) 3286-2344" }, { titulo: "Website", valor: "<a href='https://www.intercityhotels.com/hotel-gramado/intercity-bavaria-sport-hotel/51/' target='_blank'>Site Oficial</a>" } ],
        linkWhatsAppGrupo: null, backupLink: null, acessoRB: null, acessoFlussonic: null, acessoIRD: null, acessoRemotoCanal: null, acessoRemotoIntegracao: null, infoAdm: null
    },
    // --- FIM INTERCITY BAVARIA SPORT HOTEL ---

    // --- INÍCIO JAPY GOLF RESORT HOTEL ---
    "japy-golf": {
        nome: "Japy Golf Resort Hotel",
        cidade: "Cabreúva", estado: "SP", pais: "BR",
        imagens: ["assets/logo-hotel/Japy-Golf_logo.jpg"],
        descricao: "Resort em Cabreúva com campo de golfe oficial. Oferece acomodações confortáveis, piscinas, restaurante, spa e estrutura completa de lazer em meio à natureza.",
        infoAdicional: [ { titulo: "Endereço", valor: "Alameda Algarve, Gleba B - Santa Julia, Cabreúva - SP, 13318-000" }, { titulo: "Telefone", valor: "(11) 4529-9000" }, { titulo: "Website", valor: "<a href='https://japygolfresort.com.br/' target='_blank'>Site Oficial</a>" } ],
        linkWhatsAppGrupo: null, backupLink: null, acessoRB: null, acessoFlussonic: null, acessoIRD: null, acessoRemotoCanal: null, acessoRemotoIntegracao: null, infoAdm: null
    },
    // --- FIM JAPY GOLF RESORT HOTEL ---

    // --- INÍCIO THERMAS RESORT WALTER WORLD ---
    "thermas-walter-world": {
        nome: "Thermas Resort Walter World",
        cidade: "Poços de Caldas", estado: "MG", pais: "BR",
        imagens: ["assets/logo-hotel/Thermas-Poços-de-caldas_logo.jpg"],
        descricao: "Resort em Poços de Caldas com parque temático (Walter World) anexo. Dispõe de quartos, piscinas termais, restaurante e acesso às atrações do parque.",
        infoAdicional: [ { titulo: "Endereço", valor: "Av. Vereador Edmundo Cardilo, 3131 - Jardim Del Rey, Poços de Caldas - MG, 37706-100" }, { titulo: "Telefone", valor: "(35) 2101-9700" }, { titulo: "Website", valor: "<a href='https://www.thermasresortww.com.br/' target='_blank'>Site Oficial</a>" } ],
        linkWhatsAppGrupo: null, backupLink: null, acessoRB: null, acessoFlussonic: null, acessoIRD: null, acessoRemotoCanal: null, acessoRemotoIntegracao: null, infoAdm: null
    },
    // --- FIM THERMAS RESORT WALTER WORLD ---

    // --- INÍCIO VILAGE INN ---
    "vilage-inn": {
        nome: "Vilage Inn",
        cidade: "Poços de Caldas", estado: "MG", pais: "BR",
        imagens: ["assets/logo-hotel/Vilage-inn_logo.jpg"],
        descricao: "Hotel da rede Nacional Inn em Poços de Caldas, focado em lazer familiar. Possui parque aquático, recreação, pensão completa e acomodações confortáveis.",
        infoAdicional: [ { titulo: "Endereço", valor: "Av. Vereador Edmundo Cardillo, 3500 - Jardim Del Rey, Poços de Caldas - MG, 37706-104" }, { titulo: "Telefone", valor: "(35) 2101-9700" }, { titulo: "Website", valor: "<a href='https://www.nacionalinn.com.br/hoteis/vilage-inn-pocos-de-caldas' target='_blank'>Site Oficial (Nacional Inn)</a>" } ],
        linkWhatsAppGrupo: null, backupLink: null, acessoRB: null, acessoFlussonic: null, acessoIRD: null, acessoRemotoCanal: null, acessoRemotoIntegracao: null, infoAdm: null
    },
    // --- FIM VILAGE INN ---

    // --- INÍCIO GOLDEN PARK POÇOS DE CALDAS ---
    "golden-pocos": {
        nome: "Golden Park Poços de Caldas",
        cidade: "Poços de Caldas", estado: "MG", pais: "BR",
        imagens: ["assets/logo-hotel/Golden-park_logo.jpg"],
        descricao: "Hotel moderno da Rede Nacional Inn em Poços de Caldas, próximo ao centro. Oferece quartos confortáveis, piscina, restaurante e estrutura para eventos.",
        infoAdicional: [ { titulo: "Endereço", valor: "Av. Vereador Edmundo Cardillo, 3793 - Jardim Del Rey, Poços de Caldas - MG, 37706-106" }, { titulo: "Telefone", valor: "(35) 2101-8989" }, { titulo: "Website", valor: "<a href='https://www.nacionalinn.com.br/hoteis/golden-park-pocos-de-caldas' target='_blank'>Site Oficial (Nacional Inn)</a>" } ],
        linkWhatsAppGrupo: null, backupLink: null, acessoRB: null, acessoFlussonic: null, acessoIRD: null, acessoRemotoCanal: null, acessoRemotoIntegracao: null, infoAdm: null
    },
    // --- FIM GOLDEN PARK POÇOS DE CALDAS ---

    // --- INÍCIO JUREMA ÁGUAS QUENTES ---
    "jurema": {
        nome: "Jurema Águas Quentes",
        cidade: "Iretama", estado: "PR", pais: "BR",
        imagens: ["assets/logo-hotel/Jurema_logo.jpg"],
        descricao: "Complexo de resorts com águas termais em Iretama (PR). Inclui os resorts Lagos de Jurema e Jardins de Jurema, oferecendo piscinas, spa, atividades de lazer e gastronomia.",
        infoAdicional: [ { titulo: "Endereço", valor: "BR-487, Km 238, s/n - Termas de Jurema, Iretama - PR, 87265-000" }, { titulo: "Telefone", valor: "(44) 3573-4400" }, { titulo: "Website", valor: "<a href='https://www.juremaaguasquentes.com.br/' target='_blank'>Site Oficial</a>" } ],
        linkWhatsAppGrupo: null, backupLink: null, acessoRB: null, acessoFlussonic: null, acessoIRD: null, acessoRemotoCanal: null, acessoRemotoIntegracao: null, infoAdm: null
    },
    // --- FIM JUREMA ÁGUAS QUENTES ---

    // --- INÍCIO THERMAS PARK RESORT & SPA ---
    "thermas-olimpia": {
        nome: "Thermas Park Resort & Spa",
        cidade: "Olímpia", estado: "SP", pais: "BR",
        imagens: ["assets/logo-hotel/Thermas-Park-Olimpia_logo.jpg"],
        descricao: "Resort em Olímpia, anexo ao parque aquático Thermas dos Laranjais. Oferece apartamentos, piscinas privativas, restaurantes e acesso exclusivo ao parque.",
        infoAdicional: [ { titulo: "Endereço", valor: "Av. do Folclore, 1543 - Jardim Santa Efigênia, Olímpia - SP, 15405-014" }, { titulo: "Telefone", valor: "(17) 3279-2400" }, { titulo: "Website", valor: "<a href='https://thermasparkresort.com.br/' target='_blank'>Site Oficial</a>" } ],
        linkWhatsAppGrupo: null, backupLink: null, acessoRB: null, acessoFlussonic: null, acessoIRD: null, acessoRemotoCanal: null, acessoRemotoIntegracao: null, infoAdm: null
    },
    // --- FIM THERMAS PARK RESORT & SPA ---

    // --- INÍCIO HOSPITAL EVANGÉLICO MACKENZIE ---
    "hospital-evangelico": {
        nome: "Hospital Evangélico Mackenzie",
        cidade: "Curitiba", estado: "PR", pais: "BR",
        imagens: ["assets/logo-hotel/Hospital-Evangelico_logo.jpg"],
        descricao: "Hospital geral de alta complexidade em Curitiba, referência em diversas especialidades médicas e cirúrgicas. Possui pronto-socorro, centro cirúrgico, UTI e unidades de internação.",
        infoAdicional: [ { titulo: "Endereço", valor: "Alameda Augusto Stellfeld, 1908 - Bigorrilho, Curitiba - PR, 80730-150" }, { titulo: "Telefone", valor: "(41) 3240-5000" }, { titulo: "Website", valor: "<a href='https://www.hospitalmackenzie.com.br/' target='_blank'>Site Oficial</a>" } ],
        linkWhatsAppGrupo: null, backupLink: null, acessoRB: null, acessoFlussonic: null, acessoIRD: null, acessoRemotoCanal: null, acessoRemotoIntegracao: null, infoAdm: null
    },
    // --- FIM HOSPITAL EVANGÉLICO MACKENZIE ---

    // --- INÍCIO HOSPITAL INC (INSTITUTO DE NEUROLOGIA DE CURITIBA) ---
    "hospital-inc": {
        nome: "Hospital INC (Instituto de Neurologia de Curitiba)",
        cidade: "Curitiba", estado: "PR", pais: "BR",
        imagens: ["assets/logo-hotel/hospital-inc_logo.jpg"],
        descricao: "Hospital especializado em neurologia e neurocirurgia em Curitiba, referência nacional e internacional. Oferece tratamento para doenças do cérebro, coluna, nervos e músculos.",
        infoAdicional: [ { titulo: "Endereço", valor: "Rua Jeremias Maciel Perretto, 300 - Campo Comprido, Curitiba - PR, 81210-310" }, { titulo: "Telefone", valor: "(41) 3028-8545" }, { titulo: "Website", valor: "<a href='https://inc-neuro.com.br/' target='_blank'>Site Oficial</a>" } ],
        linkWhatsAppGrupo: null, backupLink: null, acessoRB: null, acessoFlussonic: null, acessoIRD: null, acessoRemotoCanal: null, acessoRemotoIntegracao: null, infoAdm: null
    },
    // --- FIM HOSPITAL INC (INSTITUTO DE NEUROLOGIA DE CURITIBA) ---

    // --- INÍCIO SUN CITY HOTEL & EVENTOS ---
    "sun-city": {
        nome: "Sun City Hotel & Eventos",
        cidade: "Foz do Iguaçu", estado: "PR", pais: "BR",
        imagens: ["assets/logo-hotel/sun-city_logo.jpg"],
        descricao: "Hotel em Foz do Iguaçu com foco em eventos e lazer. Oferece quartos, piscina, restaurante e salões para convenções ou festas.",
        infoAdicional: [ { titulo: "Endereço", valor: "Rodovia das Cataratas, Km 12 - Remanso Grande, Foz do Iguaçu - PR, 85853-860" }, { titulo: "Telefone", valor: "(45) 3529-8686" }, { titulo: "Website", valor: "<a href='#' target='_blank'>Site (Não encontrado)</a>" } ],
        linkWhatsAppGrupo: null, backupLink: null, acessoRB: null, acessoFlussonic: null, acessoIRD: null, acessoRemotoCanal: null, acessoRemotoIntegracao: null, infoAdm: null
    },
    // --- FIM SUN CITY HOTEL & EVENTOS ---

    // --- INÍCIO MABU CURITIBA BUSINESS ---
    "mabu-business": {
        nome: "Mabu Curitiba Business",
        cidade: "Curitiba", estado: "PR", pais: "BR",
        imagens: ["assets/logo-hotel/mabu-curitiba_logo.jpg"],
        descricao: "Hotel tradicional no centro de Curitiba, voltado para o público executivo. Localizado em frente à Praça Santos Andrade, oferece quartos, restaurante, bar e estrutura para eventos.",
        infoAdicional: [ { titulo: "Endereço", valor: "Rua XV de Novembro, 830 - Centro, Curitiba - PR, 80020-310" }, { titulo: "Telefone", valor: "(41) 3219-6000" }, { titulo: "Website", valor: "<a href='https://www.hoteismabu.com.br/hoteis/mabu-curitiba-business/' target='_blank'>Site Oficial</a>" } ],
        linkWhatsAppGrupo: null, backupLink: null, acessoRB: null, acessoFlussonic: null, acessoIRD: null, acessoRemotoCanal: null, acessoRemotoIntegracao: null, infoAdm: null
    },
    // --- FIM MABU CURITIBA BUSINESS ---

    // --- INÍCIO THE WESTIN PORTO DE GALINHAS, AN ALL-INCLUSIVE RESORT ---
    "westin-porto": {
        nome: "The Westin Porto de Galinhas, An All-Inclusive Resort",
        cidade: "Ipojuca", estado: "PE", pais: "BR",
        imagens: ["assets/logo-hotel/PGA_logo.jpg"],
        descricao: "Resort All-Inclusive de luxo em Porto de Galinhas (PE). Oferece suítes espaçosas, piscinas, acesso direto à praia, restaurantes, spa e atividades de bem-estar.",
        infoAdicional: [ { titulo: "Endereço", valor: "Rodovia PE-009, km 5,5 - Porto de Galinhas, Ipojuca - PE, 55590-000" }, { titulo: "Telefone", valor: "(81) 3311-1700" }, { titulo: "Website", valor: "<a href='https://www.marriott.com/pt/hotels/recwi-the-westin-porto-de-galinhas-an-all-inclusive-resort/overview/' target='_blank'>Site Oficial</a>" } ],
        linkWhatsAppGrupo: null, backupLink: null, acessoRB: null, acessoFlussonic: null, acessoIRD: null, acessoRemotoCanal: null, acessoRemotoIntegracao: null, infoAdm: null
    },
    // --- FIM THE WESTIN PORTO DE GALINHAS, AN ALL-INCLUSIVE RESORT ---

    // --- INÍCIO CANDEIAS HOTEL PIÇARRAS ---
    "candeias-picarras": {
        nome: "Candeias Hotel Piçarras",
        cidade: "Balneário Piçarras", estado: "SC", pais: "BR",
        imagens: ["assets/logo-hotel/Candeias_logo.jpg"],
        descricao: "Hotel da rede Candeias em Balneário Piçarras, com apartamentos mobiliados próximos à praia.",
        infoAdicional: [ { titulo: "Endereço", valor: "Av. Nereu Ramos, 110 - Centro, Balneário Piçarras - SC, 88380-000" }, { titulo: "Telefone", valor: "0800 001 1100" }, { titulo: "Website", valor: "<a href='https://www.clubecandeias.com/' target='_blank'>Site Rede Candeias</a>" } ],
        linkWhatsAppGrupo: null, backupLink: null, acessoRB: null, acessoFlussonic: null, acessoIRD: null, acessoRemotoCanal: null, acessoRemotoIntegracao: null, infoAdm: null
    },
    // --- FIM CANDEIAS HOTEL PIÇARRAS ---

    // --- INÍCIO CANDEIAS GUARUJÁ ---
    "candeias-guaruja": {
        nome: "Candeias Guarujá",
        cidade: "Guarujá", estado: "SP", pais: "BR",
        imagens: ["assets/logo-hotel/Candeias_logo.jpg"],
        descricao: "Unidade da rede Candeias no Guarujá, oferecendo apartamentos para associados próximos à praia.",
        infoAdicional: [ { titulo: "Endereço", valor: "R. Marivaldo Fernandes, 101 - Jardim Virginia, Guarujá - SP, 11442-180" }, { titulo: "Telefone", valor: "0800 001 1100" }, { titulo: "Website", valor: "<a href='https://www.clubecandeias.com/' target='_blank'>Site Rede Candeias</a>" } ],
        linkWhatsAppGrupo: null, backupLink: null, acessoRB: null, acessoFlussonic: null, acessoIRD: null, acessoRemotoCanal: null, acessoRemotoIntegracao: null, infoAdm: null
    },
    // --- FIM CANDEIAS GUARUJÁ ---

    // --- INÍCIO CANDEIAS GOLD FISH ---
    "candeias-goldfish": {
        nome: "Candeias Gold Fish",
        cidade: "Ubatuba", estado: "SP", pais: "BR",
        imagens: ["assets/logo-hotel/Candeias_logo.jpg"],
        descricao: "Hotel da rede Candeias na Praia da Enseada em Ubatuba, com estrutura de lazer incluindo piscina.",
        infoAdicional: [ { titulo: "Endereço", valor: "R. Guaicurus, 325 - Praia da Enseada, Ubatuba - SP, 11680-000" }, { titulo: "Telefone", valor: "0800 001 1100" }, { titulo: "Website", valor: "<a href='https://www.clubecandeias.com/' target='_blank'>Site Rede Candeias</a>" } ],
        linkWhatsAppGrupo: null, backupLink: null, acessoRB: null, acessoFlussonic: null, acessoIRD: null, acessoRemotoCanal: null, acessoRemotoIntegracao: null, infoAdm: null
    },
    // --- FIM CANDEIAS GOLD FISH ---

    // --- INÍCIO CANDEIAS COMPLEXO TURÍSTICO ---
    "candeias-complexo": {
        nome: "Candeias Complexo Turístico",
        cidade: "Serra Negra", estado: "SP", pais: "BR",
        imagens: ["assets/logo-hotel/Candeias_logo.jpg"],
        descricao: "Complexo da rede Candeias em Serra Negra, com piscinas, toboáguas, chalés e atividades de lazer.",
        infoAdicional: [ { titulo: "Endereço", valor: "Rodovia SP 360, Km 143,5 - Serra Negra, SP, 13930-000" }, { titulo: "Telefone", valor: "0800 001 1100" }, { titulo: "Website", valor: "<a href='https://www.clubecandeias.com/' target='_blank'>Site Rede Candeias</a>" } ],
        linkWhatsAppGrupo: null, backupLink: null, acessoRB: null, acessoFlussonic: null, acessoIRD: null, acessoRemotoCanal: null, acessoRemotoIntegracao: null, infoAdm: null
    },
    // --- FIM CANDEIAS COMPLEXO TURÍSTICO ---

    // --- INÍCIO CANDEIAS PARADOR DA CACHOEIRA ---
    "candeias-parador": {
        nome: "Candeias Parador da Cachoeira",
        cidade: "Urubici", estado: "SC", pais: "BR",
        imagens: ["assets/logo-hotel/Candeias_logo.jpg"],
        descricao: "Hotel pousada da rede Candeias em Urubici, integrado à natureza, próximo à Cascata do Avencal.",
        infoAdicional: [ { titulo: "Endereço", valor: "Estrada Geral do Avencal, s/n - Zona Rural, Urubici - SC, 88650-000" }, { titulo: "Telefone", valor: "0800 001 1100" }, { titulo: "Website", valor: "<a href='https://www.clubecandeias.com/' target='_blank'>Site Rede Candeias</a>" } ],
        linkWhatsAppGrupo: null, backupLink: null, acessoRB: null, acessoFlussonic: null, acessoIRD: null, acessoRemotoCanal: null, acessoRemotoIntegracao: null, infoAdm: null
    },
    // --- FIM CANDEIAS PARADOR DA CACHOEIRA ---

    // --- INÍCIO CANDEIAS CAIOBÁ ---
    "candeias-caioba": {
        nome: "Candeias Caiobá",
        cidade: "Matinhos", estado: "PR", pais: "BR",
        imagens: ["assets/logo-hotel/Candeias_logo.jpg"],
        descricao: "Hotel da rede Candeias em Caiobá (Matinhos), próximo à praia, com apartamentos e área de lazer.",
        infoAdicional: [ { titulo: "Endereço", valor: "Rua Augusto Blitzkow, 202 - Caiobá, Matinhos - PR, 83260-000" }, { titulo: "Telefone", valor: "0800 001 1100" }, { titulo: "Website", valor: "<a href='https://www.clubecandeias.com/' target='_blank'>Site Rede Candeias</a>" } ],
        linkWhatsAppGrupo: null, backupLink: null, acessoRB: null, acessoFlussonic: null, acessoIRD: null, acessoRemotoCanal: null, acessoRemotoIntegracao: null, infoAdm: null
    },
    // --- FIM CANDEIAS CAIOBÁ ---

    // --- INÍCIO CANDEIAS UBATUBA PRAIA ---
    "candeias-ubatuba": {
        nome: "Candeias Ubatuba Praia",
        cidade: "Ubatuba", estado: "SP", pais: "BR",
        imagens: ["assets/logo-hotel/Candeias_logo.jpg"],
        descricao: "Unidade residencial da rede Candeias em Ubatuba, na Praia das Toninhas.",
        infoAdicional: [ { titulo: "Endereço", valor: "R. Benedito Rodrigues de Oliveira, 31 - Praia das Toninhas, Ubatuba - SP, 11680-000" }, { titulo: "Telefone", valor: "0800 001 1100" }, { titulo: "Website", valor: "<a href='https://www.clubecandeias.com/' target='_blank'>Site Rede Candeias</a>" } ],
        linkWhatsAppGrupo: null, backupLink: null, acessoRB: null, acessoFlussonic: null, acessoIRD: null, acessoRemotoCanal: null, acessoRemotoIntegracao: null, infoAdm: null
    },
    // --- FIM CANDEIAS UBATUBA PRAIA ---

    // --- INÍCIO CANDEIAS HOTEL GUARANY ---
    "candeias-guarany": {
        nome: "Candeias Hotel Guarany",
        cidade: "Foz do Iguaçu", estado: "PR", pais: "BR",
        imagens: ["assets/logo-hotel/Candeias_logo.jpg"],
        descricao: "Hotel da rede Candeias no centro de Foz do Iguaçu.",
        infoAdicional: [ { titulo: "Endereço", valor: "R. Belarmino de Mendonça, 506 - Centro, Foz do Iguaçu - PR, 85851-100" }, { titulo: "Telefone", valor: "0800 001 1100" }, { titulo: "Website", valor: "<a href='https://www.clubecandeias.com/' target='_blank'>Site Rede Candeias</a>" } ],
        linkWhatsAppGrupo: null, backupLink: null, acessoRB: null, acessoFlussonic: null, acessoIRD: null, acessoRemotoCanal: null, acessoRemotoIntegracao: null, infoAdm: null
    },
    // --- FIM CANDEIAS HOTEL GUARANY ---

    // --- INÍCIO CANDEIAS GUARATUBA ---
    "candeias-guaratuba": {
        nome: "Candeias Guaratuba",
        cidade: "Guaratuba", estado: "PR", pais: "BR",
        imagens: ["assets/logo-hotel/Candeias_logo.jpg"],
        descricao: "Unidade da rede Candeias em Guaratuba, com apartamentos próximos à praia central.",
        infoAdicional: [ { titulo: "Endereço", valor: "Av. Visconde do Rio Branco, 118 - Centro, Guaratuba - PR, 83280-000" }, { titulo: "Telefone", valor: "0800 001 1100" }, { titulo: "Website", valor: "<a href='https://www.clubecandeias.com/' target='_blank'>Site Rede Candeias</a>" } ],
        linkWhatsAppGrupo: null, backupLink: null, acessoRB: null, acessoFlussonic: null, acessoIRD: null, acessoRemotoCanal: null, acessoRemotoIntegracao: null, infoAdm: null
    },
    // --- FIM CANDEIAS GUARATUBA ---

    // --- INÍCIO CANDEIAS HOTEL SAN FELICE ---
    "candeias-sanfelice": {
        nome: "Candeias Hotel San Felice",
        cidade: "Balneário Camboriú", estado: "SC", pais: "BR",
        imagens: ["assets/logo-hotel/Candeias_logo.jpg"],
        descricao: "Hotel da rede Candeias em Balneário Camboriú, próximo à praia central.",
        infoAdicional: [ { titulo: "Endereço", valor: "Rua 1401, 20 - Centro, Balneário Camboriú - SC, 88330-805" }, { titulo: "Telefone", valor: "0800 001 1100" }, { titulo: "Website", valor: "<a href='https://www.clubecandeias.com/' target='_blank'>Site Rede Candeias</a>" } ],
        linkWhatsAppGrupo: null, backupLink: null, acessoRB: null, acessoFlussonic: null, acessoIRD: null, acessoRemotoCanal: null, acessoRemotoIntegracao: null, infoAdm: null
    },
    // --- FIM CANDEIAS HOTEL SAN FELICE ---

    // --- INÍCIO CANDEIAS EDIFÍCIO VIVIANE ---
    "candeias-viviane": {
        nome: "Candeias Edifício Viviane",
        cidade: "Florianópolis", estado: "SC", pais: "BR",
        imagens: ["assets/logo-hotel/Candeias_logo.jpg"],
        descricao: "Unidade residencial da rede Candeias na praia de Canasvieiras, Florianópolis.",
        infoAdicional: [ { titulo: "Endereço", valor: "Rua Doutor Hélio Anjos Ortiz, 61 - Canasvieiras, Florianópolis - SC, 88054-140" }, { titulo: "Telefone", valor: "0800 001 1100" }, { titulo: "Website", valor: "<a href='https://www.clubecandeias.com/' target='_blank'>Site Rede Candeias</a>" } ],
        linkWhatsAppGrupo: null, backupLink: null, acessoRB: null, acessoFlussonic: null, acessoIRD: null, acessoRemotoCanal: null, acessoRemotoIntegracao: null, infoAdm: null
    },
    // --- FIM CANDEIAS EDIFÍCIO VIVIANE ---

    // --- INÍCIO CANDEIAS COSTA VERDE ---
    "candeias-costaverde": {
        nome: "Candeias Costa Verde",
        cidade: "Balneário Camboriú", estado: "SC", pais: "BR",
        imagens: ["assets/logo-hotel/Candeias_logo.jpg"],
        descricao: "Unidade da rede Candeias em Balneário Camboriú, próxima à orla.",
        infoAdicional: [ { titulo: "Endereço", valor: "Rua 1500, 773 - Centro, Balneário Camboriú - SC, 88330-598" }, { titulo: "Telefone", valor: "0800 001 1100" }, { titulo: "Website", valor: "<a href='https://www.clubecandeias.com/' target='_blank'>Site Rede Candeias</a>" } ],
        linkWhatsAppGrupo: null, backupLink: null, acessoRB: null, acessoFlussonic: null, acessoIRD: null, acessoRemotoCanal: null, acessoRemotoIntegracao: null, infoAdm: null
    },
    // --- FIM CANDEIAS COSTA VERDE ---

    // --- INÍCIO CANDEIAS BELLA VISTA ---
    "candeias-bellavista": {
        nome: "Candeias Bella Vista",
        cidade: "Bombinhas", estado: "SC", pais: "BR",
        imagens: ["assets/logo-hotel/Candeias_logo.jpg"],
        descricao: "Unidade da rede Candeias em Bombinhas, com vista para o mar.",
        infoAdicional: [ { titulo: "Endereço", valor: "Av. Ver. Manoel José dos Santos, 159 - Centro, Bombinhas - SC, 88215-000" }, { titulo: "Telefone", valor: "0800 001 1100" }, { titulo: "Website", valor: "<a href='https://www.clubecandeias.com/' target='_blank'>Site Rede Candeias</a>" } ],
        linkWhatsAppGrupo: null, backupLink: null, acessoRB: null, acessoFlussonic: null, acessoIRD: null, acessoRemotoCanal: null, acessoRemotoIntegracao: null, infoAdm: null
    },
    // --- FIM CANDEIAS BELLA VISTA ---

    // --- INÍCIO CANDEIAS II ---
    "candeias-balneario2": {
        nome: "Candeias II",
        cidade: "Balneário Camboriú", estado: "SC", pais: "BR",
        imagens: ["assets/logo-hotel/Candeias_logo.jpg"],
        descricao: "Unidade da rede Candeias em Balneário Camboriú.",
        infoAdicional: [ { titulo: "Endereço", valor: "Rua 1131, 125 - Centro, Balneário Camboriú - SC, 88330-819" }, { titulo: "Telefone", valor: "0800 001 1100" }, { titulo: "Website", valor: "<a href='https://www.clubecandeias.com/' target='_blank'>Site Rede Candeias</a>" } ],
        linkWhatsAppGrupo: null, backupLink: null, acessoRB: null, acessoFlussonic: null, acessoIRD: null, acessoRemotoCanal: null, acessoRemotoIntegracao: null, infoAdm: null
    },
    // --- FIM CANDEIAS II ---

    // --- INÍCIO CANDEIAS FOZ DO IGUAÇU ---
    "candeias-foz": {
        nome: "Candeias Foz do Iguaçu",
        cidade: "Foz do Iguaçu", estado: "PR", pais: "BR",
        imagens: ["assets/logo-hotel/Candeias_logo.jpg"],
        descricao: "Unidade da rede Candeias em Foz do Iguaçu.",
        infoAdicional: [ { titulo: "Endereço", valor: "Av. Juscelino Kubitscheck, 1683 - Vila Pérola, Foz do Iguaçu - PR, 85858-450" }, { titulo: "Telefone", valor: "0800 001 1100" }, { titulo: "Website", valor: "<a href='https://www.clubecandeias.com/' target='_blank'>Site Rede Candeias</a>" } ],
        linkWhatsAppGrupo: null, backupLink: null, acessoRB: null, acessoFlussonic: null, acessoIRD: null, acessoRemotoCanal: null, acessoRemotoIntegracao: null, infoAdm: null
    },
    // --- FIM CANDEIAS FOZ DO IGUAÇU ---

    // --- INÍCIO CANDEIAS I ---
    "candeias-camboriu": {
        nome: "Candeias I",
        cidade: "Balneário Camboriú", estado: "SC", pais: "BR",
        imagens: ["assets/logo-hotel/Candeias_logo.jpg"],
        descricao: "Hotel da rede Candeias no centro de Balneário Camboriú.",
        infoAdicional: [ { titulo: "Endereço", valor: "Rua 701, 109 - Centro, Balneário Camboriú - SC, 88330-771" }, { titulo: "Telefone", valor: "0800 001 1100" }, { titulo: "Website", valor: "<a href='https://www.clubecandeias.com/' target='_blank'>Site Rede Candeias</a>" } ],
        linkWhatsAppGrupo: null, backupLink: null, acessoRB: null, acessoFlussonic: null, acessoIRD: null, acessoRemotoCanal: null, acessoRemotoIntegracao: null, infoAdm: null
    },
    // --- FIM CANDEIAS I ---

    // --- INÍCIO CANDEIAS ILHAS GREGAS ---
    "candeias-ilhasgregas": {
        nome: "Candeias Ilhas Gregas",
        cidade: "Florianópolis", estado: "SC", pais: "BR",
        imagens: ["assets/logo-hotel/Candeias_logo.jpg"],
        descricao: "Hotel da rede Candeias na praia da Cachoeira do Bom Jesus, Florianópolis.",
        infoAdicional: [ { titulo: "Endereço", valor: "Av. Luiz Boiteux Piazza, 3303 - Cachoeira do Bom Jesus, Florianópolis - SC, 88056-000" }, { titulo: "Telefone", valor: "0800 001 1100" }, { titulo: "Website", valor: "<a href='https://www.clubecandeias.com/' target='_blank'>Site Rede Candeias</a>" } ],
        linkWhatsAppGrupo: null, backupLink: null, acessoRB: null, acessoFlussonic: null, acessoIRD: null, acessoRemotoCanal: null, acessoRemotoIntegracao: null, infoAdm: null
    },
    // --- FIM CANDEIAS ILHAS GREGAS ---

    // --- INÍCIO SLAVIERO ROCKEFELLER CONCEPTUAL ---
    "slaviero-rockfeler": {
        nome: "Slaviero Rockefeller Conceptual",
        cidade: "Curitiba", estado: "PR", pais: "BR",
        imagens: ["assets/logo-hotel/Slavieiro-Curitiba_logo.jpg"],
        descricao: "Hotel de design contemporâneo no centro de Curitiba, próximo à Rua 24 Horas. Oferece quartos modernos, restaurante, bar e academia.",
        infoAdicional: [ { titulo: "Endereço", valor: "Rua Rockefeller, 11 - Rebouças, Curitiba - PR, 80230-130" }, { titulo: "Telefone", valor: "(41) 3017-1000" }, { titulo: "Website", valor: "<a href='https://www.slavierohoteis.com.br/hoteis/slaviero-rockefeller-conceptual/' target='_blank'>Site Oficial</a>" } ],
        linkWhatsAppGrupo: null, backupLink: null, acessoRB: null, acessoFlussonic: null, acessoIRD: null, acessoRemotoCanal: null, acessoRemotoIntegracao: null, infoAdm: null
    },
    // --- FIM SLAVIERO ROCKEFELLER CONCEPTUAL ---

    // --- INÍCIO SALINAS EXCLUSIVE RESORT ---
    "gav-resorts": {
        nome: "Salinas Exclusive Resort",
        cidade: "Salinópolis", estado: "PA", pais: "BR",
        imagens: ["assets/logo-hotel/Gav-Resorts_logo.jpg"],
        descricao: "Resort da GAV em Salinópolis, oferecendo apartamentos mobiliados em regime de multipropriedade, com acesso a piscinas e área de lazer.",
        infoAdicional: [ { titulo: "Endereço", valor: "Av. Beira Mar, s/n - Centro, Salinópolis - PA, 68721-000" }, { titulo: "Telefone", valor: "(91) 3792-9999" }, { titulo: "Website", valor: "<a href='https://gavresorts.com.br/empreendimento/salinas-exclusive-resort/' target='_blank'>Site GAV (Salinas Exclusive)</a>" } ],
        linkWhatsAppGrupo: null, backupLink: null, acessoRB: null, acessoFlussonic: null, acessoIRD: null, acessoRemotoCanal: null, acessoRemotoIntegracao: null, infoAdm: null
    },
    // --- FIM SALINAS EXCLUSIVE RESORT ---

    // --- INÍCIO HILTON GARDEN INN MACEIÓ ---
    "hilton-maceio": {
        nome: "Hilton Garden Inn Maceió",
        cidade: "Maceió", estado: "AL", pais: "BR",
        imagens: ["assets/logo-hotel/Hilton-Maceio_logo.jpg"],
        descricao: "Hotel moderno na orla de Pajuçara em Maceió. Oferece quartos com vista para o mar, piscina na cobertura, restaurante, academia e business center.",
        infoAdicional: [ { titulo: "Endereço", valor: "Av. Dr. Antônio Gouveia, 1113 - Pajuçara, Maceió - AL, 57030-170" }, { titulo: "Telefone", valor: "(82) 3111-0100" }, { titulo: "Website", valor: "<a href='https://www.hilton.com/en/hotels/mczmagi-hilton-garden-inn-maceio/' target='_blank'>Site Oficial</a>" } ],
        linkWhatsAppGrupo: null, backupLink: null, acessoRB: null, acessoFlussonic: null, acessoIRD: null, acessoRemotoCanal: null, acessoRemotoIntegracao: null, infoAdm: null
    },
    // --- FIM HILTON GARDEN INN MACEIÓ ---

    // --- INÍCIO TULIP INN ITAGUAÍ ---
    "hilton-tulip": {
        nome: "Tulip Inn Itaguaí",
        cidade: "Itaguaí", estado: "RJ", pais: "BR",
        imagens: ["assets/logo-hotel/Tulip-Inn_logo.jpg"],
        descricao: "Hotel funcional em Itaguaí, focado no público corporativo que atende ao porto e indústrias locais. Oferece quartos, restaurante e salas de reuniões.",
        infoAdicional: [ { titulo: "Endereço", valor: "Rod. Rio-Santos, Km 410 - Vila Ibirapitanga, Itaguaí - RJ, 23812-101" }, { titulo: "Telefone", valor: "(21) 2688-9500" }, { titulo: "Website", valor: "<a href='https://tulip-inn-itaguai.goldentulip.com/pt-br/' target='_blank'>Site Oficial (Golden Tulip)</a>" } ],
        linkWhatsAppGrupo: null, backupLink: null, acessoRB: null, acessoFlussonic: null, acessoIRD: null, acessoRemotoCanal: null, acessoRemotoIntegracao: null, infoAdm: null
    },
    // --- FIM TULIP INN ITAGUAÍ ---

    // --- INÍCIO RIO HOTEL BY BOURBON SÃO PAULO | BARRA FUNDA ---
    "bourbon-barrafunda": {
        nome: "Rio Hotel by Bourbon São Paulo | Barra Funda",
        cidade: "São Paulo", estado: "SP", pais: "BR",
        imagens: ["assets/logo-hotel/bourbon-rio-barra-funda_logo.jpg"],
        descricao: "Hotel moderno próximo ao Terminal Barra Funda e ao Allianz Parque. Oferece quartos funcionais, restaurante, academia e estrutura para eventos.",
        infoAdicional: [ { titulo: "Endereço", valor: "Rua Dr. Homem de Melo, 370 - Perdizes, São Paulo - SP, 05007-001" }, { titulo: "Telefone", valor: "(11) 3670-7700" }, { titulo: "Website", valor: "<a href='https://www.bourbon.com.br/hotelrio/rio-hotel-by-bourbon-sao-paulo-barra-funda/' target='_blank'>Site Oficial</a>" } ],
        linkWhatsAppGrupo: null, backupLink: null, acessoRB: null, acessoFlussonic: null, acessoIRD: null, acessoRemotoCanal: null, acessoRemotoIntegracao: null, infoAdm: null
    },
    // --- FIM RIO HOTEL BY BOURBON SÃO PAULO | BARRA FUNDA ---

    // --- INÍCIO CENTER HOTEL GREENVILLE ---
    "center-hotel": {
        nome: "Center Hotel Greenville",
        cidade: "Divinópolis", estado: "MG", pais: "BR",
        imagens: ["assets/logo-hotel/center-greenville_logo.jpg"],
        descricao: "Hotel em Divinópolis, MG.",
        infoAdicional: [ { titulo: "Endereço", valor: "Av. Dolores de Aguiar Rabelo, 1800 - Interlagos, Divinópolis - MG, 35500-603" }, { titulo: "Telefone", valor: "(37) 3216-6666" }, { titulo: "Website", valor: "<a href='#' target='_blank'>Site (Não encontrado)</a>" } ],
        linkWhatsAppGrupo: null, backupLink: null, acessoRB: null, acessoFlussonic: null, acessoIRD: null, acessoRemotoCanal: null, acessoRemotoIntegracao: null, infoAdm: null
    },
    // --- FIM CENTER HOTEL GREENVILLE ---

    // --- INÍCIO DAN INN FOZ DO IGUAÇU ---
    "daninn-foz": {
        nome: "Dan Inn Foz do Iguaçu",
        cidade: "Foz do Iguaçu", estado: "PR", pais: "BR",
        imagens: ["assets/logo-hotel/dan-inn_logo.jpg"],
        descricao: "Hotel da Rede Nacional Inn no centro de Foz do Iguaçu. Oferece quartos simples e funcionais, café da manhã e piscina.",
        infoAdicional: [ { titulo: "Endereço", valor: "Av. Juscelino Kubitscheck, 3483 - Vila Pérola, Foz do Iguaçu - PR, 85858-450" }, { titulo: "Telefone", valor: "(45) 3521-9800" }, { titulo: "Website", valor: "<a href='https://www.nacionalinn.com.br/hoteis/dan-inn-foz-do-iguacu' target='_blank'>Site Oficial (Nacional Inn)</a>" } ],
        linkWhatsAppGrupo: null, backupLink: null, acessoRB: null, acessoFlussonic: null, acessoIRD: null, acessoRemotoCanal: null, acessoRemotoIntegracao: null, infoAdm: null
    },
    // --- FIM DAN INN FOZ DO IGUAÇU ---

    // --- INÍCIO NACIONAL INN BELO HORIZONTE ---
    "nacionalinn-bh": {
        nome: "Nacional Inn Belo Horizonte",
        cidade: "Belo Horizonte", estado: "MG", pais: "BR",
        imagens: ["assets/logo-hotel/Nacional-Inn_logo.jpg"],
        descricao: "Hotel da Rede Nacional Inn no centro de Belo Horizonte, próximo à rodoviária. Oferece quartos, piscina na cobertura, restaurante e salas de eventos.",
        infoAdicional: [ { titulo: "Endereço", valor: "R. Guajajaras, 37 - Centro, Belo Horizonte - MG, 30180-100" }, { titulo: "Telefone", valor: "(31) 3888-6100" }, { titulo: "Website", valor: "<a href='https://www.nacionalinn.com.br/hoteis/nacional-inn-belo-horizonte' target='_blank'>Site Oficial</a>" } ],
        linkWhatsAppGrupo: null, backupLink: null, acessoRB: null, acessoFlussonic: null, acessoIRD: null, acessoRemotoCanal: null, acessoRemotoIntegracao: null, infoAdm: null
    },
    // --- FIM NACIONAL INN BELO HORIZONTE ---

    // --- INÍCIO NACIONAL INN GUARUJÁ ---
    "nacionalinn-guaruja": {
        nome: "Nacional Inn Guarujá",
        cidade: "Guarujá", estado: "SP", pais: "BR",
        imagens: ["assets/logo-hotel/Nacional-Inn_logo.jpg"],
        descricao: "Hotel da Rede Nacional Inn no Guarujá, localizado na Praia da Enseada. Possui quartos, piscina e restaurante.",
        infoAdicional: [ { titulo: "Endereço", valor: "Rua Iracema, 45 - Praia da Enseada, Guarujá - SP, 11443-110" }, { titulo: "Telefone", valor: "(13) 3382-7100" }, { titulo: "Website", valor: "<a href='https://www.nacionalinn.com.br/hoteis/nacional-inn-guaruja' target='_blank'>Site Oficial</a>" } ],
        linkWhatsAppGrupo: null, backupLink: null, acessoRB: null, acessoFlussonic: null, acessoIRD: null, acessoRemotoCanal: null, acessoRemotoIntegracao: null, infoAdm: null
    },
    // --- FIM NACIONAL INN GUARUJÁ ---

    // --- INÍCIO NACIONAL INN FOZ DO IGUAÇU ---
    "nacionalinn-foz": {
        nome: "Nacional Inn Foz do Iguaçu",
        cidade: "Foz do Iguaçu", estado: "PR", pais: "BR",
        imagens: ["assets/logo-hotel/Nacional-Inn_logo.jpg"],
        descricao: "Hotel da Rede Nacional Inn em Foz do Iguaçu, próximo ao centro e com fácil acesso aos pontos turísticos. Oferece quartos, piscina, restaurante e área de lazer.",
        infoAdicional: [ { titulo: "Endereço", valor: "Rodovia BR-277, Km 728 - Vila Pérola, Foz do Iguaçu - PR, 85853-000" }, { titulo: "Telefone", valor: "(45) 3521-9900" }, { titulo: "Website", valor: "<a href='https://www.nacionalinn.com.br/hoteis/nacional-inn-foz-do-iguacu' target='_blank'>Site Oficial</a>" } ],
        linkWhatsAppGrupo: null, backupLink: null, acessoRB: null, acessoFlussonic: null, acessoIRD: null, acessoRemotoCanal: null, acessoRemotoIntegracao: null, infoAdm: null
    },
    // --- FIM NACIONAL INN FOZ DO IGUAÇU ---

    // --- INÍCIO NACIONAL INN UBATUBA PRAIA DAS TONINHAS ---
    "nacionalinn-ubatuba": {
        nome: "Nacional Inn Ubatuba Praia das Toninhas",
        cidade: "Ubatuba", estado: "SP", pais: "BR",
        imagens: ["assets/logo-hotel/Nacional-Inn_logo.jpg"],
        descricao: "Hotel da Rede Nacional Inn em Ubatuba, localizado na Praia das Toninhas. Possui apartamentos, piscinas, restaurante e acesso à praia.",
        infoAdicional: [ { titulo: "Endereço", valor: "R. Particular, 1 - Praia das Toninhas, Ubatuba - SP, 11680-000" }, { titulo: "Telefone", valor: "(12) 3842-4400" }, { titulo: "Website", valor: "<a href='https://www.nacionalinn.com.br/hoteis/nacional-inn-ubatuba' target='_blank'>Site Oficial</a>" } ],
        linkWhatsAppGrupo: null, backupLink: null, acessoRB: null, acessoFlussonic: null, acessoIRD: null, acessoRemotoCanal: null, acessoRemotoIntegracao: null, infoAdm: null
    },
    // --- FIM NACIONAL INN UBATUBA PRAIA DAS TONINHAS ---

    // --- INÍCIO NACIONAL INN PIRACICABA ---
    "nacionalinn-piracicaba": {
        nome: "Nacional Inn Piracicaba",
        cidade: "Piracicaba", estado: "SP", pais: "BR",
        imagens: ["assets/logo-hotel/Nacional-Inn_logo.jpg"],
        descricao: "Hotel executivo da Rede Nacional Inn em Piracicaba, localizado no centro da cidade. Oferece quartos, piscina, academia e restaurante.",
        infoAdicional: [ { titulo: "Endereço", valor: "Rua do Rosário, 1358 - Centro, Piracicaba - SP, 13400-186" }, { titulo: "Telefone", valor: "(19) 3417-1700" }, { titulo: "Website", valor: "<a href='https://www.nacionalinn.com.br/hoteis/nacional-inn-piracicaba' target='_blank'>Site Oficial</a>" } ],
        linkWhatsAppGrupo: null, backupLink: null, acessoRB: null, acessoFlussonic: null, acessoIRD: null, acessoRemotoCanal: null, acessoRemotoIntegracao: null, infoAdm: null
    },
    // --- FIM NACIONAL INN PIRACICABA ---

    // --- INÍCIO NACIONAL INN JARAGUÁ DO SUL ---
    "nacionalinn-jaragua": {
        nome: "Nacional Inn Jaraguá do Sul",
        cidade: "Jaraguá do Sul", estado: "SC", pais: "BR",
        imagens: ["assets/logo-hotel/Nacional-Inn_logo.jpg"],
        descricao: "Hotel da Rede Nacional Inn em Jaraguá do Sul, bem localizado na cidade. Oferece quartos confortáveis, café da manhã e estrutura para viajantes a negócios ou lazer.",
        infoAdicional: [ { titulo: "Endereço", valor: "Rua Pres. Epitácio Pessoa, 239 - Centro, Jaraguá do Sul - SC, 89251-100" }, { titulo: "Telefone", valor: "(47) 3275-8800" }, { titulo: "Website", valor: "<a href='https://www.nacionalinn.com.br/hoteis/nacional-inn-jaragua-do-sul' target='_blank'>Site Oficial</a>" } ],
        linkWhatsAppGrupo: null, backupLink: null, acessoRB: null, acessoFlussonic: null, acessoIRD: null, acessoRemotoCanal: null, acessoRemotoIntegracao: null, infoAdm: null
    },
    // --- FIM NACIONAL INN JARAGUÁ DO SUL ---

    // --- INÍCIO GOLDEN PARK SALVADOR ---
    "golden-salvador": {
        nome: "Golden Park Salvador",
        cidade: "Salvador", estado: "BA", pais: "BR",
        imagens: ["assets/logo-hotel/Golden-park_logo.jpg"],
        descricao: "Hotel da Rede Nacional Inn em Salvador, localizado na Pituba. Próximo à praia, oferece quartos, piscina, restaurante e vista para o mar.",
        infoAdicional: [ { titulo: "Endereço", valor: "Av. Manoel Dias da Silva, 979 - Pituba, Salvador - BA, 41830-000" }, { titulo: "Telefone", valor: "(71) 2201-0000" }, { titulo: "Website", valor: "<a href='https://www.nacionalinn.com.br/hoteis/golden-park-salvador' target='_blank'>Site Oficial (Nacional Inn)</a>" } ],
        linkWhatsAppGrupo: null, backupLink: null, acessoRB: null, acessoFlussonic: null, acessoIRD: null, acessoRemotoCanal: null, acessoRemotoIntegracao: null, infoAdm: null
    },
    // --- FIM GOLDEN PARK SALVADOR ---

    // --- INÍCIO DAN INN SALVADOR PITUBA ---
    "daninn-salvador": {
        nome: "Dan Inn Salvador Pituba",
        cidade: "Salvador", estado: "BA", pais: "BR",
        imagens: ["assets/logo-hotel/dan-inn_logo.jpg"],
        descricao: "Hotel da Rede Nacional Inn na Pituba, em Salvador. Oferece quartos funcionais, café da manhã e localização conveniente para negócios ou lazer.",
        infoAdicional: [ { titulo: "Endereço", valor: "Rua Pernambuco, 1012 - Pituba, Salvador - BA, 41830-390" }, { titulo: "Telefone", valor: "(71) 3505-9100" }, { titulo: "Website", valor: "<a href='https://www.nacionalinn.com.br/hoteis/dan-inn-salvador' target='_blank'>Site Oficial (Nacional Inn)</a>" } ],
        linkWhatsAppGrupo: null, backupLink: null, acessoRB: null, acessoFlussonic: null, acessoIRD: null, acessoRemotoCanal: null, acessoRemotoIntegracao: null, infoAdm: null
    },
    // --- FIM DAN INN SALVADOR PITUBA ---

    // --- INÍCIO NACIONAL INN ALAGOINHAS ---
    "nacionalinn-alagoinhas": {
        nome: "Nacional Inn Alagoinhas",
        cidade: "Alagoinhas", estado: "BA", pais: "BR",
        imagens: ["assets/logo-hotel/Nacional-Inn_logo.jpg"],
        descricao: "Hotel da Rede Nacional Inn em Alagoinhas (BA). Oferece acomodações, restaurante, piscina e estrutura para viajantes na região.",
        infoAdicional: [ { titulo: "Endereço", valor: "Av. Joseph Wagner, 880 - Centro, Alagoinhas - BA, 48005-010" }, { titulo: "Telefone", valor: "(75) 3182-5100" }, { titulo: "Website", valor: "<a href='https://www.nacionalinn.com.br/hoteis/nacional-inn-alagoinhas' target='_blank'>Site Oficial</a>" } ],
        linkWhatsAppGrupo: null, backupLink: null, acessoRB: null, acessoFlussonic: null, acessoIRD: null, acessoRemotoCanal: null, acessoRemotoIntegracao: null, infoAdm: null
    },
    // --- FIM NACIONAL INN ALAGOINHAS ---

    // --- INÍCIO SOFT INN ALAGOINHAS ---
    "softinn-alagoinhas": {
        nome: "Soft Inn Alagoinhas",
        cidade: "Alagoinhas", estado: "BA", pais: "BR",
        imagens: ["assets/logo-hotel/Soft-Inn_logo.jpg"],
        descricao: "Hotel econômico da Rede Nacional Inn em Alagoinhas, focado em praticidade e custo-benefício. Oferece quartos compactos e funcionais.",
        infoAdicional: [ { titulo: "Endereço", valor: "Rua Lauro de Freitas, 130 - Centro, Alagoinhas - BA, 48005-350" }, { titulo: "Telefone", valor: "(75) 3182-5050" }, { titulo: "Website", valor: "<a href='https://www.nacionalinn.com.br/hoteis/soft-inn-alagoinhas' target='_blank'>Site Oficial (Nacional Inn)</a>" } ],
        linkWhatsAppGrupo: null, backupLink: null, acessoRB: null, acessoFlussonic: null, acessoIRD: null, acessoRemotoCanal: null, acessoRemotoIntegracao: null, infoAdm: null
    },
    // --- FIM SOFT INN ALAGOINHAS ---

    // --- INÍCIO HOTEL COLLINE DE FRANCE ---
    "colline-de-france": {
        nome: "Hotel Colline de France",
        cidade: "Gramado", estado: "RS", pais: "BR",
        imagens: ["assets/logo-hotel/Colline-De-France_logo.jpg"],
        descricao: "Hotel de luxo em Gramado, eleito um dos melhores do mundo. Inspirado na arquitetura francesa, oferece suítes sofisticadas, spa, restaurante e serviço exclusivo.",
        infoAdicional: [ { titulo: "Endereço", valor: "R. Vigilante, 400 - Bairro Avenida, Gramado - RS, 95670-000" }, { titulo: "Telefone", valor: "(54) 3421-0770" }, { titulo: "Website", valor: "<a href='https://www.collinedefrance.com.br/' target='_blank'>Site Oficial</a>" } ],
        linkWhatsAppGrupo: null, backupLink: null, acessoRB: null, acessoFlussonic: null, acessoIRD: null, acessoRemotoCanal: null, acessoRemotoIntegracao: null, infoAdm: null
    },
    // --- FIM HOTEL COLLINE DE FRANCE ---

    // --- INÍCIO SAN JUAN ECO HOTEL & CONVENTION ---
    "san-juan-eco": {
        nome: "San Juan Eco Hotel & Convention",
        cidade: "Foz do Iguaçu", estado: "PR", pais: "BR",
        imagens: ["assets/logo-hotel/San-Juan-Eco_logo.jpg"],
        descricao: "Hotel com ampla área verde em Foz do Iguaçu, próximo à Ponte da Amizade. Oferece quartos, piscinas, quadras esportivas, trilhas e estrutura para eventos.",
        infoAdicional: [ { titulo: "Endereço", valor: "Av. das Cataratas, km 6 - Jardim Bourbon, Foz do Iguaçu - PR, 85855-000" }, { titulo: "Telefone", valor: "(45) 2105-9100" }, { titulo: "Website", valor: "<a href='https://www.sanjuanhoteis.com.br/hotel/san-juan-eco/' target='_blank'>Site Oficial</a>" } ],
        linkWhatsAppGrupo: "https://chat.whatsapp.com/E8XYmwIeccoEjTnjcjnqXz", backupLink: null, acessoRB: null, acessoFlussonic: null, acessoIRD: null, acessoRemotoCanal: null, acessoRemotoIntegracao: null, infoAdm: null
    },
    // --- FIM SAN JUAN ECO HOTEL & CONVENTION ---

    // --- INÍCIO BOURBON CATARATAS DO IGUAÇU THERMAS ECO RESORT ---
    "bourbon-cataratas": {
        nome: "Bourbon Cataratas do Iguaçu Thermas Eco Resort",
        cidade: "Foz do Iguaçu", estado: "PR", pais: "BR",
        imagens: ["assets/logo-hotel/bourbon_logo.jpg"],
        descricao: "Eco Resort em Foz do Iguaçu com completa estrutura de lazer para famílias. Possui piscinas (incluindo termais), spa, atividades de ecoturismo, recreação infantil e restaurantes.",
        infoAdicional: [ { titulo: "Endereço", valor: "Av. das Cataratas, Km 2,5, Nº 2345 - Vila Yolanda, Foz do Iguaçu - PR, 85853-000" }, { titulo: "Telefone", valor: "(45) 3521-3900" }, { titulo: "Website", valor: "<a href='https://www.bourbon.com.br/hotel/bourbon-cataratas-resort/' target='_blank'>Site Oficial</a>" } ],
        linkWhatsAppGrupo: null, backupLink: null, acessoRB: null, acessoFlussonic: null, acessoIRD: null, acessoRemotoCanal: null, acessoRemotoIntegracao: null, infoAdm: null
    },
    // --- FIM BOURBON CATARATAS DO IGUAÇU THERMAS ECO RESORT ---

    // --- INÍCIO WYNDHAM FOZ DO IGUAÇU ---
    "windham-foz": {
        nome: "Wyndham Foz do Iguaçu",
        cidade: "Foz do Iguaçu", estado: "PR", pais: "BR",
        imagens: ["assets/logo-hotel/Windhan-Foz_logo.jpg"],
        descricao: "Hotel moderno em Foz do Iguaçu, bem localizado na região central. Oferece quartos confortáveis, piscina, academia, restaurante e bar.",
        infoAdicional: [ { titulo: "Endereço", valor: "Rua Tarobá, 1020 - Centro, Foz do Iguaçu - PR, 85851-220" }, { titulo: "Telefone", valor: "(45) 3145-8000" }, { titulo: "Website", valor: "<a href='https://www.wyndhamhotels.com/wyndham/foz-do-iguacu-brazil/wyndham-foz-do-iguacu/overview' target='_blank'>Site Oficial</a>" } ],
        linkWhatsAppGrupo: null, backupLink: null, acessoRB: null, acessoFlussonic: null, acessoIRD: null, acessoRemotoCanal: null, acessoRemotoIntegracao: null, infoAdm: null
    },
    // --- FIM WYNDHAM FOZ DO IGUAÇU ---

    // --- INÍCIO GOLDEN PARK INTERNACIONAL FOZ & CONVENÇÕES ---
    "golden-park-foz": {
        nome: "Golden Park Internacional Foz & Convenções",
        cidade: "Foz do Iguaçu", estado: "PR", pais: "BR",
        imagens: ["assets/logo-hotel/Golden-park_logo.jpg"],
        descricao: "Hotel da Rede Nacional Inn em Foz do Iguaçu, com grande estrutura para convenções. Oferece quartos, piscinas, restaurante, bar e amplo centro de eventos.",
        infoAdicional: [ { titulo: "Endereço", valor: "Rua Almirante Barroso, 2006 - Centro, Foz do Iguaçu - PR, 85851-010" }, { titulo: "Telefone", valor: "(45) 3521-4100" }, { titulo: "Website", valor: "<a href='https://www.nacionalinn.com.br/hoteis/golden-park-internacional-foz-convenções' target='_blank'>Site Oficial (Nacional Inn)</a>" } ],
        linkWhatsAppGrupo: null, backupLink: null, acessoRB: null, acessoFlussonic: null, acessoIRD: null, acessoRemotoCanal: null, acessoRemotoIntegracao: null, infoAdm: null
    },
    // --- FIM GOLDEN PARK INTERNACIONAL FOZ & CONVENÇÕES ---

    // --- INÍCIO NADAI CONFORT HOTEL & SPA ---
    "nadai": {
        nome: "Nadai Confort Hotel & Spa",
        cidade: "Foz do Iguaçu", estado: "PR", pais: "BR",
        imagens: ["assets/logo-hotel/Nadai_logo.jpg"],
        descricao: "Hotel confortável no centro de Foz do Iguaçu. Dispõe de quartos, piscina, spa, restaurante e academia.",
        infoAdicional: [ { titulo: "Endereço", valor: "Av. República Argentina, 1332 - Centro, Foz do Iguaçu - PR, 85852-090" }, { titulo: "Telefone", valor: "(45) 3026-5050" }, { titulo: "Website", valor: "<a href='https://www.nadaiconforthotel.com.br/' target='_blank'>Site Oficial</a>" } ],
        linkWhatsAppGrupo: null, backupLink: null, acessoRB: null, acessoFlussonic: null, acessoIRD: null, acessoRemotoCanal: null, acessoRemotoIntegracao: null, infoAdm: null
    },
    // --- FIM NADAI CONFORT HOTEL & SPA ---

    // --- INÍCIO FOZ PLAZA HOTEL ---
    "foz-plaza": {
        nome: "Foz Plaza Hotel",
        cidade: "Foz do Iguaçu", estado: "PR", pais: "BR",
        imagens: ["assets/logo-hotel/Foz-plaza_logo.jpg"],
        descricao: "Hotel econômico no centro de Foz do Iguaçu, próximo ao terminal de ônibus urbanos. Oferece quartos simples e café da manhã.",
        infoAdicional: [ { titulo: "Endereço", valor: "Rua Marechal Deodoro da Fonseca, 1404 - Centro, Foz do Iguaçu - PR, 85851-030" }, { titulo: "Telefone", valor: "(45) 3523-1448" }, { titulo: "Website", valor: "<a href='https://fozplazahotel.com.br/' target='_blank'>Site Oficial</a>" } ],
        linkWhatsAppGrupo: null, backupLink: null, acessoRB: null, acessoFlussonic: null, acessoIRD: null, acessoRemotoCanal: null, acessoRemotoIntegracao: null, infoAdm: null
    },
    // --- FIM FOZ PLAZA HOTEL ---

    // --- INÍCIO BOURBON FOZ DO IGUAÇU BUSINESS HOTEL ---
    "bourbon-jl": {
        nome: "Bourbon Foz do Iguaçu Business Hotel",
        cidade: "Foz do Iguaçu", estado: "PR", pais: "BR",
        imagens: ["assets/logo-hotel/JL-Bourbon_logo.jpg"],
        descricao: "Hotel executivo anexo ao Cataratas JL Shopping em Foz do Iguaçu. Oferece quartos modernos, restaurante, academia e fácil acesso ao shopping.",
        infoAdicional: [ { titulo: "Endereço", valor: "Av. Costa e Silva, 155 - Parque Pres, Foz do Iguaçu - PR, 85863-000" }, { titulo: "Telefone", valor: "(45) 3521-3232" }, { titulo: "Website", valor: "<a href='https://www.bourbon.com.br/hotel/bourbon-foz-do-iguacu-business-hotel/' target='_blank'>Site Oficial</a>" } ],
        linkWhatsAppGrupo: null, backupLink: null, acessoRB: null, acessoFlussonic: null, acessoIRD: null, acessoRemotoCanal: null, acessoRemotoIntegracao: null, infoAdm: null
    },
    // --- FIM BOURBON FOZ DO IGUAÇU BUSINESS HOTEL ---

    // --- INÍCIO DAYS INN BY WYNDHAM CASCAVEL ---
    "days-inn-cascavel": {
        nome: "Days Inn by Wyndham Cascavel",
        cidade: "Cascavel", estado: "PR", pais: "BR",
        imagens: ["assets/logo-hotel/Days-inn-Cascavel_logo.jpg"],
        descricao: "Hotel da rede Wyndham em Cascavel, com foco em viajantes a negócios. Localizado próximo ao centro, oferece quartos funcionais, café da manhã e Wi-Fi.",
        infoAdicional: [ { titulo: "Endereço", valor: "Rua Souza Naves, 3311 - Centro, Cascavel - PR, 85810-070" }, { titulo: "Telefone", valor: "(45) 3301-6100" }, { titulo: "Website", valor: "<a href='https://www.wyndhamhotels.com/days-inn/cascavel-brazil/days-inn-cascavel/overview' target='_blank'>Site Oficial</a>" } ],
        linkWhatsAppGrupo: null, backupLink: null, acessoRB: null, acessoFlussonic: null, acessoIRD: null, acessoRemotoCanal: null, acessoRemotoIntegracao: null, infoAdm: null
    },
    // --- FIM DAYS INN BY WYNDHAM CASCAVEL ---

    // --- INÍCIO IBIS CASCAVEL ---
    "ibis-cascavel": {
        nome: "Ibis Cascavel",
        cidade: "Cascavel", estado: "PR", pais: "BR",
        imagens: ["assets/logo-hotel/Hibis_logo.jpg"],
        descricao: "Hotel da rede Ibis (Accor) em Cascavel, com padrão econômico e funcional. Oferece quartos compactos, bar 24h e restaurante.",
        infoAdicional: [ { titulo: "Endereço", valor: "Av. Tancredo Neves, 3111 - Centro, Cascavel - PR, 85816-300" }, { titulo: "Telefone", valor: "(45) 3301-6500" }, { titulo: "Website", valor: "<a href='https://all.accor.com/hotel/8293/index.pt-br.shtml' target='_blank'>Site Oficial (Accor)</a>" } ],
        linkWhatsAppGrupo: null, backupLink: null, acessoRB: null, acessoFlussonic: null, acessoIRD: null, acessoRemotoCanal: null, acessoRemotoIntegracao: null, infoAdm: null
    },
    // --- FIM IBIS CASCAVEL ---

    // --- INÍCIO HARBOR QUERÊNCIA HOTEL ---
    "harbor-cascavel": {
        nome: "Harbor Querência Hotel",
        cidade: "Cascavel", estado: "PR", pais: "BR",
        imagens: ["assets/logo-hotel/Harbor-Cascavel_logo.jpg"],
        descricao: "Hotel tradicional em Cascavel, localizado no centro da cidade. Oferece quartos, restaurante, piscina e estrutura para eventos.",
        infoAdicional: [ { titulo: "Endereço", valor: "Rua Treze de Maio, 710 - Centro, Cascavel - PR, 85801-160" }, { titulo: "Telefone", valor: "(45) 3225-3355" }, { titulo: "Website", valor: "<a href='https://harborhoteis.com.br/hotel-em-cascavel-harbor-querencia' target='_blank'>Site Oficial</a>" } ],
        linkWhatsAppGrupo: null, backupLink: null, acessoRB: null, acessoFlussonic: null, acessoIRD: null, acessoRemotoCanal: null, acessoRemotoIntegracao: null, infoAdm: null
    },
    // --- FIM HARBOR QUERÊNCIA HOTEL ---

    // --- INÍCIO COPAS EXECUTIVE HOTEL ---
    "copas-executive-cascavel": {
        nome: "Copas Executive Hotel",
        cidade: "Cascavel", estado: "PR", pais: "BR",
        imagens: ["assets/logo-hotel/Copas-executivo_logo.jpg"],
        descricao: "Hotel executivo no centro de Cascavel, próximo à catedral. Oferece quartos modernos, restaurante, academia e salas de reunião.",
        infoAdicional: [ { titulo: "Endereço", valor: "Av. Brasil, 5929 - Centro, Cascavel - PR, 85812-001" }, { titulo: "Telefone", valor: "(45) 3321-5000" }, { titulo: "Website", valor: "<a href='https://www.hoteiscopas.com.br/copas-executive/' target='_blank'>Site Oficial</a>" } ],
        linkWhatsAppGrupo: null, backupLink: null, acessoRB: null, acessoFlussonic: null, acessoIRD: null, acessoRemotoCanal: null, acessoRemotoIntegracao: null, infoAdm: null
    },
    // --- FIM COPAS EXECUTIVE HOTEL ---

    // --- INÍCIO COPAS VERDES HOTEL ---
    "copas-verde-cascavel": {
        nome: "Copas Verdes Hotel",
        cidade: "Cascavel", estado: "PR", pais: "BR",
        imagens: ["assets/logo-hotel/Copas-Verde_logo.jpg"],
        descricao: "Hotel tradicional e amplo em Cascavel, com área verde. Possui quartos, restaurante, piscina, quadra de tênis e estrutura para eventos.",
        infoAdicional: [ { titulo: "Endereço", valor: "Av. Brasil, 5990 - Centro, Cascavel - PR, 85812-001" }, { titulo: "Telefone", valor: "(45) 3321-5050" }, { titulo: "Website", valor: "<a href='https://www.hoteiscopas.com.br/copas-verdes/' target='_blank'>Site Oficial</a>" } ],
        linkWhatsAppGrupo: null, backupLink: null, acessoRB: null, acessoFlussonic: null, acessoIRD: null, acessoRemotoCanal: null, acessoRemotoIntegracao: null, infoAdm: null
    },
    // --- FIM COPAS VERDES HOTEL ---

    // --- INÍCIO VIVAZ CATARATAS HOTEL RESORT ---
    "vivas-cataratas": {
        nome: "Vivaz Cataratas Hotel Resort",
        cidade: "Foz do Iguaçu", estado: "PR", pais: "BR",
        imagens: ["assets/logo-hotel/Vivaz-Cataratas_logo.jpg"],
        descricao: "Resort em Foz do Iguaçu com parque aquático (Acquamania) integrado. Oferece quartos confortáveis, piscinas, restaurantes e atividades de lazer para famílias.",
        infoAdicional: [ { titulo: "Endereço", valor: "Av. das Cataratas, 6798 - Km 11, Foz do Iguaçu - PR, 85853-000" }, { titulo: "Telefone", valor: "(45) 3529-8200" }, { titulo: "Website", valor: "<a href='https://vivazcataratas.com.br/' target='_blank'>Site Oficial</a>" } ],
        linkWhatsAppGrupo: null, backupLink: null, acessoRB: null, acessoFlussonic: null, acessoIRD: null, acessoRemotoCanal: null, acessoRemotoIntegracao: null, infoAdm: null
    },
    // --- FIM VIVAZ CATARATAS HOTEL RESORT ---

    // --- INÍCIO NAYRU HOTEL ---
    "arcas-toledo": {
        nome: "Nayru Hotel",
        cidade: "Toledo", estado: "PR", pais: "BR",
        imagens: ["assets/logo-hotel/Arcas_logo.jpg"],
        descricao: "Hotel moderno e bem localizado em Toledo (PR). Oferece quartos confortáveis, restaurante, academia e estrutura para eventos.",
        infoAdicional: [ { titulo: "Endereço", valor: "Rua Haroldo Hamilton, 470 - Centro, Toledo - PR, 85902-040" }, { titulo: "Telefone", valor: "(45) 2103-4040" }, { titulo: "Website", valor: "<a href='https://nayruhotel.com.br/' target='_blank'>Site Oficial</a>" } ],
        linkWhatsAppGrupo: null, backupLink: null, acessoRB: null, acessoFlussonic: null, acessoIRD: null, acessoRemotoCanal: null, acessoRemotoIntegracao: null, infoAdm: null
    }
    // --- FIM NAYRU HOTEL ---

    // Adicione NOVOS HOTEIS AQUI MANTENDO O FORMATO E LOCALIZAÇÃO
};