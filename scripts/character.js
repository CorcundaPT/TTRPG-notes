function characterStats() {
	//Claculate extra data
	var characterProficiency = Math.floor(character.level / 5) + 2;
	
	//Print Character Name
	document.getElementById("characterName").innerHTML = character.name;
	
	//Print Character Specie
	document.getElementById("characterSpecie").innerHTML = character.specie;
	
	//Print Character Background
	document.getElementById("characterBackground").innerHTML = character.background;
	
	//Print Character Level
	document.getElementById("characterLevel").innerHTML = character.level;
	
	//Print Character Class
	var classList = character.class[0].name + "(" + character.class[0].level + ")";
	for (let i = 1; i < character.class.length; i++) {
		classList += "; " + character.class[i].name + "(" + character.class[i].level + ")";
	};
	document.getElementById("characterClass").innerHTML = classList;
	
	//Print Character Strength Scores
	document.getElementById("characterStrengthScore").innerHTML = character.ability.strength;
	var strengthModifier = Math.floor((character.ability.strength-10)/2);
	if (strengthModifier <0) {
		document.getElementById("characterStrengthModifier").innerHTML = strengthModifier;
	} else {
		document.getElementById("characterStrengthModifier").innerHTML = "+" + strengthModifier;
	};
	
	//Print Character Dexterity Scores
	document.getElementById("characterDexterityScore").innerHTML = character.ability.dexterity;
	var dexterityModifier = Math.floor((character.ability.dexterity-10)/2);
	if (dexterityModifier <0) {
		document.getElementById("characterDexterityModifier").innerHTML = dexterityModifier;
	} else {
		document.getElementById("characterDexterityModifier").innerHTML = "+" + dexterityModifier;
	};
	
	//Print Character Constitution Scores
	document.getElementById("characterConstitutionScore").innerHTML = character.ability.constitution;
	var constitutionModifier = Math.floor((character.ability.constitution-10)/2);
	if (constitutionModifier <0) {
		document.getElementById("characterConstitutionModifier").innerHTML = constitutionModifier;
	} else {
		document.getElementById("characterConstitutionModifier").innerHTML = "+" + constitutionModifier;
	};
	
	//Print Character Intelligence Scores
	document.getElementById("characterIntelligenceScore").innerHTML = character.ability.intelligence;
	var intelligenceModifier = Math.floor((character.ability.intelligence-10)/2);
	if (intelligenceModifier <0) {
		document.getElementById("characterIntelligenceModifier").innerHTML = intelligenceModifier;
	} else {
		document.getElementById("characterIntelligenceModifier").innerHTML = "+" + intelligenceModifier;
	};
	
	//Print Character Wisdom Scores
	document.getElementById("characterWisdomScore").innerHTML = character.ability.wisdom;
	var wisdomModifier = Math.floor((character.ability.wisdom-10)/2);
	if (wisdomModifier <0) {
		document.getElementById("characterWisdomModifier").innerHTML = wisdomModifier;
	} else {
		document.getElementById("characterWisdomModifier").innerHTML = "+" + wisdomModifier;
	};
	
	//Print Character Charisma Scores
	document.getElementById("characterCharismaScore").innerHTML = character.ability.charisma;
	var charismaModifier = Math.floor((character.ability.charisma-10)/2);
	if (charismaModifier <0) {
		document.getElementById("characterCharismaModifier").innerHTML = charismaModifier;
	} else {
		document.getElementById("characterCharismaModifier").innerHTML = "+" + charismaModifier;
	};
	
	//Print Strength Saving Throw
	var strengthSave = strengthModifier + (characterProficiency * character.saves.strenght);
	if (strengthSave <0) {
		document.getElementById("characterStrengthSave").innerHTML = strengthSave;
	} else {
		document.getElementById("characterStrengthSave").innerHTML = "+" + strengthSave;
	};
	//Print Strength Athletics skill
	var strengthAthletics = strengthModifier + (characterProficiency * character.skill.athletics);
	if (strengthAthletics <0) {
		document.getElementById("characterStrengthAthletics").innerHTML = strengthAthletics;
	} else {
		document.getElementById("characterStrengthAthletics").innerHTML = "+" + strengthAthletics;
	};
	
	//Print Dexterity Saving Throw
	var dexteritySave = dexterityModifier + (characterProficiency * character.saves.dexterity);
	if (dexteritySave <0) {
		document.getElementById("characterDexteritySave").innerHTML = dexteritySave;
	} else {
		document.getElementById("characterDexteritySave").innerHTML = "+" + dexteritySave;
	};
	//Print Dexterity Acrobatics skill
	var dexterityAcrobatics = dexterityModifier + (characterProficiency * character.skill.acrobatics);
	if (dexterityAcrobatics <0) {
		document.getElementById("characterDexterityAcrobatics").innerHTML = dexterityAcrobatics;
	} else {
		document.getElementById("characterDexterityAcrobatics").innerHTML = "+" + dexterityAcrobatics;
	};
	//Print Dexterity Sleight Of Hand skill
	var dexteritySleightOfHand = dexterityModifier + (characterProficiency * character.skill.sleightOfHand);
	if (dexteritySleightOfHand <0) {
		document.getElementById("characterDexteritySleightOfHand").innerHTML = dexteritySleightOfHand;
	} else {
		document.getElementById("characterDexteritySleightOfHand").innerHTML = "+" + dexteritySleightOfHand;
	};
	//Print Dexterity Stealth skill
	var dexterityStealth = dexterityModifier + (characterProficiency * character.skill.stealth);
	if (dexterityStealth <0) {
		document.getElementById("characterDexterityStealth").innerHTML = dexterityStealth;
	} else {
		document.getElementById("characterDexterityStealth").innerHTML = "+" + dexterityStealth;
	};
	
	//Print Constitution Saving Throw
	var constitutionSave = constitutionModifier + (characterProficiency * character.saves.constitution);
	if (constitutionSave <0) {
		document.getElementById("characterConstitutionSave").innerHTML = constitutionSave;
	} else {
		document.getElementById("characterConstitutionSave").innerHTML = "+" + constitutionSave;
	};
	
	//Print Intelligence Saving Throw
	var intelligenceSave = intelligenceModifier + (characterProficiency * character.saves.intelligence);
	if (intelligenceSave <0) {
		document.getElementById("characterIntelligenceSave").innerHTML = intelligenceSave;
	} else {
		document.getElementById("characterIntelligenceSave").innerHTML = "+" + intelligenceSave;
	};
	//Print Intelligence Arcana skill
	var intelligenceArcana = intelligenceModifier + (characterProficiency * character.skill.arcana);
	if (intelligenceArcana <0) {
		document.getElementById("characterIntelligenceArcana").innerHTML = intelligenceArcana;
	} else {
		document.getElementById("characterIntelligenceArcana").innerHTML = "+" + intelligenceArcana;
	};
	//Print Intelligence History skill
	var intelligenceHistory = intelligenceModifier + (characterProficiency * character.skill.history);
	if (intelligenceHistory <0) {
		document.getElementById("characterIntelligenceHistory").innerHTML = intelligenceHistory;
	} else {
		document.getElementById("characterIntelligenceHistory").innerHTML = "+" + intelligenceHistory;
	};
	//Print Intelligence Investigation skill
	var intelligenceInvestigation = intelligenceModifier + (characterProficiency * character.skill.investigation);
	if (intelligenceInvestigation <0) {
		document.getElementById("characterIntelligenceInvestigation").innerHTML = intelligenceInvestigation;
	} else {
		document.getElementById("characterIntelligenceInvestigation").innerHTML = "+" + intelligenceInvestigation;
	};
	//Print Intelligence Nature skill
	var intelligenceNature = intelligenceModifier + (characterProficiency * character.skill.nature);
	if (intelligenceNature <0) {
		document.getElementById("characterIntelligenceNature").innerHTML = intelligenceNature;
	} else {
		document.getElementById("characterIntelligenceNature").innerHTML = "+" + intelligenceNature;
	};
	//Print Intelligence Religion skill
	var intelligenceReligion = intelligenceModifier + (characterProficiency * character.skill.religion);
	if (intelligenceReligion <0) {
		document.getElementById("characterIntelligenceReligion").innerHTML = intelligenceReligion;
	} else {
		document.getElementById("characterIntelligenceReligion").innerHTML = "+" + intelligenceReligion;
	};
	
	//Print Wisdom Saving Throw
	var wisdomSave = wisdomModifier + (characterProficiency * character.saves.wisdom);
	if (wisdomSave <0) {
		document.getElementById("characterWisdomSave").innerHTML = wisdomSave;
	} else {
		document.getElementById("characterWisdomSave").innerHTML = "+" + wisdomSave;
	};
	//Print Wisdom Animal Handling skill
	var wisdomAnimalHandling = wisdomModifier + (characterProficiency * character.skill.animalHandling);
	if (wisdomAnimalHandling <0) {
		document.getElementById("characterWisdomAnimalHandling").innerHTML = wisdomAnimalHandling;
	} else {
		document.getElementById("characterWisdomAnimalHandling").innerHTML = "+" + wisdomAnimalHandling;
	};
	//Print Wisdom Insight skill
	var wisdomInsight = wisdomModifier + (characterProficiency * character.skill.insight);
	if (wisdomInsight <0) {
		document.getElementById("characterWisdomInsight").innerHTML = wisdomInsight;
	} else {
		document.getElementById("characterWisdomInsight").innerHTML = "+" + wisdomInsight;
	};
	//Print Wisdom Medicine skill
	var wisdomMedicine = wisdomModifier + (characterProficiency * character.skill.medicine);
	if (wisdomMedicine <0) {
		document.getElementById("characterWisdomMedicine").innerHTML = wisdomMedicine;
	} else {
		document.getElementById("characterWisdomMedicine").innerHTML = "+" + wisdomMedicine;
	};
	//Print Wisdom Perception skill
	var wisdomPerception = wisdomModifier + (characterProficiency * character.skill.perception);
	if (wisdomPerception <0) {
		document.getElementById("characterWisdomPerception").innerHTML = wisdomPerception;
	} else {
		document.getElementById("characterWisdomPerception").innerHTML = "+" + wisdomPerception;
	};
	//Print Wisdom Survival skill
	var wisdomSurvival = wisdomModifier + (characterProficiency * character.skill.survival);
	if (wisdomSurvival <0) {
		document.getElementById("characterWisdomSurvival").innerHTML = wisdomSurvival;
	} else {
		document.getElementById("characterWisdomSurvival").innerHTML = "+" + wisdomSurvival;
	};
	
	//Print Charisma Saving Throw
	var charismaSave = charismaModifier + (characterProficiency * character.saves.charisma);
	if (charismaSave <0) {
		document.getElementById("characterCharismaSave").innerHTML = charismaSave;
	} else {
		document.getElementById("characterCharismaSave").innerHTML = "+" + charismaSave;
	};
	//Print Charisma Deception skill
	var charismaDeception = charismaModifier + (characterProficiency * character.skill.deception);
	if (charismaDeception <0) {
		document.getElementById("characterCharismaDeception").innerHTML = charismaDeception;
	} else {
		document.getElementById("characterCharismaDeception").innerHTML = "+" + charismaDeception;
	};
	//Print Charisma Intimidation skill
	var charismaIntimidation = charismaModifier + (characterProficiency * character.skill.intimidation);
	if (charismaIntimidation <0) {
		document.getElementById("characterCharismaIntimidation").innerHTML = charismaIntimidation;
	} else {
		document.getElementById("characterCharismaIntimidation").innerHTML = "+" + charismaIntimidation;
	};
	//Print Charisma Performance skill
	var charismaPerformance = charismaModifier + (characterProficiency * character.skill.performance);
	if (charismaPerformance <0) {
		document.getElementById("characterCharismaPerformance").innerHTML = charismaPerformance;
	} else {
		document.getElementById("characterCharismaPerformance").innerHTML = "+" + charismaPerformance;
	};
	//Print Charisma Persuasion skill
	var charismaPersuasion = charismaModifier + (characterProficiency * character.skill.persuasion);
	if (charismaPersuasion <0) {
		document.getElementById("characterCharismaPersuasion").innerHTML = charismaPersuasion;
	} else {
		document.getElementById("characterCharismaPersuasion").innerHTML = "+" + charismaPersuasion;
	};
	
	//Print Weapon Proficiency
	var weaponProficiencyList = character.proficiency.weapon[0];
	for (let i = 1; i < character.proficiency.weapon.length; i++) {
		weaponProficiencyList += ", " + character.proficiency.weapon[i];
	};
	document.getElementById("characterWeaponProficiency").innerHTML = weaponProficiencyList;
	
	//Print Armor Proficiency
	var armorProficiencyList = character.proficiency.armor[0];
	for (let i = 1; i < character.proficiency.armor.length; i++) {
		armorProficiencyList += ", " + character.proficiency.armor[i];
	};
	document.getElementById("characterArmorProficiency").innerHTML = armorProficiencyList;
	
	//Print Tools Proficiency
	var toolsProficiencyList = character.proficiency.tools[0];
	for (let i = 1; i < character.proficiency.tools.length; i++) {
		toolsProficiencyList += ", " + character.proficiency.tools[i];
	};
	document.getElementById("characterToolsProficiency").innerHTML = toolsProficiencyList;
	
	//Print Senses Proficiency
	var sensesProficiencyList = character.proficiency.senses[0];
	for (let i = 1; i < character.proficiency.senses.length; i++) {
		sensesProficiencyList += ", " + character.proficiency.senses[i];
	};
	document.getElementById("characterSensesProficiency").innerHTML = sensesProficiencyList;
	
	//Print Language Proficiency
	var languageProficiencyList = character.proficiency.language[0];
	for (let i = 1; i < character.proficiency.language.length; i++) {
		languageProficiencyList += ", " + character.proficiency.language[i];
	};
	document.getElementById("characterLanguageProficiency").innerHTML = languageProficiencyList;
	
	//Print Saves Proficiency
	var savesProficiencyArray = [];
	if(character.saves.strenght!=0) {savesProficiencyArray.push(" Strength")};
	if(character.saves.dexterity!=0) {savesProficiencyArray.push(" Dexterity")};
	if(character.saves.constitution!=0) {savesProficiencyArray.push(" Constitution")};
	if(character.saves.intelligence!=0) {savesProficiencyArray.push(" Intelligence")};
	if(character.saves.wisdom!=0) {savesProficiencyArray.push(" Wisdom")};
	if(character.saves.charisma!=0) {savesProficiencyArray.push(" Charisma")};
	document.getElementById("characterSavesProficiency").innerHTML = savesProficiencyArray;
	
	//Print Saves Proficiency
	var savesProficiencyArray = [];
	if(character.skill.acrobatics!=0) {savesProficiencyArray.push(" Acrobatics")};
	if(character.skill.animalHandling!=0) {savesProficiencyArray.push(" Animal Handling")};
	if(character.skill.arcana!=0) {savesProficiencyArray.push(" Arcana")};
	if(character.skill.athletics!=0) {savesProficiencyArray.push(" Athletics")};
	if(character.skill.deception!=0) {savesProficiencyArray.push(" Deception")};
	if(character.skill.history!=0) {savesProficiencyArray.push(" History")};
	if(character.skill.insight!=0) {savesProficiencyArray.push(" Insight")};
	if(character.skill.intimidation!=0) {savesProficiencyArray.push(" Intimidation")};
	if(character.skill.investigation!=0) {savesProficiencyArray.push(" Investigation")};
	if(character.skill.medicine!=0) {savesProficiencyArray.push(" Medicine")};
	if(character.skill.nature!=0) {savesProficiencyArray.push(" Nature")};
	if(character.skill.perception!=0) {savesProficiencyArray.push(" Perception")};
	if(character.skill.performance!=0) {savesProficiencyArray.push(" Performance")};
	if(character.skill.persuasion!=0) {savesProficiencyArray.push(" Persuasion")};
	if(character.skill.religion!=0) {savesProficiencyArray.push(" Religion")};
	if(character.skill.sleightOfHand!=0) {savesProficiencyArray.push(" Sleight Of Hand")};
	if(character.skill.stealth!=0) {savesProficiencyArray.push(" Stealth")};
	if(character.skill.survival!=0) {savesProficiencyArray.push(" Survival")};
	document.getElementById("characterSkillsProficiency").innerHTML = savesProficiencyArray;
}

