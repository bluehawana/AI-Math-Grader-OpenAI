# GEOMETRI - FÖRDJUPNING

## 📐 Komplett Geometrihandbok för Hvitfeldska Spetsutbildning

---

# TRIANGLAR

## 1. Grundläggande satser

### Vinkelsumma
Summan av alla vinklar i en triangel = **180°**

### Yttre vinkelsatsen
En yttre vinkel = summan av de två icke-närliggande inre vinklarna

### Triangelolikheten
I en triangel gäller för alla sidor:
- a + b > c
- a + c > b  
- b + c > a

---

## 2. Pythagoras Sats

### Satsen
I en **rätvinklig triangel** med kateter a, b och hypotenusa c:
$$a^2 + b^2 = c^2$$

### Omvändningen
Om $a^2 + b^2 = c^2$ för sidorna i en triangel, så är triangeln rätvinklig.

### Pythagoriska tripplar
| Grundform | Multiplar |
|-----------|-----------|
| 3, 4, 5 | 6, 8, 10; 9, 12, 15; 15, 20, 25 |
| 5, 12, 13 | 10, 24, 26 |
| 8, 15, 17 | 16, 30, 34 |
| 7, 24, 25 | 14, 48, 50 |

### Tillämpningar

**Hitta kateten:**
$$a = \sqrt{c^2 - b^2}$$

**Hitta hypotenusan:**
$$c = \sqrt{a^2 + b^2}$$

---

## 3. Likbent triangel (Isosceles)

### Definition
Två sidor är lika långa.

### Egenskaper
- Basvinklarna (vinklarna mot basen) är lika stora
- Höjden mot basen delar basen mitt itu
- Höjden mot basen halverar även toppvinkeln

### Formel för area
Om bas = b och ben = s:
$$A = \frac{b}{4}\sqrt{4s^2 - b^2}$$

---

## 4. Liksidig triangel (Equilateral)

### Definition
Alla tre sidor är lika långa.

### Egenskaper
- Alla vinklar = 60°
- Alla höjder, bisektriser och medianer sammanfaller

### Formler
Med sida a:
- **Höjd:** $h = \frac{a\sqrt{3}}{2}$
- **Area:** $A = \frac{a^2\sqrt{3}}{4}$
- **Omkretsradie:** $R = \frac{a}{\sqrt{3}}$
- **Inkretsradie:** $r = \frac{a}{2\sqrt{3}}$

---

## 5. Rätvinklig triangel

### Speciella rätvinkliga trianglar

#### 45°-45°-90° triangel
Förhållande mellan sidor: $1 : 1 : \sqrt{2}$

Om kateter = a, då hypotenusa = $a\sqrt{2}$

#### 30°-60°-90° triangel
Förhållande mellan sidor: $1 : \sqrt{3} : 2$

- Kortaste sidan (mot 30°) = a
- Mellanliggande sida (mot 60°) = $a\sqrt{3}$
- Hypotenusa (mot 90°) = 2a

---

## 6. Medianer och Tyngdpunkt

### Median
En linje från ett hörn till mittpunkten på motstående sida.

### Tyngdpunkt
Skärningspunkten för de tre medianerna. 
- Delar varje median i förhållandet 2:1 från hörnet.
- Koordinater: $G = \left(\frac{x_1+x_2+x_3}{3}, \frac{y_1+y_2+y_3}{3}\right)$

---

## 7. Höjder och Ortocentrum

### Höjd
En vinkelrät linje från ett hörn till motstående sida.

### Ortocentrum
Skärningspunkten för de tre höjderna.
- Ligger inuti spetsvinkliga trianglar
- Ligger utanför trubbvinkliga trianglar
- Sammanfaller med den räta vinkeln i rätvinkliga trianglar

---

## 8. Bisektriser och Incentrum

### Bisektris
En linje som delar en vinkel mitt itu.

### Incentrum
Skärningspunkten för de tre bisektriserna.
- Centrum för den inskrivna cirkeln
- Lika långt från alla tre sidor

---

## 9. Likformiga trianglar

### Definition
Trianglar med samma form men olika storlek.

### Villkor för likformighet
- **AA** (Vinkel-Vinkel): Två vinklar lika
- **SSS-förhållande**: Alla sidor proportionella
- **SAS-förhållande**: Två sidor proportionella och mellanliggande vinkel lika

### Förhållanden
Om sidorna har skala k:
- Motsvarande sidor: förhållande k
- Motsvarande areor: förhållande k²

