const app = {
    // State
    state: {
        currentUser: null,
        currentTab: 'dashboard',
        tasks: [
            { id: 1, text: 'Beber 3 litros de água', done: false },
            { id: 2, text: 'Alongamento matinal (10 min)', done: false },
            { id: 3, text: 'Alongamento noturno (10 min)', done: false },
            { id: 4, text: 'Seguir dieta básica', done: false },
            { id: 5, text: 'Dormir 8h por noite', done: false }
        ],
        dietLevels: Array.from({ length: 10 }, (_, i) => {
            const level = i + 1;
            return {
                level: level,
                title: `Nível ${level}`,
                desc: 'Acesse o plano alimentar completo para este nível.',
                pdf: `https://digitalcurso.space/wp-content/uploads/2025/12/dieta${level}.pdf`
            };
        }),
        workouts: {
            'A': {
                title: '🎯 Treino A - Descompressão',
                meta: {
                    duration: '15-20 min',
                    intensity: 'Baixa/Mod'
                },
                exercises: [
                    {
                        title: 'Alongamento Borboleta',
                        img: 'https://www.appmetodoog.com/images/treinos/TreinoA/Exercicio1.png',
                        reps: '30 repetições',
                        sets: '3 séries',
                        desc: 'Sente-se no chão com as solas dos pés unidas e os joelhos abertos para os lados. Segure os pés com as mãos, mantendo a coluna ereta. Pressione suavemente os joelhos em direção ao chão e volte controlando o movimento.',
                        tip: 'Coloque uma almofada sob os joelhos para reduzir o desconforto e, ao final de cada série, segure a posição com os joelhos pressionados por 5 segundos para aprofundar o alongamento.'
                    },
                    {
                        title: 'Avanço de Quadril',
                        img: 'https://www.appmetodoog.com/images/treinos/TreinoA/Exercicio3.png',
                        reps: 'Segurar 20s',
                        sets: '3 séries/perna',
                        desc: 'Fique em pé e dê um passo largo à frente com a perna direita. Flexione o joelho da frente em 90° e mantenha a perna de trás estendida, com o calcanhar levantado. Empurre o quadril para baixo até sentir o alongamento na virilha e parte frontal da coxa. Mantenha o tronco ereto e olhe para a frente.',
                        tip: 'Para intensificar o alongamento do flexor do quadril, eleve o braço do mesmo lado da perna de trás acima da cabeça e incline levemente o tronco para o lado oposto.'
                    },
                    {
                        title: 'Flexão de Joelhos ao Peito',
                        img: 'https://www.appmetodoog.com/images/treinos/TreinoA/Exercicio4.png',
                        reps: '10 repetições',
                        sets: '3 séries',
                        desc: 'Deite de costas próximo a uma parede, com os pés apoiados verticalmente. Segure as pernas flexionadas a 90° e puxe suavemente os joelhos em direção ao peito. Volte ao ponto inicial mantendo o controle.',
                        tip: 'Mantenha a lombar encostada no chão o tempo todo. Se sentir tensão excessiva, apoie uma toalha ou almofada sob a região lombar.'
                    },
                    {
                        title: 'Elevação de Quadril – Ponte',
                        img: 'https://www.appmetodoog.com/images/treinos/TreinoA/Exercicio5.png',
                        reps: '12 repetições',
                        sets: '3 séries',
                        desc: 'Deite-se de costas, joelhos flexionados e pés apoiados no chão na largura do quadril. Eleve o quadril até formar uma linha reta dos ombros aos joelhos. Segure 1 segundo no topo e desça controladamente.',
                        tip: 'Concentre-se em contrair bem os glúteos na subida e mantenha o abdômen firme para proteger a lombar.'
                    },
                    {
                        title: 'Flexão Total dos Joelhos',
                        img: 'https://www.appmetodoog.com/images/treinos/TreinoA/Exercicio6.png',
                        reps: '30 segundos',
                        sets: '2 séries',
                        desc: 'Ajoelhe-se no chão e sente-se sobre os calcanhares (“posição de seiza”). Mantenha o tronco ereto ou incline-o levemente à frente para variar a sensação. Segure por 30 segundos, respirando profundamente.',
                        tip: 'Use um colchonete grosso ou uma toalha dobrada sob os joelhos se sentir desconforto excessivo.'
                    },
                    {
                        title: 'Abertura de Peitoral',
                        img: 'https://www.appmetodoog.com/images/treinos/TreinoA/Exercicio7.png',
                        reps: '30 segundos',
                        sets: '3 séries',
                        desc: 'Fique em pé, mãos apoiadas na região lombar com os dedos voltados para baixo. Puxe os cotovelos para trás e abra o peito, projetando os ombros para trás. Mantenha a cervical neutra e respire fundo.',
                        tip: 'Dobre ligeiramente os joelhos para aliviar a tensão e evitar hiperlordose lombar durante o alongamento.'
                    },
                    {
                        title: 'Postura da Criança',
                        img: 'https://www.appmetodoog.com/images/treinos/TreinoA/Exercicio8.png',
                        reps: '40 segundos',
                        sets: '2 séries',
                        desc: 'Ajoelhe-se e sente-se sobre os calcanhares. Incline o tronco para frente, estendendo os braços à frente ou ao lado do corpo. Leve a testa até o chão e relaxe o pescoço.',
                        tip: 'Se a testa não alcançar o chão, apoie-a em um bloco ou almofada para relaxar completamente a coluna.'
                    },
                    {
                        title: 'Extensão Lombar',
                        img: 'https://www.appmetodoog.com/images/treinos/TreinoA/Exercicio8.png',
                        reps: '15 repetições',
                        sets: '3 séries',
                        desc: 'Deite-se de bruços, com as mãos ao lado da cabeça ou cruzadas sobre o peito. Eleve o tronco do chão, mantendo o pescoço alinhado com a coluna. Desça lentamente até quase tocar o chão.',
                        tip: 'Mantenha a ativação dos músculos abdominais durante todo o movimento para evitar sobrecarga na região lombar.'
                    }
                ]
            },
            'B': {
                title: '🎯 Treino B - Reativação',
                meta: {
                    duration: '20-25 min',
                    intensity: 'Baixa/Mod'
                },
                exercises: [
                    {
                        title: 'Alongamento Ombros para Cima',
                        img: 'https://www.appmetodoog.com/images/treinos/TreinoB/Exercicio1.png',
                        reps: '30 segundos',
                        sets: '3 séries',
                        desc: 'Fique em pé ou sentado com coluna ereta. Eleve ambos os ombros em direção às orelhas, segure por 2 segundos e solte abruptamente, deixando-os cair e sentir o alongamento nos trapézios.',
                        tip: 'Mantenha o pescoço relaxado e respire fundo a cada elevação e queda, sem forçar além do conforto.'
                    },
                    {
                        title: 'Inclinação Lateral em Pé',
                        img: 'https://www.appmetodoog.com/images/treinos/TreinoB/Exercicio2.png',
                        reps: '20 segundos cada lado',
                        sets: '3 séries',
                        desc: 'Fique em pé com os pés na largura dos ombros. Estenda o braço direito acima da cabeça e, mantendo o quadril estável, incline o tronco para a esquerda até sentir o alongamento no lado direito. Segure e repita do outro lado.',
                        tip: 'Não desloque o quadril para o lado; mantenha-o firme, e segure o final do movimento com respirações longas.'
                    },
                    {
                        title: 'Avanço de Quadril Profundo',
                        img: 'https://www.appmetodoog.com/images/treinos/TreinoB/Exercicio3.png',
                        reps: 'Segurar 20s',
                        sets: '3 séries/perna',
                        desc: 'Dê um grande passo à frente com a perna direita e flexione ambos os joelhos até 90°. Abaixe o quadril o máximo possível sem curvar a coluna. Segure e repita com a outra perna.',
                        tip: 'Apoie o joelho de trás em um colchonete se houver desconforto, e mantenha o tronco ereto para proteger a lombar.'
                    },
                    {
                        title: 'Rotação Toráxica em Prancha',
                        img: 'https://www.appmetodoog.com/images/treinos/TreinoB/Exercicio4.png',
                        reps: '15 repetições cada lado',
                        sets: '3 séries',
                        desc: 'Posicione-se em prancha alta. Gire o tronco para a direita, abrindo o braço direito ao teto e olhando para a mão. Volte ao centro e repita para o lado esquerdo.',
                        tip: 'Concentre-se em manter o quadril estável e o abdômen contraído para evitar balanços.'
                    },
                    {
                        title: 'Triângulo Lateral',
                        img: 'https://www.appmetodoog.com/images/treinos/TreinoB/Exercicio5.png',
                        reps: '20 segundos cada lado',
                        sets: '3 séries',
                        desc: 'Afaste as pernas, gire o pé direito 90°. Estenda o braço direito para o chão, apoiando-o em um bloco se necessário, e o esquerdo para o teto, alinhando ombros. Segure e troque de lado.',
                        tip: 'Não force tocar o solo; use um suporte para manter a coluna alongada e o peito aberto.'
                    },
                    {
                        title: 'Agachamento Profundo',
                        img: 'https://www.appmetodoog.com/images/treinos/TreinoB/Exercicio6.png',
                        reps: '30 segundos',
                        sets: '3 séries',
                        desc: 'Fique em pé, pés além da largura dos ombros e dedos apontados para fora. Agache empurrando os quadris para trás e para baixo até abaixo do paralelo, mantendo o peito ereto.',
                        tip: 'Mantenha os calcanhares firmes no chão; se necessário, coloque um pequeno calço sob os calcanhares.'
                    },
                    {
                        title: 'Prancha Cotovelo',
                        img: 'https://www.appmetodoog.com/images/treinos/TreinoB/Exercicio7.png',
                        reps: '40 segundos',
                        sets: '3 séries',
                        desc: 'De bruços, apoie os antebraços no chão com cotovelos alinhados aos ombros. Eleve o corpo formando uma linha reta dos ombros aos calcanhares e segure.',
                        tip: 'Evite elevar demais o quadril ou deixá-lo cair; ajuste apoiando os joelhos se for iniciante.'
                    },
                    {
                        title: 'Extensão Cobra',
                        img: 'https://www.appmetodoog.com/images/treinos/TreinoB/Exercicio8.png',
                        reps: '10 repetições',
                        sets: '3 séries',
                        desc: 'Deite-se de bruços com as mãos ao lado do peito. Empurre o tronco para cima, estendendo os braços até onde for confortável, mantendo a pelve em contato com o solo.',
                        tip: 'Abra o peito e afaste os ombros das orelhas, ativando as costas sem forçar o pescoço.'
                    },
                    {
                        title: 'Posição de Pombo',
                        img: 'https://www.appmetodoog.com/images/treinos/TreinoB/Exercicio9.png',
                        reps: '30 segundos cada lado',
                        sets: '2 séries',
                        desc: 'Comece em quatro apoios, leve o joelho direito à frente e ao lado da mão direita. Estenda a perna esquerda para trás e mantenha o quadril paralelo ao solo. Segure e troque de lado.',
                        tip: 'Se sentir pressão no joelho, coloque um colchonete sob o quadril e mantenha o tronco ereto.'
                    }
                ]
            },
            'C': {
                title: '🎯 Treino C - Fixação',
                meta: {
                    duration: '15-20 min',
                    intensity: 'Baixa/Mod'
                },
                exercises: [
                    {
                        title: 'Elevação de Braços',
                        img: 'https://www.appmetodoog.com/images/treinos/TreinoC/Exercicio1.png',
                        reps: '20 segundos',
                        sets: '3 séries',
                        desc: 'Fique em pé com os pés na largura dos ombros e braços estendidos ao lado do corpo. Eleve os braços lateralmente até a altura dos ombros, mantenha a posição por 20 segundos e abaixe de forma controlada.',
                        tip: 'Mantenha os ombros longe das orelhas e o abdômen contraído para estabilizar o tronco durante a elevação.'
                    },
                    {
                        title: 'Alongamento de Braço Cruzado',
                        img: 'https://www.appmetodoog.com/images/treinos/TreinoC/Exercicio2.png',
                        reps: '20 segundos cada lado',
                        sets: '3 séries',
                        desc: 'Estenda o braço direito à frente, paralelo ao chão. Use a mão esquerda para puxar o cotovelo direito em direção ao corpo até sentir o alongamento no ombro. Segure e repita do outro lado.',
                        tip: 'Mantenha o braço paralelo ao chão e evite elevar o ombro do lado alongado para não tensionar o trapézio.'
                    },
                    {
                        title: 'Rotação de Braço',
                        img: 'https://www.appmetodoog.com/images/treinos/TreinoC/Exercicio3.png',
                        reps: '15 repetições',
                        sets: '3 séries',
                        desc: 'Fique em pé com os braços estendidos lateralmente. Faça círculos amplos para frente durante 15 repetições, depois inverta o sentido e repita.',
                        tip: 'Controle o movimento, mantendo o tronco estável e os ombros relaxados para proteger as articulações.'
                    },
                    {
                        title: 'Tríceps Atrás da Cabeça',
                        img: 'https://www.appmetodoog.com/images/treinos/TreinoC/Exercicio4.png',
                        reps: '20 segundos',
                        sets: '3 séries',
                        desc: 'Fique em pé ou sente-se com coluna ereta. Eleve o braço direito, dobre o cotovelo atrás da cabeça e segure o cotovelo com a mão esquerda, puxando suavemente. Segure e troque de lado.',
                        tip: 'Mantenha o tronco alinhado e evite inclinar o pescoço para frente.'
                    },
                    {
                        title: 'Inclinação da Cervical',
                        img: 'https://www.appmetodoog.com/images/treinos/TreinoC/Exercicio5.png',
                        reps: '20 segundos cada lado',
                        sets: '3 séries',
                        desc: 'Sente-se ou fique em pé com postura ereta. Incline a cabeça para a direita, aproximando a orelha do ombro sem elevar o ombro oposto. Use a mão direita para aplicar leve pressão. Segure e troque de lado.',
                        tip: 'Mantenha os ombros nivelados e olhe para frente, evitando circular o pescoço.'
                    },
                    {
                        title: 'Alongamento de Antebraço',
                        img: 'https://www.appmetodoog.com/images/treinos/TreinoC/Exercicio6.png',
                        reps: '15 segundos cada braço',
                        sets: '3 séries',
                        desc: 'Estenda o braço direito à frente com palma voltada para cima. Com a outra mão, puxe suavemente os dedos para baixo até sentir o alongamento no antebraço. Segure e troque de lado.',
                        tip: 'Mantenha o cotovelo estendido e ombros relaxados; não force além do limite de conforto.'
                    },
                    {
                        title: 'Flexão Frontal',
                        img: 'https://www.appmetodoog.com/images/treinos/TreinoC/Exercicio7.png',
                        reps: '20 segundos',
                        sets: '3 séries',
                        desc: 'Assuma a posição de prancha alta, mãos alinhadas aos ombros e corpo reto. Segure isometricamente por 20 segundos, mantendo o abdômen firme e quadril alinhado.',
                        tip: 'Evite elevar ou baixar demais o quadril; se precisar, apoie os joelhos para diminuir a carga.'
                    },
                    {
                        title: 'Inclinação Lateral',
                        img: 'https://www.appmetodoog.com/images/treinos/TreinoC/Exercicio8.png',
                        reps: '20 segundos cada lado',
                        sets: '3 séries',
                        desc: 'Fique em pé com os braços ao lado do corpo. Eleve o braço direito acima da cabeça e incline o tronco para a esquerda até sentir o alongamento no flanco direito. Segure e repita para o outro lado.',
                        tip: 'Mantenha os quadris estáveis e evite girar o tronco para preservar a coluna.'
                    },
                    {
                        title: 'Alongamento de Quadríceps',
                        img: 'https://www.appmetodoog.com/images/treinos/TreinoC/Exercicio9.png',
                        reps: '20 segundos cada perna',
                        sets: '3 séries',
                        desc: 'Fique em pé apoiado em uma parede. Dobre o joelho direito, segure o pé direito com a mão e aproxime o calcanhar do glúteo. Mantenha os joelhos juntos. Segure e troque de lado.',
                        tip: 'Mantenha o tronco ereto e evite projetar os joelhos à frente dos pés para não sobrecarregar a articulação.'
                    },
                    {
                        title: 'Panturrilha na Parede',
                        img: 'https://www.appmetodoog.com/images/treinos/TreinoC/Exercicio10.png',
                        reps: '15 segundos cada perna',
                        sets: '3 séries',
                        desc: 'Fique de frente para a parede, mãos apoiadas. Dê um passo para trás com a perna direita, mantendo o calcanhar no chão e a perna estendida. Incline o corpo para frente até sentir o alongamento na panturrilha. Segure e troque de lado.',
                        tip: 'Mantenha o calcanhar firmemente no chão e o joelho traseiro estendido para maximizar o alongamento.'
                    }
                ]
            }
        }
    },

    // Initialization
    init() {
        try {
            // Initialize Screens (DOM elements)
            this.screens = {
                main: document.getElementById('main-app')
            };

            // Validate critical elements
            if (!this.screens.main) {
                console.error('Critical DOM elements missing', this.screens);
                return;
            }

            this.setupEventListeners();

            // Always start app directly with default/stored user
            const storedUser = localStorage.getItem('grow_user_data');
            if (storedUser) {
                this.state.currentUser = JSON.parse(storedUser);
            } else {
                // Default user if none exists
                this.state.currentUser = {
                    name: 'Aluno',
                    height: 175,
                    weight: 70,
                    age: 25,
                    gender: 'male',
                    goal: 180
                };
            }
            this.startApp();

        } catch (error) {
            console.error('App Init Error:', error);
            const container = document.getElementById('notification-container');
            if (container) {
                this.showNotification('Erro ao iniciar: ' + error.message, 'error');
            }
        }
    },

    manualSubmit() {
        console.log('Manual Submit Clicked');
        const h = document.getElementById('ob-height').value;
        const w = document.getElementById('ob-weight').value;
        const a = document.getElementById('ob-age').value;
        const g = document.getElementById('ob-gender').value;

        console.log('Values:', { h, w, a, g });

        if (!h || !w || !a || !g || g === "") {
            this.showNotification('Por favor, preencha todos os campos.', 'error');
            return;
        }

        this.saveOnboarding(h, w, a, g);
    },

    saveOnboarding(height, weight, age, gender) {
        try {
            const newUser = {
                name: 'Aluno',
                height: height,
                weight: weight,
                age: age,
                gender: gender,
                goal: parseInt(height) + 5
            };

            this.state.currentUser = newUser;
            localStorage.setItem('grow_user_data', JSON.stringify(newUser));

            this.showNotification('Perfil configurado!', 'success');
            setTimeout(() => {
                this.startApp();
            }, 500); // Small delay for visual feedback
        } catch (error) {
            console.error('Save Error:', error);
            this.showNotification('Erro ao salvar dados: ' + error.message, 'error');
        }
    },

    // Navigation & Routing
    screens: {}, // Populated in init

    switchScreen(screenName) {
        if (!this.screens[screenName]) {
            console.error(`Screen ${screenName} not found`);
            return;
        }
        Object.values(this.screens).forEach(el => el.classList.remove('active'));
        this.screens[screenName].classList.add('active');
    },

    navigate(tabName) {
        this.state.currentTab = tabName;

        // Update Bottom Nav UI
        document.querySelectorAll('.nav-item').forEach(btn => {
            btn.classList.toggle('active', btn.getAttribute('onclick').includes(tabName));
        });

        // Render Content
        this.renderContent();
    },

    // Auth Logic
    // toggleAuthMode Removed as we only have login now

    showNotification(message, type = 'info') {
        const container = document.getElementById('notification-container');
        if (!container) return; // Guard clause

        const notif = document.createElement('div');
        notif.className = `notification ${type}`;

        let icon = 'fa-circle-info';
        if (type === 'success') icon = 'fa-circle-check';
        if (type === 'error') icon = 'fa-circle-exclamation';

        notif.innerHTML = `
            <i class="fa-solid ${icon}"></i>
            <span>${message}</span>
        `;

        container.appendChild(notif);

        // Remove after 3 seconds
        setTimeout(() => {
            notif.style.animation = 'fadeOut 0.3s forwards';
            setTimeout(() => {
                notif.remove();
            }, 300);
        }, 3000);
    },

    getUsers() {
        try {
            return JSON.parse(localStorage.getItem('grow_users') || '[]');
        } catch (e) {
            console.error('Error parsing users:', e);
            return [];
        }
    },

    login(username, password) {
        // DEV MODE: ANY PASSWORD ACCEPTED
        // if (password !== 'aluno968') ...

        const users = this.getUsers();
        // Match by email
        let user = users.find(u => u.username.toLowerCase() === username.toLowerCase());

        if (user) {
            // User exists, just login
            this.state.currentUser = user;
            this.showNotification('Bem-vindo de volta! Acesso liberado.', 'success');

            // Check if profile is complete
            if (!user.height || !user.age) {
                setTimeout(() => this.switchScreen('onboarding'), 1000);
            } else {
                setTimeout(() => this.startApp(), 1000);
            }
        } else {
            // First time access with correct password -> Auto Register
            const newUser = {
                username: username, // email
                password: password, // not really used but kept for structure
                name: username.split('@')[0], // Default name from email
                height: null,
                weight: null,
                age: null,
                gender: null,
                goal: null
            };

            users.push(newUser);
            try {
                localStorage.setItem('grow_users', JSON.stringify(users));
                this.state.currentUser = newUser;
                this.showNotification('Primeiro acesso detectado. Configurando perfil...', 'success');

                setTimeout(() => {
                    this.switchScreen('onboarding');
                }, 1500);
            } catch (e) {
                this.showNotification('Erro de armazenamento. Tente limpar o cache.', 'error');
            }
        }
    },

    // register() function removed as it is now auto-handled in login





    resetData() {
        if (confirm('Tem certeza que deseja redefinir seus dados?')) {
            localStorage.removeItem('grow_user_data');
            location.reload();
        }
    },

    updateUserInStorage(userToUpdate) {
        const users = this.getUsers();
        const index = users.findIndex(u => u.username === userToUpdate.username);
        if (index !== -1) {
            users[index] = userToUpdate;
            try {
                localStorage.setItem('grow_users', JSON.stringify(users));
            } catch (e) {
                console.error('Error saving user:', e);
            }
        }
    },

    checkAuth() {
        // Simple session check (optional)
        // For now, always start at auth
        this.switchScreen('auth');
    },

    startApp() {
        this.switchScreen('main');
        document.getElementById('user-name-display').innerText = this.state.currentUser.name.split(' ')[0];
        this.navigate('dashboard');
    },

    // Rendering Logic
    renderContent() {
        const container = document.getElementById('content-area');
        container.innerHTML = '';
        container.className = 'content-area anim-enter';

        switch (this.state.currentTab) {
            case 'dashboard':
                container.innerHTML = this.getDashboardHTML();
                break;
            case 'workouts':
                container.innerHTML = this.getWorkoutsHTML();
                break;
            case 'diet':
                container.innerHTML = this.getDietHTML();
                this.setupAccordion();
                break;
            case 'profile':
                container.innerHTML = this.getProfileHTML();
                break;
        }
    },

    getDashboardHTML() {
        const user = this.state.currentUser;
        const progressPercent = 3; // Mocked
        const dailyPercent = (this.state.tasks.filter(t => t.done).length / this.state.tasks.length) * 100;

        // Fixed water goal: 3.5 Liters
        const waterLiters = 3.5;
        const waterTaskText = `Beber ${waterLiters.toString().replace('.', ',')} litros de água`;

        // Update task text dynamically (assuming first task is always water)
        const tasksToRender = this.state.tasks.map((task, index) => {
            const text = index === 0 ? waterTaskText : task.text;
            return { ...task, text };
        });

        let tasksHTML = tasksToRender.map(task => `
            <div class="task-item ${task.done ? 'done' : ''}" onclick="app.toggleTask(${task.id})">
                <div class="task-check">
                    ${task.done ? '<i class="fa-solid fa-check"></i>' : ''}
                </div>
                <span>${task.text}</span>
            </div>
        `).join('');

        return `
            <div class="card">
                <div style="display:flex; justify-content:space-between; align-items:flex-end;">
                    <h3 class="text-red">Nível 1: Fundação</h3>
                    <span class="text-small" style="color:#666">Dias válidos 1 / 30</span>
                </div>
                <div class="text-small" style="color:#888; margin-bottom:10px;">Postura e Mobilidade</div>
                
                <div style="display:flex; justify-content:space-between; font-size:0.8rem; margin-bottom:5px;">
                    <span>Progresso do Nível 1</span>
                    <span class="text-red">${progressPercent}%</span>
                </div>
                <div class="progress-bar-bg">
                    <div class="progress-fill" style="width: ${progressPercent}%"></div>
                </div>
            </div>

            <div style="margin-bottom: 20px;">
                <h3 style="margin-bottom: 10px; display:flex; align-items:center; gap:8px;">
                    <i class="fa-solid fa-chart-simple text-red"></i> Tarefas de Hoje
                </h3>
                ${tasksHTML}
            </div>

            ${this.getValidationCardHTML(dailyPercent >= 100)}
        `;
    },

    getValidationCardHTML(isComplete) {
        if (isComplete) {
            return `
            <div class="card locked-card" style="border-color: var(--success-color); background: rgba(46, 204, 113, 0.05);">
                <i class="fa-solid fa-circle-check" style="font-size: 3rem; color: var(--success-color); margin-bottom: 10px;"></i>
                <h3 style="margin-bottom:5px; color: var(--success-color);">Parabéns!</h3>
                <h4 style="margin-bottom:10px;">Dia Concluído com Sucesso!</h4>
                <p class="text-small" style="color: #bbb">Suas tarefas serão atualizadas automaticamente às 00:00.</p>
            </div>`;
        } else {
            return `
            <div class="card locked-card">
                <i class="fa-solid fa-lock" style="font-size: 2rem; color: var(--primary-color); margin-bottom: 10px;"></i>
                <h3 style="margin-bottom:5px;">Dia Validado!</h3>
                <p class="text-small" style="color: #888">Complete todas as tarefas para validar o dia.</p>
            </div>`;
        }
    },

    getWorkoutsHTML() {
        return `
            <div style="text-align:center; margin-bottom:20px;">
                <h2>Seus Treinos 💪</h2>
                <p class="subtitle">Exercícios para desbloquear sua altura</p>
            </div>

            <div class="card" style="text-align:center; padding-top:40px; padding-bottom:30px;">
                <div style="font-size:3rem; margin-bottom:20px;">💪</div>
                <h3 style="margin-bottom:10px;">Seus Exercícios de Crescimento</h3>
                <p style="color:#999; font-size:0.9rem; margin-bottom:20px;">
                    Aqui você vai ter acesso aos seus exercícios para crescimento personalizado.
                </p>
                <button class="btn-primary" style="max-width:200px; margin:0 auto;">VER COMO FUNCIONARÁ</button>
            </div>

            <div class="card workout-card" onclick="app.openWorkoutModal('A')">
                <div class="workout-header">
                    <div class="workout-icon"><i class="fa-solid fa-arrows-up-down"></i></div>
                    <div>
                        <h4 class="text-red">Treino A - Descompressão</h4>
                        <span class="text-small" style="color:#666">Liberação de pressão discal</span>
                    </div>
                </div>
            </div>

            <div class="card workout-card" onclick="app.openWorkoutModal('B')">
                <div class="workout-header">
                    <div class="workout-icon"><i class="fa-solid fa-bolt"></i></div>
                    <div>
                        <h4 class="text-red">Treino B - Reativação</h4>
                        <span class="text-small" style="color:#666">Estimular cartilagens e hormônios</span>
                    </div>
                </div>
            </div>

            <div class="card workout-card" onclick="app.openWorkoutModal('C')">
                <div class="workout-header">
                    <div class="workout-icon"><i class="fa-solid fa-brain"></i></div>
                    <div>
                        <h4 class="text-red">Treino C - Fixação</h4>
                        <span class="text-small" style="color:#666">Reprogramar sistema nervoso</span>
                    </div>
                </div>
            </div>
        `;
    },

    getDietHTML() {
        const levelsHTML = this.state.dietLevels.map(lvl => `
            <div class="diet-level">
                <div class="diet-header">
                    <div>
                        <div class="text-bold">${lvl.title}</div>
                        <div class="text-small" style="color: #666; margin-top:4px;">CLIQUE PARA VISUALIZAR DETALHES</div>
                    </div>
                    <i class="fa-solid fa-chevron-down chevron"></i>
                </div>
                <div class="diet-content">
                    <div class="diet-body">
                        <p style="margin-bottom: 15px;">${lvl.desc}</p>
                        <a href="${lvl.pdf}" target="_blank" class="btn-primary" style="display:flex; align-items:center; justify-content:center; gap:10px; text-decoration:none; font-size:0.9rem;">
                            <i class="fa-solid fa-file-pdf"></i> Baixar Dieta PDF
                        </a>
                    </div>
                </div>
            </div>
        `).join('');

        return `
            <div style="text-align:center; margin-bottom:20px;">
                <h2>Planos de Dieta 🥗</h2>
                <p class="subtitle">Acompanhe as recomendações para seu nível</p>
            </div>
            ${levelsHTML}
        `;
    },

    getProfileHTML() {
        const user = this.state.currentUser;
        return `
             <div class="card">
                <h3>Perfil do Usuário</h3>
                <div style="margin-top:20px;">
                    <p><strong>Nome:</strong> ${user.name}</p>
                    <p><strong>Idade:</strong> ${user.age} anos</p>
                    <p><strong>Peso:</strong> ${user.weight} kg</p>
                    <p><strong>Altura Atual:</strong> ${user.height} cm</p>
                    <p><strong>Meta:</strong> ${user.goal} cm</p>
                </div>
                <button class="btn-primary" style="margin-top:20px; background-color: #333;" onclick="app.resetData()">Redefinir Dados</button>
            </div>
        `;
    },

    // Actions
    toggleTask(taskId) {
        const task = this.state.tasks.find(t => t.id === taskId);
        if (task) {
            task.done = !task.done;
            this.renderContent(); // Re-render to show checkmark
        }
    },

    setupAccordion() {
        document.querySelectorAll('.diet-header').forEach(header => {
            header.addEventListener('click', () => {
                const parent = header.parentElement;
                parent.classList.toggle('open');
            });
        });
    },

    setupEventListeners() {
        try {
            // Login Action removed

            // Register Form Listener Removed

            // Onboarding Form
            const onboardingForm = document.getElementById('onboarding-form');
            if (onboardingForm) {
                onboardingForm.addEventListener('submit', (e) => {
                    e.preventDefault();
                    const h = document.getElementById('ob-height').value;
                    const w = document.getElementById('ob-weight').value;
                    const a = document.getElementById('ob-age').value;
                    const g = document.getElementById('ob-gender').value;
                    this.saveOnboarding(h, w, a, g);
                });
            }

            // Setup Form
            const setupForm = document.getElementById('setup-form');
            if (setupForm) {
                setupForm.addEventListener('submit', (e) => {
                    e.preventDefault();
                    const h = document.getElementById('setup-height').value;
                    const w = document.getElementById('setup-weight').value;
                    if (h && w) {
                        this.saveSetupData(h, w);
                    }
                });
            }

            // Toggle password visibility
            const toggleBtns = document.querySelectorAll('.toggle-pass');
            toggleBtns.forEach(btn => {
                btn.addEventListener('click', function () {
                    const input = this.previousElementSibling;
                    if (input.type === 'password') {
                        input.type = 'text';
                        this.classList.remove('fa-eye');
                        this.classList.add('fa-eye-slash');
                    } else {
                        input.type = 'password';
                        this.classList.remove('fa-eye-slash');
                        this.classList.add('fa-eye');
                    }
                });
            });

            // Auth Navigation Buttons Removed - No more manual register
        } catch (error) {
            console.error('Setup Event Listeners Error:', error);
            this.showNotification('Erro interno ao inicializar eventos: ' + error.message, 'error');
        }
    },

    openWorkoutModal(workoutId) {
        const workout = this.state.workouts[workoutId];
        if (!workout) return;

        document.getElementById('modal-title').innerText = workout.title;
        const body = document.getElementById('modal-body');

        const exercisesHTML = workout.exercises.map(ex => `
            <div class="exercise-card">
                <img src="${ex.img}" class="ex-img" onerror="this.style.display='none'">
                <div class="ex-title">${ex.title}</div>
                <div class="ex-stats">
                    <span><i class="fa-solid fa-layer-group"></i> ${ex.sets}</span>
                    <span><i class="fa-solid fa-rotate-right"></i> ${ex.reps}</span>
                </div>
                <div class="ex-desc">
                    ${ex.desc}
                </div>
                <div class="ex-tip">
                    💡 ${ex.tip}
                </div>
            </div>
        `).join('');

        body.innerHTML = `
            <div class="workout-meta">
                <div class="meta-item">
                    <span class="meta-val">${workout.meta.duration}</span>
                    <span class="meta-label">Duração</span>
                </div>
                <div class="meta-item">
                    <span class="meta-val">${workout.meta.intensity}</span>
                    <span class="meta-label">Intensidade</span>
                </div>
            </div>
            ${exercisesHTML}
        `;

        document.getElementById('workout-modal').classList.add('active');
    },

    closeModal() {
        document.getElementById('workout-modal').classList.remove('active');
    }
};

// Start
// Start
window.app = app; // Ensure global access for HTML onclick handlers
document.addEventListener('DOMContentLoaded', () => {
    app.init();
});