function swapModes() {
	if(!document.getElementById("swapMode").classList.contains("darkMode")){
		document.getElementById("swapMode").classList.add("darkMode");
		document.body.classList.add("body-dark");
		
		var strengthArray = document.getElementsByClassName("character-ability-strength");
		for(let i = 0; i < strengthArray.length; i++) {
			strengthArray[i].classList.add("strength-dark")
		}
		
		var dexterityArray = document.getElementsByClassName("character-ability-dexterity");
		for(let i = 0; i < dexterityArray.length; i++) {
			dexterityArray[i].classList.add("dexterity-dark")
		}
		
		var constitutionArray = document.getElementsByClassName("character-ability-constitution");
		for(let i = 0; i < dexterityArray.length; i++) {
			constitutionArray[i].classList.add("constitution-dark")
		}
		
		var intelligenceArray = document.getElementsByClassName("character-ability-intelligence");
		for(let i = 0; i < dexterityArray.length; i++) {
			intelligenceArray[i].classList.add("intelligence-dark")
		}
		
		var wisdomArray = document.getElementsByClassName("character-ability-wisdom");
		for(let i = 0; i < wisdomArray.length; i++) {
			wisdomArray[i].classList.add("wisdom-dark")
		}
		
		var charismaArray = document.getElementsByClassName("character-ability-charisma");
		for(let i = 0; i < charismaArray.length; i++) {
			charismaArray[i].classList.add("charisma-dark")
		}
		
		//Dark input
		var inputArray = document.getElementsByClassName("character-tab-button-input");
		for(let i = 0; i < inputArray.length; i++) {
			inputArray[i].classList.add("input-dark")
		}
			
		//Dark info tag
		var boxArray = document.getElementsByClassName("featureInfoBold");
		for(let i = 0; i < boxArray.length; i++) {
			boxArray[i].classList.add("featureInfoBold-dark")
		}
			
		//Dark boxes
		var boxArray = document.getElementsByClassName("text-box");
		for(let i = 0; i < boxArray.length; i++) {
			boxArray[i].classList.add("box-dark")
		}
	} else {
		document.getElementById("swapMode").classList.remove("darkMode");
		document.body.classList.remove("body-dark");
		
		var strengthArray = document.getElementsByClassName("character-ability-strength");
		for(let i = 0; i < strengthArray.length; i++) {
			strengthArray[i].classList.remove("strength-dark")
		}
		
		var dexterityArray = document.getElementsByClassName("character-ability-dexterity");
		for(let i = 0; i < dexterityArray.length; i++) {
			dexterityArray[i].classList.remove("dexterity-dark")
		}
		
		var constitutionArray = document.getElementsByClassName("character-ability-constitution");
		for(let i = 0; i < dexterityArray.length; i++) {
			constitutionArray[i].classList.remove("constitution-dark")
		}
		
		var intelligenceArray = document.getElementsByClassName("character-ability-intelligence");
		for(let i = 0; i < dexterityArray.length; i++) {
			intelligenceArray[i].classList.remove("intelligence-dark")
		}
		
		var wisdomArray = document.getElementsByClassName("character-ability-wisdom");
		for(let i = 0; i < wisdomArray.length; i++) {
			wisdomArray[i].classList.remove("wisdom-dark")
		}
		
		var charismaArray = document.getElementsByClassName("character-ability-charisma");
		for(let i = 0; i < charismaArray.length; i++) {
			charismaArray[i].classList.remove("charisma-dark")
		}
		
		//Dark input
		var inputArray = document.getElementsByClassName("character-tab-button-input");
		for(let i = 0; i < inputArray.length; i++) {
			inputArray[i].classList.remove("input-dark")
		}
			
		//Dark info tag
		var boxArray = document.getElementsByClassName("featureInfoBold");
		for(let i = 0; i < boxArray.length; i++) {
			boxArray[i].classList.remove("featureInfoBold-dark")
		}
			
		//Dark boxes
		var boxArray = document.getElementsByClassName("text-box");
		for(let i = 0; i < boxArray.length; i++) {
			boxArray[i].classList.remove("box-dark")
		}
	}
}

