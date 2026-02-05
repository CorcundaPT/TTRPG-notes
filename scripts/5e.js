function loadCharacter() {
	//calculate level
	var level = character.class[0].level;
	for (let i = 1; i < character.class.length; i++) {
		level += character.class[i].level;
	};
	
	//calcular Proficiency
	const proficiencyBonus = Math.floor(level / 5) + 2;
	
	//calcular character class
	var classList = character.class[0].name + ' ' + character.class[0].subclass + ' (' + character.class[0].level + ')';
	for (let i=1; i<character.class.length; i++) {
		classList += "; " + character.class[i].name + ' ' + character.class[i].subclass + ' (' + character.class[i].level + ')';
	};
	
	//calcular modifiers
	const strengthModifier =  Math.floor((character.ability.strength-10)/2);
	if (strengthModifier>=0){strengthModifierOutput='+'+strengthModifier}else{strengthModifierOutput=strengthModifier}
	const dexterityModifier =  Math.floor((character.ability.dexterity-10)/2);
	if (dexterityModifier>=0){dexterityModifierOutput='+'+dexterityModifier}else{dexterityModifierOutput=dexterityModifier}
	const constitutionModifier =  Math.floor((character.ability.constitution-10)/2);
	if (constitutionModifier>=0){constitutionModifierOutput='+'+constitutionModifier}else{constitutionModifierOutput=constitutionModifier}
	const intelligenceModifier =  Math.floor((character.ability.intelligence-10)/2);
	if (intelligenceModifier>=0){intelligenceModifierOutput='+'+intelligenceModifier}else{intelligenceModifierOutput=intelligenceModifier}
	const wisdomModifier =  Math.floor((character.ability.wisdom-10)/2);
	if (wisdomModifier>=0){wisdomModifierOutput='+'+wisdomModifier}else{wisdomModifierOutput=wisdomModifier}
	const charismaModifier =  Math.floor((character.ability.charisma-10)/2);
	if (charismaModifier>=0){charismaModifierOutput='+'+charismaModifier}else{charismaModifierOutput=charismaModifier}
	
	//calcular Iniciative
	var iniciative = dexterityModifier + character.iniciativeBonus;
	if (iniciative>0){iniciative= '+' + iniciative}
	
	//calcular Hit Dices & output Hit Dice
	var hitDice6 = 0;
	var hitDice8 = 0;
	var hitDice10 = 0;
	var hitDice12 = 0;
	for (let i=0; i<character.class.length; i++) {
		switch (character.class[i].name){
			case "Cleric":
				hitDice8 += character.class[i].level;
				break;
			case "Ranger":
				hitDice10 += character.class[i].level;
				break;
			case "Rogue":
				hitDice8 += character.class[i].level;
				break;
		}
	}
	if(hitDice6>0){
		var hitDice6Output = document.createElement('p');
		hitDice6Output.classList.add('stats-value', 'text-box');
		hitDice6Output.innerHTML = hitDice6 + 'd6';
		document.getElementById('hitDice').appendChild(hitDice6Output);
	}
	if(hitDice8>0){
		var hitDice8Output = document.createElement('p');
		hitDice8Output.classList.add('stats-value', 'text-box');
		hitDice8Output.innerHTML = hitDice8 + 'd8';
		document.getElementById('hitDice').appendChild(hitDice8Output);
	}
	if(hitDice10>0){
		var hitDice10Output = document.createElement('p');
		hitDice10Output.classList.add('stats-value', 'text-box');
		hitDice10Output.innerHTML = hitDice10 + 'd10';
		document.getElementById('hitDice').appendChild(hitDice10Output);
	}
	if(hitDice12>0){
		var hitDice12Output = document.createElement('p');
		hitDice12Output.classList.add('stats-value', 'text-box');
		hitDice12Output.innerHTML = hitDice12 + 'd12';
		document.getElementById('hitDice').appendChild(hitDice12Output);
	}
	
	//calcular Armor class
	var armorClassBonus = dexterityModifier;
	switch (character.armorClass.type){
		case "medium":
			if(armorClassBonus>2){armorClassBonus=2};
			break;
		case "heavy":
			armorClassBonus = 0;
			break;
	}
	const armorClass = character.armorClass.armor + armorClassBonus
	
	//calcular saves Proficiency
	var strengthSave = strengthModifier + (proficiencyBonus * character.save.strength.proficiency) + character.save.strength.bonus;
	if (strengthSave>=0){strengthSave='+'+strengthSave};
	var dexteritySave = dexterityModifier + (proficiencyBonus * character.save.dexterity.proficiency) + character.save.dexterity.bonus;
	if (dexteritySave>=0){dexteritySave='+'+dexteritySave};
	var constitutionSave = constitutionModifier + (proficiencyBonus * character.save.constitution.proficiency) + character.save.constitution.bonus;
	if (constitutionSave>=0){constitutionSave='+'+constitutionSave};
	var intelligenceSave = intelligenceModifier + (proficiencyBonus * character.save.intelligence.proficiency) + character.save.intelligence.bonus;
	if (intelligenceSave>=0){intelligenceSave='+'+intelligenceSave};
	var wisdomSave = wisdomModifier + (proficiencyBonus * character.save.wisdom.proficiency) + character.save.wisdom.bonus;
	if (wisdomSave>=0){wisdomSave='+'+wisdomSave};
	var charismaSave = charismaModifier + (proficiencyBonus * character.save.charisma.proficiency) + character.save.charisma.bonus;
	if (charismaSave>=0){charismaSave='+'+charismaSave};
	
	//calcular Skills Proficiency
	var strengthAthletics = strengthModifier + (proficiencyBonus * character.skill.athletics.proficiency) + character.skill.athletics.bonus;
	if (strengthAthletics>=0){strengthAthletics='+'+strengthAthletics};
	
	var dexterityAcrobatics = dexterityModifier + (proficiencyBonus * character.skill.acrobatics.proficiency) + character.skill.acrobatics.bonus;
	if (dexterityAcrobatics>=0){dexterityAcrobatics='+'+dexterityAcrobatics};
	var dexteritySleightOfHand = dexterityModifier + (proficiencyBonus * character.skill.sleightOfHand.proficiency) + character.skill.sleightOfHand.bonus;
	if (dexteritySleightOfHand>=0){dexteritySleightOfHand='+'+dexteritySleightOfHand};
	var dexterityStealth = dexterityModifier + (proficiencyBonus * character.skill.stealth.proficiency) + character.skill.stealth.bonus;
	if (dexterityStealth>=0){dexterityStealth='+'+dexterityStealth};
	
	var intelligenceArcana = intelligenceModifier + (proficiencyBonus * character.skill.arcana.proficiency) + character.skill.arcana.bonus;
	if (intelligenceArcana>=0){intelligenceArcana='+'+intelligenceArcana};
	var intelligenceHistory = intelligenceModifier + (proficiencyBonus * character.skill.history.proficiency) + character.skill.history.bonus;
	if (intelligenceHistory>=0){intelligenceHistory='+'+intelligenceHistory};
	var intelligenceInvestigation = intelligenceModifier + (proficiencyBonus * character.skill.investigation.proficiency) + character.skill.investigation.bonus;
	if (intelligenceInvestigation>=0){intelligenceInvestigation='+'+intelligenceInvestigation};
	var intelligenceNature = intelligenceModifier + (proficiencyBonus * character.skill.nature.proficiency) + character.skill.nature.bonus;
	if (intelligenceNature>=0){intelligenceNature='+'+intelligenceNature};
	var intelligenceReligion = intelligenceModifier + (proficiencyBonus * character.skill.religion.proficiency) + character.skill.religion.bonus;
	if (intelligenceReligion>=0){intelligenceReligion='+'+intelligenceReligion};
	
	var wisdomAnimalHandling = wisdomModifier + (proficiencyBonus * character.skill.animalHandling.proficiency) + character.skill.animalHandling.bonus;
	if (wisdomAnimalHandling>=0){wisdomAnimalHandling='+'+wisdomAnimalHandling};
	var wisdomInsight = wisdomModifier + (proficiencyBonus * character.skill.insight.proficiency) + character.skill.insight.bonus;
	if (wisdomInsight>=0){wisdomInsight='+'+wisdomInsight};
	var wisdomMedicine = wisdomModifier + (proficiencyBonus * character.skill.medicine.proficiency) + character.skill.medicine.bonus;
	if (wisdomMedicine>=0){wisdomMedicine='+'+wisdomMedicine};
	var wisdomPerception = wisdomModifier + (proficiencyBonus * character.skill.perception.proficiency) + character.skill.perception.bonus;
	if (wisdomPerception>=0){wisdomPerception='+'+wisdomPerception};
	var wisdomSurvival = wisdomModifier + (proficiencyBonus * character.skill.survival.proficiency) + character.skill.survival.bonus;
	if (wisdomSurvival>=0){wisdomSurvival='+'+wisdomSurvival};
	
	var charismaDeception = charismaModifier + (proficiencyBonus * character.skill.deception.proficiency) + character.skill.deception.bonus;
	if (charismaDeception>=0){charismaDeception='+'+charismaDeception};
	var charismaIntimidation = charismaModifier + (proficiencyBonus * character.skill.intimidation.proficiency) + character.skill.intimidation.bonus;
	if (charismaIntimidation>=0){charismaIntimidation='+'+charismaIntimidation};
	var charismaPerformance = charismaModifier + (proficiencyBonus * character.skill.performance.proficiency) + character.skill.performance.bonus;
	if (charismaPerformance>=0){charismaPerformance='+'+charismaPerformance};
	var charismaPersuasion = charismaModifier + (proficiencyBonus * character.skill.persuasion.proficiency) + character.skill.persuasion.bonus;
	if (charismaPersuasion>=0){charismaPersuasion='+'+charismaPersuasion};
	
	//Proficiency Saves
	var proficiencySavesArray = [];
	if(character.save.strength.proficiency!=0) {proficiencySavesArray.push('Strength')};
	if(character.save.dexterity.proficiency!=0) {proficiencySavesArray.push('Dexterity')};
	if(character.save.constitution.proficiency!=0) {proficiencySavesArray.push('Constitution')};
	if(character.save.intelligence.proficiency!=0) {proficiencySavesArray.push('Intelligence')};
	if(character.save.wisdom.proficiency!=0) {proficiencySavesArray.push('Wisdom')};
	if(character.save.charisma.proficiency!=0) {proficiencySavesArray.push('Charisma')};
	var proficiencySaves = proficiencySavesArray[0];
	for (let i = 1; i < proficiencySavesArray.length; i++) {
		proficiencySaves += '; ' + proficiencySavesArray[i];
	};
	//Proficiency skills
	var proficiencySkillsArray = [];
	if(character.skill.acrobatics.proficiency!=0) {proficiencySkillsArray.push('Acrobatics')};
	if(character.skill.animalHandling.proficiency!=0) {proficiencySkillsArray.push('Animal Handling')};
	if(character.skill.arcana.proficiency!=0) {proficiencySkillsArray.push('Arcana')};
	if(character.skill.athletics.proficiency!=0) {proficiencySkillsArray.push('Athletics')};
	if(character.skill.deception.proficiency!=0) {proficiencySkillsArray.push('Deception')};
	if(character.skill.history.proficiency!=0) {proficiencySkillsArray.push('History')};
	if(character.skill.insight.proficiency!=0) {proficiencySkillsArray.push('Insight')};
	if(character.skill.intimidation.proficiency!=0) {proficiencySkillsArray.push('Intimidation')};
	if(character.skill.investigation.proficiency!=0) {proficiencySkillsArray.push('Investigation')};
	if(character.skill.medicine.proficiency!=0) {proficiencySkillsArray.push('Medicine')};
	if(character.skill.nature.proficiency!=0) {proficiencySkillsArray.push('Nature')};
	if(character.skill.perception.proficiency!=0) {proficiencySkillsArray.push('Perception')};
	if(character.skill.performance.proficiency!=0) {proficiencySkillsArray.push('Performance')};
	if(character.skill.persuasion.proficiency!=0) {proficiencySkillsArray.push('Persuasion')};
	if(character.skill.religion.proficiency!=0) {proficiencySkillsArray.push('Religion')};
	if(character.skill.sleightOfHand.proficiency!=0) {proficiencySkillsArray.push('Sleight Of Hand')};
	if(character.skill.stealth.proficiency!=0) {proficiencySkillsArray.push('Stealth')};
	if(character.skill.survival.proficiency!=0) {proficiencySkillsArray.push('Survival')};
	var proficiencySkills = proficiencySkillsArray[0];
	for (let i = 1; i < proficiencySkillsArray.length; i++) {
		proficiencySkills += '; ' + proficiencySkillsArray[i];
	};
	
	//Expertise
	var proficiencyExpertiseArray = [];
	if(character.skill.acrobatics.proficiency==2) {proficiencyExpertiseArray.push('Acrobatics')};
	if(character.skill.animalHandling.proficiency==2) {proficiencyExpertiseArray.push('Animal Handling')};
	if(character.skill.arcana.proficiency==2) {proficiencyExpertiseArray.push('Arcana')};
	if(character.skill.athletics.proficiency==2) {proficiencyExpertiseArray.push('Athletics')};
	if(character.skill.deception.proficiency==2) {proficiencyExpertiseArray.push('Deception')};
	if(character.skill.history.proficiency==2) {proficiencyExpertiseArray.push('History')};
	if(character.skill.insight.proficiency==2) {proficiencyExpertiseArray.push('Insight')};
	if(character.skill.intimidation.proficiency==2) {proficiencyExpertiseArray.push('Intimidation')};
	if(character.skill.investigation.proficiency==2) {proficiencyExpertiseArray.push('Investigation')};
	if(character.skill.medicine.proficiency==2) {proficiencyExpertiseArray.push('Medicine')};
	if(character.skill.nature.proficiency==2) {proficiencyExpertiseArray.push('Nature')};
	if(character.skill.perception.proficiency==2) {proficiencyExpertiseArray.push('Perception')};
	if(character.skill.performance.proficiency==2) {proficiencyExpertiseArray.push('Performance')};
	if(character.skill.persuasion.proficiency==2) {proficiencyExpertiseArray.push('Persuasion')};
	if(character.skill.religion.proficiency==2) {proficiencyExpertiseArray.push('Religion')};
	if(character.skill.sleightOfHand.proficiency==2) {proficiencyExpertiseArray.push('Sleight Of Hand')};
	if(character.skill.stealth.proficiency==2) {proficiencyExpertiseArray.push('Stealth')};
	if(character.skill.survival.proficiency==2) {proficiencyExpertiseArray.push('Survival')};
	var proficiencyExpertise = proficiencyExpertiseArray[0];
	for (let i = 1; i < proficiencyExpertiseArray.length; i++) {
		proficiencyExpertise += '; ' + proficiencyExpertiseArray[i];
	};
	if(proficiencyExpertise) {document.getElementById('proficiencyExpertiseBox').style.display='block'}
	
	//calcular Spellslots
	var spellcastingLevel=0;
	var spellslot1=0;
	var spellslot2=0;
	var spellslot3=0;
	var spellslot4=0;
	var spellslot5=0;
	var spellslot6=0;
	var spellslot7=0;
	var spellslot8=0;
	var spellslot9=0;
	for (let i=0; i<character.class.length; i++) {
		switch (character.class[i].name){
			case 'Cleric':
				spellcastingLevel+=1*character.class[i].level;
				break;
			case 'Ranger':
				spellcastingLevel+=0.5*character.class[i].level;
				break;
		}
	}
	spellcastingLevel=Math.floor(spellcastingLevel);
	if(spellcastingLevel>0) {document.getElementById('spellslotsTab').style.display='block';}
	switch (spellcastingLevel){
		case 1:
			spellslot1=2;
			break;
		case 2:
			spellslot1=3;
			break;
		case 3:
			spellslot1=4;
			spellslot2=2;
			break;
		case 4:
			spellslot1=4;
			spellslot2=3;
			break;
		case 5:
			spellslot1=4;
			spellslot2=3;
			spellslot3=2;
			break;
		case 6:
			spellslot1=4;
			spellslot2=3;
			spellslot3=3;
			break;
		case 7:
			spellslot1=4;
			spellslot2=3;
			spellslot3=3;
			spellslot4=1;
			break;
		case 8:
			spellslot1=4;
			spellslot2=3;
			spellslot3=3;
			spellslot4=2;
			break;
		case 9:
			spellslot1=4;
			spellslot2=3;
			spellslot3=3;
			spellslot4=3;
			spellslot5=1;
			break;
		case 10:
			spellslot1=4;
			spellslot2=3;
			spellslot3=3;
			spellslot4=3;
			spellslot5=2;
			break;
		case 11:
			spellslot1=4;
			spellslot2=3;
			spellslot3=3;
			spellslot4=3;
			spellslot5=2;
			spellslot6=1;
			break;
		case 12:
			spellslot1=4;
			spellslot2=3;
			spellslot3=3;
			spellslot4=3;
			spellslot5=2;
			spellslot6=1;
			break;
		case 13:
			spellslot1=4;
			spellslot2=3;
			spellslot3=3;
			spellslot4=3;
			spellslot5=2;
			spellslot6=1;
			spellslot7=1;
			break;
		case 14:
			spellslot1=4;
			spellslot2=3;
			spellslot3=3;
			spellslot4=3;
			spellslot5=2;
			spellslot6=1;
			spellslot7=1;
			break;
		case 15:
			spellslot1=4;
			spellslot2=3;
			spellslot3=3;
			spellslot4=3;
			spellslot5=2;
			spellslot6=1;
			spellslot7=1;
			spellslot8=1;
			break;
		case 16:
			spellslot1=4;
			spellslot2=3;
			spellslot3=3;
			spellslot4=3;
			spellslot5=2;
			spellslot6=1;
			spellslot7=1;
			spellslot8=1;
			break;
		case 17:
			spellslot1=4;
			spellslot2=3;
			spellslot3=3;
			spellslot4=3;
			spellslot5=2;
			spellslot6=1;
			spellslot7=1;
			spellslot8=1;
			spellslot9=1;
			break;
		case 18:
			spellslot1=4;
			spellslot2=3;
			spellslot3=3;
			spellslot4=3;
			spellslot5=3;
			spellslot6=1;
			spellslot7=1;
			spellslot8=1;
			spellslot9=1;
			break;
		case 19:
			spellslot1=4;
			spellslot2=3;
			spellslot3=3;
			spellslot4=3;
			spellslot5=3;
			spellslot6=2;
			spellslot7=1;
			spellslot8=1;
			spellslot9=1;
			break;
		case 20:
			spellslot1=4;
			spellslot2=3;
			spellslot3=3;
			spellslot4=3;
			spellslot5=3;
			spellslot6=2;
			spellslot7=2;
			spellslot8=1;
			spellslot9=1;
			break;
	}
	if (spellslot1>0) {document.getElementById('spellslot1Box').style.display='block';}
	if (spellslot2>0) {document.getElementById('spellslot2Box').style.display='block';}
	if (spellslot3>0) {document.getElementById('spellslot3Box').style.display='block';}
	if (spellslot4>0) {document.getElementById('spellslot4Box').style.display='block';}
	if (spellslot5>0) {document.getElementById('spellslot5Box').style.display='block';}
	if (spellslot6>0) {document.getElementById('spellslot6Box').style.display='block';}
	if (spellslot7>0) {document.getElementById('spellslot7Box').style.display='block';}
	if (spellslot8>0) {document.getElementById('spellslot8Box').style.display='block';}
	if (spellslot9>0) {document.getElementById('spellslot9Box').style.display='block';}
	
	//Calcular Spellcasting ability
	if (character.spellcasting!='') {document.getElementById('spellAbilityTab').style.display='block';}
	if (character.spellcasting.includes('Intelligence')) {document.getElementById('spellAbilityIntelligence').style.display=''};
	if (character.spellcasting.includes('Wisdom')) {document.getElementById('spellAbilityWisdom').style.display=''};
	if (character.spellcasting.includes('Charisma')) {document.getElementById('spellAbilityCharisma').style.display=''};
	
	const spellDcIntelligence = 8 + proficiencyBonus + intelligenceModifier;
	const spellAttackIntelligence = proficiencyBonus + intelligenceModifier;
	const spellDcWisdom = 8 + proficiencyBonus + wisdomModifier;
	const spellAttackWisdom = proficiencyBonus + wisdomModifier;
	const spellDcCharisma = 8 + proficiencyBonus + charismaModifier;
	const spellAttackCharisma = proficiencyBonus + charismaModifier;
	
	//Load character info
	document.getElementById('characterName').innerHTML = character.name;
	document.getElementById('characterLevel').innerHTML = level;
	document.getElementById('characterSpecie').innerHTML = character.specie + ' <small style="font-weight:normal"><i>' + character.size + '</i></small>';
	document.getElementById('characterBackground').innerHTML = character.background;
	document.getElementById('characterProficiency').innerHTML = '+' + proficiencyBonus;
	document.getElementById('characterClass').innerHTML = classList;
	
	//load stats
	document.getElementById('speed').innerHTML = character.speed;
	document.getElementById('speed').innerHTML = character.speed;
	document.getElementById('iniciative').innerHTML = iniciative;
	document.getElementById('armorClass').innerHTML = armorClass;
	document.getElementById('hitPoints').innerHTML = character.hitPoints;
	
	//load ability
	document.getElementById('strengthScore').innerHTML = character.ability.strength;
	document.getElementById('dexterityScore').innerHTML = character.ability.dexterity;
	document.getElementById('constitutionScore').innerHTML = character.ability.constitution;
	document.getElementById('intelligenceScore').innerHTML = character.ability.intelligence;
	document.getElementById('wisdomScore').innerHTML = character.ability.wisdom;
	document.getElementById('charismaScore').innerHTML = character.ability.charisma;
	
	document.getElementById('strengthModifier').innerHTML = strengthModifierOutput;
	document.getElementById('dexterityModifier').innerHTML = dexterityModifierOutput;
	document.getElementById('constitutionModifier').innerHTML = constitutionModifierOutput;
	document.getElementById('intelligenceModifier').innerHTML = intelligenceModifierOutput;
	document.getElementById('wisdomModifier').innerHTML = wisdomModifierOutput;
	document.getElementById('charismaModifier').innerHTML = charismaModifierOutput;
	
	//load saves
	document.getElementById('strengthSave').innerHTML = strengthSave;
	document.getElementById('dexteritySave').innerHTML = dexteritySave;
	document.getElementById('constitutionSave').innerHTML = constitutionSave;
	document.getElementById('intelligenceSave').innerHTML = intelligenceSave;
	document.getElementById('wisdomSave').innerHTML = wisdomSave;
	document.getElementById('charismaSave').innerHTML = charismaSave;
	
	//load skills
	document.getElementById('strengthAthletics').innerHTML = strengthAthletics;
	document.getElementById('dexterityAcrobatics').innerHTML = dexterityAcrobatics;
	document.getElementById('dexteritySleightOfHand').innerHTML = dexteritySleightOfHand;
	document.getElementById('dexterityStealth').innerHTML = dexterityStealth;
	document.getElementById('intelligenceArcana').innerHTML = intelligenceArcana;
	document.getElementById('intelligenceHistory').innerHTML = intelligenceHistory;
	document.getElementById('intelligenceInvestigation').innerHTML = intelligenceInvestigation;
	document.getElementById('intelligenceNature').innerHTML = intelligenceNature;
	document.getElementById('intelligenceReligion').innerHTML = intelligenceReligion;
	document.getElementById('wisdomAnimalHandling').innerHTML = wisdomAnimalHandling;
	document.getElementById('wisdomInsight').innerHTML = wisdomInsight;
	document.getElementById('wisdomMedicine').innerHTML = wisdomMedicine;
	document.getElementById('wisdomPerception').innerHTML = wisdomPerception;
	document.getElementById('wisdomSurvival').innerHTML = wisdomSurvival;
	document.getElementById('charismaDeception').innerHTML = charismaDeception;
	document.getElementById('charismaIntimidation').innerHTML = charismaIntimidation;
	document.getElementById('charismaPerformance').innerHTML = charismaPerformance;
	document.getElementById('charismaPersuasion').innerHTML = charismaPersuasion;
	
	//load proficiencies
	document.getElementById('proficiencyWeapons').innerHTML = character.proficiency.weapons;
	document.getElementById('proficiencyArmors').innerHTML = character.proficiency.armors;
	document.getElementById('proficiencyTools').innerHTML = character.proficiency.tools;
	document.getElementById('proficiencySenses').innerHTML = character.proficiency.senses;
	document.getElementById('proficiencyLanguages').innerHTML = character.proficiency.languages;
	document.getElementById('proficiencySaves').innerHTML = proficiencySaves;
	document.getElementById('proficiencySkills').innerHTML = proficiencySkills;
	document.getElementById('proficiencyExpertise').innerHTML = proficiencyExpertise;
	
	//laod Spellslots
	document.getElementById('spellslot1').innerHTML = spellslot1;
	document.getElementById('spellslot2').innerHTML = spellslot2;
	document.getElementById('spellslot3').innerHTML = spellslot3;
	document.getElementById('spellslot4').innerHTML = spellslot4;
	document.getElementById('spellslot5').innerHTML = spellslot5;
	document.getElementById('spellslot6').innerHTML = spellslot6;
	document.getElementById('spellslot7').innerHTML = spellslot7;
	document.getElementById('spellslot8').innerHTML = spellslot8;
	document.getElementById('spellslot9').innerHTML = spellslot9;
	
	//laod Spellscasting ability
	document.getElementById('spellDcIntelligence').innerHTML = spellDcIntelligence;
	document.getElementById('spellAttackIntelligence').innerHTML = '+' + spellAttackIntelligence;
	document.getElementById('spellDcWisdom').innerHTML = spellDcWisdom;
	document.getElementById('spellAttackWisdom').innerHTML = '+' + spellAttackWisdom;
	document.getElementById('spellDcCharisma').innerHTML = spellDcCharisma;
	document.getElementById('spellAttackCharisma').innerHTML = '+' + spellAttackCharisma;
	
	//laod Coins
	document.getElementById('copper').innerHTML = character.coin.copper;
	document.getElementById('silver').innerHTML = character.coin.silver;
	document.getElementById('gold').innerHTML = character.coin.gold;
}

