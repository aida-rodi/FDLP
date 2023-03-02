import { loopFor } from "./loopFor.js"
import { findBombay } from "./findBombay.js"
import { findShortHairDogs } from "./findShortHairDogs.js";
import { addNewPuppy } from "./addNewPuppy.js";

document.getElementById("p1").addEventListener("click", loopFor)

document.getElementById("p2b").addEventListener("click", findBombay)
document.getElementById("p2c").addEventListener("click", findShortHairDogs)
document.getElementById("p2e").addEventListener("click", addNewPuppy)