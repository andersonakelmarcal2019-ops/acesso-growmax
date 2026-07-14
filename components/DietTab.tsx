import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Download, FileText } from 'lucide-react';
import { jsPDF } from "jspdf";

interface DietPlan {
  level: number;
  calories: string;
  macros: string;
  details: string[];
}

const DietTab: React.FC = () => {
  const [expandedLevel, setExpandedLevel] = useState<number | null>(null);

  // Data extracted from user screenshots (Level 1-10)
  const dietPlans: DietPlan[] = [
    { level: 1, calories: "2400kcal", macros: "Carb: 260g | Prot: 160g | Gord: 70-80g", details: ["Café da manhã: Pão com ovos mexidos e frutas ou Mingau de aveia.", "Almoço: Arroz (200g), Proteína (150g), Salada à vontade.", "Lanche: Vitamina de banana com Whey.", "Jantar: Repetição do almoço ou opção leve.", "Bebidas: Água (3L), Sucos naturais."] },
    { level: 2, calories: "2600kcal", macros: "Carb: 300g | Prot: 170g | Gord: 70-80g", details: ["Aumento de carboidratos para ganho de volume.", "Manter pesagem a cada 2 semanas.", "Almoço reforçado com 280g de arroz.", "Sobremesas controladas (Paçoca, chocolate amargo)."] },
    { level: 3, calories: "2800kcal", macros: "Carb: 340g | Prot: 180g | Gord: 70-80g", details: ["Foco em bater 2800kcal limpas.", "Pré-treino sólido obrigatório.", "Opção de mingau com pasta de amendoim.", "Hidratação crucial para absorção de creatina."] },
    { level: 4, calories: "3000kcal", macros: "Carb: 380g | Prot: 200g | Gord: 70-80g", details: ["Entrando em superávit calórico médio.", "400g de batata doce no pré-treino.", "Uso estratégico de doce de leite.", "Refeições livres: Até 2 por semana."] },
    { level: 5, calories: "3200kcal", macros: "Carb: 420g | Prot: 200g | Gord: 70-80g", details: ["Aumento de volume nas refeições principais.", "Arroz/Macarrão aumentados para 360g no almoço.", "Lanches líquidos para facilitar ingestão.", "Azeite de oliva extra para gorduras boas."] },
    { level: 6, calories: "3400kcal", macros: "Carb: 450g | Prot: 200g | Gord: 80-90g", details: ["Consistência é chave.", "Refeições líquidas como vitaminas reforçadas.", "Mingau de aveia com 70g de aveia.", "Sono de 7-9h essencial para recuperação."] },
    { level: 7, calories: "3600kcal", macros: "Carb: 480g | Prot: 200g | Gord: 90-100g", details: ["Calorias altas: comer sem fome se necessário.", "Hipercalórico caseiro pode ajudar.", "Refeições densas energeticamente.", "Monitorar ganho de gordura abdominal."] },
    { level: 8, calories: "4000kcal", macros: "Carb: 560g | Prot: 200g | Gord: 90-100g", details: ["Nível avançado de Bulking.", "Crepioca de queijo com 3 ovos.", "Vitamina de banana reforçada com leite em pó.", "Arroz (440g) no almoço e jantar."] },
    { level: 9, calories: "4500kcal", macros: "Carb: 640g | Prot: 230g | Gord: 100-120g", details: ["Bulking Pesado.", "Farinha de mandioca adicionada para calorias.", "Proteínas altas (230g) para síntese muscular.", "Fracionar bem as refeições durante o dia."] },
    { level: 10, calories: "5000kcal", macros: "Carb: 740g | Prot: 230g | Gord: 130g", details: ["Nível Extreme - Grow Max.", "Máximo potencial de ganho.", "Vitamina reforçada com 300g de bananas.", "Uso de hipercalóricos e refeições líquidas.", "Treino intenso obrigatório para não ganhar só gordura."] },
  ];

  const toggleLevel = (lvl: number) => {
    if (expandedLevel === lvl) {
      setExpandedLevel(null);
    } else {
      setExpandedLevel(lvl);
    }
  };

  const handleDownload = (plan: DietPlan) => {
    const doc = new jsPDF();

    // Background header
    doc.setFillColor(10, 10, 10);
    doc.rect(0, 0, 210, 40, 'F');

    // Logo
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(22);
    doc.text("Grow", 85, 25);
    doc.setTextColor(220, 38, 38); // Red
    doc.text("Max", 112, 25);

    // Title
    doc.setTextColor(0, 0, 0);
    doc.setFontSize(20);
    doc.text(`Protocolo Bulking - Nível ${plan.level}`, 105, 60, { align: "center" });

    // Stats Box
    doc.setDrawColor(200, 200, 200);
    doc.setFillColor(245, 245, 245);
    doc.roundedRect(30, 70, 150, 30, 3, 3, 'FD');
    
    doc.setFontSize(14);
    doc.setTextColor(50, 50, 50);
    doc.text(`Calorias Totais: ${plan.calories}`, 105, 82, { align: "center" });
    doc.setFontSize(12);
    doc.setTextColor(220, 38, 38);
    doc.text(plan.macros, 105, 92, { align: "center" });

    // Content
    doc.setTextColor(0, 0, 0);
    doc.setFontSize(16);
    doc.text("Resumo e Orientações:", 20, 120);

    let yPos = 135;
    doc.setFontSize(12);
    doc.setTextColor(60, 60, 60);

    plan.details.forEach((detail) => {
      const lines = doc.splitTextToSize(`• ${detail}`, 170);
      doc.text(lines, 20, yPos);
      yPos += (7 * lines.length) + 5;
    });

    // Footer
    doc.setFontSize(10);
    doc.setTextColor(150, 150, 150);
    doc.text("Grow Max App - Material exclusivo.", 105, 280, { align: "center" });

    doc.save(`GrowMax_Nivel_${plan.level}.pdf`);
  };

  return (
    <div className="pb-24 animate-fade-in">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-white mb-2">Protocolo Bulking</h2>
        <p className="text-gray-400 text-sm">
          Selecione seu nível atual. Todos os protocolos desbloqueados.
        </p>
      </div>

      <div className="space-y-4">
        {dietPlans.map((item) => (
          <div 
            key={item.level} 
            className="bg-neutral-900 rounded-2xl overflow-hidden border border-neutral-800 transition-all hover:border-neutral-700"
          >
            <button 
              onClick={() => toggleLevel(item.level)}
              className="w-full p-5 flex items-center justify-between text-left"
            >
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-bold text-white text-lg">Nível {item.level}</span>
                  <span className="text-xs bg-red-900/30 text-red-500 px-2 py-0.5 rounded border border-red-900/50 font-mono">
                    {item.calories}
                  </span>
                </div>
                <span className="text-xs text-gray-400 block">
                  {item.macros}
                </span>
              </div>
              {expandedLevel === item.level ? <ChevronUp className="text-white" /> : <ChevronDown className="text-gray-500" />}
            </button>

            {/* Accordion Content */}
            {expandedLevel === item.level && (
              <div className="px-5 pb-5 pt-0">
                <div className="h-px w-full bg-neutral-800 mb-4" />
                
                <div className="mb-4">
                  <h4 className="text-white font-semibold mb-2 text-sm flex items-center gap-2">
                    <FileText size={14} className="text-red-500" /> Resumo do Plano:
                  </h4>
                  <ul className="space-y-2 mb-4">
                    {item.details.map((detail, idx) => (
                      <li key={idx} className="text-gray-300 text-sm flex items-start gap-2">
                        <span className="text-neutral-600 mt-1">•</span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>

                <button 
                  onClick={() => handleDownload(item)}
                  className="w-full py-3 bg-white text-black font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-gray-200 transition-colors active:scale-[0.98]"
                >
                  <Download size={18} />
                  Baixar PDF do Nível {item.level}
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DietTab;