function switchTabs(target){
	var buttons = document.getElementsByClassName('button-tab');
	for(let i=0; i<buttons.length; i++) {
		buttons[i].classList.remove('button-tab-active');
	}
	document.getElementById(target+'Button').classList.add('button-tab-active');
	
	var tabsAll = ['skills','actions','backpack','character']
	for(let i=0; i<tabsAll.length; i++) {
		document.getElementById(tabsAll[i]).style.display = 'none';
	}
	document.getElementById(target).style.display = 'block';
}

function getAction(target,type,item,extra){
	document.getElementById(target+'Title').style.display = 'block';
	
	var itemDiv = document.createElement('div');
	itemDiv.id = 'a' + item.name;
	itemDiv.classList.add('action-box','text-box');
	itemDiv.setAttribute('onclick','toggleWindow(this.id+"Content")');

	var itemTitle = document.createElement('p');
	itemTitle.classList.add('action-name');
	itemTitle.innerHTML = item.name;
	if(item.name=='Mind Magic'){itemTitle.innerHTML = 'Channel Divinity: ' + item.name};
	itemDiv.appendChild(itemTitle);

	var itemSubTitle = document.createElement('p');
	itemSubTitle.classList.add('action-type');
	itemSubTitle.innerHTML = item.type;
	if(extra=='scroll'){itemSubTitle.innerHTML = 'Spell Scroll';}
	itemDiv.appendChild(itemSubTitle);
	
	var itemContent = document.createElement('div');
	itemContent.id = 'a' + item.name + 'Content';
	itemContent.style.display = 'none';
	itemContent.classList.add('action-content','text-box');
	
	switch (type){
		case 'specie':
			for(let i = 0; i < item.info.length; i++){
				var itemInfo = document.createElement('p');
				itemInfo.classList.add('action-info');
				itemInfo.innerHTML = item.info[i];
				itemContent.appendChild(itemInfo);
			}
			itemDiv.appendChild(itemContent);
			break;
		case 'feat':
			for(let i = 0; i < item.info.length; i++){
				var itemInfo = document.createElement('p');
				itemInfo.classList.add('action-info');
				itemInfo.innerHTML = item.info[i];
				itemContent.appendChild(itemInfo);
			}
			if(item.infoExtra){
				for(let i = 0; i < item.infoExtra.length; i++){
					var itemInfoExtra = document.createElement('p');
					itemInfoExtra.classList.add('action-infoExtra','text-box');
					itemInfoExtra.innerHTML = item.infoExtra[i];
					itemContent.appendChild(itemInfoExtra);
				}
			}
			itemDiv.appendChild(itemContent);
			break;
		case 'weapon':
			var itemDamage = document.createElement('p');
			itemDamage.classList.add('action-info');
			itemDamage.innerHTML = '<b class="infoBold">Damage:</b> ' + item.damage;
			itemContent.appendChild(itemDamage);
			
			if(item.properties != ''){
				var itemProperties = document.createElement('p');
				itemProperties.classList.add('action-info');
				itemProperties.innerHTML = '<b class="infoBold">Properties:</b> ' + item.properties;
				itemContent.appendChild(itemProperties);
			}
			
			if(extra){
				var itemProperties = document.createElement('p');
				itemProperties.classList.add('action-infoExtra','text-box');
				itemProperties.innerHTML = '<b class="infoBold">' + item.mastery.name + ':</b> ' + item.mastery.info;
				itemContent.appendChild(itemProperties);
			}
			
			itemDiv.appendChild(itemContent);
			break;
		case 'item':
			for(let i = 0; i < item.info.length; i++){
				var itemInfo = document.createElement('p');
				itemInfo.classList.add('action-info');
				itemInfo.innerHTML = item.info[i];
				itemContent.appendChild(itemInfo);
			}
			if(item.infoExtra){
				for(let i = 0; i < item.infoExtra.length; i++){
					var itemInfoExtra = document.createElement('p');
					itemInfoExtra.classList.add('action-infoExtra','text-box');
					itemInfoExtra.innerHTML = item.infoExtra[i];
					itemContent.appendChild(itemInfoExtra);
				}
			}
			itemDiv.appendChild(itemContent);
			break;
		case 'spell':
			if(extra=='Intelligence' || extra=='Wisdom' || extra=='Charisma' || extra=='Any'){
				var itemCastTime = document.createElement('p');
				itemCastTime.classList.add('action-info-spell');
				itemCastTime.innerHTML = '<b class="infoBold">Spellcasting Ability:</b> ' + extra;
				itemContent.appendChild(itemCastTime);
			}
			if(extra=='scroll'){
				var itemCastTime = document.createElement('p');
				itemCastTime.classList.add('action-info-spell');
				itemCastTime.innerHTML = '<b class="infoBold">Spellcasting Ability:</b> Any';
				itemContent.appendChild(itemCastTime);
			}
			
			var itemCastTime = document.createElement('p');
			itemCastTime.classList.add('action-info-spell');
			itemCastTime.innerHTML = '<b class="infoBold">Casting Time: </b>' + item.castTime;
			itemContent.appendChild(itemCastTime);
			
			var itemRange = document.createElement('p');
			itemRange.classList.add('action-info-spell');
			itemRange.innerHTML = '<b class="infoBold">Range: </b>' + item.range;
			itemContent.appendChild(itemRange);
			
			var itemComponents = document.createElement('p');
			itemComponents.classList.add('action-info-spell');
			itemComponents.innerHTML = '<b class="infoBold">Components: </b>' + item.components;
			itemContent.appendChild(itemComponents);
			
			var itemDuration = document.createElement('p');
			itemDuration.classList.add('action-info-spell');
			itemDuration.innerHTML = '<b class="infoBold">Duration: </b>' + item.duration;
			itemContent.appendChild(itemDuration);
			
			var itemInfoSpell = document.createElement('div');
			itemInfoSpell.classList.add('spell-content','text-box');
			for(let i = 0; i < item.info.length; i++){
				var itemInfo = document.createElement('p');
				itemInfo.classList.add('action-info');
				itemInfo.innerHTML = item.info[i];
				itemInfoSpell.appendChild(itemInfo);
			}
			if(item.infoExtra){
				for(let i = 0; i < item.infoExtra.length; i++){
					var itemInfoExtra = document.createElement('p');
					itemInfoExtra.classList.add('features-infoExtra','text-box');
					itemInfoExtra.innerHTML = item.infoExtra[i];
					itemInfoSpell.appendChild(itemInfoExtra);
				}
			}
			if(item.info2){
				for(let i = 0; i < item.info2.length; i++){
					var itemInfo2 = document.createElement('p');
					itemInfo2.classList.add('action-info');
					itemInfo2.innerHTML = item.info2[i];
					itemInfoSpell.appendChild(itemInfo2);
				}
			}
			itemContent.appendChild(itemInfoSpell);
			
			if(item.upgrade && extra!='scroll'){
				var itemUpgrade = document.createElement('p');
				itemUpgrade.classList.add('spell-upgrade','text-box');
				itemUpgrade.innerHTML = '<b class="infoBold">Upgrade: </b>' + item.upgrade;
				itemContent.appendChild(itemUpgrade);
			}
			itemDiv.appendChild(itemContent);
			break;
		case 'class':	
			for(let i = 0; i < item.info.length; i++){
				var itemInfo = document.createElement('p');
				itemInfo.classList.add('features-info');
				itemInfo.innerHTML = item.info[i];
				itemContent.appendChild(itemInfo);
			}
			
			if(item.infoExtra){
				for(let i = 0; i < item.infoExtra.length; i++){
					var itemInfoExtra = document.createElement('p');
					itemInfoExtra.classList.add('features-infoExtra','text-box');
					itemInfoExtra.innerHTML = item.infoExtra[i];
					itemContent.appendChild(itemInfoExtra);
				}
			}
			itemDiv.appendChild(itemContent);
			break;
	}
	var itemIcon = document.createElement('div');
	if(extra=='scroll'){type='scroll'};
	if(type=='weapon' && item.type.includes('Melee Weapon')){type='weapon-melee'};
	if(type=='weapon' && item.type.includes('Ranged Weapon')){type='weapon-ranged'};
	if(type=='item' && item.type.includes('Adventuring Gear')){type='adventureGear'};
	if(type=='item' && item.type.includes('Artisan Tools')){type='tools'};
	if(type=='item' && item.type.includes('Other Tools')){type='tools'};
	if(extra=='cleric'){type='cleric'};
	if(extra=='ranger'){type='ranger'};
	if(extra=='rogue'){type='rogue'};
	itemIcon.classList.add('action-icon','icon-'+type,'icon-'+target);
	itemDiv.appendChild(itemIcon);
	
	document.getElementById(target).appendChild(itemDiv)
}

