/* Traductions du portfolio.
   Le francais est lu directement dans les pages ; chaque ligne ci-dessous donne
   le texte francais exact puis ses traductions, dans l'ordre de LANGS.
   Une chaine vide = on garde le texte francais tel quel (nom propre, etc.). */
(function () {
    var KEY = "lang";
    var root = document.documentElement;

    var LANGS = ["en", "de", "es", "pt", "el", "ru"];
    var SUPPORTED = ["fr"].concat(LANGS);

    var ROWS = [
        /* ---- Navigation et interface ---- */
        ["Accueil", "Home", "Startseite", "Inicio", "Início", "Αρχική", "Главная"],
        ["À propos", "About", "Über mich", "Sobre mí", "Sobre mim", "Σχετικά", "Обо мне"],
        ["Compétences", "Skills", "Kompetenzen", "Competencias", "Competências", "Δεξιότητες", "Навыки"],
        ["Projets", "Projects", "Projekte", "Proyectos", "Projetos", "Έργα", "Проекты"],
        ["Contact", "", "Kontakt", "Contacto", "Contacto", "Επικοινωνία", "Контакты"],
        ["Aller au contenu", "Skip to content", "Zum Inhalt springen", "Saltar al contenido", "Ir para o conteúdo", "Μετάβαση στο περιεχόμενο", "Перейти к содержимому"],
        ["Navigation principale", "Main navigation", "Hauptnavigation", "Navegación principal", "Navegação principal", "Κύρια πλοήγηση", "Основная навигация"],
        ["Ouvrir le menu", "Open the menu", "Menü öffnen", "Abrir el menú", "Abrir o menu", "Άνοιγμα μενού", "Открыть меню"],
        ["Changer de thème", "Toggle theme", "Design wechseln", "Cambiar de tema", "Alternar tema", "Αλλαγή θέματος", "Сменить тему"],
        ["Passer au thème clair", "Switch to light theme", "Zum hellen Design wechseln", "Cambiar al tema claro", "Mudar para o tema claro", "Εναλλαγή σε φωτεινό θέμα", "Включить светлую тему"],
        ["Passer au thème sombre", "Switch to dark theme", "Zum dunklen Design wechseln", "Cambiar al tema oscuro", "Mudar para o tema escuro", "Εναλλαγή σε σκούρο θέμα", "Включить тёмную тему"],
        ["Langue", "Language", "Sprache", "Idioma", "Idioma", "Γλώσσα", "Язык"],
        ["Parcours", "Career path", "Werdegang", "Trayectoria", "Percurso", "Πορεία", "Путь"],
        ["Photo de Jeremy Yaweli-Kasongo", "Photo of Jeremy Yaweli-Kasongo", "Foto von Jeremy Yaweli-Kasongo", "Foto de Jeremy Yaweli-Kasongo", "Foto de Jeremy Yaweli-Kasongo", "Φωτογραφία του Jeremy Yaweli-Kasongo", "Фото Jeremy Yaweli-Kasongo"],

        /* ---- Titres d'onglet ---- */
        ["Accueil - Portfolio Jeremy Yaweli-Kasongo", "Home - Jeremy Yaweli-Kasongo's Portfolio", "Startseite - Portfolio von Jeremy Yaweli-Kasongo", "Inicio - Portafolio de Jeremy Yaweli-Kasongo", "Início - Portefólio de Jeremy Yaweli-Kasongo", "Αρχική - Portfolio του Jeremy Yaweli-Kasongo", "Главная - Портфолио Jeremy Yaweli-Kasongo"],
        ["À propos - Portfolio Jeremy Yaweli-Kasongo", "About - Jeremy Yaweli-Kasongo's Portfolio", "Über mich - Portfolio von Jeremy Yaweli-Kasongo", "Sobre mí - Portafolio de Jeremy Yaweli-Kasongo", "Sobre mim - Portefólio de Jeremy Yaweli-Kasongo", "Σχετικά - Portfolio του Jeremy Yaweli-Kasongo", "Обо мне - Портфолио Jeremy Yaweli-Kasongo"],
        ["Compétences - Portfolio Jeremy Yaweli-Kasongo", "Skills - Jeremy Yaweli-Kasongo's Portfolio", "Kompetenzen - Portfolio von Jeremy Yaweli-Kasongo", "Competencias - Portafolio de Jeremy Yaweli-Kasongo", "Competências - Portefólio de Jeremy Yaweli-Kasongo", "Δεξιότητες - Portfolio του Jeremy Yaweli-Kasongo", "Навыки - Портфолио Jeremy Yaweli-Kasongo"],
        ["Projets - Portfolio Jeremy Yaweli-Kasongo", "Projects - Jeremy Yaweli-Kasongo's Portfolio", "Projekte - Portfolio von Jeremy Yaweli-Kasongo", "Proyectos - Portafolio de Jeremy Yaweli-Kasongo", "Projetos - Portefólio de Jeremy Yaweli-Kasongo", "Έργα - Portfolio του Jeremy Yaweli-Kasongo", "Проекты - Портфолио Jeremy Yaweli-Kasongo"],
        ["Contact - Portfolio Jeremy Yaweli-Kasongo", "Contact - Jeremy Yaweli-Kasongo's Portfolio", "Kontakt - Portfolio von Jeremy Yaweli-Kasongo", "Contacto - Portafolio de Jeremy Yaweli-Kasongo", "Contacto - Portefólio de Jeremy Yaweli-Kasongo", "Επικοινωνία - Portfolio του Jeremy Yaweli-Kasongo", "Контакты - Портфолио Jeremy Yaweli-Kasongo"],

        /* ---- Accueil ---- */
        ["Bonjour, je suis", "Hello, I'm", "Hallo, ich bin", "Hola, soy", "Olá, eu sou", "Γεια σας, είμαι", "Здравствуйте, я"],
        ["Strasbourg • France", "", "Straßburg • Frankreich", "Estrasburgo • Francia", "Estrasburgo • França", "Στρασβούργο • Γαλλία", "Страсбург • Франция"],
        ["Étudiant en BTS SIO option SISR", "BTS SIO student (SISR option)", "BTS-SIO-Student (Fachrichtung SISR)", "Estudiante de BTS SIO (opción SISR)", "Estudante de BTS SIO (opção SISR)", "Φοιτητής BTS SIO (κατεύθυνση SISR)", "Студент BTS SIO (направление SISR)"],
        ["Actuellement en BTS Services Informatiques aux Organisations en alternance, je me prépare à intégrer la 3e année du Bachelor Administrateur d’Infrastructures Sécurisées à la CCI Campus Strasbourg. Ce portfolio a été créé pour présenter mon profil aux entreprises dans le cadre de ma recherche d’alternance en réseaux et administration système. Mon objectif : me spécialiser dans Linux et devenir administrateur système Linux.",
            "I am currently doing a BTS in IT Services for Organisations (SIO) as a work-study student, and I am preparing to join the 3rd year of the Secured Infrastructure Administrator Bachelor (AIS) at CCI Campus Strasbourg. This portfolio presents my profile to companies as part of my search for a work-study placement in networks and system administration. My goal: to specialise in Linux and become a Linux system administrator.",
            "Derzeit absolviere ich im dualen System den BTS Services Informatiques aux Organisations (SIO) und bereite mich darauf vor, in das 3. Jahr des Bachelors Administrateur d’Infrastructures Sécurisées (AIS) am CCI Campus Strasbourg einzusteigen. Dieses Portfolio stellt mein Profil Unternehmen vor, im Rahmen meiner Suche nach einer Alternance-Stelle in den Bereichen Netzwerke und Systemadministration. Mein Ziel: mich auf Linux zu spezialisieren und Linux-Systemadministrator zu werden.",
            "Actualmente cursando el BTS Services Informatiques aux Organisations (SIO) en formación dual, me preparo para incorporarme al 3.º año del Bachelor Administrateur d’Infrastructures Sécurisées (AIS) en el CCI Campus Strasbourg. Este portafolio se ha creado para presentar mi perfil a las empresas en el marco de mi búsqueda de una plaza en formación dual en redes y administración de sistemas. Mi objetivo: especializarme en Linux y convertirme en administrador de sistemas Linux.",
            "Atualmente a frequentar o BTS Services Informatiques aux Organisations (SIO) em regime de alternância, preparo-me para ingressar no 3.º ano do Bachelor Administrateur d’Infrastructures Sécurisées (AIS) no CCI Campus Strasbourg. Este portefólio foi criado para apresentar o meu perfil às empresas, no âmbito da minha procura de um contrato de alternância em redes e administração de sistemas. O meu objetivo: especializar-me em Linux e tornar-me administrador de sistemas Linux.",
            "Αυτή τη στιγμή παρακολουθώ το BTS Services Informatiques aux Organisations (SIO) με σύστημα εναλλασσόμενης εκπαίδευσης (alternance) και προετοιμάζομαι να ενταχθώ στο 3ο έτος του Bachelor Administrateur d’Infrastructures Sécurisées (AIS) στο CCI Campus Strasbourg. Αυτό το portfolio δημιουργήθηκε για να παρουσιάσει το προφίλ μου στις επιχειρήσεις, στο πλαίσιο της αναζήτησής μου για θέση εναλλασσόμενης εκπαίδευσης στα δίκτυα και τη διαχείριση συστημάτων. Στόχος μου: να ειδικευτώ στο Linux και να γίνω διαχειριστής συστημάτων Linux.",
            "В настоящее время я учусь по программе BTS Services Informatiques aux Organisations (SIO) в формате дуального обучения (alternance) и готовлюсь поступить на 3-й курс бакалавриата Administrateur d’Infrastructures Sécurisées (AIS) в CCI Campus Strasbourg. Это портфолио создано, чтобы представить мой профиль компаниям в рамках поиска места дуального обучения в области сетей и системного администрирования. Моя цель — специализироваться на Linux и стать системным администратором Linux."],
        ["Me contacter", "Contact me", "Kontakt aufnehmen", "Contáctame", "Contacte-me", "Επικοινωνήστε μαζί μου", "Связаться со мной"],
        ["En savoir plus", "Learn more", "Mehr erfahren", "Saber más", "Saber mais", "Μάθετε περισσότερα", "Узнать больше"],
        ["Compétences clés", "Key skills", "Kernkompetenzen", "Competencias clave", "Competências-chave", "Βασικές δεξιότητες", "Ключевые навыки"],
        ["Ligne de commande, SSH, permissions", "Command line, SSH, permissions", "Kommandozeile, SSH, Berechtigungen", "Línea de comandos, SSH, permisos", "Linha de comandos, SSH, permissões", "Γραμμή εντολών, SSH, δικαιώματα", "Командная строка, SSH, права доступа"],
        ["2022/2025, GUI et Core", "2022/2025, GUI and Core", "2022/2025, GUI und Core", "2022/2025, GUI y Core", "2022/2025, GUI e Core", "2022/2025, GUI και Core", "2022/2025, GUI и Core"],
        ["Réseau", "Networking", "Netzwerk", "Redes", "Redes", "Δίκτυα", "Сети"],
        ["DNS, DHCP, VLAN, adressage IP", "DNS, DHCP, VLAN, IP addressing", "DNS, DHCP, VLAN, IP-Adressierung", "DNS, DHCP, VLAN, direccionamiento IP", "DNS, DHCP, VLAN, endereçamento IP", "DNS, DHCP, VLAN, διευθυνσιοδότηση IP", "DNS, DHCP, VLAN, IP-адресация"],
        ["Liaison chiffrée inter-sites", "Encrypted site-to-site link", "Verschlüsselte Standortverbindung", "Enlace cifrado entre sedes", "Ligação cifrada entre sites", "Κρυπτογραφημένη σύνδεση μεταξύ τοποθεσιών", "Шифрованный канал между площадками"],
        ["Virtualisation", "Virtualisation", "Virtualisierung", "Virtualización", "Virtualização", "Εικονικοποίηση", "Виртуализация"],
        ["Voir toutes les compétences", "See all skills", "Alle Kompetenzen ansehen", "Ver todas las competencias", "Ver todas as competências", "Δείτε όλες τις δεξιότητες", "Все навыки"],

        /* ---- A propos ---- */
        ["Passionné d’informatique depuis plusieurs années, j’ai passé un Bac Pro Systèmes Numériques au lycée Marcel Rudloff, puis poursuivi en BTS SIO option SISR en alternance à la CCI Campus Strasbourg. J’ai accompagné l’administrateur réseau et systèmes de NLMK, puis je travaille comme technicien informatique en alternance chez Tessi. Mon objectif est d’intégrer la 3e année du Bachelor Administrateur d’Infrastructures Sécurisées, toujours en alternance, afin de renforcer mes compétences en réseaux et en systèmes. Mon projet professionnel : me spécialiser dans Linux et devenir administrateur système Linux. Je suis motivé, rigoureux, curieux et déterminé à évoluer dans le domaine de la sécurité informatique.",
            "Passionate about computing for several years, I did a vocational Baccalaureate in Digital Systems at Marcel Rudloff High School, then continued with a BTS SIO (SISR option) as a work-study student at CCI Campus Strasbourg. I supported the network and systems administrator at NLMK, then I work as a work-study IT technician at Tessi. My goal is to join the 3rd year of the Secured Infrastructure Administrator Bachelor, again as a work-study student, to strengthen my skills in networks and systems. My career goal: to specialise in Linux and become a Linux system administrator. I am motivated, rigorous, curious and determined to grow in the field of IT security.",
            "Seit mehreren Jahren begeistere ich mich für Informatik. Ich habe ein Bac Pro Systèmes Numériques am Lycée Marcel Rudloff absolviert und anschließend im dualen System den BTS SIO, Fachrichtung SISR, am CCI Campus Strasbourg fortgesetzt. Dabei habe ich bei NLMK den Netzwerk- und Systemadministrator unterstützt und arbeite nun als IT-Techniker im dualen System bei Tessi. Mein Ziel ist es, in das 3. Jahr des Bachelors Administrateur d’Infrastructures Sécurisées einzusteigen, ebenfalls im dualen System, um meine Kenntnisse in Netzwerken und Systemen zu vertiefen. Mein beruflicher Plan: mich auf Linux zu spezialisieren und Linux-Systemadministrator zu werden. Ich bin motiviert, gewissenhaft, neugierig und entschlossen, mich im Bereich der IT-Sicherheit weiterzuentwickeln.",
            "Me apasiona la informática desde hace varios años: cursé un Bac Pro Systèmes Numériques en el lycée Marcel Rudloff y después continué con el BTS SIO, opción SISR, en formación dual en el CCI Campus Strasbourg. Acompañé al administrador de redes y sistemas de NLMK y ahora trabajo como técnico informático en formación dual en Tessi. Mi objetivo es incorporarme al 3.º año del Bachelor Administrateur d’Infrastructures Sécurisées, también en formación dual, para reforzar mis competencias en redes y sistemas. Mi proyecto profesional: especializarme en Linux y convertirme en administrador de sistemas Linux. Soy una persona motivada, rigurosa, curiosa y decidida a evolucionar en el ámbito de la seguridad informática.",
            "A informática apaixona-me há vários anos: tirei um Bac Pro Systèmes Numériques no lycée Marcel Rudloff e continuei com o BTS SIO, opção SISR, em regime de alternância no CCI Campus Strasbourg. Acompanhei o administrador de redes e sistemas da NLMK e agora trabalho como técnico informático em alternância na Tessi. O meu objetivo é ingressar no 3.º ano do Bachelor Administrateur d’Infrastructures Sécurisées, também em alternância, para reforçar as minhas competências em redes e sistemas. O meu projeto profissional: especializar-me em Linux e tornar-me administrador de sistemas Linux. Sou uma pessoa motivada, rigorosa, curiosa e determinada a evoluir na área da segurança informática.",
            "Η πληροφορική με ενδιαφέρει εδώ και πολλά χρόνια. Ολοκλήρωσα το Bac Pro Systèmes Numériques στο λύκειο Marcel Rudloff και συνέχισα με το BTS SIO, κατεύθυνση SISR, με σύστημα εναλλασσόμενης εκπαίδευσης στο CCI Campus Strasbourg. Υποστήριξα τον διαχειριστή δικτύων και συστημάτων στη NLMK και στη συνέχεια εργάζομαι ως τεχνικός πληροφορικής με εναλλασσόμενη εκπαίδευση στη Tessi. Στόχος μου είναι να ενταχθώ στο 3ο έτος του Bachelor Administrateur d’Infrastructures Sécurisées, επίσης με εναλλασσόμενη εκπαίδευση, ώστε να ενισχύσω τις δεξιότητές μου στα δίκτυα και τα συστήματα. Επαγγελματικός μου στόχος: να ειδικευτώ στο Linux και να γίνω διαχειριστής συστημάτων Linux. Είμαι άνθρωπος με κίνητρο, ευσυνειδησία, περιέργεια και αποφασιστικότητα για εξέλιξη στον τομέα της ασφάλειας πληροφοριακών συστημάτων.",
            "Информатикой увлекаюсь уже несколько лет. Мой путь: Bac Pro Systèmes Numériques в лицее Marcel Rudloff, затем BTS SIO (направление SISR) в формате дуального обучения в CCI Campus Strasbourg. Опыт: помощь администратору сетей и систем на NLMK, затем работа ИТ-техником в формате дуального обучения в Tessi. Моя цель — поступить на 3-й курс бакалавриата Administrateur d’Infrastructures Sécurisées, также в формате дуального обучения, чтобы укрепить навыки в сетях и системах. Профессиональный план: специализироваться на Linux и стать системным администратором Linux. Мотивация, ответственность, любознательность и стремление развиваться в сфере информационной безопасности — мои главные качества."],
        ["Sept. 2024 – juil. 2025", "Sept. 2024 – July 2025", "Sept. 2024 – Juli 2025", "sept. 2024 – jul. 2025", "set. 2024 – jul. 2025", "Σεπτ. 2024 – Ιούλ. 2025", "сент. 2024 – июль 2025"],
        ["Technicien informatique en alternance", "IT technician (work-study)", "IT-Techniker (dual)", "Técnico informático (formación dual)", "Técnico informático (alternância)", "Τεχνικός πληροφορικής (εναλλασσόμενη εκπαίδευση)", "ИТ-техник (дуальное обучение)"],
        ["NLMK (production d’acier), Strasbourg", "NLMK (steel production), Strasbourg", "NLMK (Stahlproduktion), Straßburg", "NLMK (producción de acero), Estrasburgo", "NLMK (produção de aço), Estrasburgo", "NLMK (παραγωγή χάλυβα), Στρασβούργο", "NLMK (производство стали), Страсбург"],
        ["Bac Pro Systèmes Numériques", "Vocational Baccalaureate in Digital Systems", "Berufsabitur Systèmes Numériques (Bac Pro SN)", "Bachillerato profesional en Sistemas Digitales (Bac Pro SN)", "Bacharelato profissional em Sistemas Digitais (Bac Pro SN)", "Επαγγελματικό απολυτήριο Ψηφιακών Συστημάτων (Bac Pro SN)", "Профессиональный бакалавриат «Цифровые системы» (Bac Pro SN)"],
        ["Lycée Marcel Rudloff, Strasbourg", "Marcel Rudloff High School, Strasbourg", "Lycée Marcel Rudloff, Straßburg", "Liceo Marcel Rudloff, Estrasburgo", "Liceu Marcel Rudloff, Estrasburgo", "Λύκειο Marcel Rudloff, Στρασβούργο", "Лицей Marcel Rudloff, Страсбург"],
        ["BTS SIO option SISR en alternance", "BTS SIO, SISR option (work-study)", "BTS SIO, Fachrichtung SISR (dual)", "BTS SIO, opción SISR (formación dual)", "BTS SIO, opção SISR (alternância)", "BTS SIO, κατεύθυνση SISR (εναλλασσόμενη εκπαίδευση)", "BTS SIO, направление SISR (дуальное обучение)"],
        ["CCI Campus Strasbourg (en cours)", "CCI Campus Strasbourg (in progress)", "CCI Campus Strasbourg (laufend)", "CCI Campus Strasbourg (en curso)", "CCI Campus Strasbourg (em curso)", "CCI Campus Strasbourg (σε εξέλιξη)", "CCI Campus Strasbourg (в процессе)"],
        ["Sept. 2025 – juil. 2027", "Sept. 2025 – July 2027", "Sept. 2025 – Juli 2027", "sept. 2025 – jul. 2027", "set. 2025 – jul. 2027", "Σεπτ. 2025 – Ιούλ. 2027", "сент. 2025 – июль 2027"],
        ["Rentrée visée : 2027", "Target start: 2027", "Angestrebter Beginn: 2027", "Inicio previsto: 2027", "Início previsto: 2027", "Στόχος έναρξης: 2027", "Планируемое начало: 2027"],
        ["Bachelor AIS (3e année)", "AIS Bachelor (3rd year)", "Bachelor AIS (3. Jahr)", "Bachelor AIS (3.º año)", "Bachelor AIS (3.º ano)", "Bachelor AIS (3ο έτος)", "Бакалавриат AIS (3-й курс)"],
        ["Administrateur d’Infrastructures Sécurisées, en alternance", "Secured Infrastructure Administrator, work-study", "Administrator für gesicherte Infrastrukturen, dual", "Administrador de infraestructuras seguras, formación dual", "Administrador de infraestruturas seguras, alternância", "Διαχειριστής ασφαλών υποδομών, εναλλασσόμενη εκπαίδευση", "Администратор защищённых инфраструктур, дуальное обучение"],
        ["Objectif", "Goal", "Ziel", "Objetivo", "Objetivo", "Στόχος", "Цель"],
        ["Intégrer une entreprise en alternance pour ma 3e année de Bachelor AIS afin de développer mes compétences en administration système et réseau.",
            "Join a company as a work-study student for my 3rd year of the AIS Bachelor in order to develop my skills in system and network administration.",
            "Für mein 3. Jahr im Bachelor AIS in einem Unternehmen im dualen System einsteigen, um meine Kenntnisse in System- und Netzwerkadministration auszubauen.",
            "Incorporarme a una empresa en formación dual para mi 3.º año del Bachelor AIS con el fin de desarrollar mis competencias en administración de sistemas y redes.",
            "Integrar uma empresa em alternância no meu 3.º ano do Bachelor AIS, a fim de desenvolver as minhas competências em administração de sistemas e redes.",
            "Να ενταχθώ σε μια επιχείρηση με εναλλασσόμενη εκπαίδευση για το 3ο έτος του Bachelor AIS, ώστε να αναπτύξω τις δεξιότητές μου στη διαχείριση συστημάτων και δικτύων.",
            "Попасть в компанию по программе дуального обучения на 3-м курсе бакалавриата AIS, чтобы развить навыки в системном и сетевом администрировании."],
        ["À terme, je souhaite me spécialiser dans l’environnement Linux et devenir administrateur système Linux.",
            "In the long term, I want to specialise in the Linux environment and become a Linux system administrator.",
            "Langfristig möchte ich mich auf die Linux-Umgebung spezialisieren und Linux-Systemadministrator werden.",
            "A largo plazo, quiero especializarme en el entorno Linux y convertirme en administrador de sistemas Linux.",
            "A longo prazo, quero especializar-me no ambiente Linux e tornar-me administrador de sistemas Linux.",
            "Μακροπρόθεσμα, θέλω να ειδικευτώ στο περιβάλλον Linux και να γίνω διαχειριστής συστημάτων Linux.",
            "В перспективе я хочу специализироваться на Linux и стать системным администратором Linux."],
        ["Qualités", "Qualities", "Eigenschaften", "Cualidades", "Qualidades", "Ιδιότητες", "Качества"],
        ["Rigueur et sens de l’organisation", "Rigour and organisation skills", "Sorgfalt und Organisationsgeschick", "Rigor y sentido de la organización", "Rigor e sentido de organização", "Ακρίβεια και οργανωτικό πνεύμα", "Дисциплинированность и организованность"],
        ["Curiosité et patience", "Curiosity and patience", "Neugier und Geduld", "Curiosidad y paciencia", "Curiosidade e paciência", "Περιέργεια και υπομονή", "Любознательность и терпение"],
        ["Esprit d’équipe", "Team spirit", "Teamgeist", "Espíritu de equipo", "Espírito de equipa", "Ομαδικό πνεύμα", "Командный дух"],

        ["Droits d’administration sur les postes de travail du site (installation de logiciels, mises à jour, dépannage)", "Administrator rights on the site's workstations (software installation, updates, troubleshooting)", "Administratorrechte auf den Arbeitsplätzen des Standorts (Softwareinstallation, Updates, Fehlerbehebung)", "Derechos de administración en los puestos de trabajo del sitio (instalación de software, actualizaciones, resolución de incidencias)", "Direitos de administração nos postos de trabalho do local (instalação de software, atualizações, resolução de problemas)", "Δικαιώματα διαχειριστή στους σταθμούς εργασίας της εγκατάστασης (εγκατάσταση λογισμικού, ενημερώσεις, αντιμετώπιση προβλημάτων)", "Права администратора на рабочих местах площадки (установка ПО, обновления, диагностика и устранение неполадок)"],

        /* ---- Telechargement du CV ---- */
        ["Télécharger mon CV (PDF)", "Download my CV (PDF)", "Meinen Lebenslauf herunterladen (PDF)", "Descargar mi CV (PDF)", "Descarregar o meu CV (PDF)", "Λήψη του βιογραφικού μου (PDF)", "Скачать моё резюме (PDF)"],

        /* ---- Fenetre des competences ---- */
        ["Voir les compétences", "View skills", "Kompetenzen ansehen", "Ver competencias", "Ver competências", "Δείτε τις δεξιότητες", "Показать навыки"],
        ["Fermer", "Close", "Schließen", "Cerrar", "Fechar", "Κλείσιμο", "Закрыть"],

        /* ---- Missions (Tessi, NLMK) ---- */
        ["Assistant technicien informatique en alternance", "Assistant IT technician (work-study)", "Assistent des IT-Technikers (dual)", "Asistente de técnico informático (formación dual)", "Assistente de técnico informático (alternância)", "Βοηθός τεχνικού πληροφορικής (εναλλασσόμενη εκπαίδευση)", "Помощник ИТ-техника (дуальное обучение)"],
        ["Découverte du métier et accompagnement de l’administrateur dans ses tâches", "Discovering the profession and assisting the administrator with their tasks", "Einblick in den Beruf und Begleitung bei den täglichen Aufgaben des Administrators", "Descubrimiento del oficio y acompañamiento del administrador en sus tareas", "Descoberta da profissão e acompanhamento do administrador nas suas tarefas", "Γνωριμία με το επάγγελμα και συνοδεία του διαχειριστή στις καθημερινές εργασίες", "Знакомство с профессией и помощь администратору в рабочих задачах"],
        ["Gestion et mises à jour des PC du site", "Managing and updating the site's PCs", "Verwaltung und Aktualisierung der PCs des Standorts", "Gestión y actualización de los PC del sitio", "Gestão e atualização dos PC do local", "Διαχείριση και ενημέρωση των υπολογιστών της εγκατάστασης", "Управление и обновление ПК на площадке"],
        ["Installation et paramétrage de logiciels sur les postes", "Installing and configuring software on workstations", "Installation und Konfiguration von Software auf den Arbeitsplätzen", "Instalación y configuración de software en los puestos de trabajo", "Instalação e configuração de software nos postos de trabalho", "Εγκατάσταση και ρύθμιση λογισμικού στους σταθμούς εργασίας", "Установка и настройка программ на рабочих местах"],
        ["Préparation de nouveaux postes depuis un serveur de déploiement du réseau du site, et suivi de sa disponibilité", "Preparing new workstations from a deployment server on the site's network, and monitoring its availability", "Vorbereitung neuer Arbeitsplätze über einen Deployment-Server im Netzwerk des Standorts und Überwachung seiner Verfügbarkeit", "Preparación de nuevos puestos desde un servidor de despliegue de la red del sitio y seguimiento de su disponibilidad", "Preparação de novos postos a partir de um servidor de implementação da rede do local e acompanhamento da sua disponibilidade", "Προετοιμασία νέων σταθμών εργασίας από διακομιστή εγκατάστασης του δικτύου της εγκατάστασης και παρακολούθηση της διαθεσιμότητάς του", "Подготовка новых рабочих мест с сервера развёртывания в сети площадки и контроль его доступности"],
        ["Dépannage réseau et matériel pour les collaborateurs", "Network and hardware troubleshooting for employees", "Netzwerk- und Hardware-Fehlerbehebung für die Mitarbeitenden", "Resolución de incidencias de red y hardware para los empleados", "Resolução de problemas de rede e de hardware para os colaboradores", "Αντιμετώπιση προβλημάτων δικτύου και υλικού για τους εργαζομένους", "Устранение сетевых и аппаратных неполадок для сотрудников"],
        ["Création et suppression de comptes utilisateurs avec Atrium", "Creating and deleting user accounts with Atrium", "Anlegen und Löschen von Benutzerkonten mit Atrium", "Creación y eliminación de cuentas de usuario con Atrium", "Criação e eliminação de contas de utilizador com o Atrium", "Δημιουργία και διαγραφή λογαριασμών χρηστών με το Atrium", "Создание и удаление учётных записей пользователей в Atrium"],
        ["Traitement des tickets des collaborateurs avec Sussi", "Handling employees' tickets with Sussi", "Bearbeitung der Tickets der Mitarbeitenden mit Sussi", "Gestión de los tickets de los empleados con Sussi", "Tratamento dos tickets dos colaboradores com o Sussi", "Διαχείριση των tickets των εργαζομένων με το Sussi", "Обработка заявок сотрудников в Sussi"],
        ["Technicien informatique en alternance (Tessi)", "IT technician, work-study (Tessi)", "IT-Techniker im dualen System (Tessi)", "Técnico informático en formación dual (Tessi)", "Técnico informático em alternância (Tessi)", "Τεχνικός πληροφορικής με εναλλασσόμενη εκπαίδευση (Tessi)", "ИТ-техник в формате дуального обучения (Tessi)"],
        ["Mises à jour et paramétrage des postes de travail", "Workstation updates and configuration", "Aktualisierung und Konfiguration der Arbeitsplätze", "Actualización y configuración de los puestos de trabajo", "Atualização e configuração dos postos de trabalho", "Ενημέρωση και ρύθμιση των σταθμών εργασίας", "Обновление и настройка рабочих мест"],
        ["Dépannage réseau et matériel", "Network and hardware troubleshooting", "Netzwerk- und Hardware-Fehlerbehebung", "Resolución de incidencias de red y hardware", "Resolução de problemas de rede e de hardware", "Αντιμετώπιση προβλημάτων δικτύου και υλικού", "Устранение сетевых и аппаратных неполадок"],
        ["Gestion des comptes utilisateurs et des tickets (Atrium, Sussi)", "User account and ticket management (Atrium, Sussi)", "Verwaltung von Benutzerkonten und Tickets (Atrium, Sussi)", "Gestión de cuentas de usuario y tickets (Atrium, Sussi)", "Gestão de contas de utilizador e tickets (Atrium, Sussi)", "Διαχείριση λογαριασμών χρηστών και tickets (Atrium, Sussi)", "Управление учётными записями и заявками (Atrium, Sussi)"],

        /* ---- Competences ---- */
        ["Systèmes", "Systems", "Systeme", "Sistemas", "Sistemas", "Συστήματα", "Системы"],
        ["Linux Debian : ligne de commande et interface graphique", "Linux Debian: command line and graphical interface", "Linux Debian: Kommandozeile und grafische Oberfläche", "Linux Debian: línea de comandos e interfaz gráfica", "Linux Debian: linha de comandos e interface gráfica", "Linux Debian: γραμμή εντολών και γραφικό περιβάλλον", "Linux Debian: командная строка и графический интерфейс"],
        ["Windows Server 2022/2025 (GUI et Core)", "Windows Server 2022/2025 (GUI and Core)", "Windows Server 2022/2025 (GUI und Core)", "Windows Server 2022/2025 (GUI y Core)", "Windows Server 2022/2025 (GUI e Core)", "Windows Server 2022/2025 (GUI και Core)", "Windows Server 2022/2025 (GUI и Core)"],
        ["SSH, utilisateurs et permissions, paquets (apt)", "SSH, users and permissions, packages (apt)", "SSH, Benutzer und Berechtigungen, Pakete (apt)", "SSH, usuarios y permisos, paquetes (apt)", "SSH, utilizadores e permissões, pacotes (apt)", "SSH, χρήστες και δικαιώματα, πακέτα (apt)", "SSH, пользователи и права, пакеты (apt)"],
        ["Services Windows", "Windows services", "Windows-Dienste", "Servicios Windows", "Serviços Windows", "Υπηρεσίες Windows", "Службы Windows"],
        ["Active Directory et GPO", "Active Directory and GPO", "Active Directory und GPO", "Active Directory y GPO", "Active Directory e GPO", "Active Directory και GPO", "Active Directory и GPO"],
        ["Gestion des droits et partages réseau", "Rights management and network shares", "Rechteverwaltung und Netzwerkfreigaben", "Gestión de permisos y recursos compartidos de red", "Gestão de permissões e partilhas de rede", "Διαχείριση δικαιωμάτων και κοινόχρηστων φακέλων δικτύου", "Управление правами и сетевыми ресурсами"],
        ["Configuration réseau Linux et Windows", "Linux and Windows network configuration", "Netzwerkkonfiguration unter Linux und Windows", "Configuración de red en Linux y Windows", "Configuração de rede em Linux e Windows", "Ρύθμιση δικτύου σε Linux και Windows", "Настройка сети в Linux и Windows"],
        ["VPN IPsec inter-sites", "Site-to-site IPsec VPN", "IPsec-VPN zwischen Standorten", "VPN IPsec entre sedes", "VPN IPsec entre sites", "VPN IPsec μεταξύ τοποθεσιών", "VPN IPsec между площадками"],
        ["Adressage IP, VLAN", "IP addressing, VLAN", "IP-Adressierung, VLAN", "Direccionamiento IP, VLAN", "Endereçamento IP, VLAN", "Διευθυνσιοδότηση IP, VLAN", "IP-адресация, VLAN"],
        ["Réseaux virtuels : NAT, Bridge, Host-only, VMnet", "Virtual networks: NAT, Bridge, Host-only, VMnet", "Virtuelle Netzwerke: NAT, Bridge, Host-only, VMnet", "Redes virtuales: NAT, Bridge, Host-only, VMnet", "Redes virtuais: NAT, Bridge, Host-only, VMnet", "Εικονικά δίκτυα: NAT, Bridge, Host-only, VMnet", "Виртуальные сети: NAT, Bridge, Host-only, VMnet"],
        ["Support & exploitation", "Support & operations", "Support & Betrieb", "Soporte y operaciones", "Suporte e operações", "Υποστήριξη & λειτουργία", "Поддержка и эксплуатация"],
        ["Technicien informatique en alternance (Tessi, NLMK)", "IT technician, work-study (Tessi, NLMK)", "IT-Techniker im dualen System (Tessi, NLMK)", "Técnico informático en formación dual (Tessi, NLMK)", "Técnico informático em alternância (Tessi, NLMK)", "Τεχνικός πληροφορικής με εναλλασσόμενη εκπαίδευση (Tessi, NLMK)", "ИТ-техник в формате дуального обучения (Tessi, NLMK)"],
        ["Gestion de parc et tickets avec GLPI", "Asset management and ticketing with GLPI", "Geräteverwaltung und Ticketing mit GLPI", "Gestión de parque y tickets con GLPI", "Gestão de parque informático e tickets com GLPI", "Διαχείριση εξοπλισμού και tickets με GLPI", "Управление парком и заявками в GLPI"],
        ["Déploiement de logiciels et d’images système", "Software and system image deployment", "Verteilung von Software und Systemabbildern", "Despliegue de software e imágenes de sistema", "Implementação de software e imagens de sistema", "Εγκατάσταση λογισμικού και εικόνων συστήματος", "Развёртывание ПО и образов систем"],
        ["Langues", "Languages", "Sprachen", "Idiomas", "Línguas", "Γλώσσες", "Языки"],
        ["Français : langue maternelle", "French: native language", "Französisch: Muttersprache", "Francés: lengua materna", "Francês: língua materna", "Γαλλικά: μητρική γλώσσα", "Французский: родной язык"],
        ["Anglais : A2 – B1 (niveau scolaire)", "English: A2 – B1 (school level)", "Englisch: A2 – B1 (Schulniveau)", "Inglés: A2 – B1 (nivel escolar)", "Inglês: A2 – B1 (nível escolar)", "Αγγλικά: A2 – B1 (σχολικό επίπεδο)", "Английский: A2 – B1 (школьный уровень)"],

        /* ---- Projets ---- */
        ["Projets BTS SIO – option SISR", "BTS SIO projects – SISR option", "BTS-SIO-Projekte – Fachrichtung SISR", "Proyectos BTS SIO – opción SISR", "Projetos BTS SIO – opção SISR", "Έργα BTS SIO – κατεύθυνση SISR", "Проекты BTS SIO – направление SISR"],
        ["Deux situations professionnelles réalisées en maquette (VMware) à la CCI Campus Strasbourg, en groupe, avec étude du cahier des charges, budget, planning, schéma réseau, démonstration technique et documentation complète.",
            "Two professional scenarios carried out as lab environments (VMware) at CCI Campus Strasbourg, in a group, including analysis of the specifications, budget, schedule, network diagram, technical demonstration and full documentation.",
            "Zwei berufliche Praxisszenarien, als Testumgebung (VMware) am CCI Campus Strasbourg in der Gruppe umgesetzt, mit Analyse des Lastenhefts, Budget, Zeitplan, Netzwerkplan, technischer Vorführung und vollständiger Dokumentation.",
            "Dos situaciones profesionales realizadas en maqueta (VMware) en el CCI Campus Strasbourg, en grupo, con estudio del pliego de condiciones, presupuesto, planificación, esquema de red, demostración técnica y documentación completa.",
            "Duas situações profissionais realizadas em maqueta (VMware) no CCI Campus Strasbourg, em grupo, com estudo do caderno de encargos, orçamento, planeamento, esquema de rede, demonstração técnica e documentação completa.",
            "Δύο επαγγελματικά σενάρια που υλοποιήθηκαν σε εικονικό εργαστήριο (VMware) στο CCI Campus Strasbourg, σε ομάδα, με μελέτη των προδιαγραφών, προϋπολογισμό, χρονοπρογραμματισμό, διάγραμμα δικτύου, τεχνική επίδειξη και πλήρη τεκμηρίωση.",
            "Две профессиональные ситуации, реализованные на тестовом стенде (VMware) в CCI Campus Strasbourg, в группе: анализ технического задания, бюджет, планирование, сетевая схема, техническая демонстрация и полная документация."],
        ["AP3 · Projet M2i · 2026 (en cours)", "AP3 · M2i project · 2026 (in progress)", "AP3 · M2i-Projekt · 2026 (laufend)", "AP3 · Proyecto M2i · 2026 (en curso)", "AP3 · Projeto M2i · 2026 (em curso)", "AP3 · Έργο M2i · 2026 (σε εξέλιξη)", "AP3 · Проект M2i · 2026 (в процессе)"],
        ["Infrastructure haute disponibilité multi-sites", "Multi-site high-availability infrastructure", "Hochverfügbare Multi-Standort-Infrastruktur", "Infraestructura de alta disponibilidad multisede", "Infraestrutura de alta disponibilidade multissite", "Υποδομή υψηλής διαθεσιμότητας πολλών τοποθεσιών", "Отказоустойчивая инфраструктура для нескольких площадок"],
        ["Fournir à un centre de formation un système d’information redondé et sécurisé, avec une liaison chiffrée entre deux sites (Strasbourg et Mulhouse).",
            "Provide a training centre with a redundant, secure information system and an encrypted link between two sites (Strasbourg and Mulhouse).",
            "Ein Ausbildungszentrum erhält ein redundantes, gesichertes Informationssystem mit verschlüsselter Verbindung zwischen zwei Standorten (Straßburg und Mülhausen).",
            "Proporcionar a un centro de formación un sistema de información redundante y seguro, con un enlace cifrado entre dos sedes (Estrasburgo y Mulhouse).",
            "Fornecer a um centro de formação um sistema de informação redundante e seguro, com uma ligação cifrada entre dois sites (Estrasburgo e Mulhouse).",
            "Παροχή σε ένα κέντρο εκπαίδευσης ενός πλεονάζοντος και ασφαλούς πληροφοριακού συστήματος, με κρυπτογραφημένη σύνδεση μεταξύ δύο τοποθεσιών (Στρασβούργο και Μυλούζ).",
            "Создание для учебного центра отказоустойчивой и защищённой информационной системы с шифрованным каналом между двумя площадками (Страсбург и Мюлуз)."],
        ["VPN IPsec site à site entre deux routeurs/pare-feu pfSense", "Site-to-site IPsec VPN between two pfSense routers/firewalls", "Site-to-Site-IPsec-VPN zwischen zwei pfSense-Routern/Firewalls", "VPN IPsec sitio a sitio entre dos routers/cortafuegos pfSense", "VPN IPsec site a site entre dois routers/firewalls pfSense", "VPN IPsec site-to-site μεταξύ δύο δρομολογητών/τειχών προστασίας pfSense", "VPN IPsec «сайт–сайт» между двумя маршрутизаторами/межсетевыми экранами pfSense"],
        ["Active Directory : 4 contrôleurs de domaine Windows Server (GUI et Core), DNS, DHCP avec basculement", "Active Directory: 4 Windows Server domain controllers (GUI and Core), DNS, DHCP with failover", "Active Directory: 4 Windows-Server-Domänencontroller (GUI und Core), DNS, DHCP mit Failover", "Active Directory: 4 controladores de dominio Windows Server (GUI y Core), DNS, DHCP con conmutación por error", "Active Directory: 4 controladores de domínio Windows Server (GUI e Core), DNS, DHCP com comutação por falha", "Active Directory: 4 ελεγκτές τομέα Windows Server (GUI και Core), DNS, DHCP με failover", "Active Directory: 4 контроллера домена Windows Server (GUI и Core), DNS, DHCP с отказоустойчивостью"],
        ["DFS / DFSR : espace de noms commun et réplication des données entre les 4 serveurs", "DFS / DFSR: shared namespace and data replication across the 4 servers", "DFS / DFSR: gemeinsamer Namespace und Datenreplikation zwischen den 4 Servern", "DFS / DFSR: espacio de nombres común y replicación de datos entre los 4 servidores", "DFS / DFSR: espaço de nomes comum e replicação de dados entre os 4 servidores", "DFS / DFSR: κοινός χώρος ονομάτων και αναπαραγωγή δεδομένων μεταξύ των 4 διακομιστών", "DFS / DFSR: общее пространство имён и репликация данных между 4 серверами"],
        ["Sauvegarde complète et clichés instantanés sur SAN via iSCSI", "Full backup and shadow copies on a SAN via iSCSI", "Vollständige Sicherung und Schattenkopien auf einem SAN über iSCSI", "Copia de seguridad completa e instantáneas en una SAN mediante iSCSI", "Cópia de segurança completa e cópias de sombra num SAN via iSCSI", "Πλήρες αντίγραφο ασφαλείας και στιγμιότυπα σε SAN μέσω iSCSI", "Полное резервное копирование и теневые копии на SAN по iSCSI"],
        ["GPO et règles de pare-feu selon les recommandations de l’ANSSI", "GPOs and firewall rules following ANSSI recommendations", "GPOs und Firewall-Regeln nach den Empfehlungen der ANSSI", "GPO y reglas de cortafuegos según las recomendaciones de la ANSSI", "GPO e regras de firewall segundo as recomendações da ANSSI", "GPO και κανόνες τείχους προστασίας σύμφωνα με τις συστάσεις της ANSSI", "GPO и правила межсетевого экрана по рекомендациям ANSSI"],
        ["Gestion de parc et support utilisateurs", "Asset management and user support", "Geräteverwaltung und Benutzersupport", "Gestión de parque y soporte a usuarios", "Gestão de parque informático e suporte a utilizadores", "Διαχείριση εξοπλισμού και υποστήριξη χρηστών", "Управление парком и поддержка пользователей"],
        ["Création d’une direction des systèmes d’information pour une société de gestion de parkings (83 salariés) : inventorier le parc, outiller le support et améliorer la qualité de service, dans une démarche inspirée d’ITIL.",
            "Creation of an information systems department for a car park management company (83 employees): inventory the equipment, equip the support team and improve service quality, following an ITIL-inspired approach.",
            "Aufbau einer IT-Abteilung für eine Parkhausgesellschaft (83 Beschäftigte): Bestand erfassen, den Support ausstatten und die Servicequalität verbessern, nach einem an ITIL angelehnten Ansatz.",
            "Creación de una dirección de sistemas de información para una empresa de gestión de aparcamientos (83 empleados): inventariar el parque, dotar al soporte de herramientas y mejorar la calidad del servicio, con un enfoque inspirado en ITIL.",
            "Criação de uma direção de sistemas de informação para uma empresa de gestão de parques de estacionamento (83 colaboradores): inventariar o parque, dotar o suporte de ferramentas e melhorar a qualidade do serviço, numa abordagem inspirada no ITIL.",
            "Δημιουργία διεύθυνσης πληροφοριακών συστημάτων για εταιρεία διαχείρισης χώρων στάθμευσης (83 εργαζόμενοι): καταγραφή του εξοπλισμού, εξοπλισμός της υποστήριξης και βελτίωση της ποιότητας υπηρεσιών, με προσέγγιση εμπνευσμένη από το ITIL.",
            "Создание ИТ-департамента для компании, управляющей парковками (83 сотрудника): инвентаризация парка, оснащение службы поддержки и повышение качества обслуживания в духе ITIL."],
        ["Serveurs Linux Debian/Ubuntu", "Linux Debian/Ubuntu servers", "Linux-Server Debian/Ubuntu", "Servidores Linux Debian/Ubuntu", "Servidores Linux Debian/Ubuntu", "Διακομιστές Linux Debian/Ubuntu", "Серверы Linux Debian/Ubuntu"],
        ["GLPI : inventaire automatisé, gestion de parc et tickets, connecté à l’Active Directory", "GLPI: automated inventory, asset management and ticketing, connected to Active Directory", "GLPI: automatisierte Inventarisierung, Geräteverwaltung und Ticketing, mit Active Directory verbunden", "GLPI: inventario automatizado, gestión de parque y tickets, conectado a Active Directory", "GLPI: inventário automatizado, gestão de parque e tickets, ligado ao Active Directory", "GLPI: αυτοματοποιημένη καταγραφή, διαχείριση εξοπλισμού και tickets, συνδεδεμένο με το Active Directory", "GLPI: автоматизированная инвентаризация, управление парком и заявками, интеграция с Active Directory"],
        ["Assistance à distance hébergée en interne, conforme au RGPD", "Remote assistance hosted in-house, GDPR compliant", "Intern gehostete Fernwartung, DSGVO-konform", "Asistencia remota alojada internamente, conforme con el RGPD", "Assistência remota alojada internamente, em conformidade com o RGPD", "Απομακρυσμένη υποστήριξη που φιλοξενείται εσωτερικά, σύμφωνη με τον GDPR", "Удалённая поддержка на собственном сервере, соответствующая GDPR"],
        ["Déploiement de logiciels et d’images système sur Windows 11 Pro", "Software and system image deployment on Windows 11 Pro", "Verteilung von Software und Systemabbildern unter Windows 11 Pro", "Despliegue de software e imágenes de sistema en Windows 11 Pro", "Implementação de software e imagens de sistema em Windows 11 Pro", "Εγκατάσταση λογισμικού και εικόνων συστήματος σε Windows 11 Pro", "Развёртывание ПО и образов системы на Windows 11 Pro"],
        ["Chiffrement des disques avec sauvegarde de la clé de récupération", "Disk encryption with recovery key backup", "Festplattenverschlüsselung mit Sicherung des Wiederherstellungsschlüssels", "Cifrado de discos con copia de seguridad de la clave de recuperación", "Cifragem de discos com cópia de segurança da chave de recuperação", "Κρυπτογράφηση δίσκων με αντίγραφο ασφαλείας του κλειδιού ανάκτησης", "Шифрование дисков с резервным хранением ключа восстановления"],
        ["RGPD", "GDPR", "DSGVO", "", "", "GDPR", "GDPR", ""],
        ["Déploiement d’images", "Image deployment", "Image-Verteilung", "Despliegue de imágenes", "Implementação de imagens", "Εγκατάσταση εικόνων", "Развёртывание образов"],
        ["Projet personnel · en cours", "Personal project · in progress", "Persönliches Projekt · laufend", "Proyecto personal · en curso", "Projeto pessoal · em curso", "Προσωπικό έργο · σε εξέλιξη", "Личный проект · в процессе"],
        ["Serveur Linux Debian sécurisé", "Secure Debian Linux server", "Gesicherter Debian-Linux-Server", "Servidor Linux Debian seguro", "Servidor Linux Debian seguro", "Ασφαλής διακομιστής Linux Debian", "Защищённый сервер Linux Debian"],
        ["Montage d’un serveur Debian sans interface graphique, comme en entreprise, dans une machine virtuelle VMware, pour me former à l’administration Linux.",
            "Setting up a Debian server with no graphical interface, as in a company, in a VMware virtual machine, to train myself in Linux administration.",
            "Aufbau eines Debian-Servers ohne grafische Oberfläche, wie im Unternehmen, in einer VMware-Virtual-Machine, um mich in der Linux-Administration weiterzubilden.",
            "Montaje de un servidor Debian sin interfaz gráfica, como en una empresa, en una máquina virtual VMware, para formarme en administración Linux.",
            "Montagem de um servidor Debian sem interface gráfica, como numa empresa, numa máquina virtual VMware, para me formar em administração Linux.",
            "Στήσιμο διακομιστή Debian χωρίς γραφικό περιβάλλον, όπως σε μια εταιρεία, σε εικονική μηχανή VMware, για να εκπαιδευτώ στη διαχείριση Linux.",
            "Развёртывание сервера Debian без графического интерфейса, как в компании, в виртуальной машине VMware для обучения администрированию Linux."],
        ["Connexion SSH par clés, sans mot de passe ni accès root", "SSH key-based login, with no password and no root access", "SSH-Anmeldung per Schlüssel, ohne Passwort und ohne Root-Zugang", "Acceso SSH mediante claves, sin contraseña ni acceso root", "Ligação SSH por chaves, sem palavra-passe nem acesso root", "Σύνδεση SSH με κλειδιά, χωρίς κωδικό πρόσβασης και χωρίς πρόσβαση root", "Вход по SSH-ключам, без пароля и без доступа root"],
        ["Pare-feu ufw et protection fail2ban", "ufw firewall and fail2ban protection", "ufw-Firewall und fail2ban-Schutz", "Cortafuegos ufw y protección fail2ban", "Firewall ufw e proteção fail2ban", "Τείχος προστασίας ufw και προστασία fail2ban", "Межсетевой экран ufw и защита fail2ban"],
        ["Site web Apache en HTTPS", "Apache website over HTTPS", "Apache-Website über HTTPS", "Sitio web Apache con HTTPS", "Site Apache com HTTPS", "Ιστότοπος Apache με HTTPS", "Веб-сайт Apache по HTTPS"],
        ["Sauvegarde automatique avec rsync et cron, avec test de restauration", "Automatic backup with rsync and cron, with a restore test", "Automatische Sicherung mit rsync und cron, inklusive Wiederherstellungstest", "Copia de seguridad automática con rsync y cron, con prueba de restauración", "Cópia de segurança automática com rsync e cron, com teste de restauro", "Αυτόματο αντίγραφο ασφαλείας με rsync και cron, με δοκιμή επαναφοράς", "Автоматическое резервное копирование с rsync и cron и проверка восстановления"],
        ["Supervision du serveur et script Bash de rapport quotidien", "Server monitoring and a daily Bash report script", "Servermonitoring und Bash-Skript für einen täglichen Bericht", "Supervisión del servidor y script Bash de informe diario", "Monitorização do servidor e script Bash de relatório diário", "Παρακολούθηση του διακομιστή και script Bash για ημερήσια αναφορά", "Мониторинг сервера и Bash-скрипт ежедневного отчёта"],

        /* ---- Contact ---- */
        ["Disponible pour une alternance en 3e année de Bachelor AIS à la CCI Campus Strasbourg. N’hésitez pas à me contacter pour échanger sur mon profil.",
            "Available for a work-study placement in the 3rd year of the AIS Bachelor at CCI Campus Strasbourg. Feel free to contact me to discuss my profile.",
            "Verfügbar für eine Alternance-Stelle im 3. Jahr des Bachelors AIS am CCI Campus Strasbourg. Nehmen Sie gern Kontakt mit mir auf, um über mein Profil zu sprechen.",
            "Disponible para una plaza en formación dual en el 3.º año del Bachelor AIS en el CCI Campus Strasbourg. No dude en contactarme para hablar de mi perfil.",
            "Disponível para um contrato de alternância no 3.º ano do Bachelor AIS no CCI Campus Strasbourg. Não hesite em contactar-me para falarmos do meu perfil.",
            "Διαθέσιμος για θέση εναλλασσόμενης εκπαίδευσης στο 3ο έτος του Bachelor AIS στο CCI Campus Strasbourg. Μη διστάσετε να επικοινωνήσετε μαζί μου για να συζητήσουμε το προφίλ μου.",
            "Ищу место дуального обучения на 3-м курсе бакалавриата AIS в CCI Campus Strasbourg. Свяжитесь со мной, чтобы обсудить мой профиль."],
        ["Envoyer un email", "Send an email", "E-Mail senden", "Enviar un correo", "Enviar um email", "Αποστολή email", "Написать на email"],
        ["Appeler", "Call", "Anrufen", "Llamar", "Ligar", "Κλήση", "Позвонить"],
        ["Email :", "Email:", "E-Mail:", "Correo:", "Email:", "Email:", "Email:"],
        ["Tél :", "Phone:", "Tel.:", "Tel.:", "Tel.:", "Τηλ.:", "Тел.:"],
        ["GitHub :", "GitHub:", "GitHub:", "GitHub:", "GitHub:", "GitHub:", "GitHub:", "GitHub:"],
        ["Ville :", "City:", "Stadt:", "Ciudad:", "Cidade:", "Πόλη:", "Город:"],
        ["Strasbourg (67)", "", "Straßburg (67)", "Estrasburgo (67)", "Estrasburgo (67)", "Στρασβούργο (67)", "Страсбург (67)"],
        ["Mobilité :", "Mobility:", "Mobilität:", "Movilidad:", "Mobilidade:", "Μετακίνηση:", "Мобильность:"],
        ["Permis B", "Driving licence (category B)", "Führerschein Klasse B", "Permiso de conducir B", "Carta de condução categoria B", "Δίπλωμα οδήγησης κατηγορίας Β", "Водительские права категории B"]
    ];

    /* Construction des dictionnaires : DICT[langue][texte francais] = traduction */
    function norm(s) { return s.replace(/\s+/g, " ").trim(); }

    var DICT = {};
    var KNOWN = {};
    LANGS.forEach(function (l) { DICT[l] = {}; });
    ROWS.forEach(function (row) {
        var fr = norm(row[0]);
        KNOWN[fr] = true;
        for (var i = 0; i < LANGS.length; i++) {
            if (row[i + 1]) { DICT[LANGS[i]][fr] = row[i + 1]; }
        }
    });

    var originals = new WeakMap();
    var lang = "fr";

    function lookup(k) {
        return (lang !== "fr" && DICT[lang] && DICT[lang][k]) ? DICT[lang][k] : null;
    }

    function t(fr) {
        var tr = lookup(norm(fr));
        return tr ? tr : fr;
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
            var tr = lookup(norm(orig));
            n.nodeValue = tr ? tr : orig;
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
                var tr = lookup(norm(orig));
                el.setAttribute(a, tr ? tr : orig);
            });
        });
    }

    var originalTitle = null;
    function translateTitle() {
        if (originalTitle === null) { originalTitle = document.title; }
        var tr = lookup(norm(originalTitle));
        document.title = tr ? tr : originalTitle;
    }

    function apply(newLang) {
        lang = SUPPORTED.indexOf(newLang) >= 0 ? newLang : "fr";
        root.setAttribute("lang", lang);
        translateTextNodes();
        translateAttributes();
        translateTitle();
        var sel = document.getElementById("lang-select");
        if (sel) {
            sel.value = lang;
            sel.setAttribute("aria-label", t("Langue"));
        }
        document.dispatchEvent(new Event("langchange"));
    }

    /* Outil de controle : textes francais de la page qui n'ont aucune ligne de traduction */
    function missing() {
        var out = [];
        var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
        var n;
        while ((n = walker.nextNode())) {
            var p = n.parentNode && n.parentNode.nodeName;
            if (p === "SCRIPT" || p === "STYLE" || p === "OPTION") { continue; }
            var orig = originals.has(n) ? originals.get(n) : n.nodeValue;
            var k = norm(orig);
            if (k && !KNOWN[k]) { out.push(k); }
        }
        return out;
    }

    window.i18n = {
        t: t,
        apply: apply,
        missing: missing,
        langs: SUPPORTED,
        get lang() { return lang; }
    };

    document.addEventListener("DOMContentLoaded", function () {
        var saved = null;
        try { saved = localStorage.getItem(KEY); } catch (e) {}
        var initial = "fr";
        if (saved && SUPPORTED.indexOf(saved) >= 0) {
            initial = saved;
        } else {
            var nav = ((navigator.language || "fr") + "").toLowerCase().slice(0, 2);
            if (SUPPORTED.indexOf(nav) >= 0) { initial = nav; }
        }

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