//function to get Features
function getFeature(id,feature,extra) {
	document.getElementById(id).innerHTML = "";
	if(feature) {
		document.getElementById(id).setAttribute("onclick","toggleWindow(this.id+'Content')");

		//Feature Name
		var featureTitle = document.createElement("p");
		featureTitle.classList.add("feature-name");
		featureTitle.innerHTML = feature.name;
		document.getElementById(id).appendChild(featureTitle);
		
		//Feature Type
		var featureType = document.createElement("p");
		featureType.classList.add("feature-type");
		featureType.innerHTML = feature.type;
		document.getElementById(id).appendChild(featureType);
		
		//div para esconder informação
		var featureContent = document.createElement("div");
		featureContent.id = id + "Content";
		featureContent.classList.add("feature-content","text-box");
		featureContent.style.display = "none";
		
		//Feature Effect
		for(let i = 0; i < feature.effect.length; i++) {
			var featureEffect = document.createElement("p");
			featureEffect.classList.add("feature-info","feature-effect");
			featureEffect.innerHTML = feature.effect[i];
			featureContent.appendChild(featureEffect);
		}
		
		document.getElementById(id).appendChild(featureContent);
	} else {
		//No Feature Found
		var content = document.createElement("p");
		content.innerHTML = "no feature found... <small><i>(" + id.substring(1) + ")</i></small>";
		document.getElementById(id).appendChild(content);
	}
}

