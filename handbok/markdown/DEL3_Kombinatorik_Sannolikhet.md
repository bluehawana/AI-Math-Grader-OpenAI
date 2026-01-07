# KOMBINATORIK & DISKRET MATEMATIK - FÖRDJUPNING

## 📊 Komplett Guide till Kombinatorik

---

# KAPITEL 1: RÄKNEPRINCIPEN

## 1.1 Multiplikationsprincipen

### Regel
Om en process kan delas upp i steg där:
- Steg 1 kan göras på $n_1$ sätt
- Steg 2 kan göras på $n_2$ sätt
- ...
- Steg k kan göras på $n_k$ sätt

Då kan hela processen göras på $n_1 \times n_2 \times ... \times n_k$ sätt.

### Exempel
> Hur många tresiffriga tal kan bildas med siffrorna 1, 2, 3, 4, 5 om ingen siffra får upprepas?

**Lösning:**
- Första siffran: 5 val
- Andra siffran: 4 val (en redan använd)
- Tredje siffran: 3 val

**Svar:** 5 × 4 × 3 = 60 tal

---

## 1.2 Additionsprincipen

### Regel
Om en uppgift kan lösas på n sätt ELLER på m sätt (men inte båda samtidigt), finns det totalt **n + m** sätt.

### Exempel
> Hur många sätt kan man välja en klubbpresident från antingen pojkarna (8 st) eller flickorna (12 st)?

**Svar:** 8 + 12 = 20 sätt

---

## 1.3 Komplementprincipen

### Regel
$$\text{Antal gynnsamma} = \text{Totalt antal} - \text{Antal ogynnsamma}$$

### När användas?
- "Minst ett..."
- "Inte innehåller..."
- "Undvik..."
- "Går inte via..."

---

# KAPITEL 2: PERMUTATIONER

## 2.1 Definition
En **permutation** är ett ordnat arrangemang av objekt.

## 2.2 Formler

### Alla objekt
Antal sätt att ordna n objekt:
$$n! = n \times (n-1) \times (n-2) \times ... \times 2 \times 1$$

### Delmängd
Antal sätt att välja och ordna r objekt från n:
$$P(n,r) = \frac{n!}{(n-r)!}$$

### Med upprepningar
Om det finns identiska objekt:
$$\frac{n!}{n_1! \cdot n_2! \cdot ... \cdot n_k!}$$

där $n_1, n_2, ..., n_k$ är antal av varje typ.

---

## 2.3 Fakultet - Referenstabell

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

## 2.4 Cirkulära permutationer

Antal sätt att ordna n objekt i en cirkel:
$$(n-1)!$$

(Vi fixerar ett objekt och ordnar resten)

---

# KAPITEL 3: KOMBINATIONER

## 3.1 Definition
En **kombination** är ett oordnat urval av objekt.

## 3.2 Formel
$$C(n,r) = \binom{n}{r} = \frac{n!}{r!(n-r)!}$$

Läses: "n över r" eller "n välj r"

---

## 3.3 Viktiga egenskaper

| Egenskap | Formel |
|----------|--------|
| Symmetri | $\binom{n}{r} = \binom{n}{n-r}$ |
| Kant | $\binom{n}{0} = \binom{n}{n} = 1$ |
| Rad | $\binom{n}{1} = \binom{n}{n-1} = n$ |
| Pascals triangel | $\binom{n}{r} = \binom{n-1}{r-1} + \binom{n-1}{r}$ |
| Radsumma | $\binom{n}{0} + \binom{n}{1} + ... + \binom{n}{n} = 2^n$ |

---

## 3.4 Pascals triangel

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

---

## 3.5 Vanliga värden

| n\\r | 0 | 1 | 2 | 3 | 4 | 5 |
|------|---|---|---|---|---|---|
| 5 | 1 | 5 | 10 | 10 | 5 | 1 |
| 6 | 1 | 6 | 15 | 20 | 15 | 6 |
| 7 | 1 | 7 | 21 | 35 | 35 | 21 |
| 8 | 1 | 8 | 28 | 56 | 70 | 56 |
| 9 | 1 | 9 | 36 | 84 | 126 | 126 |
| 10 | 1 | 10 | 45 | 120 | 210 | 252 |

