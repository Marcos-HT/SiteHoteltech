// ==================================================
// ==         BANCO DE DADOS DOS HOTÉIS V3         ==
// ==================================================
// Estrutura atualizada para refletir novos blocos/campos
// e usar 'null' como placeholder para dados ausentes opcionais.
// Omitir a chave inteira (ex: acessoProxmox) se o hotel não possui esse acesso.
// Usa arrays para Flussonic, Procentric, Xtream.
// acessosRemotos agora é { lista: [], obs: null, aviso: null }

const hotelDatabase = {

    // --- INÍCIO BOURBON CURITIBA HOTEL & SUITES ---
    "bourbon-curitiba": {
        nome: "Bourbon Curitiba Hotel & Suites",
        cidade: "Curitiba", estado: "PR", pais: "BR",
        imagens: ["assets/logo-hotel/bourbon_logo.jpg"],
        descricao: "Localizado no centro de Curitiba, próximo a pontos turísticos e centros empresariais. Oferece apartamentos e suítes modernas, restaurante, bar, piscina e estrutura para eventos.",
        infoAdicional: [{ titulo: "Endereço", valor: "R. Cândido Lopes, 102 - Centro, Curitiba - PR, 80020-060" }, { titulo: "Telefone", valor: "(41) 3221-4600" }, { titulo: "Website", valor: "<a href='https://www.bourbon.com.br/hotel/bourbon-curitiba' target='_blank'>Site Oficial</a>" }],
        linkWhatsAppGrupo: "https://chat.whatsapp.com/FGbRzyOopOs0BkfonudQjF", backupLink: "https://0.0.0.0", // Exemplo, ajustar link
        // --- Blocos de Acesso ---
        infoGeral: {
            sistemas: "RB, Flussonic, IRD, Remoto", // Baseado nos acessos existentes
            ipPublico: null
        },
        acessoRB: {
            ovpn: "10.31.0.61:3055", ipLocal: "10.17.4.167", user: "hoteltech", senha: "@ht2020*!", obs: null
        },
        acessoFlussonic: [{
            tituloBloco: null, // Primeira instância usa título padrão
            ovpn: "10.31.0.26", ipPrincipal: "192.168.88.41", portaSSH: 22, portaWeb: 8080, userSSH: "hoteltech", senhaSSHUser: "@ht2020*", senhaSSHRoot: null, userWeb: "admin", senhaWeb: "@ht2020*", linkWeb: "http://10.31.0.26:8080", obs: null
        }],
        acessoIRD: {
            ovpn: "10.31.0.61:8583", ipPrincipal: "192.168.88.136", portaWeb: null, userWeb: "admin", senhaWeb: "admin", linkWeb: "http://10.31.0.61:8583/", obs: null, aviso: null
        },
        acessosRemotos: {
            lista: [
                { nomeCanal: 'Canal Institucional', anydesk: "1492046315", senha: "@ht2020*", tipo: null, windows: null, nota: null } // Migrado
            ],
            obs: null,
            aviso: null
        },
        infoAdm: null
        // Omitido: acessoVPN, acessoVpnMabu, acessoProcentric, acessoXtreamCodes, acessoEncoder, acessoProxmox, acessoServidorApk, acessoServidorChromecast, acessoServidorBackup
    },
    // --- FIM BOURBON CURITIBA HOTEL & SUITES ---

    // --- INÍCIO BOURBON PONTA GROSSA CONVENTION HOTEL ---
    "bourbon-ponta-grossa": {
        nome: "Bourbon Ponta Grossa Convention Hotel",
        cidade: "Ponta Grossa", estado: "PR", pais: "BR",
        imagens: ["assets/logo-hotel/bourbon_logo.jpg"],
        descricao: "Hotel de negócios em Ponta Grossa, com fácil acesso ao centro da cidade. Oferece apartamentos confortáveis, restaurante, bar, academia e salas para eventos.",
        infoAdicional: [{ titulo: "Endereço", valor: "R. Jacob Holzmann, 219 - Olarias, Ponta Grossa - PR, 84035-290" }, { titulo: "Telefone", valor: "(42) 3220-3700" }, { titulo: "Website", valor: "<a href='https://www.bourbon.com.br/hotel/bourbon-ponta-grossa-convention-hotel/' target='_blank'>Site Oficial</a>" }],
        linkWhatsAppGrupo: null, backupLink: null,
        // --- Blocos de Acesso ---
        infoGeral: {
            sistemas: "RB, Flussonic, IRD, Remoto",
            ipPublico: null
        },
        acessoRB: {
            ovpn: "10.31.0.152:8580", ipLocal: "192.168.1.3", user: "hoteltech", senha: "@ht2020*!", obs: null
        },
        acessoFlussonic: [{
            tituloBloco: null,
            ovpn: "10.31.0.39", ipPrincipal: "192.168.10.3", portaSSH: 3322, portaWeb: 80, userSSH: "hoteltech", senhaSSHUser: "@ht2020*", senhaSSHRoot: null, userWeb: "admin", senhaWeb: "@ht2020*", linkWeb: "http://10.31.0.39:80", obs: null
        }],
        acessoIRD: {
            ovpn: "10.31.0.152:8581", ipPrincipal: "192.168.0.136", portaWeb: null, userWeb: "admin", senhaWeb: "admin", linkWeb: "http://10.31.0.152:8581", obs: null, aviso: null
        },
        acessosRemotos: {
            lista: [
                 { nomeCanal: 'Canal Institucional', anydesk: "1054079761", senha: "@ht2020*", tipo: null, windows: null, nota: null }
            ],
            obs: null,
            aviso: null
        },
        infoAdm: null
    },
    // --- FIM BOURBON PONTA GROSSA CONVENTION HOTEL ---

    // --- INÍCIO BOURBON DOM RICARDO | AEROPORTO CURITIBA BUSINESS HOTEL ---
    "bourbon-dom-ricardo": {
        nome: "Bourbon Dom Ricardo | Aeroporto Curitiba Business Hotel",
        cidade: "São José dos Pinhais", estado: "PR", pais: "BR",
        imagens: ["assets/logo-hotel/bourbon_logo.jpg"],
        descricao: "Hotel próximo ao Aeroporto Afonso Pena (CWB), oferece transfer cortesia, apartamentos modernos, restaurante, fitness center e estrutura para eventos. Conveniente para viajantes.",
        infoAdicional: [{ titulo: "Endereço", valor: "Av. Rocha Pombo, 2400 - Águas Belas, São José dos Pinhais - PR, 83010-620" }, { titulo: "Telefone", valor: "(41) 3299-2400" }, { titulo: "Website", valor: "<a href='https://www.bourbon.com.br/hotel/bourbon-dom-ricardo-aeroporto-curitiba-business-hotel/' target='_blank'>Site Oficial</a>" }],
        linkWhatsAppGrupo: null, backupLink: null,
        // --- Blocos de Acesso ---
        infoGeral: {
            sistemas: "RB, Flussonic, IRD, Remoto",
            ipPublico: null
        },
        acessoRB: {
            ovpn: "10.31.0.108:8580", ipLocal: "192.168.0.107", user: "hoteltech", senha: "@ht2020*!", obs: null
        },
        acessoFlussonic: [{
            tituloBloco: null,
            ovpn: "10.31.0.141", ipPrincipal: "192.168.10.242", portaSSH: 3050, portaWeb: 8583, userSSH: "hoteltech", senhaSSHUser: "@ht2020*", senhaSSHRoot: null, userWeb: "hoteltech", senhaWeb: "@ht2020*", linkWeb: "http://10.31.0.108:8583", obs: "LinkWeb usa OVPN do RB?"
        }],
        acessoIRD: {
             ovpn: "10.31.0.108:8581", ipPrincipal: "192.168.0.136", portaWeb: null, userWeb: "hoteltech", senhaWeb: "@ht2020*", linkWeb: "http://10.31.0.108:8581", obs: null, aviso: "Acesso no IRD e feito através do mini pc do canal institucional." // Aviso do original
        },
        acessosRemotos: { // Acesso ao MiniPC precisa ser adicionado aqui se conhecido
            lista: [],
            obs: null,
            aviso: "Acesso IRD/Remoto feito através do mini pc do canal institucional (dados não fornecidos)." // Aviso combinado
        },
        infoAdm: null
    },
    // --- FIM BOURBON DOM RICARDO | AEROPORTO CURITIBA BUSINESS HOTEL ---

     // --- INÍCIO RIO HOTEL BY BOURBON CURITIBA BATEL ---
    "bourbon-rio": {
        nome: "Rio Hotel by Bourbon Curitiba Batel",
        cidade: "Curitiba", estado: "PR", pais: "BR",
        imagens: ["assets/logo-hotel/bourbon_logo.jpg"],
        descricao: "Hotel moderno no bairro Batel, focado em praticidade. Oferece quartos funcionais, fitness center, passadoria e terraço com vista para a cidade.",
        infoAdicional: [{ titulo: "Endereço", valor: "Av. Visc. de Guarapuava, 4889 - Batel, Curitiba - PR, 80240-010" }, { titulo: "Telefone", valor: "(41) 3342-7990" }, { titulo: "Website", valor: "<a href='https://www.bourbon.com.br/hotelrio/rio-hotel-by-bourbon-curitiba-batel' target='_blank'>Site Oficial</a>" }],
        linkWhatsAppGrupo: null, backupLink: null,
        // --- Blocos de Acesso ---
        infoGeral: {
            sistemas: "Flussonic, IRD, Remoto",
            ipPublico: "187.95.152.50" // Chute baseado no linkWeb original
        },
        acessoRB: "Este Hotel não tem RB.", // Mantido string
        acessoFlussonic: [{
            tituloBloco: null,
            ovpn: null, // Não informado
            ipPrincipal: "192.168.0.241", portaSSH: 3055, portaWeb: 8081, userSSH: "hotel", senhaSSHUser: "@ht2020*", senhaSSHRoot: null, userWeb: "hoteltech", senhaWeb: "@ht2020*", linkWeb: "http://187.95.152.50:8081", obs: "Acesso Web via IP Público"
        }],
        acessoIRD: { // Apenas nota no original
            ovpn: null, ipPrincipal: null, portaWeb: null, userWeb: null, senhaWeb: null, linkWeb: null, obs: null, aviso: "O acesso no IRD e feito através do mini pc do canal institucional."
        },
        acessosRemotos: {
            lista: [
                { nomeCanal: 'Canal Institucional', anydesk: "1937162446", senha: "@ht2020*", tipo: null, windows: null, nota: null }
            ],
            obs: null,
            aviso: "Acesso IRD feito através do mini pc do canal institucional."
        },
        infoAdm: null
    },
    // --- FIM RIO HOTEL BY BOURBON CURITIBA BATEL ---

    // --- INÍCIO VIALE CATARATAS HOTEL & EVENTOS ---
    "viale-cataratas": {
        nome: "Viale Cataratas Hotel & Eventos",
        cidade: "Foz do Iguaçu", estado: "PR", pais: "BR",
        imagens: ["assets/logo-hotel/Vialle-Cataratas_logo.jpg"],
        descricao: "Hotel contemporâneo na Av. das Cataratas, próximo às Cataratas do Iguaçu. Oferece quartos modernos, restaurante, bar, piscina externa, academia e ampla estrutura para eventos.",
        infoAdicional: [{ titulo: "Endereço", valor: "Av. das Cataratas, 2420 - Vila Yolanda, Foz do Iguaçu - PR, 85853-000" }, { titulo: "Telefone", valor: "(45) 2105-7200" }, { titulo: "Website", valor: "<a href='https://www.vialehoteis.com.br/viale-cataratas' target='_blank'>Site Oficial</a>" }],
        linkWhatsAppGrupo: null, backupLink: null,
        // --- Blocos de Acesso ---
        infoGeral: {
            sistemas: "RB, Flussonic, IRD, Remoto",
            ipPublico: null
        },
        acessoRB: {
            ovpn: "10.31.0.58:8580", ipLocal: "192.168.1.5", user: "hoteltech", senha: "@ht2020*!", obs: null
        },
        acessoFlussonic: [{
            tituloBloco: null,
            ovpn: "10.31.0.143", ipPrincipal: "192.168.88.248", portaSSH: 3055, portaWeb: 8080, userSSH: "hoteltech", senhaSSHUser: "@ht2020*", senhaSSHRoot: null, userWeb: "admin", senhaWeb: "@ht2020*", linkWeb: "http://10.31.0.143:8080", obs: null
        }],
        acessoIRD: {
            ovpn: "10.31.0.58:9090", ipPrincipal: "192.168.88.136", portaWeb: null, userWeb: "admin", senhaWeb: "admin", linkWeb: "http://10.31.0.58:9090", obs: null, aviso: null
        },
        acessosRemotos: {
            lista: [
                 { nomeCanal: 'Canal Institucional', anydesk: "1089743902", senha: "@ht2020*", tipo: null, windows: null, nota: null }
            ],
            obs: null,
            aviso: null
        },
        infoAdm: null
    },
    // --- FIM VIALE CATARATAS HOTEL & EVENTOS ---

    // --- INÍCIO VIALE TOWER HOTEL ---
    "viale-tower": {
        nome: "Viale Tower Hotel", cidade: "Foz do Iguaçu", estado: "PR", pais: "BR",
        imagens: ["assets/logo-hotel/Vialle-Tower_logo.jpg"],
        descricao: "Hotel executivo no centro de Foz do Iguaçu...",
        infoAdicional: [{ titulo: "Endereço", valor: "Av. Jorge Schimmelpfeng, 232 - Centro, Foz do Iguaçu - PR, 85851-110" }, { titulo: "Telefone", valor: "(45) 3026-8800" }, { titulo: "Website", valor: "<a href='https://www.vialehoteis.com.br/viale-tower' target='_blank'>Site Oficial</a>" }],
        linkWhatsAppGrupo: null, backupLink: null,
        // --- Blocos de Acesso ---
        infoGeral: {
            sistemas: "RB, Flussonic, IRD, Remoto",
            ipPublico: null
        },
        acessoRB: {
            ovpn: "10.31.0.59:8291", ipLocal: "192.168.20.73", user: "admin", senha: "@ht2020*!", obs: "IP RB Primário (Vivo): 192.168.2.67" // Nota migrada
        },
        acessoFlussonic: [{
             tituloBloco: null,
             ovpn: "10.31.0.60", ipPrincipal: "192.168.88.250", portaSSH: null, portaWeb: 8080, userSSH: "hoteltech", senhaSSHUser: "@ht2020*", senhaSSHRoot: null, userWeb: "admin", senhaWeb: "@ht2020*", linkWeb: "http://10.31.0.60:8080", obs: null
        }],
        acessoIRD: {
             ovpn: "10.31.0.59", ipPrincipal: "192.168.0.136", portaWeb: 8581, userWeb: "admin", senhaWeb: "admin", linkWeb: "http://10.31.0.59:8581", obs: null, aviso: null
        },
        acessosRemotos: {
            lista: [
                { nomeCanal: 'Canal Institucional', anydesk: "1780610971", senha: "@ht2020*", tipo: null, windows: null, nota: null }
            ],
            obs: null,
            aviso: null
        },
        infoAdm: null
        // Omitido: acessoProcentric (era null no original)
    },
    // --- FIM VIALE TOWER HOTEL ---

    // --- INÍCIO DOUBLETREE BY HILTON FOZ DO IGUAÇU ---
    "doubletree-hilton": {
        nome: "DoubleTree by Hilton Foz do Iguaçu",
        cidade: "Foz do Iguaçu", estado: "PR", pais: "BR",
        imagens: ["assets/logo-hotel/By-Hilton_logo.jpg"],
        descricao: "Resort urbano sofisticado em Foz do Iguaçu...",
        infoAdicional: [{ titulo: "Endereço", valor: "Av. das Cataratas, 2930 - Vila Carimã, Foz do Iguaçu - PR, 85855-435" }, { titulo: "Telefone", valor: "(45) 3145-5300" }, { titulo: "Website", valor: "<a href='https://www.hilton.com/en/hotels/iguardi-doubletree-foz-do-iguacu-brazil/' target='_blank'>Site Oficial</a>" }],
        linkWhatsAppGrupo: null, backupLink: null,
        // --- Blocos de Acesso ---
        infoGeral: {
            sistemas: "RB, Flussonic, Remoto",
            ipPublico: null
        },
        acessoRB: {
            ovpn: "10.31.0.51:8080", ipLocal: "192.168.12.252", user: "admin", senha: "@ht2020*!", obs: null
        },
        acessoFlussonic: [{
            tituloBloco: null,
            ovpn: "10.31.0.52", ipPrincipal: "192.168.88.40", portaSSH: 22, portaWeb: 8080, userSSH: "hoteltech", senhaSSHUser: "@ht2020*", senhaSSHRoot: null, userWeb: "admin", senhaWeb: "@ht2020*",
            linkWeb: "http://10.31.0.167:8080", // Link web usa OVPN diferente
            obs: "OVPN Acesso Web: 10.31.0.167"
        }],
        acessosRemotos: {
            lista: [
                 { nomeCanal: 'Canal Institucional', anydesk: "1122274968", senha: "@ht2020*", tipo: 'windows', windows: "tvdthiltonfoz@outlook.com / @ht2020*", nota: null } // Nota migrada para campo windows
           ],
            obs: null,
            aviso: null
        },
        infoAdm: null
    },
    // --- FIM DOUBLETREE BY HILTON FOZ DO IGUAÇU ---

    // --- INÍCIO INTERCITY CANOAS ---
    "intercity-canoas": {
        nome: "Intercity Canoas",
        cidade: "Canoas", estado: "RS", pais: "BR",
        imagens: ["assets/logo-hotel/intercity-canoas_logo.jpg"],
        descricao: "Hotel moderno em Canoas...",
        infoAdicional: [{ titulo: "Endereço", valor: "Av. Getúlio Vargas, 5161 - Centro, Canoas - RS, 92010-011" }, { titulo: "Telefone", valor: "(51) 3123-5151" }, { titulo: "Website", valor: "<a href='https://www.intercityhotels.com/hotel-canoas/intercity-canoas/19/' target='_blank'>Site Oficial</a>" }],
        linkWhatsAppGrupo: null, backupLink: null,
        // --- Blocos de Acesso ---
        infoGeral: {
            sistemas: "RB, Flussonic, Proxmox, Xtream, APK, Remoto",
            ipPublico: "187.49.70.146" // Parece público
        },
        acessoRB: {
            ovpn: "10.31.0.54:8580", ipLocal: "187.49.70.146", user: "hoteltech", senha: "@ht2020*!", obs: "IP Local informado parece ser público"
        },
        acessoFlussonic: [{
            tituloBloco: null,
            ovpn: "10.31.0.55", ipPrincipal: "192.168.88.34", portaSSH: 3055, portaWeb: 8080, userSSH: "hoteltech", senhaSSHUser: "@ht2020*", senhaSSHRoot: null, userWeb: "hoteltech", senhaWeb: "@ht2020*", linkWeb: "http://10.31.0.55:8080", obs: null
        }],
        acessoProxmox: { // EXISTIA NO ORIGINAL
            ovpn: "10.31.0.56", ipPrincipal: "192.168.88.10", portaSSH: 2222, portaWeb: 8006, userSSH: "root", senhaSSHUser: null, senhaSSHRoot: "@ht2020*", userWeb: "root", senhaWeb: "@ht2020*", linkWeb: "https://10.31.0.56:8006", obs: null
        },
        acessoXtreamCodes: [{ // EXISTIA NO ORIGINAL (array)
            tituloBloco: null,
            ovpn: "10.31.0.57", ipPrincipal: "192.168.88.25", portaSSH: 22, portaWeb: 25500, userSSH: "hoteltech", senhaSSHUser: "@ht2020*", senhaSSHRoot: null, userWeb: "hoteltech", senhaWeb: "@ht2020!*", linkWeb: "http://10.31.0.57:25500", obs: null
        }],
        acessoServidorApk: { // EXISTIA NO ORIGINAL
            ovpn: "10.31.0.119", ipPrincipal: "192.168.88.24", portaSSH: 3030, portaWeb: 8087, userSSH: null, senhaSSHUser: null, senhaSSHRoot: null, userWeb: null, senhaWeb: null, linkWeb: "http://10.31.0.119:8087", obs: "Usuário/Senha não informados no original"
        },
        acessosRemotos: {
            lista: [
                { nomeCanal: 'Canal Institucional', anydesk: "1023851336", senha: "@ht2020*", tipo: null, windows: null, nota: null }
            ],
            obs: null,
            aviso: null
        },
        infoAdm: null
        // Omitido: acessoVPN, acessoVpnMabu, acessoProcentric, acessoEncoder, acessoServidorChromecast, acessoServidorBackup, acessoIRD
    },
    // --- FIM INTERCITY CANOAS ---

    // --- INÍCIO BRISTOL SABRINA HOTEL DE CHARME ---
    "bristol-sabrina": {
        nome: "Bristol Sabrina Hotel de Charme",
        cidade: "Joinville", estado: "SC", pais: "BR",
        imagens: ["assets/logo-hotel/Bristol_logo.jpg"],
        descricao: "Hotel de charme localizado no centro histórico de Joinville...",
        infoAdicional: [ { titulo: "Endereço", valor: "Rua 15 de Novembro, 495 - Centro, Joinville - SC, 89201-601" }, { titulo: "Telefone", valor: "(47) 3433-9111" }, { titulo: "Website", valor: "<a href='https://www.bristolhoteis.com.br/hoteis/joinville/bristol-sabrina-hotel-de-charme/' target='_blank'>Site Oficial</a>" }],
        linkWhatsAppGrupo: null, backupLink: null,
        // --- Blocos de Acesso ---
        infoGeral: {
            sistemas: "RB, Flussonic, IRD",
            ipPublico: null // DynDNS: e7dd0e39f76f.sn.mynetname.net
        },
         acessoRB: {
            ovpn: "10.31.0.49:8580", ipLocal: "e7dd0e39f76f.sn.mynetname.net", user: "hoteltech", senha: "@ht2020*!", obs: "IP na LAN: 172.21.15.254. IP Local é DynDNS."
        },
        acessoFlussonic: [{
            tituloBloco: null,
            ovpn: "10.31.0.48", ipPrincipal: "192.168.88.30", portaSSH: 3055, portaWeb: 80, userSSH: "hoteltech", senhaSSHUser: "@ht2020*", senhaSSHRoot: null, userWeb: "admin", senhaWeb: "@ht2020*", linkWeb: "http://10.31.0.48:80", obs: null
        }],
        acessoIRD: {
            ovpn: "10.31.0.49", ipPrincipal: "192.168.88.136", portaWeb: 8581, userWeb: "admin", senhaWeb: "admin", linkWeb: "http://10.31.0.49:8581", obs: null, aviso: null
        },
         acessosRemotos: {
             lista: [],
             obs: null,
             aviso: "Hotel não tem acesso remoto, canal institucional usa uma box android." // Mantido do original
         },
        infoAdm: null
    },
    // --- FIM BRISTOL SABRINA HOTEL DE CHARME ---

    // --- INÍCIO BRISTOL INFINITY ---
    "bristol-infinity": {
        nome: "Bristol Infinity",
        cidade: "Rio Claro", estado: "SP", pais: "BR",
        imagens: ["assets/logo-hotel/Bristol_logo.jpg"],
        descricao: "Hotel moderno e bem localizado no centro de Rio Claro...",
        infoAdicional: [ { titulo: "Endereço", valor: "Rua 1, 1333 - Centro, Rio Claro - SP, 13500-144" }, { titulo: "Telefone", valor: "(19) 3522-5500" }, { titulo: "Website", valor: "<a href='https://www.bristolhoteis.com.br/hoteis/rio-claro/bristol-infinity/' target='_blank'>Site Oficial</a>" }],
        linkWhatsAppGrupo: null, backupLink: null,
        // --- Blocos de Acesso ---
         infoGeral: {
             sistemas: "RB, Flussonic, IRD, Remoto",
             ipPublico: null
         },
         acessoRB: {
             ovpn: "10.31.0.65:8580", ipLocal: "172.30.172.48", user: "hoteltech", senha: "@ht2020*!", obs: null
         },
         acessoFlussonic: [{
             tituloBloco: null,
             ovpn: "10.31.0.66", ipPrincipal: "192.168.10.31", portaSSH: 3055, portaWeb: 80, userSSH: "hoteltech", senhaSSHUser: "@ht2020*", senhaSSHRoot: null, userWeb: "admin", senhaWeb: "@ht2020*", linkWeb: "http://10.31.0.66:80", obs: null
         }],
         acessoIRD: {
             ovpn: "10.31.0.65", ipPrincipal: "192.168.10.136", portaWeb: 8581, userWeb: "hoteltech", senhaWeb: "@ht2020*", linkWeb: "http://10.31.0.65:8581", obs: null, aviso: null
         },
         acessosRemotos: {
             lista: [
                 { nomeCanal: 'Canal Institucional', anydesk: "1467599661", senha: "@ht2020*", tipo: null, windows: null, nota: null }
             ],
             obs: null,
             aviso: null
         },
        infoAdm: null
    },
    // --- FIM BRISTOL INFINITY ---

    // --- INÍCIO BRISTOL SANTO ANDRÉ ---
    "bristol-santo-andre": {
        nome: "Bristol Santo André",
        cidade: "Santo André", estado: "SP", pais: "BR",
        imagens: ["assets/logo-hotel/Bristol_logo.jpg"],
        descricao: "Hotel executivo em Santo André...",
        infoAdicional: [ { titulo: "Endereço", valor: "Av. Industrial, 885 - Jardim, Santo André - SP, 09080-510" }, { titulo: "Telefone", valor: "(11) 4433-0700" }, { titulo: "Website", valor: "<a href='https://www.bristolhoteis.com.br/hoteis/santo-andre/bristol-santo-andre/' target='_blank'>Site Oficial</a>" }],
        linkWhatsAppGrupo: null, backupLink: null,
        // --- Blocos de Acesso ---
        infoGeral: {
            sistemas: "RB, Flussonic, IRD, Remoto",
            ipPublico: "67.159.239.38"
        },
        acessoRB: {
            ovpn: "10.31.0.25:8580", ipLocal: "67.159.239.38", user: "hoteltech", senha: "@ht2020*!", obs: "IP Local parece ser público."
        },
        acessoFlussonic: [{ // Dados do Flussonic aqui eram do Bourbon Curitiba no original?? Usando placeholders
            tituloBloco: null,
            ovpn: "10.31.0.26", // Mantido ID OVPN do original, verificar se correto
            ipPrincipal: "192.168.10.50", portaSSH: 3055, portaWeb: 8080, userSSH: "hoteltech", senhaSSHUser: "@ht2020*", senhaSSHRoot: null, userWeb: "admin", senhaWeb: "@ht2020*", linkWeb: "http://10.31.0.26:8080", obs: "Dados Flussonic pareciam incorretos no original, verificar"
        }],
        acessoIRD: {
            ovpn: "10.31.0.25", ipPrincipal: "192.168.10.136", portaWeb: 8583, userWeb: "admin", senhaWeb: "admin", linkWeb: "http://10.31.0.25:8583", obs: null, aviso: null
        },
        acessosRemotos: {
            lista: [
                { nomeCanal: 'Canal Institucional', anydesk: "1058337896", senha: "@ht2020*", tipo: null, windows: null, nota: null }
            ],
            obs: null,
            aviso: null
        },
        infoAdm: null
    },
    // --- FIM BRISTOL SANTO ANDRÉ ---

    // --- INÍCIO CAPIVARI ECORESORT ---
    "capivari-ecoresort": {
        nome: "Capivari Ecoresort",
        cidade: "Campina Grande do Sul", estado: "PR", pais: "BR",
        imagens: ["assets/logo-hotel/Capivari_logo.jpg"],
        descricao: "Ecoresort localizado em meio à naturez...",
        infoAdicional: [ { titulo: "Endereço", valor: "Estrada Municipal Antônio Kovalski, s/n - Capivari, Campina Grande do Sul - PR, 83430-000" }, { titulo: "Telefone", valor: "(41) 3685-8300" }, { titulo: "Website", valor: "<a href='https://capivariecoresort.com.br/' target='_blank'>Site Oficial</a>" }],
        linkWhatsAppGrupo: null, backupLink: null,
        // --- Blocos de Acesso ---
        infoGeral: {
            sistemas: "Flussonic, Xtream, Remoto",
            ipPublico: "45.175.123.254"
        },
        acessoRB: "Hotel não tem RB",
        acessoFlussonic: [{
            tituloBloco: null,
            ovpn: "10.31.0.67", ipPrincipal: "192.168.91.221", portaSSH: 3055, portaWeb: 80, userSSH: "hoteltech", senhaSSHUser: "@ht2020*", senhaSSHRoot: null, userWeb: "hoteltech", senhaWeb: "@ht2020*", linkWeb: "http://10.31.0.67:80",
            obs: "IP Entrada (enp7s0): 192.168.91.221 / IP Saída (enp8s0): 192.168.50.10"
        }],
         acessoXtreamCodes: [{
             tituloBloco: null,
             ovpn: "10.31.0.81", ipPrincipal: "192.168.91.222", portaSSH: 3050, portaWeb: 25500, userSSH: "hoteltech", senhaSSHUser: "@ht2020*", senhaSSHRoot: null, userWeb: "hoteltech", senhaWeb: "@ht2020*!", linkWeb: "http://45.175.123.254:25500",
             obs: "IP Entrada (enp1s0): 192.168.91.222 / IP Saída Multicast (enp2s0): 192.168.50.10. Acesso Web via IP Público."
         }],
         acessosRemotos: {
             lista: [],
             obs: null,
             aviso: "Hotel não tem acesso remoto, canal institucional usa uma box android."
         },
        infoAdm: null
    },
    // --- FIM CAPIVARI ECORESORT ---

    // --- INÍCIO MY MABU ---
    "my-mabu": {
        nome: "My Mabu",
        cidade: "Foz do Iguaçu", estado: "PR", pais: "BR",
        imagens: ["assets/logo-hotel/My-Mabu_logo.jpg"],
        descricao: "Apartamentos de temporada dentro do complexo Mabu Thermas Grand Resort, com acesso às piscinas termais e ao parque aquático Blue Park.",
        infoAdicional: [
            { titulo: "Endereço", valor: "Av. das Cataratas, 3175 - Vila Yolanda, Foz do Iguaçu - PR, 85853-000" },
            { titulo: "Telefone", valor: "(45) 3521-2000" },
            { titulo: "Website", valor: "<a href='https://www.mymabu.com.br/' target='_blank'>Site Oficial</a>" }
        ],
        linkWhatsAppGrupo: null,
        backupLink: null, // Preencher se houver link específico de backup geral
        // --- Blocos de Acesso ---
        infoGeral: {
            sistemas: "VPN Mabu, Flussonic, Xtream Codes, Backup, Chromecast, Remoto", // Sistemas identificados
            ipPublico: null // IP Público principal não informado diretamente
        },
        acessoVpnMabu: {
            tipo: "VPN L2TP/IPSEC com chave pré-compartilhada.",
            enderecoServidor: "189.58.100.148",
            chaveIpsec: "#mabu !#%@",
            usuario: "h.tech",
            senha: "@@htech135",
            obs: null // Adicionado campo OBS
        },
        acessoRB: "Hotel não tem RB", // Informado que não tem
        acessoFlussonic: [{ // Colocado em array
            tituloBloco: null, // Usa título padrão
            ovpn: "10.31.0.21",
            ipPrincipal: "10.44.0.3", // Assumido do "ip Vpn Mabu"
            portaSSH: 3055, // Assumido da "Porta SSH Externa"
            portaWeb: 8080, // Da seção WEB
            userSSH: "hoteltech",
            senhaSSHUser: "@ht2020*", // Senha do user
            senhaSSHRoot: "@ht2020*", // Senha root
            userWeb: "admin", // Da seção WEB
            senhaWeb: "@ht2020*", // Da seção WEB
            linkWeb: "http://10.31.0.21:8080", // Construído com OVPN HT + Porta Web
            obs: null
        }],
        acessoXtreamCodes: [{ // Colocado em array
            tituloBloco: null, // Usa título padrão
            ovpn: "10.31.0.22", // Extraído do SSH/WEB
            ipPrincipal: "10.44.0.2", // Extraído do SSH/WEB
            portaSSH: 3055, // Extraído do SSH
            portaWeb: 25500, // Extraído do WEB
            userSSH: "hoteltech",
            senhaSSHUser: "@ht2020*",
            senhaSSHRoot: "@ht2020*",
            userWeb: "admin",
            senhaWeb: "@ht2020*",
            linkWeb: "http://10.31.0.22:25500", // Construído com OVPN HT + Porta Web
            obs: null
        }],
        acessoServidorBackup: {
            ovpn: null, // Não informado OVPN HT para backup
            ipPrincipal: "10.44.0.7", // Extraído do SSH/WEB Mabu
            portaSSH: 22, // Extraído do SSH
            portaWeb: 25500, // Extraído do WEB
            userSSH: "hoteltech",
            senhaSSHUser: "ht2020", // Senha User SSH
            senhaSSHRoot: "@ht2020", // Senha Root SSH
            userWeb: "hoteltech",
            senhaWeb: "@H0t3lt3ch_m4bu*",
            linkWeb: null, // Não é possível construir sem OVPN HT
            obs: "Acesso Web via IP da VPN Mabu + Porta Web (10.44.0.7:25500)"
        },
        acessoServidorChromecast: {
            ovpn: null, // Não informado
            ipPrincipal: "177.66.74.243", // Extraído do Web
            portaSSH: null, // Não informado
            portaWeb: 9997, // Extraído do Web
            userSSH: null, // Não informado
            senhaSSHUser: null, // Não informado
            senhaSSHRoot: null, // Não informado
            userWeb: "root",
            senhaWeb: "@ht2020*",
            linkWeb: "http://177.66.74.243:9997", // Construído do Web (HTTP por padrão)
            obs: null
        },
        acessosRemotos: {
            lista: [
                { nomeCanal: "Canal Institucional", anydesk: "130207679", senha: "@ht2020*", tipo: null, windows: null, nota: null },
                { nomeCanal: "Totem", anydesk: "209158469", senha: "@ht2020*", tipo: null, windows: null, nota: null },
                { nomeCanal: "Computador", anydesk: "1092960956", senha: "@ht2020*", tipo: null, windows: null, nota: null }
            ],
            obs: null,
            aviso: null
        },
        infoAdm: null // Preencher se necessário
        // Omitido: acessoVPN, acessoProcentric, acessoEncoder, acessoProxmox, acessoServidorApk, acessoIRD
    },
    // --- FIM MY MABU ---

     // --- INÍCIO FAZZENDA PARK RESORT ---
    "fazzenda-park": {
        nome: "Fazzenda Park Resort", cidade: "Gaspar", estado: "SC", pais: "BR",
        imagens: ["assets/logo-hotel/Fazenda-Park_logo.jpg"],
        descricao: "Resort estilo fazenda em Gaspar...",
        infoAdicional: [ { titulo: "Endereço", valor: "Rodovia SC-411, Km 6, Gaspar - SC, 89110-000" }, { titulo: "Telefone", valor: "(47) 3397-9000" }, { titulo: "Website", valor: "<a href='https://www.fazzenda.com.br/' target='_blank'>Site Oficial</a>" } ],
        linkWhatsAppGrupo: "https://chat.whatsapp.com/JFlvcFt86fl2BeermekOnJ", backupLink: null,
        // --- Blocos de Acesso ---
        infoGeral: {
            sistemas: "Flussonic, Procentric, IRD, Remoto",
            ipPublico: null
        },
        acessoRB: "Hotel não tem RB",
        acessoFlussonic: [{
            tituloBloco: null,
            ovpn: "10.31.0.38", ipPrincipal: "192.168.180.98", portaSSH: 3055, portaWeb: 80, userSSH: "hoteltech", senhaSSHUser: "@ht2020*", senhaSSHRoot: null, userWeb: "admin", senhaWeb: "@ht2020*", linkWeb: "http://10.31.0.38:80", obs: "IP Primário (enp2s0/VLAN99): 192.168.180.98 / IP Secundário (enp3s0/VLAN100): 192.168.175.187"
        }],
        acessoProcentric: [{ // Dados do original
            tituloBloco: null,
            ovpn: null, // Não informado
            ipPrincipal: "192.168.63.200", portaSSH: 22, portaWeb: 80, userSSH: "admin", senhaSSHUser: "Password4Partners", senhaSSHRoot: null,
            usersWeb: [ // Array de usuários web
                { user: "procentric", senha: "H0t3lTF4zz22*" },
                { user: "hoteltech", senha: "HtT3ch*2022" },
                { user: "Ramires", senha: "H0t3lTF4zz20*" }
            ],
            linkWeb: "http://192.168.63.200:80", // Link via IP Local
            obs: "IP Primário: 192.168.63.200 / IP Secundário: 192.168.171.20. Users Web Adicionais anotados. Link Web usa IP Local.",
            aviso: "Acesso Procentric realizado via Servidor de Integração."
        }],
        acessoIRD: { // Dados do original
            ovpn: null, ipPrincipal: "192.168.63.197", portaWeb: null, userWeb: "admin", senhaWeb: "admin", linkWeb: null,
            obs: null,
            aviso: "Acesso IRD via Servidor de Integração."
        },
        acessosRemotos: { // Dados do original
            lista: [
                { nomeCanal: "Canal Institucional", anydesk: "1579563512", senha: "@ht2020*", tipo: null, windows: null, nota: null },
                { nomeCanal: "Servidor Integração", anydesk: "828007415", senha: "@ht2020*", tipo: null, windows: null, nota: null }
            ],
            obs: null,
            aviso: null
        },
        infoAdm: null
    },
    // --- FIM FAZZENDA PARK RESORT ---

    // --- INÍCIO HOTEL GLÓRIA ---
    "gloria-blumenau": {
        nome: "Hotel Glória",
        cidade: "Blumenau", estado: "SC", pais: "BR",
        imagens: ["assets/logo-hotel/Gloria_logo.jpg"],
        descricao: "Hotel tradicional no centro de Blumenau...",
        infoAdicional: [{ titulo: "Endereço", valor: "Rua 7 de Setembro, 954 - Centro, Blumenau - SC, 89010-202" }, { titulo: "Telefone", valor: "(47) 3326-1988" }, { titulo: "Website", valor: "<a href='https://www.hotelgloria.com.br/' target='_blank'>Site Oficial</a>" }],
        linkWhatsAppGrupo: null, backupLink: null,
        infoGeral: { sistemas: null, ipPublico: null }, infoAdm: null
        // Omitido: Todos os acessos técnicos (eram null no original)
    },
    // --- FIM HOTEL GLÓRIA ---

    // --- INÍCIO BLUE TREE TOWERS VERBO DIVINO ---
    "bluetree-verbo-divino": {
        nome: "Blue Tree Towers Verbo Divino",
        cidade: "São Paulo", estado: "SP", pais: "BR",
        imagens: ["assets/logo-hotel/Blue-tree_logo.jpg"],
        descricao: "Hotel de negócios na Chácara Santo Antônio...",
        infoAdicional: [{ titulo: "Endereço", valor: "Rua Verbo Divino, 1323 - Chácara Santo Antônio, São Paulo - SP, 04719-002" }, { titulo: "Telefone", valor: "(11) 5683-4600" }, { titulo: "Website", valor: "<a href='https://www.bluetree.com.br/hotel/blue-tree-towers-verbo-divino/' target='_blank'>Site Oficial</a>" }],
        linkWhatsAppGrupo: null, backupLink: null,
        infoGeral: { sistemas: null, ipPublico: null }, infoAdm: null
        // Omitido: Todos os acessos técnicos
    },
    // --- FIM BLUE TREE TOWERS VERBO DIVINO ---

    // ... (CONTINUAR O PROCESSO PARA TODOS OS HOTÉIS RESTANTES: Aqualand até Nayru/Arcas) ...
    // ... (A maioria dos hotéis restantes no seu arquivo original só tinha dados básicos, então eles terão apenas infoGeral e infoAdm: null, além dos dados básicos) ...

     // Exemplo final de hotel mapeado (NAYRU)
    "arcas-toledo": { // ID original mantido, mas representa Nayru
        nome: "Nayru Hotel",
        cidade: "Toledo", estado: "PR", pais: "BR",
        imagens: ["assets/logo-hotel/Arcas_logo.jpg"], // Usando logo antigo, verificar
        descricao: "Hotel moderno e bem localizado em Toledo (PR)...",
        infoAdicional: [{ titulo: "Endereço", valor: "Rua Haroldo Hamilton, 470 - Centro, Toledo - PR, 85902-040" }, { titulo: "Telefone", valor: "(45) 2103-4040" }, { titulo: "Website", valor: "<a href='https://nayruhotel.com.br/' target='_blank'>Site Oficial</a>" }],
        linkWhatsAppGrupo: null, backupLink: null,
        infoGeral: { sistemas: null, ipPublico: null }, infoAdm: null
        // Omitido: Todos os acessos técnicos
    }
    // --- FIM NAYRU HOTEL ---


}; // Fim do objeto hotelDatabase