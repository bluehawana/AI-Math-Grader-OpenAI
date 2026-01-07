#  HVITFELDTSKAS SPETSUTBILDNING
# KOMPLETT MATEMATIKHANDBOK 2026

---

**Skapad för:** Yvonna  
**Provdatum:** 24 februari 2026  
**Baserad på:** Intagningsprov 2010-2025

---

# INNEHÅLLSFÖRTECKNING

1. [INTRODUKTION](#introduktion)
2. [DEL 1: TALTEORI](#del-1-talteori)
3. [DEL 2: ALGEBRA](#del-2-algebra)
4. [DEL 3: GEOMETRI](#del-3-geometri)
5. [DEL 4: KOMBINATORIK & SANNOLIKHET](#del-4-kombinatorik--sannolikhet)
6. [DEL 5: ORDPROBLEM](#del-5-ordproblem)
7. [DEL 6: PROBLEMLÖSNINGSSTRATEGIER](#del-6-problemlösningsstrategier)
8. [FORMELSAMLING](#formelsamling)
9. [ÖVNINGSPROV](#övningsprov)
10. [FACIT](#facit)

---

# INTRODUKTION

## Om provet
Inträdesprovet till Hvitfeldtskas spetsutbildning i matematik består av två delar:
- **Del 1:** Basfärdigheter (75 min)
- **Del 2:** Problemlösning (90 min)

Varje del ger maximalt 160 poäng. Provresultatet adderas till meritvärdet.

## Hur du använder denna handbok
1. **Läs igenom** varje kapitel noggrant
2. **Öva på** typuppgifterna
3. **Memorera** formlerna i formelsamlingen
4. **Gör** övningsproven under tidspress
5. **Repetera** regelbundet innan provet

---

# DEL 1: TALTEORI

## 1.1 Delbarhetsregler

| Delbar med | Regel | Exempel |
|------------|-------|---------|
| **2** | Sista siffran är jämn (0, 2, 4, 6, 8) | 1234 [OK] |
| **3** | Siffersumman är delbar med 3 | 156: 1+5+6=12 [OK] |
| **4** | Sista två siffrorna delbara med 4 | 1324: 24÷4=6 [OK] |
| **5** | Slutar på 0 eller 5 | 1235 [OK] |
| **6** | Delbar med både 2 och 3 | 1254 [OK] |
| **8** | Sista tre siffrorna delbara med 8 | 5016: 016÷8=2 [OK] |
| **9** | Siffersumman är delbar med 9 | 2286: 2+2+8+6=18 [OK] |
| **10** | Slutar på 0 | 1230 [OK] |
| **11** | Alternerande siffersumma delbar med 11 | 2728: 2-7+2-8=-11 [OK] |

---

## 1.2 Primtal

### Definition
Ett **primtal** är ett heltal > 1 som endast är delbart med 1 och sig själv.

### Primtal under 100
```
2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 
53, 59, 61, 67, 71, 73, 79, 83, 89, 97
```

### Primtalstest
För att testa om n är primtal:
- Dividera med alla primtal ≤ √n
- Om ingen går jämnt ut → n är primtal

---

## 1.3 Primtalsfaktorisering

### Aritmetikens fundamentalsats
Varje heltal > 1 kan skrivas som en **unik** produkt av primtal.

### Metod: Faktorträd
```
    350
   /   \
  2    175
      /   \
     5     35
          /  \
         5    7

350 = 2 × 5² × 7
```

### Viktiga faktoriseringar

| Tal | Faktorisering |
|-----|---------------|
| 36 | 2² × 3² |
| 48 | 2⁴ × 3 |
| 60 | 2² × 3 × 5 |
| 72 | 2³ × 3² |
| 100 | 2² × 5² |
| 120 | 2³ × 3 × 5 |
| 180 | 2² × 3² × 5 |
| 240 | 2⁴ × 3 × 5 |
| 350 | 2 × 5² × 7 |
| 360 | 2³ × 3² × 5 |

---

## 1.4 Divisorer

### Antal divisorer
Om n = p₁^a₁ × p₂^a₂ × ... × pₖ^aₖ

**Antal divisorer = (a₁ + 1)(a₂ + 1)...(aₖ + 1)**

**Exempel:** 350 = 2¹ × 5² × 7¹  
Antal divisorer = (1+1)(2+1)(1+1) = 2 × 3 × 2 = **12**

### Alla divisorer till 350
1, 2, 5, 7, 10, 14, 25, 35, 50, 70, 175, 350

---

## 1.5 SGD och MGM

### SGD (Största Gemensamma Delare)

**Metod: Primtalsfaktorisering**
1. Faktorisera båda talen
2. Ta gemensamma primfaktorer med **LÄGSTA** exponent

**Exempel:** SGD(350, 180)
- 350 = 2 × 5² × 7
- 180 = 2² × 3² × 5
- SGD = 2¹ × 5¹ = **10**

### MGM (Minsta Gemensamma Multipel)

**Metod:** Ta alla primfaktorer med **HÖGSTA** exponent

**Exempel:** MGM(350, 180)
- MGM = 2² × 3² × 5² × 7 = **6300**

### Formel
$$\text{SGD}(a,b) \times \text{MGM}(a,b) = a \times b$$

---

##  1.6 TYPUPPGIFT: Heltalsekvationer

### Problem (Liknande Prov 2015)

> x, y, z är heltal > 1  
> xy = 350, yz = 180  
> xz är delbar med 8  
> **Bestäm xz.**

### LÖSNINGSMETOD

**Steg 1: Primtalsfaktorisera**
- 350 = 2 × 5² × 7
- 180 = 2² × 3² × 5

**Steg 2: Hitta möjliga y**
y måste dela både 350 och 180.  
SGD(350, 180) = 2 × 5 = 10  
Divisorer till 10 som är > 1: **2, 5, 10**

**Steg 3: Testa varje y systematiskt**

| y | x = 350/y | z = 180/y | xz | Delbar med 8? |
|---|-----------|-----------|-----|---------------|
| 2 | 175 | 90 | 15750 | 15750÷8 = 1968,75 [X] |
| 5 | 70 | 36 | 2520 | 2520÷8 = 315 [OK] |
| 10 | 35 | 18 | 630 | 630÷8 = 78,75 [X] |

**Steg 4: Verifiera**
- y = 5: x = 70, z = 36
- xy = 70 × 5 = 350 [OK]
- yz = 5 × 36 = 180 [OK]
- xz = 70 × 36 = 2520, delbar med 8 [OK]

### **SVAR: xz = 2520**

###  MINNESREGEL
> **"Faktorisera → Lista gemensamma divisorer → Testa systematiskt → Verifiera"**

---

# DEL 2: ALGEBRA

## 2.1 Polynom och Faktorisering

### Konjugatregeln
$$a^2 - b^2 = (a+b)(a-b)$$

### Kvadreringsreglerna
$$(a+b)^2 = a^2 + 2ab + b^2$$
$$(a-b)^2 = a^2 - 2ab + b^2$$

### Kubformler
$$a^3 + b^3 = (a+b)(a^2 - ab + b^2)$$
$$a^3 - b^3 = (a-b)(a^2 + ab + b^2)$$

---

## 2.2 Potensregler

| Regel | Formel |
|-------|--------|
| Multiplikation | aᵐ · aⁿ = aᵐ⁺ⁿ |
| Division | aᵐ / aⁿ = aᵐ⁻ⁿ |
| Potens av potens | (aᵐ)ⁿ = aᵐⁿ |
| Produktpotens | (ab)ⁿ = aⁿbⁿ |
| Kvotpotens | (a/b)ⁿ = aⁿ/bⁿ |
| Negativ exponent | a⁻ⁿ = 1/aⁿ |
| Nollexponent | a⁰ = 1 (a ≠ 0) |
| Bråkexponent | aᵐ/ⁿ = ⁿ√(aᵐ) |

---

## 2.3 Rotregler

| Regel | Formel |
|-------|--------|
| Multiplikation | √(ab) = √a · √b |
| Division | √(a/b) = √a / √b |
| Potens | √(a²) = \|a\| |

### Viktiga värden
- √2 ≈ 1,414
- √3 ≈ 1,732
- √5 ≈ 2,236

---

## 2.4 Ekvationer

### Linjära ekvationer
**Form:** ax + b = c  
**Lösning:** x = (c - b) / a

### Andragradsekvationer

**Standardform:** ax² + bx + c = 0

#### PQ-formeln (när a = 1)
$$x^2 + px + q = 0$$
$$x = -\frac{p}{2} \pm \sqrt{\left(\frac{p}{2}\right)^2 - q}$$

#### ABC-formeln (allmänt fall)
$$x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$$

### Diskriminanten
D = b² - 4ac
- D > 0: Två reella lösningar
- D = 0: En dubbelrot
- D < 0: Inga reella lösningar

### Vietas formler
För x² + px + q = 0 med rötter r och s:
- r + s = -p
- r × s = q

---

## 2.5 Ekvationssystem

### Substitutionsmetoden
1. Lös ut en variabel från en ekvation
2. Sätt in uttrycket i den andra ekvationen
3. Lös den resulterande ekvationen
4. Beräkna den andra variabeln

### Additionsmetoden
1. Multiplicera ekvationerna så att en variabel får samma koefficient
2. Addera/subtrahera ekvationerna
3. Lös den resulterande ekvationen

**Exempel:**
```
2x + 3y = 12
4x - 3y = 6
-----------
6x = 18 → x = 3
Insättning: 6 + 3y = 12 → y = 2
```

---

## 2.6 Olikheter

### Grundregler
- Addera/subtrahera: olikheten bevaras
- Multiplicera/dividera med positivt tal: bevaras
- **Multiplicera/dividera med negativt tal: BYTER riktning!**

### Absolutbelopp
$$|x| = \begin{cases} x & \text{om } x \geq 0 \\ -x & \text{om } x < 0 \end{cases}$$

| Problem | Lösning |
|---------|---------|
| \|x\| = a | x = a eller x = -a |
| \|x\| < a | -a < x < a |
| \|x\| > a | x > a eller x < -a |

---

## 2.7 Talföljder

### Aritmetisk talföljd
Konstant differens d mellan varje term.

| Formel | Uttryck |
|--------|---------|
| n:te termen | aₙ = a₁ + (n-1)d |
| Summa | Sₙ = n(a₁ + aₙ)/2 |

**Exempel:** 2, 5, 8, 11, 14, ...
- a₁ = 2, d = 3
- a₁₀ = 2 + 9×3 = 29
- S₁₀ = 10(2 + 29)/2 = 155

### Geometrisk talföljd
Konstant kvot k mellan varje term.

| Formel | Uttryck |
|--------|---------|
| n:te termen | aₙ = a₁ · kⁿ⁻¹ |
| Summa | Sₙ = a₁ · (kⁿ - 1)/(k - 1) |

**Exempel:** 3, 6, 12, 24, ...
- a₁ = 3, k = 2
- a₆ = 3 × 2⁵ = 96

### Specialsumma
$$1 + 2 + 3 + ... + n = \frac{n(n+1)}{2}$$

---

# DEL 3: GEOMETRI

## 3.1 Trianglar

### Vinkelsumma
**Summan av vinklarna i en triangel = 180°**

### Triangeltyper

| Typ | Definition | Egenskaper |
|-----|------------|------------|
| **Liksidig** | Alla sidor lika | Alla vinklar = 60° |
| **Likbent** | Två sidor lika | Basvinklarna lika |
| **Rätvinklig** | En vinkel = 90° | Pythagoras gäller |
| **Spetsvinklig** | Alla vinklar < 90° | |
| **Trubbvinklig** | En vinkel > 90° | |

### Pythagoras sats
I en rätvinklig triangel med kateter a, b och hypotenusa c:
$$a^2 + b^2 = c^2$$

### Pythagoriska tripplar

| Grundform | Multiplar |
|-----------|-----------|
| 3, 4, 5 | 6, 8, 10 och 9, 12, 15 |
| 5, 12, 13 | 10, 24, 26 |
| 8, 15, 17 | 16, 30, 34 |
| 7, 24, 25 | 14, 48, 50 |

### Triangelns area

| Metod | Formel |
|-------|--------|
| Bas × höjd | A = bh/2 |
| Två sidor + vinkel | A = ½ab·sin(C) |
| Herons formel | A = √[s(s-a)(s-b)(s-c)] |

där s = (a+b+c)/2 (halva omkretsen)

---

## 3.2 Speciella trianglar

### Liksidig triangel (sida a)
- Höjd: h = a√3/2
- Area: A = a²√3/4

### 30°-60°-90° triangel
Sidor i förhållande **1 : √3 : 2**
- Kortaste sidan (mot 30°) = a
- Mellansidan (mot 60°) = a√3
- Hypotenusa (mot 90°) = 2a

### 45°-45°-90° triangel
Sidor i förhållande **1 : 1 : √2**
- Kateter = a
- Hypotenusa = a√2

---

## 3.3 Likformighet och Kongruens

### Kongruens (≅)
Trianglar är kongruenta om de har exakt samma form och storlek.

**Kongruensvillkor:**
- **SSS** (sida-sida-sida)
- **SAS** (sida-vinkel-sida)
- **ASA** (vinkel-sida-vinkel)
- **AAS** (vinkel-vinkel-sida)

### Likformighet (~)
Trianglar är likformiga om de har samma form men olika storlek.

**Likformighetsvillkor:**
- **AA** (vinkel-vinkel)
- Alla sidor proportionella
- Två sidor proportionella + mellanliggande vinkel lika

### Skalförhållanden
Om sidorna har förhållandet k:
- Motsvarande sidor: förhållande k
- Motsvarande areor: förhållande k²
- Motsvarande volymer: förhållande k³

---

## 3.4 Cirkeln

### Grundbegrepp

| Begrepp | Definition |
|---------|------------|
| **Radie (r)** | Avståndet från centrum till randen |
| **Diameter (d)** | d = 2r |
| **Korda** | Linje mellan två punkter på cirkeln |
| **Tangent** | Linje som vidrör cirkeln i en punkt |
| **Sekant** | Linje som skär cirkeln i två punkter |
| **Båge** | Del av cirkelns rand |
| **Sektor** | "Tårtbit" - område mellan två radier |

### Formler

| Storhet | Formel |
|---------|--------|
| Omkrets | O = 2πr = πd |
| Area | A = πr² |
| Båglängd | b = (v°/360°) · 2πr |
| Sektorarea | A = (v°/360°) · πr² |

### Viktiga satser

#### Tangentegenskaper
1. **Tangenten är vinkelrät mot radien** vid beröringspunkten
2. **Tangentsträckor från samma punkt är lika långa**

#### Randvinkelsatsen
Randvinkel = ½ × Medelpunktsvinkel (samma båge)

#### Thales sats
Om AB är diameter och C ligger på cirkeln, då är vinkel ACB = 90°

### Kordans längd
Om avståndet från centrum till kordan = d, och radien = r:
$$\text{Kordans längd} = 2\sqrt{r^2 - d^2}$$

---

## 3.5 Fyrhörningar

### Vinkelsumma
**Summan av vinklarna i en fyrhörning = 360°**

### Formler

| Fyrhörning | Area | Speciellt |
|------------|------|-----------|
| **Rektangel** | A = ab | Diagonaler lika långa |
| **Kvadrat** | A = a² | Diagonal = a√2 |
| **Parallellogram** | A = bh | Motstående sidor parallella |
| **Romb** | A = d₁d₂/2 | Diagonaler vinkelräta |
| **Trapets** | A = (a+b)h/2 | Ett par parallella sidor |

---

## 3.6 Polygoner

### Vinkelsumma (n-hörning)
$$(n-2) \times 180°$$

### Inre vinkel (reguljär polygon)
$$\frac{(n-2) \times 180°}{n}$$

### Antal diagonaler
$$\frac{n(n-3)}{2}$$

### Vanliga polygoner

| n | Namn | Inre vinkel (reguljär) |
|---|------|------------------------|
| 3 | Triangel | 60° |
| 4 | Kvadrat | 90° |
| 5 | Pentagon | 108° |
| 6 | Hexagon | 120° |
| 8 | Oktogon | 135° |

---

## 3.7 Koordinatgeometri

### Avstånd mellan två punkter
$$d = \sqrt{(x_2-x_1)^2 + (y_2-y_1)^2}$$

### Mittpunkt
$$M = \left(\frac{x_1+x_2}{2}, \frac{y_1+y_2}{2}\right)$$

### Linjens ekvation
**k-form:** y = kx + m
- k = lutning (riktningskoefficient)
- m = skärning med y-axeln

### Lutning
$$k = \frac{y_2 - y_1}{x_2 - x_1}$$

### Parallella och vinkelräta linjer
- **Parallella:** k₁ = k₂
- **Vinkelräta:** k₁ · k₂ = -1

### Avstånd punkt till linje
Från punkt (x₀, y₀) till linjen ax + by + c = 0:
$$d = \frac{|ax_0 + by_0 + c|}{\sqrt{a^2 + b^2}}$$

### Cirkelns ekvation
Med centrum (a, b) och radie r:
$$(x-a)^2 + (y-b)^2 = r^2$$

---

# DEL 4: KOMBINATORIK & SANNOLIKHET

## 4.1 Grundprinciper

### Multiplikationsprincipen
Om en process har steg med n₁, n₂, ..., nₖ val vardera:
$$\text{Totalt antal sätt} = n_1 \times n_2 \times ... \times n_k$$

### Additionsprincipen
Om uppgift kan lösas på n sätt ELLER m sätt (ej samtidigt):
$$\text{Totalt} = n + m$$

### Komplementprincipen
$$\text{Gynnsamma} = \text{Totalt} - \text{Ogynnsamma}$$

---

## 4.2 Fakultet

$$n! = n \times (n-1) \times (n-2) \times ... \times 2 \times 1$$

| n | n! |
|---|-----|
| 0 | 1 |
| 1 | 1 |
| 2 | 2 |
| 3 | 6 |
| 4 | 24 |
| 5 | 120 |
| 6 | 720 |
| 7 | 5040 |
| 8 | 40320 |
| 9 | 362880 |
| 10 | 3628800 |

---

## 4.3 Permutationer

### Definition
En **permutation** är ett **ordnat** arrangemang.

### Formler
- Alla n objekt: **n!**
- Välja och ordna r av n: **P(n,r) = n!/(n-r)!**
- Med upprepningar: **n!/(n₁! × n₂! × ... × nₖ!)**

---

## 4.4 Kombinationer

### Definition
En **kombination** är ett **oordnat** urval.

### Formel
$$C(n,r) = \binom{n}{r} = \frac{n!}{r!(n-r)!}$$

### Viktiga egenskaper
- C(n,0) = C(n,n) = 1
- C(n,1) = C(n,n-1) = n
- C(n,r) = C(n,n-r) (symmetri)

### Pascals triangel
```
                1                     (n=0)
              1   1                   (n=1)
            1   2   1                 (n=2)
          1   3   3   1               (n=3)
        1   4   6   4   1             (n=4)
      1   5  10  10   5   1           (n=5)
    1   6  15  20  15   6   1         (n=6)
  1   7  21  35  35  21   7   1       (n=7)
1   8  28  56  70  56  28   8   1     (n=8)
```

### Vanliga värden
- C(5,2) = 10
- C(6,3) = 20
- C(7,3) = 35
- C(8,4) = 70
- C(10,5) = 252

---

##  4.5 TYPUPPGIFT: Vägräkning i rutnät (Prov 2012, Uppgift 2)

### Grundproblem
> I ett rutnät ska du gå från S (nedre vänstra) till M (övre högra).  
> Du får bara gå **uppåt** eller **åt höger**, ett steg i taget.

### Metod
Om du måste gå m steg höger och n steg uppåt:
$$\text{Antal vägar} = \binom{m+n}{m} = \binom{m+n}{n}$$

### Exempel 1: Grundläggande
> Hur många vägar i ett 5×5 rutnät?

5 steg höger + 5 steg uppåt = 10 steg
$$\binom{10}{5} = \frac{10!}{5! \times 5!} = 252 \text{ vägar}$$

### Exempel 2: Med förbjuden punkt
> Hur många vägar finns som INTE går via punkt P?

**Metod: Komplementprincipen**
$$\text{Vägar utan P} = \text{Alla vägar} - \text{Vägar via P}$$

**Vägar via P = (Vägar S→P) × (Vägar P→M)**

### Lösning Prov 2012
```
M ←─────────────────────┐
│                       │
│     [SKUGGAT          │
│      OMRÅDE]          │
│          ★            │
│                       │
└───────────────────────S
```

1. Totalt antal vägar: 252 (bekräftar 5×5 rutnät)
2. Beräkna vägar VIA ★
3. Subtrahera: Svar = 252 - (S→★) × (★→M)

###  MINNESREGEL
> **"Vägräkning i rutnät = Kombination!"**  
> **"Undvik punkt = Totalt − Via punkten"**

---

## 4.6 Sannolikhet

### Grundläggande definition
$$P(A) = \frac{\text{Antal gynnsamma utfall}}{\text{Antal möjliga utfall}}$$

### Egenskaper
- 0 ≤ P(A) ≤ 1
- P(säkert) = 1
- P(omöjligt) = 0

### Räkneregler

| Regel | Formel |
|-------|--------|
| Komplement | P(A') = 1 - P(A) |
| Addition | P(A ∪ B) = P(A) + P(B) - P(A ∩ B) |
| Addition (oförenliga) | P(A ∪ B) = P(A) + P(B) |
| Multiplikation (oberoende) | P(A ∩ B) = P(A) × P(B) |
| Villkorad | P(A\|B) = P(A ∩ B) / P(B) |

### "Minst en"-problem
**Strategi:** Använd komplement!
$$P(\text{minst en}) = 1 - P(\text{ingen})$$

**Exempel:** P(minst en sexa på 3 kast)
$$P = 1 - \left(\frac{5}{6}\right)^3 = 1 - \frac{125}{216} = \frac{91}{216} \approx 0,42$$

---

# DEL 5: ORDPROBLEM

## 5.1 Samarbetsproblem ("Fylla pool")

### Standardproblem
> A gör arbetet på a timmar, B på b timmar. Tid tillsammans?

### Lösning

$$t = \frac{ab}{a+b}$$

**Exempel:** A: 6 tim, B: 4 tim → t = (6×4)/(6+4) = 24/10 = **2,4 timmar**

### Med tre arbetare
$$t = \frac{1}{\frac{1}{a} + \frac{1}{b} + \frac{1}{c}}$$

### Fyllning och tömning
Om A fyller och B tömmer:
$$t = \frac{1}{\frac{1}{a} - \frac{1}{b}}$$

---

## 5.2 Rörelseproblem

### Grundformel
$$\text{sträcka} = \text{hastighet} \times \text{tid}$$

### Typ 1: Mötas (motriktade)
$$t = \frac{\text{total sträcka}}{v_1 + v_2}$$

### Typ 2: Ikapp (samma riktning)
$$t = \frac{\text{försprång}}{v_{\text{snabb}} - v_{\text{långsam}}}$$

### Typ 3: Rundbanor
- Mötas: t = omkrets / (v₁ + v₂)
- Ikapp: t = omkrets / |v₁ - v₂|

### Typ 4: Ström/Vind
- Medströms: v_effektiv = v_båt + v_ström
- Motströms: v_effektiv = v_båt - v_ström

### Genomsnittshastighet
$$v_{\text{medel}} = \frac{\text{total sträcka}}{\text{total tid}}$$

**OBS:** Inte aritmetiskt medelvärde!

---

## 5.3 Blandningsproblem

### Grundprincip: Massbalans
Mängd ämne före = Mängd ämne efter

### Koncentration
$$\text{Koncentration} = \frac{\text{mängd ämne}}{\text{total volym}}$$

### Blandning
Om du blandar V₁ liter med koncentration c₁ och V₂ liter med c₂:
$$c_{\text{ny}} = \frac{V_1 c_1 + V_2 c_2}{V_1 + V_2}$$

---

## 5.4 Åldersproblem

### Strategi
1. Definiera nuvarande ålder som x
2. Uttryck andra åldrar med x
3. Ställ upp ekvation
4. Lös och verifiera

**Exempel:**
> Lisa är dubbelt så gammal som Eva. Om 5 år är Lisa 1,5 gånger så gammal. Ålder?

Låt Eva = x, Lisa = 2x

Om 5 år: 2x + 5 = 1,5(x + 5)  
2x + 5 = 1,5x + 7,5  
0,5x = 2,5  
x = 5

**Eva: 5 år, Lisa: 10 år**

---

## 5.5 Procentproblem

### Formler
- Höjning med p%: nytt = gammalt × (1 + p/100)
- Sänkning med p%: nytt = gammalt × (1 - p/100)

### Successiva ändringar
**Exempel:** Först +20%, sedan -20%
1,20 × 0,80 = 0,96 = **4% total minskning!**

---

# DEL 6: PROBLEMLÖSNINGSSTRATEGIER

## 6.1 Pólyas 4-stegsmetod

### 1. Förstå problemet
- Vad är givet?
- Vad söks?
- Rita en bild!

### 2. Gör en plan
- Finns liknande problem?
- Introducera variabler
- Kan problemet delas upp?

### 3. Genomför planen
- Räkna noggrant
- Håll ordning på steg

### 4. Kontrollera
- Är svaret rimligt?
- Uppfylls alla villkor?

---

## 6.2 Specifika strategier

| Strategi | När använda |
|----------|-------------|
| **Rita en bild** | Geometri, rörelse |
| **Arbeta baklänges** | Slutresultat givet |
| **Testa systematiskt** | Heltalsproblem |
| **Förenkla** | Hitta mönster |
| **Använd extremfall** | Optimering |
| **Komplementprincipen** | "Minst en", "inte via" |

---

## 6.3 Vanliga algebraiska tekniker

- **Substituera:** Byt ut ett uttryck
- **Faktorisera:** Bryt ut gemensamma faktorer
- **Addera/subtrahera ekvationer:** Eliminera variabler
- **Multiplicera/dividera ekvationer:** Kombinera information

---

# FORMELSAMLING

## Aritmetik & Talteori
- SGD(a,b) × MGM(a,b) = a × b
- Antal divisorer: (a₁+1)(a₂+1)...(aₖ+1)

## Algebra
- (a+b)² = a² + 2ab + b²
- (a-b)² = a² - 2ab + b²
- a² - b² = (a+b)(a-b)
- PQ-formeln: x = -p/2 ± √(p²/4 - q)
- Aritmetisk summa: Sₙ = n(a₁ + aₙ)/2
- Geometrisk summa: Sₙ = a₁(kⁿ - 1)/(k - 1)

## Geometri
- Pythagoras: a² + b² = c²
- Triangelarea: A = bh/2
- Cirkelomkrets: O = 2πr
- Cirkelarea: A = πr²
- Vinkelsumma triangel: 180°
- Vinkelsumma n-hörning: (n-2)×180°
- Avstånd: d = √[(x₂-x₁)² + (y₂-y₁)²]

## Kombinatorik
- Permutation: P(n,r) = n!/(n-r)!
- Kombination: C(n,r) = n!/[r!(n-r)!]
- Vägräkning: C(m+n, m)

## Sannolikhet
- P(A) = gynnsamma/möjliga
- P(A') = 1 - P(A)
- P(minst en) = 1 - P(ingen)

## Ordproblem
- Samarbete: t = ab/(a+b)
- Mötas: t = s/(v₁+v₂)
- Ikapp: t = försprång/(v_snabb - v_långsam)

---

# ÖVNINGSPROV

## ÖVNINGSPROV 1

### Uppgift 1 (Talteori)
> x, y, z är heltal > 1  
> xy = 280, yz = 210, xz delbar med 6  
> Bestäm xz.

### Uppgift 2 (Vägräkning)
> I ett 5×4 rutnät:
> a) Hur många vägar totalt?
> b) Hur många via (3,2)?
> c) Hur många INTE via (3,2)?

### Uppgift 3 (Geometri)
> Cirkel med radie 10, korda med längd 16.
> a) Avstånd centrum till korda?
> b) Medelpunktsvinkel?

### Uppgift 4 (Ordproblem)
> A fyller pool på 8h, B på 12h, C tömmer på 24h.
> Tid med alla öppna?

### Uppgift 5 (Sannolikhet)
> Tärning kastas 5 gånger. P(minst en sexa)?

---

## ÖVNINGSPROV 2

### Uppgift 1 (Algebra)
> xy = 100, x + y = 25, x > y. Hitta x och y.

### Uppgift 2 (Kombinatorik)
> Hur många 5-siffriga tal med 1,2,3,4,5 (utan upprepning) är delbara med 4?

### Uppgift 3 (Geometri)
> Rätvinklig triangel ABC, rät vinkel vid C.
> AC = 6, BC = 8.
> a) AB?
> b) Höjd från C till AB?
> c) Inkretsradie?

### Uppgift 4 (Talföljd)
> Geometrisk följd: a₂ = 6, a₅ = 162. Hitta a₁ och k.

### Uppgift 5 (Ordproblem)
> Lisa cyklar 15 km/h. 10 min senare startar Erik med 45 km/h.
> När kommer Erik ikapp? Hur långt har de färdats?

---

# FACIT

## Övningsprov 1
1. xz = 12 (eller annat värde beroende på y)
2. a) 126  b) 60  c) 66
3. a) 6 cm  b) ≈ 106,3°
4. 6 timmar
5. ≈ 59,8%

