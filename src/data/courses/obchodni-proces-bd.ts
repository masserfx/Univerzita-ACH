import { Course } from '../types';

export const obchodniProcesBD: Course = {
  id: 'obchodni-proces-bd',
  title: 'Obchodní proces - BD',
  description: 'Komplexní průvodce obchodním procesem pro bytové domy - od prvního kontaktu až po úspěšné uzavření smlouvy.',
  duration: '90 minut',
  level: 'intermediate',
  tags: ['obchod', 'bytové domy', 'prodej', 'komunikace', 'prezentace'],
  modules: [
    {
      id: 'uvod-a-casovy-ramec',
      title: 'Úvod a časový rámec',
      type: 'lesson',
      content: `# Úvod a časový rámec
## Hlavní fáze procesu a jejich trvání
1. **Úvodní kvalitní telefonát**
   - Trvání: 1-2 týdny
2. **Schůzka – pouze s předsedou**
   - Trvání: 2 týdny
3. **Schůzka – s celým výborem**
   - Trvání: 2 týdny – 1 měsíc
4. **Přesvědčení pochybovačů, rozptýlení obav**
   - Trvání: 2 týdny – 1 měsíc
5. **Mimořádné shromáždění vlastníků**
   - Trvání: 2 týdny
6. **Podpis smlouvy**

## Důležité upozornění
- Od úvodního telefonátu po podepsání smlouvy: ideálně 2-4 měsíce
- <span style="color: #FF0000;">Nečekáme na řádné termíny, jednáme v duchu mimořádné události!</span>`
    },
    {
      id: 'telefonat',
      title: 'Telefonát',
      type: 'lesson',
      content: `# Telefonát
## Výchozí stav
Mám telefonický kontakt na základě jedné z variant:
**a) odpověděl na dopis zaslaný námi nebo poslal poptávku**
**b) "sousední dům", případně doporučení**
**c) "studený kontakt"**
**d) starý kontakt z evidence**

## Příprava
1. Prohlédnout si dům (typ domu, velikost, stav)
2. Zjistit v evidenci, zda jsme již dříve s domem nekomunikovali, případně s nějakým jiným v okolí
3. Zjistit cenu tepla ve městě/lokalitě
   - <a href="https://www.eru.cz/cs/teplo/statistika/prehled-cen-tepelne-energie-v-cleneni-podle-cenovych-lokalit" target="_blank">ERÚ - přehled cen tepelné energie</a>
   - <a href="http://www.naseteplo.cz/?id=1005&1590483033#" target="_blank">Naše teplo - cenový přehled</a>
4. Zmapovat situaci CZT v lokalitě
5. Připravit reference v okolí
6. Spočítat orientační úsporu a orientační cenu realizace

## Obsah hovoru
- Postupovat dle přílohy "Telefonát BD – postup pro jednotlivé případy"
- Upozornit na problém (v lokalitě je drahé teplo)
- Představit naše řešení
- Zjistit motivaci ke změně
- Zjistit situaci v domě

## Cíl / Výstup
1. Získat schůzku – konkrétní datum setkání
2. Připadně získat data – posílám mail, následně ověřuji doručení a pochopení, termín dodání dat
3. Provést zápis v evidenci

## Časový rámec
- 1-2 týdny do schůzky

## <span style="color: #FF0000;">POZOR!</span>
- neposílám, <span style="color: #FF0000;">PŘEDÁVÁM</span>
- mluvím málo o sobě (firmě, produktu), <span style="color: #FF0000;">VYPTÁVÁM SE</span>
- řídím já, <span style="color: #FF0000;">MÁM KONKRÉTNÍ TERMÍNY</span>
- vše bude zapsáno v evidenci (i zdánlivé nedůležitosti typu co poslouchá za muziku a co dělá za sport)`
    },
    {
      id: 'schuzka-predseda',
      title: 'Schůzka - předseda',
      type: 'lesson',
      content: `# Schůzka - předseda
## Příprava
1. Nastudovat historii komunikace
2. Nastudovat stanovy
3. Připravit ukázkovou nabídku na obdobně velký dům
4. Pokud mám data, přijet se zpracovanou a perfektně nastudovanou ekonomikou a rozpočtem

### Sebou vzít
- Notebook
- Katalog
- Vstupní formulář
- Ekonomiku
- Leták pro byty (ukázka)
- Seznam referencí
- Letáky referenční

## Výchozí stav
- Znám motivaci ke změně
- Vím, jaká je nálada v domě

## Obsah schůzky
1. Představení sebe a společnosti (ne historie, ale úspěchy)
2. Zdůraznit: teplo je jediná v��c, kterou mohu ovlivnit a zároveň je to největší položka v rozpočtu – my máme řešení, jak ušetřit
3. Zjišťovat potřeby a obavy, vzbuzovat důvěru, motivovat
4. Prezentovat Loskutáka
5. Prezentovat (ukázkovou) ekonomiku
6. Zmínit reference, nabídnout návštěvu pro výbor i lidi z domu

### Zjistit informace o domě
- IČ
- Popis domu
- Spotřeby
- Ceny
- Investice
- Fond oprav
- Věkové složení domu
- Velikost bytových jednotek (pokud neví, tak odhad)
- Smlouva s teplárnou

### Prohlídka domu
- Projít dům a vyptávat se
- Fotit a zjišťovat informace dle požadavku JP (viz. Příloha)
- Důvod: v případě nejasností možnost konzultace s JP v Letkově

## Cíl / Výstup
1. Vytvořit koalici s předsedou
2. Získat vyplněnou tabulku s daty a informacemi o domě
3. Získat smlouvu s teplárnou (pro analýzu podmínek odpojení)
4. Domluvit mimořádné jednání výboru – nejlépe do 14 dnů
5. Provést zápis v evidenci

## <span style="color: #FF0000;">POZOR!</span>
- jsem připraven
- jedu včas, <span style="color: #FF0000;">FOTÍM a OBHLÍŽÍM DŮM</span>
- mluvím málo o sobě (o firmě, o produktu), <span style="color: #FF0000;">VYPTÁVÁM SE</span>
- řídím já, <span style="color: #FF0000;">MÁM KONKRÉTNÍ TERMÍNY</span>`
    },
    {
      id: 'schuzka-vybor',
      title: 'Schůzka - výbor',
      type: 'lesson',
      content: `# Schůzka - výbor
## Příprava
1. Sesumírovat všechny dosud získané informace – mít perfektní přehled o domě a jeho situaci
2. Podle počtu členů výboru a objemu zakázky:
   - do 5 členů / do 5 milionů - jedu sám
   - jinak jedeme dva
3. Připravit:
   - Ekonomickou rozvahu
   - Rozpočet
   - Financování (2 varianty – z úspor, investiční úvěr)

### Sebou vzít
- Notebook
- Katalog
- Ekonomiku
- Leták pro byty
- Seznam referencí
- Provozní data
- Pozvánku

## Výchozí stav
- Spolupracující předseda
- Zpracovaná ekonomika včetně financování

## Obsah schůzky
1. Představení sebe a společnosti (ne historie, ale úspěchy)
2. Zdůraznit: teplo je jediná věc, kterou mohu ovlivnit a zároveň je to největší položka v rozpočtu – my máme řešení, jak ušetřit
3. S předsedou jsme probrali situaci a připravili řešení (obracet se na předsedu pro souhlas)
4. Zjišťovat potřeby a obavy, vzbuzovat důvěru, motivovat
5. Prezentovat:
   - Loskutáka
   - Video "Co je TČ" (jen na vyžádání)
   - Provozní data z realizací
   - Ekonomiku, rozpočet a financování projektu (zjednodušenou formu)
6. Probrat proces a možnosti odpojení
7. Zjistit případné odpůrce v domě a jak na ně
8. Informovat o mimořádném shromáždění
9. Ukázat připravené materiály:
   - Leták
   - Pozvánku
   - Informační dokument
10. Nabídnout:
    - Informační webinář pro jejich dům
    - Návštěvu firmy – setkání s jednateli
11. Zjistit podrobnosti k realizaci shromáždění:
    - Místo konání
    - Prostory
    - Dostupnost elektřiny

## Cíl / Výstup
1. Dosáhnout jednotného výboru
2. Domluvit:
   - Termín návštěvy reference (do 14 dnů)
   - Termín návštěvy firmy
3. Při jednotném výboru:
   - Stanovit termín mimořádného shromáždění
   - Předložit návrh SoD
4. Při nejednotném výboru:
   - Zjistit důvody pochybností
   - Nabídnout kroky k rozptýlení obav
5. Zajistit prohlídku technika při stanoveném termínu shromáždění
6. Provést zápis v evidenci

## <span style="color: #FF0000;">POZOR!</span>
- Vše uděláme za výbor
- Pokud nechtějí hned mimořádné shromáždění - <span style="color: #FF0000;">Co tomu brání?</span>
- Při jednotném výboru ochotném svolat shromáždění – připravit leták se zaškrtnutím mandátu výboru
- <span style="color: #FF0000;">REFERENCE</span> – nutný zápis v evidenci, kdo byl a na co se ptali`
    },
    {
      id: 'shromazdeni-vlastniku',
      title: 'Shromáždění vlastníků',
      type: 'lesson',
      content: `# Shromáždění vlastníků
## Příprava
1. Sesumírovat všechny dosud získané informace:
   - Perfektní přehled o domě a jeho situaci
   - Složení výboru a jejich obavy
   - Historie dotazů a odpovědí
2. Domluvit doprovod na shromáždění a seznámit ho s případem
3. Připravit vhodnou formu prezentace (PPT, flipchart...)
4. Sebou vzít:
   - Notebook
   - Projektor / flipchart
5. Přijet hodinu předem a domluvit s výborem:
   - Rozsazení
   - Otázky

## Výchozí stav
- Jednotný výbor
- Pochybovači eliminováni, obavy rozptýleny
- Dům prohlédl technik, máme konečný rozpočet

## Obsah prezentace
1. Nechat předsedu uvést prezentaci
2. Představení sebe a společnosti (ne historie, ale úspěchy)
3. Zdůraznit:
   - Teplo je jediná věc, kterou mohou ovlivnit
   - Největší položka v rozpočtu
   - Máme řešení pro úsporu
4. Interaktivní komunikace s publikem:
   - "Víte, že máte drahé teplo?"
   - "Víte, že to můžete svým rozhodnutím ovlivnit?"
   - "Napadlo vás, kde můžete ušetřit, když všechno zdražuje?"
5. Klíčové body:
   - Ekologický zdroj
   - Zdražení elektřiny ovlivní z 1/3
   - Financování zajištěno
   - Fond oprav beze změny
   - Zvýšení komfortu + úspora
6. Prezentovat:
   - Video Loskutáka
   - Porovnání současných a budoucích plateb
   - Úspory pro jednotlivé byty
7. Aktivně zapojovat výbor do prezentace`
    }
  ]
};
