const item = {
	"arrow":{
		"name":"Arrow",
		"type":"Ammunition",
		"effect":"Arrows are used with a weapon that has the ammunition property to make a ranged attack."
	},
	"arrowFire":{
		"name":"Arrow of Fire",
		"type":"Ammunition",
		"effect":"When using this arrows, deals +1d4 Fire Damage on hit."
	},
	"longbow": {
		"name":"Longbow",
		"type":"Martial Ranged Weapon",
		"damage":"1d8 Piercing Damage",
		"properties":"Ammunition(150/600ft), Heavy, Two-Handed",
		"mastery":{
			"name":"Slow",
			"effect":" If you hit a creature with this weapon, you reduce its Speed by 10ft until the start of your next turn. If the creature is hit more than once, the Speed reduction doesn’t exceed 10ft."
		}
	},
	"shortbow": {
		"name":"Shortbow",
		"type":"Simple Ranged Weapon",
		"damage":"1d6 Piercing Damage",
		"properties":"Ammunition (range 80/320), two-handed",
		"mastery":{
			"name":"Vex",
			"effect":" If you hit a creature with this weapon, you have Advantage on your next attack roll against that creature before the end of your next turn."
		}
	},
	"shortsword": {
		"name":"Shortsword",
		"type":"Martial Melee Weapon",
		"damage":"1d6 Piercing Damage",
		"properties":"Ammunition(150/600ft), Heavy, Two-Handed",
		"mastery":{
			"name":"Vex",
			"effect":" If you hit a creature with this weapon, you have Advantage on your next attack roll against that creature before the end of your next turn."
		}
	},
	"studdedLeatherArmor": {
		"name":"Studded Leather Armor",
		"type":"Light Armor",
		"effect":"While wearing, your Armor Class = 12 + your Dexterity modifier"
	}
}