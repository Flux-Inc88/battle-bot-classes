module.exports = {
  Tank: [
    { name: "Shield Bash", damage: 10, effect: "stun", chance: 0.25 },
    { name: "Fortify", damage: 0, effect: "defense_up" },
    { name: "Taunt", damage: 0, effect: "taunt" }
  ],
  Mage: [
    { name: "Fireball", damage: 20, effect: "burn", chance: 0.2 },
    { name: "Arcane Blast", damage: 25, critChance: 0.1 },
    { name: "Mana Shield", damage: 0, effect: "block" }
  ],
  Rogue: [
    { name: "Backstab", damage: 15, critChance: 0.3 },
    { name: "Poison Dagger", damage: 10, effect: "poison", duration: 2 },
    { name: "Evade", damage: 0, effect: "evade" }
  ],
  Healer: [
    { name: "Heal", damage: -25 },
    { name: "Smite", damage: 10 },
    { name: "Blessing", damage: 0, effect: "cleanse_regen" }
  ],
  Ranger: [
    { name: "Snipe", damage: 20, critChance: 0.15 },
    { name: "Arrow Volley", damage: 10, effect: "aoe" },
    { name: "Trap", damage: 10, effect: "immobilize", chance: 0.2 }
  ]
};