---

## 10. Kongruenta trianglar

### Villkor för kongruens
- **SSS**: Alla tre sidor lika
- **SAS**: Två sidor och mellanliggande vinkel lika
- **ASA**: Två vinklar och mellanliggande sida lika  
- **AAS**: Två vinklar och en icke-mellanliggande sida
- **HL** (för rätvinkliga): Hypotenusa och en katet

---

# CIRKELN

## 1. Grundbegrepp

| Begrepp | Definition |
|---------|------------|
| **Radie (r)** | Avståndet från centrum till randen |
| **Diameter (d)** | Avståndet tvärs genom centrum, d = 2r |
| **Korda** | Linje mellan två punkter på cirkeln |
| **Båge** | Del av cirkelns rand |
| **Sektor** | "Tårtbit" - område mellan två radier |
| **Segment** | Område mellan en korda och dess båge |
| **Tangent** | Linje som vidrör cirkeln i en punkt |
| **Sekant** | Linje som skär cirkeln i två punkter |

---

## 2. Formler

### Omkrets och Area
- **Omkrets:** $O = 2\pi r = \pi d$
- **Area:** $A = \pi r^2$

### Båge och Sektor
Med central vinkel v (i grader):
- **Båglängd:** $b = \frac{v}{360} \cdot 2\pi r$
- **Sektorarea:** $A_{sektor} = \frac{v}{360} \cdot \pi r^2$

### Segment
$$A_{segment} = A_{sektor} - A_{triangel}$$

---

## 3. Tangentegenskaper

### Grundläggande egenskaper
1. **Tangenten är vinkelrät mot radien** vid beröringspunkten
2. **Tangentsträckor från samma punkt är lika långa**

### Formler
Om en tangent dras från punkt P till beröringspunkt T, och C är centrum:
$$PT^2 = PC^2 - r^2$$

---

## 4. Vinklar i cirkeln

### Medelpunktsvinkel
Vinkel vid cirkelns centrum, spänner över en båge.

### Randvinkel (Periferivinkel)
Vinkel vid cirkelns rand, spänner över en båge.

### Randvinkelsatsen
$$\text{Randvinkel} = \frac{\text{Medelpunktsvinkel}}{2}$$

Alla randvinklar som spänner över samma båge är lika stora!

### Thales sats
Om A, B, C ligger på en cirkel och AB är en diameter, då är vinkel ACB = 90°.

---

## 5. Kordaegenskaper

### Korda och centrum
- Linjen från centrum vinkelrätt mot kordan delar kordan mitt itu
- Linjen från centrum till kordans mittpunkt är vinkelrät mot kordan

### Kordans längd
Om avståndet från centrum till kordan = d, och radien = r:
$$\text{Kordans längd} = 2\sqrt{r^2 - d^2}$$

---

## 6. Tvåcirkelproblem

### Gemensamma tangenter
- **Yttre tangenter:** Tangenter som inte passerar mellan cirklarna
- **Inre tangenter:** Tangenter som passerar mellan cirklarna

### Antal tangenter
| Cirklar | Antal tangenter |
|---------|-----------------|
| Separata | 4 |
| Utvändigt tangerande | 3 |
| Skärande | 2 |
| Invändigt tangerande | 1 |
| Koncentriska | 0 |

---

# FYRHÖRNINGAR

## 1. Allmänna fyrhörningar

### Vinkelsumma
Summan av vinklarna = **360°**

### Area (med diagonaler)
Om diagonalerna har längd d₁ och d₂ och skär varandra i vinkel θ:
$$A = \frac{d_1 \cdot d_2 \cdot \sin\theta}{2}$$

---

## 2. Speciella fyrhörningar

### Parallellogram
**Definition:** Motstående sidor parallella

**Egenskaper:**
- Motstående sidor lika långa
- Motstående vinklar lika stora
- Diagonalerna delar varandra mitt itu

**Area:** $A = b \cdot h$

### Rektangel
**Definition:** Parallellogram med räta vinklar

**Speciella egenskaper:**
- Diagonalerna lika långa
- Diagonal: $d = \sqrt{a^2 + b^2}$

**Area:** $A = a \cdot b$

### Romb
**Definition:** Parallellogram med alla sidor lika

**Speciella egenskaper:**
- Diagonalerna är vinkelräta
- Diagonalerna delar varandra mitt itu

**Area:** $A = \frac{d_1 \cdot d_2}{2}$

