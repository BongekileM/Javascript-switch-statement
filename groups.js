
let groupNo = "";

function getGroupNo(name) {
    switch (name) {
    case "Bongekile":
    case "Sarah":
    case "Tshepi":
    case "Thandeka":
        groupNo = "Group 1";
        break;
    case "Ntombi":
    case "Grace":
    case "Lilly":
    case "Nomsa":
        groupNo = "Group 2";
        break;
    case "Queen":
    case "Faith":
    case "Joyce":
    case "Mbali":
        groupNo = "Group 3";
        break;
    default:
        groupNo = " Not a GirlCode learner.";
        break;
    }
return groupNo;
}
console.log(getGroupNo("Jane"));
         