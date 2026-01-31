function toggleWindow(id) {
	var target = document.getElementById(id);
	if(target.style.display == "none") {
		target.style.display = "";
	} else {
		target.style.display = "none";
	}
}

function toggleSpellcasting() {
	if(spellAbilityIntelligence.style.display == '' && spellAbilityWisdom.style.display == '' && spellAbilityCharisma.style.display == ''){
		document.getElementById('spellAbilityIntelligence').style.display='none';
		document.getElementById('spellAbilityWisdom').style.display='none';
		document.getElementById('spellAbilityCharisma').style.display='none';
		
		if (character.spellcasting.includes('Intelligence')) {document.getElementById('spellAbilityIntelligence').style.display=''};
		if (character.spellcasting.includes('Wisdom')) {document.getElementById('spellAbilityWisdom').style.display=''};
		if (character.spellcasting.includes('Charisma')) {document.getElementById('spellAbilityCharisma').style.display=''};
	} else {
		document.getElementById('spellAbilityIntelligence').style.display='';
		document.getElementById('spellAbilityWisdom').style.display='';
		document.getElementById('spellAbilityCharisma').style.display='';
	}
}