function getInventory(type,quantaty,item,extra,equiped){
	var itemDiv = document.createElement('div');
	itemDiv.id = 'i' + item.name;
	itemDiv.classList.add('inventory-box','text-box');
	itemDiv.setAttribute('onclick','toggleWindow(this.id+"Content")');
	
	var itemLine = document.createElement('div');
	itemLine.classList.add('inventory-line');
		var itemQuantaty = document.createElement('p');
		itemQuantaty.classList.add('inventory-quantaty','text-box');
		itemQuantaty.innerHTML = quantaty;
		itemLine.appendChild(itemQuantaty);
		
		var itemIcon = document.createElement('div');
		var inventoryIcon='';
		if(item.type.includes('Melee Weapon')){inventoryIcon='weapon-melee'}
		if(item.type.includes('Ranged Weapon')){inventoryIcon='weapon-ranged'}
		if(item.type.includes('Armor')){inventoryIcon='armor'}
		if(item.type == 'Shield'){inventoryIcon='shield'}
		if(item.type == 'Ammunition'){inventoryIcon='ammunition'}
		if(item.type == 'Adventuring Gear'){inventoryIcon='adventureGear'}
		if(item.type == 'Artisan Tools' || item.type == 'Other Tools'){inventoryIcon='tools'}
		if(item.type == 'Scroll'){inventoryIcon='scroll'}
		if(item.name.includes('Necklace')){inventoryIcon='necklace'}
		itemIcon.classList.add('inventory-icon','icon-'+inventoryIcon);
		if(equiped){itemIcon.classList.add('icon-action')};
		itemLine.appendChild(itemIcon);
		
		var itemTitle = document.createElement('p');
		itemTitle.classList.add('inventory-name');
		itemTitle.innerHTML = item.name;
		if(type=='necklaceAttune'){itemTitle.innerHTML += extra[0];}
		if(type=='scroll'){itemTitle.innerHTML += extra;}
		itemLine.appendChild(itemTitle);

		var itemSubTitle = document.createElement('p');
		itemSubTitle.classList.add('inventory-type');
		itemSubTitle.innerHTML = '(' + item.type + ')';
		if(extra=='scroll'){itemSubTitle.innerHTML = 'Spell Scroll';}
		itemLine.appendChild(itemSubTitle);
	itemDiv.appendChild(itemLine);
	
	var itemContent = document.createElement('div');
	itemContent.id = 'i' + item.name + 'Content';
	itemContent.style.display = 'none';
	itemContent.classList.add('inventory-content','text-box');
	
	switch (type){
		case 'weapon': 
			var itemDamage = document.createElement('p');
			itemDamage.classList.add('inventory-info');
			itemDamage.innerHTML = '<b class="infoBold">Damage: </b>' + item.damage;
			itemContent.appendChild(itemDamage);
			
			if(item.properties != ''){
				var itemProperties = document.createElement('p');
				itemProperties.classList.add('action-info');
				itemProperties.innerHTML = '<b class="infoBold">Properties:</b> ' + item.properties;
				itemContent.appendChild(itemProperties);
			}
			
			if(extra){
				var itemProperties = document.createElement('p');
				itemProperties.classList.add('action-infoExtra','text-box');
				itemProperties.innerHTML = '<b class="infoBold">' + item.mastery.name + ':</b> ' + item.mastery.info;
				itemContent.appendChild(itemProperties);
			}
			
			itemDiv.appendChild(itemContent);
			break;
		case 'armor':
			for(let i=0; i<item.info.length; i++){
				var itemInfo = document.createElement('p');
				itemInfo.classList.add('inventory-info');
				itemInfo.innerHTML = item.info[i];
				itemContent.appendChild(itemInfo);
			}
			itemDiv.appendChild(itemContent);
			break;
		case 'item': 
			for(let i=0; i<item.info.length; i++){
				var itemInfo = document.createElement('p');
				itemInfo.classList.add('inventory-info');
				itemInfo.innerHTML = item.info[i];
				itemContent.appendChild(itemInfo);
			}
			
			itemDiv.appendChild(itemContent);
			break;
		case 'scroll': 
			var itemInfo = document.createElement('p');
			itemInfo.classList.add('inventory-info');
			itemInfo.innerHTML = item.info[0] + extra + item.info[1]+ extra + item.info[2];
			itemContent.appendChild(itemInfo);
			
			itemDiv.appendChild(itemContent);
			break;
		case 'necklaceAttune': 
			var itemInfo = document.createElement('p');
			itemInfo.classList.add('inventory-info');
			itemInfo.innerHTML = item.info[0] + extra[0] + item.info[1]+ extra[1] + '.';
			itemContent.appendChild(itemInfo);
			
			itemDiv.appendChild(itemContent);
			break;
	}
	
	document.getElementById('inventory').appendChild(itemDiv)
}

