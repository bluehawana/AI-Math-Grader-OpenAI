# ÖVNINGSPROV & FLER TYPUPPGIFTER

## 📝 Träningsuppgifter för Hvitfeldska Spetsutbildning

---

# ÖVNINGSPROV 1

## Uppgift 1 - Talteori (10 min)
> Tre positiva heltal x, y och z uppfyller:
> - xy = 280
> - yz = 210  
> - xz är delbar med 6
> 
> Bestäm produkten xz.

<details>
<summary>Ledtråd</summary>

Faktorisera:
- 280 = 2³ × 5 × 7
- 210 = 2 × 3 × 5 × 7

Hitta SGD och lista möjliga y-värden.
</details>

<details>
<summary>Fullständig lösning</summary>

**Steg 1: Primtalsfaktorisering**
- 280 = 2³ × 5 × 7
- 210 = 2 × 3 × 5 × 7

**Steg 2: Hitta möjliga y**
SGD(280, 210) = 2 × 5 × 7 = 70
Divisorer > 1: 2, 5, 7, 10, 14, 35, 70

**Steg 3: Testa systematiskt**

| y | x = 280/y | z = 210/y | xz | Delbar med 6? |
|---|-----------|-----------|-----|---------------|
| 2 | 140 | 105 | 14700 | 14700/6=2450 ✓ |
| 5 | 56 | 42 | 2352 | 2352/6=392 ✓ |
| 7 | 40 | 30 | 1200 | 1200/6=200 ✓ |
| 10 | 28 | 21 | 588 | 588/6=98 ✓ |
| 14 | 20 | 15 | 300 | 300/6=50 ✓ |
| 35 | 8 | 6 | 48 | 48/6=8 ✓ |
| 70 | 4 | 3 | 12 | 12/6=2 ✓ |

Alla uppfyller villkoret! Utan ytterligare information finns flera lösningar.
Om problemet säger "minsta xz" är svaret **12**.

</details>

---

## Uppgift 2 - Vägräkning (15 min)
> I ett 5×4 rutnät ska du gå från nedre vänstra hörnet till övre högra hörnet.
> Du får endast gå uppåt eller åt höger.
> 
> a) Hur många vägar finns totalt?
> b) Hur många vägar passerar genom punkten (3, 2)?
> c) Hur många vägar passerar INTE genom punkten (3, 2)?

<details>
<summary>Lösning</summary>

**a) Totalt antal vägar**
5 steg höger + 4 steg uppåt = 9 steg totalt
$\binom{9}{5} = \binom{9}{4} = 126$ vägar

**b) Via (3, 2)**
- (0,0) till (3,2): $\binom{5}{3} = 10$
- (3,2) till (5,4): $\binom{4}{2} = 6$
- Totalt via (3,2): 10 × 6 = 60 vägar

**c) Inte via (3, 2)**
126 - 60 = **66 vägar**

</details>

---

## Uppgift 3 - Geometri (12 min)
> I en cirkel med centrum O och radie 10 cm är AB en korda med längd 16 cm.
> 
> a) Hur långt är det från centrum O till kordan AB?
> b) Hur stor är medelpunktsvinkeln AOB?

<details>
<summary>Lösning</summary>

**a) Avstånd centrum till korda**
Avståndet d från O till AB delar kordan mitt itu.
Halva kordan = 8 cm

Pythagoras: $d^2 + 8^2 = 10^2$
$d^2 = 100 - 64 = 36$
$d = 6$ cm

**b) Medelpunktsvinkel**
I triangel OAM (M = mittpunkt av AB):
$\sin(\angle AOM) = \frac{8}{10} = 0.8$
$\angle AOM = \arcsin(0.8) \approx 53.13°$
$\angle AOB = 2 \times 53.13° \approx 106.3°$

Eller med cosinus:
$\cos(\angle AOM) = \frac{6}{10} = 0.6$
$\angle AOM = \arccos(0.6) \approx 53.13°$

</details>

---

