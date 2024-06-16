let rank = 10000
let player = "sora"

if (rank <= 1000) {
    console.log("O Herói de nome " + player + " está no nível " + rank + ", no rank ferro")
} else if (rank <= 2000) {
    console.log("O Herói de nome " + player + " está no nível " + rank + ", no rank bronze")
} else if (rank <= 5000) {
    console.log("O Herói de nome " + player + " está no nível " + rank + ", no rank prata")
} else if (rank <= 7000) {
    console.log("O Herói de nome " + player + " está no nível " + rank + ", no rank ouro")
} else if (rank <= 8000) {
    console.log("O Herói de nome " + player + " está no nível " + rank + ", no rank platina")
} else if (rank <= 9000) {
    console.log("O Herói de nome " + player + " está no nível " + rank + ", no rank ascendente")
} else if (rank <= 10000) {
    console.log("O Herói de nome " + player + " está no nível " + rank + ", no rank imortal");
} else if (rank >= 10001) {
    console.log("O Herói de nome " + player + " está no nível " + rank + ", no rank radiante");
}
