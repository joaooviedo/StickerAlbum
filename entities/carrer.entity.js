const crypto = require("crypto");

class CarrerEntity {
  constructor(carrer) {
    this.id = carrer.id ?? crypto.randomUUID();
    this.originTeam = carrer.originTeam;
    this.actualTeam = carrer.actualTeam;
    this.goals = carrer.goals;
    this.assists = carrer.assists;
  }
  validate() {
    if (!this.originTeam) {
      throw new Error("O time de origem precisa ser preenchido");
    }
    if (!this.actualTeam) {
      throw new Error("O time atual precisa ser preenchido");
    }
    if (!this.goals) {
      throw new Error("O número de gols precisa ser preenchido");
    }
    if (!this.assists) {
      throw new Error("O número de assistencias precisa ser preenchido");
    }
  }
  getCarrer() {
    return {
      id: this.id,
      originTeam: this.originTeam,
      actualTeam: this.actualTeam,
      goals: this.goals,
      assists: this.assists,
    };
  }
}

module.exports = CarrerEntity;