## Uppgift 4 - Ordproblem (10 min)
> Kran A fyller en bassäng på 8 timmar. Kran B fyller samma bassäng på 12 timmar.
> Avlopp C tömmer bassängen på 24 timmar.
> 
> Om alla tre är öppna samtidigt (båda kranarna fyller, avloppet tömmer),
> hur lång tid tar det att fylla bassängen?

<details>
<summary>Lösning</summary>

**Hastigheter:**
- Kran A: +1/8 bassäng/timme
- Kran B: +1/12 bassäng/timme  
- Avlopp C: -1/24 bassäng/timme

**Total hastighet:**
$\frac{1}{8} + \frac{1}{12} - \frac{1}{24}$

Gemensam nämnare = 24:
$= \frac{3}{24} + \frac{2}{24} - \frac{1}{24} = \frac{4}{24} = \frac{1}{6}$

**Tid:** 6 timmar

</details>

---

## Uppgift 5 - Sannolikhet (8 min)
> En tärning kastas 5 gånger. Vad är sannolikheten att få minst en sexa?

<details>
<summary>Lösning</summary>

**Komplement:** P(minst en sexa) = 1 - P(ingen sexa)

P(inte sexa på ett kast) = 5/6

P(ingen sexa på 5 kast) = $(5/6)^5 = \frac{3125}{7776}$

P(minst en sexa) = $1 - \frac{3125}{7776} = \frac{4651}{7776} \approx 0.598$

**Svar:** Cirka 60%

</details>

---

# ÖVNINGSPROV 2

## Uppgift 1 - Algebra (8 min)
> Lös ekvationssystemet:
> $xy = 100$
> $x + y = 25$
> där x > y

<details>
<summary>Lösning</summary>

Från x + y = 25: y = 25 - x

Insättning: x(25 - x) = 100
25x - x² = 100
x² - 25x + 100 = 0

PQ-formeln: $x = \frac{25}{2} \pm \sqrt{\frac{625}{4} - 100}$
$= 12.5 \pm \sqrt{56.25}$
$= 12.5 \pm 7.5$

x = 20 eller x = 5

Eftersom x > y: **x = 20, y = 5**

</details>

---

## Uppgift 2 - Kombinatorik (10 min)
> Hur många 5-siffriga tal kan bildas med siffrorna 1, 2, 3, 4, 5 (utan upprepning)
> där talet är delbart med 4?

<details>
<summary>Lösning</summary>

Ett tal är delbart med 4 om de två sista siffrorna bildar ett tal delbart med 4.

**Möjliga slutpar (från 1,2,3,4,5):**
12, 24, 32, 52 (alla delbara med 4)

**För varje slutpar:**
Kvar: 3 siffror att ordna på de 3 första platserna
= 3! = 6 sätt

**Totalt:** 4 × 6 = **24 tal**

</details>

---

## Uppgift 3 - Geometri (15 min)
> En rätvinklig triangel ABC har räta vinkeln vid C.
> AC = 6 cm, BC = 8 cm.
> 
> a) Beräkna AB.
> b) Beräkna höjden från C till AB.
> c) Beräkna radien för den inskrivna cirkeln.

<details>
<summary>Lösning</summary>

**a) Hypotenusan**
$AB = \sqrt{6^2 + 8^2} = \sqrt{36 + 64} = \sqrt{100} = 10$ cm

**b) Höjden till AB**
Area = ½ × 6 × 8 = 24 cm²
Area = ½ × AB × h
24 = ½ × 10 × h
h = 48/10 = **4.8 cm**

**c) Inkretsradie**
Formel: $r = \frac{A}{s}$ där s = halva omkretsen
s = (6 + 8 + 10)/2 = 12
r = 24/12 = **2 cm**

</details>

---

## Uppgift 4 - Talföljd (8 min)
> I en geometrisk talföljd är a₂ = 6 och a₅ = 162.
> Bestäm första termen a₁ och kvoten k.

<details>
<summary>Lösning</summary>

$a_2 = a_1 \cdot k = 6$
$a_5 = a_1 \cdot k^4 = 162$

Dividera: $\frac{a_5}{a_2} = \frac{a_1 k^4}{a_1 k} = k^3 = \frac{162}{6} = 27$