function getTitle(type,name) {
	var title = document.createElement('p');
	title.classList.add('title-tab');
	title.innerHTML = name;
	document.getElementById('character').appendChild(title);
	
	var itemTab = document.createElement('div');
	itemTab.id = type;
	itemTab.classList.add('features');
	document.getElementById('character').appendChild(itemTab);
}

function getFeature(target,item,selected) {
	var itemDiv = document.createElement('div');
	itemDiv.id = 'f' + item.name;
	itemDiv.classList.add('features-box','text-box');
	itemDiv.setAttribute('onclick','toggleWindow(this.id+"Content")');

	var itemTitle = document.createElement('p');
	itemTitle.classList.add('features-name');
	itemTitle.innerHTML = item.name;
	itemDiv.appendChild(itemTitle);
	
	var itemContent = document.createElement('div');
	itemContent.id = 'f' + item.name + 'Content';
	itemContent.classList.add('features-content','text-box');
	itemContent.style.display = 'none';
	
	switch (item.name) {
		case 'Blessings of Knowledge':
			for(let i = 0; i < item.info.length; i++){
				var itemInfo = document.createElement('p');
				itemInfo.classList.add('features-info');
				itemInfo.innerHTML = item.info[i];
				itemContent.appendChild(itemInfo);
			}
			
			var itemSelected = document.createElement('p');
			itemSelected.style.textAlign = 'center';
			itemSelected.innerHTML = '<b class="infoBold">Selected Proficiencies</b>';
			itemContent.appendChild(itemSelected);
			
			if(selected[0] != 0) {
				var itemSelected = document.createElement('p');
				itemSelected.classList.add('features-infoExtra','text-box');
				itemSelected.innerHTML = '<b class="infoBold">Artisan&#39s Tools:</b> ';
				itemSelected.innerHTML += selected[0];
				itemContent.appendChild(itemSelected);
			}
			if(selected[1]) {
				var itemSelected = document.createElement('p');
				itemSelected.classList.add('features-infoExtra','text-box');
				itemSelected.innerHTML = '<b class="infoBold">Skills:</b> ';
				itemSelected.innerHTML += selected[1];
				itemContent.appendChild(itemSelected);
			}
			if(selected[2]) {
				var itemSelected = document.createElement('p');
				itemSelected.classList.add('features-infoExtra','text-box');
				itemSelected.innerHTML = '<b class="infoBold">Expertise:</b> ';
				itemSelected.innerHTML += selected[2];
				itemContent.appendChild(itemSelected);
			}
			break;
		case 'Spellcasting':
			for(let i = 0; i < item.info.length; i++){
				var itemInfo = document.createElement('p');
				itemInfo.classList.add('features-info');
				itemInfo.innerHTML = item.info[i];
				itemContent.appendChild(itemInfo);
			}
			
			if(item.cantrips) {
				var itemContentBox = document.createElement('div');
				itemContentBox.classList.add('features-content-box','text-box');
				for(let i = 0; i < item.cantrips.length; i++){
					var itemCantrips = document.createElement('p');
					itemCantrips.classList.add('features-info');
					itemCantrips.innerHTML = item.cantrips[i];
					itemContentBox.appendChild(itemCantrips);
				}
				itemContent.appendChild(itemContentBox);
			}
			
			var itemContentBox = document.createElement('div');
			itemContentBox.classList.add('features-content-box','text-box');
			for(let i = 0; i < item.spellSlots.length; i++){
				var itemSpellSlots = document.createElement('p');
				itemSpellSlots.classList.add('features-info');
				itemSpellSlots.innerHTML = item.spellSlots[i];
				itemContentBox.appendChild(itemSpellSlots);
			}
			itemContent.appendChild(itemContentBox);
			
			var itemContentBox = document.createElement('div');
			itemContentBox.classList.add('features-content-box','text-box');
			for(let i = 0; i < item.preparedSpells.length; i++){
				var itemPreparedSpells = document.createElement('p');
				itemPreparedSpells.classList.add('features-info');
				itemPreparedSpells.innerHTML = item.preparedSpells[i];
				itemContentBox.appendChild(itemPreparedSpells);
			}
			itemContent.appendChild(itemContentBox);
			
			if(item.changingSpells) {
				var itemContentBox = document.createElement('div');
				itemContentBox.classList.add('features-content-box','text-box');
				for(let i = 0; i < item.changingSpells.length; i++){
					var itemChangingSpells = document.createElement('p');
					itemChangingSpells.classList.add('features-info');
					itemChangingSpells.innerHTML = item.changingSpells[i];
					itemContentBox.appendChild(itemChangingSpells);
				}
				itemContent.appendChild(itemContentBox);
			}
			
			var itemContentBox = document.createElement('div');
			itemContentBox.classList.add('features-content-box','text-box');
			for(let i = 0; i < item.spellcastingAbiltiy.length; i++){
				var itemSpellcastingAbiltiy = document.createElement('p');
				itemSpellcastingAbiltiy.classList.add('features-info');
				itemSpellcastingAbiltiy.innerHTML = item.spellcastingAbiltiy[i];
				itemContentBox.appendChild(itemSpellcastingAbiltiy);
			}
			itemContent.appendChild(itemContentBox);
			
			var itemContentBox = document.createElement('div');
			itemContentBox.classList.add('features-content-box','text-box');
			for(let i = 0; i < item.spellcastingFocus.length; i++){
				var itemSpellcastingFocus = document.createElement('p');
				itemSpellcastingFocus.classList.add('features-info');
				itemSpellcastingFocus.innerHTML = item.spellcastingFocus[i];
				itemContentBox.appendChild(itemSpellcastingFocus);
			}
			itemContent.appendChild(itemContentBox);
			
			var itemSelected = document.createElement('p');
			itemSelected.style.textAlign = 'center';
			itemSelected.innerHTML = '<b class="infoBold">Selected Spells</b>';
			itemContent.appendChild(itemSelected);
			
			if(selected[0] != 0) {
				var itemSelected = document.createElement('p');
				itemSelected.classList.add('features-infoExtra','text-box');
				itemSelected.innerHTML = '<b class="infoBold">Cantrips:</b> ';
				itemSelected.innerHTML += selected[0];
				itemContent.appendChild(itemSelected);
			}
			if(selected[1]) {
				var itemSelected = document.createElement('p');
				itemSelected.classList.add('features-infoExtra','text-box');
				itemSelected.innerHTML = '<b class="infoBold">1st Level:</b> ';
				itemSelected.innerHTML += selected[1];
				itemContent.appendChild(itemSelected);
			}
			if(selected[2]) {
				var itemSelected = document.createElement('p');
				itemSelected.classList.add('features-infoExtra','text-box');
				itemSelected.innerHTML = '<b class="infoBold">2nd Level:</b> ';
				itemSelected.innerHTML += selected[2];
				itemContent.appendChild(itemSelected);
			}
			if(selected[3]) {
				var itemSelected = document.createElement('p');
				itemSelected.classList.add('features-infoExtra','text-box');
				itemSelected.innerHTML = '<b class="infoBold">3rd Level:</b> ';
				itemSelected.innerHTML += selected[3];
				itemContent.appendChild(itemSelected);
			}
			if(selected[4]) {
				var itemSelected = document.createElement('p');
				itemSelected.classList.add('features-infoExtra','text-box');
				itemSelected.innerHTML = '<b class="infoBold">4th Level:</b> ';
				itemSelected.innerHTML += selected[4];
				itemContent.appendChild(itemSelected);
			}
			if(selected[5]) {
				var itemSelected = document.createElement('p');
				itemSelected.classList.add('features-infoExtra','text-box');
				itemSelected.innerHTML = '<b class="infoBold">5th Level:</b> ';
				itemSelected.innerHTML += selected[5];
				itemContent.appendChild(itemSelected);
			}
			if(selected[6]) {
				var itemSelected = document.createElement('p');
				itemSelected.classList.add('features-infoExtra','text-box');
				itemSelected.innerHTML = '<b class="infoBold">6th Level:</b> ';
				itemSelected.innerHTML += selected[6];
				itemContent.appendChild(itemSelected);
			}
			if(selected[7]) {
				var itemSelected = document.createElement('p');
				itemSelected.classList.add('features-infoExtra','text-box');
				itemSelected.innerHTML = '<b class="infoBold">7th Level:</b> ';
				itemSelected.innerHTML += selected[7];
				itemContent.appendChild(itemSelected);
			}
			if(selected[8]) {
				var itemSelected = document.createElement('p');
				itemSelected.classList.add('features-infoExtra','text-box');
				itemSelected.innerHTML = '<b class="infoBold">8th Level:</b> ';
				itemSelected.innerHTML += selected[8];
				itemContent.appendChild(itemSelected);
			}
			if(selected[9]) {
				var itemSelected = document.createElement('p');
				itemSelected.classList.add('features-infoExtra','text-box');
				itemSelected.innerHTML = '<b class="infoBold">9th Level:</b> ';
				itemSelected.innerHTML += selected[9];
				itemContent.appendChild(itemSelected);
			}
			break;
		
		default:	
			for(let i = 0; i < item.info.length; i++){
				var itemInfo = document.createElement('p');
				itemInfo.classList.add('features-info');
				itemInfo.innerHTML = item.info[i];
				itemContent.appendChild(itemInfo);
			}
			
			if(item.infoExtra){
				for(let i = 0; i < item.infoExtra.length; i++){
					var itemInfoExtra = document.createElement('p');
					itemInfoExtra.classList.add('features-infoExtra','text-box');
					itemInfoExtra.innerHTML = item.infoExtra[i];
					itemContent.appendChild(itemInfoExtra);
				}
			}
			
			if(item.info2){
				for(let i = 0; i < item.info2.length; i++){
					var itemInfo2 = document.createElement('p');
					itemInfo2.classList.add('features-info');
					itemInfo2.innerHTML = item.info2[i];
					itemContent.appendChild(itemInfo2);
				}
			}
			
			if(selected){
				var itemSelected = document.createElement('p');
				itemSelected.classList.add('action-infoExtra','text-box');
					itemSelected.innerHTML = '<b class="infoBold">Selected:</b> ';
				for(let i = 0; i < selected.length; i++){
					itemSelected.innerHTML += selected[i];
					itemContent.appendChild(itemSelected);
				}
			}
	}

	itemDiv.appendChild(itemContent)
	
	document.getElementById(target).appendChild(itemDiv);
}