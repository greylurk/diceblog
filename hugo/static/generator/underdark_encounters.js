// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// this is a completely self-contained random generator,
// implemented in HTML and JavaScript.
//
// to create a new random generator, simply copy this file
// and change the content of the gen_data array.
//
// the primary key of the gen_data array must be named 'main'.
// to increase the number of random things generated at a time,
// increase the number of rows of the output textarea.
//
// written and released to the public domain by drow [drow@bin.sh]
// http://creativecommons.org/publicdomain/zero/1.0/

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// json format
// http://en.wikipedia.org/wiki/JSON

  var gen_data = {};

  gen_data['underdark_encounter'] = {
      '1-13': 'No encounter',
      '14-15': '{terrain_encounter}',
      '16-17': '{creature_encounter}',
      '18-20': '{terrain_encounter} It is occupied by {creature_encounter}'
  };
  gen_data['terrain_encounter'] = [
      "Boneyard littered with the bones of various creatures. It is populated by {boneyard_encounter}.",
      "A 2d4 x 10 foot high cliff, with a rolled up rope ladder at the top. This costs 1 day of travel to circumvent.",
      "A Faezress suffused area containing big chunks of quartz that shed dim light in a 10 foot radius. The PCs can harvest 2d6 crystals, but it takes 1 day of travel time.",
      "The PCs stumble on a cavern containing {fungus_field}.",
      "The PCs are confronted with a cavern filled with natural gas. With a perception DC 14 or higher, they can detect it and circumvent the cavern only losing a half day of travel. Otherwise, they take 5 poison damage and lose the same amount of time.",
      "The PCs encounter a gorge 2d4 x 100 feet deep which cuts across their route. It takes a half a day to go around it.",
      "The characters must walk along a narrow ledge that skirts a 2d6 x 10 foot high cliff. This extends travel time by a half a day, and each person must make a DC 10 Dex save or fall.",
      "The party is plagued by terrible, maddening sounds that increase their madness level by 1 unless they make a DC 11 Wisdom save.",
      "A tremor opens up a lava-filled fissue behind the PCs, who must each make a DC 10 Dex save to avoid 6d6 points of damage to avoid being burned by the Lava which pours into the tunnel.",
      "The PCs encounter a long stretch of tunnels filled with 3 foot deep slimy muck. It would take a day to circumvent.",
      "A tremor sets off a Rockfall. Each PC must make three DC 12 Dex saves, or take 3d6 points of damage. Anyone incapacitated is trapped.",
      "A 2d4 x 10 foot wide, 2d4 x 10 foot deep ravine stands before the PCs. There is a rickety rope bridge across it.",
      "The PCs encounter a small ruined outpost built by {ruin_builders}, long abandoned, and possibly sunk into the underdark from the surface.{ruin_contents}.",
      "The PCs encounter an easily secured cave where they can hole up without worrying about intruders.",
      "A random party member slips into a sinkhole that opens under them. They must make a DC 12 Dexterity saving throw or fall into a 1d4 foot deep pit.",
      "The PCs encounter a patch of {slime_or_mold} as they move through a small cavern.",
      "A hot steam vent erupts under a random party member. They must succeed at a DC12 Dex save or take 2d6 fire damage.",
      "A 2d4 x 5 foot wide waterway cuts across the party's path. The stream has edible fish.",
      "PCs who make a DC 11 Perception (Wisdom) check spot a drow warning glyph carved into one of the nearby stalagmites.{warning_encounter}",
      "Sticky webs fill the passage. It takes a half a day to cut through the webs or find a way around.{webs_occupants}"
  ];
  gen_data['webs_occupants'] = {
      '1-2': 'Hidden among the webs are 1d4 giant spiders.'
  };
  gen_data['warning_encounter'] = {
      '1-14': '',
      '15-16': '1 invisible barlgura attack the PCs when they next rest.',
      '17-18': '3d4 dretches attack the PCs when they next rest.',
      '19-20': '1d2 shadow demons attack the PCs when they next rest.'
  };
  gen_data['slime_or_mold'] = {
      '1-3': 'green slime',
      '4-5': 'yellow mold',
      '6': 'brown mold'
  };
  gen_data['ruin_contents'] = [
      '',
      '1d4 trinkets (from the player\'s handbook)'
  ];
  gen_data['ruin_builders'] = [
    'derro',
    'drow',
    'duergar',
    'dwarves',
    'elves',
    'emerald enclave members',
    'gnomes',
    'halflings',
    'harpers',
    'humans',
    'illithid',
    'moander worshippers',
    'netherese',
    'orcs',
    'the order of the gauntlet',
    'zhentarim'
  ];
  gen_data['fungus_field'] = [
      '1d6 {fungus}, 1d6 {fungus} and 1d6 {fungus}',
      '1d6 {fungus} and 1d6 {fungus}',
      '1d6 {fungus}'
  ];
  gen_data['fungus'] = {
      '1': 'Torchstalk',
      '2': 'Tongue of Madness',
      '3': 'Timmask',
      '4': 'Ormu',
      '5': 'Nilhogg\'s Nose',
      '6': 'Nightlight',
      '7-8': 'Barrelstalk',
      '9-10': 'Bluecap',
      '11-12': 'Fire Lichen',
      '13-14': 'Ripplebark',
      '15-16': 'Trillimac',
      '17-18': 'Waterorb',
      '19-20': 'Zurkhwood'
  }
  gen_data['boneyard_encounter'] = {
      '1-14': 'only inanimate skeletons',
      '15-18': '3d4 skeletons',
      '19-20': '1d3 minotaur skeletons'
  };
  gen_data['creature_encounter'] = {
      '1-2': 'an ambush by {ambusher_encounter}, guarding {ambusher_treasure}',
      '3': '{carrion_crawler}',
      '4-5': '{escaped_slaves} escaped slaves',
      '6-7': '{fungi}',
      '8-9': '3d6 giant fire beetles',
      '10-11': 'Giant "roctopus"',
      '12': '{mad_creature} with {mad_creature_treasure}',
      '13': 'an ochre jelly that follows the PCs until their next rest, and attacks them there',
      '14-15': '{raiders} whose leader has {raider_treasure}',
      '16': '{scouts}',
      '17': 'Society of Brilliance member {society_of_brilliance} investigating the effects of Faezress',
      '18': '{spore_servants} who are on some mission for Zuggtmoy and ignore the PCs unless attacked',
      '19-20': '{traders} carrying 10 days of provisions each and a total of 50d4 gp worth of trade goods. They are willing to sell up to 20% of their provisions or trade goods'
  };
  gen_data['duergar_trader_mounts'] = {
      '1-2': '',
      '3': ', a duergar kavalrachni astride a female steeder, and one male steeder for every 2 duergar.',
      '4': 'and one male steeder for every 2 duergar.'
  };
  gen_data['gnome_trader_mounts'] = [
      '',
      'and one giant lizard for every 2 gnomes.'
  ];
  gen_data['traders'] = [
      '2d4 deep gnomes{gnome_trader_mounts}',
      '2d4 drow',
      '2d4 duergar{duergar_trader_mounts}',
      '2d4 kuo-toa'
  ];
  gen_data['spore_servants'] = {
      '1-3': '1d4 drow spore servants',
      '4-6': '1d6 duergar spore servants',
      '7-8': '1d4 hook horror spore servants',
      '9-10': '1d8 quaggoth spore servants'
  };
  gen_data['society_of_brilliance'] = [
      "Y, the derro savant",
      "Blurg the orog",
      "Grazilaxx the mind-flayer",
      "Skriss the troglodyte",
      "Sloopidoop the kuo-toa archpriest"
  ];
  gen_data['scouts'] = [
      '1 drow who is searching for escaped slaves. He tries to avoid notice, but may report the party to drow forces in the area',
      '1d4 myconid adults who are secretive about their mission',
      '1d6 shield dwarf scouts who are friendly and willing to share ale and food'
  ];
  gen_data['raiders'] = [
      '1d6 human bandits and 1 human bandit captain',
      '2d4 goblins and 1 goblin boss',
      '1d6 orcs and 1 orc Eye of Gruumsh'
  ];
  gen_data['raider_treasure'] = {
      '1-5': 'nothing',
      '6-10': '2d6 10gp gemstones in a pouch',
      '11-14': '2d6 50gp gemstones in a pouch',
      '15-17': '1d4 torchstalks',
      '18-19': '1d4 waterorbs',
      '20': 'a {magic_item_table_b}'
  }
  gen_data['mad_creature_treasure'] = {
      '1-10': 'nothing',
      '11-13': 'a 10gp gem',
      '14-15': 'a gold ring worth 25gp',
      '16-17': 'an obsidian statuette of Lolth worth 100gp',
      '18-19': 'a {magic_item_table_a}',
      '20': 'a {magic_item_table_b}'
  };
  gen_data['mad_creature'] = ['1 mad svirfneblin', '1 mad drow', '1 mad duergar', '1 mad stone giant'];
  gen_data['carrion_crawler'] = {
      '1': 'a domesticated carrior crawler wearing a saddle, but no sign of the rider.',
      '2-4': 'a feral carrion crawler'
  };
  gen_data['escaped_slaves'] = {
      '1': '1d2 moon elf commoners',
      '2': '1d3 shield dwarf commoners',
      '3': '1d4 human commoners',
      '4': '1d6 goblins'
  };
  gen_data['fungi'] = {
      '1-2': '1d4 gas spores with {beholder_memories}',
      '3-4': '1d4 shriekers',
      '5-6': '1d4 violet fungi'
  }
  gen_data['beholder_memories'] = {
      '1-12': 'no memories in its spores',
      '13': 'memories of a tense negotiation with a group of drow, ending with a beholder agreeing to give the drow safe passage through "the Vast Oblivium" in exchange for help ridding its lair of a gnome infestation',
      '14': 'memories of chasing deep gnome thieves to recover stolen gemstones',
      '15': 'memories of a fierce battle against a drow archmage, ending with the beholder suffering grevious injury',
      '16': 'memories of spying on a drow ranger with a pair of scimitars and a large feline companion'
  }
  gen_data['ambusher_encounter'] = {
      '1-2':'1 chuul lurking in a pool of water',
      '3':'1d6 giant spiders clinging to the walls or ceiling',
      '4-5':'1 grell floating near the high ceiling',
      '6-9':'1d4 gricks hiding in a crevice or fissure',
      '10-15':'1d4 orogs perching on ledges',
      '16-17':'1d6 piercers masquerading as stalactites',
      '18-20':'1 umber hulk bursting out of a nearby wall',
  };
  gen_data['ambusher_treasure'] = {
      '1-10': "nothing",
      '11-12': 'a humanoid skeleton clutching a nonmagical {melee_weapon}',
      '13-14': 'a humanoid skeleton wearing a suit of nonmagical {armor}',
      '15-17': '1d6 50gp gems',
      '18-19': 'a humanoid skeleton carrying a {magic_item_table_b}',
      '20': 'A monster hoard containing 2d6 50gp gems and {ambusher_magic_items}'
  };
  gen_data['ambusher_magic_items'] = [
      'a {magic_item_table_c}',
      'a {magic_item_table_c} and a {magic_item_table_c}',
      'a {magic_item_table_c}, a {magic_item_table_c} and a {magic_item_table_c}',
      'a {magic_item_table_c}, a {magic_item_table_c}, a {magic_item_table_c} and a {magic_item_table_c}'
  ];
  gen_data['magic_item_table_a'] = {
      '01-50': 'Potion of healing',
      '51-60': 'Spell scroll (cantrip)',
      '61-70': 'Potion of climbing',
      '71-90': 'Spell scroll (1st level)',
      '91-94': 'Spell scroll (2nd level)',
      '95-98': 'Potion of greater healing',
      '99': 'Bag of holding',
      '00': 'Driftglobe'
  };
  gen_data['magic_item_table_b'] = {
      '01-15': 'Potion of greater healing',
      '16-22': 'Potion of fire breath',
      '23-29': 'Potion of resistance',
      '30-34': 'Ammunition +1',
      '35-39': 'Potion of animal friendship',
      '40-44': 'Potion of hill giant strength',
      '45-49': 'Potion of growth',
      '50-54': 'Potion of water breathing',
      '55-59': 'Spell scroll (2nd level)',
      '60-64': 'Spell scroll (2nd level)',
      '95-98': 'Potion of greater healing',
      '99': 'Bag of holding',
      '00': 'Wand of secrets'
  };
  gen_data['magic_item_table_c'] = {
      '01-50': 'Potion of healing',
      '51-60': 'Spell scroll (cantrip)',
      '61-70': 'Potion of climbing',
      '71-90': 'Spell scroll (1st level)',
      '91-94': 'Spell scroll (2nd level)',
      '95-98': 'Potion of greater healing',
      '99': 'Bag of holding',
      '00': 'Driftglobe'
  };
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
