# ORDPROBLEM & PROBLEMLÖSNING - FÖRDJUPNING

## 📖 Komplett Guide till Ordproblem och Strategier

---

# KAPITEL 1: SAMARBETSPROBLEM

## 1.1 Grundtyp: "Fylla pool/bassäng"

### Standardproblem
> Person A kan fylla en pool på a timmar.
> Person B kan fylla samma pool på b timmar.
> Hur lång tid tar det om de arbetar tillsammans?

### LÖSNINGSMETOD

**Steg 1: Bestäm arbetshastigheter**
- A:s hastighet = 1/a (pooler per timme)
- B:s hastighet = 1/b (pooler per timme)

**Steg 2: Addera hastigheter**
- Total hastighet = 1/a + 1/b = (a+b)/(ab)

**Steg 3: Beräkna tid**
- Tid = 1 / (total hastighet) = ab/(a+b)

### 📝 FORMEL
$$t = \frac{ab}{a+b}$$

---

### Exempel 1
> Pump A fyller en pool på 6 timmar. Pump B fyller på 4 timmar. Hur lång tid tar det tillsammans?

**Lösning:**
$$t = \frac{6 \times 4}{6 + 4} = \frac{24}{10} = 2.4 \text{ timmar} = 2 \text{ timmar } 24 \text{ minuter}$$

---

### Exempel 2
> Kran A fyller ett bad på 12 min. Kran B fyller på 18 min. Hur lång tid tar det med båda?

**Lösning:**
$$t = \frac{12 \times 18}{12 + 18} = \frac{216}{30} = 7.2 \text{ minuter}$$

---

## 1.2 Variant: Tre arbetare

### Formel för tre
$$t = \frac{1}{\frac{1}{a} + \frac{1}{b} + \frac{1}{c}}$$

### Exempel
> A: 6 tim, B: 4 tim, C: 12 tim. Tillsammans?

$$t = \frac{1}{\frac{1}{6} + \frac{1}{4} + \frac{1}{12}} = \frac{1}{\frac{2+3+1}{12}} = \frac{12}{6} = 2 \text{ timmar}$$

---

## 1.3 Variant: Fyllning och tömning

### Problem
> Kran A fyller på 10 min. Avlopp B tömmer på 15 min. Hur lång tid med båda öppna?

### Lösning
- A:s hastighet: +1/10 (fyller)
- B:s hastighet: -1/15 (tömmer)
- Total: 1/10 - 1/15 = (3-2)/30 = 1/30

**Tid: 30 minuter**

---

## 1.4 Variant: Delad arbetstid

### Problem
> A och B arbetar tillsammans i t timmar, sedan arbetar B ensam. Hur lång tid totalt?

### Metod
1. Beräkna hur mycket gjort under gemensamt arbete
2. Beräkna återstående arbete
3. Beräkna tid för återstående arbete

---

# KAPITEL 2: RÖRELSEPROBLEM

## 2.1 Grundformel

$$\text{sträcka} = \text{hastighet} \times \text{tid}$$
$$s = v \cdot t$$

### Enhetsomvandling
- km/h → m/s: dividera med 3.6
- m/s → km/h: multiplicera med 3.6

---

## 2.2 Typ 1: Mötas (motriktade)

### Problem
> Två bilar startar samtidigt mot varandra, 200 km ifrån. Bil A: 60 km/h, Bil B: 40 km/h. När möts de?

### Metod
De närmar sig varandra med kombinerad hastighet.

$$t = \frac{\text{total sträcka}}{v_A + v_B} = \frac{200}{60+40} = 2 \text{ timmar}$$

### Var möts de?
Bil A: 60 × 2 = 120 km från start
Bil B: 40 × 2 = 80 km från start

---

## 2.2 Typ 2: Ikapp (samma riktning)

### Problem
> Person A startar och går 4 km/h. 30 min senare startar B som går 6 km/h. När kommer B ikapp?

### Metod
1. A:s försprång = 4 × 0.5 = 2 km
2. B närmar sig med 6 - 4 = 2 km/h
3. Tid för B att komma ikapp = 2/2 = 1 timme

**B kommer ikapp efter 1 timme (1.5 h efter A:s start)**

---

## 2.3 Typ 3: Rundbanor

### Mötas på rundbana (motriktade)
$$t = \frac{\text{omkrets}}{v_A + v_B}$$

### Ikapp på rundbana (samma riktning)
$$t = \frac{\text{omkrets}}{|v_A - v_B|}$$

---

## 2.4 Typ 4: Ström/Vind

