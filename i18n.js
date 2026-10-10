/* Traduction FR <-> EN : le francais est lu directement dans les pages,
   seul le dictionnaire anglais est ici (cle = texte francais exact). */
(function () {
    var KEY = "lang";
    var root = document.documentElement;

    var EN = {
        /* Navigation et interface */
        "Accueil": "Home",
        "À propos": "About",
        "Compétences": "Skills",
        "Projets": "Projects",
        "Aller au contenu": "Skip to content",
        "Navigation principale": "Main navigation",
        "Ouvrir le menu": "Open the menu",
        "Changer de thème": "Toggle theme",
        "Passer au thème clair": "Switch to light theme",
        "Passer au thème sombre": "Switch to dark theme",
        "Langue": "Language",
        "Parcours": "Career path",
        "Photo de Jeremy Yaweli-Kasongo": "Photo of Jeremy Yaweli-Kasongo",

        /* Titres d'onglet */
        "Accueil - Portfolio Jeremy Yaweli-Kasongo": "Home - Jeremy Yaweli-Kasongo's Portfolio",
        "À propos - Portfolio Jeremy Yaweli-Kasongo": "About - Jeremy Yaweli-Kasongo's Portfolio",
        "Compétences - Portfolio Jeremy Yaweli-Kasongo": "Skills - Jeremy Yaweli-Kasongo's Portfolio",
        "Projets - Portfolio Jeremy Yaweli-Kasongo": "Projects - Jeremy Yaweli-Kasongo's Portfolio",
        "Contact - Portfolio Jeremy Yaweli-Kasongo": "Contact - Jeremy Yaweli-Kasongo's Portfolio",

        /* Accueil */
        "Bonjour, je suis": "Hello, I'm",
        "Étudiant en BTS SIO option SISR": "BTS SIO student (SISR option)",
        "Actuellement en BTS Services Informatiques aux Organisations en alternance, je me prépare à intégrer la 3e année du Bachelor Administrateur d’Infrastructures Sécurisées à la CCI Campus Strasbourg. Ce portfolio a été créé pour présenter mon profil aux entreprises dans le cadre de ma recherche d’alternance en réseaux et administration système. Mon objectif : me spécialiser dans Linux et devenir administrateur système Linux.":
            "I am currently doing a BTS in IT Services for Organisations (SIO) as a work-study student, and I am preparing to join the 3rd year of the Secured Infrastructure Administrator Bachelor (AIS) at CCI Campus Strasbourg. This portfolio presents my profile to companies as part of my search for a work-study placement in networks and system administration. My goal: to specialise in Linux and become a Linux system administrator.",
        "Me contacter": "Contact me",
        "En savoir plus": "Learn more",
        "Compétences clés": "Key skills",
        "Ligne de commande, SSH, permissions": "Command line, SSH, permissions",
        "2022/2025, GUI et Core": "2022/2025, GUI and Core",
        "Réseau": "Networking",
        "DNS, DHCP, VLAN, adressage IP": "DNS, DHCP, VLAN, IP addressing",
        "Liaison chiffrée inter-sites": "Encrypted site-to-site link",
        "Virtualisation": "Virtualisation",
        "Voir toutes les compétences": "See all skills",

        /* A propos */
        "Passionné d’informatique depuis plusieurs années, j’ai passé un Bac Pro Systèmes Numériques au lycée Marcel Rudloff, puis poursuivi en BTS SIO option SISR en alternance à la CCI Campus Strasbourg. J’y ai travaillé comme technicien informatique en alternance chez NLMK, puis chez Tessi. Mon objectif est d’intégrer la 3e année du Bachelor Administrateur d’Infrastructures Sécurisées, toujours en alternance, afin de renforcer mes compétences en réseaux et en systèmes. Mon projet professionnel : me spécialiser dans Linux et devenir administrateur système Linux. Je suis motivé, rigoureux, curieux et déterminé à évoluer dans le domaine de la sécurité informatique.":
            "Passionate about computing for several years, I did a vocational Baccalaureate in Digital Systems at Marcel Rudloff High School, then continued with a BTS SIO (SISR option) as a work-study student at CCI Campus Strasbourg. I worked as a work-study IT technician at NLMK, then at Tessi. My goal is to join the 3rd year of the Secured Infrastructure Administrator Bachelor, again as a work-study student, to strengthen my skills in networks and systems. My career goal: to specialise in Linux and become a Linux system administrator. I am motivated, rigorous, curious and determined to grow in the field of IT security.",
        "Sept. 2024 – juil. 2025": "Sept. 2024 – July 2025",
        "Technicien informatique en alternance": "IT technician (work-study)",
        "NLMK (production d’acier), Strasbourg": "NLMK (steel production), Strasbourg",
        "Bac Pro Systèmes Numériques": "Vocational Baccalaureate in Digital Systems",
        "Lycée Marcel Rudloff, Strasbourg": "Marcel Rudloff High School, Strasbourg",
        "BTS SIO option SISR en alternance": "BTS SIO, SISR option (work-study)",
        "CCI Campus Strasbourg (en cours)": "CCI Campus Strasbourg (in progress)",
        "Sept. 2025 – juil. 2027": "Sept. 2025 – July 2027",
        "Rentrée visée : 2027": "Target start: 2027",
        "Bachelor AIS (3e année)": "AIS Bachelor (3rd year)",
        "Administrateur d’Infrastructures Sécurisées, en alternance": "Secured Infrastructure Administrator, work-study",
        "Objectif": "Goal",
        "Intégrer une entreprise en alternance pour ma 3e année de Bachelor AIS afin de développer mes compétences en administration système et réseau.":
            "Join a company as a work-study student for my 3rd year of the AIS Bachelor in order to develop my skills in system and network administration.",
        "À terme, je souhaite me spécialiser dans l’environnement Linux et devenir administrateur système Linux.":
            "In the long term, I want to specialise in the Linux environment and become a Linux system administrator.",
        "Qualités": "Qualities",
        "Rigueur et sens de l’organisation": "Rigour and organisation skills",
        "Curiosité et patience": "Curiosity and patience",
        "Esprit d’équipe": "Team spirit",

        /* Competences */
        "Systèmes": "Systems",
        "Linux Debian : ligne de commande et interface graphique": "Linux Debian: command line and graphical interface",
        "Windows Server 2022/2025 (GUI et Core)": "Windows Server 2022/2025 (GUI and Core)",
        "SSH, utilisateurs et permissions, paquets (apt)": "SSH, users and permissions, packages (apt)",
        "Services Windows": "Windows services",
        "Active Directory et GPO": "Active Directory and GPO",
        "Gestion des droits et partages réseau": "Rights management and network shares",
        "Configuration réseau Linux et Windows": "Linux and Windows network configuration",
        "VPN IPsec inter-sites": "Site-to-site IPsec VPN",
        "Adressage IP, VLAN": "IP addressing, VLAN",
        "Réseaux virtuels : NAT, Bridge, Host-only, VMnet": "Virtual networks: NAT, Bridge, Host-only, VMnet",
        "Support & exploitation": "Support & operations",
        "Technicien informatique en alternance (Tessi, NLMK)": "IT technician, work-study (Tessi, NLMK)",
        "Gestion de parc et tickets avec GLPI": "Asset management and ticketing with GLPI",
        "Déploiement de logiciels et d’images système": "Software and system image deployment",
        "Langues": "Languages",
        "Français : langue maternelle": "French: native language",
        "Anglais : A2 – B1 (niveau scolaire)": "English: A2 – B1 (school level)",

        /* Projets */
        "Projets BTS SIO – option SISR": "BTS SIO projects – SISR option",
        "Deux situations professionnelles réalisées en maquette (VMware) à la CCI Campus Strasbourg, en groupe, avec étude du cahier des charges, budget, planning, schéma réseau, démonstration technique et documentation complète.":
            "Two professional scenarios carried out as lab environments (VMware) at CCI Campus Strasbourg, in a group, including analysis of the specifications, budget, schedule, network diagram, technical demonstration and full documentation.",
        "AP3 · Projet M2i · 2026 (en cours)": "AP3 · M2i project · 2026 (in progress)",
        "Infrastructure haute disponibilité multi-sites": "Multi-site high-availability infrastructure",
        "Fournir à un centre de formation un système d’information redondé et sécurisé, avec une liaison chiffrée entre deux sites (Strasbourg et Mulhouse).":
            "Provide a training centre with a redundant, secure information system and an encrypted link between two sites (Strasbourg and Mulhouse).",
        "VPN IPsec site à site entre deux routeurs/pare-feu pfSense": "Site-to-site IPsec VPN between two pfSense routers/firewalls",
        "Active Directory : 4 contrôleurs de domaine Windows Server (GUI et Core), DNS, DHCP avec basculement":
            "Active Directory: 4 Windows Server domain controllers (GUI and Core), DNS, DHCP with failover",
        "DFS / DFSR : espace de noms commun et réplication des données entre les 4 serveurs":
            "DFS / DFSR: shared namespace and data replication across the 4 servers",
        "Sauvegarde complète et clichés instantanés sur SAN via iSCSI": "Full backup and shadow copies on a SAN via iSCSI",
        "GPO et règles de pare-feu selon les recommandations de l’ANSSI": "GPOs and firewall rules following ANSSI recommendations",
        "Gestion de parc et support utilisateurs": "Asset management and user support",
        "Création d’une direction des systèmes d’information pour une société de gestion de parkings (83 salariés) : inventorier le parc, outiller le support et améliorer la qualité de service, dans une démarche inspirée d’ITIL.":
            "Creation of an information systems department for a car park management company (83 employees): inventory the equipment, equip the support team and improve service quality, following an ITIL-inspired approach.",
        "Serveurs Linux Debian/Ubuntu": "Linux Debian/Ubuntu servers",
        "GLPI : inventaire automatisé, gestion de parc et tickets, connecté à l’Active Directory":
            "GLPI: automated inventory, asset management and ticketing, connected to Active Directory",
        "Assistance à distance hébergée en interne, conforme au RGPD": "Remote assistance hosted in-house, GDPR compliant",
        "Déploiement de logiciels et d’images système sur Windows 11 Pro": "Software and system image deployment on Windows 11 Pro",
        "Chiffrement des disques avec sauvegarde de la clé de récupération": "Disk encryption with recovery key backup",
        "RGPD": "GDPR",
        "Déploiement d’images": "Image deployment",
        "Projet personnel · en cours": "Personal project · in progress",
        "Serveur Linux Debian sécurisé": "Secure Debian Linux server",
        "Montage d’un serveur Debian sans interface graphique, comme en entreprise, dans une machine virtuelle VMware, pour me former à l’administration Linux.":
            "Setting up a Debian server with no graphical interface, as in a company, in a VMware virtual machine, to train myself in Linux administration.",
        "Connexion SSH par clés, sans mot de passe ni accès root": "SSH key-based login, with no password and no root access",
        "Pare-feu ufw et protection fail2ban": "ufw firewall and fail2ban protection",
        "Site web Apache en HTTPS": "Apache website over HTTPS",
        "Sauvegarde automatique avec rsync et cron, avec test de restauration": "Automatic backup with rsync and cron, with a restore test",
        "Supervision du serveur et script Bash de rapport quotidien": "Server monitoring and a daily Bash report script",

        /* Contact */
        "Disponible pour une alternance en 3e année de Bachelor AIS à la CCI Campus Strasbourg. N’hésitez pas à me contacter pour échanger sur mon profil.":
            "Available for a work-study placement in the 3rd year of the AIS Bachelor at CCI Campus Strasbourg. Feel free to contact me to discuss my profile.",
        "Envoyer un email": "Send an email",
        "Appeler": "Call",
        "Email :": "Email:",
        "Tél :": "Phone:",
        "GitHub :": "GitHub:",
        "Ville :": "City:",
        "Mobilité :": "Mobility:",
        "Permis B": "Driving licence (category B)"
    };

    var originals = new WeakMap();
    var lang = "fr";

    function norm(s) { return s.replace(/\s+/g, " ").trim(); }

    function t(fr) {
        var k = norm(fr);
        return (lang === "en" && EN[k]) ? EN[k] : fr;
    }

    function translateTextNodes() {
        var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
            acceptNode: function (n) {
                var p = n.parentNode && n.parentNode.nodeName;
                if (p === "SCRIPT" || p === "STYLE" || p === "OPTION") { return NodeFilter.FILTER_REJECT; }
                return norm(n.nodeValue) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
            }
        });
        var n;
        while ((n = walker.nextNode())) {
            if (!originals.has(n)) { originals.set(n, n.nodeValue); }
            var orig = originals.get(n);
            var k = norm(orig);
            n.nodeValue = (lang === "en" && EN[k]) ? EN[k] : orig;
        }
    }

    function translateAttributes() {
        var els = document.querySelectorAll("[alt], [aria-label]");
        Array.prototype.forEach.call(els, function (el) {
            if (el.id === "theme-btn") { return; }
            ["alt", "aria-label"].forEach(function (a) {
                if (!el.hasAttribute(a)) { return; }
                var store = "data-i18n-orig-" + a;
                if (!el.hasAttribute(store)) { el.setAttribute(store, el.getAttribute(a)); }
                var orig = el.getAttribute(store);
                el.setAttribute(a, (lang === "en" && EN[norm(orig)]) ? EN[norm(orig)] : orig);
            });
        });
    }

    var originalTitle = null;
    function translateTitle() {
        if (originalTitle === null) { originalTitle = document.title; }
        document.title = (lang === "en" && EN[norm(originalTitle)]) ? EN[norm(originalTitle)] : originalTitle;
    }

    function apply(newLang) {
        lang = newLang === "en" ? "en" : "fr";
        root.setAttribute("lang", lang);
        translateTextNodes();
        translateAttributes();
        translateTitle();
        var sel = document.getElementById("lang-select");
        if (sel) {
            sel.value = lang;
            sel.setAttribute("aria-label", lang === "en" ? "Language" : "Langue");
        }
        document.dispatchEvent(new Event("langchange"));
    }

    window.i18n = { t: t, apply: apply, get lang() { return lang; } };

    document.addEventListener("DOMContentLoaded", function () {
        var saved = null;
        try { saved = localStorage.getItem(KEY); } catch (e) {}
        var initial = saved === "en" || saved === "fr" ? saved
            : ((navigator.language || "").toLowerCase().indexOf("en") === 0 ? "en" : "fr");

        var sel = document.getElementById("lang-select");
        if (sel) {
            sel.addEventListener("change", function () {
                try { localStorage.setItem(KEY, sel.value); } catch (e) {}
                apply(sel.value);
            });
        }
        apply(initial);
    });
})();