$k = 3$

$a_1 = \frac{6}{k} = \frac{6}{3} = 2$

**Svar: a₁ = 2, k = 3**

</details>

---

## Uppgift 5 - Ordproblem (10 min)
> Lisa cyklar mot skolan med hastigheten 15 km/h. Efter 10 minuter startar hennes bror
> Erik på moped med hastigheten 45 km/h. Hur lång tid tar det för Erik att komma ikapp Lisa?
> Hur långt har de då färdats?

<details>
<summary>Lösning</summary>

**Lisas försprång:**
På 10 min = 1/6 timme färdas Lisa: 15 × 1/6 = 2.5 km

**Eriks relativa hastighet:**
45 - 15 = 30 km/h snabbare

**Tid att komma ikapp:**
2.5 km ÷ 30 km/h = 1/12 timme = 5 minuter

**Sträcka:**
Erik färdas: 45 × 1/12 = 3.75 km

**Svar:** Erik kommer ikapp efter **5 minuter**, de har då färdats **3.75 km** var.

</details>

---

# EXTRA UTMANINGAR

## Utmaning 1 - Diofantisk ekvation
> Hitta alla positiva heltalslösningar till:
> $\frac{1}{x} + \frac{1}{y} = \frac{1}{6}$

<details>
<summary>Lösning</summary>

Multiplicera med 6xy:
6y + 6x = xy
xy - 6x - 6y = 0
xy - 6x - 6y + 36 = 36
(x-6)(y-6) = 36

Faktorisera 36: 1×36, 2×18, 3×12, 4×9, 6×6

Lösningar (x-6, y-6):
(1,36): x=7, y=42
(2,18): x=8, y=24
(3,12): x=9, y=18
(4,9): x=10, y=15
(6,6): x=12, y=12

Plus symmetriska: (36,1), (18,2), etc.

</details>

---

## Utmaning 2 - Geometri
> Två cirklar med radier 3 och 4 har sina centrum 5 enheter från varandra.
> Hur lång är deras gemensamma korda?

<details>
<summary>Lösning</summary>

Låt O₁ och O₂ vara centra, r₁=3, r₂=4, O₁O₂=5
Låt x = avstånd från O₁ till kordan.

I triangel med O₁ till skärning:
$x^2 + h^2 = 9$ (radie 3)

I triangel med O₂ till skärning:
$(5-x)^2 + h^2 = 16$ (radie 4)

Subtrahera:
$x^2 - (5-x)^2 = 9 - 16 = -7$
$x^2 - 25 + 10x - x^2 = -7$
$10x = 18$
$x = 1.8$

$h^2 = 9 - 1.8^2 = 9 - 3.24 = 5.76$
$h = 2.4$

Kordans längd = 2h = **4.8 enheter**

</details>

---

## Utmaning 3 - Kombinatorik
> På hur många sätt kan 8 personer sitta runt ett cirkulärt bord om två specifika
> personer INTE får sitta bredvid varandra?

<details>
<summary>Lösning</summary>

**Totalt antal cirkulära permutationer:** (8-1)! = 7! = 5040

**Antal där A och B sitter bredvid varandra:**
Behandla A och B som en enhet → 7 objekt
Cirkulära permutationer: (7-1)! = 6! = 720
A och B kan byta plats inom enheten: 2 sätt
Totalt: 720 × 2 = 1440

**Ej bredvid varandra:** 5040 - 1440 = **3600 sätt**

</details>

---

# FACIT ÖVNINGSPROV 1

1. xz = 12 (minsta möjliga)
2. a) 126, b) 60, c) 66
3. a) 6 cm, b) ≈ 106.3°
4. 6 timmar
5. ≈ 59.8%

# FACIT ÖVNINGSPROV 2

1. x = 20, y = 5
2. 24 tal
3. a) 10 cm, b) 4.8 cm, c) 2 cm
4. a₁ = 2, k = 3
5. 5 minuter, 3.75 km

---

*Fortsätt träna! Varje problem du löser gör dig bättre!*

**Lycka till på det riktiga provet! 🍀**