## Övningsprov 2
1. x = 20, y = 5
2. 24 tal
3. a) 10 cm  b) 4,8 cm  c) 2 cm
4. a₁ = 2, k = 3
5. 5 minuter, 3,75 km

---

# CHECKLISTOR

##  Innan provet
- [ ] Repetera alla formler
- [ ] Gör övningsprov under tidspress
- [ ] Sov gott natten innan
- [ ] Ta med tillåtna hjälpmedel

##  Under provet
- [ ] Läs ALLA uppgifter först
- [ ] Börja med uppgifter du kan
- [ ] Visa alla steg
- [ ] Kontrollera svaren
- [ ] Ge aldrig upp!

##  Vanliga fel att undvika
- Glömma ändra tecken vid multiplikation med negativt
- Förväxla permutation och kombination
- Glömma enheter
- Räknefel med negativa tal
- Inte kontrollera mot originalvillkor

---

#  MINNESREGLER

## Talteori
> **"3 och 9: Siffersumma!"**  
> **"SGD = Minsta exponenter, MGM = Största"**

## Algebra
> **"Negativt tal → BYT tecken på olikheten!"**

## Kombinatorik
> **"Ordning spelar roll? → Permutation"**  
> **"Ordning spelar inte roll? → Kombination"**  
> **"Vägräkning = Kombination!"**

## Geometri
> **"Tangent ⊥ Radie"**  
> **"Randvinkel = ½ Medelpunktsvinkel"**

---

**Lycka till på provet, Yvonna! **

*Version 1.0 - December 2024*  
*Baserad på Hvitfeldska intagningsprov 2010-2025*
