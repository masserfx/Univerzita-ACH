import { Course } from '../types';

export const pravidlaNabidek: Course = {
  id: 'nabidky-popis',
  title: 'Pravidla pro vytváření nabídek',
  description: 'Kompletní průvodce správným vytvářením a označováním nabídek v systému EVI',
  duration: '30 minut',
  level: 'beginner',
  tags: ['EVI', 'nabídky', 'pravidla', 'dokumentace'],
  modules: [
    {
      id: 'zakladni-pravidla',
      title: 'Základní pravidla',
      type: 'lesson',
      content: '# Základní pravidla pro nabídky\n\n## Klíčová pravidla\n\n### Povinné zásady:\n- Každá předaná cenová nabídka MUSÍ být vytvořená v Evidenci pod záložkou "Nabídky"\n- U každé nabídky musí být uvedeno, kdo ji vytvořil\n- Nabídka na FVE NESMÍ být pod zakázkou na TČ (musí mít samostatnou zakázku)\n\n### Varianty nabídek:\n- V Evidenci musí být vždy varianta <span style="color: #EF4444">"Základní"</span>:\n  - Zpracovaná dle kalkulátoru\n  - Vytvořená podle vzoru rozpočtu v EVI\n  - Bez příhozů a úprav\n- Z varianty <span style="color: #EF4444">"Základní"</span> vychází Technik <span style="color: #22C55E">pro nabídku po TP</span>\n- Příhozy se uvádějí ve formátu <span style="color: #3B82F6">"+XXtis"</span> <span style="color: #3B82F6">(částka bez DPH)</span>'
    },
    {
      id: 'oznacovani-nabidek',
      title: 'Správné označování nabídek',
      type: 'lesson',
      content: '# Správné označování nabídek\n\n## Povinné údaje\n\n<div class="my-4">\n  <img src="/documents/evi-manual/images/nabidky/nabidky-img-001.png" alt="Vytvoření nabídky" class="rounded-lg shadow-lg" />\n  <p class="text-sm text-gray-600 mt-2 text-center italic">Formulář pro vytvoření nabídky s povinnými poli</p>\n</div>\n\n### Pole "Popis":\n- Musí obsahovat popis kaskády\n- Vyplňuje se jasně a výstižně\n\n### Pole "Poznámka":\n- Obsahuje:\n  1. Kdo nabídku vytvořil\n  2. Kód nabídky, z jaké vycházel (pokud byla zkopírována)\n  3. Co s nabídkou udělal\n\n### Pole "Význam":\n- Označení <span style="color: #F97316">"K podpisu"</span> se používá pro nabídky určené k podpisu smlouvy\n\n### Důležitá upozornění:\n- Dodržujte přesně stanovený formát\n- Vyplňujte všechna povinná pole\n- Kontrolujte správnost údajů před uložením'
    }
  ]
}; 