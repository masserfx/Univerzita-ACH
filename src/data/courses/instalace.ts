import { Course } from '../types';

export const instalaceTepelnychCerpadel: Course = {
  id: 'instalace-tepelnych-cerpadel',
  title: 'Instalace tepelných čerpadel',
  description: 'Komplexní průvodce instalací tepelných čerpadel AC Heating',
  duration: '90 minut',
  level: 'intermediate',
  tags: ['instalace', 'tepelná čerpadla', 'technické postupy'],
  modules: [
    {
      id: 'priprava-instalace',
      title: 'Příprava instalace',
      type: 'lesson',
      content: '# Příprava instalace tepelného čerpadla\n\n## Kontrola místa instalace\n- Přístupnost a prostor\n- Podklad a ukotvení\n- Elektrické připojení\n- Hydraulické připojení\n\n## Potřebné nástroje a materiál\n- Seznam nářadí\n- Montážní materiál\n- Bezpečnostní prvky\n- Dokumentace'
    }
  ]
}; 