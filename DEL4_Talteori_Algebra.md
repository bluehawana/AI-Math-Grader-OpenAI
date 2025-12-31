# TALTEORI & ALGEBRA - FÖRDJUPNING

## 🔢 Komplett Guide till Talteori och Algebra

---

# KAPITEL 1: TALTEORI

## 1.1 Delbarhetsregler

| Tal | Regel | Exempel |
|-----|-------|---------|
| **2** | Sista siffran jämn | 1234 ✓ (slutar på 4) |
| **3** | Siffersumman delbar med 3 | 156: 1+5+6=12 ✓ |
| **4** | Sista två siffrorna delbara med 4 | 1324: 24/4=6 ✓ |
| **5** | Slutar på 0 eller 5 | 1235 ✓ |
| **6** | Delbar med både 2 och 3 | 1254: jämn + 1+2+5+4=12 ✓ |
| **7** | (Ingen enkel regel) | Dividera direkt |
| **8** | Sista tre siffrorna delbara med 8 | 5016: 016/8=2 ✓ |
| **9** | Siffersumman delbar med 9 | 2286: 2+2+8+6=18 ✓ |
| **10** | Slutar på 0 | 1230 ✓ |
| **11** | Alternerande siffersumma delbar med 11 | 2728: 2-7+2-8=-11 ✓ |
| **12** | Delbar med både 3 och 4 | |

---

## 1.2 Primtal

### Definition
Ett **primtal** är ett heltal > 1 som endast har divisorerna 1 och sig själv.

### Primtal under 100
2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97

### Primtalstest
För att testa om n är primtal:
1. Dividera med alla primtal ≤ √n
2. Om ingen går jämnt ut → n är primtal

---

## 1.3 Primtalsfaktorisering

### Aritmetikens fundamentalsats
Varje heltal > 1 kan skrivas som en **unik** produkt av primtal.

