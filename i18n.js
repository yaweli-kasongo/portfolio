/* Traductions du portfolio.
   Le francais est lu directement dans les pages ; chaque ligne ci-dessous donne
   le texte francais exact puis ses traductions, dans l'ordre de LANGS.
   Une chaine vide = on garde le texte francais tel quel (nom propre, etc.). */
(function () {
    var KEY = "lang";
    var root = document.documentElement;

    var LANGS = ["en", "de", "es", "pt", "el", "ru", "ar"];
    var SUPPORTED = ["fr"].concat(LANGS);
    var RTL = { ar: true };

    var ROWS = [
        /* ---- Navigation et interface ---- */
        ["Accueil", "Home", "Startseite", "Inicio", "Início", "Αρχική", "Главная", "الرئيسية"],
        ["À propos", "About", "Über mich", "Sobre mí", "Sobre mim", "Σχετικά", "Обо мне", "نبذة عني"],
        ["Compétences", "Skills", "Kompetenzen", "Competencias", "Competências", "Δεξιότητες", "Навыки", "المهارات"],
        ["Projets", "Projects", "Projekte", "Proyectos", "Projetos", "Έργα", "Проекты", "المشاريع"],
        ["Contact", "", "Kontakt", "Contacto", "Contacto", "Επικοινωνία", "Контакты", "اتصال"],
        ["Aller au contenu", "Skip to content", "Zum Inhalt springen", "Saltar al contenido", "Ir para o conteúdo", "Μετάβαση στο περιεχόμενο", "Перейти к содержимому", "انتقل إلى المحتوى"],
        ["Navigation principale", "Main navigation", "Hauptnavigation", "Navegación principal", "Navegação principal", "Κύρια πλοήγηση", "Основная навигация", "التنقل الرئيسي"],
        ["Ouvrir le menu", "Open the menu", "Menü öffnen", "Abrir el menú", "Abrir o menu", "Άνοιγμα μενού", "Открыть меню", "فتح القائمة"],
        ["Changer de thème", "Toggle theme", "Design wechseln", "Cambiar de tema", "Alternar tema", "Αλλαγή θέματος", "Сменить тему", "تبديل المظهر"],
        ["Passer au thème clair", "Switch to light theme", "Zum hellen Design wechseln", "Cambiar al tema claro", "Mudar para o tema claro", "Εναλλαγή σε φωτεινό θέμα", "Включить светлую тему", "التبديل إلى المظهر الفاتح"],
        ["Passer au thème sombre", "Switch to dark theme", "Zum dunklen Design wechseln", "Cambiar al tema oscuro", "Mudar para o tema escuro", "Εναλλαγή σε σκούρο θέμα", "Включить тёмную тему", "التبديل إلى المظهر الداكن"],
        ["Langue", "Language", "Sprache", "Idioma", "Idioma", "Γλώσσα", "Язык", "اللغة"],
        ["Parcours", "Career path", "Werdegang", "Trayectoria", "Percurso", "Πορεία", "Путь", "المسار"],
        ["Photo de Jeremy Yaweli-Kasongo", "Photo of Jeremy Yaweli-Kasongo", "Foto von Jeremy Yaweli-Kasongo", "Foto de Jeremy Yaweli-Kasongo", "Foto de Jeremy Yaweli-Kasongo", "Φωτογραφία του Jeremy Yaweli-Kasongo", "Фото Jeremy Yaweli-Kasongo", "صورة Jeremy Yaweli-Kasongo"],

        /* ---- Titres d'onglet ---- */
        ["Accueil - Portfolio Jeremy Yaweli-Kasongo", "Home - Jeremy Yaweli-Kasongo's Portfolio", "Startseite - Portfolio von Jeremy Yaweli-Kasongo", "Inicio - Portafolio de Jeremy Yaweli-Kasongo", "Início - Portefólio de Jeremy Yaweli-Kasongo", "Αρχική - Portfolio του Jeremy Yaweli-Kasongo", "Главная - Портфолио Jeremy Yaweli-Kasongo", "الرئيسية - ملف أعمال Jeremy Yaweli-Kasongo"],
        ["À propos - Portfolio Jeremy Yaweli-Kasongo", "About - Jeremy Yaweli-Kasongo's Portfolio", "Über mich - Portfolio von Jeremy Yaweli-Kasongo", "Sobre mí - Portafolio de Jeremy Yaweli-Kasongo", "Sobre mim - Portefólio de Jeremy Yaweli-Kasongo", "Σχετικά - Portfolio του Jeremy Yaweli-Kasongo", "Обо мне - Портфолио Jeremy Yaweli-Kasongo", "نبذة عني - ملف أعمال Jeremy Yaweli-Kasongo"],
        ["Compétences - Portfolio Jeremy Yaweli-Kasongo", "Skills - Jeremy Yaweli-Kasongo's Portfolio", "Kompetenzen - Portfolio von Jeremy Yaweli-Kasongo", "Competencias - Portafolio de Jeremy Yaweli-Kasongo", "Competências - Portefólio de Jeremy Yaweli-Kasongo", "Δεξιότητες - Portfolio του Jeremy Yaweli-Kasongo", "Навыки - Портфолио Jeremy Yaweli-Kasongo", "المهارات - ملف أعمال Jeremy Yaweli-Kasongo"],
        ["Projets - Portfolio Jeremy Yaweli-Kasongo", "Projects - Jeremy Yaweli-Kasongo's Portfolio", "Projekte - Portfolio von Jeremy Yaweli-Kasongo", "Proyectos - Portafolio de Jeremy Yaweli-Kasongo", "Projetos - Portefólio de Jeremy Yaweli-Kasongo", "Έργα - Portfolio του Jeremy Yaweli-Kasongo", "Проекты - Портфолио Jeremy Yaweli-Kasongo", "المشاريع - ملف أعمال Jeremy Yaweli-Kasongo"],
        ["Contact - Portfolio Jeremy Yaweli-Kasongo", "Contact - Jeremy Yaweli-Kasongo's Portfolio", "Kontakt - Portfolio von Jeremy Yaweli-Kasongo", "Contacto - Portafolio de Jeremy Yaweli-Kasongo", "Contacto - Portefólio de Jeremy Yaweli-Kasongo", "Επικοινωνία - Portfolio του Jeremy Yaweli-Kasongo", "Контакты - Портфолио Jeremy Yaweli-Kasongo", "اتصال - ملف أعمال Jeremy Yaweli-Kasongo"],

        /* ---- Accueil ---- */
        ["Bonjour, je suis", "Hello, I'm", "Hallo, ich bin", "Hola, soy", "Olá, eu sou", "Γεια σας, είμαι", "Здравствуйте, я", "مرحباً، أنا"],
        ["Strasbourg • France", "", "Straßburg • Frankreich", "Estrasburgo • Francia", "Estrasburgo • França", "Στρασβούργο • Γαλλία", "Страсбург • Франция", "ستراسبورغ • فرنسا"],
        ["Étudiant en BTS SIO option SISR", "BTS SIO student (SISR option)", "BTS-SIO-Student (Fachrichtung SISR)", "Estudiante de BTS SIO (opción SISR)", "Estudante de BTS SIO (opção SISR)", "Φοιτητής BTS SIO (κατεύθυνση SISR)", "Студент BTS SIO (направление SISR)", "طالب في BTS SIO (تخصص SISR)"],
        ["Actuellement en BTS Services Informatiques aux Organisations en alternance, je me prépare à intégrer la 3e année du Bachelor Administrateur d’Infrastructures Sécurisées à la CCI Campus Strasbourg. Ce portfolio a été créé pour présenter mon profil aux entreprises dans le cadre de ma recherche d’alternance en réseaux et administration système. Mon objectif : me spécialiser dans Linux et devenir administrateur système Linux.",
            "I am currently doing a BTS in IT Services for Organisations (SIO) as a work-study student, and I am preparing to join the 3rd year of the Secured Infrastructure Administrator Bachelor (AIS) at CCI Campus Strasbourg. This portfolio presents my profile to companies as part of my search for a work-study placement in networks and system administration. My goal: to specialise in Linux and become a Linux system administrator.",
            "Derzeit absolviere ich im dualen System den BTS Services Informatiques aux Organisations (SIO) und bereite mich darauf vor, in das 3. Jahr des Bachelors Administrateur d’Infrastructures Sécurisées (AIS) am CCI Campus Strasbourg einzusteigen. Dieses Portfolio stellt mein Profil Unternehmen vor, im Rahmen meiner Suche nach einer Alternance-Stelle in den Bereichen Netzwerke und Systemadministration. Mein Ziel: mich auf Linux zu spezialisieren und Linux-Systemadministrator zu werden.",
            "Actualmente cursando el BTS Services Informatiques aux Organisations (SIO) en formación dual, me preparo para incorporarme al 3.º año del Bachelor Administrateur d’Infrastructures Sécurisées (AIS) en el CCI Campus Strasbourg. Este portafolio se ha creado para presentar mi perfil a las empresas en el marco de mi búsqueda de una plaza en formación dual en redes y administración de sistemas. Mi objetivo: especializarme en Linux y convertirme en administrador de sistemas Linux.",
            "Atualmente a frequentar o BTS Services Informatiques aux Organisations (SIO) em regime de alternância, preparo-me para ingressar no 3.º ano do Bachelor Administrateur d’Infrastructures Sécurisées (AIS) no CCI Campus Strasbourg. Este portefólio foi criado para apresentar o meu perfil às empresas, no âmbito da minha procura de um contrato de alternância em redes e administração de sistemas. O meu objetivo: especializar-me em Linux e tornar-me administrador de sistemas Linux.",
            "Αυτή τη στιγμή παρακολουθώ το BTS Services Informatiques aux Organisations (SIO) με σύστημα εναλλασσόμενης εκπαίδευσης (alternance) και προετοιμάζομαι να ενταχθώ στο 3ο έτος του Bachelor Administrateur d’Infrastructures Sécurisées (AIS) στο CCI Campus Strasbourg. Αυτό το portfolio δημιουργήθηκε για να παρουσιάσει το προφίλ μου στις επιχειρήσεις, στο πλαίσιο της αναζήτησής μου για θέση εναλλασσόμενης εκπαίδευσης στα δίκτυα και τη διαχείριση συστημάτων. Στόχος μου: να ειδικευτώ στο Linux και να γίνω διαχειριστής συστημάτων Linux.",
            "В настоящее время я учусь по программе BTS Services Informatiques aux Organisations (SIO) в формате дуального обучения (alternance) и готовлюсь поступить на 3-й курс бакалавриата Administrateur d’Infrastructures Sécurisées (AIS) в CCI Campus Strasbourg. Это портфолио создано, чтобы представить мой профиль компаниям в рамках поиска места дуального обучения в области сетей и системного администрирования. Моя цель — специализироваться на Linux и стать системным администратором Linux.",
            "أدرس حالياً في برنامج BTS Services Informatiques aux Organisations (SIO) بنظام التدريب المتناوب (alternance)، وأستعد للالتحاق بالسنة الثالثة من برنامج Bachelor Administrateur d’Infrastructures Sécurisées (AIS) في CCI Campus Strasbourg. أُنشئ هذا الملف لعرض ملفي الشخصي على الشركات في إطار بحثي عن عقد تدريب متناوب في مجالي الشبكات وإدارة الأنظمة. هدفي: التخصص في Linux وأن أصبح مدير أنظمة Linux."],
        ["Me contacter", "Contact me", "Kontakt aufnehmen", "Contáctame", "Contacte-me", "Επικοινωνήστε μαζί μου", "Связаться со мной", "تواصل معي"],
        ["En savoir plus", "Learn more", "Mehr erfahren", "Saber más", "Saber mais", "Μάθετε περισσότερα", "Узнать больше", "اعرف المزيد"],
        ["Compétences clés", "Key skills", "Kernkompetenzen", "Competencias clave", "Competências-chave", "Βασικές δεξιότητες", "Ключевые навыки", "المهارات الأساسية"],
        ["Ligne de commande, SSH, permissions", "Command line, SSH, permissions", "Kommandozeile, SSH, Berechtigungen", "Línea de comandos, SSH, permisos", "Linha de comandos, SSH, permissões", "Γραμμή εντολών, SSH, δικαιώματα", "Командная строка, SSH, права доступа", "سطر الأوامر، SSH، الصلاحيات"],
        ["2022/2025, GUI et Core", "2022/2025, GUI and Core", "2022/2025, GUI und Core", "2022/2025, GUI y Core", "2022/2025, GUI e Core", "2022/2025, GUI και Core", "2022/2025, GUI и Core", "2022/2025، واجهة رسومية وCore"],
        ["Réseau", "Networking", "Netzwerk", "Redes", "Redes", "Δίκτυα", "Сети", "الشبكات"],
        ["DNS, DHCP, VLAN, adressage IP", "DNS, DHCP, VLAN, IP addressing", "DNS, DHCP, VLAN, IP-Adressierung", "DNS, DHCP, VLAN, direccionamiento IP", "DNS, DHCP, VLAN, endereçamento IP", "DNS, DHCP, VLAN, διευθυνσιοδότηση IP", "DNS, DHCP, VLAN, IP-адресация", "DNS وDHCP وVLAN وعنونة IP"],
        ["Liaison chiffrée inter-sites", "Encrypted site-to-site link", "Verschlüsselte Standortverbindung", "Enlace cifrado entre sedes", "Ligação cifrada entre sites", "Κρυπτογραφημένη σύνδεση μεταξύ τοποθεσιών", "Шифрованный канал между площадками", "ربط مشفّر بين المواقع"],
        ["Virtualisation", "Virtualisation", "Virtualisierung", "Virtualización", "Virtualização", "Εικονικοποίηση", "Виртуализация", "المحاكاة الافتراضية"],
        ["Voir toutes les compétences", "See all skills", "Alle Kompetenzen ansehen", "Ver todas las competencias", "Ver todas as competências", "Δείτε όλες τις δεξιότητες", "Все навыки", "عرض كل المهارات"],

        /* ---- A propos ---- */
        ["Passionné d’informatique depuis plusieurs années, j’ai passé un Bac Pro Systèmes Numériques au lycée Marcel Rudloff, puis poursuivi en BTS SIO option SISR en alternance à la CCI Campus Strasbourg. J’y ai travaillé comme technicien informatique en alternance chez NLMK, puis chez Tessi. Mon objectif est d’intégrer la 3e année du Bachelor Administrateur d’Infrastructures Sécurisées, toujours en alternance, afin de renforcer mes compétences en réseaux et en systèmes. Mon projet professionnel : me spécialiser dans Linux et devenir administrateur système Linux. Je suis motivé, rigoureux, curieux et déterminé à évoluer dans le domaine de la sécurité informatique.",
            "Passionate about computing for several years, I did a vocational Baccalaureate in Digital Systems at Marcel Rudloff High School, then continued with a BTS SIO (SISR option) as a work-study student at CCI Campus Strasbourg. I worked as a work-study IT technician at NLMK, then at Tessi. My goal is to join the 3rd year of the Secured Infrastructure Administrator Bachelor, again as a work-study student, to strengthen my skills in networks and systems. My career goal: to specialise in Linux and become a Linux system administrator. I am motivated, rigorous, curious and determined to grow in the field of IT security.",
            "Seit mehreren Jahren begeistere ich mich für Informatik. Ich habe ein Bac Pro Systèmes Numériques am Lycée Marcel Rudloff absolviert und anschließend im dualen System den BTS SIO, Fachrichtung SISR, am CCI Campus Strasbourg fortgesetzt. Dabei habe ich als IT-Techniker im dualen System bei NLMK und danach bei Tessi gearbeitet. Mein Ziel ist es, in das 3. Jahr des Bachelors Administrateur d’Infrastructures Sécurisées einzusteigen, ebenfalls im dualen System, um meine Kenntnisse in Netzwerken und Systemen zu vertiefen. Mein beruflicher Plan: mich auf Linux zu spezialisieren und Linux-Systemadministrator zu werden. Ich bin motiviert, gewissenhaft, neugierig und entschlossen, mich im Bereich der IT-Sicherheit weiterzuentwickeln.",
            "Me apasiona la informática desde hace varios años: cursé un Bac Pro Systèmes Numériques en el lycée Marcel Rudloff y después continué con el BTS SIO, opción SISR, en formación dual en el CCI Campus Strasbourg. He trabajado como técnico informático en formación dual en NLMK y luego en Tessi. Mi objetivo es incorporarme al 3.º año del Bachelor Administrateur d’Infrastructures Sécurisées, también en formación dual, para reforzar mis competencias en redes y sistemas. Mi proyecto profesional: especializarme en Linux y convertirme en administrador de sistemas Linux. Soy una persona motivada, rigurosa, curiosa y decidida a evolucionar en el ámbito de la seguridad informática.",
            "A informática apaixona-me há vários anos: tirei um Bac Pro Systèmes Numériques no lycée Marcel Rudloff e continuei com o BTS SIO, opção SISR, em regime de alternância no CCI Campus Strasbourg. Trabalhei como técnico informático em alternância na NLMK e depois na Tessi. O meu objetivo é ingressar no 3.º ano do Bachelor Administrateur d’Infrastructures Sécurisées, também em alternância, para reforçar as minhas competências em redes e sistemas. O meu projeto profissional: especializar-me em Linux e tornar-me administrador de sistemas Linux. Sou uma pessoa motivada, rigorosa, curiosa e determinada a evoluir na área da segurança informática.",
            "Η πληροφορική με ενδιαφέρει εδώ και πολλά χρόνια. Ολοκλήρωσα το Bac Pro Systèmes Numériques στο λύκειο Marcel Rudloff και συνέχισα με το BTS SIO, κατεύθυνση SISR, με σύστημα εναλλασσόμενης εκπαίδευσης στο CCI Campus Strasbourg. Εργάστηκα ως τεχνικός πληροφορικής στο πλαίσιο της εναλλασσόμενης εκπαίδευσης στη NLMK και στη συνέχεια στη Tessi. Στόχος μου είναι να ενταχθώ στο 3ο έτος του Bachelor Administrateur d’Infrastructures Sécurisées, επίσης με εναλλασσόμενη εκπαίδευση, ώστε να ενισχύσω τις δεξιότητές μου στα δίκτυα και τα συστήματα. Επαγγελματικός μου στόχος: να ειδικευτώ στο Linux και να γίνω διαχειριστής συστημάτων Linux. Είμαι άνθρωπος με κίνητρο, ευσυνειδησία, περιέργεια και αποφασιστικότητα για εξέλιξη στον τομέα της ασφάλειας πληροφοριακών συστημάτων.",
            "Информатикой увлекаюсь уже несколько лет. Мой путь: Bac Pro Systèmes Numériques в лицее Marcel Rudloff, затем BTS SIO (направление SISR) в формате дуального обучения в CCI Campus Strasbourg. Опыт работы: ИТ-техник в формате дуального обучения в NLMK, затем в Tessi. Моя цель — поступить на 3-й курс бакалавриата Administrateur d’Infrastructures Sécurisées, также в формате дуального обучения, чтобы укрепить навыки в сетях и системах. Профессиональный план: специализироваться на Linux и стать системным администратором Linux. Мотивация, ответственность, любознательность и стремление развиваться в сфере информационной безопасности — мои главные качества.",
            "أهتم بالمعلوماتية منذ عدة سنوات. أنهيت شهادة Bac Pro Systèmes Numériques في ثانوية Marcel Rudloff، ثم تابعت BTS SIO تخصص SISR بنظام التدريب المتناوب في CCI Campus Strasbourg. عملت فنياً في المعلوماتية بنظام التدريب المتناوب لدى NLMK ثم لدى Tessi. هدفي هو الالتحاق بالسنة الثالثة من برنامج Bachelor Administrateur d’Infrastructures Sécurisées، وبنظام التدريب المتناوب أيضاً، لتعزيز مهاراتي في الشبكات والأنظمة. مشروعي المهني: التخصص في Linux وأن أصبح مدير أنظمة Linux. أنا متحمس ودقيق وفضولي وعازم على التطور في مجال أمن المعلومات."],
        ["Sept. 2024 – juil. 2025", "Sept. 2024 – July 2025", "Sept. 2024 – Juli 2025", "sept. 2024 – jul. 2025", "set. 2024 – jul. 2025", "Σεπτ. 2024 – Ιούλ. 2025", "сент. 2024 – июль 2025", "سبتمبر 2024 – يوليو 2025"],
        ["Technicien informatique en alternance", "IT technician (work-study)", "IT-Techniker (dual)", "Técnico informático (formación dual)", "Técnico informático (alternância)", "Τεχνικός πληροφορικής (εναλλασσόμενη εκπαίδευση)", "ИТ-техник (дуальное обучение)", "فني معلوماتية (تدريب متناوب)"],
        ["NLMK (production d’acier), Strasbourg", "NLMK (steel production), Strasbourg", "NLMK (Stahlproduktion), Straßburg", "NLMK (producción de acero), Estrasburgo", "NLMK (produção de aço), Estrasburgo", "NLMK (παραγωγή χάλυβα), Στρασβούργο", "NLMK (производство стали), Страсбург", "NLMK (إنتاج الصلب)، ستراسبورغ"],
        ["Bac Pro Systèmes Numériques", "Vocational Baccalaureate in Digital Systems", "Berufsabitur Systèmes Numériques (Bac Pro SN)", "Bachillerato profesional en Sistemas Digitales (Bac Pro SN)", "Bacharelato profissional em Sistemas Digitais (Bac Pro SN)", "Επαγγελματικό απολυτήριο Ψηφιακών Συστημάτων (Bac Pro SN)", "Профессиональный бакалавриат «Цифровые системы» (Bac Pro SN)", "بكالوريا مهنية في الأنظمة الرقمية (Bac Pro SN)"],
        ["Lycée Marcel Rudloff, Strasbourg", "Marcel Rudloff High School, Strasbourg", "Lycée Marcel Rudloff, Straßburg", "Liceo Marcel Rudloff, Estrasburgo", "Liceu Marcel Rudloff, Estrasburgo", "Λύκειο Marcel Rudloff, Στρασβούργο", "Лицей Marcel Rudloff, Страсбург", "ثانوية Marcel Rudloff، ستراسبورغ"],
        ["BTS SIO option SISR en alternance", "BTS SIO, SISR option (work-study)", "BTS SIO, Fachrichtung SISR (dual)", "BTS SIO, opción SISR (formación dual)", "BTS SIO, opção SISR (alternância)", "BTS SIO, κατεύθυνση SISR (εναλλασσόμενη εκπαίδευση)", "BTS SIO, направление SISR (дуальное обучение)", "BTS SIO تخصص SISR (تدريب متناوب)"],
        ["CCI Campus Strasbourg (en cours)", "CCI Campus Strasbourg (in progress)", "CCI Campus Strasbourg (laufend)", "CCI Campus Strasbourg (en curso)", "CCI Campus Strasbourg (em curso)", "CCI Campus Strasbourg (σε εξέλιξη)", "CCI Campus Strasbourg (в процессе)", "CCI Campus Strasbourg (قيد الدراسة)"],
        ["Sept. 2025 – juil. 2027", "Sept. 2025 – July 2027", "Sept. 2025 – Juli 2027", "sept. 2025 – jul. 2027", "set. 2025 – jul. 2027", "Σεπτ. 2025 – Ιούλ. 2027", "сент. 2025 – июль 2027", "سبتمبر 2025 – يوليو 2027"],
        ["Rentrée visée : 2027", "Target start: 2027", "Angestrebter Beginn: 2027", "Inicio previsto: 2027", "Início previsto: 2027", "Στόχος έναρξης: 2027", "Планируемое начало: 2027", "البدء المستهدف: 2027"],
        ["Bachelor AIS (3e année)", "AIS Bachelor (3rd year)", "Bachelor AIS (3. Jahr)", "Bachelor AIS (3.º año)", "Bachelor AIS (3.º ano)", "Bachelor AIS (3ο έτος)", "Бакалавриат AIS (3-й курс)", "بكالوريوس AIS (السنة الثالثة)"],
        ["Administrateur d’Infrastructures Sécurisées, en alternance", "Secured Infrastructure Administrator, work-study", "Administrator für gesicherte Infrastrukturen, dual", "Administrador de infraestructuras seguras, formación dual", "Administrador de infraestruturas seguras, alternância", "Διαχειριστής ασφαλών υποδομών, εναλλασσόμενη εκπαίδευση", "Администратор защищённых инфраструктур, дуальное обучение", "مدير البنى التحتية المؤمَّنة، تدريب متناوب"],
        ["Objectif", "Goal", "Ziel", "Objetivo", "Objetivo", "Στόχος", "Цель", "الهدف"],
        ["Intégrer une entreprise en alternance pour ma 3e année de Bachelor AIS afin de développer mes compétences en administration système et réseau.",
            "Join a company as a work-study student for my 3rd year of the AIS Bachelor in order to develop my skills in system and network administration.",
            "Für mein 3. Jahr im Bachelor AIS in einem Unternehmen im dualen System einsteigen, um meine Kenntnisse in System- und Netzwerkadministration auszubauen.",
            "Incorporarme a una empresa en formación dual para mi 3.º año del Bachelor AIS con el fin de desarrollar mis competencias en administración de sistemas y redes.",
            "Integrar uma empresa em alternância no meu 3.º ano do Bachelor AIS, a fim de desenvolver as minhas competências em administração de sistemas e redes.",
            "Να ενταχθώ σε μια επιχείρηση με εναλλασσόμενη εκπαίδευση για το 3ο έτος του Bachelor AIS, ώστε να αναπτύξω τις δεξιότητές μου στη διαχείριση συστημάτων και δικτύων.",
            "Попасть в компанию по программе дуального обучения на 3-м курсе бакалавриата AIS, чтобы развить навыки в системном и сетевом администрировании.",
            "الانضمام إلى شركة بنظام التدريب المتناوب في السنة الثالثة من برنامج Bachelor AIS لتطوير مهاراتي في إدارة الأنظمة والشبكات."],
        ["À terme, je souhaite me spécialiser dans l’environnement Linux et devenir administrateur système Linux.",
            "In the long term, I want to specialise in the Linux environment and become a Linux system administrator.",
            "Langfristig möchte ich mich auf die Linux-Umgebung spezialisieren und Linux-Systemadministrator werden.",
            "A largo plazo, quiero especializarme en el entorno Linux y convertirme en administrador de sistemas Linux.",
            "A longo prazo, quero especializar-me no ambiente Linux e tornar-me administrador de sistemas Linux.",
            "Μακροπρόθεσμα, θέλω να ειδικευτώ στο περιβάλλον Linux και να γίνω διαχειριστής συστημάτων Linux.",
            "В перспективе я хочу специализироваться на Linux и стать системным администратором Linux.",
            "على المدى البعيد، أرغب في التخصص في بيئة Linux وأن أصبح مدير أنظمة Linux."],
        ["Qualités", "Qualities", "Eigenschaften", "Cualidades", "Qualidades", "Ιδιότητες", "Качества", "الصفات"],
        ["Rigueur et sens de l’organisation", "Rigour and organisation skills", "Sorgfalt und Organisationsgeschick", "Rigor y sentido de la organización", "Rigor e sentido de organização", "Ακρίβεια και οργανωτικό πνεύμα", "Дисциплинированность и организованность", "الدقة وروح التنظيم"],
        ["Curiosité et patience", "Curiosity and patience", "Neugier und Geduld", "Curiosidad y paciencia", "Curiosidade e paciência", "Περιέργεια και υπομονή", "Любознательность и терпение", "الفضول والصبر"],
        ["Esprit d’équipe", "Team spirit", "Teamgeist", "Espíritu de equipo", "Espírito de equipa", "Ομαδικό πνεύμα", "Командный дух", "روح الفريق"],

        /* ---- Competences ---- */
        ["Systèmes", "Systems", "Systeme", "Sistemas", "Sistemas", "Συστήματα", "Системы", "الأنظمة"],
        ["Linux Debian : ligne de commande et interface graphique", "Linux Debian: command line and graphical interface", "Linux Debian: Kommandozeile und grafische Oberfläche", "Linux Debian: línea de comandos e interfaz gráfica", "Linux Debian: linha de comandos e interface gráfica", "Linux Debian: γραμμή εντολών και γραφικό περιβάλλον", "Linux Debian: командная строка и графический интерфейс", "Linux Debian: سطر الأوامر والواجهة الرسومية"],
        ["Windows Server 2022/2025 (GUI et Core)", "Windows Server 2022/2025 (GUI and Core)", "Windows Server 2022/2025 (GUI und Core)", "Windows Server 2022/2025 (GUI y Core)", "Windows Server 2022/2025 (GUI e Core)", "Windows Server 2022/2025 (GUI και Core)", "Windows Server 2022/2025 (GUI и Core)", "Windows Server 2022/2025 (واجهة رسومية وCore)"],
        ["SSH, utilisateurs et permissions, paquets (apt)", "SSH, users and permissions, packages (apt)", "SSH, Benutzer und Berechtigungen, Pakete (apt)", "SSH, usuarios y permisos, paquetes (apt)", "SSH, utilizadores e permissões, pacotes (apt)", "SSH, χρήστες και δικαιώματα, πακέτα (apt)", "SSH, пользователи и права, пакеты (apt)", "SSH والمستخدمون والصلاحيات والحزم (apt)"],
        ["Services Windows", "Windows services", "Windows-Dienste", "Servicios Windows", "Serviços Windows", "Υπηρεσίες Windows", "Службы Windows", "خدمات Windows"],
        ["Active Directory et GPO", "Active Directory and GPO", "Active Directory und GPO", "Active Directory y GPO", "Active Directory e GPO", "Active Directory και GPO", "Active Directory и GPO", "Active Directory وGPO"],
        ["Gestion des droits et partages réseau", "Rights management and network shares", "Rechteverwaltung und Netzwerkfreigaben", "Gestión de permisos y recursos compartidos de red", "Gestão de permissões e partilhas de rede", "Διαχείριση δικαιωμάτων και κοινόχρηστων φακέλων δικτύου", "Управление правами и сетевыми ресурсами", "إدارة الصلاحيات ومشاركات الشبكة"],
        ["Configuration réseau Linux et Windows", "Linux and Windows network configuration", "Netzwerkkonfiguration unter Linux und Windows", "Configuración de red en Linux y Windows", "Configuração de rede em Linux e Windows", "Ρύθμιση δικτύου σε Linux και Windows", "Настройка сети в Linux и Windows", "إعداد الشبكة في Linux وWindows"],
        ["VPN IPsec inter-sites", "Site-to-site IPsec VPN", "IPsec-VPN zwischen Standorten", "VPN IPsec entre sedes", "VPN IPsec entre sites", "VPN IPsec μεταξύ τοποθεσιών", "VPN IPsec между площадками", "شبكة VPN IPsec بين المواقع"],
        ["Adressage IP, VLAN", "IP addressing, VLAN", "IP-Adressierung, VLAN", "Direccionamiento IP, VLAN", "Endereçamento IP, VLAN", "Διευθυνσιοδότηση IP, VLAN", "IP-адресация, VLAN", "عنونة IP وVLAN"],
        ["Réseaux virtuels : NAT, Bridge, Host-only, VMnet", "Virtual networks: NAT, Bridge, Host-only, VMnet", "Virtuelle Netzwerke: NAT, Bridge, Host-only, VMnet", "Redes virtuales: NAT, Bridge, Host-only, VMnet", "Redes virtuais: NAT, Bridge, Host-only, VMnet", "Εικονικά δίκτυα: NAT, Bridge, Host-only, VMnet", "Виртуальные сети: NAT, Bridge, Host-only, VMnet", "الشبكات الافتراضية: NAT وBridge وHost-only وVMnet"],
        ["Support & exploitation", "Support & operations", "Support & Betrieb", "Soporte y operaciones", "Suporte e operações", "Υποστήριξη & λειτουργία", "Поддержка и эксплуатация", "الدعم والتشغيل"],
        ["Technicien informatique en alternance (Tessi, NLMK)", "IT technician, work-study (Tessi, NLMK)", "IT-Techniker im dualen System (Tessi, NLMK)", "Técnico informático en formación dual (Tessi, NLMK)", "Técnico informático em alternância (Tessi, NLMK)", "Τεχνικός πληροφορικής με εναλλασσόμενη εκπαίδευση (Tessi, NLMK)", "ИТ-техник в формате дуального обучения (Tessi, NLMK)", "فني معلوماتية بنظام التدريب المتناوب (Tessi، NLMK)"],
        ["Gestion de parc et tickets avec GLPI", "Asset management and ticketing with GLPI", "Geräteverwaltung und Ticketing mit GLPI", "Gestión de parque y tickets con GLPI", "Gestão de parque informático e tickets com GLPI", "Διαχείριση εξοπλισμού και tickets με GLPI", "Управление парком и заявками в GLPI", "إدارة الأجهزة والتذاكر باستخدام GLPI"],
        ["Déploiement de logiciels et d’images système", "Software and system image deployment", "Verteilung von Software und Systemabbildern", "Despliegue de software e imágenes de sistema", "Implementação de software e imagens de sistema", "Εγκατάσταση λογισμικού και εικόνων συστήματος", "Развёртывание ПО и образов систем", "نشر البرامج وصور الأنظمة"],
        ["Langues", "Languages", "Sprachen", "Idiomas", "Línguas", "Γλώσσες", "Языки", "اللغات"],
        ["Français : langue maternelle", "French: native language", "Französisch: Muttersprache", "Francés: lengua materna", "Francês: língua materna", "Γαλλικά: μητρική γλώσσα", "Французский: родной язык", "الفرنسية: لغة أم"],
        ["Anglais : A2 – B1 (niveau scolaire)", "English: A2 – B1 (school level)", "Englisch: A2 – B1 (Schulniveau)", "Inglés: A2 – B1 (nivel escolar)", "Inglês: A2 – B1 (nível escolar)", "Αγγλικά: A2 – B1 (σχολικό επίπεδο)", "Английский: A2 – B1 (школьный уровень)", "الإنجليزية: A2 – B1 (مستوى مدرسي)"],

        /* ---- Projets ---- */
        ["Projets BTS SIO – option SISR", "BTS SIO projects – SISR option", "BTS-SIO-Projekte – Fachrichtung SISR", "Proyectos BTS SIO – opción SISR", "Projetos BTS SIO – opção SISR", "Έργα BTS SIO – κατεύθυνση SISR", "Проекты BTS SIO – направление SISR", "مشاريع BTS SIO – تخصص SISR"],
        ["Deux situations professionnelles réalisées en maquette (VMware) à la CCI Campus Strasbourg, en groupe, avec étude du cahier des charges, budget, planning, schéma réseau, démonstration technique et documentation complète.",
            "Two professional scenarios carried out as lab environments (VMware) at CCI Campus Strasbourg, in a group, including analysis of the specifications, budget, schedule, network diagram, technical demonstration and full documentation.",
            "Zwei berufliche Praxisszenarien, als Testumgebung (VMware) am CCI Campus Strasbourg in der Gruppe umgesetzt, mit Analyse des Lastenhefts, Budget, Zeitplan, Netzwerkplan, technischer Vorführung und vollständiger Dokumentation.",
            "Dos situaciones profesionales realizadas en maqueta (VMware) en el CCI Campus Strasbourg, en grupo, con estudio del pliego de condiciones, presupuesto, planificación, esquema de red, demostración técnica y documentación completa.",
            "Duas situações profissionais realizadas em maqueta (VMware) no CCI Campus Strasbourg, em grupo, com estudo do caderno de encargos, orçamento, planeamento, esquema de rede, demonstração técnica e documentação completa.",
            "Δύο επαγγελματικά σενάρια που υλοποιήθηκαν σε εικονικό εργαστήριο (VMware) στο CCI Campus Strasbourg, σε ομάδα, με μελέτη των προδιαγραφών, προϋπολογισμό, χρονοπρογραμματισμό, διάγραμμα δικτύου, τεχνική επίδειξη και πλήρη τεκμηρίωση.",
            "Две профессиональные ситуации, реализованные на тестовом стенде (VMware) в CCI Campus Strasbourg, в группе: анализ технического задания, бюджет, планирование, сетевая схема, техническая демонстрация и полная документация.",
            "حالتان مهنيتان نُفّذتا على نموذج تجريبي (VMware) في CCI Campus Strasbourg ضمن مجموعة، مع دراسة دفتر الشروط والميزانية والتخطيط ومخطط الشبكة والعرض التقني والتوثيق الكامل."],
        ["AP3 · Projet M2i · 2026 (en cours)", "AP3 · M2i project · 2026 (in progress)", "AP3 · M2i-Projekt · 2026 (laufend)", "AP3 · Proyecto M2i · 2026 (en curso)", "AP3 · Projeto M2i · 2026 (em curso)", "AP3 · Έργο M2i · 2026 (σε εξέλιξη)", "AP3 · Проект M2i · 2026 (в процессе)", "AP3 · مشروع M2i · 2026 (قيد التنفيذ)"],
        ["Infrastructure haute disponibilité multi-sites", "Multi-site high-availability infrastructure", "Hochverfügbare Multi-Standort-Infrastruktur", "Infraestructura de alta disponibilidad multisede", "Infraestrutura de alta disponibilidade multissite", "Υποδομή υψηλής διαθεσιμότητας πολλών τοποθεσιών", "Отказоустойчивая инфраструктура для нескольких площадок", "بنية تحتية عالية التوفر متعددة المواقع"],
        ["Fournir à un centre de formation un système d’information redondé et sécurisé, avec une liaison chiffrée entre deux sites (Strasbourg et Mulhouse).",
            "Provide a training centre with a redundant, secure information system and an encrypted link between two sites (Strasbourg and Mulhouse).",
            "Ein Ausbildungszentrum erhält ein redundantes, gesichertes Informationssystem mit verschlüsselter Verbindung zwischen zwei Standorten (Straßburg und Mülhausen).",
            "Proporcionar a un centro de formación un sistema de información redundante y seguro, con un enlace cifrado entre dos sedes (Estrasburgo y Mulhouse).",
            "Fornecer a um centro de formação um sistema de informação redundante e seguro, com uma ligação cifrada entre dois sites (Estrasburgo e Mulhouse).",
            "Παροχή σε ένα κέντρο εκπαίδευσης ενός πλεονάζοντος και ασφαλούς πληροφοριακού συστήματος, με κρυπτογραφημένη σύνδεση μεταξύ δύο τοποθεσιών (Στρασβούργο και Μυλούζ).",
            "Создание для учебного центра отказоустойчивой и защищённой информационной системы с шифрованным каналом между двумя площадками (Страсбург и Мюлуз).",
            "تزويد مركز تدريب بنظام معلومات احتياطي وآمن مع ربط مشفّر بين موقعين (ستراسبورغ ومولهوز)."],
        ["VPN IPsec site à site entre deux routeurs/pare-feu pfSense", "Site-to-site IPsec VPN between two pfSense routers/firewalls", "Site-to-Site-IPsec-VPN zwischen zwei pfSense-Routern/Firewalls", "VPN IPsec sitio a sitio entre dos routers/cortafuegos pfSense", "VPN IPsec site a site entre dois routers/firewalls pfSense", "VPN IPsec site-to-site μεταξύ δύο δρομολογητών/τειχών προστασίας pfSense", "VPN IPsec «сайт–сайт» между двумя маршрутизаторами/межсетевыми экранами pfSense", "VPN IPsec بين موقعين عبر جهازي توجيه/جدار حماية pfSense"],
        ["Active Directory : 4 contrôleurs de domaine Windows Server (GUI et Core), DNS, DHCP avec basculement", "Active Directory: 4 Windows Server domain controllers (GUI and Core), DNS, DHCP with failover", "Active Directory: 4 Windows-Server-Domänencontroller (GUI und Core), DNS, DHCP mit Failover", "Active Directory: 4 controladores de dominio Windows Server (GUI y Core), DNS, DHCP con conmutación por error", "Active Directory: 4 controladores de domínio Windows Server (GUI e Core), DNS, DHCP com comutação por falha", "Active Directory: 4 ελεγκτές τομέα Windows Server (GUI και Core), DNS, DHCP με failover", "Active Directory: 4 контроллера домена Windows Server (GUI и Core), DNS, DHCP с отказоустойчивостью", "Active Directory: أربع وحدات تحكم بالنطاق على Windows Server (واجهة رسومية وCore)، وDNS، وDHCP مع التحويل التلقائي"],
        ["DFS / DFSR : espace de noms commun et réplication des données entre les 4 serveurs", "DFS / DFSR: shared namespace and data replication across the 4 servers", "DFS / DFSR: gemeinsamer Namespace und Datenreplikation zwischen den 4 Servern", "DFS / DFSR: espacio de nombres común y replicación de datos entre los 4 servidores", "DFS / DFSR: espaço de nomes comum e replicação de dados entre os 4 servidores", "DFS / DFSR: κοινός χώρος ονομάτων και αναπαραγωγή δεδομένων μεταξύ των 4 διακομιστών", "DFS / DFSR: общее пространство имён и репликация данных между 4 серверами", "DFS / DFSR: مساحة أسماء مشتركة وتكرار البيانات بين الخوادم الأربعة"],
        ["Sauvegarde complète et clichés instantanés sur SAN via iSCSI", "Full backup and shadow copies on a SAN via iSCSI", "Vollständige Sicherung und Schattenkopien auf einem SAN über iSCSI", "Copia de seguridad completa e instantáneas en una SAN mediante iSCSI", "Cópia de segurança completa e cópias de sombra num SAN via iSCSI", "Πλήρες αντίγραφο ασφαλείας και στιγμιότυπα σε SAN μέσω iSCSI", "Полное резервное копирование и теневые копии на SAN по iSCSI", "نسخ احتياطي كامل ونسخ ظل على شبكة SAN عبر iSCSI"],
        ["GPO et règles de pare-feu selon les recommandations de l’ANSSI", "GPOs and firewall rules following ANSSI recommendations", "GPOs und Firewall-Regeln nach den Empfehlungen der ANSSI", "GPO y reglas de cortafuegos según las recomendaciones de la ANSSI", "GPO e regras de firewall segundo as recomendações da ANSSI", "GPO και κανόνες τείχους προστασίας σύμφωνα με τις συστάσεις της ANSSI", "GPO и правила межсетевого экрана по рекомендациям ANSSI", "سياسات GPO وقواعد جدار الحماية وفق توصيات ANSSI"],
        ["Gestion de parc et support utilisateurs", "Asset management and user support", "Geräteverwaltung und Benutzersupport", "Gestión de parque y soporte a usuarios", "Gestão de parque informático e suporte a utilizadores", "Διαχείριση εξοπλισμού και υποστήριξη χρηστών", "Управление парком и поддержка пользователей", "إدارة الأجهزة ودعم المستخدمين"],
        ["Création d’une direction des systèmes d’information pour une société de gestion de parkings (83 salariés) : inventorier le parc, outiller le support et améliorer la qualité de service, dans une démarche inspirée d’ITIL.",
            "Creation of an information systems department for a car park management company (83 employees): inventory the equipment, equip the support team and improve service quality, following an ITIL-inspired approach.",
            "Aufbau einer IT-Abteilung für eine Parkhausgesellschaft (83 Beschäftigte): Bestand erfassen, den Support ausstatten und die Servicequalität verbessern, nach einem an ITIL angelehnten Ansatz.",
            "Creación de una dirección de sistemas de información para una empresa de gestión de aparcamientos (83 empleados): inventariar el parque, dotar al soporte de herramientas y mejorar la calidad del servicio, con un enfoque inspirado en ITIL.",
            "Criação de uma direção de sistemas de informação para uma empresa de gestão de parques de estacionamento (83 colaboradores): inventariar o parque, dotar o suporte de ferramentas e melhorar a qualidade do serviço, numa abordagem inspirada no ITIL.",
            "Δημιουργία διεύθυνσης πληροφοριακών συστημάτων για εταιρεία διαχείρισης χώρων στάθμευσης (83 εργαζόμενοι): καταγραφή του εξοπλισμού, εξοπλισμός της υποστήριξης και βελτίωση της ποιότητας υπηρεσιών, με προσέγγιση εμπνευσμένη από το ITIL.",
            "Создание ИТ-департамента для компании, управляющей парковками (83 сотрудника): инвентаризация парка, оснащение службы поддержки и повышение качества обслуживания в духе ITIL.",
            "إنشاء إدارة لنظم المعلومات لشركة تدير مواقف السيارات (83 موظفاً): جرد الأجهزة وتجهيز الدعم الفني وتحسين جودة الخدمة وفق منهج مستوحى من ITIL."],
        ["Serveurs Linux Debian/Ubuntu", "Linux Debian/Ubuntu servers", "Linux-Server Debian/Ubuntu", "Servidores Linux Debian/Ubuntu", "Servidores Linux Debian/Ubuntu", "Διακομιστές Linux Debian/Ubuntu", "Серверы Linux Debian/Ubuntu", "خوادم Linux بنظام Debian/Ubuntu"],
        ["GLPI : inventaire automatisé, gestion de parc et tickets, connecté à l’Active Directory", "GLPI: automated inventory, asset management and ticketing, connected to Active Directory", "GLPI: automatisierte Inventarisierung, Geräteverwaltung und Ticketing, mit Active Directory verbunden", "GLPI: inventario automatizado, gestión de parque y tickets, conectado a Active Directory", "GLPI: inventário automatizado, gestão de parque e tickets, ligado ao Active Directory", "GLPI: αυτοματοποιημένη καταγραφή, διαχείριση εξοπλισμού και tickets, συνδεδεμένο με το Active Directory", "GLPI: автоматизированная инвентаризация, управление парком и заявками, интеграция с Active Directory", "GLPI: جرد آلي وإدارة الأجهزة والتذاكر، متصل بـ Active Directory"],
        ["Assistance à distance hébergée en interne, conforme au RGPD", "Remote assistance hosted in-house, GDPR compliant", "Intern gehostete Fernwartung, DSGVO-konform", "Asistencia remota alojada internamente, conforme con el RGPD", "Assistência remota alojada internamente, em conformidade com o RGPD", "Απομακρυσμένη υποστήριξη που φιλοξενείται εσωτερικά, σύμφωνη με τον GDPR", "Удалённая поддержка на собственном сервере, соответствующая GDPR", "مساعدة عن بُعد مستضافة داخلياً ومتوافقة مع اللائحة العامة لحماية البيانات (RGPD)"],
        ["Déploiement de logiciels et d’images système sur Windows 11 Pro", "Software and system image deployment on Windows 11 Pro", "Verteilung von Software und Systemabbildern unter Windows 11 Pro", "Despliegue de software e imágenes de sistema en Windows 11 Pro", "Implementação de software e imagens de sistema em Windows 11 Pro", "Εγκατάσταση λογισμικού και εικόνων συστήματος σε Windows 11 Pro", "Развёртывание ПО и образов системы на Windows 11 Pro", "نشر البرامج وصور النظام على Windows 11 Pro"],
        ["Chiffrement des disques avec sauvegarde de la clé de récupération", "Disk encryption with recovery key backup", "Festplattenverschlüsselung mit Sicherung des Wiederherstellungsschlüssels", "Cifrado de discos con copia de seguridad de la clave de recuperación", "Cifragem de discos com cópia de segurança da chave de recuperação", "Κρυπτογράφηση δίσκων με αντίγραφο ασφαλείας του κλειδιού ανάκτησης", "Шифрование дисков с резервным хранением ключа восстановления", "تشفير الأقراص مع حفظ نسخة من مفتاح الاسترداد"],
        ["RGPD", "GDPR", "DSGVO", "", "", "GDPR", "GDPR", ""],
        ["Déploiement d’images", "Image deployment", "Image-Verteilung", "Despliegue de imágenes", "Implementação de imagens", "Εγκατάσταση εικόνων", "Развёртывание образов", "نشر الصور"],
        ["Projet personnel · en cours", "Personal project · in progress", "Persönliches Projekt · laufend", "Proyecto personal · en curso", "Projeto pessoal · em curso", "Προσωπικό έργο · σε εξέλιξη", "Личный проект · в процессе", "مشروع شخصي · قيد التنفيذ"],
        ["Serveur Linux Debian sécurisé", "Secure Debian Linux server", "Gesicherter Debian-Linux-Server", "Servidor Linux Debian seguro", "Servidor Linux Debian seguro", "Ασφαλής διακομιστής Linux Debian", "Защищённый сервер Linux Debian", "خادم Linux Debian آمن"],
        ["Montage d’un serveur Debian sans interface graphique, comme en entreprise, dans une machine virtuelle VMware, pour me former à l’administration Linux.",
            "Setting up a Debian server with no graphical interface, as in a company, in a VMware virtual machine, to train myself in Linux administration.",
            "Aufbau eines Debian-Servers ohne grafische Oberfläche, wie im Unternehmen, in einer VMware-Virtual-Machine, um mich in der Linux-Administration weiterzubilden.",
            "Montaje de un servidor Debian sin interfaz gráfica, como en una empresa, en una máquina virtual VMware, para formarme en administración Linux.",
            "Montagem de um servidor Debian sem interface gráfica, como numa empresa, numa máquina virtual VMware, para me formar em administração Linux.",
            "Στήσιμο διακομιστή Debian χωρίς γραφικό περιβάλλον, όπως σε μια εταιρεία, σε εικονική μηχανή VMware, για να εκπαιδευτώ στη διαχείριση Linux.",
            "Развёртывание сервера Debian без графического интерфейса, как в компании, в виртуальной машине VMware для обучения администрированию Linux.",
            "إعداد خادم Debian بدون واجهة رسومية كما في الشركات، داخل آلة افتراضية VMware، للتدرّب على إدارة Linux."],
        ["Connexion SSH par clés, sans mot de passe ni accès root", "SSH key-based login, with no password and no root access", "SSH-Anmeldung per Schlüssel, ohne Passwort und ohne Root-Zugang", "Acceso SSH mediante claves, sin contraseña ni acceso root", "Ligação SSH por chaves, sem palavra-passe nem acesso root", "Σύνδεση SSH με κλειδιά, χωρίς κωδικό πρόσβασης και χωρίς πρόσβαση root", "Вход по SSH-ключам, без пароля и без доступа root", "اتصال SSH بالمفاتيح، دون كلمة مرور ودون وصول root"],
        ["Pare-feu ufw et protection fail2ban", "ufw firewall and fail2ban protection", "ufw-Firewall und fail2ban-Schutz", "Cortafuegos ufw y protección fail2ban", "Firewall ufw e proteção fail2ban", "Τείχος προστασίας ufw και προστασία fail2ban", "Межсетевой экран ufw и защита fail2ban", "جدار الحماية ufw والحماية عبر fail2ban"],
        ["Site web Apache en HTTPS", "Apache website over HTTPS", "Apache-Website über HTTPS", "Sitio web Apache con HTTPS", "Site Apache com HTTPS", "Ιστότοπος Apache με HTTPS", "Веб-сайт Apache по HTTPS", "موقع ويب Apache عبر HTTPS"],
        ["Sauvegarde automatique avec rsync et cron, avec test de restauration", "Automatic backup with rsync and cron, with a restore test", "Automatische Sicherung mit rsync und cron, inklusive Wiederherstellungstest", "Copia de seguridad automática con rsync y cron, con prueba de restauración", "Cópia de segurança automática com rsync e cron, com teste de restauro", "Αυτόματο αντίγραφο ασφαλείας με rsync και cron, με δοκιμή επαναφοράς", "Автоматическое резервное копирование с rsync и cron и проверка восстановления", "نسخ احتياطي تلقائي باستخدام rsync وcron مع اختبار الاسترجاع"],
        ["Supervision du serveur et script Bash de rapport quotidien", "Server monitoring and a daily Bash report script", "Servermonitoring und Bash-Skript für einen täglichen Bericht", "Supervisión del servidor y script Bash de informe diario", "Monitorização do servidor e script Bash de relatório diário", "Παρακολούθηση του διακομιστή και script Bash για ημερήσια αναφορά", "Мониторинг сервера и Bash-скрипт ежедневного отчёта", "مراقبة الخادم وسكربت Bash لتقرير يومي"],

        /* ---- Contact ---- */
        ["Disponible pour une alternance en 3e année de Bachelor AIS à la CCI Campus Strasbourg. N’hésitez pas à me contacter pour échanger sur mon profil.",
            "Available for a work-study placement in the 3rd year of the AIS Bachelor at CCI Campus Strasbourg. Feel free to contact me to discuss my profile.",
            "Verfügbar für eine Alternance-Stelle im 3. Jahr des Bachelors AIS am CCI Campus Strasbourg. Nehmen Sie gern Kontakt mit mir auf, um über mein Profil zu sprechen.",
            "Disponible para una plaza en formación dual en el 3.º año del Bachelor AIS en el CCI Campus Strasbourg. No dude en contactarme para hablar de mi perfil.",
            "Disponível para um contrato de alternância no 3.º ano do Bachelor AIS no CCI Campus Strasbourg. Não hesite em contactar-me para falarmos do meu perfil.",
            "Διαθέσιμος για θέση εναλλασσόμενης εκπαίδευσης στο 3ο έτος του Bachelor AIS στο CCI Campus Strasbourg. Μη διστάσετε να επικοινωνήσετε μαζί μου για να συζητήσουμε το προφίλ μου.",
            "Ищу место дуального обучения на 3-м курсе бакалавриата AIS в CCI Campus Strasbourg. Свяжитесь со мной, чтобы обсудить мой профиль.",
            "متاح لعقد تدريب متناوب في السنة الثالثة من برنامج Bachelor AIS في CCI Campus Strasbourg. لا تترددوا في التواصل معي لمناقشة ملفي الشخصي."],
        ["Envoyer un email", "Send an email", "E-Mail senden", "Enviar un correo", "Enviar um email", "Αποστολή email", "Написать на email", "إرسال بريد إلكتروني"],
        ["Appeler", "Call", "Anrufen", "Llamar", "Ligar", "Κλήση", "Позвонить", "اتصال"],
        ["Email :", "Email:", "E-Mail:", "Correo:", "Email:", "Email:", "Email:", "البريد الإلكتروني:"],
        ["Tél :", "Phone:", "Tel.:", "Tel.:", "Tel.:", "Τηλ.:", "Тел.:", "الهاتف:"],
        ["GitHub :", "GitHub:", "GitHub:", "GitHub:", "GitHub:", "GitHub:", "GitHub:", "GitHub:"],
        ["Ville :", "City:", "Stadt:", "Ciudad:", "Cidade:", "Πόλη:", "Город:", "المدينة:"],
        ["Strasbourg (67)", "", "Straßburg (67)", "Estrasburgo (67)", "Estrasburgo (67)", "Στρασβούργο (67)", "Страсбург (67)", "ستراسبورغ (67)"],
        ["Mobilité :", "Mobility:", "Mobilität:", "Movilidad:", "Mobilidade:", "Μετακίνηση:", "Мобильность:", "التنقل:"],
        ["Permis B", "Driving licence (category B)", "Führerschein Klasse B", "Permiso de conducir B", "Carta de condução categoria B", "Δίπλωμα οδήγησης κατηγορίας Β", "Водительские права категории B", "رخصة قيادة فئة B"]
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
        root.setAttribute("dir", RTL[lang] ? "rtl" : "ltr");
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
