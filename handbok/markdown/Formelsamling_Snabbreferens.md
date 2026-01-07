# FORMELSAMLING & MINNESREGLER

## 📋 Komplett Formelsamling för Hvitfeldska Spetsutbildning

---

# 🔢 ARITMETIK & TALTEORI

## Delbarhetsregler

| Delbar med | Test |
|------------|------|
| 2 | Slutar på 0, 2, 4, 6, 8 |
| 3 | Siffersumman delbar med 3 |
| 4 | Sista 2 siffrorna delbara med 4 |
| 5 | Slutar på 0 eller 5 |
| 6 | Delbar med både 2 och 3 |
| 8 | Sista 3 siffrorna delbara med 8 |
| 9 | Siffersumman delbar med 9 |
| 10 | Slutar på 0 |
| 11 | Alternerande siffersumma delbar med 11 |

## SGD och MGM
$$SGD(a,b) \times MGM(a,b) = a \times b$$

---

# 🔤 ALGEBRA

## Konjugat- och Kvadreringsregler

| Regel | Formel |
|-------|--------|
| Konjugatregeln | $a^2 - b^2 = (a+b)(a-b)$ |
| Första kvadreringsregeln | $(a+b)^2 = a^2 + 2ab + b^2$ |
| Andra kvadreringsregeln | $(a-b)^2 = a^2 - 2ab + b^2$ |

## Potensregler

| Regel | Formel |
|-------|--------|
| Multiplikation | $a^m \cdot a^n = a^{m+n}$ |
| Division | $a^m / a^n = a^{m-n}$ |
| Potens av potens | $(a^m)^n = a^{mn}$ |
| Negativ exponent | $a^{-n} = 1/a^n$ |
| Bråkexponent | $a^{m/n} = \sqrt[n]{a^m}$ |

## Rotregler

| Regel | Formel |
|-------|--------|
| Multiplikation | $\sqrt{ab} = \sqrt{a} \cdot \sqrt{b}$ |
| Division | $\sqrt{a/b} = \sqrt{a}/\sqrt{b}$ |
| Potens | $\sqrt{a^2} = |a|$ |

## Ekvationer

### Andragradsekvation
**PQ-formeln:**
$$x^2 + px + q = 0 \Rightarrow x = -\frac{p}{2} \pm \sqrt{\frac{p^2}{4} - q}$$

**ABC-formeln:**
$$ax^2 + bx + c = 0 \Rightarrow x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$$

---

# 📐 GEOMETRI

## Trianglar

| Formel | Uttryck |
|--------|---------|
| Vinkelsumma | $\alpha + \beta + \gamma = 180°$ |
| Pythagoras | $a^2 + b^2 = c^2$ |
| Area (bas × höjd) | $A = \frac{bh}{2}$ |
| Herons formel | $A = \sqrt{s(s-a)(s-b)(s-c)}$, $s = \frac{a+b+c}{2}$ |

### Speciella trianglar

**Liksidig (sida a):**
- Höjd: $h = \frac{a\sqrt{3}}{2}$
- Area: $A = \frac{a^2\sqrt{3}}{4}$

**30-60-90 triangel:**
Sidor i förhållande 1 : √3 : 2

**45-45-90 triangel:**
Sidor i förhållande 1 : 1 : √2

## Cirkeln

| Storhet | Formel |
|---------|--------|
| Omkrets | $O = 2\pi r = \pi d$ |
| Area | $A = \pi r^2$ |
| Båglängd | $b = \frac{v°}{360°} \cdot 2\pi r$ |
| Sektorarea | $A = \frac{v°}{360°} \cdot \pi r^2$ |

### Viktiga satser
- **Randvinkel = ½ × Medelpunktsvinkel**
- **Thales:** Diameter ger 90° randvinkel
- **Tangent ⊥ Radie**

## Fyrhörningar

| Figur | Area |
|-------|------|
| Rektangel | $A = ab$ |
| Parallellogram | $A = bh$ |
| Trapets | $A = \frac{(a+b)h}{2}$ |
| Romb | $A = \frac{d_1 \cdot d_2}{2}$ |

## Polygoner

| Formel | Uttryck |
|--------|---------|
| Vinkelsumma (n-hörning) | $(n-2) \times 180°$ |
| Inre vinkel (reguljär) | $\frac{(n-2) \times 180°}{n}$ |
| Antal diagonaler | $\frac{n(n-3)}{2}$ |

## Koordinatgeometri

