import { Course } from '../types';

export const zakazkyCourse: Course = {
  id: 'zakladani-zakazek',
  title: 'Zakládání nové zakázky v EVI',
  description: 'Kompletní průvodce procesem založení nové zakázky v systému EVI',
  duration: '30 minut',
  level: 'beginner',
  tags: ['EVI', 'zakázky', 'administrativa'],
  modules: [
    {
      id: 'nova-zakazka',
      title: 'Vytvoření nové zakázky',
      type: 'lesson',
      content: `# Vytvoření nové zakázky v EVI

## Přístup k formuláři nové zakázky

<div class="my-4">
  <img src="/documents/evi-manual/images/zakazky/zakazky-img-001.png" alt="Menu zakázek" class="rounded-lg shadow-lg" />
  <p class="text-sm text-gray-600 mt-2 text-center italic">Hlavní menu systému EVI s vyznačenou položkou Zakázky</p>
</div>

1. V hlavním menu klikněte na položku "Zakázky"
2. V horní části obrazovky klikněte na tlačítko "Nová zakázka"

## Vyplnění základních údajů

<div class="my-4">
  <img src="/documents/evi-manual/images/zakazky/zakazky-img-002.png" alt="Formulář nové zakázky" class="rounded-lg shadow-lg" />
  <p class="text-sm text-gray-600 mt-2 text-center italic">Formulář pro vytvoření nové zakázky</p>
</div>

### Povinné údaje:
- Název zakázky
- Zákazník
- Typ zakázky
- Stav zakázky

### Volitelné údaje:
- Poznámka
- Přílohy
- Související kontakty

## Pravidla pro vyplňování

### Název zakázky
- Musí být jedinečný
- Měl by být výstižný a jasný
- Doporučený formát: "Lokalita - Typ zakázky"
  Příklad: "Plzeň - TČ pro BD"

### Výběr zákazníka
1. Klikněte na tlačítko lupy vedle pole "Zákazník"
2. Vyhledejte zákazníka podle názvu nebo IČO
3. Pokud zákazník neexistuje, vytvořte nový kontakt

### Typ zakázky
Vyberte jeden z předdefinovaných typů:
- Tepelné čerpadlo
- Fotovoltaika
- Servis
- Ostatní

### Stav zakázky
Výchozí stav je "Nová", další možnosti:
- V realizaci
- Dokončená
- Zrušená

## Uložení zakázky

<div class="my-4">
  <img src="/documents/evi-manual/images/zakazky/zakazky-img-003.png" alt="Tlačítka pro uložení" class="rounded-lg shadow-lg" />
  <p class="text-sm text-gray-600 mt-2 text-center italic">Tlačítka pro uložení nebo zrušení zakázky</p>
</div>

1. Zkontrolujte všechny vyplněné údaje
2. Klikněte na tlačítko "Uložit"
3. Systém potvrdí vytvoření zakázky
4. Nová zakázka se zobrazí v seznamu zakázek

## Důležitá upozornění

<span style="color: #FF0000;">POZOR!</span>
- Každá zakázka musí mít jedinečný název
- Nelze mít FVE pod zakázkou na TČ
- Vždy vyplňte všechny povinné údaje
- Před uložením dvakrát zkontrolujte správnost údajů`
    }
  ]
}; 