### Formler
- Medströms: $v_{effektiv} = v_{båt} + v_{ström}$
- Motströms: $v_{effektiv} = v_{båt} - v_{ström}$

### Exempel
> En båt med fart 12 km/h i stillastående vatten. Strömmen: 3 km/h. Tid att färdas 30 km medströms?

$$t = \frac{30}{12+3} = \frac{30}{15} = 2 \text{ timmar}$$

---

## 2.5 Typ 5: Genomsnittshastighet

### VARNING: Inte aritmetiskt medelvärde!

### Rätt formel
$$v_{medel} = \frac{\text{total sträcka}}{\text{total tid}}$$

### Exempel
> Resa dit med 60 km/h, hem med 40 km/h. Genomsnittshastighet?

Om sträckan = d:
- Tid dit: d/60
- Tid hem: d/40
- Total tid: d/60 + d/40 = (2d + 3d)/120 = 5d/120
- Total sträcka: 2d

$$v_{medel} = \frac{2d}{5d/120} = \frac{2d \times 120}{5d} = 48 \text{ km/h}$$

---

# KAPITEL 3: BLANDNINGSPROBLEM

## 3.1 Grundprincip

### Massbalans
**Mängd före = Mängd efter**

### Koncentration
$$\text{Koncentration} = \frac{\text{mängd lösningsmedel}}{\text{total volym}}$$

---

## 3.2 Typ 1: Blanda två lösningar

### Problem
> 3 liter 20% saltlösning blandas med 5 liter 40% saltlösning. Koncentration?

### Lösning
- Salt i 1:a: 3 × 0.20 = 0.6 liter
- Salt i 2:a: 5 × 0.40 = 2.0 liter
- Totalt salt: 2.6 liter
- Total volym: 8 liter
- Koncentration: 2.6/8 = 0.325 = **32.5%**

---

## 3.3 Typ 2: Späda ut

### Problem
> Hur mycket vatten ska tillsättas till 2 liter 30% lösning för att få 20%?

### Lösning
Låt x = tillsatt vatten
- Salt: 2 × 0.30 = 0.6 liter (oförändrat)
- Ny volym: 2 + x
- Ny koncentration: 0.6/(2+x) = 0.20

Lös: 0.6 = 0.20(2+x)
0.6 = 0.4 + 0.2x
0.2 = 0.2x
x = 1 liter

---

## 3.4 Typ 3: Koncentrera

### Metod: Avdunstning
Om vatten avdunstar, minskar volymen men mängden lösningsmedel är konstant.

---

# KAPITEL 4: ÅLDERSPROBLEM

## 4.1 Grundstrategi

1. Definiera variabel (vanligtvis nuvarande ålder)
2. Uttryck andra åldrar relativt variabeln
3. Ställ upp ekvation baserat på given information
4. Lös och verifiera

---

## 4.2 Typexempel

### Exempel 1
> Lisa är dubbelt så gammal som Eva. Om 5 år är Lisa 1.5 gånger så gammal som Eva. Hur gamla är de nu?

**Lösning:**
Låt Eva = x år nu
Lisa = 2x år nu

Om 5 år:
- Eva: x + 5
- Lisa: 2x + 5

Villkor: 2x + 5 = 1.5(x + 5)
2x + 5 = 1.5x + 7.5
0.5x = 2.5
x = 5

**Eva: 5 år, Lisa: 10 år**

Kontroll: Om 5 år: Eva 10, Lisa 15. 15/10 = 1.5 ✓

---

### Exempel 2
> En far är 4 gånger så gammal som sin son. För 5 år sedan var fadern 7 gånger så gammal som sonen. Ålder?

**Lösning:**
Låt son = x
Far = 4x

För 5 år sedan:
4x - 5 = 7(x - 5)
4x - 5 = 7x - 35
30 = 3x
x = 10

**Son: 10 år, Far: 40 år**

Kontroll: 5 år sedan: son 5, far 35. 35/5 = 7 ✓

---

# KAPITEL 5: ÖVRIGA ORDPROBLEM

## 5.1 Procentproblem

### Formler
- Höjning med p%: nytt = gammalt × (1 + p/100)
- Sänkning med p%: nytt = gammalt × (1 - p/100)
- Procentuell förändring: (nytt - gammalt)/gammalt × 100

### Successiva ändringar
Första höjning 20%, sedan sänkning 20%:
1.20 × 0.80 = 0.96 = **4% total minskning!**

---

## 5.2 Pengar och ränta

### Enkel ränta
$$A = P(1 + rt)$$

### Sammansatt ränta
$$A = P(1 + r)^t$$

där P = kapital, r = räntesats (decimal), t = tid

