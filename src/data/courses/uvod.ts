import { Course } from '../types';

export const uvodDoACHeating: Course = {
  id: 'uvod-do-ac-heating',
  title: 'Úvod do AC Heating',
  description: 'Základní seznámení se společností AC Heating, její historií, vizí a firemní kulturou.',
  duration: '45 minut',
  level: 'beginner',
  tags: ['AC Heating', 'firemní kultura', 'historie', 'onboarding'],
  modules: [
    {
      id: 'vize-a-historie',
      title: 'Vize a historie společnosti',
      type: 'lesson',
      content: `# Vize a historie AC Heating

## Vize společnosti
- Být lídrem v oblasti tepelných čerpadel
- Poskytovat nejlepší řešení pro vytápění
- Přispívat k udržitelné budoucnosti

## Historie společnosti
- Založení v roce 2006
- Klíčové milníky vývoje
- Významné projekty a úspěchy

## Hodnoty společnosti
1. Inovace a kvalita
2. Spokojenost zákazníků
3. Profesionalita
4. Udržitelnost
5. Týmová spolupráce`
    },
    {
      id: 'produkty-a-sluzby',
      title: 'Produkty a služby',
      type: 'lesson',
      content: `# Produkty a služby AC Heating

## Tepelná čerpadla
- Typy a modely
- Technické specifikace
- Výhody a přednosti

## Služby
1. Návrh řešení
2. Instalace
3. Servis a údržba
4. Zákaznická podpora

## Cílové skupiny
- Rodinné domy
- Bytové domy
- Komerční objekty`
    },
    {
      id: 'firemni-kultura',
      title: 'Firemní kultura',
      type: 'lesson',
      content: `# Firemní kultura AC Heating

## Základní principy
1. Otevřená komunikace
2. Vzájemný respekt
3. Profesionální přístup
4. Kontinuální vzdělávání

## Pracovní prostředí
- Moderní zázemí
- Flexibilní pracovní doba
- Podpora osobního rozvoje

## Týmová spolupráce
- Pravidelné porady
- Sdílení znalostí
- Společné aktivity`
    }
  ]
}; 