const feature = {
	"abilityScoreImprovementDexConInt": {
		"name":"Ability Score Improvement",
		"type":"background",
		"effect":["Increase one of the following ability scores by 2 and a different one by 1, or increase all three by 1.","Dexterity, Constitution, Intelligence"]
	},
	"abilityScoreImprovementConWisCha": {
		"name":"Ability Score Improvement",
		"type":"background",
		"effect":["Increase one of the following ability scores by 2 and a different one by 1, or increase all three by 1.","Constitution, Wisdom, Charisma"]
	},
	"alert": {
		"name":"Alert",
		"type":"feat",
		"effect":["You gain the following benefits.","<b class='featureInfoBold'>Initiative Proficiency:</b> When you roll Initiative, you can add your Proficiency Bonus to the roll.","<b class='featureInfoBold'>Initiative Swap:</b> Immediately after you roll Initiative, you can swap your Initiative with the Initiative of one willing ally in the same combat. You can't make this swap if you or the ally has the Incapacitated condition."]
	},
	"channelDivinity": {
		"name":"Channel Divinity",
		"type":"class feature",
		"effect":["You can channel divine energy directly from the Outer Planes to fuel magical effects. You start with two such effects: Divine Spark and Turn Undead, each of which is described below.","You can use this class's Channel Divinity twice. You regain one of its expended uses when you finish a Short Rest, and you regain all expended uses when you finish a Long Rest. You gain additional uses when you reach certain Cleric levels, as shown in the Channel Divinity column of the Cleric Features table.","If a Channel Divinity effect requires a saving throw, the DC equals the spell save DC from this class's Spellcasting feature.","<b class='featureInfoBold'>Divine Spark</b> As a Magic action, you point your Holy Symbol at another creature you can see within 30 feet of yourself and focus divine energy at it. Roll 1d8 and add your Wisdom modifier. You either restore Hit Points to the creature equal to that total or force the creature to make a Constitution saving throw. On a failed save, the creature takes Necrotic or Radiant damage (your choice) equal to that total. On a successful save, the creature takes half as much damage (round down).","You roll an additional d8 when you reach Cleric levels 7 (2d8), 13 (3d8), and 18 (4d8).","<b class='featureInfoBold'>Turn Undead</b> As a Magic action, you present your Holy Symbol and censure Undead creatures. Each Undead of your choice within 30 feet of you must make a Wisdom saving throw. If the creature fails its save, it has the Frightened and Incapacitated conditions for 1 minute. For that duration, it tries to move as far from you as it can on its turns. This effect ends early on the creature if it takes any damage, if you have the Incapacitated condition, or if you die."]
	},
	"cunningAction": {
		"name":"Cunning Action",
		"type":"class feature",
		"effect":["On your turn, you can take one of the following actions as a Bonus Action: Dash, Disengage, or Hide."]
	},
	"darkvision60": {
		"name":"Darkvision",
		"type":"specie feature",
		"effect":["You have Darkvision with a range of 60ft."]
	},
	"darkvision120": {
		"name":"Darkvision",
		"type":"specie feature",
		"effect":["You have Darkvision with a range of 120ft."]
	},
	"divineOrder": {
		"name":"Divine Order",
		"type":"class feature",
		"effect":["You have dedicated yourself to one of the following sacred roles of your choice.","<b class='featureInfoBold'>Protector</b> Trained for battle, you gain proficiency with Martial weapons and training with Heavy armor.","<b class='featureInfoBold'>Thaumaturge</b> You know one extra cantrip from the Cleric spell list. In addition, your mystical connection to the divine gives you a bonus to your Intelligence (Arcana or Religion) checks. The bonus equals your Wisdom modifier (minimum of +1)."]
	},
	"divineSpark": {
		"name":"Channel Divinity: Divine Spark",
		"type":"class feature",
		"effect":["As a Magic action, you point your Holy Symbol at another creature you can see within 30ft. Roll 1d8 plus your Wisdom modifier. You either restore Hit Points to the creature equal to the total rolled or force the creature to make a Constitution Saving Throw. On a failled save, the creature takes Necrotic or Radiant damage (your choice) equal to that total. On a successful save, the creature takes half of the total rolled (round down).","You roll an additional d8 when you reach Cleric levels 7 (2d8), 13 (3d8), and 18 (4d8)."]
	},
	"elvenLineageDrow": {
		"name":"Elven Lineage (Drow)",
		"type":"specie feature",
		"effect":["You are part of a lineage that grants you supernatural abilities. Choose a lineage from the Elven Lineages table. You gain the level 1 benefit of that lineage.","When you reach character levels 3 and 5, you learn a higher-level spell, as shown on the table. You always have that spell prepared. You can cast it once without a spell slot, and you regain the ability to cast it in that way when you finish a Long Rest. You can also cast the spell using any spell slots you have of the appropriate level.","Intelligence, Wisdom, or Charisma is your spellcasting ability for the spells you cast with this trait."],
		"effectExtra":["<b class='featureInfoBold'>1st Level:</b> You know Dancing Lights cantrip.","<b class='featureInfoBold'>3st Level:</b> You learn Faerie Fire spell.","<b class='featureInfoBold'>5st Level:</b> You learn Darkness spell."]
	},
	"elvenLineageHighElf": {
		"name":"Elven Lineage (High Elf)",
		"type":"specie feature",
		"effect":["You are part of a lineage that grants you supernatural abilities. Choose a lineage from the Elven Lineages table. You gain the level 1 benefit of that lineage.","When you reach character levels 3 and 5, you learn a higher-level spell, as shown on the table. You always have that spell prepared. You can cast it once without a spell slot, and you regain the ability to cast it in that way when you finish a Long Rest. You can also cast the spell using any spell slots you have of the appropriate level.","Intelligence, Wisdom, or Charisma is your spellcasting ability for the spells you cast with this trait."],
		"effectExtra":["<b class='featureInfoBold'>1st Level:</b> You know a cantrip from the Wizard spell list.","Whenever you finish a Long Rest, you can replace that cantrip with a different","<b class='featureInfoBold'>3st Level:</b> You learn Detect Magic spell.","<b class='featureInfoBold'>5st Level:</b> You learn Misty Step spell."]
	},
	"expertise": {
		"name":"Expertise",
		"type":"class feature",
		"effect":["You gain Expertise in two of your skill proficiencies of your choice.","At Rogue Level 6, you gain Expertise in two more of your skill proficiencies of your Choice."]
	},
	"feyAncestry": {
		"name":"Fey Ancestry",
		"type":"specie feature",
		"effect":["You have Advantage on saving throws you make to avoid or end the Charmed condition."]
	},
	"healer": {
		"name":"Healer",
		"type":"feat",
		"effect":["You gain the following benefits.","<b class='featureInfoBold'>Battle Medic</b> If you have a Healer's Kit, you can expend one use of it and tend to a creature within 5 feet of yourself as a Utilize action. That creature can expend one of its Hit Point Dice, and you then roll that die. The creature regains a number of Hit Points equal to the roll plus your Proficiency Bonus.","<b class='featureInfoBold'>Healing Rerolls</b> Whenever you roll a die to determine the number of Hit Points you restore with a spell or with this feat's Battle Medic benefit, you can reroll the die if it rolls a 1, and you must use the new roll."]
	},
	"keenSenses": {
		"name":"Keen Senses",
		"type":"specie feature",
		"effect":["You have proficiency in the Insight, Perception, or Survival skill."]
	},
	"skillProficiencyCriminal": {
		"name":"Skill Proficiency",
		"type":"background",
		"effect":["You gain proficiency in the Sleight of Hand and Stealth skill."]
	},
	"skillProficiencyHermit": {
		"name":"Skill Proficiency",
		"type":"background",
		"effect":["You gain proficiency in the Medicine and Religion skill."]
	},
	"sneakAttack": {
		"name":"Sneak Attack",
		"type":"class feature",
		"effect":["Once per turn, you can deal an extra 1d6 damage to one creature you hit with an attack roll if you have Advantage on the roll and the attack uses a Finesse or a Ranged weapon. The extra damage's type is the same as the weapon's type.","You don't need Advantage on the attack roll if at least one of your allies is within 5ft of the target, the ally doesn't have the Incapacitated condition, and you don't have Disadvantage on the attack roll.","The extra damage increases as you gain Rogue levels, as shown in the Sneak Attack column of the Rogue Features table. (one extra die every two levels)"]
	},
	"spellcastingCleric": {
		"name":"Spellcasting",
		"type":"class feature",
		"effect":["You have learned to cast spells through prayer and meditation.","<b class='featureInfoBold'>Cantrips</b> You know three cantrips of your choice from the Cleric spell list.","Whenever you gain a Cleric level, you can replace one of your cantrips with another cantrip of your choice from the Cleric spell list.","When you reach Cleric levels 4 and 10, you learn another cantrip of your choice from the Cleric spell list, as shown in the Cantrips column of the Cleric Features table.","<b class='featureInfoBold'>Spell Slots</b> The Cleric Features table shows how many spell slots you have to cast your spells. You regain all expended slots when you finish a Long Rest.","<b class='featureInfoBold'>Prepared Spells</b> You prepare the list of spells that are available for you to cast with this feature. To start, choose four level 1 spells from the Cleric spell list.","The number of spells on your list increases as you gain Cleric levels, as shown in the Prepared Spells column of the Cleric Features table.","If another Cleric feature gives you spells that you always have prepared, those spells don't count against the number of spells you can prepare with this feature, but those spells otherwise count as Cleric spells for you.","<b class='featureInfoBold'>Changing Your Prepared Spells</b> Whenever you finish a Long Rest, you can change your list of prepared spells, replacing any of the spells there with other Cleric spells for which you have spell slots.","<b class='featureInfoBold'>Spellcasting Ability</b> Wisdom is your spellcasting ability for your Cleric spells.","<b class='featureInfoBold'>Spellcasting Focus</b> You can use a Holy Symbol as a Spellcasting Focus for your Cleric spells."]
	},
	"thievesCant": {
		"name":"Thieves' Cant",
		"type":"class feature",
		"effect":["You picked up various languages in the communities where you plied your roguish talents. You know Thieves' Cant and one other language of your choice."]
	},
	"toolProficiencyCriminal": {
		"name":"Tool Proficiency",
		"type":"background",
		"effect":["You gain proficiency in the Thieves' Tools."]
	},
	"toolProficiencyHermit": {
		"name":"Tool Proficiency",
		"type":"background",
		"effect":["You gain proficiency in the Herbalism Kit."]
	},
	"trance": {
		"name":"Trance",
		"type":"specie feature",
		"effect":["You don't need to sleep, and magic can't put you to sleep. You can finish a Long Rest in 4 hours if you spend those hours in a trancelike meditation, during which you retain consciousness."]
	},
	"turnUndead": {
		"name":"Channel Divinity: Turn Undead",
		"type":"class feature",
		"effect":["As a Magic action, you present your Holy Symbol and censure Undead creatures. Each Undead of your choice within 30 feet of you must make a Wisdom saving throw. If the creature fails its save, it has the Frightened and Incapacitated conditions for 1 minute. For that duration, it tries to move as far from you as it can on its turns. This effect ends early on the creature if it takes any damage, if you have the Incapacitated condition, or if you die."]
	},
	"weaponMastery": {
		"name":"Weapon Mastery",
		"type":"class feature",
		"effect":["Your training with weapons allows you to use the mastery properties of two kinds of weapons of your choice with which you have proficiency.","Whenever you finish a Long Rest, you can change the kinds of weapons you chose."]
	}
}