---

## 5.3 Sifferproblem

### Tvåsiffrigt tal
Om tiotalssiffran = a, entalssiffran = b:
Talet = 10a + b

### Exempel
> Siffersumman i ett tvåsiffrigt tal är 12. Om siffrorna byter plats ökar talet med 36. Vilket är talet?

Låt talet = 10a + b
a + b = 12 ... (1)
(10b + a) - (10a + b) = 36
9b - 9a = 36
b - a = 4 ... (2)

Från (1) och (2): b = 8, a = 4
**Talet: 48**

Kontroll: 84 - 48 = 36 ✓

---

# KAPITEL 6: PROBLEMLÖSNINGSSTRATEGIER

## 6.1 Allmän strategi (Pólya's metod)

### 1. Förstå problemet
- Vad är givet?
- Vad söks?
- Vilka villkor finns?
- Rita en bild om möjligt

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
- Kan lösningen förbättras?

---

## 6.2 Specifika strategier

### Rita en bild
Särskilt användbart för geometri och rörelseproblem.

### Arbeta baklänges
Börja från svaret och arbeta mot givna villkor.

### Testa systematiskt
Gör en tabell med alla möjligheter.

### Förenkla
Testa med mindre tal först för att hitta mönster.

### Använd extremfall
Vad händer om en variabel är 0 eller maximal?

### Motsägelsebevis
Antag motsatsen och visa att det leder till motsägelse.

---

## 6.3 Vanliga algebraiska tekniker

### Substituera
Byt ut ett uttryck mot ett enklare

### Komplettera kvadraten
$x^2 + bx = (x + \frac{b}{2})^2 - \frac{b^2}{4}$

### Faktorisera
Hitta gemensamma faktorer

### Addera/subtrahera ekvationer
Kombinera ekvationer för att eliminera variabler

---

# KAPITEL 7: ÖVNINGAR

## Övning 1: Samarbete
> Maskin A gör ett arbete på 10 dagar. Maskin B på 15 dagar. Maskin C på 20 dagar. Hur lång tid med alla tre?

<details>
<summary>Lösning</summary>

$t = \frac{1}{\frac{1}{10} + \frac{1}{15} + \frac{1}{20}}$

Gemensam nämnare: 60
$= \frac{1}{\frac{6+4+3}{60}} = \frac{60}{13} \approx 4.62$ dagar

</details>

---

## Övning 2: Rörelse
> Tåg A lämnar stad X mot stad Y med 80 km/h. Tåg B lämnar stad Y mot stad X med 120 km/h. Avståndet är 400 km. När och var möts de?

<details>
<summary>Lösning</summary>

Kombinerad hastighet: 80 + 120 = 200 km/h
Tid: 400/200 = 2 timmar
Tåg A har färdats: 80 × 2 = 160 km från X

</details>

---

## Övning 3: Blandning
> 5 kg av en 30% lösning ska blandas med en 60% lösning för att få 40%. Hur mycket av 60%-lösningen behövs?

<details>
<summary>Lösning</summary>

Låt x = kg av 60%-lösning
5 × 0.30 + x × 0.60 = (5 + x) × 0.40
1.5 + 0.6x = 2 + 0.4x
0.2x = 0.5
x = 2.5 kg

</details>

---

## Övning 4: Ålder
> Summan av Marias och Peters åldrar är 54. För 6 år sedan var Maria dubbelt så gammal som Peter. Hur gamla är de?

<details>
<summary>Lösning</summary>

M + P = 54
M - 6 = 2(P - 6)
M = 2P - 6

2P - 6 + P = 54
3P = 60
P = 20, M = 34

Kontroll: 34-6 = 28 = 2 × 14 = 2(20-6) ✓

</details>

---

## Övning 5: Procent
> En vara sänks med 20%, sedan höjs priset med 25%. Hur har priset förändrats totalt?

<details>
<summary>Lösning</summary>

Faktor: 0.80 × 1.25 = 1.00

**Priset är oförändrat!**

</details>

---

# 📝 SNABBREFERENS: FORMLER

| Problemtyp | Formel |
|------------|--------|
| Samarbete (2 pers) | $t = \frac{ab}{a+b}$ |
| Mötas | $t = \frac{s}{v_1+v_2}$ |
| Ikapp | $t = \frac{\text{försprång}}{v_{snabb}-v_{långsam}}$ |
| Genomsnittshastighet | $v = \frac{s_{total}}{t_{total}}$ |
| Sammansatt ränta | $A = P(1+r)^t$ |

---

*Denna del täcker alla vanliga ordproblem på provet!*
