/*1. let is a scoped variable, which means it won't exist once the function finishes running.
2. find a way to pass it to letsReturn. This function is out of its scope.
3. Do not change "let numberOfPotions = 5";
4. Create a const called "foodRations". Assign any number to it.
 */
function letsGiveSupplies(){
	let numberOfPotions = 5;
	return letsReturn(foodRations, numberOfPotions);
}
function letsReturn(foodRations, numberOfPotions){
	return "Potions given: " + numberOfPotions + "<br>" + 
	"Food rations given:" + foodRations;
}