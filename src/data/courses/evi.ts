import { Course } from '../types';

export const eviSystem: Course = {
  id: 'evi-system',
  title: 'Systém EVI',
  description: 'Kompletní průvodce systémem EVI pro správu zakázek a nabídek',
  duration: '2 hodiny',
  level: 'beginner',
  tags: ['EVI', 'systém', 'zakázky', 'nabídky', 'administrativa', 'školení'],
  modules: [
    {
      id: 'uvod-do-evi',
      title: 'Úvod do systému EVI',
      type: 'lesson',
      content: `# Úvod do systému EVI

## Co je EVI?

EVI je komplexní systém pro správu:
- Zakázek
- Nabídek
- Dokumentů
- Kontaktů
- Kalendáře

## Přihlášení do systému

<div class="my-4">
  <img src="/documents/evi-manual/images/evi-img-001.png" alt="Přihlášení do EVI" class="rounded-lg shadow-lg" />
  <p class="text-sm text-gray-600 mt-2 text-center italic">Přihlašovací obrazovka systému EVI</p>
</div>

### Postup přihlášení:
1. Otevřete webový prohlížeč
2. Zadejte adresu systému EVI
3. Vyplňte přihlašovací údaje:
   - Uživatelské jméno
   - Heslo
4. Klikněte na tlačítko "Přihlásit"

## Hlavní menu

<div class="my-4">
  <img src="/documents/evi-manual/images/evi-img-002.png" alt="Hlavní menu EVI" class="rounded-lg shadow-lg" />
  <p class="text-sm text-gray-600 mt-2 text-center italic">Hlavní navigační menu systému EVI</p>
</div>

### Základní sekce:
- Zakázky
- Nabídky
- Kontakty
- Kalendář
- Dokumenty
- Nastavení`
    },
    {
      id: 'zakazky',
      title: 'Práce se zakázkami',
      type: 'lesson',
      content: `# Práce se zakázkami

## Vytvoření nové zakázky

<div class="my-4">
  <img src="/documents/evi-manual/images/evi-img-003.png" alt="Vytvoření zakázky" class="rounded-lg shadow-lg" />
  <p class="text-sm text-gray-600 mt-2 text-center italic">Formulář pro vytvoření nové zakázky</p>
</div>

### Povinné údaje:
1. Název zakázky
2. Zákazník
3. Typ zakázky
4. Stav zakázky

### Volitelné údaje:
- Poznámka
- Přílohy
- Související kontakty

## Správa zakázek

### Filtry a vyhledávání:
- Podle stavu
- Podle typu
- Podle zákazníka
- Podle data

### Akce se zakázkou:
- Úprava údajů
- Přidání dokumentů
- Změna stavu
- Přiřazení kontaktů`
    },
    {
      id: 'nabidky',
      title: 'Správa nabídek',
      type: 'lesson',
      content: `# Správa nabídek

## Vytvoření nabídky

<div class="my-4">
  <img src="/documents/evi-manual/images/evi-img-004.png" alt="Vytvoření nabídky" class="rounded-lg shadow-lg" />
  <p class="text-sm text-gray-600 mt-2 text-center italic">Formulář pro vytvoření nové nabídky</p>
</div>

### Postup vytvoření:
1. Otevřete sekci Nabídky
2. Klikněte na "Nová nabídka"
3. Vyplňte povinné údaje:
   - Název
   - Zákazník
   - Typ nabídky
4. Přidejte položky nabídky
5. Uložte nabídku

## Práce s nabídkami

### Dostupné akce:
- Úprava nabídky
- Kopírování nabídky
- Export do PDF
- Odeslání zákazníkovi

### Sledování stavu:
- Vytvořeno
- Odesláno
- Schváleno
- Zamítnuto`
    },
    {
      id: 'kontakty',
      title: 'Evidence kontaktů',
      type: 'lesson',
      content: `# Evidence kontaktů

## Správa kontaktů

<div class="my-4">
  <img src="/documents/evi-manual/images/evi-img-005.png" alt="Seznam kontaktů" class="rounded-lg shadow-lg" />
  <p class="text-sm text-gray-600 mt-2 text-center italic">Seznam kontaktů v systému EVI</p>
</div>

### Typy kontaktů:
- Zákazníci
- Dodavatelé
- Zaměstnanci
- Partneři

### Údaje o kontaktu:
- Základní informace
- Kontaktní údaje
- Historie komunikace
- Související zakázky

## Vyhledávání a filtry

### Možnosti filtrace:
- Podle typu
- Podle oblasti
- Podle aktivity
- Podle stavu

### Pokročilé vyhledávání:
- Fulltextové
- Podle parametrů
- Podle historie`
    },
    {
      id: 'dokumenty',
      title: 'Správa dokumentů',
      type: 'lesson',
      content: `# Správa dokumentů

## Práce s dokumenty

<div class="my-4">
  <img src="/documents/evi-manual/images/evi-img-006.png" alt="Správa dokumentů" class="rounded-lg shadow-lg" />
  <p class="text-sm text-gray-600 mt-2 text-center italic">Sekce pro správu dokumentů v systému EVI</p>
</div>

### Typy dokumentů:
- Smlouvy
- Nabídky
- Faktury
- Technická dokumentace
- Fotografie

### Organizace dokumentů:
- Složky
- Štítky
- Kategorie
- Verze

## Práce s dokumenty

### Základní operace:
- Nahrávání
- Stahování
- Sdílení
- Archivace

### Pokročilé funkce:
- Verzování
- Historie změn
- Oprávnění
- Workflow`
    }
  ]
}; 