---

# KAPITEL 4: VÄGRÄKNING I RUTNÄT

## ⭐ TYPUPPGIFT (Prov 2012, Uppgift 2)

### Grundproblem

> I ett rutnät ska du gå från punkt S (nedre vänstra) till punkt M (övre högra).
> Du får bara gå **uppåt** eller **åt höger**, ett steg i taget.

### Metod

Om du måste gå:
- **m steg åt höger**
- **n steg uppåt**

Antal vägar = antal sätt att välja vilka av (m+n) steg som ska vara "höger":
$$\text{Antal vägar} = \binom{m+n}{m} = \binom{m+n}{n}$$

---

### Exempel 1: Grundläggande
> Hur många vägar finns från S till M i ett 5×5 rutnät?

**Lösning:**
- 5 steg höger, 5 steg uppåt
- Antal vägar = $\binom{10}{5} = 252$

---

### Exempel 2: Med förbjuden punkt ⭐

> Hur många vägar finns som INTE går via punkt P?

**Metod: Komplementprincipen**

$$\text{Vägar utan P} = \text{Alla vägar} - \text{Vägar via P}$$

**Vägar via P = (Vägar S→P) × (Vägar P→M)**

---

### ⭐ LÖSNING: Prov 2012 Uppgift 2

**Givet:**
- Totalt 252 vägar från S till M
- Hitta antal vägar som INTE går via ★

**Steg 1:** Total = 252 (given)
- Detta bekräftar: $\binom{10}{5} = 252$, alltså 5×5 rutnät

**Steg 2:** Beräkna vägar VIA ★
- Behöver veta ★:s position
- Om ★ är vid (a, b) från S:
  - S till ★: $\binom{a+b}{a}$
  - ★ till M: $\binom{(5-a)+(5-b)}{5-a}$

**Steg 3:** Subtrahera
$$\text{Svar} = 252 - (\text{S→★}) \times (\text{★→M})$$

---

### Diagram för förståelse

```
M ←─────────────────────┐
│                       │
│     [SKUGGAT          │
│      OMRÅDE]          │
│          ★            │
│                       │
└───────────────────────S
```

---

## 4.2 Varianter

### Variant 1: Måste passera punkt P
**Vägar via P = (Vägar S→P) × (Vägar P→M)**

### Variant 2: Måste passera P och Q (i den ordningen)
**Vägar = (S→P) × (P→Q) × (Q→M)**

### Variant 3: Blockerade rutor
Summera vägar för varje tillåten rutt, eller använd komplementprincipen.

### Variant 4: Begränsat område (som i originalproblemet)
Räkna endast vägar inom det tillåtna området.

---

# KAPITEL 5: SANNOLIKHET

## 5.1 Grundläggande definition

$$P(A) = \frac{\text{Antal gynnsamma utfall}}{\text{Antal möjliga utfall}}$$

**Villkor:**
- Alla utfall måste vara **lika sannolika**
- $0 \leq P(A) \leq 1$

---

## 5.2 Räkneregler