//function to get Weapons
function getWeapon(id,feature,mastery) {
	document.getElementById(id).innerHTML = "";
	if(feature) {
		document.getElementById(id).setAttribute("onclick","toggleWindow(this.id+'Content')");

		//Weapon Name
		var weaponTitle = document.createElement("p");
		weaponTitle.classList.add("feature-name");
		weaponTitle.innerHTML = feature.name;
		document.getElementById(id).appendChild(weaponTitle);
		
		//Weapon Type
		var weaponType = document.createElement("p");
		weaponType.classList.add("feature-type");
		weaponType.innerHTML = feature.type;
		document.getElementById(id).appendChild(weaponType);
		
		//div para esconder informação
		var weaponContent = document.createElement("div");
		weaponContent.id = id + "Content";
		weaponContent.classList.add("feature-content","text-box");
		weaponContent.style.display = "none";
		
		//Weapon Damage
		var weaponDamage = document.createElement("p");
		weaponDamage.classList.add("feature-info","weapon-damage");
		weaponDamage.innerHTML = "<b class='featureInfoBold'>Damage:</b> " + feature.damage;
		weaponContent.appendChild(weaponDamage);
		
		//Weapon Property
		var weaponProperties = document.createElement("p");
		weaponProperties.classList.add("feature-info","weapon-properties");
		weaponProperties.innerHTML = "<b class='featureInfoBold'>Properties:</b> " + feature.properties;
		weaponContent.appendChild(weaponProperties);
		
		//Weapon Effect
		if(feature.effect) {
			var weaponEffect = document.createElement("p");
			weaponEffect.classList.add("feature-info","text-box","weapon-effect");
			weaponEffect.innerHTML = "<b class='featureInfoBold'>Upgrade:</b> " + feature.effect;
			weaponContent.appendChild(weaponEffect);
		}
		
		//Weapon Mastery
		if(mastery == 1) {
			var weaponMastery = document.createElement("p");
			weaponMastery.classList.add("feature-info","text-box","weapon-mastery");
			weaponMastery.innerHTML = "<b class='featureInfoBold' class='featureInfoBold'>" + feature.mastery.name + ":</b>" +feature.mastery.effect;
			weaponContent.appendChild(weaponMastery);
		}
		
		document.getElementById(id).appendChild(weaponContent);
	} else {
		//No Weapon Found
		var content = document.createElement("p");
		content.innerHTML = "no weapon found... <small><i>(" + id.substring(1) + ")</i></small>";
		document.getElementById(id).appendChild(content);
	}
}