### Kvadrat
**Definition:** Rektangel och romb (alla sidor lika, alla vinklar räta)

**Formler:**
- Diagonal: $d = a\sqrt{2}$
- Area: $A = a^2 = \frac{d^2}{2}$

### Trapets
**Definition:** Exakt två parallella sidor

**Area:** $A = \frac{(a + b) \cdot h}{2}$

### Likbent trapets
**Speciella egenskaper:**
- De icke-parallella sidorna lika långa
- Basvinklarna lika stora
- Diagonalerna lika långa

---

## 3. Hierarki

```
Fyrhörning
    ↓
Trapets
    ↓
Parallellogram
    ↓
    ├── Rektangel
    │      ↓
    │   Kvadrat
    │      ↑
    └── Romb
```

---

# POLYGONER

## 1. Allmänna formler

### Vinkelsumma
För en n-hörning: $(n-2) \times 180°$

### Antal diagonaler
$$D = \frac{n(n-3)}{2}$$

---

## 2. Reguljära polygoner

### Inre vinkel
$$v = \frac{(n-2) \times 180°}{n}$$

### Centralvinkel
$$\alpha = \frac{360°}{n}$$

### Area (med sida a)
$$A = \frac{na^2}{4\tan(180°/n)}$$

---

## 3. Vanliga reguljära polygoner

| n | Namn | Inre vinkel |
|---|------|-------------|
| 3 | Triangel | 60° |
| 4 | Kvadrat | 90° |
| 5 | Pentagon | 108° |
| 6 | Hexagon | 120° |
| 8 | Oktogon | 135° |
| 10 | Dekagon | 144° |
| 12 | Dodekagon | 150° |

---

# AREOR OCH OMKRETSAR - SAMMANFATTNING

| Figur | Area | Omkrets |
|-------|------|---------|
| Triangel | $\frac{bh}{2}$ | a + b + c |
| Rektangel | ab | 2(a + b) |
| Kvadrat | $a^2$ | 4a |
| Parallellogram | bh | 2(a + b) |
| Romb | $\frac{d_1 d_2}{2}$ | 4a |
| Trapets | $\frac{(a+b)h}{2}$ | a + b + c + d |
| Cirkel | $\pi r^2$ | $2\pi r$ |

---

# KOORDINATGEOMETRI

## 1. Avstånd
$$d = \sqrt{(x_2-x_1)^2 + (y_2-y_1)^2}$$

## 2. Mittpunkt
$$M = \left(\frac{x_1+x_2}{2}, \frac{y_1+y_2}{2}\right)$$

## 3. Linjens ekvation
**k-form:** $y = kx + m$
**Allmän form:** $ax + by + c = 0$

## 4. Lutning
$$k = \frac{y_2 - y_1}{x_2 - x_1}$$

## 5. Parallella och vinkelräta linjer
- Parallella: $k_1 = k_2$
- Vinkelräta: $k_1 \cdot k_2 = -1$

## 6. Avstånd punkt-linje
Avståndet från punkt $(x_0, y_0)$ till linjen $ax + by + c = 0$:
$$d = \frac{|ax_0 + by_0 + c|}{\sqrt{a^2 + b^2}}$$

## 7. Cirkelns ekvation
Med centrum (a, b) och radie r:
$$(x-a)^2 + (y-b)^2 = r^2$$

---

# TYPUPPGIFTER FRÅN PROVEN

## Uppgift: Tangenter och cirklar

> En cirkel med radie 5 har centrum i origo. Från punkten (13, 0) dras tangenter till cirkeln. Bestäm beröringspunkternas koordinater.

**Lösning:**
1. Avstånd från (13,0) till origo = 13
2. Tangentlängd = $\sqrt{13^2 - 5^2} = \sqrt{144} = 12$
3. Med likformiga trianglar hittar vi koordinaterna...

---

## Uppgift: Kombinerad geometri

> I en rätvinklig triangel ABC med räta vinkeln vid C är BC = 6 och AC = 8. Bestäm radien för den inskrivna cirkeln.

**Lösning:**
1. AB = $\sqrt{6^2 + 8^2} = 10$ (hypotenusa)
2. Area = $\frac{6 \times 8}{2} = 24$
3. Inkretsradie: $r = \frac{A}{s}$ där s = halva omkretsen
4. s = $\frac{6 + 8 + 10}{2} = 12$
5. r = $\frac{24}{12} = 2$

**Svar: r = 2**

---

*Fortsättning följer i nästa del...*
