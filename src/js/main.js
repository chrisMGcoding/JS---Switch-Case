// 1.
// let Var1 = prompt("Quel jour sommes nous ?").toLowerCase();

// switch (Var1) {
//     case 'lundi':
//         alert(`Nous sommes ${Var1} et tu as tennis`);
//         break;
//     case 'mardi':
//         alert(`Nous sommes ${Var1} et tu as piscine`);
//         break;
//     case 'mercredi':
//         alert(`Nous sommes ${Var1} et tu as poney`);
//         break;
//     case 'jeudi':
//         alert(`Nous sommes ${Var1} et tu as boxe`);
//         break;
//     case 'vendredi':
//         alert(`Nous sommes ${Var1} et tu as petanque`);
//         break;
//     default :
//         alert("week-end");
//         break;
// }

// 2.
// let Var1 = prompt("Quel type de météo avons-nous en Belgique ?").toLowerCase();

// switch (Var1) {
//     case 'pluie':
//         alert("quand il pleut je sors le parapluie");
//         break;
//     case 'soleil':
//         alert("quand il y a du soleil je sors les lunettes de soleil");
//         break;
//     case 'nuage':
//         alert("quand il fait nuageux, il fait gris");
//         break;
//     case 'neige':
//         alert("quand il neige, ça glisse");
//         break;
//     case 'orage':
//         alert("quand il y a de l'orage, éteins la télé");
//         break;
//     default:
//         alert("soit tu encodes soit tu arrêtes de te plaindre");
//         break
// }

// 3.


let nb1 = parseInt(prompt("Encodez un chiffre !"));
let op = prompt("Encodez un opérateur !");
let nb2 = parseInt(prompt("Encodez un second chiffre"));

switch (op) {
    case "+":
        alert(`${nb1} + ${nb2} = ${nb1 + nb2}`);
        break;
    case "-":
        alert(`${nb1} - ${nb2} = ${nb1 - nb2}`);
        break;
    case "/":
        alert(`${nb1} / ${nb2} = ${nb1 / nb2}`);
        break;
    case "*":
        alert(`${nb1} * ${nb2} = ${nb1 * nb2}`);
        break;
    default:
        alert("nope");
        break;
}