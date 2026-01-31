const spell = {
	"blindnessDeafness": {
		"name":"Blindness/Deafness",
		"type":"2nd Level Spell: Transmutation",
		"castTime":"Action",
		"range":"120ft",
		"components":"V",
		"duration":"1 minute",
		"info":[
			"One creature that you can see within range must succeed on a Constitution saving throw, or it has the Blinded or Deafened condition (your choice) for the duration. At the end of each of its turns, the target repeats the save, ending the spell on itself on a success."
		],
		"upgrade":"You can target one additional creature for each spell slot level above 2."
	},
	"command": {
		"name":"Command",
		"type":"1st Level Spell: Enchantment",
		"castTime":"Action",
		"range":"60ft",
		"components":"V",
		"duration":"Instantaneous",
		"info":[
			"You speak a one-word command to a creature you can see within range. The target must succeed on a Wisdom saving throw or follow the command on its next turn. Choose the command from these options:"
		],
		"infoExtra":[
			"<b class='infoBold'>Approach:</b> The target moves toward you by the shortest and most direct route, ending its turn if it moves within 5 feet of you.",
			"<b class='infoBold'>Drop:</b> The target drops whatever it is holding and then ends its turn.",
			"<b class='infoBold'>Flee:</b> The target spends its turn moving away from you by the fastest available means.",
			"<b class='infoBold'>Grovel:</b> The target has the Prone condition and then ends its turn.",
			"<b class='infoBold'>Halt:</b> On its turn, the target doesn&#39t move and takes no action or Bonus Action."
		],
		"upgrade":"You can affect one additional creature for each spell slot level above 1."
	},
	"comprehendLanguages": {
		"name":"Comprehend Languages",
		"type":"1st Level Spell: Divination",
		"castTime":"Action or Ritual",
		"range":"Self",
		"components":"V,S,M (a pinch of soot and salt)",
		"duration":"1 hour",
		"info":[
			"For the duration, you understand the literal meaning of any language that you hear or see signed. You also understand any written language that you see, but you must be touching the surface on which the words are written. It takes about 1 minute to read one page of text. This spell doesn't decode symbols or secret messages."
		],
		"upgrade":""
	},
	"cureWounds": {
		"name":"Cure Wounds",
		"type":"1st Level Spell: Abjuration",
		"castTime":"Action",
		"range":"Touch",
		"components":"V,S",
		"duration":"Instantaneous",
		"info":[
			"A creature you touch regains a number of Hit Points equal to 2d8 plus your spellcasting ability modifier."
		],
		"upgrade":"The healing increases by 2d8 for each spell slot level above 1."
	},
	"dancingLights": {
		"name":"Dancing Lights",
		"type":"Cantrip Spell: Illusion",
		"castTime":"Action",
		"range":"120ft",
		"components":"V,S,M (a bit of phosphorus)",
		"duration":"Concentration, up to 1 minute",
		"info":[
			"You create up to four torch-size lights within range, making them appear as torches, lanterns, or glowing orbs that hover for the duration. Alternatively, you combine the four lights into one glowing Medium form that is vaguely humanlike. Whichever form you choose, each light sheds Dim Light in a 10-foot radius.",
			"As a Bonus Action, you can move the lights up to 60 feet to a space within range. A light must be within 20 feet of another light created by this spell, and a light vanishes if it exceeds the spell's range."
		],
		"upgrade":""
	},
	"detectMagic": {
		"name":"Detect Magic",
		"type":"1st Level Spell: Divination",
		"castTime":"Action or Ritual",
		"range":"Self",
		"components":"V,S",
		"duration":"Concentration, up to 10 minute",
		"info":[
			"For the duration, you sense the presence of magical effects within 30 feet of yourself. If you sense such effects, you can take the Magic action to see a faint aura around any visible creature or object in the area that bears the magic, and if an effect was created by a spell, you learn the spell's school of magic.",
			"The spell is blocked by 1 foot of stone, dirt, or wood; 1 inch of metal; or a thin sheet of lead."
		],
		"upgrade":""
	},
	"detectThoughts": {
		"name":"Detect Thoughts",
		"type":"2nd Level Spell: Divination",
		"castTime":"Action",
		"range":"Self",
		"components":"V,S,M (1 Copper Piece)",
		"duration":"Concentration, up to 10 minute",
		"info":[
			"You activate one of the effects below. Until the spell ends, you can activate either effect as a Magic action on your later turns."
		],
		"infoExtra":[
			"<b class='infoBold'>Sense Thoughts:</b> You sense the presence of thoughts within 30 feet of yourself that belong to creatures that know languages or are telepathic. You don&#39t read the thoughts, but you know that a thinking creature is present. The spell is blocked by 1 foot of stone, dirt, or wood; 1 inch of metal; or a thin sheet of lead.",
			"<b class='infoBold'>Read Thoughts:</b> Target one creature you can see within 30 feet of yourself or one creature within 30 feet of yourself that you detected with the Sense Thoughts option. You learn what is most on the target&#39s mind right now. If the target doesn&#39t know any languages and isn&#39t telepathic, you learn nothing."
		],
		"info2":[
			"As a Magic action on your next turn, you can try to probe deeper into the target&#39s mind. If you probe deeper, the target makes a Wisdom saving throw. On a failed save, you discern the target&#39s reasoning, emotions, and something that looms large in its mind (such as a worry, love, or hate). On a successful save, the spell ends. Either way, the target knows that you are probing into its mind, and until you shift your attention away from the target&#39s mind, the target can take an action on its turn to make an Intelligence (Arcana) check against your spell save DC, ending the spell on a success."
		],
		"upgrade":""
	},
	"faerieFire": {
		"name":"Faerie Fire",
		"type":"1st Level Spell: Evocation",
		"castTime":"Action",
		"range":"60ft",
		"components":"V",
		"duration":"Concentration, up to 1 minute",
		"info":[
			"Objects in a 20-foot Cube within range are outlined in blue, green, or violet light (your choice). Each creature in the Cube is also outlined if it fails a Dexterity saving throw. For the duration, objects and affected creatures shed Dim Light in a 10-foot radius and can’t benefit from the Invisible condition.",
			"Attack rolls against an affected creature or object have Advantage if the attacker can see it."
		],
		"upgrade":"The damage increases by 1d10 when you reach levels 5 (2d10), 11 (3d10), and 17 (4d10)."
	},
	"findTraps": {
		"name":"Find Traps",
		"type":"2nd Level Spell: Divination",
		"castTime":"Action",
		"range":"120ft",
		"components":"V,S",
		"duration":"Instantaneous",
		"info":[
			"You sense any trap within range that is within line of sight. A trap, for the purpose of this spell, includes any object or mechanism that was created to cause damage or other danger. Thus, the spell would sense the Alarm or Glyph of Warding spell or a mechanical pit trap, but it wouldn’t reveal a natural weakness in the floor, an unstable ceiling, or a hidden sinkhole.",
			"This spell reveals that a trap is present but not its location. You do learn the general nature of the danger posed by a trap you sense."
		],
		"upgrade":"The damage increases by 1d10 when you reach levels 5 (2d10), 11 (3d10), and 17 (4d10)."
	},
	"fireBolt": {
		"name":"Fire Bolt",
		"type":"Cantrip Spell: Evocation",
		"castTime":"Action",
		"range":"120ft",
		"components":"V,S",
		"duration":"Instantaneous",
		"info":[
			"You hurl a mote of fire at a creature or an object within range. Make a ranged spell attack against the target. On a hit, the target takes 1d10 Fire damage. A flammable object hit by this spell starts burning if it isn't being worn or carried."
		],
		"upgrade":"The damage increases by 1d10 when you reach levels 5 (2d10), 11 (3d10), and 17 (4d10)."
	},
	"guidance": {
		"name":"Guidance",
		"type":"Cantrip Spell: Divination",
		"castTime":"Action",
		"range":"Touch",
		"components":"V,S",
		"duration":"Instantaneous",
		"info":[
			"You touch a willing creature and choose a skill. Until the spell ends, the creature adds 1d4 to any ability check using the chosen skill."
		],
		"upgrade":""
	},
	"guidingBolt": {
		"name":"Guiding Bolt",
		"type":"1st Level Spell: Evocation",
		"castTime":"Action",
		"range":"120ft",
		"components":"V,S",
		"duration":"1 Round",
		"info":[
			"You hurl a bolt of light toward a creature within range. Make a ranged spell attack against the target. On a hit, it takes 4d6 Radiant damage, and the next attack roll made against it before the end of your next turn has Advantage."
		],
		"upgrade":"The damage increases by 1d6 for each spell slot level above 1."
	},
	"healingWord": {
		"name":"Healing Word",
		"type":"1st Level Spell: Abjuration",
		"castTime":"Bonus Action",
		"range":"60ft",
		"components":"V",
		"duration":"Instantaneous",
		"info":[
			"A creature of your choice that you can see within range regains Hit Points equal to 2d4 plus your spellcasting ability modifier."
		],
		"upgrade":"The healing increases by 2d4 for each spell slot level above 1."
	},
	"identify": {
		"name":"Identify",
		"type":"1st Level Spell: Divination",
		"castTime":"1 minute or Ritual",
		"range":"Touch",
		"components":"V,S,M (a pearl worth 100+ GP)",
		"duration":"Instantaneous",
		"info":[
			"You touch an object throughout the spell&#39s casting. If the object is a magic item or some other magical object, you learn its properties and how to use them, whether it requires Attunement, and how many charges it has, if any. You learn whether any ongoing spells are affecting the item and what they are. If the item was created by a spell, you learn that spell&#39s name.",
			"If you instead touch a creature throughout the casting, you learn which ongoing spells, if any, are currently affecting it."
		],
		"upgrade":""
	},
	"light": {
		"name":"Light",
		"type":"Cantrip Spell: Evocation",
		"castTime":"Action",
		"range":"Touch",
		"components":"V,M (a firefly or phosphorescent moss)",
		"duration":"1 hour",
		"info":[
			"You touch one Large or smaller object that isn&#39t being worn or carried by someone else. Until the spell ends, the object sheds Bright Light in a 20-foot radius and Dim Light for an additional 20 feet. The light can be colored as you like.",
			"Covering the object with something opaque blocks the light. The spell ends if you cast it again."
		],
		"upgrade":""
	},
	"mageHand": {
		"name":"Mage Hand",
		"type":"Cantrip Spell: Conjuration",
		"castTime":"Action",
		"range":"30ft",
		"components":"V,S",
		"duration":"1 minute",
		"info":[
			"A spectral, floating hand appears at a point you choose within range. The hand lasts for the duration. The hand vanishes if it is ever more than 30 feet away from you or if you cast this spell again.",
			"When you cast the spell, you can use the hand to manipulate an object, open an unlocked door or container, stow or retrieve an item from an open container, or pour the contents out of a vial.",
			"As a Magic action on your later turns, you can control the hand thus again. As part of that action, you can move the hand up to 30 feet.",
			"The hand can't attack, activate magic items, or carry more than 10 pounds."
		],
		"upgrade":"The damage increases by 1d10 when you reach levels 5 (2d10), 11 (3d10), and 17 (4d10)."
	},
	"mindSpike": {
		"name":"Mind Spike",
		"type":"2nd Level Spell: Divination",
		"castTime":"Action",
		"range":"120ft",
		"components":"S",
		"duration":"Concentration, up to 1 hour",
		"info":[
			"You drive a spike of psionic energy into the mind of one creature you can see within range. The target makes a Wisdom saving throw, taking 3d8 Psychic damage on a failed save or half as much damage on a successful one. On a failed save, you also always know the target&#39s location until the spell ends, but only while the two of you are on the same plane of existence. While you have this knowledge, the target can&#39t become hidden from you, and if it has the Invisible condition, it gains no benefit from that condition against you."
		],
		"upgrade":"The damage increases by 1d8 for each spell slot level above 2."
	},
	"prayerOfHealing": {
		"name":"Prayer Of Healing",
		"type":"2nd Level Spell: Abjuration",
		"castTime":"10 minutes",
		"range":"30ft",
		"components":"V",
		"duration":"Instantaneous",
		"info":[
			"Up to five creatures of your choice who remain within range for the spell&#39s entire casting gain the benefits of a Short Rest and also regain 2d8 Hit Points. A creature can&#39t be affected by this spell again until that creature finishes a Long Rest."
		],
		"upgrade":"The healing increases by 1d8 for each spell slot level above 2."
	},
	"resistance": {
		"name":"Resistance",
		"type":"Cantrip Spell: Abjuration",
		"castTime":"Action",
		"range":"Touch",
		"components":"V,S",
		"duration":"Concentration, up to 1 minute",
		"info":[
			"You touch a willing creature and choose a damage type: Acid, Bludgeoning, Cold, Fire, Lightning, Necrotic, Piercing, Poison, Radiant, Slashing, or Thunder. When the creature takes damage of the chosen type before the spell ends, the creature reduces the total damage taken by 1d4. A creature can benefit from this spell only once per turn."
		],
		"upgrade":""
	},
	"shieldOfFaith": {
		"name":"Shield of Faith",
		"type":"1st Level Spell: Abjuration",
		"castTime":"Bonus Action",
		"range":"60ft",
		"components":"V,S,M (a prayer scroll)",
		"duration":"Concentration, up to 10 minutes",
		"info":[
			"A shimmering field surrounds a creature of your choice within range, granting it a +2 bonus to AC for the duration."
		],
		"upgrade":""
	},
	"thaumaturgy": {
		"name":"Thaumaturgy",
		"type":"Cantrip Spell: Transmutation",
		"castTime":"Action",
		"range":"30ft",
		"components":"V",
		"duration":"1 minutes",
		"info":[
			"You manifest a minor wonder within range. You create one of the effects below within range. If you cast this spell multiple times, you can have up to three of its 1-minute effects active at a time."
		],
		"infoExtra":[
			"<b class='infoBold'>Altered Eyes:</b> You alter the appearance of your eyes for 1 minute.",
			"<b class='infoBold'>Booming Voice:</b> Your voice booms up to three times as loud as normal for 1 minute. For the duration, you have Advantage on Charisma (Intimidation) checks.",
			"<b class='infoBold'>Fire Play:</b> You cause flames to flicker, brighten, dim, or change color for 1 minute.",
			"<b class='infoBold'>Invisible Hand:</b> You instantaneously cause an unlocked door or window to fly open or slam shut.",
			"<b class='infoBold'>Phantom Sound:</b> You create an instantaneous sound that originates from a point of your choice within range, such as a rumble of thunder, the cry of a raven, or ominous whispers.",
			"<b class='infoBold'>Tremors:</b> You cause harmless tremors in the ground for 1 minute."
		],
		"upgrade":""
	},
	"tollTheDead": {
		"name":"Toll the Dead",
		"type":"Cantrip Spell: Necromancy",
		"castTime":"Action",
		"range":"60ft",
		"components":"V,S",
		"duration":"Instantaneous",
		"info":[
			"You point at one creature you can see within range, and the single chime of a dolorous bell is audible within 10 feet of the target. The target must succeed on a Wisdom saving throw or take 1d8 Necrotic damage. If the target is missing any of its Hit Points, it instead takes 1d12 Necrotic damage."
		],
		"upgrade":"The damage increases by one die when you reach levels 5 (2d8 or 2d12), 11 (3d8 or 3d12), and 17"
	}
}