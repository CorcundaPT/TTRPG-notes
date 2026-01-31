const rogueSubclass = {
	"psionicBlades": {
		"name":"Psionic Blades",
		"type":"Rogue: Soulknife Feature",
		"info":[
			"You can manifest shimmering blades of psychic energy. Whenever you take the Attack action or make an Opportunity Attack, you can manifest a Psychic Blade in your free hand and make the attack with that blade. The magic blade has the following traits:"
		],
		"infoExtra":[
			"<p><b class='infoBold'>Weapon Category:</b> Simple Melee Weapon</p><p><b class='infoBold'>Damage:</b> 1d6 Phychic Damage plus ability modifier used for the attack roll</p><p><b class='infoBold'>Properties:</b> Finesse, Throw (range 60/120ft)</p><p class='action-infoExtra text-box'><b class='infoBold'>Vex:</b> If you hit a creature with this weapon and deal damage to the creature, you have Advantage on your next attack roll against that creature before the end of your next turn.</p>"
		],
		"info2":[
			"The blade vanishes immediately after it hits or misses its target, and it leaves no mark if it deals damage.",
			"After you attack with the blade on your turn, you can make a melee or ranged attack with a second psychic blade as a Bonus Action on the same turn if your other hand is free to create it. The damage die of this bonus attack is 1d4 instead of 1d6."
		]
	},
	"psychicBladesWeapon": {
		"name":"Psionic Blades",
		"type":"Rogue: Soulknife Feature",
		"info":[
			"<b class='infoBold'>Weapon Category:</b> Simple Melee Weapon",
			"<b class='infoBold'>Damage:</b> 1d6 Phychic Damage plus ability modifier used for the attack roll",
			"<b class='infoBold'>Properties:</b> Finesse, Throw (range 60/120ft)",
			"<b class='infoBold'>Vex:</b> If you hit a creature with this weapon and deal damage to the creature, you have Advantage on your next attack roll against that creature before the end of your next turn."
		]
	},
	"psionicPower": {
		"name":"Psionic Power",
		"type":"Rogue: Soulknife Feature",
		"info":[
			"You harbor a wellspring of psionic energy within yourself. It is represented by your Psionic Energy Dice, which fuel certain powers you have from this subclass. The Soulknife Energy Dice table shows the number of these dice you have when you reach certain Rogue levels, and the table shows the die size.",
			"<div class='rogueSoulknifeTable text-box'><p>Rogue Level</p><p>Die Size</p><p>Number</p></div>",
			"<div class='rogueSoulknifeTable text-box'><p>3</p><p>D6</p><p>4</p></div>",
			"<div class='rogueSoulknifeTable text-box'><p>5</p><p>D8</p><p>6</p></div>",
			"<div class='rogueSoulknifeTable text-box'><p>9</p><p>D8</p><p>8</p></div>",
			"<div class='rogueSoulknifeTable text-box'><p>11</p><p>D10</p><p>8</p></div>",
			"<div class='rogueSoulknifeTable text-box'><p>13</p><p>D10</p><p>10</p></div>",
			"<div class='rogueSoulknifeTable text-box'><p>17</p><p>D12</p><p>12</p></div>",
			"Any features in this subclass that use a Psionic Energy Die use only the dice from this subclass. Some of your powers expend a Psionic Energy Die, as specified in the power&#39;s description, and you can't use the power if it requires you to use a die when your Psionic Energy Dice are all expended.",
			"You regain one of your expended Psionic Energy Dice when you finish a Short Rest, and you regain all of them when you finish a Long Rest."
		],
		"infoExtra":[
			"<b class='infoBold'>Psi-Bolstered Knack:</b> If you fail an ability check using a skill or tool with which you have proficiency, you can roll one Psionic Energy Die and add the number rolled to the check, potentially turning failure into success. The die is expended only if the roll then succeeds.",
			"<b class='infoBold'>Psychic Whispers:</b> You can establish telepathic communication between yourself and others. As a Magic action, choose one or more creatures you can see, up to a number of creatures equal to your Proficiency Bonus, and then roll one Psionic Energy Die. For a number of hours equal to the number rolled, the chosen creatures can speak telepathically to you, and you can speak telepathically with them. To send or receive a message (no action required), you and the other creature must be within 1 mile of each other. A creature can end the telepathic connection at any time (no action required)."
		]
	},
	"psiBolsteredKnack": {
		"name":"Psi-Bolstered Knack",
		"type":"Rogue: Soulknife Feature",
		"info":[
			"If you fail an ability check using a skill or tool with which you have proficiency, you can roll one Psionic Energy Die and add the number rolled to the check, potentially turning failure into success. The die is expended only if the roll then succeeds."
		]
	},
	"psychicWhispers": {
		"name":"Psychic Whispers",
		"type":"Rogue: Soulknife Feature",
		"info":[
			"You can establish telepathic communication between yourself and others. As a Magic action, choose one or more creatures you can see, up to a number of creatures equal to your Proficiency Bonus, and then roll one Psionic Energy Die. For a number of hours equal to the number rolled, the chosen creatures can speak telepathically to you, and you can speak telepathically with them. To send or receive a message (no action required), you and the other creature must be within 1 mile of each other. A creature can end the telepathic connection at any time (no action required)."
		]
	}
}