### Komplementregeln
$$P(\text{icke } A) = P(A') = 1 - P(A)$$

### Additionsregeln
$$P(A \text{ eller } B) = P(A) + P(B) - P(A \text{ och } B)$$

**Om A och B är oförenliga (kan inte hända samtidigt):**
$$P(A \text{ eller } B) = P(A) + P(B)$$

### Multiplikationsregeln
$$P(A \text{ och } B) = P(A) \times P(B|A)$$

**Om A och B är oberoende:**
$$P(A \text{ och } B) = P(A) \times P(B)$$

---

## 5.3 Villkorad sannolikhet

$$P(A|B) = \frac{P(A \cap B)}{P(B)}$$

P(A|B) = "Sannolikheten för A givet att B har inträffat"

---

## 5.4 Typiska sannolikhetsuppgifter

### Tärningskast
- Enstaka tärning: 6 utfall, alla = 1/6
- Två tärningar: 36 utfall
  - Summa 7: 6/36 = 1/6 (vanligast)
  - Summa 2 eller 12: 1/36 (ovanligast)

### Kortspel
- Standardlek: 52 kort
- 4 färger × 13 valörer
- P(ess) = 4/52 = 1/13
- P(hjärter) = 13/52 = 1/4

### Urval utan återläggning
P:n ändras efter varje drag!

---

## 5.5 "Minst en"-problem

**Strategi:** Använd komplement!

$$P(\text{minst en}) = 1 - P(\text{ingen})$$

**Exempel:**
> Vad är sannolikheten att få minst en sexa på tre tärningskast?

$P(\text{ingen sexa}) = \left(\frac{5}{6}\right)^3 = \frac{125}{216}$

$P(\text{minst en sexa}) = 1 - \frac{125}{216} = \frac{91}{216} \approx 0,42$

---

# KAPITEL 6: ÖVNINGAR

## Övning 1: Vägräkning
> I ett 4×3 rutnät, hur många vägar finns från (0,0) till (4,3)?

<details>
<summary>Lösning</summary>

$\binom{7}{4} = \binom{7}{3} = 35$ vägar

</details>

---

## Övning 2: Med förbjuden punkt
> Samma rutnät, men du får inte passera (2,2). Hur många vägar?

<details>
<summary>Lösning</summary>

Via (2,2): $\binom{4}{2} \times \binom{3}{1} = 6 \times 3 = 18$

Utan (2,2): $35 - 18 = 17$ vägar

</details>

---

## Övning 3: Permutationer
> Hur många "ord" kan bildas av bokstäverna i MISSISSIPPI?

<details>
<summary>Lösning</summary>

11 bokstäver: M(1), I(4), S(4), P(2)

$\frac{11!}{1! \cdot 4! \cdot 4! \cdot 2!} = \frac{39916800}{1 \cdot 24 \cdot 24 \cdot 2} = 34650$

</details>

---

## Övning 4: Kombinationer
> Hur många sätt kan 5 elever väljas från en klass med 12 elever?

<details>
<summary>Lösning</summary>

$\binom{12}{5} = \frac{12!}{5! \cdot 7!} = \frac{12 \times 11 \times 10 \times 9 \times 8}{5 \times 4 \times 3 \times 2 \times 1} = 792$

</details>

---

## Övning 5: Sannolikhet
> I en låda finns 6 röda och 4 blå kulor. Två kulor dras utan återläggning. Vad är sannolikheten att båda är röda?

<details>
<summary>Lösning</summary>

$P = \frac{6}{10} \times \frac{5}{9} = \frac{30}{90} = \frac{1}{3}$

</details>

---

## Övning 6: Minst en
> En tärning kastas 4 gånger. Vad är P(minst en sexa)?

<details>
<summary>Lösning</summary>

$P(\text{ingen sexa}) = \left(\frac{5}{6}\right)^4 = \frac{625}{1296}$

$P(\text{minst en}) = 1 - \frac{625}{1296} = \frac{671}{1296} \approx 0,518$

</details>

---

# MINNESREGLER

## 📝 Permutation vs Kombination

> **"Spelar ordningen roll?"**
> - JA → Permutation
> - NEJ → Kombination

## 📝 Vägräkning

> **"Höger + Uppåt = Kombination!"**
> $\binom{m+n}{m}$ där m = höger, n = uppåt

## 📝 Komplementprincipen

> **"Lättare att räkna vad vi INTE vill ha!"**
> Gynnsamt = Totalt − Ogynnsamt

## 📝 Minst en

> **"Minst en = 1 − ingen"**

---

*Denna del täcker allt du behöver för kombinatorik och sannolikhet på provet!*
