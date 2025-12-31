# HVITFELDTSKAS SPETSUTBILDNING - MATEMATIKHANDBOK 2026

## 📚 Komplett Handbok för Intagningsprovet

**Skapad för: Yvonna**  
**Provdatum: 24 februari 2026**  
**Baserad på: Intagningsprov 2010-2025**

---

## INNEHÅLLSFÖRTECKNING

1. [DEL 1: ARITMETIK & TALTEORI](#del-1-aritmetik--talteori)
2. [DEL 2: ALGEBRA](#del-2-algebra)
3. [DEL 3: GEOMETRI](#del-3-geometri)
4. [DEL 4: KOMBINATORIK & SANNOLIKHET](#del-4-kombinatorik--sannolikhet)
5. [DEL 5: PROBLEMLÖSNINGSSTRATEGIER](#del-5-problemlösningsstrategier)
6. [DEL 6: ORDPROBLEM](#del-6-ordproblem)
7. [DEL 7: ÖVNINGSUPPGIFTER](#del-7-övningsuppgifter)

---

# DEL 1: ARITMETIK & TALTEORI

## 1.1 Grundläggande begrepp

### Delbarhet
Ett heltal **a** är **delbart** med ett heltal **b** om det finns ett heltal **k** så att:
$$a = b \cdot k$$

**Delbarhetsregler:**
| Tal | Regel |
|-----|-------|
| 2 | Sista siffran är jämn (0, 2, 4, 6, 8) |
| 3 | Siffersumman är delbar med 3 |
| 4 | De två sista siffrorna bildar ett tal delbart med 4 |
| 5 | Sista siffran är 0 eller 5 |
| 6 | Delbart med både 2 och 3 |
| 8 | De tre sista siffrorna bildar ett tal delbart med 8 |
| 9 | Siffersumman är delbar med 9 |
| 10 | Sista siffran är 0 |

### Primtal
**Definition:** Ett primtal är ett heltal större än 1 som endast är delbart med 1 och sig själv.

**Primtal under 100:**
2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97

### Primtalsfaktorisering
Varje heltal > 1 kan skrivas som en produkt av primtal på ett unikt sätt.

**Exempel:** 
- 350 = 2 × 5² × 7
- 180 = 2² × 3² × 5

---

## 1.2 SGD och MGM

### Största Gemensamma Delare (SGD)
Det största talet som delar båda talen.

**Metod (primtalsfaktorisering):**
1. Faktorisera båda talen
2. Ta produkten av gemensamma primfaktorer med lägsta exponenten

**Exempel:** SGD(350, 180)
- 350 = 2 × 5² × 7
- 180 = 2² × 3² × 5
- SGD = 2 × 5 = 10

### Minsta Gemensamma Multipel (MGM)
Det minsta talet som är delbart med båda talen.

**Formel:**
$$MGM(a,b) = \frac{a \cdot b}{SGD(a,b)}$$

**Alternativ metod:** Ta produkten av alla primfaktorer med högsta exponenten.

---

## 1.3 ⭐ TYPUPPGIFT: Heltalsekvationer (Prov 2015)

### Problem:
> Vi har att x, y, z alla är heltal större än ett.  
> Man vet att xy = 350 och yz = 180.  
> Man vet även att produkten xz är delbar med 8.  
> Bestäm värdet på produkten xz.

### LÖSNINGSMETOD:

**Steg 1: Primtalsfaktorisera**
- 350 = 2 × 5² × 7
- 180 = 2² × 3² × 5

**Steg 2: Hitta gemensam faktor y**
- y måste dela både 350 och 180
- Möjliga värden för y: divisorer till SGD(350, 180) = 10
- Divisorer: 2, 5, 10 (y > 1)

**Steg 3: Testa varje möjligt y**

| y | x = 350/y | z = 180/y | xz | Delbar med 8? |
|---|-----------|-----------|-----|---------------|
| 2 | 175 | 90 | 15750 | Nej (15750/8 = 1968,75) |
| 5 | 70 | 36 | 2520 | Ja (2520/8 = 315) |
| 10 | 35 | 18 | 630 | Nej (630/8 = 78,75) |

**Steg 4: Kontrollera delbarhet med 8**
- 2520 = 8 × 315 ✓

**SVAR: xz = 2520**

### 📝 MINNESREGEL:
> **"Faktorisera → Gemensamma divisorer → Testa systematiskt → Verifiera villkor"**

---

## 1.4 Potenser och Rötter

### Potensregler
| Regel | Formel |
|-------|--------|
| Multiplikation | $a^m \cdot a^n = a^{m+n}$ |
| Division | $a^m / a^n = a^{m-n}$ |
| Potens av potens | $(a^m)^n = a^{m \cdot n}$ |
| Produkt | $(ab)^n = a^n \cdot b^n$ |
| Kvot | $(a/b)^n = a^n / b^n$ |
| Negativ exponent | $a^{-n} = 1/a^n$ |
| Nollexponent | $a^0 = 1$ (a ≠ 0) |

### Rotregler
| Regel | Formel |
|-------|--------|
| Definition | $\sqrt[n]{a} = a^{1/n}$ |
| Produkt | $\sqrt{ab} = \sqrt{a} \cdot \sqrt{b}$ |
| Kvot | $\sqrt{a/b} = \sqrt{a} / \sqrt{b}$ |
| Förenkla | $\sqrt{a^2} = |a|$ |

### Viktiga kvadratrötter
$\sqrt{2} \approx 1,414$  
$\sqrt{3} \approx 1,732$  
$\sqrt{5} \approx 2,236$

---

# DEL 2: ALGEBRA

## 2.1 Ekvationer

### Linjära ekvationer
**Form:** ax + b = c

**Lösning:**
$$x = \frac{c - b}{a}$$

### Andragradsekvationer
**Standardform:** $ax^2 + bx + c = 0$

**PQ-formeln** (när a = 1):
$$x^2 + px + q = 0$$
$$x = -\frac{p}{2} \pm \sqrt{\left(\frac{p}{2}\right)^2 - q}$$

**ABC-formeln** (allmänt fall):
$$x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$$

### Diskriminanten
$D = b^2 - 4ac$
- D > 0: Två olika reella lösningar
- D = 0: En dubbelrot
- D < 0: Inga reella lösningar

---

## 2.2 Ekvationssystem

### Substitutionsmetoden
1. Lös ut en variabel ur en ekvation
2. Sätt in uttrycket i den andra ekvationen
3. Lös den resulterande ekvationen
4. Beräkna den andra variabeln

### Additionsmetoden
1. Multiplicera ekvationerna så att en variabel får samma koefficient
2. Addera/subtrahera ekvationerna
3. Lös den resulterande ekvationen

### ⭐ TYPUPPGIFT: Kombinerade ekvationer

**Problem:** Givet xy = 350 och yz = 180, hitta xz.

**Metod 1: Multiplicera ekvationerna**
- $(xy) \cdot (yz) = 350 \cdot 180$
- $xy^2z = 63000$
- $xz = \frac{63000}{y^2}$

**Metod 2: Dividera ekvationerna**
- $\frac{xy}{yz} = \frac{350}{180}$
- $\frac{x}{z} = \frac{35}{18}$

---

## 2.3 Olikheter

### Regler för olikheter
- Addera/subtrahera samma tal på båda sidor: olikhet bevaras
- Multiplicera/dividera med positivt tal: olikhet bevaras
- **Multiplicera/dividera med negativt tal: olikhet byter riktning!**

### Absolutbelopp
**Definition:**
$$|x| = \begin{cases} x & \text{om } x \geq 0 \\ -x & \text{om } x < 0 \end{cases}$$

**Viktiga egenskaper:**
- $|ab| = |a| \cdot |b|$
- $|a + b| \leq |a| + |b|$ (triangelolikheten)
- $|x| < a \Leftrightarrow -a < x < a$
- $|x| > a \Leftrightarrow x < -a$ eller $x > a$

---

## 2.4 Talföljder

### Aritmetisk talföljd
Varje term skiljer sig med konstant differens d.

**Formler:**
- n:te termen: $a_n = a_1 + (n-1)d$
- Summa: $S_n = \frac{n(a_1 + a_n)}{2} = \frac{n(2a_1 + (n-1)d)}{2}$

### Geometrisk talföljd
Varje term multipliceras med konstant kvot k.

**Formler:**
- n:te termen: $a_n = a_1 \cdot k^{n-1}$
- Summa: $S_n = a_1 \cdot \frac{k^n - 1}{k - 1}$ (k ≠ 1)

---

# DEL 3: GEOMETRI

## 3.1 Trianglar

### Triangelns vinkelsumma
**Summan av vinklarna i en triangel = 180°**

### Triangeltyper

| Typ | Definition | Egenskaper |
|-----|------------|------------|
| **Liksidig** (Equilateral) | Alla sidor lika | Alla vinklar = 60° |
| **Likbent** (Isosceles) | Två sidor lika | Basvinklarna lika |
| **Rätvinklig** (Right) | En vinkel = 90° | Pythagoras sats gäller |
| **Spetsvinklig** (Acute) | Alla vinklar < 90° | |
| **Trubbvinklig** (Obtuse) | En vinkel > 90° | |

### Pythagoras sats
I en rätvinklig triangel med kateter a, b och hypotenusa c:
$$a^2 + b^2 = c^2$$

**Vanliga Pythagoreiska tripplar:**
- 3, 4, 5
- 5, 12, 13
- 8, 15, 17
- 7, 24, 25
- Multiplar: 6, 8, 10 (2 × 3, 4, 5)

### Triangelns area
- **Basformel:** $A = \frac{b \cdot h}{2}$
- **Med två sidor och mellanliggande vinkel:** $A = \frac{1}{2}ab\sin C$
- **Herons formel:** $A = \sqrt{s(s-a)(s-b)(s-c)}$ där $s = \frac{a+b+c}{2}$

---

## 3.2 Likformighet och Kongruens

### Kongruens (≅)
Figurer är kongruenta om de har exakt samma form och storlek.

**Kongruensvillkor för trianglar:**
- **SSS** (sida-sida-sida)
- **SAS** (sida-vinkel-sida)
- **ASA** (vinkel-sida-vinkel)
- **AAS** (vinkel-vinkel-sida)

### Likformighet (~)
Figurer är likformiga om de har samma form men olika storlek.

**Likformighetsvillkor för trianglar:**
- Alla vinklar är lika
- Alla sidor har samma förhållande (skala k)

**Area och volym vid likformighet:**
- Om sidorna har förhållandet k:
  - Areorna har förhållandet k²
  - Volymerna har förhållandet k³

---

## 3.3 Cirkeln

### Grundläggande formler
| Storhet | Formel |
|---------|--------|
| Omkrets | $O = 2\pi r = \pi d$ |
| Area | $A = \pi r^2$ |
| Båglängd | $b = \frac{v}{360°} \cdot 2\pi r$ |
| Sektorarea | $A_{sektor} = \frac{v}{360°} \cdot \pi r^2$ |

### Viktiga begrepp
- **Radie (r):** Sträckan från centrum till cirkelns rand
- **Diameter (d):** Sträckan tvärs genom cirkeln, d = 2r
- **Korda:** Sträcka mellan två punkter på cirkeln
- **Tangent:** Linje som vidrör cirkeln i exakt en punkt
- **Sekant:** Linje som skär cirkeln i två punkter

### Tangentegenskaper
1. Tangenten är **vinkelrät** mot radien vid tangeringspunkten
2. Tangentsträckor från samma punkt är **lika långa**

### Randvinkel och medelpunktsvinkel
**Randvinkelsatsen:** En randvinkel är hälften så stor som medelpunktsvinkeln som spänner över samma båge.

**Thales sats:** Om A, B, C ligger på en cirkel och AB är en diameter, så är vinkeln ACB = 90°.

---

## 3.4 Fyrhörningar

### Formler

| Fyrhörning | Areaformel |
|------------|------------|
| Rektangel | A = b × h |
| Parallellogram | A = b × h |
| Romb | A = (d₁ × d₂)/2 |
| Trapets | A = (a + b) × h / 2 |

### Vinkelsumma
Summan av vinklarna i en fyrhörning = 360°

---

## 3.5 Koordinatgeometri

### Avstånd mellan två punkter
$$d = \sqrt{(x_2-x_1)^2 + (y_2-y_1)^2}$$

### Mittpunkt
$$M = \left(\frac{x_1+x_2}{2}, \frac{y_1+y_2}{2}\right)$$

### Räta linjens ekvation
**k-form:** $y = kx + m$
- k = lutning (riktningskoefficient)
- m = skärning med y-axeln

**Allmän form:** $ax + by + c = 0$

### Lutning
$$k = \frac{y_2 - y_1}{x_2 - x_1}$$

### Parallella och vinkelräta linjer
- **Parallella:** samma k-värde
- **Vinkelräta:** $k_1 \cdot k_2 = -1$

---

# DEL 4: KOMBINATORIK & SANNOLIKHET

## 4.1 Kombinatorik - Grundprinciper

### Multiplikationsprincipen
Om ett val kan göras på m sätt, och ett annat val kan göras på n sätt, kan båda valen göras på **m × n** sätt.

### Additionsprincipen
Om ett val kan göras på m sätt ELLER på n sätt (ej samtidigt), finns totalt **m + n** sätt.

---

## 4.2 Permutationer

### Definition
En **permutation** är ett ordnat urval.

### Formler
- Antal permutationer av n objekt: $n! = n \times (n-1) \times ... \times 2 \times 1$
- Antal permutationer av r objekt ur n: $P(n,r) = \frac{n!}{(n-r)!}$

### Fakultet
$0! = 1$  
$1! = 1$  
$5! = 120$  
$10! = 3628800$

---

## 4.3 Kombinationer

### Definition
En **kombination** är ett oordnat urval.

### Formel
$$C(n,r) = \binom{n}{r} = \frac{n!}{r!(n-r)!}$$

### Viktiga egenskaper
- $\binom{n}{0} = \binom{n}{n} = 1$
- $\binom{n}{1} = \binom{n}{n-1} = n$
- $\binom{n}{r} = \binom{n}{n-r}$

---

## 4.4 ⭐ TYPUPPGIFT: Vägräkning (Prov 2012, Uppgift 2)

### Problemet:
> Du ska ta dig från ruta S till M i ett rutnät.  
> Du får bara flytta dig en ruta i taget, uppåt eller åt höger.  
> Antalet möjliga vägar är 252 stycken.  
> Hur många vägar finns det som INTE går via rutan markerad med ★?

### LÖSNINGSMETOD: Komplementprincipen

**Steg 1: Förstå grundprincipen**
- Varje väg består av flyttar uppåt (U) och höger (H)
- Antal vägar = antal sätt att arrangera dessa flyttar

**Steg 2: Beräkna totalt antal vägar**
Om vi går m steg höger och n steg uppåt: $\binom{m+n}{m}$

**Steg 3: Använd komplementprincipen**
$$\text{Vägar utan ★} = \text{Totalt antal vägar} - \text{Vägar via ★}$$

**Steg 4: Beräkna vägar via ★**
- Dela upp i: vägar från S till ★ × vägar från ★ till M

### Exempel med 5×5 rutnät:
- Totalt: $\binom{10}{5} = 252$ vägar
- Om ★ är vid position (2,3):
  - S till ★: $\binom{5}{2}$ sätt
  - ★ till M: $\binom{5}{3}$ sätt
  - Via ★: produkten av dessa

### 📝 MINNESREGEL för vägräkning:
> **"Diagonal-rutnät: Kombinationer!"**  
> **"Undantag: Totalt − Via förbjuden punkt"**

---

## 4.5 Sannolikhet

### Grundläggande formel
$$P(A) = \frac{\text{Antal gynnsamma utfall}}{\text{Antal möjliga utfall}}$$

### Viktiga regler
| Regel | Formel |
|-------|--------|
| Komplementregeln | $P(A') = 1 - P(A)$ |
| Additionsregeln | $P(A \cup B) = P(A) + P(B) - P(A \cap B)$ |
| Multiplikationsregeln | $P(A \cap B) = P(A) \cdot P(B|A)$ |
| Oberoende händelser | $P(A \cap B) = P(A) \cdot P(B)$ |

### Villkorad sannolikhet
$$P(A|B) = \frac{P(A \cap B)}{P(B)}$$

---

# DEL 5: PROBLEMLÖSNINGSSTRATEGIER

## 5.1 Allmänna strategier

### 1. Rita en bild
Visualisera problemet med en figur eller diagram.

### 2. Arbeta baklänges
Börja från svaret och arbeta mot givna villkor.

### 3. Förenkla problemet
Testa med mindre tal eller enklare fall först.

### 4. Leta efter mönster
Beräkna några exempel och leta efter regelbundenheter.

### 5. Gör en tabell
Organisera information systematiskt.

### 6. Använd variabler
Sätt upp ekvationer med okända.

### 7. Dela upp problemet
Lös delproblem och kombinera.

### 8. Testa och verifiera
Prova olika värden och kontrollera mot villkor.

---

## 5.2 Komplementprincipen

**Användning:** När det är lättare att räkna vad vi INTE vill ha.

$$P(\text{Vill ha}) = P(\text{Totalt}) - P(\text{Vill inte ha})$$

**Typexempel:**
- "Hur många som INTE innehåller..."
- "Hur många vägar som INTE går via..."
- "Sannolikheten att MINST ett..."

---

## 5.3 Diofantiska ekvationer

**Definition:** Ekvationer som ska lösas med heltal.

**Strategi:**
1. Hitta en lösning (gissning/testning)
2. Beskriv alla lösningar
3. Välj de som uppfyller alla villkor

---

# DEL 6: ORDPROBLEM

## 6.1 Samarbetsproblem ("Fyllning av pool")

### Standard problem:
> A fyller poolen på a timmar, B fyller på b timmar.  
> Hur lång tid tar det tillsammans?

### Lösningsmetod:
1. Hastighet A = 1/a (pooler per timme)
2. Hastighet B = 1/b (pooler per timme)
3. Total hastighet = 1/a + 1/b
4. **Tid = 1/(1/a + 1/b) = ab/(a+b)**

### 📝 FORMEL:
$$t = \frac{ab}{a+b}$$

---

## 6.2 Rörelseproblem ("Ifatt-problem")

### Formel:
$$\text{sträcka} = \text{hastighet} \times \text{tid}$$

### Typer:

**Typ 1: Mötas (motriktade)**
- Tid = Total sträcka / (hastighet₁ + hastighet₂)

**Typ 2: Samma riktning (ikapp)**
- Tid att köra ikapp = Försprång / (hastighet_snabbare - hastighet_långsammare)

**Typ 3: Rundbanor**
- Tid att mötas = Omkrets / (hastighet₁ + hastighet₂)
- Tid att köra ikapp = Omkrets / |hastighet₁ - hastighet₂|

---

## 6.3 Blandningsproblem

### Koncentrationsformel:
$$\text{Koncentration} = \frac{\text{Mängd ämne}}{\text{Total mängd}}$$

### Mängdbalans:
Mängd ämne före = Mängd ämne efter

---

## 6.4 Åldersproblem

**Strategi:**
1. Låt x = nuvarande ålder för en person
2. Uttryck andra åldrar med hjälp av x
3. Ställ upp ekvation baserat på given information
4. Kontrollera svaret i originalproblemet

---

# DEL 7: ÖVNINGSUPPGIFTER

## Typ 1: Talteori och Heltalsekvationer

**Övning 1:**
> Hitta alla heltal x, y > 1 sådana att xy = 240 och x + y = 26.

<details>
<summary>Lösning</summary>

Från x + y = 26 får vi y = 26 - x.
Insättning: x(26-x) = 240 → 26x - x² = 240 → x² - 26x + 240 = 0
PQ-formeln: x = 13 ± √(169-240) = 13 ± √(-71) — Inga reella lösningar!

Kontroll: Om xy = 240 och x + y = 26, men 240 = 16×15, 15+16=31≠26.
**Svar: Inga lösningar**
</details>

**Övning 2:**
> xy = 420, yz = 315, och xz är delbart med 7. Finn xz.

<details>
<summary>Lösning</summary>

420 = 2² × 3 × 5 × 7  
315 = 3² × 5 × 7

SGD(420, 315) = 3 × 5 × 7 = 105
Divisorer av 105: 3, 5, 7, 15, 21, 35, 105

Testa y = 21: x = 420/21 = 20, z = 315/21 = 15, xz = 300 (inte delbart med 7)
Testa y = 35: x = 420/35 = 12, z = 315/35 = 9, xz = 108 (inte delbart med 7)
Testa y = 7: x = 420/7 = 60, z = 315/7 = 45, xz = 2700 (2700/7 ≈ 385.7, nej)
Testa y = 5: x = 420/5 = 84, z = 315/5 = 63, xz = 5292 = 7 × 756 ✓

**Svar: xz = 5292**
</details>

---

## Typ 2: Kombinatorik (Vägräkning)

**Övning 3:**
> I ett 4×3 rutnät, hur många vägar finns det från nedre vänstra hörnet till övre högra hörnet om man bara får gå uppåt eller åt höger?

<details>
<summary>Lösning</summary>

Vi måste gå 4 steg höger och 3 steg uppåt = 7 steg totalt.
Antal sätt = C(7,3) = C(7,4) = 35

**Svar: 35 vägar**
</details>

**Övning 4:**
> Samma rutnät, men vi får INTE passera punkten (2,2). Hur många vägar?

<details>
<summary>Lösning</summary>

Totalt: 35 vägar
Via (2,2): C(4,2) × C(3,1) = 6 × 3 = 18 vägar

Utan (2,2): 35 - 18 = 17 vägar

**Svar: 17 vägar**
</details>

---

## Typ 3: Geometri

**Övning 5:**
> En triangel har sidor 5, 12 och 13 cm. Beräkna arean.

<details>
<summary>Lösning</summary>

Kontrollera om rätvinklig: 5² + 12² = 25 + 144 = 169 = 13² ✓
Area = (5 × 12)/2 = 30 cm²

**Svar: 30 cm²**
</details>

---

## Typ 4: Samarbets-/Hastighet

**Övning 6:**
> Pump A fyller en bassäng på 6 timmar. Pump B fyller samma bassäng på 4 timmar. Hur lång tid tar det om båda pumparna arbetar samtidigt?

<details>
<summary>Lösning</summary>

t = (6 × 4)/(6 + 4) = 24/10 = 2,4 timmar = 2 timmar 24 minuter

**Svar: 2,4 timmar**
</details>

---

# FORMELSAMLING - SNABBREFERENS

## Aritmetik
- SGD × MGM = a × b
- $\sqrt{ab} = \sqrt{a} \cdot \sqrt{b}$

## Algebra
- PQ-formeln: $x = -\frac{p}{2} \pm \sqrt{\frac{p^2}{4} - q}$
- Aritmetisk summa: $S_n = \frac{n(a_1 + a_n)}{2}$

## Geometri
- Pythagoras: $a^2 + b^2 = c^2$
- Cirkelarea: $A = \pi r^2$
- Triangelarea: $A = \frac{bh}{2}$

## Kombinatorik
- Permutationer: $P(n,r) = \frac{n!}{(n-r)!}$
- Kombinationer: $C(n,r) = \frac{n!}{r!(n-r)!}$
- Vägräkning i rutnät: $C(m+n, m)$

## Ordproblem
- Samarbete: $t = \frac{ab}{a+b}$
- Hastighet: $s = v \cdot t$

---

# CHECKLISTOR INFÖR PROVET

## ✅ Före provet
- [ ] Öva på tidigare prov under tidspress
- [ ] Repetera alla formler
- [ ] Sov gott kvällen innan
- [ ] Ta med tillåtna hjälpmedel

## ✅ Under provet
- [ ] Läs alla uppgifter först
- [ ] Börja med uppgifter du känner dig säker på
- [ ] Visa alla steg i uträkningar
- [ ] Kontrollera svaren om tid finns
- [ ] Ge aldrig upp – partiell lösning kan ge poäng

---

*Lycka till på provet, Yvonna! 🍀*

---
**Version 1.0 - December 2024**  
**Baserad på intagningsprov 2010-2025**
