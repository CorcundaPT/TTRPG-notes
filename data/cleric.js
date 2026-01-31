const cleric = {
	"channelDivinity": {
		"name":"Channel Divinity",
		"type":"Cleric Feature",
		"info":[
			"You can channel divine energy directly from the Outer Planes to fuel magical effects. You start with two such effects: Divine Spark and Turn Undead, each of which is described below.",
			"You can use this class's Channel Divinity twice. You regain one of its expended uses when you finish a Short Rest, and you regain all expended uses when you finish a Long Rest. You gain additional uses when you reach certain Cleric levels, as shown in the Channel Divinity column of the Cleric Features table.",
			"If a Channel Divinity effect requires a saving throw, the DC equals the spell save DC from this class's Spellcasting feature."
		],
		"infoExtra":[
			"<p class='spaceDown'><b class='infoBold'>Divine Spark:</b> As a Magic action, you point your Holy Symbol at another creature you can see within 30 feet of yourself and focus divine energy at it. Roll 1d8 and add your Wisdom modifier. You either restore Hit Points to the creature equal to that total or force the creature to make a Constitution saving throw. On a failed save, the creature takes Necrotic or Radiant damage (your choice) equal to that total. On a successful save, the creature takes half as much damage (round down).</p><p>You roll an additional d8 when you reach Cleric 7th level (2d8), 13th level (3d8), and 18th level (4d8).</p>",
			"<b class='infoBold'>Turn Undead:</b> As a Magic action, you present your Holy Symbol and censure Undead creatures. Each Undead of your choice within 30 feet of you must make a Wisdom saving throw. If the creature fails its save, it has the Frightened and Incapacitated conditions for 1 minute. For that duration, it tries to move as far from you as it can on its turns. This effect ends early on the creature if it takes any damage, if you have the Incapacitated condition, or if you die."
		]
	},
	"divineOrder": {
		"name":"Divine Order",
		"type":"Cleric Feature",
		"info":[
			"You have dedicated yourself to one of the following sacred roles of your choice."
		],
		"infoExtra":[
			"<b class='infoBold'>Protector</b> Trained for battle, you gain proficiency with Martial weapons and training with Heavy armor.",
			"<b class='infoBold'>Thaumaturge</b> You know one extra cantrip from the Cleric spell list. In addition, your mystical connection to the divine gives you a bonus to your Intelligence (Arcana or Religion) checks. The bonus equals your Wisdom modifier (minimum of +1)."
		]
	},
	"divineSpark": {
		"name":"Channel Divinity: Divine Spark",
		"type":"Cleric Feature",
		"info":[
			"As a Magic action, you point your Holy Symbol at another creature you can see within 30ft. Roll 1d8 plus your Wisdom modifier. You either restore Hit Points to the creature equal to the total rolled or force the creature to make a Constitution Saving Throw. On a failled save, the creature takes Necrotic or Radiant damage (your choice) equal to that total. On a successful save, the creature takes half of the total rolled (round down).","You roll an additional d8 when you reach Cleric levels 7 (2d8), 13 (3d8), and 18 (4d8)."
		]
	},
	"spellcasting": {
		"name":"Spellcasting",
		"type":"Cleric Feature",
		"info":[
			"You have learned to cast spells through prayer and meditation."
		],
		"cantrips":[
			"<b class='infoBold'>Cantrips:</b> You know three cantrips of your choice from the Cleric spell list.",
			"Whenever you gain a Cleric level, you can replace one of your cantrips with another cantrip of your choice from the Cleric spell list.",
			"When you reach Cleric levels 4 and 10, you learn another cantrip of your choice from the Cleric spell list, as shown in the Cantrips column of the Cleric Features table."
		],
		"spellSlots":[
			"<b class='infoBold'>Spell Slots:</b> The Cleric Features table shows how many spell slots you have to cast your spells.",
			"You regain all expended slots when you finish a Long Rest."
		],
		"preparedSpells":[
			"<b class='infoBold'>Prepared Spells:</b> You prepare the list of spells that are available for you to cast with this feature. To start, choose four level 1 spells from the Cleric spell list.",
			"The number of spells on your list increases as you gain Cleric levels, as shown in the Prepared Spells column of the Cleric Features table.",
			"If another Cleric feature gives you spells that you always have prepared, those spells don't count against the number of spells you can prepare with this feature, but those spells otherwise count as Cleric spells for you."
		],
		"changingSpells":[
			"<b class='infoBold'>Changing Your Prepared Spells:</b> Whenever you finish a Long Rest, you can change your list of prepared spells, replacing any of the spells there with other Cleric spells for which you have spell slots."
		],
		"spellcastingAbiltiy":[
			"<b class='infoBold'>Spellcasting Ability:</b> Wisdom is your spellcasting ability for your Cleric spells."
		],
		"spellcastingFocus":[
			"<b class='infoBold'>Spellcasting Focus:</b> You can use a Holy Symbol as a Spellcasting Focus for your Cleric spells."
		]
	},
	"subclass": {
		"name":"Cleric Subclass",
		"type":"Cleric Feature",
		"info":[
			"You gain a Cleric subclass of your choice. A subclass is a specialization that grants you features at certain Cleric levels. For the rest of your career, you gain each of your subclass&#39s features that are of your Cleric level or lower."
		]
	},
	"turnUndead": {
		"name":"Channel Divinity: Turn Undead",
		"type":"Cleric Feature",
		"info":[
			"As a Magic action, you present your Holy Symbol and censure Undead creatures. Each Undead of your choice within 30 feet of you must make a Wisdom saving throw. If the creature fails its save, it has the Frightened and Incapacitated conditions for 1 minute. For that duration, it tries to move as far from you as it can on its turns. This effect ends early on the creature if it takes any damage, if you have the Incapacitated condition, or if you die."
		]
	}
}
