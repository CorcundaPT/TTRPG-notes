const spell = {
	"cureWounds": {
		"name":"Cure Wounds",
		"type":"1st Level Abjuration",
		"castingTime":"Action",
		"range":"Touch",
		"components":"V,S",
		"duration":"Instantaneous",
		"effect":["A creature you touch regains a number of Hit Points equal to 2d8 plus your spellcasting ability modifier."],
		"upgrade":"The healing increases by 2d8 for each spell slot level above 1."
	},
	"fireBolt": {
		"name":"Fire Bolt",
		"type":"Evocation Cantrip",
		"castingTime":"Action",
		"range":"120ft",
		"components":"V,S",
		"duration":"Instantaneous",
		"effect":["You hurl a mote of fire at a creature or an object within range. Make a ranged spell attack against the target. On a hit, the target takes 1d10 Fire damage. A flammable object hit by this spell starts burning if it isn't being worn or carried."],
		"upgrade":"The damage increases by 1d10 when you reach levels 5 (2d10), 11 (3d10), and 17 (4d10)."
	},
	"guidance": {
		"name":"Guidance",
		"type":"Divination Cantrip",
		"castingTime":"Action",
		"range":"Touch",
		"components":"V,S",
		"duration":"Instantaneous",
		"effect":["You touch a willing creature and choose a skill. Until the spell ends, the creature adds 1d4 to any ability check using the chosen skill."],
		"upgrade":""
	},
	"guidingBolt": {
		"name":"Guiding Bolt",
		"type":"1st Level Evocation",
		"castingTime":"Action",
		"range":"120ft",
		"components":"V,S",
		"duration":"1 Round",
		"effect":["You hurl a bolt of light toward a creature within range. Make a ranged spell attack against the target. On a hit, it takes 4d6 Radiant damage, and the next attack roll made against it before the end of your next turn has Advantage."],
		"upgrade":"The damage increases by 1d6 for each spell slot level above 1."
	},
	"healingWord": {
		"name":"Healing Word",
		"type":"1st Level Abjuration",
		"castingTime":"Bonus Action",
		"range":"60ft",
		"components":"V",
		"duration":"Instantaneous",
		"effect":["A creature of your choice that you can see within range regains Hit Points equal to 2d4 plus your spellcasting ability modifier."],
		"upgrade":"The healing increases by 2d4 for each spell slot level above 1."
	},
	"mageHand": {
		"name":"Mage Hand",
		"type":"Conjuration Cantrip",
		"castingTime":"Action",
		"range":"30ft",
		"components":"V,S",
		"duration":"1 minute",
		"effect":["A spectral, floating hand appears at a point you choose within range. The hand lasts for the duration. The hand vanishes if it is ever more than 30 feet away from you or if you cast this spell again.","When you cast the spell, you can use the hand to manipulate an object, open an unlocked door or container, stow or retrieve an item from an open container, or pour the contents out of a vial.","As a Magic action on your later turns, you can control the hand thus again. As part of that action, you can move the hand up to 30 feet.","The hand can't attack, activate magic items, or carry more than 10 pounds."],
		"upgrade":"The damage increases by 1d10 when you reach levels 5 (2d10), 11 (3d10), and 17 (4d10)."
	},
	"resistance": {
		"name":"Resistance",
		"type":"Abjuration Cantrip",
		"castingTime":"Action",
		"range":"Touch",
		"components":"V,S",
		"duration":"Concentration, up to 1 minute",
		"effect":["You touch a willing creature and choose a damage type: Acid, Bludgeoning, Cold, Fire, Lightning, Necrotic, Piercing, Poison, Radiant, Slashing, or Thunder. When the creature takes damage of the chosen type before the spell ends, the creature reduces the total damage taken by 1d4. A creature can benefit from this spell only once per turn."],
		"upgrade":""
	},
	"shieldOfFaith": {
		"name":"Shield of Faith",
		"type":"1st Level Abjuration",
		"castingTime":"Bonus Action",
		"range":"60ft",
		"components":"V,S,M (a prayer scroll)",
		"duration":"Concentration, up to 10 minutes",
		"effect":["A shimmering field surrounds a creature of your choice within range, granting it a +2 bonus to AC for the duration."],
		"upgrade":""
	},
	"thaumaturgy": {
		"name":"Thaumaturgy",
		"type":"Transmutation Cantrip",
		"castingTime":"Action",
		"range":"30ft",
		"components":"V",
		"duration":"1 minutes",
		"effect":["You manifest a minor wonder within range. You create one of the effects below within range. If you cast this spell multiple times, you can have up to three of its 1-minute effects active at a time.","<b class='featureInfoBold'>Altered Eyes</b> You alter the appearance of your eyes for 1 minute.","<b class='featureInfoBold'>Booming Voice</b> Your voice booms up to three times as loud as normal for 1 minute. For the duration, you have Advantage on Charisma (Intimidation) checks.","<b class='featureInfoBold'>Fire Play</b> You cause flames to flicker, brighten, dim, or change color for 1 minute.","<b class='featureInfoBold'>Invisible Hand</b> You instantaneously cause an unlocked door or window to fly open or slam shut.","<b class='featureInfoBold'>Phantom Sound</b> You create an instantaneous sound that originates from a point of your choice within range, such as a rumble of thunder, the cry of a raven, or ominous whispers.","<b class='featureInfoBold'>Tremors</b> You cause harmless tremors in the ground for 1 minute."],
		"upgrade":""
	},
	"tollTheDead": {
		"name":"Toll the Dead",
		"type":"Necromancy Cantrip",
		"castingTime":"Action",
		"range":"60ft",
		"components":"V,S",
		"duration":"Instantaneous",
		"effect":["You point at one creature you can see within range, and the single chime of a dolorous bell is audible within 10 feet of the target. The target must succeed on a Wisdom saving throw or take 1d8 Necrotic damage. If the target is missing any of its Hit Points, it instead takes 1d12 Necrotic damage."],
		"upgrade":"The damage increases by one die when you reach levels 5 (2d8 or 2d12), 11 (3d8 or 3d12), and 17"
	}
}