### Metod: Faktorträd
```
350
├── 2
└── 175
    ├── 5
    └── 35
        ├── 5
        └── 7

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
Om $n = p_1^{a_1} \times p_2^{a_2} \times ... \times p_k^{a_k}$

Antal divisorer = $(a_1 + 1)(a_2 + 1)...(a_k + 1)$

**Exempel:** 350 = 2¹ × 5² × 7¹
Antal divisorer = (1+1)(2+1)(1+1) = 2 × 3 × 2 = 12

### Hitta alla divisorer
Kombinera primfaktorer systematiskt.

350: 1, 2, 5, 7, 10, 14, 25, 35, 50, 70, 175, 350

---

## 1.5 SGD och MGM

### SGD (Största Gemensamma Delare)

**Metod 1: Primtalsfaktorisering**
1. Faktorisera båda talen
2. Ta gemensamma primfaktorer med LÄGSTA exponent

**Exempel:** SGD(350, 180)
- 350 = 2 × 5² × 7
- 180 = 2² × 3² × 5
- SGD = 2¹ × 5¹ = 10

**Metod 2: Euklides algoritm**
```
SGD(350, 180):
350 = 1 × 180 + 170
180 = 1 × 170 + 10
170 = 17 × 10 + 0
→ SGD = 10
```

### MGM (Minsta Gemensamma Multipel)

**Metod 1: Primtalsfaktorisering**
Ta alla primfaktorer med HÖGSTA exponent

**Exempel:** MGM(350, 180)
MGM = 2² × 3² × 5² × 7 = 6300

**Metod 2: Formel**
$$MGM(a,b) = \frac{a \times b}{SGD(a,b)}$$

---

## ⭐ 1.6 TYPUPPGIFT: Heltalsekvationer

### Problem (Typ Prov 2015)

> x, y, z är heltal > 1
> xy = 350, yz = 180
> xz är delbar med 8
> Bestäm xz.

### KOMPLETT LÖSNINGSMETOD

**Steg 1: Primtalsfaktorisera**
- 350 = 2 × 5² × 7
- 180 = 2² × 3² × 5

**Steg 2: Hitta möjliga y**
y är en gemensam divisor till 350 och 180.
SGD(350, 180) = 2 × 5 = 10
Divisorer till 10 som är > 1: **2, 5, 10**

**Steg 3: Testa varje y systematiskt**

| y | x = 350/y | z = 180/y | xz | Delbar med 8? |
|---|-----------|-----------|-----|---------------|
| 2 | 175 | 90 | 15750 | 15750/8 = 1968,75 ✗ |
| 5 | 70 | 36 | 2520 | 2520/8 = 315 ✓ |
| 10 | 35 | 18 | 630 | 630/8 = 78,75 ✗ |

**Steg 4: Verifiera**
- y = 5: x = 70, z = 36
- xy = 70 × 5 = 350 ✓
- yz = 5 × 36 = 180 ✓
- xz = 70 × 36 = 2520, 2520/8 = 315 ✓

**SVAR: xz = 2520**

### 📝 MINNESSTRATEGI
> 1. **Faktorisera** båda produkterna
> 2. **Lista** gemensamma divisorer (SGD)
> 3. **Testa** systematiskt
> 4. **Kontrollera** alla villkor

---

## 1.7 Algebraiska operationer på ekvationer

### Multiplicera ekvationer
$$xy \times yz = 350 \times 180$$
$$xy^2z = 63000$$

### Dividera ekvationer
$$\frac{xy}{yz} = \frac{350}{180}$$
$$\frac{x}{z} = \frac{35}{18}$$

### Kombinerad analys
Om $\frac{x}{z} = \frac{35}{18}$ och xz är delbar med 8:
- x = 35k, z = 18k för något k
- xz = 630k²
- 630k² måste vara delbar med 8
- 630 = 2 × 3² × 5 × 7 (endast en faktor 2)
- k² måste bidra med minst 2² = 4
- k måste vara delbar med 2

---

# KAPITEL 2: ALGEBRA

## 2.1 Polynom och Faktorisering

### Konjugatregeln
$$a^2 - b^2 = (a+b)(a-b)$$

### Kvadreringsreglerna
$$\begin{align}
(a+b)^2 &= a^2 + 2ab + b^2 \\
(a-b)^2 &= a^2 - 2ab + b^2
\end{align}$$

### Kubformler
$$\begin{align}
a^3 + b^3 &= (a+b)(a^2 - ab + b^2) \\
a^3 - b^3 &= (a-b)(a^2 + ab + b^2) \\
(a+b)^3 &= a^3 + 3a^2b + 3ab^2 + b^3
\end{align}$$

---

## 2.2 Ekvationer

### Linjära ekvationer
**Form:** ax + b = c
**Lösning:** x = (c - b)/a

### Andragradsekvationer

**Standardform:** ax² + bx + c = 0

**PQ-formeln** (när a = 1):
$$x^2 + px + q = 0 \Rightarrow x = -\frac{p}{2} \pm \sqrt{\left(\frac{p}{2}\right)^2 - q}$$

**ABC-formeln:**
$$x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$$

### Diskriminanten
D = b² - 4ac
- D > 0: Två reella lösningar
- D = 0: En dubbelrot
- D < 0: Inga reella lösningar

### Faktorsatsen
Om x = r är en rot till ax² + bx + c = 0, då är (x - r) en faktor.

### Vietas formler
För x² + px + q = 0 med rötter r och s:
- r + s = -p
- r × s = q

---

## 2.3 Ekvationssystem

### Substitutionsmetoden
1. Lös ut en variabel
2. Sätt in i andra ekvationen
3. Lös
4. Återsubstituera

### Additionsmetoden
1. Multiplicera ekvationer så koefficienter matchar
2. Addera/subtrahera för att eliminera en variabel
3. Lös

**Exempel:**
```
2x + 3y = 12
4x - 3y = 6
```

Addera: 6x = 18 → x = 3
Insättning: 6 + 3y = 12 → y = 2

---

## 2.4 Olikheter

### Grundregler
- Addera/subtrahera: olikheten bevaras
- Multiplicera/dividera med positivt tal: bevaras
- **Multiplicera/dividera med negativt tal: BYTER riktning!**

### Andragradsolikheter
1. Lös motsvarande ekvation
2. Skissa parabeln
3. Läs av lösningen från grafen

---

## 2.5 Absolutbelopp

### Definition
$$|x| = \begin{cases} x & \text{om } x \geq 0 \\ -x & \text{om } x < 0 \end{cases}$$

### Regler
- |ab| = |a| × |b|
- |a/b| = |a|/|b|
- |a + b| ≤ |a| + |b| (triangelolikheten)

### Ekvationer och olikheter
- |x| = a ⇔ x = a eller x = -a
- |x| < a ⇔ -a < x < a
- |x| > a ⇔ x > a eller x < -a

---

## 2.6 Potenser och Rötter

### Potensregler
| Regel | Formel |
|-------|--------|
| Multiplikation | $a^m \cdot a^n = a^{m+n}$ |
| Division | $a^m / a^n = a^{m-n}$ |
| Potens av potens | $(a^m)^n = a^{mn}$ |
| Produktpotens | $(ab)^n = a^n b^n$ |
| Kvotpotens | $(a/b)^n = a^n/b^n$ |
| Negativ exponent | $a^{-n} = 1/a^n$ |
| Nollexponent | $a^0 = 1$ (a ≠ 0) |

### Rotregler
- $\sqrt[n]{a} = a^{1/n}$
- $\sqrt{ab} = \sqrt{a} \cdot \sqrt{b}$
- $\sqrt{a/b} = \sqrt{a}/\sqrt{b}$
- $\sqrt{a^2} = |a|$

---

# KAPITEL 3: TALFÖLJDER

## 3.1 Aritmetiska talföljder

### Definition
Konstant differens d mellan varje term.

### Formler
- **n:te termen:** $a_n = a_1 + (n-1)d$
- **Summa:** $S_n = \frac{n(a_1 + a_n)}{2} = \frac{n(2a_1 + (n-1)d)}{2}$

### Exempel
Följden 2, 5, 8, 11, 14, ...
- a₁ = 2, d = 3
- a₁₀ = 2 + 9×3 = 29
- S₁₀ = 10(2 + 29)/2 = 155

---

## 3.2 Geometriska talföljder

### Definition
Konstant kvot k mellan varje term.

### Formler
- **n:te termen:** $a_n = a_1 \cdot k^{n-1}$
- **Summa:** $S_n = a_1 \cdot \frac{k^n - 1}{k - 1}$ (k ≠ 1)
- **Oändlig summa** (|k| < 1): $S = \frac{a_1}{1 - k}$

### Exempel
Följden 3, 6, 12, 24, ...
- a₁ = 3, k = 2
- a₆ = 3 × 2⁵ = 96
- S₆ = 3 × (2⁶ - 1)/(2 - 1) = 3 × 63 = 189

---

## 3.3 Specialfall: Summa av naturliga tal

$$1 + 2 + 3 + ... + n = \frac{n(n+1)}{2}$$

### Summa av kvadrater
$$1^2 + 2^2 + ... + n^2 = \frac{n(n+1)(2n+1)}{6}$$

### Summa av kuber
$$1^3 + 2^3 + ... + n^3 = \left(\frac{n(n+1)}{2}\right)^2$$

---

# KAPITEL 4: ÖVNINGAR

## Övning 1: Primtalsfaktorisering
> Faktorisera 504.

<details>
<summary>Lösning</summary>

504 = 2³ × 3² × 7

</details>

---

## Övning 2: SGD och MGM
> Beräkna SGD(168, 180) och MGM(168, 180).

<details>
<summary>Lösning</summary>

168 = 2³ × 3 × 7
180 = 2² × 3² × 5

SGD = 2² × 3 = 12
MGM = 2³ × 3² × 5 × 7 = 2520

</details>

---

## Övning 3: Heltalsekvation
> xy = 420, xz = 252, och y + z = 23. Hitta x.

<details>
<summary>Lösning</summary>

420 = 2² × 3 × 5 × 7
252 = 2² × 3² × 7

x delar båda: x | SGD(420, 252) = 2² × 3 × 7 = 84
Möjliga x: 1, 2, 3, 4, 6, 7, 12, 14, 21, 28, 42, 84

x = 84: y = 5, z = 3, y+z = 8 ✗
x = 42: y = 10, z = 6, y+z = 16 ✗
x = 28: y = 15, z = 9, y+z = 24 ✗
x = 21: y = 20, z = 12, y+z = 32 ✗
x = 14: y = 30, z = 18, y+z = 48 ✗
x = 12: y = 35, z = 21, y+z = 56 ✗

Hmm, kontrollera igen...
Om xy = 420 och xz = 252:
y = 420/x, z = 252/x
y + z = 420/x + 252/x = 672/x = 23

x = 672/23 ≈ 29.2 (ej heltal)

**Problem har ingen heltalslösning!**

</details>

---

## Övning 4: Andragradsekvation
> Lös x² - 7x + 12 = 0

<details>
<summary>Lösning</summary>

Faktorisering: (x-3)(x-4) = 0
x = 3 eller x = 4

PQ-formeln: x = 7/2 ± √(49/4 - 12) = 3.5 ± 0.5
x = 4 eller x = 3

</details>

---

## Övning 5: Talföljd
> I en aritmetisk talföljd är a₃ = 11 och a₇ = 23. Hitta a₁ och d.

<details>
<summary>Lösning</summary>

a₃ = a₁ + 2d = 11
a₇ = a₁ + 6d = 23

Subtrahera: 4d = 12 → d = 3
a₁ = 11 - 6 = 5

</details>

---

# 📝 MINNESREGLER

## Delbarhetstest
> **"3 och 9: Siffersumma"**
> **"4: Sista två, 8: Sista tre"**

## Faktorisering
> **"SGD = Minsta exponenter"**
> **"MGM = Största exponenter"**

## Ekvationer
> **"Multiplicera/dividera med negativt = Byt tecken!"**

## Talföljder
> **"Aritmetisk: Adderar d"**
> **"Geometrisk: Multiplicerar k"**

---

*Denna del täcker talteori och algebra för provet!*
