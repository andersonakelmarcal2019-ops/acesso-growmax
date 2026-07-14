import React, { useState } from 'react';
import { Dumbbell, Clock, Zap, X, Info, CheckCircle2 } from 'lucide-react';

interface Exercise {
  name: string;
  series: string;
  reps: string;
  description: string;
  tip: string;
  image: string;
}

const WorkoutTab: React.FC = () => {
  const [activeWorkout, setActiveWorkout] = useState<string | null>(null);

  const workoutAExercises: Exercise[] = [
    {
      name: "Alongamento Borboleta",
      series: "3 séries",
      reps: "30 repetições",
      description: "Sente-se no chão com as solas dos pés unidas e os joelhos abertos para os lados. Segure os pés com as mãos, mantendo a coluna ereta. Pressione suavemente os joelhos em direção ao chão e volte controlando o movimento.",
      tip: "Coloque uma almofada sob os joelhos para reduzir o desconforto e, ao final de cada série, segure a posição com os joelhos pressionados por 5 segundos para aprofundar o alongamento.",
      image: "https://www.appmetodoog.com/images/treinos/TreinoA/Exercicio1.png"
    },
    {
      name: "Avanço de Quadril",
      series: "3 séries cada perna",
      reps: "Segurar 20 segundos",
      description: "Fique em pé e dê um passo largo à frente com a perna direita. Flexione o joelho da frente em 90° e mantenha a perna de trás estendida, com o calcanhar levantado. Empurre o quadril para baixo até sentir o alongamento na virilha e parte frontal da coxa. Mantenha o tronco ereto e olhe para a frente.",
      tip: "Para intensificar o alongamento do flexor do quadril, eleve o braço do mesmo lado da perna de trás acima da cabeça e incline levemente o tronco para o lado oposto.",
      image: "https://www.appmetodoog.com/images/treinos/TreinoA/Exercicio3.png"
    },
    {
      name: "Flexão de Joelhos ao Peito",
      series: "3 séries",
      reps: "10 repetições",
      description: "Deite de costas próximo a uma parede, com os pés apoiados verticalmente. Segure as pernas flexionadas a 90° e puxe suavemente os joelhos em direção ao peito. Volte ao ponto inicial mantendo o controle.",
      tip: "Mantenha a lombar encostada no chão o tempo todo. Se sentir tensão excessiva, apoie uma toalha ou almofada sob a região lombar.",
      image: "https://www.appmetodoog.com/images/treinos/TreinoA/Exercicio4.png"
    },
    {
      name: "Elevação de Quadril – Ponte",
      series: "3 séries",
      reps: "12 repetições",
      description: "Deite-se de costas, joelhos flexionados e pés apoiados no chão na largura do quadril. Eleve o quadril até formar uma linha reta dos ombros aos joelhos. Segure 1 segundo no topo e desça controladamente.",
      tip: "Concentre-se em contrair bem os glúteos na subida e mantenha o abdômen firme para proteger a lombar.",
      image: "https://www.appmetodoog.com/images/treinos/TreinoA/Exercicio5.png"
    },
    {
      name: "Flexão Total dos Joelhos",
      series: "2 séries",
      reps: "30 segundos",
      description: "Ajoelhe-se no chão e sente-se sobre os calcanhares (“posição de seiza”). Mantenha o tronco ereto ou incline-o levemente à frente para variar a sensação. Segure por 30 segundos, respirando profundamente.",
      tip: "Use um colchonete grosso ou uma toalha dobrada sob os joelhos se sentir desconforto excessivo.",
      image: "https://www.appmetodoog.com/images/treinos/TreinoA/Exercicio6.png"
    },
    {
      name: "Abertura de Peitoral",
      series: "3 séries",
      reps: "30 segundos",
      description: "Fique em pé, mãos apoiadas na região lombar com os dedos voltados para baixo. Puxe os cotovelos para trás e abra o peito, projetando os ombros para trás. Mantenha a cervical neutra e respire fundo.",
      tip: "Dobre ligeiramente os joelhos para aliviar a tensão e evitar hiperlordose lombar durante o alongamento.",
      image: "https://www.appmetodoog.com/images/treinos/TreinoA/Exercicio7.png"
    },
    {
      name: "Postura da Criança",
      series: "2 séries",
      reps: "40 segundos",
      description: "Ajoelhe-se e sente-se sobre os calcanhares. Incline o tronco para frente, estendendo os braços à frente ou ao lado do corpo. Leve a testa até o chão e relaxe o pescoço.",
      tip: "Se a testa não alcançar o chão, apoie-a em um bloco ou almofada para relaxar completamente a coluna.",
      image: "https://www.appmetodoog.com/images/treinos/TreinoA/Exercicio8.png"
    },
    {
      name: "Extensão Lombar",
      series: "3 séries",
      reps: "15 repetições",
      description: "Deite-se de bruços, com as mãos ao lado da cabeça ou cruzadas sobre o peito. Eleve o tronco do chão, mantendo o pescoço alinhado com a coluna. Desça lentamente até quase tocar o chão.",
      tip: "Mantenha a ativação dos músculos abdominais durante todo o movimento para evitar sobrecarga na região lombar.",
      image: "https://www.appmetodoog.com/images/treinos/TreinoA/Exercicio8.png"
    }
  ];

  const workoutBExercises: Exercise[] = [
    {
      name: "Alongamento Ombros para Cima",
      series: "3 séries",
      reps: "30 segundos",
      description: "Fique em pé ou sentado com coluna ereta. Eleve ambos os ombros em direção às orelhas, segure por 2 segundos e solte abruptamente, deixando-os cair e sentir o alongamento nos trapézios.",
      tip: "Mantenha o pescoço relaxado e respire fundo a cada elevação e queda, sem forçar além do conforto.",
      image: "https://www.appmetodoog.com/images/treinos/TreinoB/Exercicio1.png"
    },
    {
      name: "Inclinação Lateral em Pé",
      series: "3 séries",
      reps: "20 segundos cada lado",
      description: "Fique em pé com os pés na largura dos ombros. Estenda o braço direito acima da cabeça e, mantendo o quadril estável, incline o tronco para a esquerda até sentir o alongamento no lado direito. Segure e repita do outro lado.",
      tip: "Não desloque o quadril para o lado; mantenha-o firme, e segure o final do movimento com respirações longas.",
      image: "https://www.appmetodoog.com/images/treinos/TreinoB/Exercicio2.png"
    },
    {
      name: "Avanço de Quadril Profundo",
      series: "3 séries cada perna",
      reps: "Segurar 20 segundos",
      description: "Dê um grande passo à frente com a perna direita e flexione ambos os joelhos até 90°. Abaixe o quadril o máximo possível sem curvar a coluna. Segure e repita com a outra perna.",
      tip: "Apoie o joelho de trás em um colchonete se houver desconforto, e mantenha o tronco ereto para proteger a lombar.",
      image: "https://www.appmetodoog.com/images/treinos/TreinoB/Exercicio3.png"
    },
    {
      name: "Rotação Toráxica em Prancha",
      series: "3 séries",
      reps: "15 repetições cada lado",
      description: "Posicione-se em prancha alta. Gire o tronco para a direita, abrindo o braço direito ao teto e olhando para a mão. Volte ao centro e repita para o lado esquerdo.",
      tip: "Concentre-se em manter o quadril estável e o abdômen contraído para evitar balanços.",
      image: "https://www.appmetodoog.com/images/treinos/TreinoB/Exercicio4.png"
    },
    {
      name: "Triângulo Lateral",
      series: "3 séries",
      reps: "20 segundos cada lado",
      description: "Afaste as pernas, gire o pé direito 90°. Estenda o braço direito para o chão, apoiando-o em um bloco se necessário, e o esquerdo para o teto, alinhando ombros. Segure e troque de lado.",
      tip: "Não force tocar o solo; use um suporte para manter a coluna alongada e o peito aberto.",
      image: "https://www.appmetodoog.com/images/treinos/TreinoB/Exercicio5.png"
    },
    {
      name: "Agachamento Profundo",
      series: "3 séries",
      reps: "30 segundos",
      description: "Fique em pé, pés além da largura dos ombros e dedos apontados para fora. Agache empurrando os quadris para trás e para baixo até abaixo do paralelo, mantendo o peito ereto.",
      tip: "Mantenha os calcanhares firmes no chão; se necessário, coloque um pequeno calço sob os calcanhares.",
      image: "https://www.appmetodoog.com/images/treinos/TreinoB/Exercicio6.png"
    },
    {
      name: "Prancha Cotovelo",
      series: "3 séries",
      reps: "40 segundos",
      description: "De bruços, apoie os antebraços no chão com cotovelos alinhados aos ombros. Eleve o corpo formando uma linha reta dos ombros aos calcanhares e segure.",
      tip: "Evite elevar demais o quadril ou deixá-lo cair; ajuste apoiando os joelhos se for iniciante.",
      image: "https://www.appmetodoog.com/images/treinos/TreinoB/Exercicio7.png"
    },
    {
      name: "Extensão Cobra",
      series: "3 séries",
      reps: "10 repetições",
      description: "Deite-se de bruços com as mãos ao lado do peito. Empurre o tronco para cima, estendendo os braços até onde for confortável, mantendo a pelve em contato com o solo.",
      tip: "Abra o peito e afaste os ombros das orelhas, ativando as costas sem forçar o pescoço.",
      image: "https://www.appmetodoog.com/images/treinos/TreinoB/Exercicio8.png"
    },
    {
      name: "Posição de Pombo",
      series: "2 séries",
      reps: "30 segundos cada lado",
      description: "Comece em quatro apoios, leve o joelho direito à frente e ao lado da mão direita. Estenda a perna esquerda para trás e mantenha o quadril paralelo ao solo. Segure e troque de lado.",
      tip: "Se sentir pressão no joelho, coloque um colchonete sob o quadril e mantenha o tronco ereto.",
      image: "https://www.appmetodoog.com/images/treinos/TreinoB/Exercicio9.png"
    }
  ];

  const workoutCExercises: Exercise[] = [
    {
      name: "Elevação de Braços",
      series: "3 séries",
      reps: "20 segundos",
      description: "Fique em pé com os pés na largura dos ombros e braços estendidos ao lado do corpo. Eleve os braços lateralmente até a altura dos ombros, mantenha a posição por 20 segundos e abaixe de forma controlada.",
      tip: "Mantenha os ombros longe das orelhas e o abdômen contraído para estabilizar o tronco durante a elevação.",
      image: "https://www.appmetodoog.com/images/treinos/TreinoC/Exercicio1.png"
    },
    {
      name: "Alongamento de Braço Cruzado",
      series: "3 séries",
      reps: "20 segundos cada lado",
      description: "Estenda o braço direito à frente, paralelo ao chão. Use a mão esquerda para puxar o cotovelo direito em direção ao corpo até sentir o alongamento no ombro. Segure e repita do outro lado.",
      tip: "Mantenha o braço paralelo ao chão e evite elevar o ombro do lado alongado para não tensionar o trapézio.",
      image: "https://www.appmetodoog.com/images/treinos/TreinoC/Exercicio2.png"
    },
    {
      name: "Rotação de Braço",
      series: "3 séries",
      reps: "15 repetições",
      description: "Fique em pé com os braços estendidos lateralmente. Faça círculos amplos para frente durante 15 repetições, depois inverta o sentido e repita.",
      tip: "Controle o movimento, mantendo o tronco estável e os ombros relaxados para proteger as articulações.",
      image: "https://www.appmetodoog.com/images/treinos/TreinoC/Exercicio3.png"
    },
    {
      name: "Tríceps Atrás da Cabeça",
      series: "3 séries",
      reps: "20 segundos",
      description: "Fique em pé ou sente-se com coluna ereta. Eleve o braço direito, dobre o cotovelo atrás da cabeça e segure o cotovelo com a mão esquerda, puxando suavemente. Segure e troque de lado.",
      tip: "Mantenha o tronco alinhado e evite inclinar o pescoço para frente.",
      image: "https://www.appmetodoog.com/images/treinos/TreinoC/Exercicio4.png"
    },
    {
      name: "Inclinação da Cervical",
      series: "3 séries",
      reps: "20 segundos cada lado",
      description: "Sente-se ou fique em pé com postura ereta. Incline a cabeça para a direita, aproximando a orelha do ombro sem elevar o ombro oposto. Use a mão direita para aplicar leve pressão. Segure e troque de lado.",
      tip: "Mantenha os ombros nivelados e olhe para frente, evitando circular o pescoço.",
      image: "https://www.appmetodoog.com/images/treinos/TreinoC/Exercicio5.png"
    },
    {
      name: "Alongamento de Antebraço",
      series: "3 séries",
      reps: "15 segundos cada braço",
      description: "Estenda o braço direito à frente com palma voltada para cima. Com a outra mão, puxe suavemente os dedos para baixo até sentir o alongamento no antebraço. Segure e troque de lado.",
      tip: "Mantenha o cotovelo estendido e ombros relaxados; não force além do limite de conforto.",
      image: "https://www.appmetodoog.com/images/treinos/TreinoC/Exercicio6.png"
    },
    {
      name: "Flexão Frontal",
      series: "3 séries",
      reps: "20 segundos",
      description: "Assuma a posição de prancha alta, mãos alinhadas aos ombros e corpo reto. Segure isometricamente por 20 segundos, mantendo o abdômen firme e quadril alinhado.",
      tip: "Evite elevar ou baixar demais o quadril; se precisar, apoie os joelhos para diminuir a carga.",
      image: "https://www.appmetodoog.com/images/treinos/TreinoC/Exercicio7.png"
    },
    {
      name: "Inclinação Lateral",
      series: "3 séries",
      reps: "20 segundos cada lado",
      description: "Fique em pé com os braços ao lado do corpo. Eleve o braço direito acima da cabeça e incline o tronco para a esquerda até sentir o alongamento no flanco direito. Segure e repita para o outro lado.",
      tip: "Mantenha os quadris estáveis e evite girar o tronco para preservar a coluna.",
      image: "https://www.appmetodoog.com/images/treinos/TreinoC/Exercicio8.png"
    },
    {
      name: "Alongamento de Quadríceps",
      series: "3 séries",
      reps: "20 segundos cada perna",
      description: "Fique em pé apoiado em uma parede. Dobre o joelho direito, segure o pé direito com a mão e aproxime o calcanhar do glúteo. Mantenha os joelhos juntos. Segure e troque de lado.",
      tip: "Mantenha o tronco ereto e evite projetar os joelhos à frente dos pés para não sobrecarregar a articulação.",
      image: "https://www.appmetodoog.com/images/treinos/TreinoC/Exercicio9.png"
    },
    {
      name: "Panturrilha na Parede",
      series: "3 séries",
      reps: "15 segundos cada perna",
      description: "Fique de frente para a parede, mãos apoiadas. Dê um passo para trás com a perna direita, mantendo o calcanhar no chão e a perna estendida. Incline o corpo para frente até sentir o alongamento na panturrilha. Segure e troque de lado.",
      tip: "Mantenha o calcanhar firmemente no chão e o joelho traseiro estendido para maximizar o alongamento.",
      image: "https://www.appmetodoog.com/images/treinos/TreinoC/Exercicio10.png"
    }
  ];

  // Logic to determine current workout data
  const currentExercises = activeWorkout === 'A' ? workoutAExercises : (activeWorkout === 'B' ? workoutBExercises : (activeWorkout === 'C' ? workoutCExercises : []));
  
  const getWorkoutDetails = (id: string) => {
    if (id === 'A') return { title: "Descompressão Vertebral", duration: "15-20 min", intensity: "Baixa/Mod" };
    if (id === 'B') return { title: "Reativação e Postura", duration: "20-25 min", intensity: "Baixa/Mod" };
    if (id === 'C') return { title: "Fixação e Equilíbrio", duration: "15-20 min", intensity: "Baixa/Mod" };
    return { title: "", duration: "", intensity: "" };
  };

  const details = activeWorkout ? getWorkoutDetails(activeWorkout) : null;

  return (
    <div className="pb-24 animate-fade-in relative">
      <div className="mb-8 text-center">
        <h2 className="text-2xl font-bold text-white mb-2 flex items-center justify-center gap-2">
          Seus Treinos <span className="text-yellow-500">💪</span>
        </h2>
        <p className="text-gray-400 text-sm">
          Exercícios para desbloquear sua altura
        </p>
      </div>

      {/* Featured Card */}
      <div className="bg-neutral-900 rounded-3xl p-8 border border-neutral-800 text-center mb-8 relative overflow-hidden group">
        <div className="absolute top-0 right-0 p-4 opacity-10">
          <Dumbbell className="w-32 h-32 text-white" />
        </div>
        
        <div className="flex justify-center mb-4">
           <div className="text-6xl">💪</div>
        </div>
        
        <h3 className="text-white font-bold text-lg mb-2">Seus Exercícios de Crescimento</h3>
        <p className="text-gray-400 text-sm mb-6 leading-relaxed">
          Aqui você vai ter acesso aos seus exercícios para crescimento personalizável.
        </p>
        
        <button className="w-full py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl shadow-lg shadow-red-900/30 transition-all active:scale-95 uppercase text-sm tracking-wide">
          Ver Como Funcionará
        </button>
      </div>

      {/* Workout List */}
      <div className="space-y-4">
        {[
          { 
            id: 'A',
            title: "Treino A - Descompressão", 
            desc: "Exercícios para liberar pressão dos discos", 
            color: "bg-red-500" 
          },
          { 
            id: 'B',
            title: "Treino B - Reativação", 
            desc: "Estimular cartilagens de crescimento residuais e ativar hormônios anabólicos.", 
            color: "bg-red-500" 
          },
          { 
            id: 'C',
            title: "Treino C - Fixação", 
            desc: "Reprogramar o sistema nervoso e fixar ganhos posturais obtidos.", 
            color: "bg-red-500" 
          },
        ].map((workout, idx) => (
          <div 
            key={idx} 
            onClick={() => (workout.id === 'A' || workout.id === 'B' || workout.id === 'C') ? setActiveWorkout(workout.id) : null}
            className={`bg-neutral-900 rounded-2xl p-5 border border-neutral-800 flex items-start gap-4 transition-all cursor-pointer group hover:border-red-500 hover:bg-neutral-800`}
          >
            <div className="mt-1">
               <div className={`w-3 h-3 rounded-full ${workout.color} shadow-[0_0_10px_rgba(239,68,68,0.5)]`}></div>
            </div>
            <div>
              <h4 className="text-white font-bold mb-1 group-hover:text-red-500 transition-colors">{workout.title}</h4>
              <p className="text-gray-500 text-sm leading-relaxed">{workout.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Treino */}
      {activeWorkout && details && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/90 backdrop-blur-sm animate-fade-in" 
            onClick={() => setActiveWorkout(null)}
          ></div>

          {/* Modal Content */}
          <div className="relative bg-neutral-950 w-full max-w-lg h-[92vh] sm:h-[85vh] rounded-t-3xl sm:rounded-3xl border border-neutral-800 flex flex-col shadow-2xl animate-slide-up">
            
            {/* Header */}
            <div className="p-6 border-b border-neutral-800 flex justify-between items-start bg-neutral-900/50 rounded-t-3xl">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="bg-red-600 text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider">Treino {activeWorkout}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{details.title}</h3>
                <div className="flex gap-4 text-xs text-gray-400">
                  <div className="flex items-center gap-1">
                    <Clock size={14} className="text-red-500" />
                    <span>{details.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Zap size={14} className="text-yellow-500" />
                    <span>{details.intensity}</span>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setActiveWorkout(null)}
                className="p-2 bg-neutral-800 rounded-full text-gray-400 hover:text-white hover:bg-neutral-700 transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Scrollable List */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-hide">
              {currentExercises.map((ex, index) => (
                <div key={index} className="bg-neutral-900 rounded-2xl overflow-hidden border border-neutral-800">
                  {/* Image Area - UPDATED HEIGHT */}
                  <div className="w-full h-[500px] bg-neutral-800 relative group">
                    <img 
                      src={ex.image} 
                      alt={ex.name}
                      className="w-full h-full object-cover object-top opacity-90 group-hover:opacity-100 transition-opacity"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = 'https://via.placeholder.com/400x600/1a1a1a/ef4444?text=Grow+Max';
                      }}
                    />
                    <div className="absolute top-2 left-2 bg-black/60 backdrop-blur px-3 py-1 rounded-full border border-white/10">
                      <span className="text-white text-xs font-bold">#{index + 1}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <div className="flex justify-between items-start mb-3">
                      <h4 className="text-lg font-bold text-white">{ex.name}</h4>
                    </div>

                    <div className="flex gap-3 mb-4">
                      <div className="bg-neutral-800 px-3 py-1.5 rounded-lg border border-neutral-700">
                        <span className="text-xs text-gray-400 block">Séries</span>
                        <span className="text-sm font-bold text-red-500">{ex.series}</span>
                      </div>
                      <div className="bg-neutral-800 px-3 py-1.5 rounded-lg border border-neutral-700">
                        <span className="text-xs text-gray-400 block">Repetições</span>
                        <span className="text-sm font-bold text-white">{ex.reps}</span>
                      </div>
                    </div>

                    <p className="text-gray-400 text-sm leading-relaxed mb-4">
                      {ex.description}
                    </p>

                    <div className="bg-blue-900/10 border border-blue-900/30 rounded-xl p-3 flex gap-3">
                      <Info size={18} className="text-blue-500 shrink-0 mt-0.5" />
                      <p className="text-xs text-blue-200 leading-relaxed">
                        <span className="font-bold text-blue-400 block mb-1">Dica do Treinador:</span>
                        {ex.tip}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
              
              <div className="text-center py-4">
                 <button 
                  onClick={() => setActiveWorkout(null)}
                  className="px-8 py-3 bg-red-600 text-white font-bold rounded-xl shadow-lg shadow-red-900/20 active:scale-95 transition-transform flex items-center gap-2 mx-auto"
                 >
                   <CheckCircle2 size={20} />
                   Concluir Treino
                 </button>
              </div>
            </div>

          </div>
        </div>
      )}
    </div>
  );
};

export default WorkoutTab;