//function to get Spell
function getSpell(id,feature,mastery) {
	document.getElementById(id).innerHTML = "";
	if(feature) {
		document.getElementById(id).setAttribute("onclick","toggleWindow(this.id+'Content')");

		//Spell Name
		var spellTitle = document.createElement("p");
		spellTitle.classList.add("feature-name");
		spellTitle.innerHTML = feature.name;
		document.getElementById(id).appendChild(spellTitle);
		
		//Spell Type
		var spellType = document.createElement("p");
		spellType.classList.add("feature-type");
		spellType.innerHTML = feature.type;
		document.getElementById(id).appendChild(spellType);
		
		//div para esconder informação
		var spellContent = document.createElement("div");
		spellContent.id = id + "Content";
		spellContent.classList.add("feature-content","text-box");
		spellContent.style.display = "none";
		
		//Spell Casting Time
		var spellCasting = document.createElement("p");
		spellCasting.classList.add("feature-info","spell-casting");
		spellCasting.innerHTML = "<b class='featureInfoBold'>Casting Time:</b> " + feature.castingTime;
		spellContent.appendChild(spellCasting);
		
		//Spell Casting Time
		var spellRange = document.createElement("p");
		spellRange.classList.add("feature-info","spell-range");
		spellRange.innerHTML = "<b class='featureInfoBold'>Range:</b> " + feature.range;
		spellContent.appendChild(spellRange);
		
		//Spell Components
		var spellComponents = document.createElement("p");
		spellComponents.classList.add("feature-info","spell-components");
		spellComponents.innerHTML = "<b class='featureInfoBold'>Components:</b> " + feature.components;
		spellContent.appendChild(spellComponents);
		
		//Spell Duration
		var spellDuration = document.createElement("p");
		spellDuration.classList.add("feature-info","spell-duration");
		spellDuration.innerHTML = "<b class='featureInfoBold'>Duration:</b> " + feature.duration;
		spellContent.appendChild(spellDuration);
		
		//Spell Effect
		for(let i = 0; i < feature.effect.length; i++) {
			var spellEffect = document.createElement("p");
			spellEffect.classList.add("feature-info","text-box","spell-effect");
			spellEffect.innerHTML = feature.effect[i];
			spellContent.appendChild(spellEffect);
		}
		
		//Spell Upgrade
		if(feature.upgrade) {
			var spellUpgrade = document.createElement("p");
			spellUpgrade.classList.add("feature-info","text-box","spell-upgrade");
			spellUpgrade.innerHTML = "<b class='featureInfoBold'>Upgrade:</b> " + feature.upgrade;
			spellContent.appendChild(spellUpgrade);
		}
		
		document.getElementById(id).appendChild(spellContent);
	} else {
		//No Spell Found
		var content = document.createElement("p");
		content.innerHTML = "no spell found... <small><i>(" + id.substring(1) + ")</i></small>";
		document.getElementById(id).appendChild(content);
	}
}