| Formel | Uttryck |
|--------|---------|
| Avstånd | $d = \sqrt{(x_2-x_1)^2 + (y_2-y_1)^2}$ |
| Mittpunkt | $M = \left(\frac{x_1+x_2}{2}, \frac{y_1+y_2}{2}\right)$ |
| Lutning | $k = \frac{y_2-y_1}{x_2-x_1}$ |
| Linjens ekvation | $y = kx + m$ |
| Vinkelräta linjer | $k_1 \cdot k_2 = -1$ |
| Avstånd punkt-linje | $d = \frac{|ax_0 + by_0 + c|}{\sqrt{a^2+b^2}}$ |

---

# 📊 KOMBINATORIK

## Grundformler

| Storhet | Formel |
|---------|--------|
| Fakultet | $n! = n \times (n-1) \times ... \times 1$ |
| Permutation | $P(n,r) = \frac{n!}{(n-r)!}$ |
| Kombination | $C(n,r) = \binom{n}{r} = \frac{n!}{r!(n-r)!}$ |

## Vägräkning i rutnät
Antal vägar (m steg höger, n steg uppåt):
$$\binom{m+n}{m} = \binom{m+n}{n}$$

## Komplementprincipen
$$P(\text{Vill ha}) = P(\text{Totalt}) - P(\text{Vill inte ha})$$

---

# 🎲 SANNOLIKHET

| Regel | Formel |
|-------|--------|
| Definition | $P(A) = \frac{\text{gynnsamma}}{\text{möjliga}}$ |
| Komplement | $P(A') = 1 - P(A)$ |
| Addition | $P(A \cup B) = P(A) + P(B) - P(A \cap B)$ |
| Multiplikation (oberoende) | $P(A \cap B) = P(A) \times P(B)$ |
| Villkorad | $P(A|B) = \frac{P(A \cap B)}{P(B)}$ |

---

# 📈 TALFÖLJDER

## Aritmetisk talföljd

| Formel | Uttryck |
|--------|---------|
| n:te termen | $a_n = a_1 + (n-1)d$ |
| Summa | $S_n = \frac{n(a_1 + a_n)}{2}$ |

## Geometrisk talföljd

| Formel | Uttryck |
|--------|---------|
| n:te termen | $a_n = a_1 \cdot k^{n-1}$ |
| Summa | $S_n = a_1 \cdot \frac{k^n - 1}{k - 1}$ |

## Speciella summor
$$1 + 2 + 3 + ... + n = \frac{n(n+1)}{2}$$

---

# 📖 ORDPROBLEM

| Problem | Formel |
|---------|--------|
| Samarbete | $t = \frac{ab}{a+b}$ |
| Mötas | $t = \frac{s}{v_1+v_2}$ |
| Ikapp | $t = \frac{\text{försprång}}{v_{snabb}-v_{långsam}}$ |
| Hastighet | $s = v \cdot t$ |

---

# 📝 MINNESREGLER

## Geometri
> **"Pythagoras: a² + b² = c²"** - hypotenusan alltid störst!

> **"Tangent ⊥ Radie"** - tangenten är vinkelrät mot radien

> **"Randvinkel = halva medelpunktsvinkeln"**

## Kombinatorik
> **"Ordning spelar roll? → Permutation"**
> **"Ordning spelar ingen roll? → Kombination"**

> **"Vägräkning: Höger + Uppåt → Kombination!"**

## Algebra
> **"Multiplicera/dividera med negativt → BYT tecken på olikheten!"**

## Talteori
> **"3 och 9: Siffersumma!"**
> **"SGD: Minsta exponenter, MGM: Största exponenter"**

---

# ⭐ VIKTIGA VÄRDEN

## Pythagoriska tripplar
3-4-5, 5-12-13, 8-15-17, 7-24-25

## Kvadratrötter
$\sqrt{2} \approx 1.414$, $\sqrt{3} \approx 1.732$, $\sqrt{5} \approx 2.236$

## Potenser av 2
2, 4, 8, 16, 32, 64, 128, 256, 512, 1024

## Fakulteter
0!=1, 1!=1, 2!=2, 3!=6, 4!=24, 5!=120, 6!=720, 7!=5040

## π och e
$\pi \approx 3.14159$, $e \approx 2.71828$

---

# ✅ CHECKLISTOR

## Innan du svarar
- [ ] Har jag läst frågan noggrant?
- [ ] Har jag identifierat vad som söks?
- [ ] Har jag använt alla givna uppgifter?
- [ ] Är mitt svar rimligt?
- [ ] Har jag kontrollerat beräkningarna?

## Typiska fel att undvika
- [ ] Glömma att ändra olikhetstecken vid multiplikation med negativt tal
- [ ] Förväxla permutation och kombination
- [ ] Glömma enheter
- [ ] Räknefel med negativa tal
- [ ] Glömma kontrollera alla lösningar mot originalvillkoren

---

*Denna formelsamling innehåller allt du behöver för provet!*

**Lycka till, Yvonna! 🍀**
