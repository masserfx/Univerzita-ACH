import { Course } from '../types';

export const eviSystem: Course = {
  id: 'evi-system',
  title: 'Práce s EVI systémem',
  description: 'Komplexní průvodce pro práci s interním systémem EVI - od základů až po pokročilé funkce',
  duration: '120 minut',
  level: 'beginner',
  tags: ['EVI', 'systém', 'zakázky', 'nabídky', 'administrativa', 'školení'],
  modules: [
    {
      id: 'uvod-do-evi',
      title: 'Úvod do systému EVI',
      content: `# Úvod do systému EVI

EVI je klíčový interní systém AC Heating pro komplexní správu zakázek, nabídek a administrativy.

## Přihlášení a základní orientace
- Přístup do systému přes webové rozhraní
- Bezpečnostní pravidla a správa hesla
- Struktura hlavního menu a navigace
- Přehled dostupných modulů a funkcí

## Uživatelské rozhraní
- Hlavní ovládací panel
- Rychlé akce a oblíbené položky
- Vyhledávání a filtry
- Nastavení zobrazení a personalizace

## Základní funkce
- Práce se seznamy a tabulkami
- Vytváření a úprava záznamů
- Správa dokumentů a příloh
- Export dat a tisk sestav`
    },
    {
      id: 'zakladani-nove-zakazky',
      title: 'Zakládání nové zakázky',
      content: `# Zakládání nové zakázky

## Zahájení procesu
1. Na hlavní straně Evidence klikněte na tlačítko "+"

<div class="my-4">
  <img src="/documents/evi-manual/images/zakazky/zakazky-img-001.jpg" 
       alt="Hlavní strana Evidence" 
       title="zakazky-img-001.jpg"
       class="rounded-lg shadow-lg" />
  <p class="text-sm text-gray-600 mt-2 text-center italic">Hlavní strana Evidence s tlačítkem pro založení nové zakázky</p>
</div>

## Ověření zákazníka
1. Nejprve vyplňte IČO pro ověření, zda je zákazník již evidován

<div class="my-4">
  <img src="/documents/evi-manual/images/zakazky/zakazky-img-002.jpg" 
       alt="Ověření IČO" 
       title="zakazky-img-002.jpg"
       class="rounded-lg shadow-lg" />
  <p class="text-sm text-gray-600 mt-2 text-center italic">Formulář pro ověření IČO zákazníka</p>
</div>

2. Pokud je zákazník evidován, zobrazí se varovné okno s informacemi:
   - Číslo existující zakázky
   - Odpovědná osoba
   - Aktuální stav zakázky

<div class="my-4">
  <img src="/documents/evi-manual/images/zakazky/zakazky-img-003.jpg" 
       alt="Kontaktní údaje" 
       title="zakazky-img-003.jpg"
       class="rounded-lg shadow-lg" />
  <p class="text-sm text-gray-600 mt-2 text-center italic">Formulář pro vyplnění kontaktních údajů</p>
</div>

## Vyplnění kontaktních údajů
1. Pokud nebyl zákazník nalezen, pokračujte vyplněním kontaktních údajů

<div class="my-4">
  <img src="/documents/evi-manual/images/zakazky/zakazky-img-004.jpg" 
       alt="Založení zakázky" 
       title="zakazky-img-004.jpg"
       class="rounded-lg shadow-lg" />
  <p class="text-sm text-gray-600 mt-2 text-center italic">Formulář pro založení nové zakázky</p>
</div>

2. V případě existujícího zákazníka můžete údaje doplnit nebo aktualizovat
3. Pro nový kontakt použijte tlačítko "Nový kontakt"

<div class="my-4">
  <img src="/documents/evi-manual/images/zakazky/zakazky-img-005.jpg" 
       alt="Záložka komunikace" 
       title="zakazky-img-005.jpg"
       class="rounded-lg shadow-lg" />
  <p class="text-sm text-gray-600 mt-2 text-center italic">Sekce pro správu komunikace</p>
</div>

<div class="my-4">
  <img src="/documents/evi-manual/images/zakazky/zakazky-img-006.jpg" 
       alt="Nový kontakt" 
       title="zakazky-img-006.jpg"
       class="rounded-lg shadow-lg" />
  <p class="text-sm text-gray-600 mt-2 text-center italic">Formulář pro vytvoření nového kontaktu</p>
</div>

<div class="my-4">
  <img src="/documents/evi-manual/images/zakazky/zakazky-img-007.jpg" 
       alt="Struktura složek" 
       title="zakazky-img-007.jpg"
       class="rounded-lg shadow-lg" />
  <p class="text-sm text-gray-600 mt-2 text-center italic">Přehled kontaktů a jejich správa</p>
</div>

## Založení zakázky
1. Pokud bylo na hlavní straně zaškrtnuto "založit novou zakázku", doplňte pouze zbývající údaje

2. V opačném případě založte novou zakázku ručně

<div class="my-4">
  <img src="/documents/evi-manual/images/zakazky/zakazky-img-008.jpg" 
       alt="Ruční založení zakázky" 
       title="zakazky-img-008.jpg"
       class="rounded-lg shadow-lg" />
  <p class="text-sm text-gray-600 mt-2 text-center italic">Formulář pro ruční založení nové zakázky</p>
</div>

3. Pro FVE vždy zakládejte samostatnou zakázku

<div class="my-4">
  <img src="/documents/evi-manual/images/zakazky/zakazky-img-009.jpg" 
       alt="Založení FVE zakázky" 
       title="zakazky-img-009.jpg"
       class="rounded-lg shadow-lg" />
  <p class="text-sm text-gray-600 mt-2 text-center italic">Formulář pro založení samostatné FVE zakázky</p>
</div>

### Důležité upozornění pro FVE
- Zakázka na FVE musí mít vlastní číslo
- Název zakázky musí být stejný jako u TČ + dodatek "FVE"
- Adresa musí být shodná s původní zakázkou

<div class="my-4">
  <img src="/documents/evi-manual/images/zakazky/zakazky-img-010.jpg" 
       alt="Adresa FVE zakázky" 
       title="zakazky-img-010.jpg"
       class="rounded-lg shadow-lg" />
  <p class="text-sm text-gray-600 mt-2 text-center italic">Kontrola shodnosti adresy s původní zakázkou</p>
</div>

<div class="my-4">
  <img src="/documents/evi-manual/images/zakazky/zakazky-img-011.png" 
       alt="Kontrola údajů FVE" 
       title="zakazky-img-011.png"
       class="rounded-lg shadow-lg" />
  <p class="text-sm text-gray-600 mt-2 text-center italic">Ověření správnosti údajů FVE zakázky</p>
</div>

## Správa komunikace
- Veškerá komunikace se ukládá v záložce "Komunikace"

<div class="my-4">
  <img src="/documents/evi-manual/images/zakazky/zakazky-img-012.jpg" 
       alt="Záložka komunikace" 
       title="zakazky-img-012.jpg"
       class="rounded-lg shadow-lg" />
  <p class="text-sm text-gray-600 mt-2 text-center italic">Přehled komunikace v záložce Komunikace</p>
</div>

- Dokumentujte všechny důležité interakce se zákazníkem

<div class="my-4">
  <img src="/documents/evi-manual/images/zakazky/zakazky-img-013.jpg" 
       alt="Dokumentace interakcí" 
       title="zakazky-img-013.jpg"
       class="rounded-lg shadow-lg" />
  <p class="text-sm text-gray-600 mt-2 text-center italic">Dokumentace interakcí se zákazníkem</p>
</div>

## Úkoly a upomínky
1. Vytvářejte a spravujte úkoly přímo v systému

<div class="my-4">
  <img src="/documents/evi-manual/images/zakazky/zakazky-img-014.jpg" 
       alt="Vytváření úkolů" 
       title="zakazky-img-014.jpg"
       class="rounded-lg shadow-lg" />
  <p class="text-sm text-gray-600 mt-2 text-center italic">Rozhraní pro vytváření nových úkolů</p>
</div>

<div class="my-4">
  <img src="/documents/evi-manual/images/zakazky/zakazky-img-015.jpg" 
       alt="Správa úkolů" 
       title="zakazky-img-015.jpg"
       class="rounded-lg shadow-lg" />
  <p class="text-sm text-gray-600 mt-2 text-center italic">Přehled a správa existujících úkolů</p>
</div>

2. Po splnění úkolu:
   - Otevřete úkol
   - Zaškrtněte "vyřízeno"
   - V případě potřeby změňte stav zakázky
   - Vytvořte návazný úkol nebo zavřete

<div class="my-4">
  <img src="/documents/evi-manual/images/zakazky/zakazky-img-016.jpg" 
       alt="Návazný úkol" 
       title="zakazky-img-016.jpg"
       class="rounded-lg shadow-lg" />
  <p class="text-sm text-gray-600 mt-2 text-center italic">Vytvoření návazného úkolu a uzavření stávajícího</p>
</div>

## Ukládání souborů
1. Všechny dokumenty musí být uloženy v EVI:

<div class="my-4">
  <img src="/documents/evi-manual/images/zakazky/zakazky-img-017.jpg" 
       alt="Ukládání dokumentů" 
       title="zakazky-img-017.jpg"
       class="rounded-lg shadow-lg" />
  <p class="text-sm text-gray-600 mt-2 text-center italic">Sekce pro ukládání dokumentů v EVI</p>
</div>

   - Vstupní formuláře
   - Rozpočty (XLS)
   - Fotodokumentace
2. Postup ukládání:
   - V levé části vyberte cílovou složku
   - Přetáhněte soubory myší do systému

<div class="my-4">
  <img src="/documents/evi-manual/images/zakazky/zakazky-img-018.jpg" 
       alt="Přetažení souborů" 
       title="zakazky-img-018.jpg"
       class="rounded-lg shadow-lg" />
  <p class="text-sm text-gray-600 mt-2 text-center italic">Přetažení souborů do systému pomocí myši</p>
</div>

### Založení složky na SD - POKUD MÁTE PŘÍSTUP

<div class="my-4">
  <img src="/documents/evi-manual/images/zakazky/zakazky-img-019.jpg" 
       alt="Založení složky na SD 1" 
       title="zakazky-img-019.jpg"
       class="rounded-lg shadow-lg" />
  <p class="text-sm text-gray-600 mt-2 text-center italic">První krok založení složky na SD</p>
</div>

<div class="my-4">
  <img src="/documents/evi-manual/images/zakazky/zakazky-img-020.jpg" 
       alt="Založení složky na SD 2" 
       title="zakazky-img-020.jpg"
       class="rounded-lg shadow-lg" />
  <p class="text-sm text-gray-600 mt-2 text-center italic">Druhý krok založení složky na SD</p>
</div>

### Struktura složek na SD
- Složka "Rozpočty + ekonomická rozvaha":
  - Podsložka "Vstupní údaje" pro vstupní formuláře
  - Rozpočty, ekonomiky, prezentace
- Pro FVE vytvořte samostatnou složku s rozpočty

<div class="my-4">
  <img src="/documents/evi-manual/images/zakazky/zakazky-img-021.jpg" 
       alt="Složka pro FVE" 
       title="zakazky-img-021.jpg"
       class="rounded-lg shadow-lg" />
  <p class="text-sm text-gray-600 mt-2 text-center italic">Vytvoření samostatné složky pro FVE rozpočty</p>
</div>
`
    },
    {
      id: 'tvorba-nabidky',
      title: 'Vytvoření nabídky',
      content: '# Vytvoření nabídky\n\nDetailní postup pro vytvoření a správu nabídek v systému EVI.\n\n## Analýza požadavků\n- Identifikace potřeb zákazníka\n- Technické požadavky\n- Termíny a podmínky\n- Rozpočtové omezení\n\n## Vytvoření nabídky\n1. Základní informace:\n   - Identifikace zákazníka\n   - Kontaktní údaje\n   - Platnost nabídky\n   - Termíny realizace\n\n2. Produktová část:\n   - Výběr vhodných produktů\n   - Konfigurace systému\n   - Volitelné příslušenství\n   - Technické specifikace\n\n3. Cenová kalkulace:\n   - Ceny produktů a služeb\n   - Množstevní slevy\n   - DPH a další poplatky\n   - Celková cena\n\n4. Obchodní podmínky:\n   - Platební podmínky\n   - Záruční podmínky\n   - Termíny dodání\n   - Servisní podmínky\n\n## Správa nabídky\n- Verzování nabídek\n- Sledování stavu\n- Úpravy a aktualizace\n- Evidence komunikace\n\n## Uzavření nabídky\n- Schválení nabídky\n- Převod na zakázku\n- Archivace\n- Vyhodnocení úspěšnosti'
    }
  ]
}; 